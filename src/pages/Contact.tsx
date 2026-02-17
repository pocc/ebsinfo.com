import { type FormEvent, useState } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setSending(true)
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch('https://formsubmit.co/ajax/geojimj@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: `Contact form: ${data.name}`, _replyto: data.email }),
      })
      const result = ((await res.json()) as { success: string })
      if (result.success !== 'true') throw new Error('Send failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h1>Need an Expert Environmental Science Forensic Study? Contact Us</h1>
        <p className="mt-4 text-gray-600">
          Have questions about our environmental forensic services? Get in
          touch with our team.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Drop Us a Line!
            </h2>

            {submitted ? (
              <div className="mt-6 rounded-md bg-green-50 p-6 text-green-800">
                Thank you for your message. We will be in touch shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700 disabled:opacity-50"
                >
                  {sending ? 'Sending…' : 'Send'}
                </button>
              </form>
            )}
          </div>

          {/* Business Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Address</h2>
              <address className="mt-3 not-italic text-gray-700 leading-relaxed">
                EBS
                <br />
                707 View Point Road
                <br />
                Mill Valley, CA 94941, US
              </address>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">Phone</h2>
              <p className="mt-3 text-gray-700">
                <a
                  href="tel:+15105901098"
                  className="text-brand-green hover:underline"
                >
                  (510) 590-1098
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Business Hours
              </h2>
              <dl className="mt-3 space-y-1 text-gray-700">
                <div className="flex justify-between">
                  <dt>Mon &ndash; Fri</dt>
                  <dd>09:00 am &ndash; 05:00 pm</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sat &ndash; Sun</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
