import fs from 'fs/promises'


async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath,"utf-8");
        console.log(data) 
    }catch(error) {
        console.error(error.message)
    }
}

readFile('greetings.txt')