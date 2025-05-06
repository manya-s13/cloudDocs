import React, { Children } from 'react' 
import Image from 'next/image';

const Layout = ({children}: {children: React.ReactNode}) => {
  
    return <div className='flex min-h-screen'>
        <section className='hidden w-1/2 items-center justify-center bg-brand lg:flex xl:w-2/5'>
            <div className='flex max-h-[800px] max-w-[430px] flex-col justify-start space-y-2'>
                <Image src='/fav.png' alt='logo' width={300} height={300} className='h-auto' />
                <div className=' text-white'>
                    <h1 className='h1'>Manage your files the best way</h1>
                    <p className='body-1'>An application to store all your documents and files</p>
                </div>
                <Image src="/assets/images/files.png" alt='Files' width={342} height={342} className='transition-all hover:rotate-2 hover:scale-105'/>
            </div>
        </section>

        <section className='flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0'>
            <div className='mb-16 lg:hidden'></div>
                {/* <Image
                src="/fav.png"
                alt='logo'
                width={224}
                height={82}
                className='h-auto-w-[200px] lg:w-[250px]'
                 /> */}
                 {children}
        </section>
        </div>
  
};

export default Layout