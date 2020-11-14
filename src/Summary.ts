import {MatchData} from "./MatchData";
import {WinsAnalysis} from "./analysers/WinsAnalysis";
import {ConsoleReports} from "./reportTargets/ConsoleReports";

export interface Analyzer {
    run(matches: MatchData[]): string
}
export interface OutputTarget {
    print(report: string): void
}
export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
    buildAndPrintReport(matches: MatchData[]): void {
       const report = this.analyzer.run(matches)
        this.outputTarget.print(report)
    }
}
new Summary(new WinsAnalysis('Man United'), new ConsoleReports());