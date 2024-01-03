const compress = (a, b = true) => {
    if (typeof a !== 'string' && !(a instanceof String)) {
      throw new Error('InvalidType');
    }
  
    if (b) {
      // Compresie
      let result = '';
      let count = 1;
  
      for (let i = 0; i < a.length; i++) {
        if (a[i] === a[i + 1]) {
          count++;
        } else {
          result += a[i] + (count > 1 ? count : '');
          count = 1;
        }
      }
  
      return result;
    } else {
      // Decompresie
      let result = '';
      let i = 0;
  
      while (i < a.length) {
        let char = a[i];
        let count = '';
  
        i++;
  
        while (i < a.length && !isNaN(parseInt(a[i]))) {
          count += a[i];
          i++;
        }
  
        count = count === '' ? 1 : parseInt(count);
  
        result += char.repeat(count);
      }
  
      return result;
    }
  };
  
  module.exports = compress;
  
