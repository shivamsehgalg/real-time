/* global localStorage */
let isLogin = false;


const browserStorage = (typeof localStorage === 'undefined') ? null : localStorage.getItem('auth-token');

if (browserStorage !== null && browserStorage !== undefined) {
  isLogin = true;
}


const myConfig = {


};

export default myConfig;
