# COCOBREW

COCOBREW is a coffee, cocoa, chocolate, and gift-pack e-commerce website inspired by the farms and natural landscapes of Araku Valley. Customers can browse products, add items to a cart, choose gift packs, provide delivery details, detect their current location, and review an order before confirming it.

## Features

- Responsive home page with hero video, product links, and brand story sections.
- Product pages for:
  - Organic coffee
  - Organic cocoa
  - Premium chocolate
  - Gift packs
- Product purchase flows with:
  - Add to cart
  - Buy now
  - Quantity updates
  - Cart removal and clearing
- Checkout page with customer, delivery, payment, discount, and delivery-charge fields.
- Gift-pack selection through the dedicated Gift Packs page.
- Current-location support in the delivery address form using browser geolocation and reverse geocoding.
- Sign-in and sign-up interface for the demo experience.
- Order confirmation summary and printable/downloadable order bill.
- Browser `localStorage` persistence for cart, user, and order data.

## Technology

- React 19
- React DOM 19
- Vite
- Vue 3 via CDN for the static product and checkout pages
- HTML5 and CSS3
- Browser Geolocation API
- OpenStreetMap Nominatim reverse-geocoding service

## Project Structure

```text
COCOBREW/
├── index.html              # React landing page entry point
├── coffee.html             # Coffee products
├── cocoa.html              # Cocoa products
├── chocolate.html          # Chocolate products
├── gift pack.html          # Gift-pack products
├── order.html              # Cart and checkout page
├── main.js                 # Shared Vue app logic for store pages
├── coffee.css              # Shared product and checkout styling
├── gift pack.css           # Gift-pack page styling
├── src/
│   ├── App.jsx             # React landing page composition
│   ├── main.jsx            # React entry point
│   ├── components/         # Navbar, hero, about, and icon components
│   └── styles/             # Landing page styles
├── public assets and images
└── package.json
```

## Requirements

- Node.js 18 or newer
- npm
- A modern browser

## Installation

1. Open a terminal in the project directory.
2. Install the dependencies:

   ```bash
   npm install
   ```

## Development

Start the Vite development server:

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Checkout and Location Notes

- Cart and order information is stored in the browser's `localStorage`; clearing site data resets the demo cart and order.
- The delivery address location button requires browser location permission.
- Reverse geocoding uses the public Nominatim service and requires network access.
- Location detection should be tested through `localhost` or HTTPS because browser geolocation may be restricted on insecure origins.
- The checkout is a front-end demonstration. It does not connect to a real payment gateway or order-management backend.

## Main Navigation

| Page | File |
| --- | --- |
| Home | `index.html` |
| Coffee | `coffee.html` |
| Cocoa | `cocoa.html` |
| Chocolate | `chocolate.html` |
| Gift Packs | `gift pack.html` |
| Checkout | `order.html` |

## License

This project is intended for the COCOBREW website and demonstration purposes. Add a project-specific license before distributing it publicly.
