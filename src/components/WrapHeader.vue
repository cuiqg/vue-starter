<template>
  <nav class="px-4 py-6 w-full">
    <ul
      class="[&_li_a]:text-md m-0 p-0 list-none flex flex-row gap-x-6 justify-center [&_li]:(text-white p-x-4 p-y-1 border border-zinc-950 rounded-full border-solid bg-zinc-950 inline-flex gap-x-2 items-center justify-center) [&_li_a]:(inline-flex gap-x-2 items-center justify-center)"
    >
      <li>
        <RouterLink :to="{ name: 'HomePage' }">
          <i-mingcute:home-1-line class="h-[1em] w-[1em]" />
          <span>
            {{ $t('home') }}
          </span>
        </RouterLink>
      </li>

      <li>
        <RouterLink :to="{ name: 'UserPage' }">
          <i-mingcute:user-1-line class="h-[1em] w-[1em]" />
          <span>
            {{ $t('user') }}
          </span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
