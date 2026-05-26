import type { GlobalConfig } from 'payload'

export const ContactContent: GlobalConfig = {
  slug: 'contact-content',
  label: 'Contact Information',
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
    },
    {
      name: 'whatsapp',
      type: 'text',
      label: 'WhatsApp Number',
    },
    {
      name: 'intro',
      type: 'richText',
      label: 'Contact Page Intro',
      localized: true,
    },
  ],
}
