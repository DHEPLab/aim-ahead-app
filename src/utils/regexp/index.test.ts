import { passwordPattern } from ".";

describe("Password regexp pattern test", () => {
  const isPasswordMatch = (pwd: string) => passwordPattern.test(pwd);

  it("Should return false when input without digital", () => {
    const pwdWithoutDigital = "jcdrBzQWimPfT";

    expect(isPasswordMatch(pwdWithoutDigital)).toBe(false);
  });

  it("Should return false when input without word", () => {
    const pwdWithoutDigital = "^1234567890$";

    expect(isPasswordMatch(pwdWithoutDigital)).toBe(false);
  });

  it("Should return false when input without special character", () => {
    const pwdWithoutDigital = "ENXPjcEgaqboydr9Ryui";

    expect(isPasswordMatch(pwdWithoutDigital)).toBe(false);
  });

  it("Test password lengths within [8, 128]", () => {
    const inputs: [string, boolean][] = [
      ["M2@Qi7", false],
      ["M2@Qi7_8", true],
      [`M2@Qi7_8${"a".repeat(120)}`, true],
      [`M2@Qi7_8${"a".repeat(121)}`, false],
    ];

    inputs.map((input) => {
      expect(isPasswordMatch(input[0])).toBe(input[1]);
    });
  });
});
