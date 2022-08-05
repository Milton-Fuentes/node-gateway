//const jwt = require('jsonwebtoken');


const request = require("request");
import config from '../_configs/config';
const keycloak = require('./keycloak-auth').initKeycloak(config.keycloak);

var keycloakConfig = {
    clientId: 'node-gateway',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'nodenenv',
    credentials: {
        secret: 'FuG0QIzo2Ta6AuZoUNEgYX5beT4SlWYa'
    }
};

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
    const options = {
        method: 'GET',
        url: `https://${keycloakConfig.serverUrl}/auth/realms/${keycloakConfig.realm}/protocol/openid-connect/userinfo`,
        headers: {
            // add the token you received to the userinfo request, sent to keycloak
            Authorization: req.headers.authorization,
        },
    };

    // send a request to the userinfo endpoint on keycloak
    request(options, (error, response, body) => {
        if (error) throw new Error(error);

        // if the request status isn't "OK", the token is invalid
        if (response.statusCode !== 200) {
            res.status(401).json({
                error: `unauthorized`,
            });
        }
    });















    // const token = authHeader.split(' ')[1];



    /*  let decodedToken;
      try {
          decodedToken = jwt.verify(token, 'somesupersecretsecret');
      } catch (err) {
          err.statusCode = 500;
          throw err;
      }*/
    /* if (!decodedToken) {
         const error = new Error('Not authenticated.');
         error.statusCode = 401;
         throw error;
     }
     req.userId = decodedToken.userId;*/
    next();
};