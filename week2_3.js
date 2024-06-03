// 문제 정의:
// 주어진 문자열을 반전시키시오. 문자열의 각 단어는 그대로 두고 단어의 순서만 반전시키시오.
// 단, reverse 함수를 사용하면 안된다.

// 예시:
// 입력: "the sky is blue"
// 출력: "blue is sky the"
// 입력: "hello world"
// 출력: "world hello"

function reverseWords(s) {
  // 1. split(' ') 메서드를 사용하여 문자열을 단어로 분리합니다.
  // 2. filter(word => word !== '')를 사용하여 빈 문자열을 제거합니다.
  // 3. for 루프를 사용하여 단어 배열을 뒤에서부터 앞으로 순회하며 결과 문자열을 만듭니다.
  const words = s.split(" ").filter((word) => word !== "");
  let result = "";
  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i > 0) {
      result += " ";
    }
  }
  return result;
}

// 테스트 코드
function testReverseWords() {
  const testCases = [
    { input: "the sky is blue", expected: "blue is sky the" },
    { input: "hello world", expected: "world hello" },
    { input: "a b c d", expected: "d c b a" },
    { input: "Palindrome", expected: "Palindrome" },
    { input: "I love coding", expected: "coding love I" },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = reverseWords(input);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testReverseWords();
