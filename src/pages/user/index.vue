<script setup>
defineOptions({
  name: 'UserPage'
})

const router = useRouter()
const value = ref('')
</script>

<template>
  <div class="mx-auto max-w-320px w-full">
    <input
      v-model="value"
      type="text"
      name="name"
      class="h-[40px] w-full border rounded-full px-4"
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
