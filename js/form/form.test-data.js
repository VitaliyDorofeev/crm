class ExampleItem {
    constructor (name, phone, email, product) {
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.product = product
    }
    
}

const testData = [
    new ExampleItem("Вася", parseInt('+74864646464'), "vasya.pup@gmail.com", "course-html"),
    new ExampleItem("Петя", parseInt('+75858585855'), "pet.pup@gmail.com", "course-js"),
    new ExampleItem("Катя", parseInt('+48585858585'), "cat.pup@gmail.com", "course-vue"),
    new ExampleItem("Ира", parseInt('+72523214587'), "irish.pup@gmail.com", "course-php"),
    new ExampleItem("Игооша", parseInt('+15252525222'), "igosha.pup@gmail.com", "course-wordpress")
];


function getRandomIndex (max) {
    return Math.floor(Math.random() * max);
}


export default function getRandomData () {
        let random = getRandomIndex(testData.length);
        return testData[random];
}
