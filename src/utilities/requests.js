import axios from "axios";

export const getData = (url, cancelToken = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        baseURL: "https://www.digikala.com/front-end/",
        headers: {
          token: "mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv",
        },
        cancelToken,
      })
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
