<template>
    <l-map
        ref="map"
        zoom=18
        style="z-index: 0"
        @dblclick="onMapClick"
        :center="[
            position.lat || userLocation.lat || defaultLocation.lat,
            position.lng || userLocation.lng || defaultLocation.lng]">
        <l-geosearch :options="geoSearchOptions" />
        <l-tile-layer
            :url="tileProvider.url"
            :attribution="tileProvider.attribution" />
        <l-marker
            v-if="position.lat && position.lng"
            visible
            draggable
            :icon="icon"
            :lat-lng.sync="position"
            @dragstart="dragging = true"
            @dragend="dragging = false">
        </l-marker>
    </l-map>
</template>

<script>

    import { LMap, LTileLayer, LMarker } from "vue2-leaflet"
    import { OpenStreetMapProvider } from "leaflet-geosearch"
    import LGeosearch from "vue2-leaflet-geosearch"
    import { icon } from "leaflet"

    export default {
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LGeosearch
        },

        props: {
            value: {
                type: Object,
                required: true
            },

            defaultLocation: {
                type: Object,
                default: () => ({
                    lat: 42.55057050005772,
                    lng: -6.598203246805054
                })
            }
        },

        data () {
            return {
                loading: false,
                geoSearchOptions: {
                    provider: new OpenStreetMapProvider(),
                    showMarker: false,
                    autoClose: true
                },
                userLocation: {},
                icon: icon ({
                    iconUrl: require("leaflet/dist/images/marker-icon.png"),
                    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
                }),
                position: {},
                address: "",
                dragging: false,
                tileProvider: {
                    attribution:
                    '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                }
            }
        },

        mounted() {
            this.getUserPosition();
            this.$refs.map.mapObject.on("geosearch/showlocation", this.onSearch)
        },

        watch: {
            position: {
                deep: true,
                async handler(value) {
                    this.address = await this.getAddress();
                    this.$emit("input", { position: value, address: this.address });
                }
            }
        },

        methods: {
            async getUserPosition() {
                // comprueba que el navegador soporta la API de geolocalizacion
                if (navigator.geolocation) {
                    // obtiene la localizacion
                    navigator.geolocation.getCurrentPosition(pos => {
                        // establece la localizacion del usuario
                        this.userLocation = {
                            lat: pos.coords.latitude,
                            lng: pos.coords.longitude
                        };
                    });
                }
            },

            async getAddress () {
                this.loading = true;
                let address = "Unresolved address";
                try {
                    const { lat, lng } = this.position;
                    const result = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
                    );
                    if (result.status === 200) {
                    const body = await result.json();
                    address = body.display_name;
                    }
                } catch (e) {
                    console.error("Reverse Geocode Error->", e);
                }
                this.loading = false;
                return address;
            },

            onMapClick (value) {
                // mueve el marcador al punto donde se ha clicado
                this.position = value.latlng;
            },

            onSearch (value) {
                const loc = value.location;
                this.position = { lat: loc.y, lng: loc.x };
            }
        }
    }

</script>
