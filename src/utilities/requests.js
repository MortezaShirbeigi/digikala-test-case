import axios from "axios";

export const getData = (url, params) => {
  const config = axios({
    baseURL: "https://www.digikala.com/front-end/",
    method: "GET",
    url,
    params,
    headers: {
      token: "mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv",
    },
  });
  axios.request(config);
};
