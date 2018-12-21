
// const express = require('express');
// const app = express();
// const session = require('express-session');
// const routes = require('./routes/api/index');
// var stripe = require("stripe")("sk_test_rFMErXtK5d4ef843jJZxNVEt");


// app.use('/api', routes);


// //get UUID for transactions
// let getUuid = ()=>{
// const Url = 'https://www.uuidgenerator.net/api/version4';

// fetch(Url)
// .then(data=>{return data.json()})
// .then(res=>{console.log(res)})
// }

// stripe.charges.retrieve("ch_1DjfTQAmBHOHNC1nnC9Ardf4", {
//   api_key: "sk_test_rFMErXtK5d4ef843jJZxNVEt",
//   expand: ["user_id"]
// }, {
//   idempotency_key: ''
// });
