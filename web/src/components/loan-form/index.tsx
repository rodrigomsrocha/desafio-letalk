import { FormEvent } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

interface LoanSimulationFormType {
  cpf: string
  uf: number
  dateBirth: string
  value: number
  portion: number
}

interface LoanFormProps {
  handleLoanSimulationInformation: (data: LoanSimulationFormType) => void
}

export function LoanForm({ handleLoanSimulationInformation }: LoanFormProps) {
  function onSimulationSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const loanSimulationInformation = {
      cpf: data.get('cpf') as string,
      uf: Number(data.get('uf')),
      dateBirth: data.get('date-birth') as string,
      value: Number(data.get('value')),
      portion: Number(data.get('portion')),
    }

    handleLoanSimulationInformation(loanSimulationInformation)

    event.currentTarget.reset()
  }

  return (
    <form
      onSubmit={onSimulationSubmit}
      className="space-y-7 px-4 py-8 border border-1 rounded-md shadow-box"
    >
      <p className="font-bold text-center">
        Preencha o formulário abaixo para simular
      </p>
      <div className="flex flex-col gap-4">
        <Input name="cpf" type="text" placeholder="CPF" />
        <Select name="uf">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="UF" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Minas Gerais</SelectItem>
            <SelectItem value="0.8">São Paulo</SelectItem>
            <SelectItem value="0.9">Rio de Janeiro</SelectItem>
            <SelectItem value="1.1">Espirito Santo</SelectItem>
          </SelectContent>
        </Select>
        <Input name="date-birth" type="text" placeholder="DATA DE NASCIMENTO" />
        <Input
          name="value"
          type="text"
          placeholder="QUAL O VALOR DO EMPRÉSTIMO?"
        />
        <Input
          name="portion"
          type="text"
          placeholder="QUAL O VALOR DESEJA PAGAR POR MÊS?"
        />
      </div>
      <Button className="w-full" type="submit">
        SIMULAR
      </Button>
    </form>
  )
}
