
import os from "os"
console.log(os)

const freememory = os.freemem();

console.log(freememory)
const platform = os.platform();
console.log(platform)

console.log(`the cpu archtecture for this ps is ${os.arch()}`)
console.log(`the version for this windows os os ${os.version()}`)