import {assert} from 'chai';
import { DeepCopy } from './DeepCopy';

describe("DeepCopy", function() {

    // TODO: make sure all of the following tests pass with your new code.

    it("basic tests", function() {

        const dict: any = {
            "hello": "world"
        };

        const copy = DeepCopy.deepCopy(dict);

        assert.deepEqual(dict, copy);

    });

    it("basic integrity", function() {

        const dict: any = {
            "hello": "world"
        };

        const copy = DeepCopy.deepCopy(dict);

        dict['foo'] = 'bar';

        assert.deepEqual(copy, {
            "hello": "world"
        });

    });

    it("inner integrity", function() {

        const dict: any = {
            "hello": "world",
            "inner": {
                "foo": "bar"
            }
        };

        const copy = DeepCopy.deepCopy(dict);

        dict['inner']['foo'] = 'cat';

        assert.deepEqual(copy, {
            "hello": "world",
            "inner": {
                "foo": "bar"
            }
        });

    });


    it("inner integrity with array", function() {

        const dict: any = {
            "hello": "world",
            "inner": [
                'bar'
            ]
        };

        const copy = DeepCopy.deepCopy(dict);

        dict['inner'][0] = 'cat';

        assert.deepEqual(copy, {
            "hello": "world",
            "inner": [
                'bar'
            ]
        });

    });

    it("deep copy of primitives", function() {

        assert.equal(DeepCopy.deepCopy(5), 5);
        assert.equal(DeepCopy.deepCopy("hello"), "hello");

    });

})
