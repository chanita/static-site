const convert = require("./simple-function.js");
test("return 0 when input is 0", () => {
    const input = 0;
    const out = convert(input);
    expect(out).toBe(0);
})
test("return 0.01 when input is 1", () => {
    const input = 1;
    const out = convert(input);
    expect(out).toBe(0.01);
})
const input_expect_list = [
    [0, 0],
    [1, 0.01],
    [50, 0.5],
    [100, 1],
    [1000, 10],
]
test("parameterize all input and expect", () => {
    let output_value, input_value;
    for (i in input_expect_list) {
        input_value = input_expect_list[i][0];
        output_value = convert(input_value);
        expect(output_value).toBe(input_expect_list[i][1])
    }
})