function solution(dirs) {
  let location = [0, 0];
  let moved = {};
  let answer = 0;

  for (const dir of dirs) {
    let prevLocation = [...location];

    if (dir === 'U') {
      if (location[1] === 5) continue;
      location[1]++;
    } else if (dir === 'R') {
      if (location[0] === 5) continue;
      location[0]++;
    } else if (dir === 'D') {
      if (location[1] === -5) continue;
      location[1]--;
    } else if (dir === 'L') {
      if (location[0] === -5) continue;
      location[0]--;
    }

    if (isFirstRoad(moved, location, prevLocation)) answer++;
  }
  return answer;
}

function isFirstRoad(moved, location, prevLocation) {
  const isMoved = moved[[...prevLocation, ...location].join('')];
  if (isMoved) return false;

  // 이동한 길을 object에 {'xyxy': true} 반대로 간 경우도 저장
  moved[[...prevLocation, ...location].join('')] = true;
  moved[[...location, ...prevLocation].join('')] = true;
  return true;
}
