var megahertz = require("../megahertz");

describe("megahertz", function () {

	it("should be defined", function () {
		expect(megahertz).toBeDefined();
	});

	describe("compare", function () {

		it("two audio clips that are the same result in 1", function () {
			var sound1 = 1,
				sound2 = sound1;
			expect(megahertz.compare(sound1, sound2)).toBe(1);
		});

	});    
});    