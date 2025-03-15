<script setup>
defineOptions({
  name: 'UserDetailPage'
})
const route = useRoute()
const userStore = useUserStore()

watchEffect(() => {
  userStore.setNewUser(route.params.name)
})
</script>

<template>
  <div class="text-center">
    {{ userStore.currentUser }}
  </div>
</template>

<route lang="yaml">
name: UserDetailPage
meta:
  title: User
</route>
