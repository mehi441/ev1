// var a=700;
// var b=717;
// if (a>b){
//     console.log(a + " boyukdur " + b)
// }
// else(
//     console.log(a + " kicikdir " + b)
// )


var drivers = function (Name, Surname) {
    this.name = Name;
    this.surname = Surname;
    this.salary = [];

    this.rejim = function (Type, Day) {
        var rej = {
            type: Type,
            day: Day
        };
        this.salary.push(rej);
    }
    this.calcSalary = function () {
        var totalSalary = 0;
        for (var i = 0; i < this.salary.length; i++) {
            if (this.salary[i].type == 1) {
                totalSalary += 30 * this.salary[i].day;
            }
            if (this.salary[i].type == 2) {
                totalSalary += 40 * this.salary[i].day;
            }
            if (this.salary[i].type == 3) {
                totalSalary += 45 * this.salary[i].day;
            }
        }
        return totalSalary;
    }
}
var person = new drivers("Tofiq", "Eliyev");
person.rejim(3, 10);
person.rejim(1, 7);
person.rejim(2, 18);
console.log(person.calcSalary());