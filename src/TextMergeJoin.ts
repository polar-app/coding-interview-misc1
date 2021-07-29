export namespace TextMergeJoin {

    export interface IPDFTextWord {
        readonly pageNum: number;
        readonly x: number;
        readonly y: number;
        readonly width: number;
        readonly height: number;
        readonly str: string;
    }

    export function doMergeWords(data: ReadonlyArray<IPDFTextWord>): ReadonlyArray<IPDFTextWord> {
        return [];
    }

}
