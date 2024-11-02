import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    Authorization: 'JWT ' + localStorage.getItem('access_token'),
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

const refreshAccessToken = async () => {
  const refresh = localStorage.getItem('refresh_token');
  if (refresh) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/token/refresh/`,
        {
          refresh: refresh,
        },
      );
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      return response.data.access;
    } catch (error) {
      console.error('Failed to refresh token', error);
      throw error;
    }
  }
  return null;
};

axiosInstance.interceptors.request.use(
  async (config) => {
    let accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      accessToken = await refreshAccessToken();
    }
    if (accessToken) {
      config.headers['Authorization'] = `JWT ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const accessToken = await refreshAccessToken();
      if (accessToken) {
        axios.defaults.headers.common['Authorization'] = `JWT ${accessToken}`;
        return axiosInstance(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response &&
//       error.response.status === 401 &&
//       error.response.statusText === 'Unauthorized'
//     ) {
//       const refresh_token = localStorage.getItem('refresh_token');
//
//       return axiosInstance
//         .post('/auth/token/refresh/', { refresh: refresh_token })
//         .then((response) => {
//           localStorage.setItem('access_token', response.data.access);
//           localStorage.setItem('refresh_token', response.data.refresh);
//
//           axiosInstance.defaults.headers['Authorization'] =
//             'JWT ' + response.data.access;
//           originalRequest.headers['Authorization'] =
//             'JWT ' + response.data.access;
//
//           return axiosInstance(originalRequest);
//         })
//         .catch((err) => {
//           console.log('Error:', err);
//         });
//     } else if (error.response === undefined) {
//       console.log(
//         'Undefined response! Please ensure the backend API is connected.',
//         error,
//       );
//     }
//     return Promise.reject(error);
//   },
// );
export default axiosInstance;
