import { type FormEvent, useState } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: Wire up to Pages Function at /api/contact
    setSubmitted(true)
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-xl px-6">
        <h1>Contact Us</h1>
        <p className="mt-4 text-gray-600">
          Have questions about our environmental forensic services? Get in
          touch.
        </p>

        {submitted ? (
          <div className="mt-8 rounded-md bg-green-50 p-6 text-green-800">
            Thank you for your message. We will be in touch shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
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
                Email
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
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
