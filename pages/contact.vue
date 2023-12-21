<template>
  <div v-auto-animate class="flex flex-col gap-8 text-lg">
    <div
      v-for="contact of contacts"
      :key="contact.label"
      class="relative w-full rounded-lg shadow ring-1 ring-bego-1"
      :class="{ 'hover:bg-bego-5/10 hover:ring-2': contact.href }"
    >
      <div class="px-4 py-5 sm:p-6">
        <NuxtLink
          v-if="contact.href"
          :to="contact.href"
          rel="noopener noreferrer"
          target="_blank"
          class="focus:outline-none"
        >
          <span class="absolute inset-0" aria-hidden="true" />
        </NuxtLink>
        <div class="mb-6 flex">
          <span class="h-10 w-10 text-bego-0" :class="[{ 'cursor-pointer': contact.href}, contact.icon]" />
        </div>
        <p class="text-lg font-semibold">
          {{ contact.label }}
        </p>
        <p class="mt-1 text-base">
          <span>{{ contact.description }}</span>
          <kbd v-if="contact.kbd" class="ml-1 rounded bg-bego-5 px-1 font-mono ring-1 ring-bego-0 ring-inset">
            {{ contact.kbd }}
          </kbd>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const contacts = ref([
  { label: 'Malt', href: 'https://www.malt.fr/profile/tcastanie', icon: 'i-mingcute-laptop-2-line', description: 'Embauchez-moi pour vos projets web.' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tcastanie', icon: 'i-mingcute-linkedin-line', description: 'Connectons-nous !' },
  { label: 'Courriel', icon: 'i-mingcute-mail-line', description: 'Contactez-moi directement', kbd: 'contact@tcastanie.dev' }
])
</script>
