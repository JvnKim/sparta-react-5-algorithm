// 문제 정의:
// 주어진 문자열에서 가장 긴 반복되는 부분 문자열을 찾으시오. 반복되는 부분 문자열이 없다면 빈 문자열을 반환하시오.

// 예시:

// 입력: "mississippi"
// 출력: "issi"

// 입력: "abcdefgabcdefg"
// 출력: "abcdefg"

// 입력: "xyzxyzxyz"
// 출력: "xyzxyz"

// 입력: "abcde"
// 출력: ""

function longestRepeatingSubstring(s) {
  // 변수 초기화:

  // maxLength: 현재까지 발견된 가장 긴 반복되는 부분 문자열의 길이를 저장합니다.
  // longestSubstring: 현재까지 발견된 가장 긴 반복되는 부분 문자열을 저장합니다.

  // 부분 문자열 길이 순회:

  // length는 1부터 문자열 s의 길이 - 1까지 증가합니다. 이는 모든 가능한 부분 문자열 길이를 고려하기 위함입니다.

  // 부분 문자열 검사:

  // 현재 길이 length에 대해 문자열 s의 모든 부분 문자열을 순회합니다.
  // 각 부분 문자열을 seen 집합에 저장하고, 이미 존재하는 부분 문자열이면 반복되는 부분 문자열이므로 maxLength와 longestSubstring을 업데이트합니다.

  let maxLength = 0;
  let longestSubstring = "";

  for (let length = 1; length < s.length; length++) {
    const seen = new Set();
    for (let i = 0; i <= s.length - length; i++) {
      const substring = s.substring(i, i + length);
      if (seen.has(substring)) {
        if (length > maxLength) {
          maxLength = length;
          longestSubstring = substring;
        }
        break;
      }
      seen.add(substring);
    }
  }
  return longestSubstring;
}

// 테스트 코드
function testLongestRepeatingSubstring() {
  const testCases = [
    { input: "banana", expected: "ana" },
    { input: "abcdef", expected: "" },
    { input: "abcabc", expected: "abc" },
    { input: "aaaa", expected: "aaa" },
    { input: "abababab", expected: "ababab" },
    { input: "mississippi", expected: "issi" },
    { input: "abcdefgabcdefg", expected: "abcdefg" },
    { input: "xyzxyzxyz", expected: "xyzxyz" },
    { input: "abcde", expected: "" },
    { input: "abracadabra", expected: "abra" },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = longestRepeatingSubstring(input);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testLongestRepeatingSubstring();
