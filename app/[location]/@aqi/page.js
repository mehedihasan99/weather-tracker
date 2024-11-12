import AQIComponent from '@/components/AQIComponent'
import NoLocationInfo from '@/components/NoLocationInfo'
import { getResolveLatLon } from '@/lib/location-info'

export default async function AQIPage({
  params: { location },
  searchParams: { lat, lon },
}) {
  const resolved = await getResolveLatLon(location, lat, lon)
  if (resolved?.lat && resolved?.lon) {
    return <AQIComponent lat={resolved.lat} lon={resolved.lon} />
  }
  return <NoLocationInfo />
}
