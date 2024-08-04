// import { cn } from '@/lib/utils'
// import { CalendarIcon } from '@radix-ui/react-icons'
// import { format } from 'date-fns'
// import { Calendar } from '../ui/calendar'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

export function LoanForm() {
  // const [date, setDate] = useState<Date>()

  return (
    <form className="space-y-7 px-4 py-8 border border-1 rounded-md shadow-box">
      <p className="font-bold text-center">
        Preencha o formulário abaixo para simular
      </p>
      <div className="flex flex-col gap-4">
        <Input type="text" placeholder="CPF" />
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="UF" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mg">Minas Gerais</SelectItem>
            <SelectItem value="sp">São Paulo</SelectItem>
            <SelectItem value="rj">Rio de Janeiro</SelectItem>
            <SelectItem value="es">Espirito Santo</SelectItem>
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
        <Input type="text" placeholder="DATA DE NASCIMENTO" />
        <Input type="text" placeholder="QUAL O VALOR DO EMPRÉSTIMO?" />
        <Input type="text" placeholder="QUAL O VALOR DESEJA PAGAR POR MÊS?" />
      </div>
      <Button className="w-full" type="submit">
        SIMULAR
      </Button>
    </form>
  )
}
