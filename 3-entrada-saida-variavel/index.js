
const io =require('console-read-write')

const main = async ( ) => {
    const num1 = Number(await io.ask('Digite um numero: '))

    const num2 = Number(await io.ask('Digite Outro numero: '))

    io.write(`Numero digitado ${num1}`)
    io.write(`Mais um Numero digitado ${num2}`)

    const result = num1 + num2

    io.write(`Soma ${result}`)

}

main()