'use client'
import { usePathname } from 'next/navigation'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const pathname = usePathname()

  if (pathname.startsWith('/dashboard') || pathname.startsWith('/rapports')) return null

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">

          {/* Left Column: Logo & Description */}
          <div className="md:col-span-3 space-y-6">
            <div className="flex items-center gap-4 font-bold text-2xl text-white">
              <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-800 bg-slate-900 shadow-lg shrink-0 transition-transform duration-300 hover:scale-105">
                <img src="/hautePression.jfif" className="w-full h-full object-cover" alt="Laverie Poids Lourds Logo" />
              </div>
              <div>
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent text-2xl font-extrabold tracking-tight">
                  Laverie Poids Lourds
                </span>
                <span className="block text-xs text-slate-500 font-medium mt-0.5">Service Professionnel</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-lg">
              Spécialiste du lavage de poids lourds depuis 2025. Nous disposons de 12 stations de lavage réparties dans la ville pour offrir un service rapide, fiable et professionnel.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                { name: 'Facebook', href: '#', icon: 'F' },
                { name: 'WhatsApp', href: 'https://wa.me/237699861968', icon: 'W' },
              ].map(r => (
                <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 border border-slate-800 hover:border-blue-500 hover:bg-blue-600 hover:text-white text-slate-400 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 hover:-translate-y-0.5">
                  {r.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Details (aligned with contact form) */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-white font-semibold text-lg relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Nous contacter
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Adresse</span>
                  <span className="text-slate-300">Zone Industrielle de Bassa, Douala, Cameroun</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Téléphone</span>
                  <a href="tel:+237699861968" className="text-slate-300 hover:text-blue-400 transition-colors">
                    +237 6 99 86 19 68
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">E-mail</span>
                  <a href="mailto:contact@laveriepro.cm" className="text-slate-300 hover:text-blue-400 transition-colors">
                    contact@laveriepro.cm
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2025–2026 Laverie Poids Lourds. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-blue-400 transition-colors">CGU</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

