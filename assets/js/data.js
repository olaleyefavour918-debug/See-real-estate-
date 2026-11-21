/* SEE Construction & Real Estate — site configuration and property data */
(function () {
  var img = function (id, w) {
    return 'https://images.unsplash.com/photo-' + id + '?auto=format&fit=crop&w=' + (w || 1200) + '&q=75';
  };

  // Image IDs (swap for licensed photography of real listings)
  var H = {
    villa: '1600596542815-ffad4c1539a9', modern: '1600585154340-be6161a56a0c', pool: '1613490493576-7fde63acd811',
    house1: '1512917774080-9991f1c4c750', house2: '1564013799919-ab600027ffc6', house3: '1600566753190-17f0baa2a6c3',
    manor: '1580587771525-78b9dba3b914', house4: '1568605114967-8130f3a36994', house5: '1560448204-e02f11c3d0e2',
    house6: '1600210492486-724fe5c67fb0', house7: '1600047509807-ba8f99d2cdbb', house8: '1600585152220-90363fe7e115',
    in1: '1600607687939-ce8a6c25118c', in2: '1502672260266-1c1ef2d93688', in3: '1560185007-cde436f6a4d0',
    in4: '1600573472550-8090b5e0745e', kit1: '1484154218962-a197022b5858', kit2: '1556912172-45b7abe8b7e1',
    in5: '1522708323590-d24dbb6b0267', in6: '1600607688969-a5bfcd646154',
    apt1: '1545324418-cc1a3fa10c00', tower: '1486406146926-c627a92ad1ab', apt2: '1493809842364-78817add7ffb', apt3: '1460317442991-0ec209397118',
    land1: '1500382017468-9049fed747ef', land2: '1448630360428-65456885c650', build1: '1503387762-592deb58ef4e', build2: '1541888946425-d81bb19240f5'
  };

  var P = [
    {
      id: 'maitama-garden-villa', title: 'The Maitama Garden Villa', location: 'Maitama District, Abuja', area: 'Maitama',
      cat: 'residential', type: 'House', purpose: 'Sale', beds: 5, baths: 6, size: 620, price: 720000000, featured: true,
      imgs: [H.villa, H.in1, H.pool, H.kit1],
      desc: ['A statement residence in one of Abuja’s most established districts, designed around generous living spaces, a landscaped garden and a private entertaining terrace.',
        'Double-height reception areas open to the garden, while the fitted kitchen, family lounge and a master suite with dressing room are arranged for comfortable everyday living.'],
      features: ['5 en-suite bedrooms', 'Landscaped garden', 'Private terrace', 'Fitted kitchen', 'Guest and staff quarters', 'Ample parking', 'Gated entrance', 'Study / home office']
    },
    {
      id: 'asokoro-terrace-collection', title: 'Asokoro Terrace Collection', location: 'Asokoro District, Abuja', area: 'Asokoro',
      cat: 'residential', type: 'House', purpose: 'Sale', beds: 4, baths: 5, size: 340, price: 380000000, featured: true,
      imgs: [H.modern, H.in2, H.house3, H.kit2],
      desc: ['A refined terrace residence inside a secure, well-kept neighbourhood. Clean architectural lines and large glazed openings bring natural light through every floor.',
        'Four bedrooms, a family lounge and a rooftop terrace make it a comfortable home for a growing household.'],
      features: ['4 en-suite bedrooms', 'Rooftop terrace', 'Open-plan living', 'Fitted kitchen', 'Covered parking', 'Secure estate setting', 'Service quarters']
    },
    {
      id: 'guzape-skyline-apartment', title: 'Guzape Skyline Apartment', location: 'Guzape District, Abuja', area: 'Guzape',
      cat: 'residential', type: 'Apartment', purpose: 'Rent', beds: 3, baths: 3, size: 210, price: 18000000, per: 'year', featured: true,
      imgs: [H.apt1, H.in5, H.apt2, H.in3],
      desc: ['A bright three-bedroom apartment with wide city views and a calm, contemporary finish. Ideal for professionals and families who want space without the upkeep of a house.',
        'Shared amenities and secure access come with the building, and the surrounding area offers easy reach to dining and leisure.'],
      features: ['3 en-suite bedrooms', 'City-view balcony', 'Fitted kitchen', 'Secure parking', 'Controlled access', 'Elevator access', 'Shared amenities']
    },
    {
      id: 'wuse-ii-executive-suites', title: 'Wuse II Executive Suites', location: 'Wuse II, Abuja', area: 'Wuse II',
      cat: 'residential', type: 'Apartment', purpose: 'Rent', beds: 2, baths: 2, size: 140, price: 9500000, per: 'year', featured: false,
      imgs: [H.apt2, H.in4, H.apt3, H.kit2],
      desc: ['Well-appointed two-bedroom suites in the heart of Wuse II, close to offices, restaurants and daily conveniences.',
        'A practical layout, quality finishes and secure access suit executives and small families.'],
      features: ['2 en-suite bedrooms', 'Open-plan living', 'Fitted kitchen', 'Secure parking', 'Controlled access', 'Central location']
    },
    {
      id: 'katampe-development-plot', title: 'Katampe Development Plot', location: 'Katampe Extension, Abuja', area: 'Katampe',
      cat: 'land', type: 'Land', purpose: 'Sale', size: 1200, price: null, featured: true,
      imgs: [H.land1, H.land2, H.build2, H.land1],
      desc: ['A generous plot in a fast-developing part of Abuja, well suited to a private residence, a small residential scheme or a longer-term land holding.',
        'Plot dimensions, access and documentation details are shared with serious buyers on enquiry.'],
      features: ['1,200 sqm plot', 'Suitable for residential development', 'Access road frontage', 'Developing neighbourhood', 'Documentation details on enquiry']
    },
    {
      id: 'jabi-lakeside-duplex', title: 'Jabi Lakeside Duplex', location: 'Jabi, Abuja', area: 'Jabi',
      cat: 'residential', type: 'House', purpose: 'Sale', beds: 4, baths: 4, size: 380, price: 260000000, featured: true,
      imgs: [H.house2, H.in6, H.house4, H.kit1],
      desc: ['A modern duplex near the lake, balancing privacy with convenience. Bright, high-ceilinged interiors flow onto a private courtyard garden.',
        'Four bedrooms, a family lounge and a separate staff wing make it equally good for entertaining and everyday living.'],
      features: ['4 en-suite bedrooms', 'Courtyard garden', 'Family lounge', 'Fitted kitchen', 'Staff quarters', 'Gated parking', 'Close to the lake']
    },
    {
      id: 'lugbe-estate-plots', title: 'Lugbe Estate Plots', location: 'Lugbe, Abuja', area: 'Lugbe',
      cat: 'land', type: 'Land', purpose: 'Sale', size: 450, price: 22000000, featured: false,
      imgs: [H.land2, H.land1, H.build1, H.land2],
      desc: ['Residential plots in an emerging corridor popular with first-time homeowners and long-term land buyers.',
        'Flexible plot sizes are available; full layout and documentation information is provided on enquiry.'],
      features: ['450 sqm plots', 'Residential layout', 'Growing community', 'Road access', 'Documentation details on enquiry']
    },
    {
      id: 'cbd-executive-offices', title: 'Central District Executive Offices', location: 'Central Business District, Abuja', area: 'Central Business District',
      cat: 'investment', type: 'Commercial', purpose: 'Sale', size: 1800, price: null, featured: true,
      imgs: [H.tower, H.apt3, H.in4, H.apt1],
      desc: ['A commercial office opportunity within Abuja’s business core, positioned for owner-occupiers and investors looking at commercial property.',
        'Floor plans, tenancy information and pricing are discussed directly on enquiry.'],
      features: ['Prime business-district address', 'Flexible floor plates', 'Secure basement parking', 'Elevator access', 'Suitable for corporate occupiers', 'Details on enquiry']
    },
    {
      id: 'gwarinpa-family-residence', title: 'Gwarinpa Family Residence', location: 'Gwarinpa Estate, Abuja', area: 'Gwarinpa',
      cat: 'residential', type: 'House', purpose: 'Sale', beds: 4, baths: 4, size: 300, price: 145000000, featured: false,
      imgs: [H.house5, H.in2, H.house6, H.kit2],
      desc: ['A comfortable family home in an established residential estate with schools, markets and recreation close by.',
        'Four spacious bedrooms, a lounge and dining area, and a private compound for children to play.'],
      features: ['4 bedrooms', 'Private compound', 'Lounge and dining area', 'Fitted kitchen', 'Parking for 3 cars', 'Estate setting']
    },
    {
      id: 'life-camp-mixed-use-site', title: 'Life Camp Mixed-Use Site', location: 'Life Camp, Abuja', area: 'Life Camp',
      cat: 'investment', type: 'Land', purpose: 'Sale', size: 3000, price: null, featured: false,
      imgs: [H.build2, H.land1, H.build1, H.tower],
      desc: ['A large site with scope for a mixed-use scheme combining residential and commercial space, suited to developers and investors.',
        'Site details, permitted use and pricing are shared with qualified parties on enquiry.'],
      features: ['3,000 sqm site', 'Mixed-use potential', 'Main-road visibility', 'Established surroundings', 'Details on enquiry']
    },
    {
      id: 'apo-serviced-apartment-block', title: 'Apo Serviced Apartment Block', location: 'Apo, Abuja', area: 'Apo',
      cat: 'investment', type: 'Apartment', purpose: 'Sale', beds: 2, baths: 2, size: 2200, price: null, featured: true,
      imgs: [H.apt3, H.apt1, H.in5, H.apt2],
      desc: ['A multi-unit apartment building offering an income-oriented opportunity in a well-connected part of the city.',
        'Unit mix, building details and pricing are shared directly with interested investors on enquiry.'],
      features: ['Multi-unit building', '2-bedroom unit configuration', 'Secure compound', 'Parking provision', 'Close to main roads', 'Details on enquiry']
    },
    {
      id: 'lokogoma-smart-bungalow', title: 'Lokogoma Smart Bungalow', location: 'Lokogoma, Abuja', area: 'Lokogoma',
      cat: 'residential', type: 'House', purpose: 'Rent', beds: 3, baths: 3, size: 220, price: 7000000, per: 'year', featured: false,
      imgs: [H.house7, H.in3, H.house8, H.kit1],
      desc: ['A neat three-bedroom bungalow in a quiet pocket of Lokogoma, with a small garden and everything on one level.',
        'A practical choice for small families and couples who value space and easy access to the city.'],
      features: ['3 bedrooms', 'Single-level living', 'Small garden', 'Fitted kitchen', 'Off-street parking', 'Quiet neighbourhood']
    }
  ];

  window.SEE = {
    brand: 'SEE Construction & Real Estate',
    // Set to the business's confirmed WhatsApp number, digits only, international format (e.g. 2348012345678).
    // Left blank until confirmed: WhatsApp buttons then open WhatsApp with the message ready to send to any chosen contact.
    whatsapp: '',
    waDefault: 'Hello SEE Construction & Real Estate, I would like to make an enquiry about property in Abuja.',
    img: img,
    hero: [H.villa, H.pool, H.modern],
    districts: ['Maitama', 'Asokoro', 'Guzape', 'Wuse II', 'Jabi', 'Katampe', 'Gwarinpa', 'Life Camp', 'Lokogoma', 'Lugbe', 'Apo', 'Central Business District'],
    types: ['House', 'Apartment', 'Land', 'Commercial'],
    properties: P
  };
})();
