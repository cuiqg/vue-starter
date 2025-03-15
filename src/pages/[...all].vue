<script setup>
defineOptions({
  name: 'NotFoundPage'
})

const { t } = useI18n()
</script>

<template>
  <div>
    {{ t('not-found') }}
  </div>
</template>

<route lang="yaml">
name: NotFoundPage
meta:
  title: NotFound
</route>
