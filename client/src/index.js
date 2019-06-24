import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-easy-swipe/lib/react-swipe.js";


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
