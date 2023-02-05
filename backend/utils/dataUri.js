import DatauriParser from "datauri/parser.js";
import path from "path";

const getDataUri =(file)=>{
    const parser = new DatauriParser();
    const extname=path.extname(file.originalname).toString(); // it will have the extension of the file;
    return parser.format(extname,file.buffer); // parser.format(takes extension name of the file,and file.buffer)
}

export default getDataUri;

