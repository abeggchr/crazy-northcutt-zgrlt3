import "./App.css";
import { Child } from "./Child";
import { Shell } from "./Shell";
import { TrackedApp } from "./TrackedApp";
import { Router as RemixRouter } from '@remix-run/router/dist/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

function App() {

  const APP_ROUTES: RouteObject[] = [
    {
      path: '/',
      element: <Shell />,
      children: [
        {
          path: '',
          element: <Child />,
        },
      ]
    },
  ];

  function initializeRouter(): RemixRouter {
    return createBrowserRouter(APP_ROUTES);
  }

  return (
    <>
      <TrackedApp>
        <RouterProvider router={initializeRouter()} />
      </TrackedApp>
    </>
  );
}

export default App;
