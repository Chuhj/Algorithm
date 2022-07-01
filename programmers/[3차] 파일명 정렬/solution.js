function solution(files) {
  const digit = '0123456789';
  const splitedFiles = [];

  for (const file of files) {
    let isIn = false;

    let startIndex = 0;
    let endIndex = 0;
    for (let i = 0; i < file.length; i++) {
      if (digit.includes(file[i])) {
        if (!isIn) startIndex = i;
        isIn = true;
      }

      if (isIn && !digit.includes(file[i])) {
        endIndex = i;
        break;
      }
      endIndex = file.length;
    }

    splitedFiles.push([
      file.slice(0, startIndex),
      file.slice(startIndex, endIndex),
      file.slice(endIndex),
    ]);
  }

  splitedFiles.sort((a, b) => {
    const lowerA = a[0].toLowerCase();
    const lowerB = b[0].toLowerCase();
    if (lowerA > lowerB) return 1;
    if (lowerA < lowerB) return -1;
    return 0;
  });

  splitedFiles.sort((a, b) => {
    if (a[0].toLowerCase() === b[0].toLowerCase()) {
      return parseInt(a[1], 10) - parseInt(b[1], 10);
    }
    return 0;
  });

  return splitedFiles.map((file) => file.join(''));
}
