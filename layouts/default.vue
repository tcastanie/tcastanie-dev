<template>
  <div>
    <TheHeader />
    <main :class="shitMode ? 'min-h-[calc(100vh-8.5rem)]' : 'min-h-[calc(100vh-6rem)]'">
      <div class="mx-auto max-w-2xl px-4 pb-32 pt-8 lg:px-8 sm:px-6 sm:pt-16">
        <slot />
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
const shitMode = useState('shitMode')
</script>
