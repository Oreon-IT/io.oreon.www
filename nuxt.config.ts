import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins?.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
      script: {
        propsDestructure: true,
      },
    },
    plugins: [
      svgLoader({
        svgoConfig: {
          // Prevent multiple gradients with same ID being generated
          plugins: ["prefixIds"],
        },
      }),
    ],
  },
  css: [, "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
