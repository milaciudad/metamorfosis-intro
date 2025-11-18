import React, { useEffect, useRef, useState } from 'react';
import { PageContent, PageType } from '../types';
import { BookOpen, Star, ArrowRight, ShoppingBag, Mail, Check } from 'lucide-react';

interface BookReaderProps {
  page: PageContent;
  onNavigate: (id: number) => void;
}

export const BookReader: React.FC<BookReaderProps> = ({ page, onNavigate }) => {
  const topRef = useRef<HTMLDivElement>(null);
  
  // Subscription Form State
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // Scroll to top when page changes and reset form
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    // Reset form state when navigating to CTA page afresh
    if (page.type !== PageType.CTA) {
      setSubStatus('idle');
      setEmail('');
    }
  }, [page.id, page.type]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setSubStatus('loading');
    
    try {
      const response = await fetch("https://formspree.io/f/mqaneeyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setSubStatus('success');
        setEmail('');
      } else {
        console.error("Error en la suscripción");
        setSubStatus('idle');
        alert("Hubo un problema al suscribirse. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error de red", error);
      setSubStatus('idle');
      alert("Hubo un error de conexión. Por favor, verifica tu internet.");
    }
  };

  const renderContent = () => {
    switch (page.type) {
      case PageType.COVER:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-10 py-12 md:py-20">
            <div className="flex flex-col items-center space-y-4 mb-6">
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-none">
                La Metamorfosis<br/>de Adriana
              </h1>
              <p className="font-sans text-sm md:text-base tracking-widest uppercase text-brand font-semibold max-w-md mx-auto leading-relaxed">
                La inspiradora historia de una mujer que transformó la crisis de los 50 en su mayor liberación
              </p>
            </div>
            
            {/* Floating Image Only - No Box, No Spine */}
            <div className="relative w-72 md:w-96 animate-float cursor-pointer">
              <img 
                src="https://images.squidge.org/images/2025/11/16/Libro-Mila-Ciudad-La-metamorfosis-de-Adriana_11zon-1-Photoroom.md.png" 
                alt="Portada La Metamorfosis de Adriana" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            <p className="text-gray-600 font-serif italic max-w-2xl mx-auto text-xl md:text-2xl mt-10 leading-relaxed">
              "{page.content}"
            </p>
            <div className="pt-12 animate-bounce text-gray-400 text-base font-sans tracking-widest">
              DESLIZA PARA LEER
            </div>
          </div>
        );

      case PageType.INTRO:
        return (
          <div className="flex flex-col h-full justify-center py-10 space-y-20">
            {/* Welcome Note */}
            <section className="max-w-3xl mx-auto text-center">
               <div className="flex justify-center mb-6 text-brand">
                 <BookOpen size={32} strokeWidth={1.5} />
               </div>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-8 tracking-wide uppercase">
                 {page.title}
               </h2>
               <div className="font-serif text-xl md:text-2xl text-gray-700 leading-relaxed space-y-6 text-justify">
                 {(page.content as string[]).map((p, idx) => (
                   <p key={idx}>{p}</p>
                 ))}
               </div>
            </section>

            <div className="w-32 h-px bg-gray-300 mx-auto"></div>

            {/* Dedication */}
            <section className="max-w-3xl mx-auto text-center italic">
              <div className="flex justify-center mb-6 text-brand">
                 <Star size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-gray-800 mb-8">
                {page.extraData.dedication.title}
              </h3>
              {/* Decreased font size here for the longer dedication */}
              <div className="font-serif text-lg md:text-xl text-gray-600 leading-relaxed space-y-4 text-justify">
                 {page.extraData.dedication.text.map((p: string, idx: number) => (
                   <p key={idx}>{p}</p>
                 ))}
              </div>
            </section>
          </div>
        );

      case PageType.INDEX:
        return (
          <div className="py-10 px-4 md:px-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-900 mb-16 border-b pb-8 border-gray-200">
              {page.title}
            </h2>
            <ul className="space-y-8 max-w-2xl mx-auto">
              {page.extraData.items.map((item: any, idx: number) => (
                <li key={idx} className={`flex flex-col ${item.isSection ? 'mt-16 mb-6' : ''}`}>
                  {item.isSection ? (
                    <span className="font-sans font-bold text-base md:text-lg tracking-[0.2em] text-gray-400 uppercase w-full border-b border-gray-200 pb-3">
                      {item.label}
                    </span>
                  ) : (
                    // If item has a pageId, it's clickable
                    item.pageId ? (
                      <button 
                        onClick={() => onNavigate(item.pageId)}
                        className="group flex items-center justify-between w-full p-4 -mx-4 rounded-lg hover:bg-stone-100 transition-all duration-300 text-left"
                      >
                        <span className="font-serif text-2xl md:text-3xl text-gray-800 group-hover:text-gray-900 font-medium transition-colors">
                          {item.label}
                        </span>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-sans font-bold text-brand border border-brand/40 px-4 py-1.5 rounded-full group-hover:bg-brand group-hover:text-white transition-all uppercase tracking-wider">
                            Leer
                          </span>
                        </div>
                      </button>
                    ) : (
                      // Locked/Unavailable items
                       <div className="flex items-center justify-between w-full p-4 -mx-4 opacity-50 cursor-not-allowed select-none">
                        <span className="font-serif text-2xl md:text-3xl text-gray-400">
                          {item.label}
                        </span>
                        {item.locked && (
                          <span className="text-xs font-sans text-gray-400 uppercase tracking-widest">
                            Libro Completo
                          </span>
                        )}
                       </div>
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>
        );

      case PageType.CHAPTER:
        return (
          <div className="py-8 md:py-16">
            <header className="text-center mb-16">
              {page.title && (
                <h3 className="font-sans text-base font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">
                  {page.title}
                </h3>
              )}
              {page.subtitle && (
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  {page.subtitle}
                </h2>
              )}
              <div className="w-24 h-1.5 bg-brand mx-auto mt-10 mb-10"></div>
            </header>
            
            <article className="prose prose-xl md:prose-2xl prose-stone mx-auto font-serif text-gray-800 leading-loose text-justify max-w-3xl">
              {(page.content as string[]).map((paragraph, idx) => {
                // Simple heuristic for dialogue styling
                const isDialogue = paragraph.trim().startsWith('—') || paragraph.trim().startsWith('-');
                
                return (
                  <p key={idx} className={`mb-8 text-xl md:text-2xl leading-loose ${isDialogue ? 'pl-6 md:pl-0 text-gray-700' : ''}`}>
                    {/* Drop Cap logic: First paragraph, not dialogue */}
                    {idx === 0 && !isDialogue && paragraph.length > 0 && (
                      <span className="float-left text-6xl md:text-7xl font-bold text-brand mr-4 mt-[-6px] leading-[0.8]">
                        {paragraph.charAt(0)}
                      </span>
                    )}
                    {idx === 0 && !isDialogue && paragraph.length > 0 ? paragraph.slice(1) : paragraph}
                  </p>
                )
              })}
            </article>

            <div className="flex justify-center mt-20">
               <span className="text-3xl text-gray-300 tracking-[1em]">***</span>
            </div>
          </div>
        );

      case PageType.CTA:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center py-16 space-y-10">
            
            {/* Header Icon */}
            <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center text-brand mb-6 shadow-inner">
              {subStatus === 'success' ? <Check size={40} /> : <Mail size={40} />}
            </div>
            
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 max-w-3xl leading-snug">
              {subStatus === 'success' ? "¡Estás dentro!" : page.title}
            </h2>

            {/* Body Text */}
            <div className="space-y-6 max-w-2xl mx-auto font-serif text-2xl md:text-3xl text-gray-600 leading-relaxed text-justify">
               {subStatus === 'success' ? (
                 <p className="text-center animate-fadeIn">
                   Gracias por unirte. Serás la primera persona en saber cuándo Adriana despliegue sus alas por completo. Revisa tu bandeja de entrada pronto.
                 </p>
               ) : (
                 (page.content as string[]).map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))
               )}
            </div>

            {/* SUBSCRIPTION FORM DRAWER */}
            {subStatus !== 'success' && (
              <div className="w-full max-w-lg mt-8 mx-auto">
                <div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-stone-100 relative overflow-hidden">
                  
                  {/* Decorative element */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent"></div>

                  <h4 className="font-sans text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
                    Lista de espera exclusiva
                  </h4>

                  <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
                    <div className="relative">
                      <input 
                        type="email" 
                        name="email" 
                        required
                        placeholder="Tu correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-lg text-lg font-serif text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:bg-white transition-all"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={subStatus === 'loading'}
                      className="w-full bg-brand hover:bg-[#14a0ad] text-white font-sans font-bold tracking-widest uppercase py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-wait"
                    >
                      {subStatus === 'loading' ? (
                        <span>Procesando...</span>
                      ) : (
                        <>
                          <span>{page.extraData.buttonText || "Avísame del lanzamiento"}</span>
                          <ArrowRight size={20} />
                        </>
                      )}
                    </button>
                  </form>
                  <p className="mt-4 text-xs text-gray-400 font-sans">
                    Cero spam. Solo literatura y noticias importantes.
                  </p>
                </div>
                <p className="mt-8 text-base text-gray-400 font-sans">Próximamente en Amazon (Papel y Kindle)</p>
              </div>
            )}

            {/* Author Section */}
            <div className="mt-16 border-t border-gray-200 pt-10 w-full max-w-xl flex flex-col items-center">
              <h4 className="font-sans text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Sobre la autora</h4>
              <p className="font-serif text-2xl font-bold text-gray-800 mb-6">{page.extraData.author}</p>
              
              {/* Author Image - Vertical Rectangular - Larger and Centered */}
              <div className="w-56 md:w-72 aspect-[3/4] bg-stone-200 mb-8 rounded-xl overflow-hidden shadow-xl ring-4 ring-white relative">
                <img 
                  src="https://images.squidge.org/images/2025/11/01/milaciudadeeba031bf447f273.webp" 
                  alt="Mila Ciudad"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>

              <p className="font-serif italic text-xl text-gray-600 mb-3 text-center px-4">{page.extraData.authorBio}</p>
              <a 
                href={page.extraData.authorSiteUrl || `https://${page.extraData.authorSite}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand hover:underline text-lg font-sans mt-4 inline-block"
              >
                {page.extraData.authorSite}
              </a>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div ref={topRef} className="animate-fadeIn">
      {renderContent()}
    </div>
  );
};