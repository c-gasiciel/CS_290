function buildList(list){
  //Declare binding for empty array
  var result = []

  //Iterate through array
  for(var i = 0; i < list.length; i++){
    var test = function(x){
        var item = 'item' + x;
      return function(){
        alert(item + ' ' + x);
      };
    }(list[i]);

    result.push(test);

  }
  return result;
}

function testList(){
  //This will hold result from buildList
  var fnlist = buildList([1, 2, 3]);
  //Call functions saved in result
  for(var j= 0; j < fnlist.length; j++){
    fnlist[j]();
  }
}

//Call testList
testList();
