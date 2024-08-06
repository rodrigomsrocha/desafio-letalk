export interface LoanSimulationFormType {
  cpf: string
  uf: string
  dateBirth: string
  value: number
  portion: number
}

export interface LoanValuesType {
  value: number
  fee: number
  adjustedValue: number
  portion: number
}
