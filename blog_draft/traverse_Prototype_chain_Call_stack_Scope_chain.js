function getPrototypeChain(obj) {
    var protoChain = [];
    while (obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj);
    }
    protoChain.push(null);
    return protoChain;
}

// 该函数用到了非标准的caller属性,不过主流浏览器都支持它.
function getCallStack() {
    var stack = [];
    var fun = getCallStack;
    while (fun = fun.caller) {
        stack.push(fun)
    }
    return stack
}

// 作用域链是由一系列执行上下文(Execution context)中的活动对象(Activation object)
// 加最后的全局对象组成的.活动对象是一个抽象实体(Abstract Entity),它是由引擎内部来管理的,
// 并不能通过JavaScript来访问.看不到,摸不着,所以这些知识就很难理解.
// 不过在Mozilla的引擎中,有一个魔法属性__parent__可以获取到函数执行时的活动对象.
// 只是在SpiderMonkey中,该属性已经被删除了(Firefox 4开始).不过在Mozilla的另外一个
// JavaScript引擎Rhino(Java编写)上,还可以使用这个特殊属性.遍历代码如下:
function getScopeChain(fun) {
    var scopeChain = [];
    while (fun = fun.__parent__) {
        scopeChain.push(fun);
    }
    return scopeChain;
}