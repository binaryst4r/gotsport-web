import axios, {AxiosRequestConfig} from "axios";

export const fetchDetail = async (path: string, id: 'string', options: AxiosRequestConfig = {}) => {
  const response = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_URL}/${path}/${id}`,
    ...options
  })
  return Promise.resolve(response.data)
};

export const fetchCollection = async (path: string, options: AxiosRequestConfig = {}) => {
  const response = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_URL}/${path}`,
    ...options
  })

  return Promise.resolve(response.data)
}
