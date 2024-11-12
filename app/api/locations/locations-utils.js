const locations = [
  { cityName: 'Dhaka', latitude: 23.8103, longitude: 90.4125 },
  { cityName: 'Kolkata', latitude: 22.5726, longitude: 88.3639 },
  { cityName: 'London', latitude: 51.5074, longitude: -0.1278 },
  { cityName: 'Paris', latitude: 48.8566, longitude: 2.3522 },
  { cityName: 'Rome', latitude: 41.9028, longitude: 12.4964 },
  { cityName: 'Berlin', latitude: 52.52, longitude: 13.405 },
  { cityName: 'Madrid', latitude: 40.4168, longitude: -3.7038 },
  { cityName: 'Moscow', latitude: 55.7558, longitude: 37.6173 },
  { cityName: 'Istanbul', latitude: 41.0082, longitude: 28.9784 },
  { cityName: 'Tokyo', latitude: 35.6895, longitude: 139.6917 },
  { cityName: 'Bangkok', latitude: 13.7563, longitude: 100.5018 },
  { cityName: 'Beijing', latitude: 39.9042, longitude: 116.4074 },
  { cityName: 'Singapore', latitude: 1.3521, longitude: 103.8198 },
  { cityName: 'Dubai', latitude: 25.2048, longitude: 55.2708 },
  { cityName: 'Hong Kong', latitude: 22.3193, longitude: 114.1694 },
]

// get all locations

const getAllLocations = () => {
  return locations
}

// get location by city name
const getLocationByCityName = (cityName) => {
  if (!cityName) {
    return null
  }
  return (
    locations.find(
      (location) => location.cityName.toLowerCase() === cityName.toLowerCase()
    ) || {}
  )
}

export { getAllLocations, getLocationByCityName }
