# Mini Store

Small online store built with React, Vite and React Router.

Features: product grid (12 products), search, category filter, sort by price, product page, cart with quantity controls, cart saved in localStorage.

## Run
    npm install
    npm run dev

## Build
    npm run build
    npm run preview

## Deploy
Push to GitHub, then import the repo in Vercel or Netlify. Build command: `npm run build`, output folder: `dist`.
For Netlify add a `public/_redirects` file containing `/* /index.html 200` so direct links to /cart work.
