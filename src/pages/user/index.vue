<script setup>
const router = useRouter()
const value = ref('')
</script>

<template>
  <div class="mx-auto max-w-320px w-full">
    <input
      v-model="value"
      type="text"
      name="name"
      class="px-4 border rounded-full h-[40px] w-full"
      placeholder="whats-your-name"
      @keydown.enter="router.push({ name: 'UserDetailPage', params: { name: value } })"
    >
  </div>
</template>

<route lang="yaml">
name: UserPage
meta:
  title: User
</route>
