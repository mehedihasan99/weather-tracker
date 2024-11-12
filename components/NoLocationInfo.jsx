import Link from 'next/link'
import Card from './Card'

export default function NoLocationInfo() {
  return (
    <Card className="p-8 max-w-md mx-auto bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl shadow-xl space-y-6 text-center">
      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-blue-600 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800">Location Not Found</h2>
      </div>
      <p className="text-gray-400 my-2 leading-relaxed">
        We're unable to find the location details you're looking for. Please
        check the location or try searching again.
      </p>
      <Link
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-transform duration-200 ease-in-out transform hover:scale-105 shadow-lg"
        href="/"
      >
        Go Back
      </Link>
    </Card>
  )
}
