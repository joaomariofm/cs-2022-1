function printArray( A)
{
  for (var i = 0; i < A.length; i++)
    process.stdout.write(`${A[i]} `);

  process.stdout.write('\n');
}

export default printArray;