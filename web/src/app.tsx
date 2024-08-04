import { ArrowRight } from '@phosphor-icons/react'
import { useState } from 'react'
import { LoanForm } from './components/loan-form'
import PortionTable from './components/portion-table'
import { Button } from './components/ui/button'

interface LoanSimulationFormType {
  cpf: string
  uf: number
  dateBirth: string
  value: number
  portion: number
}

interface LoanValuesType {
  value: number
  fee: number
  adjustedValue: number
  portion: number
}

export function App() {
  const [loanSimulation, setLoanSimulation] = useState<LoanValuesType[]>([])
  const [loanSimulationInformation, setLoanSimulationInformation] =
    useState<LoanSimulationFormType>()
  const [simulationFormSubimitted, setSimulationFormSubimitted] = useState(true)
  const [totalFee, setTotalFee] = useState(0)

  function handleLoanSimulationInformation(data: LoanSimulationFormType) {
    setLoanSimulationInformation(data)

    const newLoan = []
    for (let i = data.value; i >= 0; i -= data.portion) {
      const adjustedValue = i * (1 + data.uf / 100)

      newLoan.push({
        value: i,
        fee: i * 0.01,
        adjustedValue,
        portion: i > data.portion ? data.portion : adjustedValue,
      })
      i = adjustedValue
    }
    setLoanSimulation(newLoan)

    newLoan.forEach((portion) => {
      setTotalFee((prev) => (prev += portion.fee))
    })

    setSimulationFormSubimitted(true)
  }

  return (
    <div className="max-w-7xl px-6 py-8 mx-auto">
      <h1 className="text-5xl text-muted-foreground py-12 text-center">
        Simule e solicite seu empréstimo
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <LoanForm
            handleLoanSimulationInformation={handleLoanSimulationInformation}
          />
        </div>
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-md bg-muted/40 shadow-box px-4 py-8 space-y-6">
            {simulationFormSubimitted && loanSimulationInformation ? (
              <>
                <p className="font-bold text-center">
                  Veja a simulação para o seu empréstimo antes de efetivar
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 grid-flow-row">
                  <div className="border bg-background rounded-md p-4">
                    <span className="block text-xs font-bold text-muted-foreground">
                      VALOR REQUERIDO
                    </span>
                    <strong className="text-xl font-bold">
                      {loanSimulationInformation.value}
                    </strong>
                  </div>
                  <div className="border bg-background rounded-md p-4">
                    <span className="block text-xs font-bold text-muted-foreground">
                      TAXA DE JUROS
                    </span>
                    <strong className="text-xl font-bold">
                      {loanSimulationInformation.uf}% AO MÊS
                    </strong>
                  </div>
                  <div className="border bg-background rounded-md p-4">
                    <span className="block text-xs font-bold text-muted-foreground">
                      VALOR DAS PARCELAS
                    </span>
                    <strong className="text-xl font-bold">
                      {loanSimulationInformation.portion}
                    </strong>
                  </div>
                  <div className="border bg-background rounded-md p-4">
                    <span className="block text-xs font-bold text-muted-foreground">
                      TOTAL DE MESES PARA QUITAR
                    </span>
                    <strong className="text-xl font-bold">
                      {loanSimulation.length}
                    </strong>
                  </div>
                  <div className="border bg-background rounded-md p-4">
                    <span className="block text-xs font-bold text-muted-foreground">
                      TOTAL DE JUROS
                    </span>
                    <strong className="text-xl font-bold">
                      {totalFee.toFixed(2)}
                    </strong>
                  </div>
                  <div className="border bg-background rounded-md p-4">
                    <span className="block text-xs font-bold text-muted-foreground">
                      TOTAL A PAGAR
                    </span>
                    <strong className="text-xl font-bold">
                      {(loanSimulationInformation.value + totalFee).toFixed(2)}
                    </strong>
                  </div>
                </div>
                <div className="space-y-8">
                  <PortionTable months={loanSimulation} />
                  <Button className="flex items-center gap-2 justify-center w-full">
                    EFETIVAR O EMPRÉSTIMO
                    <ArrowRight weight="bold" size={18} />
                  </Button>
                </div>
              </>
            ) : (
              <p className="text-center font-bold text-muted-foreground">
                Nenhuma informação providenciada, preencha o formulário ao lado
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
