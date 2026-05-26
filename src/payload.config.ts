import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { en } from '@payloadcms/translations/languages/en'
import { pt } from '@payloadcms/translations/languages/pt'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './infrastructure/collections/Users'
import { Media } from './infrastructure/collections/Media'
import { Events } from './infrastructure/collections/Events'
import { Testimonials } from './infrastructure/collections/Testimonials'
import { OnlineContent } from './infrastructure/globals/OnlineContent'
import { AboutContent } from './infrastructure/globals/AboutContent'
import { ContactContent } from './infrastructure/globals/ContactContent'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Events, Testimonials],
  globals: [OnlineContent, AboutContent, ContactContent],
  localization: {
    locales: [
      { label: 'Português (Brasil)', code: 'pt-BR' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'pt-BR',
    fallback: true,
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  i18n: {
    fallbackLanguage: 'pt',
    supportedLanguages: { pt, en },
  },
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET ?? 'silc-media',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID ?? '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? '',
        },
        region: process.env.S3_REGION ?? 'us-east-1',
        endpoint: process.env.S3_ENDPOINT,
        forcePathStyle: true,
      },
    }),
  ],
})
