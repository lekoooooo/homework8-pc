
function findGrade(score){
if(score >= 90){
    return "Your grade : A";
} else if(score >= 80  && score <= 89){
    return "Your grade is : B";
} else if(score >= 70 && score <= 79){
    return "Your grade is : C";
}else if(score >= 60 && score <= 69){
    return "Your grade is : D";
}else {
    return "Your grade is : F";
}
}
console.log(findGrade(85))
console.log(findGrade(78))
console.log(findGrade(99))
console.log(findGrade(61))
console.log(findGrade(49))