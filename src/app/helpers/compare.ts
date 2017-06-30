class Compare {
  constructor() {}
  compareValues(a, b) {
    let start = a;
    let end = b;
    let result = 0;

    if (Number.isInteger(Number(start)) && Number.isInteger(Number(end))) {
      start = Number(start);
      end = Number(end);
    }

    if (typeof(start) === 'string' && typeof(end) === 'string') {
      start = String(start);
      end = String(end);
    }

    if (!isNaN(start) && start.toString().indexOf('.') != -1) {
        start = parseFloat(start);
        end = parseFloat(end);
    }​
    

    if (start < end) {
      result = -1;
    }

    if (start > end) {
      result = 1;
    }

    return result;  
  }
}

export { Compare };