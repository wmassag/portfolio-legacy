import React from "react"
import ReactDOM from "react-dom"
const app = document.getElementById('app')

require("./style.scss")

import Layout from "./fragments/pages/Layout/"

ReactDOM.render(
  <Layout />,
  app
);
