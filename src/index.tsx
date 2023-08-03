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
import "./index.css";

const context: ContextType = {
  model: undefined,
};

export function Root() {
  useEffect(() => {
    fetch("http://localhost:3004/account/1")
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw new Error('Something went wrong');
      })
      .then((response) => response.json())
      .then((data) => data.to)
      .then((to) => {
        context.model = to;
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const styleTab = "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold";

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div id="sidebar">
        <nav>
          <ul className="flex border-b">
            <li className="-mb-px mr-1">
              <Link className={styleTab} to={`/hello`}>Hello React</Link>
            </li>
            <li className="-mb-px mr-1">
              <Link className={styleTab} to={`/nim`}>Play Nim</Link>
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

const createRouterNode = (path: string, element: React.ReactNode) => {
  return {
    path: path,
    element: element,
    loader: async () => {
      if (context.model === undefined) {
        return redirect("/");
      }
      return null;
    },
  }
}

// https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      createRouterNode("hello", <Hello />),
      createRouterNode("nim", <Nim />),
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
