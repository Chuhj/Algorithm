function solution(fees, records) {
  const cars = {};
  for (const record of records) {
    // 차 번호마다 [입차, 출차시간]을 기록
    // 여러번 입차 가능
    // 입차마다 리스트 생성
    const [time, num, inOut] = record.split(' ');
    if (inOut === 'IN') {
      if (!cars[num]) cars[num] = [];
      cars[num].push([time]);
    } else {
      cars[num][cars[num].length - 1].push(time);
    }
  }

  let result = [];
  for (const num in cars) {
    let fee = fees[1];

    const gap = getMinues(cars, num) - fees[0];
    if (gap > 0) {
      fee += Math.ceil(gap / fees[2]) * fees[3];
    }
    result.push([num, fee]);
  }
  result = result.sort((a, b) => a[0] - b[0]).map((v) => v[1]);

  return result;
}

function getMinues(cars, carNum) {
  let hours = 0;
  let minutes = 0;
  for (const record of cars[carNum]) {
    const inTime = record[0];
    const outTime = record[1] || '23:59';

    const [inHours, inMinutes] = inTime.split(':');
    const [outHours, outMinutes] = outTime.split(':');

    hours += parseInt(outHours) - parseInt(inHours);
    minutes += parseInt(outMinutes) - parseInt(inMinutes);
    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }
  }
  return hours * 60 + minutes;
}
