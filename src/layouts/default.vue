<script setup>
const { t } = useI18n()
</script>

<template>
  <main class="mx-auto h-full max-w-[720px] w-full">
    <WrapHeader />
    <RouterView v-slot="{ Component, route }">
      <component
        :is="Component"
        :key="route"
      />
    </RouterView>

    [{{ t('button.go') }}]
  </main>
</template>
