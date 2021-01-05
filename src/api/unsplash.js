import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID t-nRnfnNb4oV1YNDCraX7vxqNGNuwJDvArYVFID9d_0'
 }
});