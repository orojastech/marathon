import { Document } from 'mongoose';
interface IEnterprise extends Document {
    ruc: string
    razon_social: string
    estado: string
    direccion: string
    ubigeo: string
    departamento: string
    provincia: string
    distrito: string
  }
export default IEnterprise