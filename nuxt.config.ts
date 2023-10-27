// https://nuxt.com/docs/api/configuration/nuxt-config
import glsl from "vite-plugin-glsl";
export default defineNuxtConfig({
  imports: {
    dirs: ["stores"],
  },
  modules: [
    "@tresjs/nuxt",
    "@hypernym/nuxt-gsap",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "definePiniaStore", "storeToRefs"],
      },
    ],
    "@nuxtjs/device",
  ],

  css: [
    "@/assets/styles/main.scss",
    "@/assets/styles/labels.scss",
    "@tresjs/leches/dist/style.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/styles/variables.scss"; @import "@/assets/styles/mixins.scss";',
        },
      },
    },
    plugins: [glsl({ root: "/public/shaders/" })],
  },
});
