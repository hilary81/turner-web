const PunctRemoved = require('./PunctRemoved')

describe("Punctuation check", () =>{
    test("Hello*World should return Hello World", () =>{
          expect(PunctRemoved("Hello,World")).toBe("Hello World")
    });
})