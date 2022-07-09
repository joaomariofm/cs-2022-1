function generateRamdomArray(lenght) {
  const array = []

  for(let i = 0 ; i < lenght ; i++) {
    array.push(Math.floor(Math.random() * 100));
  }

  return array;
}

export default generateRamdomArray;