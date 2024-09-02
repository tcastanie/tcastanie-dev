<script lang="ts" setup>
throw createError({
  statusCode: 404,
  statusMessage: 'Not Found',
  message: 'Cet article n\'existe pas',
  fatal: true,
})
</script>

<template>
  <h1>Page not found</h1>
</template>
