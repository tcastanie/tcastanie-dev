<script lang="ts" setup>
const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection(`${locale.value}_projects`).path(route.path).first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}
if (page.value?.ogImage) {
  defineOgImage(page.value?.ogImage)
}
useHead(page.value.head || {})
useSeoMeta(page.value.seo || {})

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
      <ContentRenderer :value="page" />
    </UPageBody>

    <template v-if="page.type === 'pro'" #right>
      <UContentToc :links="page.body?.toc?.links" />
    </template>
  </UPage>
</template>
