import { Request, Response, NextFunction } from 'express';
import { CategoryService } from '../_services/category-service';
import { FilterHelper } from '../_commons/_helpers/filter-helper';

export class CategoryController {
    public _categoryService:CategoryService;
    constructor() { 
        this._categoryService= new CategoryService();
    }
    public _findAll = async (req: Request, res: Response, next: NextFunction) => {
        try {        
            const allrecords = await this._categoryService._findAll(await FilterHelper.buildFilter(req.query));
            return res.status(200).send(allrecords);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    public _findById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const oneRecord = await this._categoryService._findById(req.params.id);
            console.log(oneRecord);
            return res.send(oneRecord);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    public _save = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const createdRecord = await this._categoryService._save(req.body.header, req.body.body);
            return res.send(createdRecord);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    public _update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const updatedRecord = await this._categoryService._update(req.body.header, req.body.body);
            return res.send(updatedRecord);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    public _delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const deletedRecord = await this._categoryService._delete(req.params.id);
            return res.send(deletedRecord);
        } catch (err) {
            res.status(500).send(err);
        }
    }

}