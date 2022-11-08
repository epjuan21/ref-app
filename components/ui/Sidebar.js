import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Sidebar() {

    const { asPath } = useRouter()
    console.log(asPath)

    return (
        <div className="fixed w-64 h-screen order-first sm:w-64">
            <nav className='top-0 p-4 rounded-xl bg-white'>
                <ul className='flex sm:flex-col content-center justify-between'>
                    <li>
                        <h5 className='mb-2 font-semibold text-slate-900'>Medicamentos</h5>
                        <ul>
                            <li className='py-1 hover:bg-gray-100 rounded hover:cursor-pointer'>
                                <Link href="/current" className={`${asPath == '/current' ? 'font-semibold text-sky-500' : ''}  text-sm font-medium text-slate-700 hover:text-slate-900 p-2`}>
                                    Vigentes
                                </Link>
                            </li>
                            <li className='py-1 hover:bg-gray-100 rounded hover:cursor-pointer'>
                                <Link href="/expired" className={`${asPath == '/expired' ? 'font-semibold text-sky-500' : ''} text-sm font-medium text-slate-700 hover:text-slate-900 p-2`}>
                                    Vencidos
                                </Link>
                            </li>
                            <li className='py-1 hover:bg-gray-100 rounded hover:cursor-pointer'>
                                <Link href="/renewal" className={`${asPath == '/renewal' ? 'font-semibold text-sky-500' : ''} text-sm font-medium text-slate-700 hover:text-slate-900 p-2`}>
                                    En Renovación
                                </Link>
                            </li>
                            <li className='py-1 hover:bg-gray-100 rounded hover:cursor-pointer'>
                                <Link href="/other" className={`${asPath == '/other' ? 'font-semibold text-sky-500' : ''} text-sm font-medium text-slate-700 hover:text-slate-900 p-2`}>
                                    En otros Estados
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
