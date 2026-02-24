<script lang="ts" setup>
const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection(`${locale.value}_projects`).path(route.path).first()
})
if (!page.value) {
  throw createError({
    status: 404,
    statusText: 'Page not found',
    fatal: true,
  })
}
if (page.value?.ogImage) {
  defineOgImage(page.value?.ogImage)
}
if (page.value?.head) {
  useHead(page.value.head as any)
}
if (page.value?.seo) {
  useSeoMeta(page.value.seo)
}

const items = useBreadcrumbItems({
  overrides: [
    false,
    {
      label: 'Portfolio',
      icon: 'i-mingcute-folder-open-2-line',
      to: localePath(`/portfolio#${page.value.type}`),
    },
    { label: page.value.title },
  ],
})
</script>

<template>
  <UPage v-if="page">
    <UPageBody>
      <UBreadcrumb :items="items" />
      <ContentRenderer :value="page" class="[&>h1,h2,h3]:font-hubot" />
    </UPageBody>

    <template v-if="page.type === 'pro'" #right>
      <UContentToc :links="page.body?.toc?.links" highlight class="backdrop-blur-none" />
    </template>
  </UPage>
</template>
