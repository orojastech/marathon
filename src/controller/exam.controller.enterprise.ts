import * as express from 'express';
import { CreateEnterpriseUseCase } from "../usesCases/services/exam.service.enterprise";

class EnterpriseController {
  public path = '/enterprise';
  public router = express.Router();
  private createEnterpriseUseCase: CreateEnterpriseUseCase

  constructor(enterpriseUseCase: CreateEnterpriseUseCase) {
    this.createEnterpriseUseCase = enterpriseUseCase
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllEnterprises);
    this.router.post(this.path, this.createEnterprise);
  }
 
  getAllEnterprises = async (request: express.Request, response: express.Response) => {
    response.send(await this.createEnterpriseUseCase.getEnterprises());
  }
 
  createEnterprise = async (request: express.Request, response: express.Response) => {
    const { tipo, ruc } = request.body
    response.send(await this.createEnterpriseUseCase.create({ tipo, ruc }));
  }
}
 
export default EnterpriseController;