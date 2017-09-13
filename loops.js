function whileLoop(n) {
  while (n>0){
    console.log(--n)
  }
  if (n==0){
    return 'done'
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
  return array
}
