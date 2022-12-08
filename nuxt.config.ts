// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      hints: {
        hintBG: '#eeeeee',
        headBG: '#aaaaaa',
        types: {
          zap: {
            title: 'Zap!',
            desc: "It's electrifying!",
          },
          explode: {
            symbol: '🤯',
            title: 'WOW!',
            desc: 'Mind BLOWN',
          },
        },
      },
    },
  },
});
