// Задание 1
// Создайте метод getStudent, который возвращает promise - объекта (студент с именем "Anri" и возрастом 32), c задержкой 4 секунды.
// Вызовите этот метод - сохраните в переменную.
// Раскройте promise при помощи then, выведите имя студента.

function getStudent(){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            const student = ({name: 'Andri', age: '32' })
            resolve(student);
        },4000)
    })
}
const studentPromise = getStudent();
studentPromise.then(student => {
    console.log(`Имя студента : ${student.name}`);
});

// Задание 2 (Дополнительно)
// Напишите функцию getDriverLicence, которая принимает в себя два аргумента success и failure.
// Сделайте внутри этой функции проверку: если выпадет какое-то число, которое будет > 0.1, то вызовется success со строкой "успех!". В иных случаях вызови failure со строкой "упс, неудача.."
// Подсказка: используйте Math.random()
// Ниже, под этой функцией, опишите аргументы success и failure, которые, в свою очередь, тоже являются функциями.
// Функция success принимает в себя аргумент, например result, и выводит в консоль текст "Успешно завершено с результатом (и указать, каким результатом)".
// Функция failure принимает в себя аргумент, например error, и выводит в консоль текст "Завершено с ошибкой(и указать, какой ошибкой)".
// Ниже вызвать функцию getDriverLicence, передав в нее аргументами две другие функции.

// function getDriverLicence (success,failure){
//     const promise =  new Promise((resolve,reject)=>{
//    const randomValue = Math.random();
//    setTimeout(()=> {
//    if(randomValue > 0.1) {
//     resolve('успех!');
//    }else{
//    reject('упс, неудача..');
//    }
// },1000);
//     });
// promise.then(success);
// promise.catch(failure);
// }
// function success(result) {
//     console.log('Успешно завершено с результатом:',result);
// }
// function failure(error){
//     console.log('Завершено с ошибкой:',error);
// }
// getDriverLicence(success,failure,0);
//=============================================

function getDriverLicence (success,failure){
   return new Promise((resolve,reject)=>{
   const randomValue = Math.random();
   if(randomValue > 0.1) {
    setTimeout(()=> {
        console.log('успех!')
    resolve('cuccess!')
})
   }else{
    setTimeout(()=> {
   reject( new Error('упс, неудача..'))
},1000)
   }
    })
}

function success(result) {
    console.log('Успешно завершено с результатом:',getDriverLicence.result);
}
function failure(error){
    console.log('Завершено с ошибкой:',getDriverLicence.error);
}
getDriverLicence('8')
//getDriverLicence(success,failure,58)
// .this((result)=> console.log(result))
// .catch((error)=> new Error(error))
