module.exports = function check(str, bracketsConfig) {
  if( str.length % 2 !== 0) return false;
  arr1 = bracketsConfig.map( item => item.reduce( ( acc, cur) => acc+ cur))
  let strin = str;    
  for ( let i = 0 ; i < str.length /2 ; i++){
      for( let j =0 ; j < arr1.length; j++){
          strin = strin.split(arr1[j]).join('')
      }
  }
  return strin.length > 0 ? false : true
}
// я уже делал это задание на stage 0, набор декабрь 21го