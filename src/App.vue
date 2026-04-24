<template>
  <v-app>
    <v-main>
      <v-app-bar>
        <template v-slot:prepend>
          <v-icon icon="mdi-infinity" class="m-2" />
        </template>

        <v-app-bar-title>
          infiniti <span class="text-red-600">red</span>
        </v-app-bar-title>

        <template v-slot:append>
          <v-btn
            icon="mdi-theme-light-dark"
            class="m-2"
            @click="$vuetify.theme.cycle()"
          />
        </template>
      </v-app-bar>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup></script>
