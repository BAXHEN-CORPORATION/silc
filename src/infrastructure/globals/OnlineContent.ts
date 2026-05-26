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
      localized: true,
    },
    {
      name: 'howItWorks',
      type: 'richText',
      label: 'How It Works',
      localized: true,
    },
    {
      name: 'whatIsIncluded',
      type: 'richText',
      label: 'What Is Included',
      localized: true,
    },
    {
      name: 'format',
      type: 'text',
      label: 'Format (e.g., "Live + Recorded")',
      localized: true,
    },
    {
      name: 'duration',
      type: 'text',
      label: 'Duration',
      localized: true,
    },
    {
      name: 'differenceFromPresencial',
      type: 'richText',
      label: 'Difference from In-Person SILC',
      localized: true,
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
