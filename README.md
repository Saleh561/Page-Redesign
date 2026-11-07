# Discount Beds Belfast — Frontend Homepage

A responsive, single-page frontend concept built with **Vite, HTML, CSS and vanilla JavaScript**.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Files

- `index.html` — all homepage content and page sections.
- `src/style.css` — layout, responsive styling, typography and interactions.
- `src/main.js` — mobile navigation, product filtering, search preview, demo basket and back-to-top button.
- `package.json` — Vite scripts and dependency.

## Important content notes

- This is a **frontend-only homepage**. Search and basket are visual demonstrations; there is no real catalogue search, checkout, payment, account, inventory or order processing.
- Product cards and category examples are illustrative. Verify every product name, product image, price, size, colour and availability with Discount Beds Belfast before publishing.
- The bedroom images are remotely hosted Unsplash images used as visual placeholders, not retailer product photographs. Replace them with approved, product-specific images before launch.
- The address, phone numbers and opening hours were taken from the project brief and should be reconfirmed with the business before launch.
- The email address is a placeholder contact route; verify the correct business email before publishing.
- Google Fonts and Unsplash images require an internet connection. For a production deployment, download licensed/approved assets into `public/images/` and update image paths.
