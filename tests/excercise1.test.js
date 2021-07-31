const lib = require("../exercise1");

describe('test cases of fizzbuzz', () => {

    let args=[null,"","awd",undefined]

    args.forEach(a=>{
        it(`if input is a ${a}, then throw a error`,()=>{
            expect(()=>{
                lib.fizzBuzz(a)
            }).toThrowError()
        })

    })


    it("if number is divisibe by 3 and 5",()=>{
        const result = lib.fizzBuzz(15)
        expect(result).toBe("FizzBuzz")
    })
    
    it("if number is divisible by 3",()=>{
        const result = lib.fizzBuzz(3);
        expect(result).toBe("Fizz")
    })

    it("if number is divisible by 5",()=>{
        const result = lib.fizzBuzz(5)
        expect(result).toBe("Buzz")
    })
    it("if number is not divisible by 3 or 5",()=>{
        const result = lib.fizzBuzz(7);
        expect(result).toBe(7)
    })
});