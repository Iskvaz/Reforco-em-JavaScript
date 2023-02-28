//aULA 15.
const io =require('console-read-write')

const getNum = async () => {
    return Number(await io.ask ('Digite um numero inteiro para calcular fatorial'))
}

const main = async () => {
    let num
    while (
        num = await getNum(),
        num >= 0
    ){
        let fat = 1
        for (let i = 1; i <= num; i++) {
                fat  = fat * i
        
        }
        io.write(`Fatorial de ${num}: ${fat}`)

    }

}


main()
