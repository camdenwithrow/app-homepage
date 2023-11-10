import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MoreInfo, Edit } from './icons/Icons'

interface AppData {
  id: number
  name: string
  url: string
  logo: string
}


function App() {
  const [apps, setApps] = useState<AppData[]>([])
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('https://api.camdenwithrow.com/apps')
        setApps(resp.data)
      } catch (error) {
        console.log("ERROR", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="min-h-screen w-screen relative text-slate-200 bg-slate-500/40">
      <div className="absolute inset-0 -z-50 bg-center bg-cover bg-hero"></div>
      <div className="absolute top-0 left-0 right-0 h-96 -z-40  bg-gradient-to-t from-transparent to-slate-900"></div>
      <div className="w-full py-4 px-8 flex items-center justify-between ">
        <h2 className=" text-xl font-bold">App Drawer</h2>
        <button className="py-2 px-3 rounded-lg border border-slate-200 transition hover:bg-slate-200 hover:text-slate-900 active:bg-slate-600 active:text-slate-200 active:border-slate-600">Log out</button>
      </div>
      <div className="w-full p-8 sm:p-0 sm:w-auto mt-24 flex justify-center">
        <div className="w-full sm:w-auto grid grid-cols-2 sm:grid-cols-3 gap-8 md:grid-cols-4">
          {apps.map((app) => (
            <a
              key={app.id}
              // href={app.url}
              href="#"
              className="relative p-4 flex flex-col justify-center items-center bg-slate-500/20 cursor-pointer rounded-lg group"
            >
              <span className="absolute inset-0 shadow shadow-slate-500 rounded-lg group-active:opacity-0"></span>
              <span className="absolute inset-0 rounded-lg shadow-lg shadow-slate-500 opacity-0 duration-100 transition-opacity group-hover:opacity-60 group-active:opacity-0 active:transition-none"></span>
              <img src={app.logo} alt={`${app.name} logo`} className="h-24 w-24 sm:h-32 sm:w-32" />
              <h4 className="mt-2 font-extrabold text-xs uppercase">{app.name}</h4>
              <button onClick={() => setSelectedApp(app)} className='absolute top-2 right-1 h-8 w-8 z-1'>
                <MoreInfo className="stroke-slate-200 w-8 h-8 border-none" />
              </button>
            </a>
          ))}
        </div>
      </div>
      {selectedApp &&
        <div className='absolute p-6 z-10 inset-0 flex justify-center items-center bg-slate-500/50'>
          <div className='w-full sm:w-[500px] px-10 py-6 bg-slate-900/95 rounded-lg'>
            <div className='grid grid-cols-12 overflow-hidden text-ellipsis'>
              <div className='col-span-12 sm:col-span-2 text-sm'>name: </div>
              <div className='col-span-10 sm:col-span-9 font-extrabold uppercase text-ellipsis overflow-hidden'>{selectedApp.name}</div>
              <button>
                <Edit className='ml-3 h-4 w-4 stroke-slate-200' />
              </button>
              <div className='col-span-12 sm:col-span-2 text-sm'>url: </div>
              <div className='col-span-10 sm:col-span-9 font-extrabold text-ellipsis overflow-hidden'>{selectedApp.url}</div>
              <button>
                <Edit className='ml-3 h-4 w-4 stroke-slate-200' />
              </button>
              <div className='col-span-12 sm:col-span-2 text-sm'>logo url: </div>
              <div className='col-span-10 sm:col-span-9 w-full font-extrabold text-ellipsis overflow-hidden'>{selectedApp.logo}</div>
              <button>
                <Edit className='ml-3 h-4 w-4 stroke-slate-200' />
              </button>
            </div>
            <div className='w-full mt-6 flex justify-end items-center'>
              <button onClick={() => setSelectedApp(null)} className='mr-3 px-2 py-1 border border-slate-200 rounded-lg'>Close</button>
              <button onClick={() => setSelectedApp(null)} className='px-2 py-1 text-slate-800 bg-slate-400 border border-slate-400 rounded-lg'>Apply</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default App
