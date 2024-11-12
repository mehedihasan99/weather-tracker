import { getLocationByCityName } from '../locations-utils'

const { NextResponse } = require('next/server')

export async function GET(request, { params: { city } }) {
  const cityLocation = await getLocationByCityName(city)
  return NextResponse.json(cityLocation)
}
