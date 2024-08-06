import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
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
  uf: string
  dateBirth: string
  value: number
  portion: number
}

interface LoanFormProps {
  handleLoanSimulationInformation: (data: LoanSimulationFormType) => void
}

const formSchema = z
  .object({
    cpf: z
      .string({ message: 'CPF requerido.' })
      .min(11, 'CPF Inválido')
      .max(11, 'CPF Inválido'),
    uf: z.string({ message: 'UF requerido.' }),
    dateBirth: z.string({ message: 'Data de nascimento requerida.' }).date(),
    value: z.coerce
      .number({ message: 'Valor requerido.' })
      .positive()
      .min(50000, 'Empréstimo mínimo de R$ 50.000.'),
    portion: z.coerce
      .number({ message: 'Valor da parcela requerida.' })
      .positive(),
  })
  // portion needs to be at least 1% of the value the user inserts
  .refine((data) => data.portion >= data.value * 0.01, {
    message: 'A parcela deve ser no mínimo 1% do valor do empréstimo',
    path: ['portion'],
  })

export function LoanForm({ handleLoanSimulationInformation }: LoanFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSimulationSubmit(values: z.infer<typeof formSchema>) {
    const loanSimulationInformation = {
      ...values,
    }

    handleLoanSimulationInformation(loanSimulationInformation)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSimulationSubmit)}
        className="space-y-7 px-4 py-8 border border-1 rounded-md shadow-box"
      >
        <p className="font-bold text-center">
          Preencha o formulário abaixo para simular
        </p>
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="CPF" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="uf"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    name="uf"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="UF" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MG">Minas Gerais</SelectItem>
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      <SelectItem value="ES">Espirito Santo</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateBirth"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="date"
                    placeholder="DATA DE NASCIMENTO"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    min={0}
                    type="number"
                    placeholder="QUAL O VALOR DO EMPRÉSTIMO?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="portion"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    min={0}
                    type="number"
                    placeholder="QUAL O VALOR DESEJA PAGAR POR MÊS?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full" type="submit">
          SIMULAR
        </Button>
      </form>
    </Form>
  )
}
