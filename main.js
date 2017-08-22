var obj = {
    x: 10,
    y: 20,
    z: 30,
    plus: function() {
        console.log(this.x + this.y + this.z);
        return this;
    },
    minus: function() {
        console.log(this.z - this.y - this.x);
        return this;
    },
    mult: function() {
        console.log(this.x * this.y * this.x);
        return this;

    }
}

obj.plus().minus().mult();


/////////////////////////////////////////////////////


function changeStr(str) {
    var strNew = str.split('_');
    for (var i = 1; i < strNew.length; i++) {
        var letter = strNew[i][0].toUpperCase();

        for (var j = 1; j < strNew[i].length; j++) {
            letter += strNew[i][j];
        }
        strNew[i] = letter;
    }
    str = "";
    for (var i = 0; i < strNew.length; i++) {
        str += strNew[i];
    }
    return str;
}

console.log(changeStr("var_text_hello"));


///////////////////////////////////////////////////////

function inArray(text, arr) {
    var flag = false;
    for (var i = 0; i < arr.length; i++) {
        if (text == arr[i]) {
            flag = true;
            break;
        }
    }
    return flag;
}

var str = 'abc';
var A = ['vjneniru', 'jvnrit', 3, false, 'abc', 290],
    B = [398, 'hvbei', true, 'hfhgfe'];

console.log(inArray(str, A));
console.log(inArray(str, B));