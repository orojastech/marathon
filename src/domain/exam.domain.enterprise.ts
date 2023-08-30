import { Enterprise } from "../entities/exam.entity.enterprise"

interface IEnterpriseRepository {
  createEnterprise(enterprise: Enterprise): Promise<void>
  getEnterprises(): Promise<any>
  getEnterprise(tipo:string, ruc: string): Promise<Enterprise>
}

export { IEnterpriseRepository }