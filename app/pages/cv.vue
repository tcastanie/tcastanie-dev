<script lang="ts" setup>
const { locale, t } = useI18n()

useSeoMeta({
  title: 'Curriculum Vitæ',
  description: t('my_skills'),
})
defaultOgImage()

const { data: cv } = await useAsyncData(`${locale.value}_cv`, () => {
  return queryCollection(`${locale.value}_cv`).first()
})

const links = shallowRef([
  {
    label: t('in_french'),
    icon: 'i-mingcute-pdf-line',
    to: '/cv/CV_Thibaut_Castanié.pdf',
    external: true,
    class: locale.value === 'fr' ? 'order-1' : 'order-2',
  },
  {
    label: t('in_english'),
    icon: 'i-mingcute-pdf-line',
    to: '/cv/CV_Thibaut_Castanié_EN.pdf',
    external: true,
    class: locale.value === 'fr' ? 'order-2' : 'order-1',
  },
])
const skills = shallowRef([
  { icon: 'i-simple-icons-javascript', label: 'JavaScript' },
  { icon: 'i-simple-icons-typescript', label: 'TypeScript' },
  { icon: 'i-simple-icons-vuedotjs', label: 'Vue.js' },
  { icon: 'i-simple-icons-nuxt', label: 'Nuxt' },
  { icon: 'i-simple-icons-directus', label: 'Directus' },
  { icon: 'i-simple-icons-tailwindcss', label: 'TailwindCSS' },
  { icon: 'i-simple-icons-unocss', label: 'UnoCSS' },
  { icon: 'i-simple-icons-css', label: 'CSS' },
  { icon: 'i-simple-icons-unjs', label: 'UnJS' },
  { icon: 'i-simple-icons-hono', label: 'Hono' },
  { icon: 'i-simple-icons-jest', label: 'Jest' },
  { icon: 'i-simple-icons-vitest', label: 'Vitest' },
  { icon: 'i-simple-icons-amazonsimpleemailservice', label: 'Amazon SES' },
  { icon: 'i-simple-icons-stripe', label: 'Stripe API' },
  { icon: 'i-simple-icons-git', label: 'Git' },
  { icon: 'i-simple-icons-graphql', label: 'GraphQL' },
  { icon: 'i-simple-icons-cloudflare', label: 'Cloudflare' },
  { icon: 'i-simple-icons-jamstack', label: 'Jamstack' },
])
</script>

<template>
  <UPage>
    <UPageHero
      title="Curriculum Vitæ"
      :description="$t('my_skills')"
      :links="links"
    />

    <UPageBody v-if="cv">
      <UContainer class="max-w-2xl">
        <UPageCard :description="cv.intro" variant="subtle" spotlight>
          <template #header>
            <UUser
              :name="cv.title"
              :description="cv.description"
              size="3xl"
              :avatar="{
                src: '/profile-photo.jpg',
                alt: 'Thibaut Castanié',
                quality: 95,
              }"
              :ui="{ name: 'font-hubot font-bold tracking-wider' }"
            />
            <div class="flex items-center gap-x-2 mt-4 text-toned">
              <UIcon name="i-mingcute-location-3-line" class="size-6" />
              <span>{{ cv.location }}</span>
            </div>
          </template>
        </UPageCard>
      </UContainer>

      <UPageMarquee pause-on-hover>
        <UTooltip
          v-for="{ icon, label } of skills"
          :key="label"
          :text="label"
          :delay-duration="0"
        >
          <UIcon :name="icon" class="size-16" />
        </UTooltip>
      </UPageMarquee>

      <UContainer class="max-w-2xl">
        <UPageList divide>
          <UPageCard
            v-for="{ title, description, icon, company, date_begin, date_end, actions } of cv.experiences"
            :key="title"
            :title="`${title}${company ? ` - ${company}` : ''}`"
            :description
            variant="ghost"
            :ui="{ leading: 'text-primary' }"
          >
            <template #leading>
              <UIcon v-if="icon" :name="icon" class="size-5 mr-2" />
              <span>{{ date_begin }} - {{ date_end }}</span>
            </template>
            <UPageFeature
              v-for="action of actions"
              :key="action.substring(0, 8)"
              :description="action"
              icon="i-mingcute-right-small-line"
            />
          </UPageCard>
        </UPageList>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
