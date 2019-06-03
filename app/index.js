import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"

const app = document.getElementById('app')

require("./style.scss")

import Layout from "./fragments/pages/Layout/"

ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  app
);
