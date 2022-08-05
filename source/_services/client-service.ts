import  {Client}  from '../_models/client';
import MongoDb from 'mongodb';
const ObjectId = MongoDb.ObjectId;
export class ClientService{
    constructor(){}
public _findAll = async () => {
    try {
        return await Client.find().then(
            (response: any) => {
                return ({ success: true, data: response });
            });
    } catch (err) {
        return { success: false, error: err };
    }
}

public _findById = async (id: any) => {
    try {
        return await Client.findOne({ _id: new ObjectId(id) }).then(
            (response: any) => {
                return ({ success: true, data: response });
            });
    } catch (err) {
        return { success: false, error: err };
    }
}
public _findByFilter = async (query: any) => {
    console.log(query);
    return query;
}
public _save = async (header: any, body: any) => {
    try {

        console.log(body);
        let _dataSave = new Client({
            name: body.name,
            shortName: body.shortName,
            description: body.description
        });
        return await _dataSave.save()
            .then(
                (response: any) => {
                    return ({ success: true, data: response });
                }
            );
    } catch (err) {
        return { success: false, error: err };
    }
}
public _update = async (header: any, body: any) => {
    try {
        console.log(body);
        let _dataUpdate = {
            name: body.name,
            shortName: body.shortName,
            description: body.description,
            address: body.address
        };
        return await Client.findByIdAndUpdate(body.id, { $set: _dataUpdate })
            .then(
                (response: any) => {
                    return ({ success: true, data: response });
                });
    } catch (err) {
        return { success: false, error: err };
    }
}
public _delete = async (id: String) => {
    try {
        return await Client.findByIdAndRemove(id)
            .then(
                (response: any) => {
                    return ({ success: true, message: 'Deleted Successfully!' });
                });
    } catch (err) {
        return { success: false, error: err };
    }
}
}
//export default { _findAll, _findById, _findByFilter, _save, _update, _delete };