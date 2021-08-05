import React from "react";
import renderer from "react-test-renderer";

import List from "./List";

it("list renders when there are no items", () => {
  const info = {
    isFetching: false,
    isError: false,
    data: [],
  };
  const tree = renderer.create(<List info={info} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("list renders when there are one item", () => {
  const info = {
    isFetching: false,
    isError: false,
    data: [{ title: "Hello", content: "content" }],
  };
  const tree = renderer.create(<List info={info} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("list renders when there is error", () => {
  const info = {
    isFetching: false,
    isError: true,
    data: [],
  };
  const tree = renderer.create(<List info={info} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("list renders when is fetcing true", () => {
  const info = {
    isFetching: true,
    isError: false,
    data: [],
  };
  const tree = renderer.create(<List info={info} />).toJSON();
  expect(tree).toMatchSnapshot();
});
