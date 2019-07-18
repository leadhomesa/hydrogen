import React, {Component} from 'react'
import {render} from 'react-dom'

import { listingUrl } from '../../src';

class Demo extends Component {
  render() {
    return <div>
      <h1>@leadhome/utilities Demo</h1>
      <p>Listing URL: {listingUrl({
        id: 'LH-83982',
        agentId: '475941354005856256',
        propertyType: 'House',
        title: '3 Bedroom, 2 Bathroom home with a flat',
        status: 'For Sale',
        price: 1800000,
        beds: 3,
        baths: 2,
        parking: 2,
        size: 1242,
        ratesAndTaxes: null,
        levy: 0,
        petsAllowed: true,
        suburb: 'Weltevreden Park',
        city: 'Roodepoort',
        description: 'This beautiful home offers everything you need and more. The main house has three bedrooms and two bathrooms, while the flat has a bedroom, kitchenette and bathroom. The flat has a separate entrance from the main house.\n\nThe living areas are spacious with a fireplace in the lounge, and the balcony upstairs has stunning views. The bedrooms are also well sized and the main bedroom has an en suite bathroom.There is also a toilet and shower outside. \n\nThe garden is nice and big and has a huge thatch lapa with built in bar, electricity and it overlooks the pool. There is also another covered entertainment area and a lovely koi pond to create that relaxed ambience after a long day. There is also an electric fence surrounding the property.\n\nThis home is a must see.\n\nBook a viewing today!\n\n\n\n',
        listingDate: '2019-03-29T10:34:22',
        allowViewings: true,
        geo: {
          lat: -26.114,
          lng: 27.932,
          exact: false
        },
        images: []
      })}</p>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
