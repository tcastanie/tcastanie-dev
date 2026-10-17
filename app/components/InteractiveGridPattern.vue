<script lang="ts" setup>
interface InteractiveGridPatternProps {
  width?: number
  height?: number
  squares?: [number, number]
}

const { width = 42, height = 42, squares = [17, 13] } = defineProps<InteractiveGridPatternProps>()

const horizontal = computed(() => squares[0])
const totalSquares = computed(() => squares[0] * squares[1])
</script>

<template>
  <svg
    :width="width * squares[0]"
    :height="height * squares[1]"
    class="absolute inset-0 h-full w-full"
  >
    <rect
      v-for="index in totalSquares"
      :key="index"
      :x="((index - 1) % horizontal) * width"
      :y="Math.floor((index - 1) / horizontal) * height"
      :width
      :height
      class="stroke-zinc-400/30 fill-transparent hover:fill-primary/20 transition-all duration-1000 ease-in-out hover:duration-100"
    />
  </svg>
</template>
