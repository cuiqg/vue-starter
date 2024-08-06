<script setup>
defineOptions({
  name: 'HomePage'
})
const { t } = useI18n()
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center p-6 text-center">
    <ri:home-line /> {{ t('home') }}
  </div>
</template>

<route lang="yaml">
name: HomePage
meta:
  title: Home
</route>
