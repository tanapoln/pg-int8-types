import { parseInt8Fallback } from "./index"

describe('datatype', () => {
    describe('parseInt8Fallback', () => {
        it('should parse int4', () => {
            expect(parseInt8Fallback('1')).toBe(1)
            expect(parseInt8Fallback('1')).not.toBe(1n)
            expect(parseInt8Fallback('1')).not.toBe('1')

            expect(parseInt8Fallback(1)).toBe(1)

            expect(parseInt8Fallback(1n)).toBe(1)
        })

        it('should parse max safe int', () => {
            expect(9007199254740991).toBe(Number.MAX_SAFE_INTEGER)
            expect(parseInt8Fallback('9007199254740991')).toBe(9007199254740991)
            expect(parseInt8Fallback(9007199254740991)).toBe(9007199254740991)
        })

        it('should parse int8', () => {
            expect(parseInt8Fallback('9007199254740992')).toBe(9007199254740992n)
            expect(parseInt8Fallback(9007199254740992n)).toBe(9007199254740992n)
        })

        it('should parse bigger int8', () => {
            expect(parseInt8Fallback('10007199254740993')).toBe(10007199254740993n)
            expect(parseInt8Fallback(10007199254740993n)).toBe(10007199254740993n)
        })
    })
})
