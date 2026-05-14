import logo from '../assets/logo.png'

export default function Navbar() {
  return (
     <nav id="navbar" className=" w-full bg-black/45 backdrop-blur-md shadow-md ">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
            <a href="/" className="text-2xl font-bold text-amber-50 hover:text-blue-600 transition-colors">Kitm Games</a>

          
            <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                <li><a href="/" className="text-amber-50 hover:text-blue-500 transition-colors">Home</a></li>
            </ul>

          
            <button id="menu-btn" className="md:hidden flex items-center text-amber-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>

        <div id="mobile-menu" className="hidden bg-white md:hidden shadow-md">
            <ul className="space-y-4 p-4 text-gray-700 font-medium">
                <li><a href="/" className="block  text-amber-50 hover:text-blue-500 transition-colors">Home</a></li>
            </ul>
        </div>
    </nav>

  )
}