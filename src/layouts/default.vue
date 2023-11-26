<template>
  <main class="mx-auto h-full max-w-[720px] w-full">
    <WrapHeader />
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route" />
    </router-view>
  </main>
</template>
