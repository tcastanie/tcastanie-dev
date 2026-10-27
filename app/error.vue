<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{
  error: NuxtError
}>()

const localePath = useLocalePath()
useHead(useLocaleHead())
useHead({ script: useScripts() })

onMounted(() => {
  const { status, statusText, data } = error
  // @ts-expect-error umami is a global script (useScripts.ts)
  umami?.track('error', { status, statusText, data })
})
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="var(--ui-primary)" />

    <UContainer class="min-h-[calc(100vh-var(--ui-header-height))] flex flex-col items-center justify-center text-center gap-y-16">
      <UError
        :error="error"
        :redirect="localePath('index')"
        :ui="{ root: 'min-h-auto' }"
      />
      <div class="grid items-center justify-center">
        <p class="text-lg text-toned mb-8">
          You found a <b class="text-highlighted">dead link</b> 😱
        </p>
        <UColorModeImage
          light="/404-light.webp"
          dark="/404-dark.webp"
          alt="dead link"
          :width="512"
          :height="342"
          class="rounded-xl"
        />
      </div>
      <UColorModeSwitch />
    </UContainer>
  </UApp>
</template>
