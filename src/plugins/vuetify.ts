/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com
 */

import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "../styles/layers.css";
import "vuetify/styles";

export default createVuetify({
   theme: {
      defaultTheme: "system",
      utilities: false,
      themes: {
         light: {
            colors: {
               primary: "#FF6262"
            }
         },
         dark: {
            colors: {
               primary: "#FF6262"
            }
         }
      }
   },
   display: {
      mobileBreakpoint: "md",
      thresholds: {
         xs: 0,
         sm: 600,
         md: 960,
         lg: 1280,
         xl: 1920,
         xxl: 2560
      }
   }
});
