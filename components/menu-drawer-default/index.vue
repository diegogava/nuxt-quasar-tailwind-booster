<template>
    <div v-font="[
            $getFont('RobotoOverride', 400, 'normal'),
            $getFont('RobotoOverride', 400, 'normal', { selector: 'span' }),
            $getFont('RobotoOverride', 700, 'normal', { selector: 'h2' }),
            $getFont('RobotoOverride', 700, 'normal', { selector: 'strong' }),
            $getFont('RobotoOverride', 500, 'normal', { selector: '.q-item__section' }),

            $getFont('RobotoOverride', 300, 'italic', { selector: 'em' }),
        ]">

        <q-layout view="hHh Lpr lff" container style="height: 300px">
            <q-header>
                <q-toolbar>
                    <q-btn flat @click="navigationDrawer = !navigationDrawer" round dense icon="menu">
                    </q-btn>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                      </q-avatar>
                    <q-toolbar-title class="pl-0">
                        Header Default
                    </q-toolbar-title>
                </q-toolbar>
            </q-header>
            <q-drawer
                v-model="navigationDrawer"
                show-if-above
                :width="240"
                :breakpoint="700">
                <q-scroll-area class="fit">
                    <q-list>
                        <template v-for="(item, index) in drawerListItems" :key="index">
                            <q-item :href="item.href"
                                :to="item.to"
                                role="menuitem"
                                :target="item.href ? '_blank' : ''"
                                v-ripple>
                                <q-item-section avatar>
                                    <q-icon :name="item.icon"
                                        color="primary"/>
                                </q-item-section>
                                <q-item-section>
                                    {{ item.label }}
                                </q-item-section>
                            </q-item>
                            <q-separator :key="'sep' + index"  v-if="item.separator"/>
                        </template>

                    </q-list>
                    <q-expansion-item  v-for="(expansionItem, index) in drawerExpansionListItems" :key="index">
                        <template v-slot:header>
                            <q-item-section avatar>
                            <q-icon :name="expansionItem.icon" color="primary" />
                            </q-item-section>
                            <q-item-section>
                            {{expansionItem.label}}
                            </q-item-section>
                        </template>
                        <q-list>
                            <template v-for="(item, index) in expansionItem.items" :key="index">
                                <q-item :href="item.href"
                                    :to="item.to"
                                    role="menuitem"
                                    :target="item.href ? '_blank' : ''"
                                    v-ripple>
                                    <q-item-section avatar>
                                        <q-icon v-if="item.color"
                                            name="square"
                                            :style="{'background-color': item.color, 'color': item.color}"/>
                                        <q-icon v-else :name="item.icon"
                                            color="primary"/>
                                    </q-item-section>
                                    <q-item-section>
                                        {{ item.label }}
                                    </q-item-section>
                                </q-item>
                                <q-separator :key="'sep' + index"  v-if="item.separator"/>
                            </template>
                        </q-list>
                        </q-expansion-item>
                </q-scroll-area>
            </q-drawer>
        </q-layout>
    </div>
</template>
<script setup lang="ts">

    // Environment Variables
    // const config = useRuntimeConfig()

    // Schemes
    import GenresSchema from '~/schemes/genres.json'

    // // Components
    // import Drawer from '@/components/drawer/index.vue'


    // Fonts
    const { $getFont } = useBoosterFonts()



    // // Quasar
    // const quasar = useQuasar()

     // Environment Variables
    const config = useRuntimeConfig()


    // Data
    const messages: {
        available: {
            appStore: string;
            playStore: string;
        };
        faqAlt: string;
        login: string;
        menu: string;
        register: string;
        search: string;
        snackbar: {
            close: string;
        };
        termsAndPolicyItem: string;
    } = {
        available: {
            appStore: 'Disponível na AppStore!',
            playStore: 'Disponível na Play Store!',
        },
        faqAlt: 'Cineship responde às perguntas mais frequentes!',
        login: 'Entrar',
        menu: 'Menu',
        register: 'Criar uma conta',
        search: 'Busque na Cineship ...',
        snackbar: {
            close: 'Fechar'
        },
        termsAndPolicyItem: 'Política de Privacidade'
    }

    // Drawer
    const navigationDrawer = ref(false)

    const drawerListItems = [
        {
            id: 'home',
            label: 'Início',
            icon: 'home',
            to: '/',
            separator: false,
        },
        {
            id: 'roulette',
            label: 'Roleta',
            icon: 'playlist_play',
            to: '/?roleta=true',
            separator: false,
            customIcon: true,
        },
        {
            id: 'reviews',
            label: 'Críticas',
            icon: 'rate_review',
            to: '/criticas',
            separator: false,
        },
        {
            id: 'users',
            label: 'Usuários',
            icon: 'groups',
            to: '/usuarios',
            separator: false,
        },
    ]

    const drawerExpansionListItems = [
        {
            id: 'providers',
            label: 'Plataformas',
            icon: 'play_circle',
            separator: false,
            items: [],
            // items: providers.map((provider: Provider) => {
            //     return {
            //         label: provider.shortName,
            //         to: provider.url,
            //         icon: 'img:' + provider.logoPathComplete,

            //     }
            // }),
        },
        {
            id: 'genres',
            label: 'Gêneros',
            icon: 'playlist_play',
            separator: false,
            // items: [],
            items: GenresSchema.map((genre: any) => {
                return {
                    label: genre.name,
                    to: `/genero/${genre.slug}`,
                    color: genre.color_hex,
                }
            }),
        },
        {
            id: 'apps',
            label: 'Aplicativo',
            icon: 'smartphone',
            separator: false,
             items: [
                {
                    label: 'Google Play',
                    href: config.public.PLAY_STORE_LINK,
                   icon: 'playlist_play',

                },
                {
                    label: 'App Store',
                    href: config.public.APPSTORE_LINK,
                    icon: 'apple',

                }
             ],
        },
        {
            id: 'about',
            label: 'Sobre',
            icon: 'info',
            separator: false,
            items: [
                {

                    label: 'FAQ / Dúvidas',
                    icon: 'help',
                    to: '/faq',
                },
                {
                    label: 'Privacidade',
                    icon: 'description',
                    to: '/privacidade',
                },
                {
                    label: 'Contato',
                    icon: 'email',
                    href: 'mailto:contato@cineship.com',
                }
            ],
        },

    ]

    function openDialogSearch() {
    }


</script>