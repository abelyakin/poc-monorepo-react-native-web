// Security precaution
(window as any).eval = global.eval = (payload: string) => {
  const error = new Error(`This app does not allow window.eval().`);
  Object.assign(error, { payload });

  throw error;
};

import { ComponentType } from "react";
import { AppRegistry } from "react-native-web";

import "./index.css";

import { App } from "@traplinked/components/src/components/App";

const render = (AppComponent: ComponentType) => {
  AppRegistry.registerComponent("traplinked", () => AppComponent);
  AppRegistry.runApplication("traplinked", {
    rootTag: document.getElementById("root"),
  });
};

render(App);

/*
if (typeof module !== 'undefined' && (module as any).hot) {
  ;(module as any).hot.accept('@traplinked/components/src/components/App', () => {
    const NewApp = require('@traplinked/components/src/components/App').App
    render(NewApp)
  })
}
*/
