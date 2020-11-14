import fs from "fs";
// as is a type assertion

export class CsvFile{
    data: string[][] = [];
    constructor(public filename: string) {};
    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',')
            })

    }
}


// Composition vs Inheritance