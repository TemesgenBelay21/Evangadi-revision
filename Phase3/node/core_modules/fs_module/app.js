
import fs from "fs"

fs.readFile('./lorem.txt','utf-8',(err, data) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(data);
})
