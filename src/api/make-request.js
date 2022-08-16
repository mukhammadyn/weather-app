import axios from "axios"
// eslint-disable-next-line
export default ({
  method = 'get',
  url = '',
  headers = {},
  data = {},
}) => {
  return axios({
    method,
    url,
    headers,
    data,
  }).catch((error) => {
    return new Error(error)
  })
}
