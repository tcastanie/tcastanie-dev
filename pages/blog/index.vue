<script lang="ts" setup>
useHead({ title: 'Blog' })
const articles = { path: '/blog', sort: [{ publishedAt: -1 }] }
</script>

<template>
  <BegoPage>
    <BegoHero
      title="Blog"
      description="Rédaction en cours..."
      icon="i-mingcute-file-code-fill"
    />
    <ContentList v-slot="{ list }" :query="articles">
      <div class="grid gap-8">
        <BegoCard
          v-for="{ _path, title, description, publishedAt, updatedAt } in list"
          :key="_path"
          :to="_path"
        >
          <BegoH2 class="mb-4">
            {{ title }}
          </BegoH2>
          <BegoP v-if="description" class="mt-2">
            {{ description }}
          </BegoP>
          <div v-if="publishedAt" class="text-sm text-zinc-600">
            {{ `Publié le ${formatDate(publishedAt)}${updatedAt ? `, mis à jour le ${formatDate(updatedAt)}` : ''}` }}
          </div>
        </BegoCard>
      </div>
    </ContentList>
  </BegoPage>
</template>
