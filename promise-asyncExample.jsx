const fs = require('fs');

function readFile(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, { encoding: 'utf8' }, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Promise (Async)
readFile('./names.txt')
  .then(function (data) {
    console.log(data);
    return readFile('./addresses.txt');
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

// Async/Await (Hanya bisa di-implementasikan pada function yang return Promise)
//
// IIF (Immediately Invoked Function)
(async function () {
  try {
    const names = await readFile('./names.txt');
    const addresses = await readFile('./addresses.txt');

    console.log(names);
    console.log(addresses);
  } catch (err) {
    console.log('Masuk catch', err);
  }
})();
