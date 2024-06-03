// 문제 정의:
// 주어진 문자열 배열에서 가장 긴 팰린드롬을 찾아 반환하라. 만약 팰린드롬이 없다면 빈 문자열을 반환한다.

// 조건:
// 팰린드롬은 앞에서부터 읽었을 때와 뒤에서부터 읽었을 때 동일한 문자열을 의미한다.
// 대소문자를 구분하지 않으며, 공백과 특수 문자는 무시한다.
// reverse 함수를 사용하지 않는다.

// 예시:

// 입력: ["abc","car","ada","racecar","cool"]
// 출력: "racecar" (길이가 같은 팰린드롬이 여러 개라면 사전 순서대로 가장 앞에 있는 것을 선택)

// 입력: ["notapalindrome","racecar"]
// 출력: "racecar"

// 입력: ["def","ghi"]
// 출력: "" (팰린드롬이 없으므로 빈 문자열 반환)

function findLongestPalindrome(words) {
  // 1. isPalindrome 함수
  //  입력 문자열에서 알파벳과 숫자만 남기고 모두 제거한 후 소문자로 변환합니다.
  //  문자열의 양 끝에서부터 중앙으로 이동하면서 문자가 일치하는지 확인합니다. 일치하지 않으면 false를 반환하고, 끝까지 일치하면 true를 반환합니다.
  // 2. findLongestPalindrome 함수
  //  배열을 순회하며 각 문자열이 팰린드롬인지 확인합니다.
  //  팰린드롬인 경우, 현재까지 발견된 가장 긴 팰린드롬과 비교하여 더 긴 경우 또는 길이가 같고 사전 순으로 앞서는 경우에 갱신합니다.
  function isPalindrome(str) {
    str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  let longestPalindrome = "";
  for (let word of words) {
    if (isPalindrome(word)) {
      if (
        word.length > longestPalindrome.length ||
        (word.length === longestPalindrome.length && word < longestPalindrome)
      ) {
        longestPalindrome = word;
      }
    }
  }
  return longestPalindrome;
}

// 테스트 코드
function testFindLongestPalindrome() {
  const testCases = [
    { input: ["abc", "car", "ada", "racecar", "cool"], expected: "racecar" },
    { input: ["notapalindrome", "racecar"], expected: "racecar" },
    { input: ["def", "ghi"], expected: "" },
    { input: ["level", "noon", "radar", "12321", "abcde"], expected: "12321" },
    { input: ["ab", "ba", "abc", "aba"], expected: "aba" },
    {
      input: ["A man, a plan, a canal, Panama", "racecar", "madam"],
      expected: "A man, a plan, a canal, Panama",
    },
    { input: ["", "a", "bb", "ccc", "dddd", "eeeee"], expected: "eeeee" }, // 빈 문자열 포함
    { input: ["madamimadam", "racecar", "a"], expected: "madamimadam" }, // 여러 팰린드롬 중 가장 긴 것
    {
      input: ["aibohphobia", "detartrated", "deified"],
      expected: "aibohphobia",
    },
    { input: ["nope", "not a palindrome", "definitely not"], expected: "" }, // 팰린드롬이 없는 경우
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = findLongestPalindrome(input);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 node week2/time-attack-week-2-normal.js
testFindLongestPalindrome();
