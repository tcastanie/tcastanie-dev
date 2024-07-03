<script lang="ts" setup>
defineProps<{
  title: string
  icon?: string
  description?: string
  price?: string
  discount?: string
  cycle?: string
  features?: { label: string, icon?: string }[]
}>()
</script>

<template>
  <UiCard>
    <div class="gap-6 lg:gap-x-8 xl:gap-x-10 flex flex-col lg:grid lg:grid-cols-10">
      <div class="lg:col-span-7">
        <div class="flex items-center gap-3">
          <UiIcon v-if="icon" :icon="icon" size="xl" />
          <p class="text-lg sm:text-2xl font-semibold truncate">
            {{ title }}
          </p>
        </div>
        <UiP v-if="description" class="mt-3">
          {{ description }}
        </UiP>
        <UiDivider v-if="features?.length" class="my-6 lg:my-8" />
        <div v-if="features?.length" class="flex-1">
          <ul class="grid lg:grid-cols-2 text-sm gap-3">
            <li v-for="{ label, icon: fIcon } of features" :key="label" class="flex items-center gap-x-2 min-w-0">
              <UiIcon :icon="fIcon ? fIcon : 'i-mingcute-check-fill'" size="md" class="text-bego-400" />
              <span class="text-zinc-400 truncate" :title="label">{{ label }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="price" class="flex flex-col lg:items-center justify-center gap-y-6 lg:col-span-3 border-t lg:border-l lg:border-t-0 border-zinc-800 pt-6 lg:pt-0 lg:pl-6">
        <div class="flex items-baseline gap-x-1">
          <p
            :class="{
              'text-zinc-400 line-through text-xl sm:text-2xl font-medium': discount,
              'text-2xl sm:text-4xl font-semibold': !discount,
            }"
          >
            {{ price }}
          </p>
          <p v-if="discount" class="text-2xl sm:text-4xl font-semibold">
            {{ discount }}
          </p>
          <p v-if="cycle" class="text-zinc-400 text-sm/6 font-medium truncate">
            {{ cycle }}
          </p>
        </div>
        <template v-if="$slots.cta">
          <slot name="cta" />
        </template>
      </div>
    </div>
  </UiCard>
</template>
