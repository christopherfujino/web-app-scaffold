import { Component, ComponentChild, VNode } from "preact";
import { html } from "htm/preact";

declare const SERVER_HOST: string;
declare const APP_NAME: string;

const API_ROOT = `http://${SERVER_HOST}:8080/api`;

interface State {
  apiRoot: string,
  error: Error | null,
  currentRoute: string,
}

export class App extends Component<Record<string, unknown>, State> {
  constructor() {
    super();
    this.routes = [
      "demo",
    ];
    this.state = {
      "apiRoot": API_ROOT,
      "currentRoute": "demo",
      "error": null,
    };
  }

  routes: string[];

  async componentDidMount(): Promise<void> {
    console.log("App is ready.");
  }

  componentDidCatch(error: Error): void {
    console.error("Caught error:");
    console.error(error);
    this.setState({"error": error});
  }

  render(_: Record<string, unknown>, state: State): ComponentChild {
    let view: VNode = html`<div></div>`;
    switch(state.currentRoute) {
    case "demo":
      view = html`
        <div>
          <h1>${APP_NAME}</h1>
          <p>
            API root is ${state.apiRoot}.
          </p>
        </div>
      `;
      break;
    default:
      throw new Error(`Unknown route: ${state.currentRoute}`);
    }
    return view;
  }
}
