import { instance } from "./api";
import MockAdapter from "axios-mock-adapter";

const localStorageMock = (function () {
  let store: { [key: string]: string };
  return {
    getItem: function (key: string) {
      return store[key];
    },
    setItem: function (key: string, value: string) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

const mock = new MockAdapter(instance);

describe("API Tests", () => {
  beforeEach(() => {
    localStorage.clear();
    mock.reset();
  });

  test("GET request", async () => {
    const responseData = {
      name: "David",
    };
    mock.onGet("/api/users").reply(200, responseData);

    const response = await instance.get("/api/users");

    expect(response.status).toBe(200);
    expect(response.data).toEqual(responseData);
  });

  test("Authorization header is correctly set in request", async () => {
    const token = "123456";
    localStorage.setItem("token", token);
    const url = "/protected";
    mock.onGet(url).reply((config) => {
      expect(config.headers?.Authorization).toEqual(`Bearer ${token}`);
      return [200];
    });

    await instance.get(url);
  });

  test("Token is stored on receiving new token", async () => {
    const newToken = "newToken";
    mock.onGet("/api/users").reply(200, {}, { Authorization: `Bearer ${newToken}` });

    await instance.get("/api/users");
    expect(localStorage.getItem("token")).toEqual(newToken);
  });

  test("Error handling interceptor", async () => {
    const url = "/api/nonexistent";
    try {
      await instance.get(url);
    } catch (error) {
      // @ts-ignore
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error.message).toEqual("Request failed with status code 404");
    }
  });
});
