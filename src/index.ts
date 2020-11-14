//node file system
import {SoccerReader} from "./soccerReader";
import {CsvFile} from './csvFile'
import {ConsoleReports} from "./reportTargets/ConsoleReports";
import {WinsAnalysis} from "./analysers/WinsAnalysis";
import {Summary} from "./Summary";
import {HtmlReports} from "./HtmlReports";


// const fileReader = new MatchReader('football.csv');
// fileReader.read();
// console.log(fileReader.data[0])

const csv = new CsvFile('football.csv');
const soccerReader = new SoccerReader(csv);
soccerReader.load()

const summary= new Summary(
    new WinsAnalysis('Man United'),
    new HtmlReports()
)

summary.buildAndPrintReport(soccerReader.matches)



