import LocationInfo from '@/components/LocationInfo'
import NoLocationInfo from '@/components/NoLocationInfo'
import { getResolveLatLon } from '@/lib/location-info'

export default async function Page({
  params: { location },
  searchParams: { lat, lon },
}) {
  const resolved = await getResolveLatLon(location, lat, lon)
  if (resolved?.lat && resolved?.lon) {
    return <LocationInfo lat={resolved.lat} lon={resolved.lon} />
  }
  return <NoLocationInfo />
}
