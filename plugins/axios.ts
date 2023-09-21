import axios from 'axios'

console.log('>> Axios interceptor')

axios.interceptors.request.use((config) => {
  console.log('>> request')
  return config;
})

export default () => {}
