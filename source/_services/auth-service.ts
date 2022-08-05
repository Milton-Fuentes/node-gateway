
//import { Category } from '../_models/category';
import MongoDb from 'mongodb';
import { FilterHelper } from '../_commons/_helpers/filter-helper';
import { ObjectHelper } from '../_commons/_helpers/object-helper';
import { QueryRequest } from '../_commons/_helpers/body-request';
import { ParsedQs } from 'qs';
const ObjectId = MongoDb.ObjectId;
export class AuthService {
    constructor() { }

 
 
 
    public _login = async ( body: any) => {
        try {
            let _login = {
                name: body.username,
                shortName: body.password      
            };
            return { success: true, data: _login };
            
        } catch (err) {
            return { success: false, error: err };
        }
    }
    
}