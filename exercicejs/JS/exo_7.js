let pointure = prompt ("quelle est votre pointure?");
let DDN = prompt ("quelle est votre année de naissance?");

function multiplier(pointure, DDN) {
    return((((pointure*2) + 5)*50)-DDN)+1766;
    
}
alert(multiplier(pointure, DDN));