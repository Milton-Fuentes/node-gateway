import { Request, Response, NextFunction } from 'express';
import { UserService } from '../_services/user-service';
export class UserController {
    public _userService:UserService;
    constructor() { 
        this._userService= new UserService();
    }
    public _findAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const allrecords = await this._userService._findAll();
            return res.send(allrecords);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    public _findById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const oneRecord = await this._userService._findById(req.params.id);
            console.log(oneRecord);
            return res.send(oneRecord);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    public _findByFilter = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const filterRecords = await this._userService._findByFilter(req.query);
            console.log(filterRecords);
            return res.send(filterRecords);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    public _save = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const createdRecord = await this._userService._save(req.body.header, req.body.body);
            return res.send(createdRecord);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    public _update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const updatedRecord = await this._userService._update(req.body.header, req.body.body);
            return res.send(updatedRecord);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    public _delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const deletedRecord = await this._userService._delete(req.params.id);
            return res.send(deletedRecord);
        } catch (err) {
            res.status(500).send(err);
        }
    }

}