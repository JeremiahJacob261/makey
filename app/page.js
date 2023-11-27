"use client";
import Image from 'next/image'
import PageBg from '../public/page1_bg.png'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Stack } from '@mui/material'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

      <div
        className="bg-scroll bg-[url('/page1_bg.png')] h-[100vh] w-[100vw] bg-no-repeat bg-cover"
      >
        <Stack direction='row' justifyContent='space-between' alignItems="center" style={{ width: '100%', height: '95px', background: 'white' }}>
          {/* menu */}
          <Stack direction='row' spacing={3} style={{ height: '100%', padding: '12px' }} alignItems="center">
            <p className='text-black font-mono' style={{ fontSize: '12px' }}>English Uk</p>
            <p className='text-black font-mono ' style={{ fontSize: '12px' }}>Category</p>
            <p className='text-black font-mono ' style={{ fontSize: '12px' }}>Shop</p>
          </Stack>

          <Stack>
            <p className='text-black font-mono' style={{ fontSize:'24px',fontWeight:'900' }}>Makey</p>
          </Stack>
          <Stack direction='row' spacing={1} alignItems="center" justifyContent='center' style={{ padding:'8px'}}>
             <Stack direction='row' spacing={3} style={{ height: '100%', padding: '12px' }} alignItems="center">
          <Icon icon="iconamoon:search-thin" width={24} height={24}  alt="search" style={{ color:'black'}}/>
          <Icon icon="solar:heart-outline" width={24} height={24}  alt="search" style={{ color:'black'}}/>
          <Icon icon="tabler:basket" width={24} height={24}  alt="search" style={{ color:'black'}}/>
          </Stack>
          <Stack direction='row' spacing={1}>
         
            <p style={{ color:'black',textAlign:'center',padding:'8px',width:'82px',fontSize:'12px',fontWeight:'200'}}>Login</p>
           
            <Stack alignItems="center" justifyContent='center' sx={{ color:'white',background:'black',borderRadius:'12px'}}>
  <p style={{ color:'white',padding:'8px',textAlign:'center',width:'82px',fontSize:'12px',fontWeight:'200'}} >Register</p>
          
            </Stack>
          </Stack>
          </Stack>
         

        </Stack>
        <Stack direction='column' justifyContent='center' alignItems="center" style={{ width: 'auto', height: '80vh' }} spacing={2}>
          <Stack direction='column' justifyContent='center' alignItems="center" style={{ width: '100%' }} >

            <p style={{ textAlign: 'center', fontSize: '45px', fontWeight: 'bolder' }} className='font-mono'>Your Beauty,</p>
            <p style={{ textAlign: 'center', fontSize: '45px', fontWeight: 'bolder' }} className='font-mono'>your way.</p>
          </Stack>
          <p style={{ textAlign: 'center', fontSize: '18px', maxWidth: '50vw', fontWeight: '200' }} className='font-mono'>Our products are made with carefully selected ingredients that are good for your skin and the planet. We are also committed to cruelty-free and vegan practices.</p>

          <motion.p 
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          style={{ color: 'black', textAlign: 'center', background: 'white', padding: '12px', width: '227px', borderRadius: '35px' }}>Our Collection</motion.p>

        </Stack>
      </div>
    </main>
  )
}
