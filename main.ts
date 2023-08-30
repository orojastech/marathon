import App from './app';
import PostsController from './src/controller/exam.controller.enterprise';
import { CreateEnterpriseUseCase } from "./src/usesCases/services/exam.service.enterprise";
import { EnterpriseRepositoryImpl } from "./src/infrastructure/repository.enterprise";

import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;
const enterpriseRepository = new EnterpriseRepositoryImpl()
const createEnterpriseUseCase = new CreateEnterpriseUseCase(enterpriseRepository)
const app = new App(
  [
    new PostsController(createEnterpriseUseCase),
  ],
  port,
);
 
app.listen();
