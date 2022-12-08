declare module '@nuxt/types/config/runtime' {
  interface NuxtRuntimeConfig {
    hintTypes: [
      key: string,
      value: {
        symbol?: string;
        title: string;
        desc: string;
      }[]
    ];
  }
}
