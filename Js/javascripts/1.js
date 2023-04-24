Array.prototype.reduce2 = function(callback, result){
    let i =0;
    if(arguments.length < 2) // không truyền initervalue
    {
        i =1
        result = this[0]
    }
    for (; i< this.length; i++)
    {
      result = callback(result,this[i],i,this)
    }
    return result
}


const numbers = [1, 2, 3, 4, 5];

var result = numbers.reduce2((total,number,index,arr ) =>{
    console.log(total,number,index,arr);
    return total + number;

})
console.log(result);


//  tạo format theo yêu cầu
function arrToObj(arr) {
    var result = arr.reduce(function(callback,current){
        // fromEntries -- trẻ về một mảng như dưới
        return Object.fromEntries(arr)
})
    return result;
   
}
 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
   

// callback

// định nghĩa map2
Array.prototype.map2 = function(callback){
    var lengths = this.length;
    var output = [];
    for (var i = 0; i< lengths; i++)
    {
      result = callback(this[i],i)
      console.log(result);
       output.push(result);
       
    }
    return output

}


var courses = [
    {
     name: 'Javascript',
     name2:'PHP',
     name3:'Ruby'
    }
];

var htmls = courses.map2(
    function(course){
    return `<h2>${course}</h2>`;
 
 });
     console.log(htmls);

// var htmls = courses.map(function(course){
//     return `<h2>${course}</h2>`;
// })
// 

//  định nghĩa forearch2
Array.prototype.forEach2= function(callback){

     // for -- in là duyệt không thông qua độ dài nên sẽ duyệt tất cả phần tử của mảng
    for(var index in this){
        // hàm kiểm tra xem thuộc tính dư thừa -- không phải của mảng
        if(this.hasOwnProperty(index)){

            var result = callback(this[index],index,this);
        }
    }
        return result
    
}

var courses = [
     'Javascript',
     'PHP',
     'Ruby'
];

 var rsForEach2 = courses.forEach2(function(course,index,array){
    console.log(index, course,array);
})

// var  htmls = courses.forEach(function(course,index)
// {
//     console.log(index,course);
// })


// Định nghĩa find2

Array.prototype.find2 = function(callback){
    var arrayLength = this.length;
    for(var i = 0 ; i < arrayLength; i++)
    {
       var result = callback(this[i],i);

    }
    return result;
}

var rsfind2 = courses.find2(function(course){
    return course.name == 'Javascript';
});
console.log(rsFind)



// var rsFind = courses.find(function(course){
//     return course.name == 'Javascript';
   
// })
// console.log(rsFind)


// fillter 2

var courses = [
    {
        name: 'Loi',
        coin: 720,
        isFinite: true
    },
    {
        name: 'Duy',
        coin: 800,
        isFinite: false
    },
    {
        name: 'Thi',
        coin: 690,
        isFinite: true
    }
]
Array.prototype.filter2= function(callback){
    var output = [];
    for(var index in this)
    {   
        // hàm kiểm tra phần tử trong mảng -- nếu ngoài loại bỏ
        if(this.hasOwnProperty(index))
        {
            var result = callback(this[index],index,this);
        }
        if(result) {
            output.push(this[index]);
        }
    }
    return output;
}


var rsfilter = courses.filter2(function(course,index,arr){
    return course.coin > 700;
})
console.log(rsfilter);

// var rsfilter = courses.filter(function(course,index,arr){
//     return course.coin > 700;
// })
// console.log(rsfilter);


// Some2 

var courses = [
    {
        name: 'Loi',
        coin: 720,
        isFinite: false
    },
    {
        name: 'Duy',
        coin: 800,
        isFinite: false
    },
    {
        name: 'Thi',
        coin: 690,
        isFinite: false
    }
]

Array.prototype.some2= function(callback){
    var output = false;
    for(var index in this)
    {
        if(this.hasOwnProperty(index)){
            var result = callback(this[index],index,this)
            
            if(result)
            {
                return true;
            }
        }
        
    }
    return output;
}




var rssome = courses.some2(function(course,index,array){
    return course.isFinite === true;
});
console.log(rssome);

// var rssome = courses.some(function(course,index,array){
//     return course.isFinite === true;
// });
// console.log(rssome);



// Every2 

Array.prototype.every2= function(callback){
    var output = true;
    for( var index in this)
    {
        if(this.hasOwnProperty(index)){
            var result = callback(this[index],index,this);
            
            if(!result)
            output = false; 
                return output;
                  break;
               
        }
    }
    
}



var rseverry = courses.every2(function(course,index,arr){
    return course.coin > 720 ;
})
    console.log(rseverry);


// var rseverry = courses.every(function(course,index,arr){
//     return course.isFinite === true;
// })
//     console.log(rseverry);

