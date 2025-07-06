<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

interface InteractiveGridPatternProps {
  className?: HTMLAttributes['class']
  squaresClassName?: HTMLAttributes['class']
  width?: number
  height?: number
  squares?: [number, number]
}

const props = withDefaults(defineProps<InteractiveGridPatternProps>(), {
  width: 42,
  height: 42,
  squares: () => [24, 24],
})

const horizontal = computed(() => props.squares[0])
const vertical = computed(() => props.squares[1])

const totalSquares = computed(() => horizontal.value * vertical.value)

const hoveredSquare = ref<number | null>(null)

const gridWidth = computed(() => props.width * horizontal.value)
const gridHeight = computed(() => props.height * vertical.value)

function getX(index: number) {
  return (index % horizontal.value) * props.width
}

function getY(index: number) {
  return Math.floor(index / horizontal.value) * props.height
}

function getRectClass(index: number) {
  return [
    'stroke-gray-400/30 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000',
    hoveredSquare.value === index ? 'fill-primary-300/50' : 'fill-transparent',
  ]
}

function handleMouseEnter(index: number) {
  hoveredSquare.value = index
}

function handleMouseLeave() {
  hoveredSquare.value = null
}
</script>

<template>
  <svg
    :width="gridWidth"
    :height="gridHeight"
    class="absolute inset-0 h-full w-full border border-primary-400/50"
  >
    <rect
      v-for="(_, index) in totalSquares"
      :key="index"
      :x="getX(index)"
      :y="getY(index)"
      :width="width"
      :height="height"
      :class="getRectClass(index)"
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave"
    />
  </svg>
</template>
