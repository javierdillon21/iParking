

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useGeolocated } from "react-geolocated";



export default function Home() {
  const [tab, setTab]= useState<string>("main")
  const [latitude, setLatitude]= useState<number>(0)
  const [longitude, setLongitude]= useState<number>(0)


  useEffect(()=>{ 
      navigator.geolocation.watchPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
  },[tab])
console.log(latitude)
  return (
    <div className='flex flex-col flex-1 p-4 '>
      
      <section title='title' className="text-base font-bold font-sans">
        <p className='text-2xl'>iParking</p>
        <div className='flex gap-3 flex-row border justify-center content-center'>
          <p>Javier</p>
          <p className='h-3 w-3 rounded-full self-center bg-green-600'></p>
        </div>
      </section>
      <div title='Navbar' className='flex justify-between items-center p-8 mb-8 h-16 gap-3 text-sm'>
      <span className='flex w-32 shrink border rounded-xl px-2 py-1 gap-2 justify-center items-center' onClick={()=>setTab("stream")}><FontAwesomeIcon icon="video" size='lg'/>Stream</span>
      <span className='flex w-32 shrink border rounded-xl px-2 py-1 gap-2 justify-center items-center' onClick={()=>setTab("parking")}><FontAwesomeIcon icon="parking" size='lg'/>Parking</span>
      <span className='flex w-32 shrink border rounded-xl px-2 py-1 gap-2 justify-center items-center' onClick={()=>setTab("user")}><FontAwesomeIcon icon="user" size='lg'/>User</span>
    </div>
      <section title='body' className="flex flex-1  text-base font-semibold font-sans gap-y-1 text-gray-600">
      <p className='text-sm border-b'></p>
      
      {(tab=="stream") && <iframe id="video" src="http://200.126.15.155/" className='w-full'/>}
      {(tab=="parking") && <div>
        <span>
        <p>Latitud:{latitude}</p>
        <p>Longitud:{longitude}</p>
        </span>
        </div>}
      </section>

      <section title='recientes' className="flex flex-col text-base font-semibold font-sans gap-y-1 text-gray-600">
        <p className='text-sm border-b'>Recientes</p>
        <div className='flex gap-3 flex-row items-center px-2 justify-center content-center'>
            <FontAwesomeIcon icon="graduation-cap" size='1x'/>
            <span className='w-full h-auto'><p className='text-sm text-gray-800'>Universidad</p>
            <p className='text-xs text-gray-400'>ESPOL Campus Gustavo Galindo Km 30,5 Vía Perimetral</p>
          </span>
        </div>
        <div className='flex gap-3 flex-row items-center px-2 justify-center content-center'>
            <FontAwesomeIcon icon="home" size='1x'/>
            <span className='w-full h-auto'><p className='text-sm text-gray-800'>Casa</p>
            <p className='text-xs text-gray-400'>Cdla. Esteros Mz6A V9</p>
          </span>
        </div>
      </section>
    </div>
    
  )
}
