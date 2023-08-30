import { Enterprise } from "../../entities/exam.entity.enterprise"
import { IEnterpriseRepository } from "../../domain/exam.domain.enterprise"

class CreateEnterpriseUseCase {
  private enterpriseRepository: IEnterpriseRepository

  constructor(enterpriseRepository: IEnterpriseRepository) {
    this.enterpriseRepository = enterpriseRepository
  }

  async create(enterpriseCreateDTO: EnterpriseCreateDTO) {
    const enterpriseResponse = await this.enterpriseRepository.getEnterprise(enterpriseCreateDTO.tipo, enterpriseCreateDTO.ruc);
    const enterpriseCreate = new Enterprise()
    enterpriseCreate.ruc = enterpriseResponse.ruc
    enterpriseCreate.razon_social = enterpriseResponse.razon_social
    enterpriseCreate.estado = enterpriseResponse.estado
    enterpriseCreate.direccion = enterpriseResponse.direccion
    enterpriseCreate.ubigeo = enterpriseResponse.ubigeo
    enterpriseCreate.departamento = enterpriseResponse.departamento
    enterpriseCreate.provincia = enterpriseResponse.provincia
    enterpriseCreate.distrito = enterpriseResponse.distrito

    this.enterpriseRepository.createEnterprise(enterpriseCreate)
  }
  async getEnterprises() {
    const enterprises = await this.enterpriseRepository.getEnterprises();
    console.log(enterprises);
    return enterprises;
  }
}

export { CreateEnterpriseUseCase }