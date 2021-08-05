import React from "react";
import renderer from "react-test-renderer";

import ListItem from "./ListItem";

it("ListItem renders without props", () => {
  const tree = renderer.create(<ListItem />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("ListItem renders with props", () => {
  const data = {
    abstract: "abstract",
    byline: "byline",
    published_date: "data",
  };
  const tree = renderer.create(<ListItem data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
