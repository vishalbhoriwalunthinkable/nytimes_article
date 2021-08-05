import React from "react";
import renderer from "react-test-renderer";

import ContentWrap from "./ContentWrap";

it("ContentWrap isFetching true", () => {
  const tree = renderer
    .create(
      <ContentWrap isFetching={true}>
        <div>Child</div>
      </ContentWrap>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("ContentWrap when isFetching false", () => {
  const tree = renderer
    .create(
      <ContentWrap isFetching={false}>
        <div>Child</div>
      </ContentWrap>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("ContentWrap when isError true", () => {
  const tree = renderer
    .create(
      <ContentWrap isFetching={false} isError={true}>
        <div>Child</div>
      </ContentWrap>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("ContentWrap when isError false", () => {
  const tree = renderer
    .create(
      <ContentWrap isFetching={false} isError={false}>
        <div>Child</div>
      </ContentWrap>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
