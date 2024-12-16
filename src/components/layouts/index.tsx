'use client'

import { usePathname, useSearchParams } from 'next/navigation'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { ReactNode, useEffect } from 'react'
import SideBar from '../navigation/SideBar'

interface LayoutsProps {
  children: ReactNode
}

export default function Layouts({ children }: LayoutsProps) {
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const readMode = searchParams.get('read-mode')

  const hideSidebar = ['/me'].includes(pathName) || readMode === 'true'

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50
    })
  }, [])
  return (
    <div className="flex h-full w-full flex-col justify-center overflow-x-hidden">
      <div className="flex w-full flex-col justify-center lg:flex-row lg:gap-5">
        <main className="no-scrollbar h-full w-full scroll-smooth transition-all duration-300 lg:ml-10 lg:min-h-screen lg:max-w-[854px]">
          {children}
        </main>
      </div>
    </div>
  )
}
