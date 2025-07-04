const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-black mb-4">1WS.</div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              A trusted sourcing partner with decades of experience across multiple industries and global markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-black font-semibold mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Global Sourcing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Textile & Apparel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Custom Quotes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Quality Assurance
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-black font-semibold mb-4">INDUSTRIES</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Textiles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Furniture
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Automotive
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Electronics
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-black font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2024 1World Sourcing. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-black text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-black text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-black text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
