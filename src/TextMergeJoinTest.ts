import {assert} from 'chai';
import {TextMergeJoin} from "./TextMergeJoin";
import IPDFTextWord = TextMergeJoin.IPDFTextWord;

describe("TextMergeJoin", function() {

    it("basic", () => {

        assert.deepEqual(TextMergeJoin.doMergeWords(MERGE_DATA), [
            {
                "pageNum": 1,
                "x": 122.52,
                "y": 124.44000000000005,
                "height": 14.3462,
                "width": 55.7493332,
                "str": "Bigtable:"
            },
            {
                "pageNum": 1,
                "x": 182.7095,
                "y": 124.44000000000005,
                "height": 14.3462,
                "width": 83.8382788,
                "str": "A Distributed"
            },
            {
                "pageNum": 1,
                "x": 270.0279,
                "y": 124.44000000000005,
                "height": 14.3462,
                "width": 46.98380499999999,
                "str": "Storage"
            },
            {
                "pageNum": 1,
                "x": 320.6118,
                "y": 124.44000000000005,
                "height": 14.3462,
                "width": 43.885025799999994,
                "str": "System"
            },
            {
                "pageNum": 1,
                "x": 367.9769,
                "y": 124.44000000000005,
                "height": 14.3462,
                "width": 17.9744528,
                "str": "for"
            }
        ]);


    });
})


const MERGE_DATA: ReadonlyArray<IPDFTextWord> = [
    {
        pageNum: 1,
        x: 122.52,
        y: 124.44000000000005,
        str: 'Bigtable:',
        width: 55.7493332,
        height: 14.3462,
    },
    {
        pageNum: 1,
        x: 182.7095,
        y: 124.44000000000005,
        str: 'A Distrib',
        width: 56.853076599999994,
        height: 14.3462,
    },
    {
        pageNum: 1,
        x: 239.3227,
        y: 124.44000000000005,
        str: 'uted',
        width: 26.9852022,
        height: 14.3462,
    },
    {
        pageNum: 1,
        x: 270.0279,
        y: 124.44000000000005,
        str: 'Storage',
        width: 46.98380499999999,
        height: 14.3462,
    },
    {
        pageNum: 1,
        x: 320.6118,
        y: 124.44000000000005,
        str: 'System',
        width: 43.885025799999994,
        height: 14.3462,
    },
    {
        pageNum: 1,
        x: 367.9769,
        y: 124.44000000000005,
        str: 'for',
        width: 17.9744528,
        height: 14.3462,
    },

];
