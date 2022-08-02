function solution(sizes) {
  let w = 0;
  let h = 0;
  for (const size of sizes) {
    size.sort((a, b) => a - b);
    if (size[0] > w) w = size[0];
    if (size[1] > h) h = size[1];
  }
  return w * h;
}
