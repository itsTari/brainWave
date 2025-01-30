import {brainwave} from '../assets'
import {navigation} from '../constant'
import { useLocation } from 'react-router-dom'
import Button from './Button'
import MenuSvg from '../assets/svg/MenuSvg'
import { HambugerMenu } from './design/Header'
import { useState } from 'react'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'



const Header = () => {
    const pathName = useLocation()
    const [openSidebar, setOpenSidebar] = useState(false)

    const toggleSidebar = ()=>{
        if(openSidebar){
            setOpenSidebar(false)
            enablePageScroll()
        }else{
            setOpenSidebar(true)
            disablePageScroll()
        }
    }
    const handleClick=()=>{
        if(!openSidebar) return

        enablePageScroll()
        setOpenSidebar(false)
    }
  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openSidebar ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'} `}>
        <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
            <a href='#hero' className='block w-[12rem] xl:mr-8 '>
                <img src={brainwave} alt='brainwave' width={190} height={40}/>
            </a>
            <nav className={`${openSidebar ? 'flex pt-12' : 'hidden'} fixed top-[5rem] right-0 left-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent `}>
                <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                    {navigation.map((list) =>(
                        <a key={list.id} href={list.url} onClick={handleClick} className={`block font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8  lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 ${list.onlyMobile ? 'lg:hidden':''} ${list.url === pathName.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'}`}>{list.title}</a>
                    ))}
                </div>
                <HambugerMenu/>
            </nav>
            <a href='#signup' className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block '>
                new account
            </a>
            <Button className='hidden lg:flex' href='#login'>
                Sign in
            </Button>
            <Button className='ml-auto lg:hidden' px='px-3' onClick={toggleSidebar}>
                <MenuSvg openSidebar={openSidebar}/>
            </Button>
        </div>
    </div>
  )
}

export default Header