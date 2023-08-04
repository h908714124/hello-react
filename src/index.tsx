import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useOutletContext
} from "react-router-dom";
import Hello from "./Hello";
import "./index.css";
import Nim from "./Nim";
import { ContextType } from "./types";

const context: ContextType = {
  model: undefined,
};

const loadData = async () => {
  const response = await fetch("http://localhost:3004/account/1");
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  const json: any = await response.json();
  context.model = json.to;
  return json.to;
};

export function Root() {
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
    id: path,
    loader: () => {
      if (!context.model) {
        return loadData();
      }
      return context.model;
    },
  }
}

// https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <Root />,
    loader: () => {
      if (!context.model) {
        return loadData();
      }
      return context.model;
    },
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
