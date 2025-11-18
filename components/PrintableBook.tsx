import React from 'react';
import { BOOK_PAGES } from '../constants';
import { PageType } from '../types';

export const PrintableBook: React.FC = () => {
  return (
    <div className="print-container w-full bg-white text-black">
      {BOOK_PAGES.map((page) => {
        // Logic to render specific page types for print
        if (page.type === PageType.COVER) {
          return (
            <div key={page.id} className="page-break-after min-h-screen flex flex-col items-center justify-center text-center p-10">
              <h1 className="font-serif text-5xl font-bold mb-4 leading-none text-black">
                La Metamorfosis<br/>de Adriana
              </h1>
              <p className="font-sans text-sm tracking-[0.3em] uppercase text-gray-600 mb-10 font-bold">
                {page.subtitle}
              </p>
              <div className="w-64 mb-10">
                <img 
                  src="https://images.squidge.org/images/2025/11/16/Libro-Mila-Ciudad-La-metamorfosis-de-Adriana_11zon-1-Photoroom.md.png" 
                  alt="Portada" 
                  className="w-full h-auto"
                />
              </div>
              <p className="font-serif italic text-xl text-gray-700 max-w-lg">
                "{page.content}"
              </p>
            </div>
          );
        }

        if (page.type === PageType.INTRO) {
          return (
            <div key={page.id} className="page-break-after p-10 pt-20 max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-8 text-center text-black uppercase">{page.title}</h2>
              <div className="font-serif text-lg text-justify leading-relaxed space-y-4 mb-16">
                 {(page.content as string[]).map((p, i) => <p key={i}>{p}</p>)}
              </div>
              
              <div className="border-t border-gray-300 w-24 mx-auto my-10"></div>

              <h3 className="font-serif text-2xl font-bold mb-6 text-center text-black">
                {page.extraData.dedication.title}
              </h3>
              <div className="font-serif text-base italic text-justify leading-relaxed space-y-4 text-gray-700">
                {page.extraData.dedication.text.map((p: string, i: number) => <p key={i}>{p}</p>)}
              </div>
            </div>
          );
        }

        if (page.type === PageType.INDEX) {
          return (
            <div key={page.id} className="page-break-after p-10 pt-20 max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl font-bold mb-12 text-center border-b pb-4 text-black">{page.title}</h2>
              <ul className="space-y-4">
                {page.extraData.items.map((item: any, idx: number) => (
                  <li key={idx} className={`flex justify-between ${item.isSection ? 'mt-10 font-bold border-b border-gray-300 pb-2 uppercase tracking-widest text-sm' : 'text-xl italic'}`}>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        if (page.type === PageType.CHAPTER) {
          return (
            <div key={page.id} className="page-break-after p-10 pt-20 max-w-3xl mx-auto">
              <div className="text-center mb-12">
                {page.title && (
                  <h3 className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-2">
                    {page.title}
                  </h3>
                )}
                <h2 className="font-serif text-4xl font-bold text-black">
                  {page.subtitle}
                </h2>
              </div>
              
              <article className="font-serif text-lg leading-loose text-justify text-gray-900">
                {(page.content as string[]).map((p, i) => {
                   const isDialogue = p.trim().startsWith('—') || p.trim().startsWith('-');
                   return (
                    <p key={i} className={`mb-6 ${isDialogue ? 'pl-4' : ''}`}>
                      {/* Simple Drop Cap for print */}
                      {i === 0 && !isDialogue && (
                        <span className="float-left text-5xl font-bold text-gray-400 mr-2 mt-[-8px] leading-[0.8]">
                          {p.charAt(0)}
                        </span>
                      )}
                      {i === 0 && !isDialogue ? p.slice(1) : p}
                    </p>
                   )
                })}
              </article>
            </div>
          );
        }

        if (page.type === PageType.CTA) {
          return (
            <div key={page.id} className="page-break-after p-10 flex flex-col items-center justify-center min-h-[50vh] text-center">
              <h2 className="font-serif text-3xl font-bold mb-6 text-black">{page.title}</h2>
              <div className="font-serif text-xl text-justify max-w-2xl mb-10 space-y-4">
                {(page.content as string[]).slice(0, 3).map((p, i) => <p key={i}>{p}</p>)}
              </div>
              
              <div className="border p-6 rounded-lg border-gray-300 mb-10 w-full max-w-md">
                <h4 className="font-sans font-bold uppercase tracking-widest mb-2">Continuará...</h4>
                <p className="font-serif italic">Consigue el libro completo en {page.extraData.authorSite}</p>
              </div>

              <div className="flex flex-col items-center">
                <img 
                  src="https://images.squidge.org/images/2025/11/01/milaciudadeeba031bf447f273.webp" 
                  alt="Mila Ciudad" 
                  className="w-40 h-auto object-cover mb-4 grayscale rounded-lg border border-gray-300"
                />
                <h3 className="font-serif font-bold text-xl">{page.extraData.author}</h3>
                <p className="font-sans text-xs text-gray-500 mt-2 uppercase tracking-widest">{page.extraData.authorSite}</p>
              </div>
            </div>
          );
        }
        
        return null;
      })}
    </div>
  );
};