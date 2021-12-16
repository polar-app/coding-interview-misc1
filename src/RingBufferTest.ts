import {assert} from 'chai';
import {RingBuffer} from "./RingBuffer";

describe("RingBuffer", function() {

    it("basic", function () {

        const rb = new RingBuffer<number>(3);

        assert.isUndefined(rb.peek());

        rb.push(1);
        assert.equal(rb.peek(), 1);

        assert.equal(rb.pop(), 1);

        assert.isUndefined(rb.peek());

    });

    it("lost data", function() {

        const rb = new RingBuffer<number>(3);
        rb.push(1);
        rb.push(2);
        rb.push(3);
        rb.push(4);

        assert.equal(rb.pop(), 4);
        assert.equal(rb.pop(), 3);
        assert.equal(rb.pop(), 2);
        assert.isUndefined(rb.pop());

    });

});
