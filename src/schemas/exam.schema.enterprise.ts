import { Schema } from 'mongoose';
const EnterpriseSchema: Schema = new Schema({
    ruc: { type: String, required: true },
    razon_social:  { type: String, required: true },
    estado: { type: String, required: true },
    direccion: { type: String, required: true },
    ubigeo: { type: String, required: true },
    departamento: { type: String, required: true },
    provincia: { type: String, required: true },
    distrito: { type: String, required: true },
  });
export default EnterpriseSchema