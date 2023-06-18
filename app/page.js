'use client';
import Image from 'next/image';
import styles from './page.module.css';
import React from 'react';
import '../styles/tailwind.css';
import UserPrompt from '@/components/userPrompt'
import GptResponse from '@/components/gptResponse';

export default function Home() {

  return (
    <main className={styles.main}>
      <div className='flex flex-row h-screen w-full space-x-28 mx-8 '>
        <div className='basis-1/2 border border-black w-full max-h-full h-full p-5 bg-white text-black z-50 rounded-xl'>
          <h4>Plots</h4>  
        </div> 
        <div className='flex flex-col basis-1/2 border border-black w-full max-h-full h-full p-5 bg-white text-black z-50 rounded-xl'>
          <UserPrompt></UserPrompt>
          <GptResponse></GptResponse>
        </div>       
      </div>
    </main>
  )
}
