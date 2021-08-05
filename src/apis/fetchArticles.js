import apiCall from "./apiRequest";
// eslint-disable-next-line no-undef
const secretKey = process.env.REACT_APP_SECRET_KEY;

export function fetchArticles() {
  return apiCall({
    endpoint: "svc/mostpopular/v2/viewed/7.json",
    query: {
      "api-key": secretKey,
    },
  });
}
