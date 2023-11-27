import Image from 'next/image'
import PageBg from '../public/page1_bg.png'
import { Icon } from '@iconify/react';

import { Stack } from '@mui/material'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

      <div
        className="bg-scroll bg-[url('/page1_bg.png')] h-[100vh] w-[100vw] bg-no-repeat bg-cover"
      >
        <Stack direction='row' justifyContent='space-between' alignItems="center" style={{ width: '100%', height: '95px', background: 'white' }}>
          {/* menu */}
          <Stack direction='row' spacing={5} style={{ height: '100%', padding: '12px' }} alignItems="center">
            <p className='text-black font-mono' style={{ fontSize: '12px' }}>English Uk</p>
            <p className='text-black font-mono ' style={{ fontSize: '12px' }}>Category</p>
            <p className='text-black font-mono ' style={{ fontSize: '12px' }}>Shop</p>
          </Stack>

          <Stack>
            <p className='text-black font-mono font-4xl'>Makey</p>
          </Stack>
          <Stack direction='row' spacing={5} style={{ height: '100%', padding: '12px' }} alignItems="center">
          <Icon icon="material-symbols-light:search" />
          </Stack>

        </Stack>
        <Stack direction='column' justifyContent='center' alignItems="center" style={{ width: 'auto', height: '80vh' }} spacing={2}>
          <Stack direction='column' justifyContent='center' alignItems="center" style={{ width: '100%' }} >

            <p style={{ textAlign: 'center', fontSize: '45px', fontWeight: 'bolder' }} className='font-mono'>Your Beauty,</p>
            <p style={{ textAlign: 'center', fontSize: '45px', fontWeight: 'bolder' }} className='font-mono'>your way.</p>
          </Stack>
          <p style={{ textAlign: 'center', fontSize: '18px', maxWidth: '50vw', fontWeight: '200' }} className='font-mono'>Our products are made with carefully selected ingredients that are good for your skin and the planet. We are also committed to cruelty-free and vegan practices.</p>

          <p style={{ color: 'black', textAlign: 'center', background: 'white', padding: '12px', width: '227px', borderRadius: '35px' }}>Our Collection</p>

        </Stack>
      </div>
    </main>
  )
}
