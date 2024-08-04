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

export default function PortionTable() {
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
            <TableRow>
              <TableCell>
                <div className="font-medium">R$ 60.000,00</div>
              </TableCell>
              <TableCell>R$ 600,00</TableCell>
              <TableCell>R$ 60.600,00</TableCell>
              <TableCell>R$ 15.000,00</TableCell>
              <TableCell className="text-right">20/09/21</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">R$ 45.600,00</div>
              </TableCell>
              <TableCell>R$ 456,00</TableCell>
              <TableCell>R$ 46.056,00</TableCell>
              <TableCell>R$ 15.000,00</TableCell>
              <TableCell className="text-right">20/10/21</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">R$ 31.056,00</div>
              </TableCell>
              <TableCell>R$ 310,56</TableCell>
              <TableCell>R$ 31.366,56</TableCell>
              <TableCell>R$ 15.000,00</TableCell>
              <TableCell className="text-right">20/11/21</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">R$ 16.366,56</div>
              </TableCell>
              <TableCell>R$ 163,67</TableCell>
              <TableCell>R$ 16530,23</TableCell>
              <TableCell>R$ 15.000,00</TableCell>
              <TableCell className="text-right">20/12/21</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">R$ 1.530,23</div>
              </TableCell>
              <TableCell>R$ 15,30</TableCell>
              <TableCell>R$ 1545,53</TableCell>
              <TableCell>R$ 1545,53</TableCell>
              <TableCell className="text-right">20/01/22</TableCell>
            </TableRow>
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
