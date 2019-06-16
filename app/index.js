import React from "react"
import ReactDOM from "react-dom"
import {HashRouter} from "react-router-dom"

const app = document.getElementById('app')

require("./style.scss")

import Layout from "./fragments/pages/Layout/"

ReactDOM.render(
  <HashRouter>
    <Layout />
  </HashRouter>,
  app
);
