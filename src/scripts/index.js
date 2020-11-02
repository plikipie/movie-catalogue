import "regenerator-runtime";
import "../styles/appbar.css";
import "../styles/styles.css";
import "../styles/main.css";
import "../styles/content.css";
import "../styles/footer.css";
import "../styles/responsive.css";

import App from "./views/app.js";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
});
