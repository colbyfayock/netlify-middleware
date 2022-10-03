import { NextResponse } from 'next/server';
import { MiddlewareRequest } from '@netlify/next';

import shippingRates from 'data/shipping-rates.json';

export async function middleware(nextRequest) {
  const request = new MiddlewareRequest(nextRequest);
  const response = await request.next();

  try {
    const shipping = shippingRates.find(({ country }) => country === request.geo.country);

    if ( shipping ) {
      response.setPageProp('shipping', shipping);
    }
  } catch(e) {
    console.log('e', e);
  }

  return response;
}