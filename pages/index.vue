<script setup lang="ts">
    import { useHydration } from 'quasar'
    const { isHydrated } = useHydration()

    // Fonts
    const { $getFont } = useBoosterFonts()

    // Booster
    import boosterHydrate from '#booster/hydrate'
    const hydrate = useBoosterHydrate()

    // Components
    const MenuFooter = hydrate(() => import('@/components/menu-footer/index.vue'))

    import MenuDrawer from '@/components/menu-drawer/index.vue'
    import Edit from '@/components/edit/index.vue'
    // const MenuDrawerDefault = hydrate(() => import('@/components/menu-drawer-default/index.vue'))


    const ElementButtonPrimary = hydrate(() => import('@/components/element/Button/Primary.vue'))
    const ElementButtonSecondary = hydrate(() => import('@/components/element/Button/Secondary.vue'))
    const ElementButtonTeritary = hydrate(() => import('@/components/element/Button/Teritary.vue'))

</script>
<template>
    <!-- <menu-drawer-default critical></menu-drawer-default> -->
    <ElementButtonPrimary critical label="Primary" />
    <ElementButtonSecondary critical label="Secondary" />
    <ElementButtonTeritary critical label="Teritary" />

    <menu-footer critical></menu-footer>
    <menu-drawer critical></menu-drawer>
    <edit></edit>
</template>
