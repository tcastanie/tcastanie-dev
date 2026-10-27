import { defineCollection, defineContentConfig } from '@nuxt/content'
import { defineRobotsSchema } from '@nuxtjs/robots/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'
import { z } from 'zod'

const projectSchema = z.object({
  sitemap: defineSitemapSchema(),
  robots: defineRobotsSchema(),
  date: z.string(),
  type: z.enum(['pro', 'perso']),
  image: z.string().optional(),
  wip: z.boolean().optional(),
})

const cvSchema = z.object({
  title: z.string(),
  description: z.string(),
  location: z.string(),
  intro: z.string(),
  skills: z.object({
    icon: z.string(),
    label: z.string(),
  }).array(),
  experiences: z.object({
    title: z.string(),
    description: z.string().optional(),
    icon: z.string().optional(),
    company: z.string().optional(),
    location: z.string(),
    date_begin: z.string(),
    date_end: z.string(),
    actions: z.string().array().optional(),
  }).array(),
})

export default defineContentConfig({
  collections: {
    fr_projects: defineCollection({
      type: 'page',
      source: 'portfolio/*.mdc',
      schema: projectSchema,
    }),
    en_projects: defineCollection({
      type: 'page',
      source: 'en/portfolio/*.mdc',
      schema: projectSchema,
    }),
    fr_cv: defineCollection({
      type: 'page',
      source: 'cv.yaml',
      schema: cvSchema,
    }),
    en_cv: defineCollection({
      type: 'page',
      source: 'en/cv.yaml',
      schema: cvSchema,
    }),
  },
})
