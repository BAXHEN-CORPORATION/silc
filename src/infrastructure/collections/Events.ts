import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'city', 'country', 'startDate', 'status'],
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.title && !data.slug) {
          data.slug = (data.title as string)
            .toLowerCase()
            .normalize('NFD')
            .replace(/[̀-ͯ]/g, '')
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'Auto-generated from title. Edit to customize the URL.',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Próximo', value: 'upcoming' },
        { label: 'Passado', value: 'past' },
      ],
      defaultValue: 'upcoming',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      label: 'Start Date',
    },
    {
      name: 'endDate',
      type: 'date',
      required: true,
      label: 'End Date',
    },
    {
      name: 'city',
      type: 'text',
      required: true,
    },
    {
      name: 'country',
      type: 'text',
      required: true,
    },
    {
      name: 'shortDescription',
      type: 'text',
      localized: true,
      admin: {
        description: 'Brief summary shown in event cards.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Full Description',
      localized: true,
    },
    {
      name: 'mainSpeaker',
      type: 'text',
      label: 'Main Speaker (Preletor Principal)',
    },
    {
      name: 'scheduleOverview',
      type: 'richText',
      label: 'Schedule Overview',
      localized: true,
    },
    {
      name: 'price',
      type: 'text',
      admin: {
        description: 'Leave blank if price is not public.',
      },
    },
    {
      name: 'venue',
      type: 'text',
      label: 'Venue / Hotel Information',
    },
    {
      name: 'videoUrl',
      type: 'text',
      label: 'Video URL',
    },
    {
      name: 'registrationFormUrl',
      type: 'text',
      label: 'Registration Form URL',
    },
    {
      name: 'photos',
      type: 'array',
      label: 'Photos (for past events)',
      fields: [
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          localized: true,
        },
      ],
    },
    {
      name: 'testimonials',
      type: 'relationship',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      relationTo: 'testimonials' as any,
      hasMany: true,
    },
  ],
}
