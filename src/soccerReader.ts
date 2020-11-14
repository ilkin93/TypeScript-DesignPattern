import {MatchResult} from "./matchResult";
import {dateStringToDate} from "./utils";
import {MatchData} from "./MatchData";

interface MatchReader{
    read(): void;
    data: string[][]
}

export class SoccerReader {
    matches: MatchData[] = []
    constructor(public reader: MatchReader) {    }
    load():void{
        this.reader.read()
        this.reader.data.map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6]
            ]
        })
    }

}