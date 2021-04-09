const fsPromises = require('fs/promises')

// Une fonction async doit être ajoutée pour utiliser await
const correctMe = async () => {
  try {
    let txt1 = await fsPromises.readFile('hello.txt', 'utf-8')
    console.log(txt1)
  } catch (e) {
    console.log(e.message)
  }
}

// La fonction doit être ensuite appelée
correctMe()