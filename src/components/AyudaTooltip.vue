<template>
    <v-tooltip top slot="append-outer">
        <template v-slot:activator="{ on }">
            <v-icon
                v-on="on"
                size="20"
                color="#178649">
                mdi-help
            </v-icon>
        </template>
        <span>si me disculpa</span>
    </v-tooltip>
</template>