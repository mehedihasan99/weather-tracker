import NoLocationInfo from '@/components/NoLocationInfo'
import WeatherComponent from '@/components/WeatherComponent'
import { getResolveLatLon } from '@/lib/location-info'

export default async function WeatherPage({
  params: { location },
  searchParams: { lat, lon },
}) {
  const resolved = await getResolveLatLon(location, lat, lon)
  if (resolved?.lat && resolved?.lon) {
    return <WeatherComponent lat={resolved.lat} lon={resolved.lon} />
  }
  return <NoLocationInfo />
}
