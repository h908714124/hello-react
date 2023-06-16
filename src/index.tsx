import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  Outlet,
  redirect,
  RouterProvider,
  useOutletContext,
} from "react-router-dom";
import Hello from "./Hello";
import Nim from "./Nim";
import { ContextType } from "./types";

const context: ContextType = {
  model: undefined,
};

export function Root() {
  useEffect(() => {
    fetch("http://localhost:3004/account/1")
      .then((response) => response.json())
      .then((data) => data.to)
      .then((to) => {
        context.model = to;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "hello",
        element: <Hello />,
        loader: async () => {
          if (context.model === undefined) {
            return redirect("/");
          }
          return null;
        },
      },
      {
        path: "nim",
        element: <Nim />,
        loader: async () => {
          if (context.model === undefined) {
            return redirect("/");
          }
          return null;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// https://reactrouter.com/en/main/hooks/use-outlet-context
export function useContext() {
  return useOutletContext<ContextType>();
}
