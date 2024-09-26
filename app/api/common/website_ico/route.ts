import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server';
 
type ResponseData = {
  message: string
}
 

// Notice the function definition:
export async function GET(req:NextRequest) {
  console.log('??',req.url);
  return NextResponse.json(
    {aaa:'10'}
  );
}


// Notice the function definition:
export async function POST(req:NextRequest) {

  const body = await req.json()
  return NextResponse.json(
    {aaa:'10'}
  );
}
