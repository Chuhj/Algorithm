function solution(p) {
  return makeRightString(p);
}

function makeRightString(s) {
  if (s === '') return s;

  let u = '';
  let v = '';
  for (let i = 2; i <= s.length; i += 2) {
    // u와 v 나눔
    let separated = s.substr(0, i);
    let open = 0;
    let close = 0;

    for (const c of separated) {
      if (c === '(') open++;
      else close++;
    }
    if (open && open === close) {
      // 균형잡힌 괄호 문자열이라면
      u = separated;
      v = s.substr(i);
      break;
    }
  }

  if (isRightString(u)) {
    return u + makeRightString(v);
  } else {
    return (
      '(' +
      makeRightString(v) +
      ')' +
      reverseDirection(u.slice(1, u.length - 1))
    );
  }
}

function isRightString(s) {
  let stack = [];

  for (const c of s) {
    if (stack.length > 0 && stack[stack.length - 1] === '(' && c === ')') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0 ? true : false;
}

function reverseDirection(s) {
  return s
    .split('')
    .map((c) => (c === '(' ? ')' : '('))
    .join('');
}
