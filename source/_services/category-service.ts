
import { Category } from '../_models/category';
import MongoDb from 'mongodb';
import { FilterHelper } from '../_commons/_helpers/filter-helper';
import { ObjectHelper } from '../_commons/_helpers/object-helper';
import { QueryRequest } from '../_commons/_helpers/body-request';
import { ParsedQs } from 'qs';
const ObjectId = MongoDb.ObjectId;
export class CategoryService {
    constructor() { }

    public _findAll = async (queryRequest: QueryRequest) => {
        const filtered =await  FilterHelper._findByFilter(Category, queryRequest);
        return filtered ; 
    }

    public _findById = async (id: string) => {
        try {
            const item= await Category.findOne({ _id: new ObjectId(id) });
            return ({ success: true, data: item });
        } catch (err) {
            return { success: false, error: err };
        }
    }

    public _save = async (header: any, body: any) => {
        try {
            let _dataSave = new Category({
                name: body.name,
                shortName: body.shortName,
                code: body.code
            });
            return await _dataSave.save()
                .then(
                    response => {
                        return ({ success: true, data: response });
                    }
                );
        } catch (err) {
            return { success: false, error: err };
        }
    }
    public _update = async (header: any, body: any) => {
        try {
            let _dataUpdate = {
                name: body.name,
                shortName: body.shortName,
                code: body.code
            };
            return await Category.findByIdAndUpdate(body.id, { $set: _dataUpdate })
                .then(
                    response => {
                        return ({ success: true, data: response });
                    });
        } catch (err) {
            return { success: false, error: err };
        }
    }
    public _delete = async (id: string) => {
        try {
            return await Category.findByIdAndRemove(id)
                .then(
                    response => {
                        return ({ success: true, message: 'Deleted Successfully!' });
                    });
        } catch (err) {
            return { success: false, error: err };
        }
    }
}