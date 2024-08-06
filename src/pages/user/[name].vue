<script setup>
defineOptions({
  name: 'UserDetailPage'
})
const route = useRoute()
const userStore = useUserStore()
const { t } = useI18n()

watchEffect(() => {
  userStore.setNewUser(route.params.name)
})
</script>

<template>
  <div class="text-center">
    {{ t('user.hi', { name: userStore.currentUser }) }}
  </div>
</template>

<route lang="yaml">
name: UserDetailPage
meta:
  title: User
</route>
