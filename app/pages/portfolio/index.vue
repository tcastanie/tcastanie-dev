<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const { data: projects } = await useAsyncData(`${locale.value}_projects`, () => {
  return queryCollection(`${locale.value}_projects`)
    .select('id', 'path', 'title', 'description', 'date', 'type', 'wip', 'image')
    .order('date', 'DESC')
    .all()
})

const proProjects = projects.value?.filter(p => p.type === 'pro')
const persoProjects = projects.value?.filter(p => p.type === 'perso')

const tabsItems = [
  { label: 'Pro', icon: 'i-mingcute-necktie-line', slot: 'pro', value: 'pro' },
  { label: 'Perso', icon: 'i-mingcute-flask-line', slot: 'perso', value: 'perso' },
]

const hash = route.hash?.replace('#', '')
const activeTab = ref('pro')

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
    <UPageHero
      :title="$t('nav1')"
      :description="$t('my_projects')"
      headline="🚧🚧🚧"
    />

    <UPageBody>
      <UTabs
        v-model="activeTab"
        :items="tabsItems"
        :unmount-on-hide="false"
        size="lg"
        :ui="{ content: 'mt-8' }"
      >
        <template #pro>
          <UBlogPosts id="pro">
            <UBlogPost
              v-for="project in proProjects"
              :key="project.id"
              v-bind="project"
              :to="localePath(project.path)"
              :date="project.date"
              :badge="project.wip ? $t('wip') : undefined"
              :image="project.image ?? '8OnkIkFBBtM.jpg'"
              :ui="{ image: 'object-center' }"
            />
          </UBlogPosts>
        </template>

        <template #perso>
          <UBlogPosts id="perso">
            <UBlogPost
              v-for="project in persoProjects"
              :key="project.id"
              v-bind="project"
              :to="localePath(project.path)"
              :date="project.date"
              :badge="project.wip ? $t('wip') : undefined"
            />
          </UBlogPosts>
        </template>
      </UTabs>
    </UPageBody>
  </UPage>
</template>
