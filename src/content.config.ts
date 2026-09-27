import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    pattern: ['*/index.md', '!(index).md'],
    base: './src/data/blog',
  }),
  schema: ({ image }) =>
    z.object({
      category: z.literal('blog'),
      cover: image(),
      coverAlt: z.string().optional(),
      title: z.string(),
      seoTitle: z.string().optional(),
      description: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.string()),
      published: z.boolean().default(true),
    }),
});

export const collections = {
  blog,
};