import { Parser } from 'json2csv';

export const toJson = (raw: Array<Object>) => {
  try {
    const parser = new Parser();
    return parser.parse(raw);
  }catch(e){
    console.log(e);
  }
}






