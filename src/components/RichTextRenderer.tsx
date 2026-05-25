'use client'

import { RichText } from '@payloadcms/richtext-lexical/react'

interface RichTextRendererProps {
  content: unknown
}

export default function RichTextRenderer({ content }: RichTextRendererProps) {
  if (!content) return null

  return (
    <div className="rich-text">
      <RichText data={content as Parameters<typeof RichText>[0]['data']} />
    </div>
  )
}
