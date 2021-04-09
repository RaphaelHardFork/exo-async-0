const { readFile, writeFile } = require('fs/promises')

const upperCase = async () => {
  try {
    let txt1 = await readFile('hello.txt', 'utf-8')
    txt1 = await txt1.toUpperCase()
    writeFile('hello.txt', txt1)
  } catch (e) {
    console.log(e.message)
  }
}

upperCase()