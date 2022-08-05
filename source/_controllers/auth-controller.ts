import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../_services/auth-service';

export class AuthController {
    public _authService: AuthService;
    constructor() {
        this._authService = new AuthService();
    }
    public _login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const allrecords = await this._authService._login(req.body);
            return res.send(allrecords);
        } catch (err) {
            res.status(500).send(err);
        }
    }

}