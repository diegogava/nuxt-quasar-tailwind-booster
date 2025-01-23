<template>
<q-btn v-font="$getFont('RobotoOverride', 500, 'normal')" />
</template>
<script setup lang="ts">

const { $getFont } = useBoosterFonts()

</script>

<style scoped>

.q-btn {
  font-family: unset;
}

</style>