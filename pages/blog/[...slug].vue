<template>
  <BegoPage>
    <ContentDoc>
      <template #not-found>
        <ThrowNotFound />
      </template>
      <template #default="{ doc }">
        <BegoButton
          to="/blog"
          variant="ghost"
          icon="i-mingcute-arrow-left-line"
          class="mb-4"
        >
          Retour
        </BegoButton>
        <article>
          <div v-if="doc.publishedAt" class="mb-12 text-zinc-500">
            <span>Publié le {{ formatDate(doc.publishedAt) }}</span>
            <span v-if="doc.updatedAt">, mis à jour le {{ formatDate(doc.updatedAt) }}</span>
          </div>
          <ContentRenderer :value="doc" class="text-justify" />
        </article>
      </template>
    </ContentDoc>
  </BegoPage>
</template>
