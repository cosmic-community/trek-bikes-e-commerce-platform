import Link from 'next/link'
import { getCategories } from '@/lib/cosmic'
import SearchBar from './SearchBar'

export default async function Header() {
  const categories = await getCategories()

  return (
    <header className="bg-trek-black text-white sticky top-0 z-50">
      {/* Top notification bar */}
      <div className="bg-trek-red text-center py-2 text-sm">
        For a limited time, save up to 45% on select bikes!
      </div>
      
      {/* Main navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wider">
            TREK
          </Link>

          {/* Main navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="hover:text-gray-300 transition-colors">
                Shop Bikes
              </button>
              <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-lg py-4 px-6 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/bikes?category=${category.slug}`}
                    className="block py-2 hover:text-trek-blue transition-colors"
                  >
                    {category.metadata?.name || category.title}
                  </Link>
                ))}
                <Link
                  href="/bikes"
                  className="block py-2 font-semibold hover:text-trek-blue transition-colors border-t mt-2 pt-2"
                >
                  All Bikes
                </Link>
              </div>
            </div>
            
            <Link href="/stories" className="hover:text-gray-300 transition-colors">
              Stories
            </Link>
            
            <Link href="/sale" className="hover:text-gray-300 transition-colors">
              Sale
            </Link>
            
            <Link href="/support" className="hover:text-gray-300 transition-colors">
              Support
            </Link>
            
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
          </div>

          {/* Search */}
          <div className="flex items-center">
            <SearchBar />
          </div>
        </div>
      </nav>
    </header>
  )
}