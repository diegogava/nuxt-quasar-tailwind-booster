// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    components: {
        dirs: []
    },
    css: [
        '@/styles/css/tailwind.css',
    ],
    experimental: {
        renderJsonPayloads: false,
    },
    modules: [
    'nuxt-booster',
    'nuxt-quasar-ui',
    '@nuxtjs/tailwindcss',
    ],
    nitro: {
      compressPublicAssets: true,
  },
  booster: {

    detection: {
      performance: true,
      browserSupport: true
    },
    fonts: [{
            family: 'RobotoOverride',
            locals: ['Roboto'],
            fallback: ['Georgia', 'sans-serif'],
            variances: [
                {
                    style: 'normal',
                    weight: 900,
                    sources: [
                        {
                            src: '@/assets/fonts/roboto-v47-latin/roboto-v47-latin-900.woff2',
                            type: 'woff'
                        },
                    ]
                },
                    {
                        style: 'italic',
                        weight: 900,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto-v47-latin/roboto-v47-latin-900italic.woff2',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'normal',
                        weight: 700,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto-v47-latin/roboto-v47-latin-700.woff2',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'italic',
                        weight: 700,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto-v47-latin/roboto-v47-latin-700italic.woff2',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'italic',
                        weight: 400,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto-v47-latin/roboto-v47-latin-italic.woff2',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'normal',
                        weight: 300,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto-v47-latin/roboto-v47-latin-300.woff2',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'italic',
                        weight: 300,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto-v47-latin/roboto-v47-latin-300italic.woff2',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'normal',
                        weight: 500,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto-v47-latin/roboto-v47-latin-500.woff2',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'italic',
                        weight: 500,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto-v47-latin/roboto-v47-latin-500italic.woff2',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'normal',
                        weight: 400,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto-v47-latin/roboto-v47-latin-regular.woff2',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'normal',
                        weight: 100,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto-v47-latin/roboto-v47-latin-100.woff2',
                                type: 'woff'
                            },
                        ]
                    },
                    // {
                    //     style: 'italic',
                    //     weight: 100,
                    //     sources: [
                    //         {
                    //             src: '@/assets/fonts/roboto-v47-latin/roboto-v47-latin-100italic.woff2',
                    //             type: 'woff'
                    //         },
                    //     ]
                    // },
                ]
            }

        ],

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },

    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }

  },
    quasar: {
        config: {
            dark: true,
            brand: {
                primary: '#FF1744',
                secondary: '#FFFFFF',
                accent: '#ff0033',

                dark: '#1d1d1d',
                'dark-page': '#121212',

                positive: '#21BA45',
                negative: '#ff0033',
                info: '#31CCEC',
                warning: '#F2C037'
              },
        },
        plugins: [
          'BottomSheet',
          'Dialog',
          'Loading',
          'LoadingBar',
          'Notify',
          'Dark',
        ],
        extras: {
          font: null,
          //fontIcons: ["mdi-v6"],
        },
        components: {
          defaults: {
            // QBtn: {
            //   unelevated: true,
            // },
          },
        },
    },
    ssr: true,
})
