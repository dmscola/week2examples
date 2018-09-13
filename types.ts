

let foo: number = 8;
let bar: string = "eight";
//let baz: number = "nine"; //NOPE
let flag: boolean = true;

let fooD: any = 7;
let barD: any = "eight";
let bazD: any = "nine"; // OH FINE.

let flagD: any = true;


class Person {
    firstname: string;
    lastname: string;
    age: number;

    constructor(fn: string, ln: string, a: number) {
        this.firstname = fn;
        this.lastname = ln;
        this.age = a;
    }
}
  
function introduce(p: Person) :void {
    console.log("Now introducing " + p.firstname + " " + p.lastname + ", age " + p.age);
}

let han = new Person("Harrison", "Ford", 76);
let luke = new Person("Mark", "Hammill", 66);

introduce(han);
introduce(luke);

