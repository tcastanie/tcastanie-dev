<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <main class="min-h-[calc(100vh-var(--header-height))]">
      <slot name="hero" />
      <div v-auto-animate class="mt-8 pb-24">
        <slot />
      </div>
    </main>
  </div>
</template>
