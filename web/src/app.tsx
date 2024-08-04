import { ArrowRight } from '@phosphor-icons/react'
import { LoanForm } from './components/loan-form'
import PortionTable from './components/portion-table'
import { Button } from './components/ui/button'

export function App() {
  return (
    <div className="max-w-7xl px-6 py-8 mx-auto">
      <h1 className="text-5xl text-muted-foreground py-12 text-center">
        Simule e solicite seu empréstimo
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <LoanForm />
        </div>
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-md bg-muted/40 shadow-box px-4 py-8 space-y-6">
            <p className="font-bold text-center">
              Veja a simulação para o seu empréstimo antes de efetivar
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 grid-flow-row">
              <div className="border bg-background rounded-md p-4">
                <span className="block text-xs font-bold text-muted-foreground">
                  VALOR REQUERIDO
                </span>
                <strong className="text-xl font-bold">R$ 60.000,00</strong>
              </div>
              <div className="border bg-background rounded-md p-4">
                <span className="block text-xs font-bold text-muted-foreground">
                  TAXA DE JUROS
                </span>
                <strong className="text-xl font-bold">1% AO MÊS</strong>
              </div>
              <div className="border bg-background rounded-md p-4">
                <span className="block text-xs font-bold text-muted-foreground">
                  VALOR DAS PARCELAS
                </span>
                <strong className="text-xl font-bold">R$ 15.000,00</strong>
              </div>
              <div className="border bg-background rounded-md p-4">
                <span className="block text-xs font-bold text-muted-foreground">
                  TOTAL DE MESES PARA QUITAR
                </span>
                <strong className="text-xl font-bold">5 MESES</strong>
              </div>
              <div className="border bg-background rounded-md p-4">
                <span className="block text-xs font-bold text-muted-foreground">
                  TOTAL DE JUROS
                </span>
                <strong className="text-xl font-bold">R$ 1.545,53</strong>
              </div>
              <div className="border bg-background rounded-md p-4">
                <span className="block text-xs font-bold text-muted-foreground">
                  TOTAL A PAGAR
                </span>
                <strong className="text-xl font-bold">R$ 61.545,53</strong>
              </div>
            </div>
            <div className="space-y-8">
              <PortionTable />
              <Button className="flex items-center gap-2 justify-center w-full">
                EFETIVAR O EMPRÉSTIMO
                <ArrowRight weight="bold" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
