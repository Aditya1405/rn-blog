import axios from 'axios';

export default axios.create({
    //this URL will change everytime npm run tunnel is executed 
  baseURL: 'http://057960f7f020.ngrok.io/',
});
