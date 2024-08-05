import { formatCurrency } from '@/lib/utils'

interface SimulationInfoCardsProps {
  loanValue: number
  feePercentage: number
  loanPortion: number
  loanMonths: number
  totalFee: number
  totalLoan: number
}

export function SimulationInfoCards({
  feePercentage,
  loanMonths,
  loanPortion,
  loanValue,
  totalFee,
  totalLoan,
}: SimulationInfoCardsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 grid-flow-row">
      <div className="border bg-background rounded-md p-4">
        <span className="block text-xs font-bold text-muted-foreground">
          VALOR REQUERIDO
        </span>
        <strong className="text-xl font-bold">
          {formatCurrency(loanValue)}
        </strong>
      </div>
      <div className="border bg-background rounded-md p-4">
        <span className="block text-xs font-bold text-muted-foreground">
          TAXA DE JUROS
        </span>
        <strong className="text-xl font-bold">{feePercentage}% AO MÊS</strong>
      </div>
      <div className="border bg-background rounded-md p-4">
        <span className="block text-xs font-bold text-muted-foreground">
          VALOR DAS PARCELAS
        </span>
        <strong className="text-xl font-bold">
          {formatCurrency(loanPortion)}
        </strong>
      </div>
      <div className="border bg-background rounded-md p-4">
        <span className="block text-xs font-bold text-muted-foreground">
          TOTAL DE MESES PARA QUITAR
        </span>
        <strong className="text-xl font-bold">{loanMonths} MESES</strong>
      </div>
      <div className="border bg-background rounded-md p-4">
        <span className="block text-xs font-bold text-muted-foreground">
          TOTAL DE JUROS
        </span>
        <strong className="text-xl font-bold">
          {formatCurrency(totalFee)}
        </strong>
      </div>
      <div className="border bg-background rounded-md p-4">
        <span className="block text-xs font-bold text-muted-foreground">
          TOTAL A PAGAR
        </span>
        <strong className="text-xl font-bold">
          {formatCurrency(totalLoan)}
        </strong>
      </div>
    </div>
  )
}
