import axios from "axios";

export const getData = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        baseURL: "https://www.digikala.com/front-end/",
        headers: {
          token: "mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv",
        },
      })
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};
