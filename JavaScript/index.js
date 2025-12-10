function abcd(){
    var a = 90;
   return  function add(){
        return a+10;
    }
}
var add = abcd();
console.log(add()); 