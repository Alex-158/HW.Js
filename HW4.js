console.log('--------------Первое задание -------------------');

 class Student{
    static listOfStudent =[];
    static id = 1;
    
    constructor(enrollee) {
        for (let key in enrollee) {
            this[key] = enrollee[key];
        }
        this.id = Student.id++;
        this.isSelfPayment =
            (function () {

                if (enrollee.ratingPoint <= 800) {
                    return true;
                } else {
                    if (Student.listOfStudent.length < 5) {
                        return false;
                    } else {
                        Student.listOfStudent.sort(function (a, b) {
                            if (a.ratingPoint === b.ratingPoint) {
                                if (a.schoolPoint < b.schoolPoint)
                                    return 1;
                                else return -1;
                            }
                            if (a.ratingPoint < b.ratingPoint)
                                return 1
                            else
                                return -1;
                        })
                        if (enrollee.ratingPoint == Student.listOfStudent[4].ratingPoint) {
                            if (enrollee.schoolPoint > Student.listOfStudent[4].schoolPoint) {
                                Student.listOfStudent[4].isSelfPayment = true;
                                return false;
                            }
                        }
                        if (enrollee.ratingPoint > Student.listOfStudent[4].ratingPoint) {
                            Student.listOfStudent[4].isSelfPayment = true;
                            return false;
                        } else {
                            return true;
                        }
                    }
                }
            }());


        

        

        Student.listOfStudent.push(this);
        Student.listOfStudent.sort(function (a, b) {
            if (a.ratingPoint === b.ratingPoint) {
                if (a.schoolPoint < b.schoolPoint)
                    return 1;
                else return -1;
            }
            if (a.ratingPoint < b.ratingPoint)
                return 1
            else
                return -1;
        })
    }

        


    };

    const stud1 = new Student(studentArr[0]);
    const stud2 = new Student(studentArr[1]);
    const stud3 = new Student(studentArr[2]);
    const stud4 = new Student(studentArr[3]);
    const stud5 = new Student(studentArr[4]);
    const stud6 = new Student(studentArr[5]);
    const stud7 = new Student(studentArr[6]);
    const stud8 = new Student(studentArr[7]);
    const stud9 = new Student(studentArr[8]);
    const stud10 = new Student(studentArr[9]);
    const stud11 = new Student(studentArr[10]);  
    
    console.log(Student.listOfStudent);
    
    

//console.log('-----------Второе задание-------------');

class CustomString{
    reverse(str){
        alert (Array.from(str).reverse().join('')); // reverse
    }
    ucFirst(str){
        alert (str[0].toUpperCase() + str.slice(1)); //first letter uppercase
    }
    ucWords(str){
        alert(
            str.split(/\s+/).map(str => str[0].toUpperCase() + str.substring(1)).join(' ') // first letter uppercase in array
            );
    }
}

const Total = new CustomString();

Total.reverse('Pupkin'); 
Total.ucFirst('pupkin'); 
Total.ucWords('pupkin pupkin pupkin'); 

console.log('------------Третье задание----------------');

class Validator{
    checkIsEmail(val){
        return val.match(/.+@\w+\.(com|ru|gov)/g) ? true : false;
    }
    checkIsDomain(val){
        return val.match(/.+\.com|ru|gov/g) ? true : false;
    }
    checkIsDate(val){
        return val.match(/\d{2}(\.|\/|\-)\d{2}(\.|\/|\-)\d{4}/) ? true : false;
    }
    checkIsPhone(val){
        return val.match(/^[+]38/) ? true : false;
    }
    
}

let validator = new Validator();

console.log(validator.checkIsEmail('vasya.pupkin@gmail.com')); 
console.log(validator.checkIsDomain('google.com')); 
console.log(validator.checkIsDate('30.11.2019')); 
console.log(validator.checkIsPhone('+78 (066) 937-99-92')); // если код страны Украинский, то возвращаем true иначе false