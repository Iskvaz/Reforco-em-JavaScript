const io =require('console-read-write')

// para este tpo de calculo vc parte do nada ou seja = 0
//fibonacci 0 indice 1
//0 1 2 3 4 5 6
//0 1 1  2 3 5 8 o fibonacci é a soma do numero solicitado com o numero anterior.

const main = async () => {
    const num = Number (await io.ask ('Digite um numero inteiro para calcular fibonacci:  '))

    let soma = 0
    let anterior = 0
    let proximo = 1

    for ( let i = 0; i < num; i ++) {
        soma = anterior + proximo
        anterior = proximo
        proximo = soma
    }

    io.write(`Fibonacci de ${num} : ${anterior}`)
}


main()
