const lib = require("../lib")

//NUMBERS
describe("absolute",()=>{ //GROUPING OF TEST
    it("checking output=positive, input=positive",()=>{
        const result= lib.absolute(1)
        expect(result).toBe(1)// MATCHERS
    })
    
    it("checking output=positive, input=negative",()=>{
        const result= lib.absolute(-1)
        expect(result).toBe(1)
    })
    
    it("checking output=0, input=0",()=>{
        const result= lib.absolute(0)
        expect(result).toBe(0)
    })
})

//STRINGS
describe("greet",()=>{
    it("should return the greeting message",()=>{
        const result = lib.greet("Nitish");
        //expect(result).toBe("Welcome Nitish") //FOR SPECIFIC
        //expect(result).toMatch(/Nitish/)
        expect(result).toContain("Nitish") // FOR GENERAL
    })
}) 

//ARRAYS
describe("getCurrencies",()=>{
    it("should return EUR,USD,AUD currencies",()=>{
        const result = lib.getCurrencies();

        //HARD CODING WAY
        //expect(result).toContain("USD");
        //expect(result).toContain("AUD")
        //expect(result).toContain("AUD")

        //PROPER WAY
        expect(result).toEqual(expect.arrayContaining(["AUD","EUR","USD"]))
    })
})

//OBJECTS
describe("getProducts",()=>{
    it("checking if object contains property id and price",()=>{
        const result = lib.getProduct(7);
        //expect(result).toBe({id:7,price:10}) // FAILS BECAUSE toBe comapres the references in memory location
        //expect(result).toEqual({id:7,price:10}) // CHECKS THE VALUES NOT THE REFERENCE,  THE TEST FIALS HERE BECAUSE IT IS CHECKING THE OBJECT WITH EXACTLY TWO PROPERTIES
        expect(result).toMatchObject({id:7,price:10}) // CHECK IF THE RESULT OBJECT CONTAINS THE PROPERTIES DEFINED

        expect(result).toHaveProperty("id",7) //    CHECKING THE PROPERTIES
    })
})
