// import axios from "axios"
// eslint-disable-next-line
export default ({
  method = 'GET',
  url = '',
  headers = {},
  data = {},
}) => {
  if(method === 'GET') {
    return fetch(url)
  } else {
    return fetch(url, {
      method,
      headers,
      data,
    })
  }
}
