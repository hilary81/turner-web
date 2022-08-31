import { Punctremoved } from "./BingSearch";

describe("Punctuation check", () => {
	test("Hello*World should return Hello World", () => {
		expect(Punctremoved("Hello,World")).toBe("Hello World");
	});
});
