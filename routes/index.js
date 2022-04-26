const luhnApi = require('./luhn.js');
const productApi = require('./product.js');
const loginApi = require('./login.js')

function controllers(app) {
    luhnApi(app); 
    productApi(app);
    loginApi(app);
}

module.exports = controllers;
