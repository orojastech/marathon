import * as express from 'express';
import jwt from 'jsonwebtoken';

export interface IPayload {
  _id: string;
  iat: number;
} 

class SecurityController {
  public path = '/security';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path + '/token', this.generatetoken);
  }
 
  generatetoken = async (request: express.Request, response: express.Response) => {
    if (process.env.USER == request.body.user) {
      const token: string = jwt.sign({ _id: request.body.user }, process.env.SECRET || '');
      response.header('auth-token', token).json(token);
    } else {
      response.status(400).send('Invalid Token');
    }
  }
 }
 
export default SecurityController;