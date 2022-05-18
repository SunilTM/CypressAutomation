describe('Unit test our math functions', () => {
    context('math', () => {
        it('can add numbers', () => {
            expect(add(1, 5)).to.eq(6)
        })

        it('can subtract numbers', () => {
            expect(subtract(5, 18)).to.eq(-13)
        })

        specify('can divide numbers', () => {
            expect(divide(45, 9)).to.eq(5)
        })

        specify('can multiply numbers', () => {
            expect(multiply(9, 5)).to.eq(45)
        })
    })
})