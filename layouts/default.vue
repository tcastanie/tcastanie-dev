<template>
  <div>
    <TheHeader />
    <main class="min-h-[calc(100vh-6rem)]">
      <div class="mx-auto max-w-2xl px-4 pb-32 pt-16 lg:px-8 sm:px-6">
        <slot />
      </div>
    </main>
    <TheFooter />
  </div>
</template>
