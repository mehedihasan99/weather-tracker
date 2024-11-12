export const getLocationInfo = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

export const getLocationLatLonList = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/locations')
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

export const getLocationLatLon = async (locationName) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/locations/${locationName}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

export const getResolveLatLon = async (location, lat, lon) => {
  if (lat && lon) {
    return { lat, lon }
  }
  if (location) {
    const { latitude, longitude } = await getLocationLatLon(location)
    return { lat: latitude, lon: longitude }
  }
}
