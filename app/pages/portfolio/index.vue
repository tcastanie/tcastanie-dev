<script setup lang="ts">
const { locale, t } = useI18n()
const route = useRoute()
const router = useRouter()
const { partyMode } = usePartyMode()

useSeoMeta({ title: t('seo_portfolio_title'), description: t('seo_portfolio_desc') })
useHead({ titleTemplate: '%s' })
defaultOgImage(`Portfolio ${t('of')} Thibaut Castanié`)

const { data: projects } = await useAsyncData(`${locale.value}_projects`, () => {
  return queryCollection(`${locale.value}_projects`)
    .select('id', 'path', 'title', 'description', 'date', 'type', 'wip', 'image')
    .order('id', 'DESC')
    .all()
})

const tabsItems = shallowRef([
  { label: 'Pro', icon: 'i-mingcute-necktie-line', value: 'pro' },
  { label: 'Perso', icon: 'i-mingcute-flask-line', value: 'perso' },
])
const isTab = (value: unknown): value is string => tabsItems.value.some(tab => tab.value === value)
const activeTab = shallowRef(isTab(route.query.tab) ? route.query.tab : 'pro')

const projectsOfType = (type?: string | number) => projects.value?.filter(p => p.type === type)

onMounted(() => {
  const hash = route.hash.slice(1)
  if (isTab(hash)) {
    activeTab.value = hash
  }
})

watch(activeTab, tab => router.replace({ query: { ...route.query, tab }, hash: '' }))
</script>

<template>
  <UPage>
    <UPageHero
      :title="$t('nav1')"
      :description="$t('my_projects')"
    >
      <template v-if="partyMode" #headline>
        <div class="flex justify-center gap-8">
          <img src="/gifs/construction.gif" width="96" height="66">
          <img src="/gifs/construction2.gif" width="90" height="85">
          <img src="/gifs/cmcdconstruction.gif" width="50" height="82">
        </div>
      </template>
    </UPageHero>

    <UPageBody>
      <UTabs
        v-model="activeTab"
        :items="tabsItems"
        :unmount-on-hide="false"
        variant="link"
        size="lg"
        :ui="{ list: 'mb-8' }"
      >
        <template #content="{ item }">
          <UBlogPosts>
            <UBlogPost
              v-for="project in projectsOfType(item.value)"
              :key="project.id"
              v-bind="project"
              :to="project.path"
              :date="project.date"
              :badge="project.wip ? { label: $t('wip'), variant: 'subtle' } : undefined"
              :ui="{ image: 'object-center' }"
            />
          </UBlogPosts>
        </template>
      </UTabs>
    </UPageBody>
  </UPage>
</template>
