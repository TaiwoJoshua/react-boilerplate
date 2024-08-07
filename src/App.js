import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";

// Update loader function (verification, data fetch, ... )
function loader() {
  return null;
}

// Update action function (form submission)
function action() {
  return null;
}

const transition = { duration: 0.5 };

const AnimatedRoute = ({ children }) => (
  <motion.div
    key={window.location.pathname}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={transition}
  >
    {children}
  </motion.div>
);

export const routes = [
  { path: "/", element: <Home />, errorElement: <Error /> },
  // { path: 'welcome', element: <Welcome /> },
  // { path: 'parentComponent', parent: 'parentComponent', element: <Element /> },
  // { path: '/', childOf: 'parentComponent', element: <Element /> },
  // { path: 'childElement', childOf: 'parentComponent', element: <Element /> },
  // { path: 'offline', element: <Offline /> },
  { path: "*", element: <NotFound /> },
];

const routerElements = {
  path: "/",
  element: <Layout />,
  children: routes.map((route) =>
    route.childOf
      ? {}
      : {
          index: route.path === "/",
          path: route.path === "/" ? undefined : route.path,
          element: <AnimatedRoute>{route.element}</AnimatedRoute>,
          loader: route.loader ? route.loader : loader,
          action: route.action ? route.action : action,
          errorElement: route.errorElement ? route.errorElement : <Error />,
          children:
            route.path === "/"
              ? undefined
              : routes.map((rout) => {
                  if (rout.childOf === route.parent) {
                    return {
                      index: rout.path === "/",
                      path: rout.path === "/" ? undefined : rout.path,
                      element: <AnimatedRoute>{rout.element}</AnimatedRoute>,
                      loader: rout.loader ? rout.loader : loader,
                      action: rout.action ? rout.action : action,
                      errorElement: rout.errorElement ? (
                        rout.errorElement
                      ) : (
                        <Error />
                      ),
                      children:
                        rout.path === "/"
                          ? undefined
                          : routes.map((routs) => {
                              if (routs.childOf === rout.parent) {
                                return {
                                  index: routs.path === "/",
                                  path:
                                    routs.path === "/" ? undefined : routs.path,
                                  element: (
                                    <AnimatedRoute>
                                      {routs.element}
                                    </AnimatedRoute>
                                  ),
                                  loader: routs.loader ? routs.loader : loader,
                                  action: routs.action ? routs.action : action,
                                  errorElement: routs.errorElement ? (
                                    routs.errorElement
                                  ) : (
                                    <Error />
                                  ),
                                };
                              } else {
                                return {};
                              }
                            }),
                    };
                  } else {
                    return {};
                  }
                }),
        }
  ),
};

const router = createBrowserRouter([routerElements]);

export default function App() {
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </div>
  );
}
