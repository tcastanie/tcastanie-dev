<script setup lang="ts">
const { t } = useI18n()
const { partyMode } = usePartyMode()

useHead({ titleTemplate: '%siteName' })
defaultOgImage('Thibaut Castanié')

const features = ref([
  {
    description: t('home1'),
    icon: 'i-mingcute-layout-6-line',
    ui: { description: 'text-lg', leadingIcon: 'mt-0.5' },
  },
  {
    description: t('home2'),
    icon: 'i-mingcute-chart-bar-2-line',
    ui: { description: 'text-lg', leadingIcon: 'mt-0.5' },
  },
  {
    description: t('home3'),
    icon: 'i-mingcute-code-line',
    ui: { description: 'text-lg', leadingIcon: 'mt-0.5' },
  },
  {
    description: t('home4'),
    icon: 'i-mingcute-briefcase-line',
    ui: { description: 'text-lg', leadingIcon: 'mt-0.5' },
  },
])

const links = ref([
  {
    label: t('nav1'),
    icon: 'i-mingcute-folder-open-2-line',
    to: '/portfolio',
    variant: 'soft',
  },
  {
    label: t('nav2'),
    icon: 'i-mingcute-profile-line',
    to: '/cv',
    variant: 'soft',
  },
])
</script>

<template>
  <UPage>
    <UPageBody>
      <UPageSection
        :description="$t('hello')"
        orientation="horizontal"
        :features="features"
        :ui="{ description: 'text-lg', links: 'flex-col' }"
      >
        <template #top>
          <div class="relative h-63 content-end overflow-hidden w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <UUser
              :avatar="{
                src: '/avatar.jpg',
                alt: 'Thibaut Castanié photo',
                quality: 95,
                width: 64,
                height: 64,
              }"
              size="3xl"
              :ui="{ root: 'gap-4', avatar: 'size-16' }"
              class="mb-16 [view-transition-name:uuser]"
              :class="{ 'animate-bounce': partyMode }"
            >
              <template #default>
                <h1 class="font-medium text-highlighted font-hubot text-4xl">
                  Thibaut Castanié
                </h1>
                <h2 class="text-muted font-normal text-2xl tracking-normal">
                  {{ $t('main_subtitle') }}
                </h2>
              </template>
            </UUser>
            <InteractiveGridPattern
              class="mask-[radial-gradient(300px_circle_at_center,white,transparent)] inset-0 h-[200%] -skew-x-6 -skew-y-3"
            />
          </div>
        </template>
        <template #links>
          <div class="text-muted text-pretty text-lg">
            {{ $t('home5') }}
          </div>
          <div class="flex flex-wrap gap-x-6 gap-y-3 justify-start mt-8 ">
            <DrawerContact>
              <UButton
                :label="$t('contact_me')"
                size="lg"
              >
                <template #leading>
                  <img v-if="partyMode" src="/gifs/mail.gif" width="20" height="20">
                  <UIcon v-else name="i-mingcute-send-plane-line" class="size-5" />
                </template>
              </UButton>
            </DrawerContact>
            <ButtonLocale
              v-for="{ label, icon, to, variant } in links"
              :key="label"
              size="lg"
              :label :icon :variant :to
            />
          </div>
        </template>
        <ThePlanet />

        <template v-if="partyMode">
          <img src="/gifs/alien.gif" width="90" height="200" class="absolute right-0 bottom-0">
          <img src="/gifs/ufo.gif" width="200" height="42" class="absolute left-0 bottom-0">
        </template>
      </UPageSection>
    </UPageBody>
  </UPage>
</template>
