
function test(num) {
    var regex = new RegExp(/^[0-9]*[1-9][0-9]*$/);
    var i = 2;
    // var handle = num;
    var arr = [];
    while (i < num) {     //i小于num则一直循环下去，直到i=num为止
        var result = num / i;
        if (regex.test(result)) { //除2结果为整数
            arr.push(i);
            i = 2;
            num = result;
        } else {
            i++;
        }
        if (i == num) {  //判断是否要结尾
            arr.push(num)
            break;
        }
    }
    //打印结果
    var str = '';
    for (i = 0; i < arr.length; i++) {
        str += arr[i];
        //     if(i != arr.length-1)
        //         str += '*';
    }
    // }
   console.log(num + "=" + str);
}
var a = test(90);