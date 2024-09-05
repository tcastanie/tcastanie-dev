<script lang="ts" setup>
const route = useRoute()
const slug = route.params.slug[0]
const { data } = await useAsyncData(
  `article-${slug}`,
  () => queryContent('blog', slug).findOne(),
)

useHead({ title: data.value?.title ?? 'Blog' })
useSchemaOrg([
  defineArticle({
    '@type': 'BlogPosting',
    'headline': data.value?.title,
    'description': data.value?.description,
    'datePublished': data.value?.publishedAt,
    'dateModified': data.value?.updatedAt || data.value?.publishedAt,
    'inLanguage': data.value?.language,
  }),
])
</script>

<template>
  <BegoPage>
    <ContentRenderer v-if="data" class="text-justify">
      <template #not-found>
        <ThrowNotFound />
      </template>
      <template #default>
        <BegoButton
          to="/blog"
          variant="ghost"
          icon="i-mingcute-arrow-left-line"
          class="mb-4"
        >
          Retour
        </BegoButton>
        <article>
          <div v-if="data?.publishedAt" class="mb-12 text-zinc-500">
            <span>Publié le {{ formatDate(data.publishedAt) }}</span>
            <span v-if="data.updatedAt">, mis à jour le {{ formatDate(data.updatedAt) }}</span>
          </div>
          <ContentRendererMarkdown :value="data" />
        </article>
      </template>
    </ContentRenderer>
  </BegoPage>
</template>
