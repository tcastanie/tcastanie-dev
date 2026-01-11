<script setup lang="ts">
const { locale, t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const { partyMode } = usePartyMode()

useSeoMeta({ title: t('nav1') })
useHead({ titleTemplate: `%s ${t('of')} %siteName` })
defaultOgImage()

const { data: projects } = await useAsyncData(`${locale.value}_projects`, () => {
  return queryCollection(`${locale.value}_projects`)
    .select('id', 'path', 'title', 'description', 'date', 'type', 'wip', 'image')
    .order('id', 'DESC')
    .all()
})

const tabsItems = [
  { label: 'Pro', icon: 'i-mingcute-necktie-line', value: 'pro' },
  { label: 'Perso', icon: 'i-mingcute-flask-line', value: 'perso' },
]
const activeTab = ref('pro')

const filteredProjects = computed(() => {
  if (activeTab.value === 'perso') {
    return projects.value?.filter(p => p.type === 'perso')
  }
  return projects.value?.filter(p => p.type === 'pro')
})

const hash = route.hash?.replace('#', '')
onMounted(() => {
  if (hash && tabsItems.some(tab => tab.value === hash)) {
    activeTab.value = hash
  }
})
function updateHash(newTab: any) {
  if (route.hash !== `#${newTab}`) {
    navigateTo({
      hash: `#${newTab}`,
    }, { replace: true })
  }
}
watch(activeTab, updateHash)
</script>

<template>
  <UPage>
    <UPageHero :title="$t('nav1')" :description="$t('my_projects')">
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
        size="lg"
        :ui="{ content: 'mt-8' }"
      />
      <UBlogPosts :id="activeTab === 'pro' ? 'pro' : 'perso'" class="scroll-mt-50">
        <UBlogPost
          v-for="project in filteredProjects"
          :key="project.id"
          v-bind="project"
          :to="localePath(project.path)"
          :date="project.date"
          :badge="project.wip ? $t('wip') : undefined"
          :ui="{ image: 'object-center' }"
        />
      </UBlogPosts>
    </UPageBody>
  </UPage>
</template>
