'use client'
import { getLocationLatLonList } from '@/lib/location-info'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function LocationSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [locations, setLocations] = useState([])
  console.log(locations)
  useEffect(() => {
    async function getLocationList() {
      const data = await getLocationLatLonList()
      setLocations(data)
    }
    getLocationList()
  }, [])
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <Image
          className="size-9"
          src="/link.svg"
          alt="link icon"
          width={20}
          height={20}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations &&
              locations.map((location) => (
                <Link
                  href={`/${location.cityName}?lat=${location.latitude}&lon=${location.longitude}`}
                  key={location.cityName}
                >
                  <li>{location.cityName}</li>
                </Link>
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}
