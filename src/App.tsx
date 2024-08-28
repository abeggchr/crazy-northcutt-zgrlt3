import "./App.css";
import { ChildA } from "./a/ChildA";
import { ShellA } from "./a/ShellA";
import { ChildB } from "./b/ChildB";
import { ShellB } from "./b/ShellB";
import { TrackedApp } from "./TrackedApp";
import { Router as RemixRouter } from '@remix-run/router/dist/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

function App() {

  const APP_ROUTES: RouteObject[] = [
    {
      path: '/a',
      element: <ShellA />,
      children: [
        {
          path: '',
          element: <ChildA />,
        },
      ],
    },
    {
      path: '/b',
      element: <ShellB />,
      children: [
        {
          path: '',
          element: <ChildB />,
        },
      ]
    }
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
