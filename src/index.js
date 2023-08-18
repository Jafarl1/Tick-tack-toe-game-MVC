import Controller from "./controller.js";
import Model from "./model.js";
import View from "./view.js";

import "./style.css";

function initialize() {
  const model = new Model();
  const view = new View();
  const controller = new Controller(model, view);
  controller.init();
}

window.addEventListener("DOMContentLoaded", initialize);
