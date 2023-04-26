import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "../src/assets/styles/main.css";
import { store } from "./app/store.js";
import { RouterProvider } from "react-router";
import routes from "./Routes/Routes";

/*  slider css file */
import 'swiper/swiper-bundle.min.css';


/* slider css file  */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
