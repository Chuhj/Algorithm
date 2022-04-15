function solution(cacheSize, cities) {
  let cache = [];
  let time = 0;

  if (cacheSize === 0) return cities.length * 5;
  cities.forEach((city) => {
    city = city.toLowerCase();
    if (!cache.includes(city)) {
      if (cache.length >= cacheSize) {
        cache.splice(0, 1);
      }
      cache.push(city);
      time += 5;
    } else {
      const index = cache.indexOf(city);
      cache.splice(index, 1);
      cache.push(city);
      time += 1;
    }
  });

  return time;
}
