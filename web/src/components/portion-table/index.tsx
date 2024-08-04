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

interface LoanValuesType {
  value: number
  fee: number
  adjustedValue: number
  portion: number
}

interface PortionTableProps {
  months: LoanValuesType[]
}

export default function PortionTable({ months }: PortionTableProps) {
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
            {months.map((month) => {
              return (
                <TableRow key={month.value}>
                  <TableCell>
                    <div className="font-medium">{month.value.toFixed(2)}</div>
                  </TableCell>
                  <TableCell>{month.portion.toFixed(2)}</TableCell>
                  <TableCell>{month.adjustedValue.toFixed(2)}</TableCell>
                  <TableCell>{month.portion.toFixed(2)}</TableCell>
                  <TableCell className="text-right">20/09/21</TableCell>
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
