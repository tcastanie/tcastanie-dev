<script lang="ts" setup>
import { joinURL } from 'ufo'

const { locale, t } = useI18n()
const { partyMode } = usePartyMode()

useSeoMeta({ title: t('seo_cv_title'), description: t('seo_cv_desc') })
useHead({ titleTemplate: '%s' })
defaultOgImage(`CV ${t('of')} Thibaut Castanié`)

const siteConfig = useSiteConfig()
useSchemaOrg([
  defineWebPage({
    '@type': 'ProfilePage',
    'mainEntity': { '@id': joinURL(siteConfig.url, '/#identity') },
  }),
])

const { data: cv } = await useAsyncData(`${locale.value}_cv`, () => {
  return queryCollection(`${locale.value}_cv`).first()
})

const links = shallowRef([
  {
    label: t('in_french'),
    icon: 'i-mingcute-pdf-line',
    to: '/cv/cv-thibaut-castanie.pdf',
    external: true,
    class: locale.value === 'fr' ? 'order-1' : 'order-2',
  },
  {
    label: t('in_english'),
    icon: 'i-mingcute-pdf-line',
    to: '/cv/cv-thibaut-castanie-en.pdf',
    external: true,
    class: locale.value === 'fr' ? 'order-2' : 'order-1',
  },
])
const skills = shallowRef([
  { icon: 'i-simple-icons-javascript', label: 'JavaScript' },
  { icon: 'i-simple-icons-typescript', label: 'TypeScript' },
  { icon: 'i-simple-icons-vuedotjs', label: 'Vue.js' },
  { icon: 'i-simple-icons-nuxt', label: 'Nuxt' },
  { icon: 'i-unjs-nitro', label: 'Nitro', class: 'grayscale' },
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
      :links
    >
      <template v-if="partyMode" #headline>
        <img src="/gifs/corgiswim.gif" width="700" height="700" class="mx-auto absolute -z-1">
      </template>
    </UPageHero>

    <UPageBody v-if="cv">
      <div class="max-w-2xl mx-auto w-full">
        <UPageCard :description="cv.intro" variant="soft" spotlight>
          <template #header>
            <UUser
              :name="cv.title"
              :description="cv.description"
              size="3xl"
              :avatar="{
                src: '/avatar.jpg',
                alt: 'Thibaut Castanié',
                quality: 95,
                loading: 'eager',
              }"
              :ui="{ name: 'font-hubot font-semibold' }"
              class="[view-transition-name:uuser]"
            />
            <div class="flex items-center gap-x-2 mt-3 text-toned">
              <UIcon name="i-mingcute-location-3-line" class="size-5" />
              <span>{{ cv.location }}</span>
            </div>
          </template>
        </UPageCard>
      </div>

      <UMarquee pause-on-hover>
        <UTooltip
          v-for="{ icon, label, class: c } of skills"
          :key="label"
          :text="label"
          :delay-duration="0"
        >
          <UIcon :name="icon" class="size-12" :class="c" />
        </UTooltip>
      </UMarquee>

      <div class="max-w-2xl mx-auto w-full flex flex-col gap-8">
        <UPageCard
          v-for="{ title, description, icon, company, date_begin, date_end, actions } of cv.experiences"
          :key="`${title}-${company}-${date_begin}`"
          :title="`${title}${company ? ` - ${company}` : ''}`"
          :description
          variant="ghost"
          :ui="{ leading: 'text-primary', title: 'font-hubot' }"
        >
          <template #leading>
            <UIcon v-if="icon" :name="icon" class="size-5 mr-2" />
            <span class="text-sm font-medium">{{ date_begin }} - {{ date_end }}</span>
          </template>
          <UPageFeature
            v-for="action of actions"
            :key="action"
            :description="action"
            icon="i-mingcute-right-small-line"
          />
        </UPageCard>
      </div>
    </UPageBody>
  </UPage>
</template>
