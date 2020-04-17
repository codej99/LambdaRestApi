'use strict';

const api = require('lambda-api')();

api.get('/v1/membership/user/:id', async(req, res) => {
  console.log(`${req.method} - ${req.route} => pathParameter = ${JSON.stringify(req.params.id)} | body = ${JSON.stringify(req.body)}\n`);
  res.status(200).json({
    "code": 0,
    "msg": "success",
    "data": {
      "id": "id-01",
      "name": "happydaddy",
      "age": 32,
      "job": "programmer"
    }
  });
});

api.put('/v1/membership/user', async(req, res) => {
  console.log(`${req.method} - ${req.route} => queryString = ${JSON.stringify(req.query)} | body = ${JSON.stringify(req.body)}\n`);
  res.status(200).json({
    "code": 0,
    "msg": "success",
    "data": {
      "id": "id-01",
      "name": "happydaddy",
      "age": 32,
      "job": "programmer"
    }
  });
});

api.post('/v1/membership/user', async(req, res) => {
  console.log(`${req.method} - ${req.route} => queryString = ${JSON.stringify(req.query)} | body = ${JSON.stringify(req.body)}\n`);
  res.status(200).json({
    "code": 0,
    "msg": "success",
    "data": req.body
  });
});

api.delete('/v1/membership/user', async(req, res) => {
  console.log(`${req.method} - ${req.route} => queryString = ${JSON.stringify(req.query)} | body = ${JSON.stringify(req.body)}\n`);
  res.status(200).json({
    "code": 0,
    "msg": "success"
  });
});

module.exports.router = async (event, context) => {
  return await api.run(event, context)
};
