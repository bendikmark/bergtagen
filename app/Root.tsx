import { Outlet, Links } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import rootStyle from "./styles/Root.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: rootStyle }];
};

export default function Root() {
  return (
    <html lang="no">
      <head>
        <Links />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bergtagen</title>
      </head>
      <body>
        <div id="root">
          <Outlet />
        </div>
      </body>
    </html>
  );
}
