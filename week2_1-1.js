// 문제 정의:
// 주어진 두 문자열에서 첫 번째 문자열이 두 번째 문자열에 포함되는지 여부를 확인하시오. 포함된다면 true, 포함되지 않는다면 false를 반환하시오.
// 단, 'include' 함수는 사용하지 마시오.

// 예시:
// 입력: "abc", "aabcc"
// 출력: true
// 입력: "abc", "def"
// 출력: false

function isSubstring(s1, s2) {
  // 1. 두 문자열의 길이를 비교하여 첫 번째 문자열이 두 번째 문자열보다 길면 false를 반환
  // 2. 두 번째 문자열을 첫 번째 문자열의 길이만큼의 슬라이딩 윈도우로 탐색
  // 3. 윈도우 내의 문자열과 첫 번째 문자열을 하나씩 비교
  // 4. 만약 윈도우 내의 모든 문자가 첫 번째 문자열과 일치하면 true를 반환
  // 5. 끝까지 탐색한 후에도 일치하는 부분 문자열이 없다면 false를 반환
  if (s1.length > s2.length) return false;

  for (let i = 0; i <= s2.length - s1.length; i++) {
    let found = true;
    for (let j = 0; j < s1.length; j++) {
      if (s2[i + j] !== s1[j]) {
        found = false;
        break;
      }
    }
    if (found) return true;
  }
  return false;
}

// 테스트 코드
function testIsSubstring() {
  const testCases = [
    { input: ["abc", "aabcc"], expected: true },
    { input: ["abc", "def"], expected: false },
    { input: ["hello", "hello world"], expected: true },
    { input: ["test", "testing"], expected: true },
    { input: ["apple", "pineapple"], expected: true },
    { input: ["", "anystring"], expected: true }, // 빈 문자열은 항상 포함됨
    { input: ["anystring", ""], expected: false }, // 어떤 문자열도 빈 문자열에 포함되지 않음
    { input: ["a", "a"], expected: true }, // 동일한 한 글자 문자열
    { input: ["longerstring", "short"], expected: false }, // 첫 번째 문자열이 더 긴 경우
    { input: ["abc", "ababc"], expected: true }, // 첫 번째 문자열이 두 번째 문자열의 중간에 포함되는 경우
    { input: ["abc", "abcabcabc"], expected: true }, // 첫 번째 문자열이 두 번째 문자열에 여러 번 포함되는 경우
    { input: ["hello", "ohelloohello"], expected: true }, // 첫 번째 문자열이 두 번째 문자열의 끝과 시작에 걸쳐 있는 경우
    { input: ["abc", "xyzxyz"], expected: false }, // 완전히 다른 문자열
    { input: ["repeat", "repeatrepeatrepeat"], expected: true }, // 첫 번째 문자열이 두 번째 문자열에 반복되는 경우
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = isSubstring(input[0], input[1]);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testIsSubstring();
