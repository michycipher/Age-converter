// prompt('Hey baby');
function ageInDays() {
    var birthYear = prompt('Hey there!...What Year were you born?');
    var age = (2022 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + age + ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

 function reset() {
     document.getElementById('ageInDays').remove();

 }