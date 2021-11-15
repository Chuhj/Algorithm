function solution(genres, plays) {
  var answer = [];
  let songs = {};

  // 장르를 key로 [play수, 고유번호] 를 value로 object를 만듦
  for (let i = 0; i < genres.length; i++) {
    if (!songs[genres[i]]) {
      songs[genres[i]] = [];
    }
    songs[genres[i]].push([plays[i], i]);
  }

  let order = []; // 장르를 재생횟수로 정렬하기 위한 array
  for (let genre in songs) {
    order.push([songs[genre].reduce((p, c) => [p[0] + c[0]])[0], genre]); // order에 [장르의 재생횟수, 장르]를 push
    songs[genre].sort((a, b) => b[0] - a[0]); // songs의 장르마다 곡들을 재생횟수로 정렬
  }
  order.sort((a, b) => b[0] - a[0]);

  order.forEach((genre) => {
    // 재생횟수가 가장 많은 장르부터 순회
    for (let i = 0; i < songs[genre[1]].length; i++) {
      if (i > 1) {
        break;
      }
      answer.push(songs[genre[1]][i][1]);
    }
  });

  return answer;
}
