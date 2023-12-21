import { defineConfig, presetWind, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons(),
    presetWind()
  ],
  theme: {
    colors: {
      bleu: '#31E1F7',
      bego: {
        0: '#FF7777',
        1: '#F06B77',
        2: '#E05F77',
        3: '#D15377',
        4: '#C14777',
        5: '#B23C77'
      }
    }
  }
})
