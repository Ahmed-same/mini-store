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

## Image credits
Product photos 1, 2, 4, 6 and 8 are stored in `public/images`. The others are loaded from Wikimedia Commons (free licenses, see each file page for author and license):
- Bluetooth Speaker: https://commons.wikimedia.org/wiki/File:JBL_Flip_3_bluetooth_speaker_(DSCF2653).jpg
- Backpack: https://commons.wikimedia.org/wiki/File:Plecak_Hiker_50_L_HiMountain.jpg
- Coffee Mug: https://commons.wikimedia.org/wiki/File:White_Ceramic_Coffee_Mug_With_Color_Transfer_Image_of_Palace_of_Manufactures.jpg
- Plant Pot: https://commons.wikimedia.org/wiki/File:Maceta.jpg
- Book: https://commons.wikimedia.org/wiki/File:The_C_Programming_Language,_2nd_Edition.png
- Notebook: https://commons.wikimedia.org/wiki/File:Newone_-_Grand_spiral_notebook_A7.jpg
- Keyboard: https://commons.wikimedia.org/wiki/File:Mechanical_Logitech_keyboard.jpg
