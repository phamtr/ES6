ReactDOM.render(<h1>React JS Truong Pham </h1>,
     document.getElementById('root'));

     class Person{
     constructor(name, age){
         this.name =name;
         this.age = age;
     }
     sayHello(){
         return 'Xin chao ' + this.name;
     }
    }

    class Child extends Person{
        constructor(name, age, hoppy){
           super(name, age);
            this.hoppy = hoppy;
        }
        sayHello(){
            return 'Xin chao em la: ' + this.name + ' em thich choi: ' +this.hoppy;
        }  
    }
     var p1 = new Person('Truong pham', 50);
     var p2 = new Child('Teo', 15, 'di xe dap');
     console.log(p2.sayHello());