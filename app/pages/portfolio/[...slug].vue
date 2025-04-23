<script lang="ts" setup>
import type { BreadcrumbItem } from '@nuxt/ui'

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

const breadcrumbItems = ref<BreadcrumbItem[]>([
  {
    label: 'Portfolio',
    icon: 'i-mingcute-folder-open-2-line',
    to: localePath('/portfolio'),
  },
  { label: page.value.title },
])

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings(`${locale.value}_projects`, route.path, { fields: ['description'] })
})
</script>

<template>
  <UPage v-if="page">
    <UPageBody>
      <UBreadcrumb :items="breadcrumbItems" />
      <ContentRenderer :value="page" />
      <USeparator />
      <UContentSurround :surround="surround" />
    </UPageBody>

    <template v-if="page.type === 'pro'" #right>
      <UContentToc :links="page.body?.toc?.links" />
    </template>
  </UPage>
</template>
