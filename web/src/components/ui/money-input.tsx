import { LoanSimulationFormType } from '@/types/loan'
import { useReducer } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormMessage } from './form' // Shadcn UI import
import { Input } from './input' // Shandcn UI Input

type TextInputProps = {
  form: UseFormReturn<LoanSimulationFormType>
  name: 'cpf' | 'uf' | 'dateBirth' | 'value' | 'portion'
  placeholder: string
}

// Brazilian currency config
const moneyFormatter = Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  currencyDisplay: 'symbol',
  currencySign: 'standard',
  style: 'currency',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export default function MoneyInput(props: TextInputProps) {
  const initialValue = props.form.getValues()[props.name]
    ? moneyFormatter.format(Number(props.form.getValues()[props.name]))
    : ''

  const [value, setValue] = useReducer((_: string, next: string): string => {
    const digits = next.replace(/\D/g, '')
    return moneyFormatter.format(Number(digits) / 100)
  }, initialValue)

  function handleChange(
    realChangeFn: (...event: unknown[]) => void,
    formattedValue: string,
  ) {
    const digits = formattedValue.replace(/\D/g, '')
    const realValue = Number(digits) / 100
    realChangeFn(realValue)
  }

  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field }) => {
        field.value = value
        const _change = field.onChange

        return (
          <FormItem>
            <FormControl>
              <Input
                placeholder={props.placeholder}
                type="text"
                {...field}
                onChange={(ev) => {
                  setValue(ev.target.value)
                  handleChange(_change, ev.target.value)
                }}
                value={value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
