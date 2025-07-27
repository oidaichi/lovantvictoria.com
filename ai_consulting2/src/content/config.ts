import { defineCollection, z } from 'astro:content';

const homepageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    cta_primary: z.string(),
    cta_secondary: z.string(),
  }),
});

export const collections = {
  'homepage': homepageCollection,
};
