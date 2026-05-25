import type { GlobalConfig } from 'payload'

export const AboutContent: GlobalConfig = {
  slug: 'about-content',
  label: 'About SILC Content',
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'intro',
      type: 'richText',
      label: 'What is SILC',
    },
    {
      name: 'howTheWeekWorks',
      type: 'richText',
      label: 'How the Week Works',
    },
    {
      name: 'roles',
      type: 'richText',
      label: 'Roles (Speaker, Counsellors, Intercessors)',
    },
  ],
}
