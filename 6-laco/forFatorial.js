const io =require('console-read-write')

const main = async () => {
    const num = Number(await io.ask ('Digite um numero inteiro para calcular fetorial'))

    //4! -> 4*3*2*1

    let fat = 1
    for (let i = 1; i <= num; i++) {
       fat  = fat * i
    }

    io.write(`Fatorial de ${num}: ${fat}`)
}

main()
