import { render } from "preact";
import { html } from "htm/preact";
import { App } from "./ts/app";
import "./style.css";

render(html`<${App} />`, document.body);
