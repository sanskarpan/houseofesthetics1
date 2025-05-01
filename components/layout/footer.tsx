export default function Footer() {
  return (
    <footer className="bg-esthete-neutral text-white py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-spartan tracking-ultra-wide uppercase mb-6">House of Esthete</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Crafted to be collected. Curated to endure.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-spartan tracking-widest uppercase mb-4">Navigate</h4>
            <ul className="space-y-2">
              {['Home', 'Origins', 'Process', 'Collections', 'Journal', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-300 hover:text-white interactive">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-spartan tracking-widest uppercase mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              {['Instagram', 'Pinterest', 'LinkedIn'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-300 interactive"
                >
                  {social}
                </a>
              ))}
            </div>
            <p className="text-xs opacity-60 mt-4">
              © {new Date().getFullYear()} House of Esthete.
              <br />All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}