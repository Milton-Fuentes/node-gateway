import {User} from '../_models/user';
import MongoDb from 'mongodb';
const ObjectId = MongoDb.ObjectId;
export class UserService {
    constructor() { }
    public _findAll = async () => {
        try {
            return await User.find().then(
                (response: any) => {
                    return ({ success: true, data: response });
                });
        } catch (err) {
            return { success: false, error: err };
        }
    }
    public _findById = async (id: any) => {
        try {
            return await User.findOne({ _id: new ObjectId(id) }).then(
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
            let _dataSave = new User({
                username: body.username,
                password: body.password,
                firstName: body.firstName,
                lastName: body.lastName,
                token: body.token
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
                username: body.username,
                password: body.password,
                firstName: body.firstName,
                lastName: body.lastName,
                token: body.token
            };
            return await User.findByIdAndUpdate(body.id, { $set: _dataUpdate })
                .then(
                    (response: any) => {
                        return ({ success: true, data: response });
                    });
        } catch (err) {
            return { success: false, error: err };
        }
    }
    public _delete = async (id: any) => {
        try {
            return await User.findByIdAndRemove(id)
                .then(
                    (response: any) => {
                        return ({ success: true, message: 'Deleted Successfully!' });
                    });
        } catch (err) {
            return { success: false, error: err };
        }
    }
}
