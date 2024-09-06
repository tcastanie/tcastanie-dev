<script lang="ts" setup>
const { text, delay } = defineProps<{
  text: string[]
  delay?: boolean
}>()

const { counter, reset } = useInterval(delay ? 3000 : 3500, { controls: true })
watch(counter, () => {
  if (counter.value === text.length) reset()
})
</script>

<template>
  <Transition
    mode="out-in"
    :enter-active-class="`transition duration-800`"
    :leave-active-class="`transition duration-300 ${delay ? 'delay-800' : ''}`"
    enter-from-class="opacity-0 blur-sm text-bego-400 translate-y-2"
    leave-to-class="opacity-0 blur-2 text-bego-400 -translate-y-2"
  >
    <span :key="counter" class="inline-block">
      {{ text[counter] }}
    </span>
  </Transition>
</template>
