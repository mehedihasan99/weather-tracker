const { NextResponse } = require('next/server')
const { getAllLocations } = require('./locations-utils')

export async function GET() {
  const locations = await getAllLocations()
  return NextResponse.json(locations)
}
