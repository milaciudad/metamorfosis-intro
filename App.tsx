import React, { useState, useEffect } from 'react';
import { BookReader } from './components/BookReader';
import { PrintableBook } from './components/PrintableBook';
import { BOOK_PAGES } from './constants';
import { ChevronLeft, ChevronRight, Menu, Download } from 'lucide-react';

export default function App() {
  const [currentPageId, setCurrentPageId] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Preload images
  useEffect(() => {
    const imagesToPreload = [
      'https://images.squidge.org/images/2025/11/16/Libro-Mila-Ciudad-La-metamorfosis-de-Adriana_11zon-1-Photoroom.md.png',
      'https://images.squidge.org/images/2025/11/01/milaciudadeeba031bf447f273.webp'
    ];

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleDownloadPDF = () => {
    window.print();
  };

  // Safety fallback if pages are undefined for some reason
  const pages = BOOK_PAGES || [];
  const currentPage = pages.find(p => p.id === currentPageId) || pages[0];
  const totalPages = pages.length;

  const goToNext = () => {
    if (currentPageId < totalPages) {
      setCurrentPageId(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const goToPrev = () => {
    if (currentPageId > 1) {
      setCurrentPageId(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const goToPage = (id: number) => {
    setCurrentPageId(id);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Calculate progress percentage
  const progress = totalPages > 0 ? ((currentPageId) / totalPages) * 100 : 0;

  if (!currentPage) return null;

  return (
    <>
      {/* SCREEN VIEW (Interactive App) */}
      <div className="print:hidden min-h-screen bg-stone-200 flex flex-col items-center justify-start relative font-serif">
        
        {/* Progress Bar (Top) */}
        <div className="fixed top-0 left-0 w-full h-1 bg-stone-300 z-50">
          <div 
            className="h-full bg-brand transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Header Controls */}
        <div className="fixed top-4 right-4 z-50 flex items-center space-x-3">
           {/* Download PDF Button */}
           <button
            onClick={handleDownloadPDF}
            className="p-2 bg-brand/90 text-white rounded-full shadow-md hover:bg-brand transition-colors flex items-center space-x-2 md:px-4 md:py-2 md:rounded-lg"
            title="Descargar como PDF"
          >
            <Download size={20} />
            <span className="hidden md:inline font-sans text-sm font-bold tracking-wider uppercase">PDF</span>
          </button>

          {/* Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 bg-white/80 backdrop-blur-md rounded-full shadow-md text-gray-800 hover:bg-white transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-stone-100/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 animate-fadeIn">
            <h3 className="font-sans text-sm tracking-[0.2em] text-gray-400 uppercase mb-4">Navegación</h3>
            {pages.map((page) => (
              <button 
                key={page.id} 
                onClick={() => goToPage(page.id)}
                className={`text-2xl font-serif ${page.id === currentPageId ? 'text-gray-900 font-bold border-b-2 border-brand' : 'text-gray-500 hover:text-gray-800'}`}
              >
                {page.type === 'CHAPTER' ? page.subtitle || page.title : page.title}
              </button>
            ))}
            
            <div className="w-16 h-px bg-gray-300 my-4"></div>
            
            <button 
              onClick={handleDownloadPDF}
              className="flex items-center space-x-2 text-brand font-sans font-bold uppercase tracking-widest"
            >
              <Download size={20} />
              <span>Descargar PDF</span>
            </button>
          </div>
        )}

        {/* Main Reader Container */}
        <main className="w-full max-w-4xl flex-grow my-0 md:my-8 px-0 md:px-4 perspective-origin-center">
          
          {/* The "Paper" */}
          <div className="bg-paper shadow-2xl min-h-[100vh] md:min-h-[90vh] w-full relative overflow-hidden flex flex-col">
            
            {/* Decorative texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

            <div className="flex-grow p-6 md:p-16 lg:p-20 relative z-10">
               <BookReader page={currentPage} onNavigate={goToPage} />
            </div>

            {/* Footer Page Number */}
            <div className="h-16 flex items-center justify-center border-t border-stone-100 mt-auto">
              <span className="font-sans text-xs text-gray-400 tracking-widest">
                {currentPageId} / {totalPages}
              </span>
            </div>
          </div>
        </main>

        {/* Desktop Navigation Side Controls */}
        <div className="fixed top-1/2 -translate-y-1/2 left-8 hidden xl:block z-30">
          <button 
            onClick={goToPrev} 
            disabled={currentPageId === 1}
            className={`p-4 rounded-full transition-all duration-300 ${currentPageId === 1 ? 'opacity-0 cursor-default' : 'bg-white text-gray-800 shadow-lg hover:scale-110 hover:bg-stone-50'}`}
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        <div className="fixed top-1/2 -translate-y-1/2 right-8 hidden xl:block z-30">
           <button 
            onClick={goToNext} 
            disabled={currentPageId === totalPages}
            className={`p-4 rounded-full transition-all duration-300 ${currentPageId === totalPages ? 'opacity-0 cursor-default' : 'bg-white text-gray-800 shadow-lg hover:scale-110 hover:bg-stone-50'}`}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile Bottom Bar Navigation */}
        <div className="sticky bottom-0 w-full bg-white border-t border-stone-200 p-4 flex justify-between items-center xl:hidden z-30 safe-area-bottom shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
          <button 
            onClick={goToPrev} 
            disabled={currentPageId === 1}
            className={`flex items-center space-x-2 px-4 py-2 rounded active:bg-stone-100 ${currentPageId === 1 ? 'text-gray-300' : 'text-gray-800'}`}
          >
            <ChevronLeft size={20} />
            <span className="font-sans text-sm font-medium">Anterior</span>
          </button>

          <button 
            onClick={goToNext} 
            disabled={currentPageId === totalPages}
            className={`flex items-center space-x-2 px-4 py-2 rounded active:bg-stone-100 ${currentPageId === totalPages ? 'text-gray-300' : 'text-gray-800'}`}
          >
            <span className="font-sans text-sm font-medium">Siguiente</span>
            <ChevronRight size={20} />
          </button>
        </div>

      </div>

      {/* PRINT VIEW (Hidden on screen, Visible on print) */}
      <div className="hidden print:block">
        <PrintableBook />
      </div>
    </>
  );
}