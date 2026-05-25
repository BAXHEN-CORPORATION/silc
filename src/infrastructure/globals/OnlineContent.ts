import type { GlobalConfig } from 'payload'

export const OnlineContent: GlobalConfig = {
  slug: 'online-content',
  label: 'SILC Online Content',
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'introduction',
      type: 'richText',
      label: 'Introduction',
    },
    {
      name: 'howItWorks',
      type: 'richText',
      label: 'How It Works',
    },
    {
      name: 'whatIsIncluded',
      type: 'richText',
      label: 'What Is Included',
    },
    {
      name: 'format',
      type: 'text',
      label: 'Format (e.g., "Live + Recorded")',
    },
    {
      name: 'duration',
      type: 'text',
      label: 'Duration',
    },
    {
      name: 'differenceFromPresencial',
      type: 'richText',
      label: 'Difference from In-Person SILC',
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
      name: 'testimonials',
      type: 'relationship',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      relationTo: 'testimonials' as any,
      hasMany: true,
      label: 'Testimonials',
    },
  ],
}
