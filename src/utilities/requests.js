import axios from "axios";

// export const getData = (url, params) => {
//   const config = axios({
//     baseURL: "https://www.digikala.com/front-end/",
//     method: "GET",
//     url,
//     params,
//     headers: {
//       token: "mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv",
//     },
//   });
//   axios.request(config);
// };

// export const getData = (url, params) => {
//   axios
//     .get(url, {
//       ...configs,
//       headers: {
//         token: "mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv",
//       },
//     })
//     .then((data) => {
//       resolve(data.data);
//     })
//     .catch((errors) => {
//       this.handleUnAuthorizedRequest(errors);
//       reject(errors.response ? errors.response.data : {});
//     });
// };
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
