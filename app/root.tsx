import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "../public/styles/style.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <div id="root"></div>
      <div className="container">
        <aside className="sidebar">
          <h1>
            <img src="images/logo_site.png" className="img-icon"/>
            caradver
          </h1>
          <ul>
            <li>
              <img src="images/dashboard_icon.png" className="img-icon"/>
              Dashboard
            </li>
            <li>
              <img src="images/assets_icon.png" className="img-icon"/>
              Assets
            </li>
            <li>
              <img src="images/booking_icon.png" className="img-icon"/>
              Booking
            </li>
            <li>
              <img src="images/sellCars_icon.png" className="img-icon"/>
              Sell Cars
            </li>
            <li>
              <img src="images/service_icon.png" className="img-icon"/>
              <a>Services</a>
            </li>
          </ul>
          <div className="logout">
            <p>
              <img src="images/setting_icon.png" className="img-icon"/>
              Settings
            </p>
            <p>
              <img src="images/logout_icon.png" className="img-icon"/>
              Log out
            </p>
          </div>
        </aside>
        <main className="main-content">
          <div className="search">
            <input type="text" placeholder="Search or type" className="search-box"/>
            <img src="images/profile_icon.png" className="img-profile"/>
          </div>
          <div className="dashboard">
            <div className="brand-logos">
              <div className="brand-logos_card">
                <img src="images/Lamborghini_logo.png" alt="Lamborghini"/>
              </div>
              <div className="brand-logos_card">
                <img src="images/BMW_logo.png" alt="BMW"/>
              </div>
              <div className="brand-logos_card">
                <img src="images/Volvo_logo.png" alt="Volvo"/>
              </div>
              <div className="brand-logos_card">
                <img src="images/Mercedes-Benz_logo.png" alt="Mercedes-Benz"/>
              </div>
            </div>
            <div className="car-cards">
              <div className="card">
                <div className="card-top">
                  <img src="images/circle_icon.png" className="img-icon"/>
                  <p className="rec-text">64% Recommend</p>
                </div>
                <div className="wrapper-img">
                  <img src="images/BMW_X1.png" alt="BMW" width="200" className="card-img"/>
                </div>
                <div className="card-info">
                  <h2>BMW X1</h2>
                  <div className="card-bottom">
                    <div className="card-bottom-leftSide">
                      <img src="images/vectors_icon.png" className="img-icon"/>
                      <p className="stats-text">132K</p>
                      <img src="images/add-favourite_icon.png" className="img-icon"/>
                      <img src="images/power_icon.png" className="img-icon"/>
                    </div>
                    <div className="card-bottom-rightSide">
                      <p className="stats-text">$32/h</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-top">
                  <img src="images/circle_icon.png" className="img-icon"/>
                  <p className="rec-text">94% Recommend</p>
                </div>
                <div className="wrapper-img">
                  <img src="images/Lamborghini_Urus.png" alt="Lamborghini" width="200" className="card-img"/>
                </div>
                <div className="card-info">
                  <h2>Lamborghini Urus</h2>
                  <div className="card-bottom">
                    <div className="card-bottom-leftSide">
                      <img src="images/vectors_icon.png" className="img-icon"/>
                      <p className="stats-text">232K</p>
                      <img src="images/add-favourite_icon.png" className="img-icon"/>
                      <img src="images/power_icon.png" className="img-icon"/>
                    </div>
                    <div className="card-bottom-rightSide">
                      <p className="stats-text">$42/h</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-top">
                  <img src="images/circle_icon.png" className="img-icon"/>
                  <p className="rec-text">89% Recommend</p>
                </div>
                <div className="wrapper-img">
                  <img src="images/Volvo_XC_90.png" alt="Volvo" width="200" className="card-img"/>
                </div>
                <div className="card-info">
                  <h2>Volvo XC90</h2>
                  <div className="card-bottom">
                    <div className="card-bottom-leftSide">
                      <img src="images/vectors_icon.png" className="img-icon"/>
                      <p className="stats-text">532K</p>
                      <img src="images/add-favourite_icon.png" className="img-icon"/>
                      <img src="images/power_icon.png" className="img-icon"/>
                    </div>
                    <div className="card-bottom-rightSide">
                      <p className="stats-text">$55/h</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-top">
                  <img src="images/circle_icon.png" className="img-icon"/>
                  <p className="rec-text">56% Recommend</p>
                </div>
                <div className="wrapper-img">
                  <img src="images/Jeep_Rubicon.png" alt="Jeep" width="200" className="card-img"/>
                </div>
                <div className="card-info">
                  <h2>Jeep Rubicon</h2>
                  <div className="card-bottom">
                    <div className="card-bottom-leftSide">
                      <img src="images/vectors_icon.png" className="img-icon"/>
                      <p className="stats-text">350K</p>
                      <img src="images/add-favourite_icon.png" className="img-icon"/>
                      <img src="images/power_icon.png" className="img-icon"/>
                    </div>
                    <div className="card-bottom-rightSide">
                      <p className="stats-text">$29/h</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-top">
                  <img src="images/circle_icon.png" className="img-icon"/>
                  <p className="rec-text">69% Recommend</p>
                </div>
                <div className="wrapper-img">
                  <img src="images/Mercedes-Benz_AMG_G_63.png" alt="Mercedes-Benz" width="200" className="card-img"/>
                </div>
                <div className="card-info">
                  <h2>Mercedes-Benz AMG G63</h2>
                  <div className="card-bottom">
                    <div className="card-bottom-leftSide">
                      <img src="images/vectors_icon.png" className="img-icon"/>
                      <p className="stats-text">795K</p>
                      <img src="images/add-favourite_icon.png" className="img-icon"/>
                      <img src="images/power_icon.png" className="img-icon"/>
                    </div>
                    <div className="card-bottom-rightSide">
                      <p className="stats-text">$26/h</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-top">
                  <img src="images/circle_icon.png" className="img-icon"/>
                  <p className="rec-text">75% Recommend</p>
                </div>
                <div className="wrapper-img">
                  <img src="images/Porsche_911_GT3_RS.png" alt="Porsche" width="200" className="card-img"/>
                </div>
                <div className="card-info">
                  <h2>Porsche 911 GT3 RS</h2>
                  <div className="card-bottom">
                    <div className="card-bottom-leftSide">
                      <img src="images/vectors_icon.png" className="img-icon"/>
                      <p className="stats-text">852K</p>
                      <img src="images/add-favourite_icon.png" className="img-icon"/>
                      <img src="images/power_icon.png" className="img-icon"/>
                    </div>
                    <div className="card-bottom-rightSide">
                      <p className="stats-text">$15/h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet/>;
}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
        error.status === 404
            ? "The requested page could not be found."
            : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
      <main className="pt-16 p-4 container mx-auto">
        <h1>{message}</h1>
        <p>{details}</p>
        {stack && (
            <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
        )}
      </main>
  );
}
