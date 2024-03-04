<template>
  <div v-auto-animate class="flex flex-col gap-8 text-lg">
    <NuxtImg
      v-if="shitMode"
      src="/contact.gif"
      alt="contact"
      format="gif"
      width="141"
      height="52"
      class="mx-auto"
    />
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
          <div class="mb-6 flex">
            <span v-if="!shitMode || contact.label !== 'Courriel'" class="h-10 w-10 text-bego-0" :class="[{ 'cursor-pointer': contact.href}, contact.icon]" />
            <NuxtImg
              v-if="shitMode && contact.label === 'Courriel'"
              src="/mail.gif"
              alt="mail"
              format="gif"
              width="60"
              height="60"
            />
          </div>
          <p class="text-lg font-semibold">
            {{ contact.label }}
          </p>
          <p class="mt-1 text-base">
            <span>{{ contact.description }}</span>
            <kbd v-if="contact.kbd" class="ml-2 rounded bg-bego-5 px-1 font-sans ring-1 ring-bego-0 ring-inset">
              {{ contact.kbd }}
            </kbd>
          </p>
        </NuxtLink>
      </div>
    </div>
    <NuxtImg
      v-if="shitMode"
      src="/email.gif"
      alt="email"
      format="gif"
      width="107"
      height="35"
      class="mx-auto"
    />
  </div>
</template>

<script lang="ts" setup>
const shitMode = useState('shitMode')
const contacts = ref([
  { label: 'Malt', href: 'https://www.malt.fr/profile/tcastanie', icon: 'i-mingcute-laptop-2-line', description: 'Embauchez-moi pour vos projets web.' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tcastanie', icon: 'i-mingcute-linkedin-line', description: 'Connectons-nous !' },
  { label: 'Courriel', href: 'mailto:contact@tcastanie.dev', icon: 'i-mingcute-mail-send-line', description: 'Contactez-moi directement', kbd: 'contact@tcastanie.dev' }
])
</script>
