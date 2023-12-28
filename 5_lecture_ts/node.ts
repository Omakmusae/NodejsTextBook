import fs from 'fs/promises';

//(path: PathOrFileDescriptor, callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void,)
fs.readFile('package.json')
    .then((result) => { //result Buffer 타입임
        console.log(result);
    })
    .catch(console.error);


