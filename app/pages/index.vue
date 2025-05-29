<script setup lang="ts">
const { t } = useI18n()

defaultOgImage('Thibaut Castanié')

const features = ref([
  {
    description: t('home1'),
    icon: 'i-mingcute-layout-6-line',
    ui: { description: 'text-lg', leadingIcon: 'mt-0.5' },
  },
  {
    description: t('home2'),
    icon: 'i-mingcute-code-line',
    ui: { description: 'text-lg', leadingIcon: 'mt-0.5' },
  },
  {
    description: t('home3'),
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
        <template #title>
          <div class="relative grid h-[240px] content-end overflow-hidden">
            <UUser
              :description="$t('main_subtitle')"
              :avatar="{
                src: '/profile-photo.jpg',
                alt: 'Thibaut Castanié',
                quality: 95,
                width: 64,
                height: 64,
              }"
              size="3xl"
              :ui="{ description: 'font-normal text-2xl tracking-normal', root: 'gap-4', avatar: 'size-16' }"
              class="mb-16"
            >
              <template #name>
                <h1 class="font-medium text-highlighted font-hubot text-4xl">
                  Thibaut Castanié
                </h1>
              </template>
            </UUser>
            <InteractiveGridPattern
              class="[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] inset-0 h-[200%] -skew-x-6 -skew-y-3"
            />
          </div>
        </template>
        <template #links>
          <div class="text-muted text-pretty text-lg">
            {{ $t('home4') }}
          </div>
          <div class="flex flex-wrap gap-x-6 gap-y-3 justify-start mt-8 ">
            <DrawerContact>
              <UButton
                :label="$t('contact_me')"
                size="lg"
                icon="i-mingcute-send-plane-line"
              />
            </DrawerContact>
            <ButtonLocale
              v-for="{ label, icon, to, variant } in links"
              :key="label"
              size="lg"
              :label :icon :variant :to
            />
          </div>
        </template>
        <ClientOnly>
          <ThePlanet />
        </ClientOnly>
      </UPageSection>
    </UPageBody>
  </UPage>
</template>
