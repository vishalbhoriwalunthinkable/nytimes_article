import superagent from "superagent";
/*
 * @function "call" common method that makes api requests
 * @param {object} "request" stores the request 'method','endpoint', 'payload', 'query',
 * 'token' as keys...'
 */
export default function call({
  method = "get",
  url,
  endpoint,
  payload,
  query,
  type = "application/json",
}) {
  // eslint-disable-next-line no-undef
  const _url = url || `${process.env.REACT_APP_BASE_URL}/${endpoint}`;
  const _apiRequest = superagent(method, _url);

  return new Promise((resolve, reject) => {
    _apiRequest
      .set("Content-Type", type)
      .send(payload)
      .query(query)
      .then(resolve)
      .catch((error) => {
        const errorBody = (error.response && error.response.body) || {};
        reject(errorBody);
      });
  });
}
