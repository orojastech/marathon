import { Enterprise } from "../entities/exam.entity.enterprise";
import { IEnterpriseRepository } from "../domain/exam.domain.enterprise";
import axios from 'axios';
import mongoose, { Schema, Document } from 'mongoose';
import EnterpriseSchema from '../schemas/exam.schema.enterprise'
import IEnterprise from '../documents/exam.document.enterprise'

class EnterpriseRepositoryImpl implements IEnterpriseRepository {
  async createEnterprise(enterprise: Enterprise): Promise<void> {
    await mongoose.model<IEnterprise>('Enterprise', EnterpriseSchema).create(enterprise);
  }
  async getEnterprise(tipo:string, ruc: string): Promise<Enterprise> {
    console.log('Enterprise get')
    const enterpriseCreate = new Enterprise()
   
    await axios.get(`${process.env.HOST}?tipo=${tipo}&ruc=${ruc}&token=${process.env.TOKEN}`)
    .then(function (response) {
      // handle success
      enterpriseCreate.ruc = response.data.ruc
      enterpriseCreate.razon_social = response.data.razon_social
      enterpriseCreate.estado = response.data.estado
      enterpriseCreate.direccion = response.data.direccion
      enterpriseCreate.ubigeo = response.data.ubigeo
      enterpriseCreate.departamento = response.data.departamento
      enterpriseCreate.provincia = response.data.provincia
      enterpriseCreate.distrito = response.data.distrito
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    return enterpriseCreate;
  }
  async getEnterprises(): Promise<any> {
    console.log('Enterprise get')
    const enterprises = mongoose.model<IEnterprise>('Enterprise', EnterpriseSchema);
    return await enterprises.find();
  }
}

export { EnterpriseRepositoryImpl }