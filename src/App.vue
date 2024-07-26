<script setup>
const route = useRoute()

useHead({
  title: () => route.meta?.title ?? '',
  titleTemplate: (title) => { return `${title ? `${title} | ` : ''}Tsuiqg.` },
  link: [
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ],
  meta: [
  ]
})
</script>

<template>
  <RouterView />
</template>
