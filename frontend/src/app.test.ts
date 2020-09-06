import { App } from "./app";

describe("App()", () => {
  beforeAll(() => {
    global.SERVER_HOST = "1.2.3.4";
  });
  it("constructs without throwing", () => {
    const app = new App();
    expect(app).toBeTruthy();
  });
});
