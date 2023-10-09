import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

import SwaggerUI from 'swagger-ui-react'
import "swagger-ui-react/swagger-ui.css";

export default function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <SwaggerUI />
        <Outlet />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
