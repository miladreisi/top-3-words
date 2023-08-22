const top3Words = require("../src/top3Words"); // Assuming you have your top3Words function in a separate file

describe("top3Words", () => {
  it("should return the top 3 words for the given input", () => {
    const input1 = `In a village of La Mancha, the name of which I have
    no desire to call to
    mind, there lived not long since one of those gentlemen that keep a lance
    in the lance-rack, an old buckler, a lean hack, and a greyhound for
    coursing. An olla of rather more beef than mutton, a salad on most
    nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
    on Sundays, made away with three-quarters of his income.`;
    const input2 = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";
    const input3 = " //wont won't won't";

    const result1 = top3Words(input1);
    const result2 = top3Words(input2);
    const result3 = top3Words(input3);

    expect(result1).toEqual(["a", "of", "on"]);
    expect(result2).toEqual(["e", "ddd", "aa"]);
    expect(result3).toEqual(["won't", "wont"]);
  });

  // Add more test cases as needed
});
