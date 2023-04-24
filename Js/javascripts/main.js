var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// làm phẳng mảng 

var flatArray = depthArray.reduce(function(flatOutput, depItem){
    console.log('aaaaaa');
    return flatOutput.concat(depItem);
},[]);