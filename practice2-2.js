// 두 문자열의 교집합 문자 집합 구하기
// 문제 정의:
// 두 문자열이 주어졌을 때, 두 문자열에 모두 등장하는 문자를 집합으로 반환하라.

// 조건:

// 대소문자를 구분하지 않는다.
// 결과는 집합(Set) 형태로 반환한다.
// 예시:

// 입력: "apple", "pineapple"
// 출력: new Set(['p', 'l', 'e'])

function commonCharacters(s1, s2) {

//   함수 commonCharacters(문자열 s1, 문자열 s2):
//      두 문자열을 소문자로 변환하여 대소문자 구분하지 않음
//      s1을 소문자로 변환
//      s2를 소문자로 변환
    
//      첫 번째 문자열의 문자를 집합(set)으로 저장
//      첫 번째 문자열의 문자를 저장할 set1을 생성
    
//      공통 문자를 저장할 집합(set) 초기화
//      공통 문자를 저장할 commonSet을 생성
    
//      두 번째 문자열의 각 문자에 대해 반복:
//          만약 현재 문자가 set1에 존재하면:
//              commonSet에 현재 문자를 추가
    
//      공통 문자 집합 반환

  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  const set1 = new Set(s1);
  const commonSet = new Set();

  for (let char of s2) {
    if (set1.has(char)) {
      commonSet.add(char);
    }
  }

  return commonSet;
}

// 테스트 코드
function testCommonCharacters() {
  const testCases = [
    { input: ["apple", "pineapple"], expected: new Set(["a", "p", "l", "e"]) },
    { input: ["hello", "world"], expected: new Set(["o", "l"]) },
    { input: ["abc", "def"], expected: new Set() },
    {
      input: ["abcdef", "fedcba"],
      expected: new Set(["a", "b", "c", "d", "e", "f"]),
    },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = new Set(commonCharacters(input[0], input[1]));
      const isEqual =
        expected.size === result.size &&
        [...expected].every((value) => result.has(value));
      if (!isEqual)
        throw new Error(`Expected ${[...expected]}, but got ${[...result]}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 터미널에 node practice2-2.js 실행
testCommonCharacters();
