import React from 'react';


function Layout({ children }) {
  return (
    <div className="min-h-screen bg-lilac bg-lilac-animation">
      <header className="py-4">
      <p className="text-center text-white Fasthand text-3xl">iLoveTamar.com</p>
      </header>
      <main className="container mx-auto py-8">
        {children}
      </main>
    </div>
  );
}

export default Layout;