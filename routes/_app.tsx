import { type PageProps } from "$fresh/server.ts";
import NavBar from "../islands/navbar/index.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html data-theme="dim">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-project</title>
        <link rel="stylesheet" href="/styles.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.12.13/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <NavBar />
        <Component />
      </body>
    </html>
  );
}
