import { ArrowRight, CircleNotch } from '@phosphor-icons/react'
import { useState } from 'react'
import { LoanForm } from './components/loan-form'
import { ModeToggle } from './components/mode-toggle'
import PortionTable from './components/portion-table'
import { SimulationInfoCards } from './components/simulation-info-cards'
import { Button } from './components/ui/button'
import { useToast } from './components/ui/use-toast'
import { api } from './lib/api'
import { LoanSimulationFormType, LoanValuesType } from './types/loan'

export function App() {
  const { toast } = useToast()

  const [loanSimulation, setLoanSimulation] = useState<LoanValuesType[]>([])
  const [loanSimulationInformation, setLoanSimulationInformation] =
    useState<LoanSimulationFormType>()
  const [feePercentage, setFeePercentage] = useState(0)
  const [totalFee, setTotalFee] = useState(0)

  const [loading, setLoading] = useState(false)

  function handleLoanSimulationInformation(data: LoanSimulationFormType) {
    setTotalFee(0)
    setLoanSimulationInformation(data)
    let fee = 0

    switch (data.uf) {
      case 'MG':
        fee = 1
        break
      case 'SP':
        fee = 0.8
        break
      case 'RJ':
        fee = 0.9
        break
      case 'ES':
        fee = 1.11
        break

      default:
        break
    }
    setFeePercentage(fee)

    const newLoan = []
    for (let i = data.value; i >= 0; i -= data.portion) {
      const adjustedValue = i * (1 + fee / 100)

      newLoan.push({
        value: i,
        fee: i * (fee / 100),
        adjustedValue,
        portion: i > data.portion ? data.portion : adjustedValue,
      })
      i = adjustedValue
    }
    setLoanSimulation(newLoan)

    newLoan.forEach((portion) => {
      setTotalFee((prev) => (prev += portion.fee))
    })
  }

  async function handleLoanImplementation() {
    try {
      setLoading(true)
      if (!loanSimulationInformation) {
        toast({
          title: 'Algo deu errado!!!',
          description: 'Preencha o formulário para simular o empréstimo',
          variant: 'destructive',
        })
        return
      }

      await api.post('/loans', {
        cpf: loanSimulationInformation.cpf,
        uf: loanSimulationInformation.uf,
        dataNascimento: new Date(loanSimulationInformation.dateBirth),
        valorEmprestimo: loanSimulationInformation.value,
        valorParcela: loanSimulationInformation.portion,
        juros: feePercentage,
        qtdParcelas: loanSimulation.length,
      })
      setLoading(false)

      toast({
        title: 'Sucesso!!!',
        description: 'Empréstimo efetivado com sucesso',
      })
    } catch (error) {
      setLoading(false)
      toast({
        title: 'Algo deu errado!!!',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="max-w-7xl px-6 py-8 mx-auto">
      <header className="flex items-end justify-between py-12 gap-4">
        <h1 className="text-2xl md:text-4xl text-muted-foreground">
          Simule e solicite seu empréstimo
        </h1>
        <ModeToggle />
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <LoanForm
            handleLoanSimulationInformation={handleLoanSimulationInformation}
          />
        </div>
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-md bg-muted/70 shadow-box px-4 py-8 space-y-6">
            {loanSimulationInformation ? (
              <>
                <p className="font-bold text-center">
                  Veja a simulação para o seu empréstimo antes de efetivar
                </p>
                <SimulationInfoCards
                  feePercentage={feePercentage}
                  loanMonths={loanSimulation.length}
                  loanPortion={loanSimulationInformation.portion}
                  loanValue={loanSimulationInformation.value}
                  totalFee={totalFee}
                  totalLoan={loanSimulationInformation.value + totalFee}
                />
                <div className="space-y-8">
                  <PortionTable months={loanSimulation} />
                  <Button
                    disabled={loading}
                    onClick={handleLoanImplementation}
                    className="flex items-center gap-2 justify-center w-full"
                  >
                    {loading ? (
                      <>
                        ISSO PODE DEMORAR UM POUCO
                        <CircleNotch className="animate-spin" size={18} />
                      </>
                    ) : (
                      <>
                        EFETIVAR O EMPRÉSTIMO
                        <ArrowRight size={18} />
                      </>
                    )}
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
