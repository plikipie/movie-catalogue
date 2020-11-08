import "regenerator-runtime";
import "../styles/appbar.css";
import "../styles/styles.css";
import "../styles/main.css";
import "../styles/content.css";
import "../styles/footer.css";
import "../styles/responsive.css";

import App from "./views/app.js";
import swRegister from "./utils/sw-register";
import WebSocketInitiator from "./utils/websocket-initiatior";
import CONFIG from "./globals/config";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
