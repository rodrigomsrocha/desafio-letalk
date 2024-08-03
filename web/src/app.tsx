import { ArrowRight } from '@phosphor-icons/react'

export function App() {
  return (
    <div className="max-w-5xl px-6 py-8 mx-auto">
      <h1 className="text-5xl font-light text-[#8F99A6] py-12 text-center">
        Simule e solicite seu empréstimo
      </h1>
      <div className="space-y-16">
        <div className="space-y-6">
          <p className="text-xl font-bold text-center">
            Preencha o formulário abaixo para simular
          </p>
          <form className="space-y-7 pt-16 px-8 pb-9 rounded-md bg-white shadow-box">
            <div className="flex flex-col gap-4">
              <input
                className="px-5 py-4 rounded-md border border-1 border-[#d4d4d4] placeholder:text-[#737373]"
                type="text"
                placeholder="CPF"
              />
              <input
                className="px-5 py-4 rounded-md border border-1 border-[#d4d4d4] placeholder:text-[#737373]"
                type="text"
                placeholder="UF"
              />
              <input
                className="px-5 py-4 rounded-md border border-1 border-[#d4d4d4] placeholder:text-[#737373]"
                type="text"
                placeholder="DATA DE NASCIMENTO"
              />
              <input
                className="px-5 py-4 rounded-md border border-1 border-[#d4d4d4] placeholder:text-[#737373]"
                type="text"
                placeholder="QUAL O VALOR DO EMPRÉSTIMO?"
              />
              <input
                className="px-5 py-4 rounded-md border border-1 border-[#d4d4d4] placeholder:text-[#737373]"
                type="text"
                placeholder="QUAL O VALOR DESEJA PAGAR POR MÊS?"
              />
            </div>
            <button
              className="font-bold text-white bg-[#F3A126] h-11 w-full rounded-md shadow-button transition-all hover:opacity-90"
              type="submit"
            >
              SIMULAR
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <p className="text-xl font-bold text-center">
            Veja a simulação para o seu empréstimo antes de efetivar
          </p>
          <div className="bg-white rounded-md shadow-box p-10 space-y-16">
            <div className="grid grid-cols-3 gap-x-4 gap-y-14">
              <div>
                <span className="block text-sm font-bold text-[#737373]">
                  VALOR REQUERIDO
                </span>
                <strong className="text-xl font-bold text-[#333333]">
                  R$ 60.000,00
                </strong>
              </div>
              <div>
                <span className="block text-sm font-bold text-[#737373]">
                  TAXA DE JUROS
                </span>
                <strong className="text-xl font-bold text-[#333333]">
                  R$ 60.000,00
                </strong>
              </div>
              <div>
                <span className="block text-sm font-bold text-[#737373]">
                  VALOR QUE DESEJA PAGAR POR MÊS
                </span>
                <strong className="text-xl font-bold text-[#333333]">
                  R$ 60.000,00
                </strong>
              </div>
              <div>
                <span className="block text-sm font-bold text-[#737373]">
                  TOTAL DE MESES PARA QUITAR
                </span>
                <strong className="text-xl font-bold text-[#333333]">
                  R$ 60.000,00
                </strong>
              </div>
              <div>
                <span className="block text-sm font-bold text-[#737373]">
                  TOTAL DE JUROS
                </span>
                <strong className="text-xl font-bold text-[#333333]">
                  R$ 60.000,00
                </strong>
              </div>
              <div>
                <span className="block text-sm font-bold text-[#737373]">
                  TOTAL A PAGAR
                </span>
                <strong className="text-xl font-bold text-[#333333]">
                  R$ 60.000,00
                </strong>
              </div>
            </div>
            <div>
              <span className="block text-sm font-bold text-[#737373]">
                PROJEÇÃO DAS PARCELAS
              </span>
              <table className="w-full border-collapse mt-4">
                <thead>
                  <tr>
                    <th className="text-left font-bold text-[#333333] py-4 border-b border-[#c4c4c4]">
                      SALDO DEVEDOR
                    </th>
                    <th className="text-left font-bold text-[#333333] py-4 border-b border-[#c4c4c4] w-1/6">
                      JUROS
                    </th>
                    <th className="text-left font-bold text-[#333333] py-4 border-b border-[#c4c4c4]">
                      SALDO DEVEDOR AJUSTADO
                    </th>
                    <th className="text-left font-bold text-[#333333] py-4 border-b border-[#c4c4c4]">
                      VALOR DA PARCELA
                    </th>
                    <th className="text-left font-bold text-[#333333] py-4 border-b border-[#c4c4c4]">
                      VENCIMENTO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-[#c4c4c4] text-left py-4 text-[#333333]">
                      R$ 60.000,00
                    </td>
                    <td className="border-b border-[#c4c4c4] text-left py-4 text-[#333333]">
                      R$ 600,00
                    </td>
                    <td className="border-b border-[#c4c4c4] text-left py-4 text-[#333333]">
                      R$ 60.600,00
                    </td>
                    <td className="border-b border-[#c4c4c4] text-left py-4 text-[#333333]">
                      R$ 15.000,00
                    </td>
                    <td className="border-b border-[#c4c4c4] text-left py-4 text-[#333333]">
                      20/09/21
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan={5}
                      className="border-b border-[#c4c4c4] text-left py-4 text-[#333333]"
                    >
                      R$ 0,00
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="mt-14 font-bold text-[#f2f2f2] bg-[#21ae1e] shadow-button flex items-center justify-center gap-2 h-11 px-2 rounded-md max-w-xl w-full mx-auto transition-all hover:opacity-90">
                EFETIVAR O EMPRÉSTIMO
                <ArrowRight weight="bold" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
