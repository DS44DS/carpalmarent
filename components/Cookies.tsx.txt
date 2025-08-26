'use client'
import { useEffect, useState } from "react"

export default function CookiesBanner(){
  const [ok, setOk] = useState(true)
  useEffect(()=>{
    const v = typeof window !== 'undefined' ? localStorage.getItem('cpr_cookies') : '1'
    setOk(v === '1')
  },[])
  const accept = () => { localStorage.setItem('cpr_cookies','1'); setOk(true) }
  if(ok) return null
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 max-w-3xl bg-white border shadow-xl rounded-2xl p-4 md:p-5 flex flex-col md:flex-row gap-4 items-start z-50">
      <div className="flex-1 text-sm text-gray-700">
        <p><span className="font-semibold">Cookies</span>: usamos cookies para analizar el uso y mejorar tu experiencia.</p>
      </div>
      <div className="flex gap-2">
        <button onClick={accept} className="px-4 py-2 rounded-xl bg-brand text-white font-medium hover:bg-brand-dark">Aceptar</button>
      </div>
    </div>
  )
}
