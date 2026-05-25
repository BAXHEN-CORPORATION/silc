import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'eventType'],
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'eventType',
      type: 'select',
      options: [
        { label: 'Presencial', value: 'presencial' },
        { label: 'Online', value: 'online' },
      ],
    },
    {
      name: 'event',
      type: 'relationship',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      relationTo: 'events' as any,
      admin: {
        condition: (data) => data?.eventType === 'presencial',
        description: 'Link to the presencial event (optional).',
      },
    },
  ],
}
