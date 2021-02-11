function User(name,age){
    this.name=name
    this.age=age
    this.getInfo=function(){
        console.log(this.name,this.age)
    }
}

var u=new User('tom',20)
var u=new User('tom2',33)

// 原型，原型链
User.prototype.num=10

u.num
u1.num