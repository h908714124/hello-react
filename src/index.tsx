import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useOutletContext,
} from "react-router-dom";
import Hello from './Hello';
import Nim from './Nim';
import { ContextType } from './types';

export default function Root() {
  const context: ContextType = {
    hello: { name: useState('Hallo') },
    nim: { name: useState('Hallo') }
  };
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`/hello`}>Hello React</Link>
            </li>
            <li>
              <Link to={`/nim`}>Play Nim</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet context={context} />
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "hello",
        element: <Hello />,
      },
      {
        path: "nim",
        element: <Nim />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export function useContext() {
  return useOutletContext<ContextType>();
}
