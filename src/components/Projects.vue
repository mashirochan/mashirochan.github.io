<template>
   <v-card variant="tonal">
      <v-card-title>Projects</v-card-title>
      <v-sheet class="flex" elevation="2" variant="tonal">
         <v-tabs
            v-model="projectTab"
            direction="vertical"
            :color="primaryColor"
            grow
         >
            <v-tab value="ffxiv" variant="tonal">
               <template v-slot:prepend>
                  <v-avatar>
                     <v-img alt="Dalamud" src="../assets/logo_dalamud.png" />
                  </v-avatar>
               </template>
               FFXIV
            </v-tab>

            <v-tab value="holocure" variant="tonal">
               <template v-slot:prepend>
                  <v-avatar>
                     <v-img alt="HoloCure" src="../assets/logo_holocure.png" />
                  </v-avatar>
               </template>
               HoloCure
            </v-tab>

            <v-tab value="mhw" variant="tonal">
               <template v-slot:prepend>
                  <v-avatar>
                     <v-img
                        alt="Monster Hunter Wilds"
                        src="../assets/logo_mhw.png"
                     />
                  </v-avatar>
               </template>
               Monster Hunter Wilds
            </v-tab>
         </v-tabs>

         <v-divider vertical></v-divider>

         <v-tabs-window v-model="projectTab" class="flex-[1_1_auto]">
            <v-tabs-window-item value="ffxiv">
               <v-sheet class="p-5">Dalamud plugins</v-sheet>
            </v-tabs-window-item>
            <v-tabs-window-item value="holocure">
               <v-sheet class="p-5">YYToolkit mods</v-sheet>
            </v-tabs-window-item>
            <v-tabs-window-item value="mhw">
               <v-sheet class="p-5">REFramework mods</v-sheet>
            </v-tabs-window-item>
         </v-tabs-window>
      </v-sheet>
   </v-card>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useTheme } from "vuetify";

const projectTab = ref("ffxiv");
const theme = useTheme();
const primaryColor = computed(() => String(theme.current.value.colors.primary));
</script>
