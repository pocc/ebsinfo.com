export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-gray-500">
        <p className="font-medium text-gray-600">
          Innovative science-based solutions since 1989
        </p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} Environmental Bio-Systems, Inc.
          (EBS). All rights reserved.
        </p>
      </div>
    </footer>
  )
}
