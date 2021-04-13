console.log('-------------№1----------------');

    
 
    
    
function Emploee(employee) {
        this.id = employee.id;
        this.name = employee.name;
        this.surname = employee.surname;
        this.salary = employee.salary;
        this.workExperience = employee.workExperience;
        this.isPrivileges = employee.isPrivileges;
        this.gender = employee.gender;
}


const employeeObj = new Emploee(emplyeeArr[0]);
console.log(employeeObj)
       console.log('-------------№2----------------');
    
    
    Emploee.prototype.getFullName = function () {
        return `${this.surname}  ${this.name}`;
}
console.log(employeeObj.getFullName())

console.log('-------------№3----------------');

let createEmployesFromArr = (arr) => {
       let users = [];

       for(let i = 0; i < arr.length; i++) {
               users[i] = new Emploee (arr[i]);
       }

       return users;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr)
console.log(emplyeeConstructArr )

console.log('-------------№4----------------');

const getFullNamesFromArr = (arr) => {
       let fullNames = [];

       for(let i = 0; i < arr.length; i++) {
               fullNames[i] = arr[i].name + " " + arr[i].surname;
       }

       return fullNames;
}

console.log(getFullNamesFromArr(emplyeeConstructArr))

console.log('-------------№5----------------');

const getMiddleSalary = (arr) => {
       let SumOfSalaries = 0,
           salariesLength = arr.length;

       for(let i = 0; i < arr.length; i++) {
               SumOfSalaries += arr[i].salary;
       }

       const averageSalary = Math.ceil (SumOfSalaries  / salariesLength);

       return averageSalary;
}

console.log('среднее значение зарплаты всех :' + getMiddleSalary (emplyeeConstructArr)) 

console.log('-------------№6----------------');

const getRandomEmployee = (arr) => {
       let casualWorker = arr[Math.ceil(Math.random() * arr.length)];

       return casualWorker;
}

console.log(getRandomEmployee(emplyeeConstructArr))

console.log('-------------№7----------------');

Object.defineProperty(employeeObj, 'fullInfo', {
       get: function() {

               let object_keys = Object.keys(this),
                   properties = '';

               for (var i = 0; i < object_keys.length; i++) {
                       if(i == object_keys.length -1) {
                               properties += object_keys[i] + ' - ' + this[object_keys[i]];
                       } else {
                               properties += object_keys[i] + ' - ' + this[object_keys[i]] + ', ';
                       }
               }
               return properties;
       },
       set: function (value) {
               let value_keys = Object.keys(value);

               for (var i = 0; i < value_keys.length; i++) {
                       if(this[value_keys[i]]) {
                               this[value_keys[i]] = value[value_keys[i]];
                       }
               }
       }
})
console.log(employeeObj.fullInfo)
employeeObj.fullInfo = {name: 'Вася', salary: 9000, email: 'ex@mail.ua'}
console.log(employeeObj)