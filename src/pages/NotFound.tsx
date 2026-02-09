import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center py-32 text-center">
      <h1 className="text-6xl font-bold text-brand-green">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
      >
        Back to Home
      </Link>
    </section>
  )
}
