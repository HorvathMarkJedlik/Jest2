const isPrime = require('../isPrim.js');


test("Ha sztringet adnak meg, akkor hibát kellene dobni", () => {
    expect(()=>isPrime('Szia!')).toThrow('Nem számot adtál meg!')
})

test("3.5-nél hibát kellene kapni", () => {
    expect(()=>isPrime(3.5)).toThrow('Nem egész számot adtál meg!')
})


test("A 1-nek nem kellene prímnek lennie", () =>{
    expect(isPrime(1)).toBe(false)
})

test("A 3-nak prímnek kellene lennie", () =>{
    expect(isPrime(3)).toBe(true)
})

test("A 0-nak nem kellene prímnek lennie", () =>{
    expect(isPrime(0)).toBe(false)
})





//Mi van, ha nem is számot adnak meg
//Mi van ha nem természetes számot adnak bemenetként
//Mi van, ha negatív számot adnak meg
//Mi van, ha nem Prímet adnak meg
//Az 1 az nem prím szám