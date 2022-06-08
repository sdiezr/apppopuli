<template>
  <div>
    <div v-if="progressInfos">
      <div class="mb-2"
        v-for="(progressInfo, index) in progressInfos"
        :key="index">
        <span>{{progressInfo.fileName}}</span>
        <div class="progress">
          <div class="progress-bar progress-bar-info"
            role="progressbar"
            :aria-valuenow="progressInfo.percentage"
            aria-valuemin="0"
            aria-valuemax="100"
            style="background-color: #178649"
            :style="{ width: progressInfo.percentage + '%' }">
            {{progressInfo.percentage}}%
          </div>
        </div>
      </div>
    </div>


    <label class="boton_examinar btn">
        <v-icon color="#178649" size=17>mdi-camera</v-icon>
        SELECCIONAR ARCHIVOS
        <input style="display: none" type="file" multiple @change="selectFile">
    </label>

    <button  class="boton_subir btn"
      :disabled="!selectedFiles"
      @click="uploadFiles">
      SUBIR ARCHIVOS
    </button>

    <br><br>

    <div v-if="message" class="alert alert-light" role="alert">
      <ul>
        <li v-for="(ms, i) in message.split('\n')" :key="i">
          {{ ms }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

    import FileService from "../services/FileService";

    export default {
    name: "upload-files",
    data() {
        return {
        selectedFiles: undefined,
        progressInfos: [],
        message: "",

        fileInfos: [],
        };
    },
    methods: {
      selectFile(event) {
        this.progressInfos = [];
        this.selectedFiles = event.target.files;
      },

      upload(idx, file) {
        this.progressInfos[idx] = { percentage: 0, fileName: file.name };

        FileService.upload(file, (event) => {
        this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
        })
            .then((response) => {
            let prevMessage = this.message ? this.message + "\n" : "";
            this.message = prevMessage + response.data.message;

            return FileService.getFiles();
            })
            .then((files) => {
            this.fileInfos = files.data;
            })
            .catch(() => {
            this.progressInfos[idx].percentage = 0;
            this.message = "El archivo no se ha podido enviar correctamente: " + file.name;
            });
      },

      uploadFiles() {
        this.message = "";

        for (let i = 0; i < this.selectedFiles.length; i++) {
            this.upload(i, this.selectedFiles[i]);
        }
      }
    },
    mounted() {
        FileService.getFiles().then((response) => {
        this.fileInfos = response.data;
        });
    }
    };

</script>

<style>

    .boton_examinar {
        font-size: 15px;
        width: 100%;
        color: #178649;
        background-color: white;
        border-color: #178649;
    }

    .boton_examinar:hover {
        color: #178649;
    }

    .boton_subir {
        font-size: 15px;
        width: 100%;
        color: white;
        background-color: #178649;
    }

    .boton_subir:hover {
        color: white;
    }

</style>
