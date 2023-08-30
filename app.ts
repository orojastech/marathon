import express from 'express';
import * as bodyParser from 'body-parser';
import connect from './src/db/exam.db.connections';

class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers: any, port: any) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.mongodbconnection();
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }
 
  private initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  }
  // mongodb
  private mongodbconnection() {
    const db = process.env.MONGODBCNX;
    connect({db});
  }
  // fin-mongodb
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
  
}
 
export default App;