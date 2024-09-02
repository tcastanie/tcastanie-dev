<script lang="ts" setup>
useHead({ title: 'Blog' })
const articles = { path: '/blog', sort: [{ publishedAt: -1 }] }
</script>

<template>
  <BegoPage>
    <BegoHero
      title="Blog"
      description="Hydratation en cours..."
      icon="i-mingcute-file-code-line"
    />
    <ContentList :query="articles">
      <template #not-found>
        <div class="grid h-100 place-items-center">
          <BegoIcon icon="i-mingcute:pencil-3-line" class="text-zinc-300 h-40! w-40!" />
        </div>
      </template>
      <template #default="{ list }">
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
              Publié le {{ formatDate(publishedAt) }}
              <span v-if="updatedAt">, mis à jour le {{ formatDate(updatedAt) }}</span>
            </div>
          </BegoCard>
        </div>
      </template>
    </ContentList>
  </BegoPage>
</template>
