import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    defineField({
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'titleSk',
      title: 'Title (Slovak)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titleEn', maxLength: 96 },
      validation: (Rule) => Rule.required().error('Click Generate'),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'Residential', value: 'Residential' },
          { title: 'Interior',    value: 'Interior'    },
          { title: 'Public',      value: 'Public'      },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'area',
      title: 'Area (number only — m² is added automatically)',
      type: 'string',
      placeholder: '180',
    }),

    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        },
      ],
    }),

    // About heading — split into normal + italic parts to match the site design.
    // Example: "A quiet retreat built to blend with the " + "highlands"
    // Renders as: A quiet retreat built to blend with the <em>highlands</em>

    defineField({
      name: 'aboutHeadingPreEn',
      title: 'About Heading — main text (English)',
      type: 'string',
      placeholder: 'A quiet retreat built to blend with the',
    }),

    defineField({
      name: 'aboutHeadingEmEn',
      title: 'About Heading — italic word/phrase (English)',
      type: 'string',
      placeholder: 'highlands',
    }),

    defineField({
      name: 'aboutHeadingPreSk',
      title: 'About Heading — main text (Slovak)',
      type: 'string',
      placeholder: 'Pokojný úkryt stvorený splynúť s',
    }),

    defineField({
      name: 'aboutHeadingEmSk',
      title: 'About Heading — italic word/phrase (Slovak)',
      type: 'string',
      placeholder: 'vrchovinami',
    }),

    defineField({
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'descriptionSk',
      title: 'Description (Slovak)',
      type: 'text',
      rows: 5,
    }),
  ],

  preview: {
    select: {
      title:    'titleEn',
      subtitle: 'category',
      media:    'coverImage',
    },
  },
})
