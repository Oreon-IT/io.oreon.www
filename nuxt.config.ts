import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-8VFRF7YQPW",
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8VFRF7YQPW');
        `,
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
      title: "Oreon",
      meta: [
        {
          name: "description",
          content: "Custom Web Development by Oreon",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "./favicon.png",
        },
      ],
    },
  },
  devtools: { enabled: true },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  vite: {
    vue: {
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
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    tsConfig: {
      exclude: ["../netlify"],
    },
  },
});
