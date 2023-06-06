import type { LinksFunction } from "@remix-run/node";
import rootStyle from "./styles/Root.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { headerLinks } from "./components/Header";
import { footerLinks } from "./components/Footer";

import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Bergtagen",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: rootStyle },
    ...headerLinks(),
    ...footerLinks(),
  ];
};

export default function root() {
  return (
    <html lang="no">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div id="root">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}