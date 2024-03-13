import { instance } from "./api";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(instance);

describe("API Tests", () => {
  afterEach(() => {
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
