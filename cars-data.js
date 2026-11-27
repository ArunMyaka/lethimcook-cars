/* cars-data.js — the single source of truth for the site.
   To add a car: add one entry here and one page in cars/. */
window.CARS_DATA = [
  {
    "slug": "bmw-320d",
    "name": "BMW 320d (F30)",
    "brand": "BMW",
    "shelf": "sedan",
    "badges": [],
    "code": "F30 · N47 2.0 diesel",
    "hook": "Featured car — see the block above.",
    "foot": [
      "Petrol",
      "2012 – 2019",
      "Sold in India"
    ],
    "tags": "bmw 320d f30 n47 diesel rwd sedan zf",
    "photo": "assets/img/bmw-320d-hero.jpg",
    "photoAlt": "BMW 320d (F30) — blue sedan, side profile",
    "page": "cars/bmw-320d.html",
    "stats": [
      {
        "num": "184",
        "unit": "bhp",
        "label": "Power"
      },
      {
        "num": "380",
        "unit": "Nm",
        "label": "Torque"
      },
      {
        "num": "7.6",
        "unit": "s",
        "label": "0–100 km/h"
      },
      {
        "num": "235",
        "unit": "km/h",
        "label": "Top speed"
      }
    ],
    "description": "A rear-wheel-drive diesel sedan with 184 bhp and 380 Nm — among the most accessible used performance sedans in India."
  },
  {
    "slug": "m5-cs",
    "name": "BMW M5 CS",
    "brand": "BMW",
    "shelf": "dream",
    "badges": [
      {
        "t": "Flagship",
        "hot": true
      },
      {
        "t": "Sedan",
        "hot": false
      }
    ],
    "code": "F90 · S63 4.4 V8 twin-turbo",
    "hook": "The lightest, most powerful M5 built: 635 PS, carbon-fibre bucket seats and gold-bronze wheels.",
    "foot": [
      "Petrol",
      "2021 – 2022",
      "Import"
    ],
    "tags": "dream awd petrol auto bmw m5 f90 v8 sedan",
    "photo": "assets/img/m5-cs.jpg",
    "photoAlt": "BMW M5 CS (F90) in Frozen Deep Green with gold wheels",
    "page": "cars/m5-cs.html",
    "stats": [
      {
        "num": "635",
        "unit": "PS",
        "label": "Power @ 6,000 rpm"
      },
      {
        "num": "750",
        "unit": "Nm",
        "label": "Torque 1,800–5,950 rpm"
      },
      {
        "num": "3.0",
        "unit": "s",
        "label": "0–100 km/h (BMW claim)"
      },
      {
        "num": "305",
        "unit": "km/h",
        "label": "Top speed, M Driver's Pkg"
      }
    ],
    "description": "The lightest and most powerful M5 built — a 635 PS twin-turbo V8 saloon produced for a single model year, with four individual bucket seats and carbon-ceramic brakes as standard."
  },
  {
    "slug": "rs6-avant",
    "name": "Audi RS6 Avant",
    "brand": "Audi",
    "shelf": "dream",
    "badges": [
      {
        "t": "All-rounder",
        "hot": true
      },
      {
        "t": "Wagon",
        "hot": false
      }
    ],
    "code": "C8 · 4.0 V8 twin-turbo",
    "hook": "A 600 PS twin-turbo V8 estate with seating for five and a large boot — supercar pace with family practicality.",
    "foot": [
      "Petrol",
      "2019 – 2025",
      "C7 sold in India"
    ],
    "tags": "dream awd petrol auto audi rs6 c8 v8 wagon estate",
    "photo": "assets/img/rs6-avant.webp",
    "photoAlt": "Audi RS6 Avant (C8) — grey performance wagon, rear three-quarter",
    "page": "cars/rs6-avant.html",
    "stats": [
      {
        "num": "600",
        "unit": "PS",
        "label": "Power @ 6,000 rpm"
      },
      {
        "num": "800",
        "unit": "Nm",
        "label": "Torque 2,050–4,500 rpm"
      },
      {
        "num": "3.6",
        "unit": "s",
        "label": "0–100 km/h (Audi claim)"
      },
      {
        "num": "305",
        "unit": "km/h",
        "label": "Top speed, Dynamic pkg plus"
      }
    ],
    "description": "A 600 PS twin-turbo V8 estate with seating for five and a 565-litre boot — supercar pace combined with family-car practicality, built from 2019 to 2025."
  },
  {
    "slug": "gt3-rs",
    "name": "Porsche 911 GT3 RS",
    "brand": "Porsche",
    "shelf": "dream",
    "badges": [
      {
        "t": "Extreme",
        "hot": true
      },
      {
        "t": "Track",
        "hot": false
      }
    ],
    "code": "992 · 4.0 flat-6, naturally aspirated",
    "hook": "A track-focused 911: 9,000 rpm naturally aspirated flat-six and up to 860 kg of downforce.",
    "foot": [
      "Petrol",
      "2022 – present",
      "Sold in India"
    ],
    "tags": "dream rwd petrol auto porsche 911 gt3 rs 992 flat-six track",
    "photo": "assets/img/gt3-rs.webp",
    "photoAlt": "Porsche 911 GT3 RS (992) on track with its full aero kit",
    "page": "cars/gt3-rs.html",
    "stats": [
      {
        "num": "525",
        "unit": "PS",
        "label": "Power @ 8,500 rpm"
      },
      {
        "num": "465",
        "unit": "Nm",
        "label": "Torque @ 6,300 rpm"
      },
      {
        "num": "3.2",
        "unit": "s",
        "label": "0–100 km/h (Porsche claim)"
      },
      {
        "num": "296",
        "unit": "km/h",
        "label": "Top speed (aero-limited)"
      }
    ],
    "description": "A track-focused 911 with a 9,000 rpm naturally aspirated flat-six, an F1-style drag reduction system, and 860 kg of downforce at 285 km/h. Sold in India through Porsche India in very small numbers."
  },
  {
    "slug": "nsx",
    "name": "Honda NSX",
    "brand": "Honda",
    "shelf": "dream",
    "badges": [
      {
        "t": "Icon",
        "hot": true
      },
      {
        "t": "Mid-engine",
        "hot": false
      }
    ],
    "code": "NA1 · C30A 3.0 V6 VTEC",
    "hook": "Mid-engined V6 with VTEC and an all-aluminium body; Ayrton Senna contributed to its development.",
    "foot": [
      "Petrol",
      "1990 – 1997",
      "Import"
    ],
    "tags": "dream rwd petrol manual honda nsx na1 vtec mid-engine classic",
    "photo": "assets/img/nsx.jpg",
    "photoAlt": "Honda NSX (NA1) — red mid-engine coupe, side profile",
    "page": "cars/nsx.html",
    "stats": [
      {
        "num": "270",
        "unit": "hp",
        "label": "Power @ 7,300 rpm"
      },
      {
        "num": "285",
        "unit": "Nm",
        "label": "Torque @ 5,400 rpm"
      },
      {
        "num": "5.9",
        "unit": "s",
        "label": "0–100 km/h (period tests)"
      },
      {
        "num": "270",
        "unit": "km/h",
        "label": "Top speed"
      }
    ],
    "description": "A mid-engined V6 sports car with an all-aluminium body, VTEC and titanium connecting rods — developed with input from Ayrton Senna and benchmarked against the Ferrari 348."
  },
  {
    "slug": "rx-7",
    "name": "Mazda RX-7",
    "brand": "Mazda",
    "shelf": "dream",
    "badges": [
      {
        "t": "Icon",
        "hot": true
      },
      {
        "t": "Rotary",
        "hot": false
      }
    ],
    "code": "FD · 13B twin-rotor, twin-turbo",
    "hook": "Twin-turbo rotary engine with no pistons, near 50:50 weight distribution and a kerb weight of about 1,280 kg.",
    "foot": [
      "Petrol",
      "1992 – 2002",
      "Import"
    ],
    "tags": "dream rwd petrol manual mazda rx-7 rx7 fd rotary twin-turbo classic",
    "photo": "assets/img/rx-7.jpg",
    "photoAlt": "Mazda RX-7 (FD) — yellow rotary coupe on the road",
    "page": "cars/rx-7.html",
    "stats": [
      {
        "num": "255",
        "unit": "PS",
        "label": "Power, export (JDM: 280 PS)"
      },
      {
        "num": "294",
        "unit": "Nm",
        "label": "Torque @ 5,000 rpm"
      },
      {
        "num": "5.3",
        "unit": "s",
        "label": "0–100 km/h (published)"
      },
      {
        "num": "250",
        "unit": "km/h",
        "label": "Top speed"
      }
    ],
    "description": "The third and final RX-7: a twin-rotor, sequential twin-turbo coupé with no pistons, near-50:50 weight distribution and a kerb weight between roughly 1,260 and 1,310 kg depending on trim."
  },
  {
    "slug": "octavia-vrs",
    "name": "Skoda Octavia RS 245",
    "brand": "Skoda",
    "shelf": "sedan",
    "badges": [
      {
        "t": "Sedan",
        "hot": false
      },
      {
        "t": "Turbo petrol",
        "hot": false
      }
    ],
    "code": "Mk3 · EA888 2.0 TSI",
    "hook": "A 245 PS turbo-petrol family sedan with a 7-speed DSG — the fastest Skoda officially sold in India, in a run of 200 cars.",
    "foot": [
      "Petrol",
      "2020 (India)",
      "Sold in India"
    ],
    "tags": "sedan fwd petrol dsg skoda octavia vrs rs 245",
    "photo": "assets/img/octavia-vrs.webp",
    "photoAlt": "Skoda Octavia RS 245 — red sedan at speed on a track",
    "page": "cars/octavia-vrs.html",
    "stats": [
      {
        "num": "245",
        "unit": "PS",
        "label": "Power @ 5,000–6,700 rpm"
      },
      {
        "num": "370",
        "unit": "Nm",
        "label": "Torque 1,600–4,300 rpm"
      },
      {
        "num": "6.6",
        "unit": "s",
        "label": "0–100 km/h (Skoda claim)"
      },
      {
        "num": "250",
        "unit": "km/h",
        "label": "Top speed (limited)"
      }
    ],
    "description": "The fastest Skoda officially sold in India: a 245 PS turbo-petrol family sedan with a wet-clutch DSG, an electronic limited-slip differential and a 590-litre boot. Just 200 CBU units were imported in 2020."
  },
  {
    "slug": "cruze",
    "name": "Chevrolet Cruze",
    "brand": "Chevrolet",
    "shelf": "sedan",
    "badges": [
      {
        "t": "Sedan",
        "hot": false
      },
      {
        "t": "Diesel",
        "hot": false
      }
    ],
    "code": "J300 · 2.0 VCDi diesel",
    "hook": "Nicknamed the “diesel rocket” for its strong 2.0-litre diesel — up to 166 PS and 380 Nm in later versions.",
    "foot": [
      "Diesel",
      "2009 – 2017",
      "Sold in India"
    ],
    "tags": "sedan fwd diesel manual chevrolet cruze diesel rocket",
    "photo": "assets/img/cruze.jpg",
    "photoAlt": "Chevrolet Cruze — red diesel sedan driving on a road",
    "page": "cars/cruze.html",
    "stats": [
      {
        "num": "166",
        "unit": "PS",
        "label": "Power @ 3,800 rpm (2012+)"
      },
      {
        "num": "380",
        "unit": "Nm",
        "label": "Torque @ 2,000 rpm"
      },
      {
        "num": "9.7",
        "unit": "s",
        "label": "0–100 km/h (tested, AT)"
      },
      {
        "num": "200",
        "unit": "km/h",
        "label": "Top speed"
      }
    ],
    "description": "Nicknamed the 'diesel rocket' for its strong 2.0-litre diesel — up to 166 PS and 380 Nm in the later version, in a heavy, well-equipped sedan sold in India from 2009 to 2017."
  },
  {
    "slug": "land-cruiser",
    "name": "Toyota Land Cruiser",
    "brand": "Toyota",
    "shelf": "suv",
    "badges": [
      {
        "t": "SUV",
        "hot": false
      },
      {
        "t": "Diesel V8",
        "hot": false
      }
    ],
    "code": "200 Series · 4.5 V8 diesel",
    "hook": "The 200 Series pairs a 4.5-litre V8 diesel with full-time four-wheel drive and seating for seven.",
    "foot": [
      "Diesel",
      "2009 – 2020",
      "Sold in India"
    ],
    "tags": "suv 4wd diesel auto toyota land cruiser 200 v8",
    "photo": "assets/img/land-cruiser.jpg",
    "photoAlt": "Toyota Land Cruiser 200 — full-size diesel SUV, side profile",
    "page": "cars/land-cruiser.html",
    "stats": [
      {
        "num": "261",
        "unit": "PS",
        "label": "Power, facelift @ 3,400 rpm"
      },
      {
        "num": "650",
        "unit": "Nm",
        "label": "Torque 1,600–2,600 rpm"
      },
      {
        "num": "11.9",
        "unit": "s",
        "label": "0–100 km/h (tested)"
      },
      {
        "num": "93",
        "unit": "L",
        "label": "Fuel tank"
      }
    ],
    "description": "A body-on-frame flagship SUV with a twin-turbo V8 diesel, full-time four-wheel drive and seating for seven — sold in India only as a CBU import from 2009 to 2020, and India's most expensive Toyota."
  },
  {
    "slug": "endeavour",
    "name": "Ford Endeavour 3.2",
    "brand": "Ford",
    "shelf": "suv",
    "badges": [
      {
        "t": "SUV",
        "hot": false
      },
      {
        "t": "Diesel",
        "hot": false
      }
    ],
    "code": "3.2 five-cylinder diesel",
    "hook": "A five-cylinder 3.2 diesel with 200 PS, low-range 4×4 and seven seats.",
    "foot": [
      "Diesel",
      "2016 – 2020",
      "Sold in India"
    ],
    "tags": "suv 4wd diesel auto ford endeavour everest 3.2",
    "photo": "assets/img/endeavour.webp",
    "photoAlt": "Ford Endeavour — full-size SUV, front three-quarter",
    "page": "cars/endeavour.html",
    "stats": [
      {
        "num": "200",
        "unit": "PS",
        "label": "Power @ 3,000 rpm"
      },
      {
        "num": "470",
        "unit": "Nm",
        "label": "Torque 1,750–2,500 rpm"
      },
      {
        "num": "11.2",
        "unit": "s",
        "label": "0–100 km/h (tested)"
      },
      {
        "num": "800",
        "unit": "mm",
        "label": "Wading depth"
      }
    ],
    "description": "A five-cylinder 3.2-litre diesel with 200 PS and 470 Nm, low-range four-wheel drive, a rear differential lock and seven seats — the only five-cylinder SUV sold in India in its era."
  },
  {
    "slug": "safari-dicor",
    "name": "Tata Safari Dicor",
    "brand": "Tata",
    "shelf": "suv",
    "badges": [
      {
        "t": "SUV",
        "hot": false
      },
      {
        "t": "India legend",
        "hot": false
      }
    ],
    "code": "2.2 Dicor diesel · ladder frame",
    "hook": "The 2.2 Dicor version of the ladder-frame Safari — distinct from the later front-wheel-drive Safari that reused the name.",
    "foot": [
      "Diesel",
      "2007 – 2017",
      "Sold in India"
    ],
    "tags": "suv 4wd diesel manual tata safari dicor old classic",
    "photo": "assets/img/safari-dicor.jpg",
    "photoAlt": "Tata Safari Dicor — blue ladder-frame SUV, front three-quarter",
    "page": "cars/safari-dicor.html",
    "stats": [
      {
        "num": "140",
        "unit": "PS",
        "label": "Power @ 4,000 rpm"
      },
      {
        "num": "320",
        "unit": "Nm",
        "label": "Torque 1,700–2,700 rpm"
      },
      {
        "num": "16.2",
        "unit": "s",
        "label": "0–100 km/h (period figure)"
      },
      {
        "num": "65",
        "unit": "L",
        "label": "Fuel tank"
      }
    ],
    "description": "The 2.2 DICOR version of the original ladder-frame Safari: a 140 PS common-rail diesel, a 5-speed manual only, seven seats and a rear-mounted spare wheel — distinct from the later front-wheel-drive Safari that reused the name."
  },
  {
    "slug": "gypsy",
    "name": "Maruti Gypsy King",
    "brand": "Maruti Suzuki",
    "shelf": "suv",
    "badges": [
      {
        "t": "4×4",
        "hot": false
      },
      {
        "t": "India legend",
        "hot": false
      }
    ],
    "code": "1.3 petrol · leaf springs, low range",
    "hook": "A lightweight petrol 4×4 with leaf springs and low range, long used by the Indian armed forces and in rallying.",
    "foot": [
      "Petrol",
      "1996 – 2019",
      "Sold in India"
    ],
    "tags": "suv 4wd petrol manual maruti gypsy king classic offroad",
    "photo": "assets/img/gypsy.webp",
    "photoAlt": "Maruti Gypsy King — black soft-top 4x4 on grass",
    "page": "cars/gypsy.html",
    "stats": [
      {
        "num": "80",
        "unit": "bhp",
        "label": "Power @ 6,000 rpm"
      },
      {
        "num": "103",
        "unit": "Nm",
        "label": "Torque @ 4,500 rpm"
      },
      {
        "num": "120",
        "unit": "km/h",
        "label": "Top speed (published)"
      },
      {
        "num": "985",
        "unit": "kg",
        "label": "Kerb weight, soft top"
      }
    ],
    "description": "A lightweight petrol 4×4 on leaf springs with a proper low range — the mainstay vehicle of the Indian Army and police forces, sold to the public from the Gypsy line's 1985 debut until March 2019."
  },
  {
    "slug": "jimny",
    "name": "Suzuki Jimny",
    "brand": "Suzuki",
    "shelf": "suv",
    "badges": [
      {
        "t": "4×4",
        "hot": false
      },
      {
        "t": "Ladder frame",
        "hot": false
      }
    ],
    "code": "5-door · K15B 1.5 petrol",
    "hook": "A compact ladder-frame 4×4 with low range, solid axles and a 1.5-litre petrol engine.",
    "foot": [
      "Petrol",
      "2023 – present",
      "Sold in India"
    ],
    "tags": "suv 4wd petrol manual suzuki jimny offroad small",
    "photo": "assets/img/jimny.webp",
    "photoAlt": "Suzuki Jimny 5-door in Kinetic Yellow off-road",
    "page": "cars/jimny.html",
    "stats": [
      {
        "num": "104.8",
        "unit": "PS",
        "label": "Power @ 6,000 rpm"
      },
      {
        "num": "134.2",
        "unit": "Nm",
        "label": "Torque @ 4,000 rpm"
      },
      {
        "num": "14.6",
        "unit": "s",
        "label": "0–100 km/h (tested, MT)"
      },
      {
        "num": "210",
        "unit": "mm",
        "label": "Ground clearance"
      }
    ],
    "description": "A compact ladder-frame 4×4 with rigid axles, coil springs and a low-range transfer case — built in India, where the 5-door version was launched first in the world in June 2023."
  },
  {
    "slug": "mx-5",
    "name": "Mazda MX-5 Miata",
    "brand": "Mazda",
    "shelf": "small",
    "badges": [
      {
        "t": "Roadster",
        "hot": false
      },
      {
        "t": "RWD",
        "hot": false
      }
    ],
    "code": "ND · 2.0 petrol, ~1,060 kg",
    "hook": "A lightweight rear-wheel-drive roadster of about 1,060 kg, with a manual gearbox and a folding soft top.",
    "foot": [
      "Petrol",
      "2016 – present",
      "Import"
    ],
    "tags": "small rwd petrol manual mazda miata mx-5 mx5 roadster convertible",
    "photo": "assets/img/mx-5.jpg",
    "photoAlt": "Mazda MX-5 Miata — red roadster parked by the ocean",
    "page": "cars/mx-5.html",
    "stats": [
      {
        "num": "184",
        "unit": "PS",
        "label": "Power @ 7,000 rpm (2019+)"
      },
      {
        "num": "205",
        "unit": "Nm",
        "label": "Torque @ 4,000 rpm"
      },
      {
        "num": "6.5",
        "unit": "s",
        "label": "0–100 km/h (published)"
      },
      {
        "num": "219",
        "unit": "km/h",
        "label": "Top speed"
      }
    ],
    "description": "A lightweight rear-wheel-drive roadster of about 1,060 kg in 2.0-litre form, with a manual gearbox, a folding soft top, and a 7,500 rpm redline on the 2019-onwards car."
  },
  {
    "slug": "abarth-punto",
    "name": "Fiat Abarth Punto",
    "brand": "Fiat Abarth",
    "shelf": "small",
    "badges": [
      {
        "t": "Hot hatch",
        "hot": false
      },
      {
        "t": "Turbo petrol",
        "hot": false
      }
    ],
    "code": "1.4 T-Jet turbo petrol",
    "hook": "A 145 bhp turbo-petrol hot hatch with hydraulic power steering — one of very few of its kind sold in India.",
    "foot": [
      "Petrol",
      "2015 – 2019",
      "Sold in India"
    ],
    "tags": "small fwd petrol manual fiat abarth punto hot hatch",
    "photo": "assets/img/abarth-punto.webp",
    "photoAlt": "Fiat Abarth Punto — black hot hatch with red stripes",
    "page": "cars/abarth-punto.html",
    "stats": [
      {
        "num": "145",
        "unit": "bhp",
        "label": "Power @ 5,500 rpm"
      },
      {
        "num": "212",
        "unit": "Nm",
        "label": "Torque 2,000–4,000 rpm"
      },
      {
        "num": "8.8",
        "unit": "s",
        "label": "0–100 km/h (FCA claim)"
      },
      {
        "num": "190",
        "unit": "km/h",
        "label": "Top speed (FCA claim)"
      }
    ],
    "description": "A 145 bhp turbo-petrol hot hatch with hydraulic power steering and disc brakes on all four wheels — the most powerful hatchback in its Indian segment at its 2015 launch, at ₹9.95 lakh."
  }
];
