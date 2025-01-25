import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import FileUploader from './FileUploader'
import Search from './Search'

const Header = () => {
  return <header>
    <Search />
    <div>
        <FileUploader />

        <form>
            <Button type='submit' className='sign-out-button'>
                <Image src='/assets/icons/logout.svg'
                alt='logo'
                width={24}
                height={24}
                className='w-6' />
            </Button>
        </form>
    </div>
  </header>
}

export default Header