const punctremoved= require('./BingSearch');

describe("Punctuation check", () =>{
    test("Hello*World should return Hello World", () =>{
          expect(punctremoved("Hello,World")).toBe("Hello World")
    });
})