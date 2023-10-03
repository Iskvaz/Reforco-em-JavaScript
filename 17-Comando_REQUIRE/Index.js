// yarn add console-read-write

const io = require('console-read-write')
const UserService = require('./services/UserService')

const main = async () => {
    let email,password
    while (true) {
        console.log('\n======================================')
        console.log('Choice ...')
        console.log('0 Exit')
        console.log('1 Add User')
        console.log('2 list User')

        const choice = await io.ask('\nType here: ')

        switch (choice){
            case '0':
                console.log('\n======================================')
                console.log('\nLeft the App\n')
                process.exit(0)
            case '1':
                email = await UserService.email()
                password = await UserService.password()
                break;
            case '2':
                await UserService.printEmail(email)
                await UserService.printpassword(password)                 
                break;
           
            default:
                console.log('Type 0, 1 or 2')
        }
    }

}
main()