function stringChop(str, size) {
  // your code here
  let result=[]
  let count=0
  let sub=""
  for(let t of str)
  {
    if(count<size){
      sub+=t
      count++
      
    }
    else
    {
      result.push(sub)
      sub=""
      sub+=t
      count=1
    }
    
  }
  result.push(sub)
  return result
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
