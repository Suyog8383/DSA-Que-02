let str="suyog nagawade";

function uppercaseFirst(str){
    let result= "";
    let data=str.split(" ");
    for(let i=0;i<data.length;i++){
        let final=data[i][0].toUpperCase()+ data[i].slice(1,data[i].length);
        result = result+ " "+ final;
    }
    return result;
}


console.log(uppercaseFirst(str));

function firstRepeatingIndex(arr){
  let count = {};
  for(let i=0;i<arr.length; i++){
      if(count[arr[i]])
      {
        console.log("character", arr[i])
        console.log("index", count[arr[i]])
        return count[arr[i]] //if exist
      }
      else
      {
        count[arr[i]]=i //if not exist keep at count
      }
      console.log("count", count) 
    }
  return count   
}


console.log(firstRepeatingIndex([1,0,2,3,4,4,5,7,7]));

function findAllSubsetsoOfGivenSet(arr) 
{
   var result= arr.reduce((subsets, value) => subsets.concat(subsets.map(set => [value,...set])),
                          [[]]) //[[]] is used to pass initial value
  return result
}
console.log(findAllSubsetsoOfGivenSet([8,9]));

function MissingElements(arr)
{
    for(let i = 0; i < arr.length; i++) //[1,2,6]
    {
        if (arr[i] - i != arr[0]) //1-0==1 //2-1==1 //6-2!=1 
        {
            while (arr[0] < arr[i] - i)//1<4 //2<4 //3<4 
            {
                console.log(i + arr[0]);//2+1 //3+1 //3+1
                arr[0]++; //2 //3 //4
            }
        }
    }
}


console.log("Welcome to Programiz!",MissingElements([1,2,6]));
