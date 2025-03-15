<script setup>
const router = useRouter()

const { t } = useI18n()
</script>

<template>
  <main class="mx-auto h-full max-w-2xl w-full flex flex-col items-center justify-center gap-y-10 p-10">
    <RouterView />
    <div class="w-full flex items-center justify-center">
      <button
        class=""
        @click="router.back()"
      >
        <ri:home-3-line />
        <span>
          {{ t('not-found') }}
        </span>
      </button>
    </div>
  </main>
</template>
