/**
 * Implement a class named ring buffer with fixed capacity such that
 *
 * constructor: takes the capacity for the ring buffer
 *
 * push: adds a value to the ring buffer.
 * pop: removes the last value from the ring buffer or undefined if it's empty.
 * peek: returns the current value of the most recent value added or undefined if none have been added
 *
 * If we have too many values (exceeding capacity) the oldest values are lost.
 *
 * The ordering of the push operations must be kept.
 */
export class RingBuffer<T> {

    constructor(capacity: number) {
    }

    public push(value: T) {

    }

    public peek(): T | undefined {
        // not implemented
        return undefined;
    }

    public pop(): T | undefined {
        // not implemented
        return undefined;
    }

}
