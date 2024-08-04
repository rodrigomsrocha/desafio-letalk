// import { cn } from '@/lib/utils'
// import { CalendarIcon } from '@radix-ui/react-icons'
// import { format } from 'date-fns'
// import { Calendar } from '../ui/calendar'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { useState } from 'react'
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
  // const [date, setDate] = useState<Date>()

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
        {/* <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-full justify-start text-left font-normal',
                !date && 'text-muted-foreground',
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, 'PPP') : <span>DATA DE NASCIMENTO</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              captionLayout="dropdown-buttons"
              initialFocus
            />
          </PopoverContent>
        </Popover> */}
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
