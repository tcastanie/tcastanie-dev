import { defineConfig, presetWind, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons(),
    presetWind(),
  ],
  theme: {
    colors: {
      bego: {
        50: '#FF7777',
        100: '#F7676E',
        200: '#F15565',
        300: '#EC465F',
        400: '#E6375A',
        500: '#E02956',
        600: '#D32157',
        700: '#C31C56',
        800: '#A4164F',
        900: '#7C1040',
        950: '#430826',
      },
      fluo: '#31E1F7',
    },
  },
})
