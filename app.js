//6. Ennancedd object titlerals
// Định nghĩa Key
// Định nghĩa method cho object
// Định nghĩa key cho object dưới dạng biến

// var name = 'javascripts';
// var price = 2000;

// var course = {
//     name: name,
//     price: price,
//     getName () {
//         return this.name;
//     }


// }

var fieldName = 'name';
var fieldPrice = 'price';

const Course = {
    name: 'javascripts',
    [fieldName] : 'javascripts',
    [fieldPrice]: 2000
}
console.log(course);

