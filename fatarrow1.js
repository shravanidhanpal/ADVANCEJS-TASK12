
let getA=a => a;
console.log(getA(2));

let square=a=>{return a*a};
console.log(square(2));

var a=2
let cube = _ => {return a*a*a};
console.log(cube());

let square1=() =>{return a*a};
console.log(square1());

let mul=(a,b) =>{return a*b};
console.log(mul(2,5));

var x=function(){
    var that=this;
    this.val=1;
    setTimeout(function(){
        that.val++;
        console.log(that.val)
    },1)
};
var xx=new x();

var x=function(){
    this.val=1;
    setTimeout(()=>{
        this.val++;
        console.log(this.val)
    },1)
};
var xx =new x();

var x=(...n)=>{
    console.log(n[2])
};
x(1,2,3);
