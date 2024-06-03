// 문제 정의:
// 주어진 문자열에서 각 단어를 반전시키시오. 단어의 순서는 그대로 유지되어야 합니다.

// 예시:

// 입력: "the sky is blue"
// 출력: "eht yks si eulb"

// 입력: "hello world"
// 출력: "olleh dlrow"

function reverseEachWord(s) {
  // 단어분리
  //  split 메서드를 사용하여 문자열을 공백을 기준으로 나눕니다
  //  각 단어가 배열의 요소로 분리됩니다

  // 각 단어 반점
  //  map 메서드를 사용하여 배열의 각 단어를 순회힙나다
  //  각 단어에 대해 split 메서드를 사용하여 문자의 배열로 변환한 후 reverse 메서드를 사용하여 배열의 요소 순서를 반전시키고, join 메서드를 사용하여 다시 문자열로 결합합니다

  // 반전된 단어 결합
  //  join메서드로 배열의 모든 요소를 공백을 기준으로 결합하여 최종 결과 문자열을 만듭니다
  const words = s.split(" ");
  const reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });
  return reversedWords.join(" ");
}

function testReverseEachWord() {
  const testCases = [
    { input: "the sky is blue", expected: "eht yks si eulb" },
    { input: "hello world", expected: "olleh dlrow" },
    { input: "a b c d", expected: "a b c d" },
    { input: "Palindrome", expected: "emordnilaP" },
    { input: "I love coding", expected: "I evol gnidoc" },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = reverseEachWord(input);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testReverseEachWord();
