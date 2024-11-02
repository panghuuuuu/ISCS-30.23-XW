import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Launch from "./views/Launch";
import { Helmet } from "react-helmet";
import "semantic-ui-css/semantic.min.css";
import "./output.css";
import "slick-carousel/slick/slick.min";
import history from "./history";

// redux
import store from "./store";
import { Provider } from "react-redux";
// actions
//
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      {" "}
      <Helmet>
        <meta property="og:title" content="OrSem 2024: Mithi" />
        <meta
          property="og:description"
          content="The official website of the Ateneo de Manila University Freshmen and Transferee Orientation Seminar 2024."
        />
        <meta
          property="og:image"
          content="https://admuorsem.com/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <title>OrSem 2024: Mithi</title>
      </Helmet>
      <App />
    </BrowserRouter>
  </Provider>
);
