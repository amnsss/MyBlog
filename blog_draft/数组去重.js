
// 添加前顺序扫描新数组, 返回新数组
Array.prototype.unique1 = function() {
  var res = [];
  var arr = this;
  for(var i=0, len=arr.length; i<len; i++) {
      var v = arr[i];
      if(res.indexOf(v) == -1) {
          res.push(v);
      }
  }
  return res;
}

// hash值判断元素是否存在(效率最高), 返回新数组
Array.prototype.unique2 = function() {
    var res = [];
    var hash = {};
    var arr = this;
    for(var i=0, len=arr.length; i<len; i++) {
        var v = arr[i];
        if(!hash[v]) {
            res.push(v);
            hash[v] = true;
        }
    }
    return res;
}

// 先排序, 再比较相邻的元素, 改变了原来的数组
Array.prototype.unique3 = function() {
    var arr = this;
    arr.sort(function(a, b){ return a - b; });
    for(var i=0, len=arr.length; i<len-1; i++) {
        if(arr[i] == arr[i+1]) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

// 元素出现位置不等于它第一次出现的位置, 则重复
Array.prototype.unique4 = function() {
    var res = [];
    var arr = this;
    res[0] = arr[0];
    for(var i=1, len=arr.length; i<len; i++) {
        var v = arr[i];
        if(arr.indexOf(v) == i) {
            res.push(v);
        }
    }
    return res;
}


