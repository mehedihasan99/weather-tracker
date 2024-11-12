import NoLocationInfo from '@/components/NoLocationInfo'
import WindComponent from '@/components/WindComponent'
import { getResolveLatLon } from '@/lib/location-info'

export default async function WindPage({
  params: { location },
  searchParams: { lat, lon },
}) {
  const resolved = await getResolveLatLon(location, lat, lon)
  if (resolved?.lat && resolved?.lon) {
    return <WindComponent lat={resolved.lat} lon={resolved.lon} />
  }
  return <NoLocationInfo />
}
