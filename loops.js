function whileLoop(n) {
  while (n>0){
    console.log(--n)
  }
  if (n==0){
    return 'done'
  }
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.shift
  } while (array.length > 0 && maybeTrue())
  return array
}
