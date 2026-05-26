'use client'

import { useState } from 'react'

interface Props {
  labels: {
    formTitle: string
    fieldName: string
    fieldEmail: string
    fieldSubject: string
    fieldMessage: string
    placeholderName: string
    placeholderEmail: string
    placeholderSubject: string
    placeholderMessage: string
    submit: string
  }
}

export default function ContactForm({ labels }: Props) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form__success">
        <span style={{ fontSize: 20 }}>✓</span>
        <div>
          <strong>Mensagem enviada.</strong>
          <p style={{ marginTop: 4, fontSize: 13, color: 'inherit' }}>
            Você receberá uma resposta em até 24h no e-mail informado.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="ct-name">{labels.fieldName}</label>
        <input
          id="ct-name"
          name="name"
          type="text"
          required
          placeholder={labels.placeholderName}
        />
      </div>
      <div className="field">
        <label htmlFor="ct-email">{labels.fieldEmail}</label>
        <input
          id="ct-email"
          name="email"
          type="email"
          required
          placeholder={labels.placeholderEmail}
        />
      </div>
      <div className="field">
        <label htmlFor="ct-subject">{labels.fieldSubject}</label>
        <input
          id="ct-subject"
          name="subject"
          type="text"
          placeholder={labels.placeholderSubject}
        />
      </div>
      <div className="field">
        <label htmlFor="ct-message">{labels.fieldMessage}</label>
        <textarea
          id="ct-message"
          name="message"
          rows={6}
          required
          placeholder={labels.placeholderMessage}
        />
      </div>
      <button type="submit" className="btn" style={{ width: '100%' }}>
        {labels.submit}
      </button>
    </form>
  )
}
