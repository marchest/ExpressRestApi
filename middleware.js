const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
module.exports = {
    
    jwtCheck : jwt({
        secret: jwksRsa.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: "https://xascore.eu.auth0.com/.well-known/jwks.json"
        }),
        audience: 'http://localhost:3001/',
        issuer: "https://xascore.eu.auth0.com/",
        algorithms: ['RS256']
    })
};