import fs from "fs";
// as is a type assertion

export abstract class CsvFileReader<GenericType>{
    data: GenericType[] = [];
    constructor(public filename: string) {};
    abstract mapRow(row: string[]): GenericType;

    read(): void {
       this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',')
            })
           .map(this.mapRow)
    }


}

// abstract class is never going to create an instance of object