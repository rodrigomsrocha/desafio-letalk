import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatCurrency } from '@/lib/utils'
import { LoanValuesType } from '@/types/loan'
import { addMonths, format, setDate } from 'date-fns'

interface PortionTableProps {
  months: LoanValuesType[]
}

export default function PortionTable({ months }: PortionTableProps) {
  function getMonth(index: number) {
    const date = new Date()
    const currentMonth = addMonths(date, index)
    const finalDate = setDate(currentMonth, 20)
    return format(finalDate, 'dd/MM/yy')
  }

  return (
    <Card className="rounded-md">
      <CardHeader className="px-7">
        <CardTitle>PROJEÇÃO DAS PARCELAS</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="text-nowrap">
            <TableRow>
              <TableHead className="">Saldo devedor</TableHead>
              <TableHead className="">Juros</TableHead>
              <TableHead className="">Saldo devedor ajustado</TableHead>
              <TableHead>Valor da parcela</TableHead>
              <TableHead className="text-right">Vencimento</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-nowrap">
            {months.map((month, index) => {
              return (
                <TableRow key={month.value}>
                  <TableCell>
                    <div className="font-medium">
                      {formatCurrency(month.value)}
                    </div>
                  </TableCell>
                  <TableCell>{formatCurrency(month.fee)}</TableCell>
                  <TableCell>{formatCurrency(month.adjustedValue)}</TableCell>
                  <TableCell>{formatCurrency(month.portion)}</TableCell>
                  <TableCell className="text-right">
                    {getMonth(index)}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}>R$ 0,00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  )
}
