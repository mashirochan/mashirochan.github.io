<template>
   <v-app>
      <v-app-bar scroll-behavior="elevate">
         <v-icon icon="mdi-infinity" class="m-2" />

         <v-app-bar-title>
            infiniti
            <span :style="{ color: primaryColor }">red</span>
         </v-app-bar-title>

         <v-tabs v-model="tab" :color="primaryColor">
            <v-tab value="about">About</v-tab>
            <v-tab value="projects">Projects</v-tab>
            <v-tab value="sites">Sites</v-tab>
            <v-tab value="misc">Misc.</v-tab>
            <v-tab value="stream">Stream</v-tab>
         </v-tabs>

         <v-spacer />

         <v-btn
            icon="mdi-github"
            class="m-2"
            href="https://github.com/mashirochan/mashirochan.github.io"
            target="_blank"
         />
         <v-btn
            icon="mdi-theme-light-dark"
            class="m-2"
            @click="$vuetify.theme.cycle()"
         />
      </v-app-bar>

      <v-main>
         <v-tabs-window v-model="tab">
            <v-tabs-window-item value="about">
               <About />
            </v-tabs-window-item>

            <v-tabs-window-item value="projects">
               <Projects />
            </v-tabs-window-item>

            <v-tabs-window-item value="sites"></v-tabs-window-item>

            <v-tabs-window-item value="misc"></v-tabs-window-item>

            <v-tabs-window-item value="stream">
                <Stream />
            </v-tabs-window-item>
         </v-tabs-window>
      </v-main>
   </v-app>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useTheme } from "vuetify";
import Projects from "./components/Projects.vue";
import About from "./components/About.vue";
import Stream from "./components/Stream.vue";

const tabs = ["about", "projects", "sites", "misc", "stream"] as const;

function tabFromPath(pathname: string) {
   const path = pathname.replace(/^\/+|\/+$/g, "");
   return tabs.includes(path as (typeof tabs)[number]) ? path : "projects";
}

const redirect = new URLSearchParams(window.location.search).get("redirect");
if (redirect?.startsWith("/")) {
   window.history.replaceState({}, "", redirect);
}

const tab = ref(tabFromPath(window.location.pathname));
const theme = useTheme();
const primaryColor = computed(() => String(theme.current.value.colors.primary));

watch(tab, (value) => {
   const path = value === "projects" ? "/" : `/${value}`;
   if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
   }
});

function updateTabFromPath() {
   tab.value = tabFromPath(window.location.pathname);
}

onMounted(() => window.addEventListener("popstate", updateTabFromPath));
onBeforeUnmount(() => window.removeEventListener("popstate", updateTabFromPath));
</script>
