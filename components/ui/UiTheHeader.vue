<script lang="ts" setup>
import { NuxtLink } from '#components'

const props = withDefaults(defineProps<{
  title?: string
  to?: `/${string}` | ''
  links?: { label: string, to: string, icon?: string }[]
  container?: boolean
}>(), {
  to: '/',
  container: true,
})
const { title, to, links, container } = toRefs(props)

const [panel, togglePanel] = useToggle()
</script>

<template>
  <header class="bg-zinc-900/75 backdrop-blur border-b border-zinc-800 -mb-px sticky top-0 z-50">
    <div :class="[{ 'max-w-7xl': container }, 'flex items-center justify-between gap-3 h-[--header-height] mx-auto px-4 sm:px-6 lg:px-8']">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <template v-if="$slots.left">
          <slot name="left" />
        </template>
        <component
          :is="to ? NuxtLink : 'div'"
          v-else-if="$slots.logo"
          :to="to"
          class="flex-shrink-0 font-bold text-xl text-white flex items-end gap-1.5"
        >
          <slot name="logo" />
        </component>
        <component
          :is="to ? NuxtLink : 'div'"
          v-else-if="title"
          :to="to"
          class="font-bold text-xl text-white flex items-end"
        >
          {{ title }}
        </component>
      </div>
      <ul v-if="links" class="hidden lg:flex gap-x-8 items-center">
        <li v-for="{ label, to: linkTo, icon } of links" :key="label" class="relative">
          <NuxtLink
            :to="linkTo"
            :class="[{
              'text-bego-400': $route.path === linkTo,
              'hover:text-bego-400': $route.path !== linkTo,
            }, 'text-sm/6 font-semibold flex items-center gap-1']"
          >
            <span v-if="icon" :class="[icon, 'shrink-0 w-5 h-5']" />
            {{ label }}
          </NuxtLink>
        </li>
      </ul>
      <div v-else-if="$slots.center" class="hidden lg:flex items-center gap-x-8">
        <slot name="panel" />
      </div>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <slot name="right" />
        <UiButton
          white
          variant="link"
          :icon="panel ? 'i-mingcute-close-line' : 'i-mingcute-menu-line'"
          class="lg:hidden"
          @click="togglePanel()"
        />
      </div>
    </div>
    <div v-if="links && panel" class="fixed w-full z-50 bg-zinc-900 lg:hidden top-[calc(var(--header-height)+1px)] px-4 sm:px-6 pt-3 pb-6">
      <div>{{ links }}</div>
    </div>
    <div v-else-if="$slots.panel && panel">
      <slot name="panel" />
    </div>
  </header>
</template>
