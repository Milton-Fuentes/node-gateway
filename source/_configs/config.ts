import dotenv from 'dotenv';

dotenv.config();

const Configuration = {
    //node secretet: FuG0QIzo2Ta6AuZoUNEgYX5beT4SlWYa
    //angular secretet: shKNsWUTi0vLja3ishR7zmqRv9z31HRa

    api: {
        port: process.env.API_PORT,
        url: process.env.API_HOST,
        route: process.env.API_ROUTE
    },
    db: {
        port: process.env.DB_PORT,
        name: process.env.DB_NAME,
        hostname: process.env.DB_HOST,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS

    },
    eureka: {
        port: process.env.EUREKA_PORT || 8761,
        host: process.env.EUREKA_CLIENT_SERVICEURL_DEFAULTZONE || 'localhost',
        servicePath: '/eureka',
        maxRetries: 10,
        requestRetryDelay: 2000,
    },
    keycloak : {
        clientId: 'node-gateway',
        bearerOnly: true,
        serverUrl: 'http://localhost:8080/auth',
        realm: 'nodeenv',
        credentials: {
            secret: 'FuG0QIzo2Ta6AuZoUNEgYX5beT4SlWYa'
        }
    }
};

export default Configuration;