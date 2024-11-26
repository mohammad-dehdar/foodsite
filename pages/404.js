import Link from 'next/link'


export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">Oops! The food item you're looking for doesn't exist.</p>
      <Link href="/" passHref>
        <button className='bg-slate-400 px-40 py-2 rounded-md shadow-md'>
          Return to Home
        </button>
      </Link>
    </div>
  )
}

