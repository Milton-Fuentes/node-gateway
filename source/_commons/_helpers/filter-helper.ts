/**
 * @author Dayron Roldan Query Parameters f: filter (equal (=), notEqual (!=), gt (>),
 * lt (<), like (%=), not like (!%=), in (:=)) o: order (value+asc) l: length s:
 * start t: type
 */
import { Request, Response, NextFunction } from 'express';
import { ParsedQs } from 'qs';
import { QueryRequest, Paging } from './body-request';
import { Model, Document } from 'mongoose';
import { ObjectHelper } from './object-helper';
// ['!=', '!%=', '%=', ':=', '>=', '<=', '>', '<', '='];

const operatorList: string[] = ['='];


export class FilterHelper {


    constructor() { }


    public static _findByFilter = async <T extends Document>(model: Model<T>, filterRecords: QueryRequest) => {
        try {
            // const filterRecords = await this.buildFilter(query);
            if (!ObjectHelper.isEmpty(filterRecords) && !ObjectHelper.isEmpty(filterRecords.filter) && !ObjectHelper.isEmpty(filterRecords) && !ObjectHelper.isEmpty(filterRecords.sorted)) {
                console.log('QueryRequest');
                console.log(filterRecords.filter);
                const filtered = await model.find(filterRecords.filter).sort(filterRecords.sorted);
                return ({ success: true, data: filtered });  
            }
            else {
                console.log('allrecords');
                return await model.find().then(
                    response => {
                        return ({ success: true, data: response });
                    });
            }
        } catch (err) {
            return { success: false, error: err };
        }
    }
    public static _findByFilter2 = async <T extends Document>(model: Model<T>, filterRecords: QueryRequest) => {
        try {
            // const filterRecords = await this.buildFilter(query);
            if (!ObjectHelper.isEmpty(filterRecords) && !ObjectHelper.isEmpty(filterRecords.filter) && !ObjectHelper.isEmpty(filterRecords) && !ObjectHelper.isEmpty(filterRecords.sorted)) {
                console.log('QueryRequest');
                console.log(filterRecords.filter);
                //const filterRecords = await FilterHelper.buildFilter(reqQuery);
                return await model.find(filterRecords.filter).sort(filterRecords.sorted).then(
                    response => {
                        console.log('QueryRequest2');
                        return ({ success: true, data: response });
                    });
            }
            else {
                console.log('allrecords');
                return await model.find().then(
                    response => {
                        return ({ success: true, data: response });
                    });
            }
        } catch (err) {
            return { success: false, error: err };
        }
    }

    public static buildFilter = async (query: ParsedQs) => {
        if (ObjectHelper.isEmpty(query.o) || ObjectHelper.isEmpty(query.f)) {
            let req = new QueryRequest(undefined, undefined, undefined);
            return req;
        }

        let qq: any[] = [];
        if (typeof query.o === 'string') {
            qq[0] = query.o;
        }
        else {
            qq = query.o as string[];
        }
        let ff: any[] = [];
        if (typeof query.f === 'string') {
            ff[0] = query.f;
        }
        else {
            ff = query.f as string[];
        }



        let sort = await this.parseArraySplitToObjSimple(qq, '=');
        let f = await this.parseArraySplitToObjSimple(ff as string[], '=');
        let req = new QueryRequest(undefined, sort, f);
        return req;
    }

    public static parseArraySplitToObjSimple = async (f: any[], pSplit: string) => {
        return await f.reduce(function (obj, val) {
            let split = val.split(pSplit);
            obj[split[0]] = split[1];
            return obj;
        }, {});

    }

}
