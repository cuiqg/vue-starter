<template>
  <main class="h-full w-full">
    <WrapHeader />
    <RouterView v-slot="{ Component, route }">
      <component
        :is="Component"
        :key="route"
      />
    </RouterView>
  </main>
</template>
