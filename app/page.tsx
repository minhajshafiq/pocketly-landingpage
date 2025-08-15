'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Regex pour validation email plus robuste
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = useCallback((email: string) => {
    if (!email) {
      setEmailError('');
      return false;
    }
    
    // Vérifications supplémentaires
    if (email.length < 5) {
      setEmailError('L&apos;email doit contenir au moins 5 caractères');
      return false;
    }
    
    if (!email.includes('@')) {
      setEmailError('L&apos;email doit contenir le symbole @');
      return false;
    }
    
    if (!email.includes('.')) {
      setEmailError('L&apos;email doit contenir un point');
      return false;
    }
    
    if (!emailRegex.test(email)) {
      setEmailError('Veuillez entrer une adresse email valide');
      return false;
    }
    
    setEmailError('');
    return true;
  }, [emailRegex]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  // Validation en temps réel avec délai
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (email) {
        validateEmail(email);
      } else {
        setEmailError('');
      }
    }, 500); // Délai de 500ms

    return () => clearTimeout(timeoutId);
  }, [email, validateEmail]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsSubmitted(true);
      // Ici vous pourriez ajouter la logique pour envoyer l'email à votre backend
      console.log('Email submitted:', email);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#4A84FF]/5 to-[#4A84FF]/10 flex flex-col lg:flex-row">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row">
      {/* Section gauche - Waitlist */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-12 lg:py-0">
        <div className="max-w-md mx-auto lg:mx-0">
          {/* Logo et nom de marque */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#4A84FF] rounded-lg flex items-center justify-center hover:bg-[#3A74EF] transition-colors duration-300">
              <div className="w-6 h-6 bg-white rounded-sm relative">
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#4A84FF] rounded-full animate-pulse"></div>
              </div>
            </div>
            <span className="text-2xl font-bold text-white hover:text-[#4A84FF] transition-colors duration-300">Pocketly</span>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Your smart <span className="text-[#4A84FF]">budget buddy</span>
          </h1>

          {/* Slogan */}
          <p className="text-lg text-white/90 mb-8">
            A simple (but powerful) app to track your money
          </p>
          
          {/* Description */}
          <p className="text-lg text-white/90 mb-8">
            Never ask &ldquo;Where did all my money go?&rdquo; again 🫣
          </p>
          
          {/* CTA */}
          <p className="text-lg text-white/90 mb-8">
            👉 Start saving better, spending smarter, and reaching your goals — effortlessly.
          </p>

          {/* Formulaire d'inscription */}
          {!isSubmitted ? (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A84FF] focus:border-transparent transition-all duration-200 ${
                    emailError ? 'border-red-500 focus:ring-red-500' : 
                    email && !emailError ? 'border-green-500 focus:ring-green-500' : 'border-gray-300 focus:ring-[#4A84FF]'
                  }`}
                    required
                  />
                  {email && !emailError && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#4A84FF] text-white font-medium rounded-lg hover:bg-[#3A74EF] transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Join waitlist
                </button>
              </form>
              
              {/* Message d'erreur email */}
              {emailError && (
                <div className="text-red-500 text-sm mt-2 flex items-center gap-2 animate-pulse">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">{emailError}</span>
                </div>
              )}
            </>
          ) : (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">
                🎉 Thanks for joining! We&apos;ll keep you updated.
              </p>
            </div>
          )}

          {/* Lien de suivi */}
          <div className="flex items-center gap-2 text-sm text-white/70">
            <span>Follow @pocketly for updates</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </div>

      {/* Section droite - Image de l'application */}
      <div className="flex-1 flex items-center justify-center px-8 lg:px-16 xl:px-24 py-12 lg:py-0">
        <div className="relative">
          {/* Appareil mobile avec image */}
          <div className="w-80 lg:w-[400px] h-[600px] lg:h-[700px] bg-[#4A84FF] rounded-[2rem] p-1 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
            <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
              {/* Image de l'application */}
              <div className="h-full flex items-center justify-center p-1">
                <Image
                  src="/AppFirstPage.jpg"
                  alt="Pocketly Budget App Interface"
                  width={400}
                  height={800}
                  className="rounded-[1.5rem] w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Effet de perspective */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4A84FF]/10 to-transparent rounded-[3rem] transform rotate-3 scale-105 -z-10 animate-pulse-slow"></div>
        </div>
      </div>
      </div>
    </div>
  );
}
