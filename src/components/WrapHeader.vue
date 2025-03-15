<script setup>
const { t, locale, availableLocales } = useI18n({ useScope: 'global' })
</script>

<template>
  <nav class="w-full px-4 py-6">
    <ul class="[&_li_a]:text-md m-0 flex flex-row list-none justify-center gap-x-6 p-0 [&_li_a]:(inline-flex items-center justify-center gap-x-2) [&_li]:(inline-flex items-center justify-center gap-x-2 border border-zinc-950 rounded-full border-solid bg-zinc-950 p-x-4 p-y-1 text-white)">
      <li>
        <RouterLink :to="{ name: 'HomePage' }">
          <ri:home-line class="h-[1em] w-[1em]" />
          <span>
            {{ t('menu.home') }}
          </span>
        </RouterLink>
      </li>

      <li>
        <RouterLink :to="{ name: 'UserPage' }">
          <ri:user-line class="h-[1em] w-[1em]" />
          <span>
            {{ t('menu.user') }}
          </span>
        </RouterLink>
      </li>
      <li>
        <select
          v-model="locale"
          class="bg-zinc-950 focus:(outline-none)"
        >
          <option
            v-for="item in availableLocales"
            :key="item"
            :value="locale"
          >
            {{ item }}
          </option>
        </select>
      </li>
    </ul>
  </nav>
</template>
