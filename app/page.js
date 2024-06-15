'use client';  

import { useRouter } from 'next/router';
import { useState } from 'react';
import './globals.css';  
const Page = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const handleJoinVote = () => {
    if (!isLoggedIn) {
      router.push('/LoginFormUser');
    } else {
      console.log('Dołącz do głosowania');
    }
  };

  const handleCreateVote = () => {
    if (!isLoggedIn) {
      router.push('/LoginFormUser');
    } else {
      console.log('Stwórz głosowanie');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Głosowanie Online</h1>

        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-2xl font-semibold mb-2">Dołącz do głosowania</h2>
          <p className="mb-4">Wprowadź kod głosowania, aby dołączyć.</p>
          <input
            type="text"
            placeholder="Kod głosowania"
            className="w-full px-3 py-2 mb-4 border rounded-lg"
          />
          <button
            onClick={handleJoinVote}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Dołącz
          </button>
        </div>

        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">Stwórz głosowanie</h2>
          <p className="mb-4">Stwórz nowe głosowanie dla swoich uczestników.</p>
          <button
            onClick={handleCreateVote}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Stwórz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
