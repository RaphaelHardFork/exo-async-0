// Importation des packages
const fsPromise = require('fs/promises')
const axios = require('axios')


// Gestion inputs du terminal
if (process.argv.length !== 3) {
  console.log('usage: node my-wget.js yourURL')
  process.exit(1)
} else if (!process.argv[2].startsWith('http://') && !process.argv[2].startsWith('https://')) {
  console.log('yourURL must start with "http(s)://"')
  process.exit(1)
}


// Fonction
const wget = async () => {
  try {
    const response = await axios.get(process.argv[2])
    fsPromise.writeFile('index.html', response.data)
    console.log(`Fichier enregistré dans "index.html"\nTaille du fichier : ${response.headers['content-length']}`)
  } catch (e) {
    console.log(e.message)
  }
}

wget()