# A Sample PWA App Using Vite

This is a sample minimal app to show how to make a PWA (Progressive Web App) using Vite

## Packages Installed

```sh
npm init vite@latest my-react-pwa

yarn add --dev workbox-window vite-plugin-pwa

# Not needed
yarn add --dev tailwindcss postcss autoprefixer
yarn tailwindcss init -p
```

### Just modified vite.config.ts to configure PWA sittings

### And modified index.html to have the following

```html
<meta name="theme-color" content="#000000" />
<!-- support apple devices -->
<link rel="apple-touch-icon" href="/vite.svg" />
```

#### I followed the the following tutorial link

<a src="https://dev.to/bhendi/turn-your-react-vite-app-into-a-pwa-3lpg">Turn your react + vite app into a PWA</a>
