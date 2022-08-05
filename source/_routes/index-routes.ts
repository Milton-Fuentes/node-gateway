
import UserRoutes from './user-routes';

import CategoryRoutes from './category-routes';
import AuthRoutes from './auth-routes';
import config from '../_configs/config';

const httpProxy = require('express-http-proxy');
//const fileStorageServiceProxy = httpProxy('http://NODE-FILE-SERVICE');
//const propertiesServiceProxy = httpProxy('http://NODE-PROPERTIES-SERVICE');
const fileStorageServiceProxy = httpProxy('http://127.0.0.1:9001');
const propertiesServiceProxy = httpProxy('http://127.0.0.1:9002');
const keycloak = require('../middleware/keycloak-auth').initKeycloak(config.keycloak);
const routes = (app: any, api: any) => {
   app.use(keycloak.middleware(
      {
         logout: '/logout',
         admin: '/',
      }
   ));  
   //for testing porpuse
   app.use(`/admin`, keycloak.protect(), function (req: any, res: any) {
      res.send("Hello admin");
      //next(); 
   });

   //app.use(`/login`, AuthRoutes);  
   app.use(`/user`,keycloak.protect(), UserRoutes); 
   app.use(`/category`, keycloak.protect(), CategoryRoutes);

   app.use(`/strg`, keycloak.protect(), fileStorageServiceProxy);
   app.use(`/pr`, keycloak.protect(), propertiesServiceProxy);

   app.use((req: any, res: any, next: any) => {
      return res.status(404).end('Not Found');
   });

}
export default { routes };