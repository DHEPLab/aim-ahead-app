import React from "react";
import { act, render, screen } from "@testing-library/react";
import ExampleUserPage from "./index";
import { BrowserRouter } from "react-router-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const mock = new MockAdapter(axios);

mock.onGet("http://localhost:4000/user").reply(200, {
  id: 1001,
  name: "David",
  email: "david@hotmail.com",
  title: "Mr.",
  admin_flag: "user.admin_flag",
  created_timestamp: "user.created_timestamp",
  modified_timestamp: "user.modified_timestamp",
});

test("renders example page", async () => {
  render(
    <BrowserRouter>
      <ExampleUserPage />
    </BrowserRouter>,
  );

  const linkElement = screen.getByText(/Go to Home Page/i);
  expect(linkElement).toBeInTheDocument();
});
