/**
 * [(lv.3)문자열 토글 케이스.js]
 *
 * 1) 문자열의 각 문자가 대문자면 소문자로, 소문자면 대문자로 바꿔 반환하세요.
 * 2) 알파벳 이외의 문자는 그대로 둡니다.
 * 3) 예: toggleCase('Abc123') -> 'aBC123'
 *
 * @param {string} str
 * @returns {string}
 */

// TODO: 함수를 작성하세요 (예: toggleCase)
function toggleCase(str) {
  let result = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if ("a" <= str[i] && str[i] <= "z") {
      console.log(str[i]);
      result[i].toUpperCase();
    }
    console.log(result);
  }
  return result;
  // TODO
}

// export 를 수정하지 마세요.
export { toggleCase };
