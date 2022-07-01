function solution(m, musicinfos) {
  let matchMusics = [];

  function subsTime(a, b) {
    const [timeA, timeB] = [a.split(':'), b.split(':')];
    const [hourA, minuteA] = [parseInt(timeA[0], 10), parseInt(timeA[1], 10)];
    const [hourB, minuteB] = [parseInt(timeB[0], 10), parseInt(timeB[1], 10)];

    return hourB * 60 + minuteB - (hourA * 60 + minuteA);
  }

  function combineSharp(arr) {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] === '#') {
        arr[i - 1] += '#';
        arr.splice(i, 1);
      }
      i++;
    }
    return arr;
  }

  let mArray = combineSharp(m.split(''));

  for (const music of musicinfos) {
    const [start, end, title, sheet] = music.split(',');
    const time = subsTime(start, end);

    let sheetArray = combineSharp(sheet.split(''));

    const div = Math.floor(time / sheetArray.length);
    const mod = time % sheetArray.length;

    let total = [];
    for (let i = 0; i < div; i++) {
      total = [...total, ...sheetArray];
    }
    total = [...total, ...sheetArray.slice(0, mod)];

    for (let i = 0; i <= total.length - mArray.length; i++) {
      let compare = total.slice(i, i + mArray.length);

      if (m === compare.join('')) {
        matchMusics.push([title, time]);
      }
    }
  }

  matchMusics.sort((a, b) => b[1] - a[1]);
  return matchMusics.length > 0 ? matchMusics[0][0] : '(None)';
}
