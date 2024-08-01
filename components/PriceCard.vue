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
  <BegoCard>
    <div class="flex flex-col gap-6 lg:grid lg:grid-cols-10 lg:gap-x-8 xl:gap-x-10">
      <div class="lg:col-span-7">
        <div class="flex items-center gap-3">
          <BegoIcon v-if="icon" :icon="icon" size="xl" />
          <p class="truncate text-lg font-semibold sm:text-2xl">
            {{ title }}
          </p>
        </div>
        <BegoP v-if="description" class="mt-3">
          {{ description }}
        </BegoP>
        <BegoDivider v-if="features?.length" class="my-6 lg:my-8" />
        <div v-if="features?.length" class="flex-1">
          <ul class="grid gap-3 text-sm lg:grid-cols-2">
            <li v-for="{ label, icon: fIcon } of features" :key="label" class="min-w-0 flex items-center gap-x-2">
              <BegoIcon :icon="fIcon ? fIcon : 'i-mingcute-check-fill'" size="md" class="text-bego-400" />
              <span class="truncate text-zinc-400" :title="label">{{ label }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="price" class="flex flex-col justify-center gap-y-6 border-t border-zinc-800 pt-6 lg:col-span-3 lg:items-center lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
        <div class="flex items-baseline gap-x-1">
          <p
            :class="{
              'text-zinc-400 line-through text-xl sm:text-2xl font-medium': discount,
              'text-2xl sm:text-4xl font-semibold': !discount,
            }"
          >
            {{ price }}
          </p>
          <p v-if="discount" class="text-2xl font-semibold sm:text-4xl">
            {{ discount }}
          </p>
          <p v-if="cycle" class="truncate text-sm/6 text-zinc-400 font-medium">
            {{ cycle }}
          </p>
        </div>
        <template v-if="$slots.cta">
          <slot name="cta" />
        </template>
      </div>
    </div>
  </BegoCard>
</template>
