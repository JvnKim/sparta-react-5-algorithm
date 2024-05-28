// 문자열에서 가장 많이 등장한 문자 찾기
// 문제 정의:
// 주어진 문자열에서 가장 많이 등장하는 문자를 반환하라. 만약 여러 개라면 그 중 아무거나 반환하라.

// 조건:

// 대소문자를 구분한다.
// 공백도 하나의 문자로 간주한다.
// 예시:

// 입력: "banana"
// 출력: 'a' (혹은 'n')

function mostFrequentChar(s) {
  // 이곳에 함수 작성을 해주세요.

  //   함수 mostFrequentChar(문자열 s):
  //      문자 등장 횟수를 저장할 딕셔너리 초기화
  //      문자 등장 횟수 = 빈 딕셔너리

  //      최대 등장 횟수와 가장 많이 등장한 문자 초기화
  //      최대 등장 횟수 = 0
  //      가장 많이 등장한 문자 = 빈 문자열

  //      문자열의 각 문자를 순회하며 등장 횟수 계산
  //      문자열 s의 각 문자에 대해 반복:
  //          만약 문자가 딕셔너리에 이미 존재하면:
  //              문자의 등장 횟수를 1 증가
  //          그렇지 않으면:
  //              문자를 딕셔너리에 추가하고 등장 횟수를 1로 설정

  //      딕셔너리를 순회하며 가장 많이 등장한 문자를 찾기
  //      딕셔너리의 각 문자에 대해 반복:
  //          만약 현재 문자의 등장 횟수가 최대 등장 횟수보다 크면:
  //              최대 등장 횟수를 현재 문자의 등장 횟수로 업데이트
  //              가장 많이 등장한 문자를 현재 문자로 업데이트

  //      가장 많이 등장한 문자 반환

  const charCount = {};
  let maxCount = 0;
  let mostFrequentChar = "";

  for (let char of s) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }

    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      mostFrequentChar = char;
    }
  }

  return mostFrequentChar;
}

// 테스트 코드
function testMostFrequentChar() {
  const testCases = [
    { input: "banana", expected: ["a", "n"] },
    { input: "apple", expected: ["p"] },
    { input: "mississippi", expected: ["i", "s"] },
    { input: "aabbcc", expected: ["a", "b", "c"] },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = mostFrequentChar(input);
      if (!expected.includes(result))
        throw new Error(`Expected one of ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 : 터미널에 node practice2-1.js 실행
testMostFrequentChar();
