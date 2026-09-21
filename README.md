<p align="center">
  <img src="public/favicon.ico" width="56" alt="MarqueeReel logo" />
</p>

<h1 align="center">MarqueeReel</h1>

<p align="center">
  A responsive movie & TV show explorer, built with React.<br/>
  Search titles, browse a poster grid, and open a details modal — powered by the <a href="https://www.tvmaze.com/api">TVMaze API</a>.
</p>

---

## ✨ Features

- 🔎 **Live search** — find any show by title, results update as you type
- 🖼️ **Poster grid** — responsive layout: 1 column on mobile, up to 4 on desktop
- 🎬 **Details modal** — backdrop image, rating, premiere year, genre, network, and summary
- ⌨️ **Keyboard & click friendly** — close the modal with `Esc`, the ✕ button, or a click outside it
- 🎨 **Cinema-marquee design** — a warm gold accent against a dark stage, built with Tailwind CSS

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the local URL Vite prints in your terminal (usually `http://localhost:5173`).

## 📦 Build for deployment

```bash
npm run build      # creates an optimized build in dist/
npm run preview    # preview that build locally before deploying
```

Deploy the `dist/` folder to **Vercel**, **Netlify**, or **GitHub Pages**.

## 🗂️ Project structure

```
movie-explorer/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        Top nav with logo and links
│   │   ├── Hero.jsx          Home page banner + call to action
│   │   ├── Footer.jsx        Site footer
│   │   ├── MovieCard.jsx     Poster card with rating & "See details"
│   │   └── MovieModal.jsx    Full show details overlay
│   ├── pages/
│   │   ├── Home.jsx          Landing page
│   │   └── Movies.jsx        Search + browse page
│   ├── App.jsx                Routes and page layout
│   ├── main.jsx                App entry point
│   └── index.css               Global styles
├── index.html
└── package.json
```

## 🌐 About the API

Show data comes from the free, no-key-required [TVMaze API](https://www.tvmaze.com/api):

| Purpose        | Endpoint                          |
| --------------- | ---------------------------------- |
| Browse all shows | `GET /shows`                     |
| Search by title  | `GET /search/shows?q=:query`     |

These two endpoints shape their responses a little differently, so the `Movies` page normalizes both into the same simple format before rendering.

## 🎨 Design notes

The look borrows from a cinema marquee:

| Token          | Value       | Used for                          |
| -------------- | ----------- | ---------------------------------- |
| Background      | `#0E0E10`  | Page background                    |
| Panel           | `#17171B`  | Cards, modal, search bar           |
| Gold accent     | `#E8B33D`  | Links, buttons, active states      |
| Crimson accent  | `#B5342B`  | Close action in the details modal  |

Headings use **Anton**, a tall condensed display face, paired with **Inter** for body text.

## 📄 License

Built as a learning project — free to use and adapt.
