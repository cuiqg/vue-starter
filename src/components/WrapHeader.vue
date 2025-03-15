<template>
  <nav class="w-full px-4 py-6">
    <ul class="m-0 flex flex-row list-none justify-center gap-6 p-0">
      <li class="children:(flex items-center justify-center gap-x-2 rounded-full bg-neutral-950 px-4 py-2 text-sm text-white font-semibold tracking-1 transition hover:bg-neutral-800)">
        <RouterLink :to="{ name: 'HomePage' }">
          <ri:home-line />
          <span>
            {{ $t('menu.home') }}
          </span>
        </RouterLink>
      </li>

      <li class="children:(flex items-center justify-center gap-x-2 rounded-full bg-neutral-950 px-4 py-2 text-sm text-white font-semibold tracking-1 transition hover:bg-neutral-800)">
        <RouterLink :to="{ name: 'UserPage' }">
          <ri:user-line />
          <span>
            {{ $t('menu.user') }}
          </span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
