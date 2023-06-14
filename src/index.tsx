import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  useOutletContext,
} from "react-router-dom";
import Hello from './Hello';
import Nim from './Nim';
import { ContextType } from './types';

export function Root() {
  const context: ContextType = {
    hello: { name: useState('Hallo') },
    nim: {
      name: useState('Hallo'),
      checked: useState(true),
    }
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

// https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={Root}>
      <Route path="hello" Component={Hello} />
      <Route path="nim" Component={Nim} />
    </Route>
  ));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// https://reactrouter.com/en/main/hooks/use-outlet-context
export function useContext() {
  return useOutletContext<ContextType>();
}
