import NoLocationInfo from '@/components/NoLocationInfo'
import TemperatureComponent from '@/components/TemperatureComponent'
import { getResolveLatLon } from '@/lib/location-info'

export default async function TemperaturePage({
  params: { location },
  searchParams: { lat, lon },
}) {
  const resolved = await getResolveLatLon(location, lat, lon)
  if (resolved?.lat && resolved?.lon) {
    return <TemperatureComponent lat={resolved.lat} lon={resolved.lon} />
  }
  return <NoLocationInfo />
}
