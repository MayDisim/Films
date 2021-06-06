//Вызов формы заполнения по нажатию кнопки

let npopup=document.getElementById('formForFilmId'),
npopupTogle=document.getElementById('formBtn'),
npopupClose=document.querySelector('.close');
npopupTogle.onclick=function(){
    npopup.style.display='block';
};
npopupClose.onclick=function(){
    npopup.style.display='none';
    window.location.reload();
};
window.onclick=function(e){
    if(e.target==npopup){
        npopup.style.display="none";
    }
};

//Ошибки при вводе некорректного значения
var input_0 = document.getElementById("Name");
var input_1 = document.getElementById("Country");
var input_2 = document.getElementById("Genry");
var input_3 = document.getElementById("Creator");
var input_4 = document.getElementById("Screenwriter");
var input_5 = document.getElementById("Producer");
var input_6 = document.getElementById("Operator");
var input_7 = document.getElementById("Compose");
var input_8 = document.getElementById("Budget");
var input_9 = document.getElementById("Casier");
var input_10 = document.getElementById("Limit");
var input_11= document.getElementById("Way");
var input_12 = document.getElementById("Date");

input_0.addEventListener("input", function (event) {
let a=document.getElementById('NameInput');
if (input_0.validity.patternMismatch) {
  a.style.display='block';

} else {
  a.style.display='none';
}
});
input_1.addEventListener("input", function (event) {
let a=document.getElementById('CountryInput');
if (input_1.validity.patternMismatch) {
  a.style.display='block';

} else {
  a.style.display='none';
}
});
input_2.addEventListener("input", function (event) {
let a=document.getElementById('GenryInput');
if (input_2.validity.patternMismatch) {
  a.style.display='block';

} else {
  a.style.display='none';
}
});
input_3.addEventListener("input", function (event) {
let a=document.getElementById('CreatorInput');
if (input_3.validity.patternMismatch) {
  a.style.display='block';

} else {
  a.style.display='none';
}
});
input_4.addEventListener("input", function (event) {
let a=document.getElementById('ScreenwriterInput');
if (input_4.validity.patternMismatch) {
  a.style.display='block';

} else {
  a.style.display='none';
}
});
input_5.addEventListener("input", function (event) {
let a=document.getElementById('ProducerInput');
if (input_5.validity.patternMismatch) {
  a.style.display='block';

} else {
  a.style.display='none';
}
});
input_6.addEventListener("input", function (event) {
let a=document.getElementById('OperatorInput');
if (input_6.validity.patternMismatch) {
  a.style.display='block';

} else {
  a.style.display='none';
}
});
input_7.addEventListener("input", function (event) {
let a=document.getElementById('ComposeInput');
if (input_7.validity.patternMismatch) {
  a.style.display='block';

} else {
  a.style.display='none';
}
});
input_8.addEventListener("input", function (event) {
let a=document.getElementById('BudgetInput');
if (input_8.validity.patternMismatch) {
  a.style.display='block';

} else {
  a.style.display='none';
}
});
input_9.addEventListener("input", function (event) {
let a=document.getElementById('CasierInput');
if (input_9.validity.patternMismatch) {
  a.style.display='block';

} else {
  a.style.display='none';
}
});
input_10.addEventListener("input", function (event) {
let a=document.getElementById('LimitInput');
if (input_10.validity.patternMismatch) {
  a.style.display='block';

} else {
  a.style.display='none';
}
});
input_11.addEventListener("input", function (event) {
let a=document.getElementById('WayInput');
if (input_11.validity.patternMismatch) {
  a.style.display='block';

} else {
  a.style.display='none';
}
});
input_12.addEventListener("input", function (event) {
let a=document.getElementById('DateInput');
if (input_12.validity.patternMismatch) {
  a.style.display='block';

} else {
  a.style.display='none';
}
});


//По кнопке отправить вызываем обработчик событий, который собирает данные с формы и помещает их в localStorage
var parent = document.getElementById('component');

let buttonCreate=document.getElementById('submitButton');
buttonCreate.addEventListener('click',createNewCard);

function createNewCard(){
/* let testForm = document.getElementById('formForMovies'); 
testForm.onsubmit = function(event) { event.preventDefault();} */

let count=0;
let inputClass=document.getElementsByClassName('valueOfInputs');
let inputClassdescrp=document.getElementsByClassName('inputs');
for(let i=0;i<inputClass.length;i++){
console.log(inputClass.length);
if(inputClass[i].value.length==0||inputClass[i].validity.patternMismatch){
  inputClassdescrp[i].style.display='block';
}
else{
  inputClassdescrp[i].style.display='none';
  ++count;
}
}

if(count==14){
let greeting=document.getElementsByClassName('greeting')[0];
greeting.style.display='none';

let upGreeting =document.getElementById('imgGreeatingUp');
upGreeting.style.display='block';
let newelem = document.createElement('div');
newelem.classList.add('innerComponent');

//Не дает перезагружаться странице по submit
/*let testForm = document.getElementById('formForMovies'); 
testForm.onsubmit = function(event) { event.preventDefault();} */

//Запись значений в массив значений из формы
let arrValues=[];
for(let i=0;i<13;i++){
    arrValues.push(document.FORM[i].value);
}

//Вызов input с изображением и его передача в функцию
let inputFile = document.getElementById('imgPoster').files;
handleFileSelect(inputFile[0]);

function handleFileSelect(imgFile) {
    let reader = new FileReader();

      reader.onload = (function(theFile) {
        return function(e) {
            let p = document.createElement('div');
            p.classList.add('classforImg');
            p.style.marginTop='0';
          p.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
            
            newelem.appendChild(p);
            arrValues.push(e.target.result);
            localStorage.setItem(localStorage.length,arrValues);
            
          addText();
          window.location.reload();
        };
      })(imgFile);
     
      reader.readAsDataURL(imgFile);
      window.location.reload();
    }
   
function addText(){    
  
    let elemTextafterImg = document.createElement('div');
    elemTextafterImg.classList.add('componentAfterImg');

    let elemText = document.createElement("p");
    elemText.innerHTML = arrValues[0];
    let elemText2 = document.createElement("p");
    elemText2.innerHTML ="Страна: "+ arrValues[1];
    let elemText3 = document.createElement("p");
    elemText3.innerHTML ="Жанр: "+ arrValues[2];
    let elemText4 = document.createElement("p");
    elemText4.innerHTML = "Режиссер: "+arrValues[3];
    let elemText5 = document.createElement("p");
    elemText5.innerHTML = "Сценарист: "+arrValues[4];

    let elemText6 = document.createElement("p");
    elemText6.innerHTML ="Продюсер: "+ arrValues[5];
    let elemText7 = document.createElement("p");
    elemText7.innerHTML ="Оператор: "+ arrValues[6];
    let elemText8 = document.createElement("p");
    elemText8.innerHTML ="Композитор: "+ arrValues[7];
    let elemText9 = document.createElement("p");
    elemText9.innerHTML ="Бюджет: " +arrValues[8]+"$";
    let elemText10 = document.createElement("p");
    elemText10.innerHTML = "Мировые сборы: " +arrValues[9]+"$";
    let elemText11 = document.createElement("p");
    elemText11.innerHTML = arrValues[10]+"+";
    let elemText12 = document.createElement("p");
    elemText12.innerHTML ="Минут: "+ arrValues[11];
    let elemText13 = document.createElement("p");
    elemText13.innerHTML =" Год " +arrValues[12];

    let deleteButton = document.createElement("a");
    deleteButton.setAttribute('href', '#');   
    deleteButton.innerHTML="&times";
    deleteButton.classList.add('deleteButtonForCard');
    deleteButton.setAttribute('id',localStorage.length-1);

    elemTextafterImg.appendChild(elemText);
    elemTextafterImg.appendChild(elemText2);
    elemTextafterImg.appendChild(elemText3);
    elemTextafterImg.appendChild(elemText4);
    elemTextafterImg.appendChild(elemText5);
    elemTextafterImg.appendChild(elemText6);
    elemTextafterImg.appendChild(elemText7);
    elemTextafterImg.appendChild(elemText8);
    elemTextafterImg.appendChild(elemText9);
    elemTextafterImg.appendChild(elemText10);
    elemTextafterImg.appendChild(elemText11);
    elemTextafterImg.appendChild(elemText12);
    elemTextafterImg.appendChild(elemText13);
    elemTextafterImg.appendChild(deleteButton);

    newelem.appendChild(elemTextafterImg);
    parent.appendChild(newelem);
    
}
}
} 

//При показать все карточки высвечиваются


let buttonShowAll=document.getElementById('showAllBtn');
buttonShowAll.addEventListener('click',get_element);

var parent = document.getElementById('component');
function get_element() {
let greeting=document.getElementsByClassName('greeting')[0];
greeting.style.display='none';
let upGreeting =document.getElementById('imgGreeatingUp');
upGreeting.style.display='block';

let pane = document.getElementById('component');
pane.innerHTML='';
for(let i=0;i<localStorage.length;i++){
   
    let key = localStorage.key(i);
    let str=localStorage.getItem(key);

    var newelem = document.createElement('div');
    newelem.classList.add('innerComponent');

    let elemTextafterImg = document.createElement('div');
    elemTextafterImg.classList.add('componentAfterImg');
    
    let arr=str;
    arr=arr.split(',');
    var p = document.createElement('div');
    p.classList.add('classforImg');
   
    let count=str.indexOf('data:image');
    let strForImg=str.slice(count);

    p.innerHTML += ['<img class="thumb" src="', strForImg,
                        '" title="test"/>'].join('');
        
    newelem.appendChild(p);
        
    let elemText = document.createElement("p");
    elemText.innerHTML = arr[0];
    let elemText2 = document.createElement("p");
    elemText2.innerHTML ="Страна: "+ arr[1];
    let elemText3 = document.createElement("p");
    elemText3.innerHTML ="Жанр: "+ arr[2];
    let elemText4 = document.createElement("p");
    elemText4.innerHTML = "Режиссер: "+arr[3];
    let elemText5 = document.createElement("p");
    elemText5.innerHTML = "Сценарист: "+arr[4];

    let elemText6 = document.createElement("p");
    elemText6.innerHTML ="Продюсер: "+ arr[5];
    let elemText7 = document.createElement("p");
    elemText7.innerHTML ="Оператор: "+ arr[6];
    let elemText8 = document.createElement("p");
    elemText8.innerHTML ="Композитор: "+ arr[7];
    let elemText9 = document.createElement("p");
    elemText9.innerHTML ="Бюджет: " +arr[8]+"$";
    let elemText10 = document.createElement("p");
    elemText10.innerHTML = "Мировые сборы: " +arr[9]+"$";
    let elemText11 = document.createElement("p");
    elemText11.innerHTML = arr[10]+"+";
    let elemText12 = document.createElement("p");
    elemText12.innerHTML ="Минут: "+ arr[11];
    let elemText13 = document.createElement("p");
    elemText13.innerHTML =" Год " +arr[12];

    let deleteButton = document.createElement("a");
    deleteButton.setAttribute('href', '#');   
    deleteButton.innerHTML="&times";
    deleteButton.classList.add('deleteButtonForCard');
    deleteButton.setAttribute('id',key);


    elemTextafterImg.appendChild(elemText);
    elemTextafterImg.appendChild(elemText2);
    elemTextafterImg.appendChild(elemText3);
    elemTextafterImg.appendChild(elemText4);
    elemTextafterImg.appendChild(elemText5);
    elemTextafterImg.appendChild(elemText6);
    elemTextafterImg.appendChild(elemText7);
    elemTextafterImg.appendChild(elemText8);
    elemTextafterImg.appendChild(elemText9);
    elemTextafterImg.appendChild(elemText10);
    elemTextafterImg.appendChild(elemText11);
    elemTextafterImg.appendChild(elemText12);
    elemTextafterImg.appendChild(elemText13);
    elemTextafterImg.appendChild(deleteButton);

    newelem.appendChild(elemTextafterImg);
    parent.appendChild(newelem);

    }

}

//Фильтр
let check1=document.getElementById('checkboxesGenre');
check1.addEventListener('click',filter);
let check2=document.getElementById('checkboxesCountry');
check2.addEventListener('click',filter);
let check3=document.getElementById('checkboxesYear');
check3.addEventListener('click',filter);
/*
let check=document.getElementsByClassName('checkNavigation')[0];
check.onclick=*/
function filter(){


let pane = document.getElementById('component');
pane.innerHTML='';
let arrayGenre=[];
let mainArrayGenre=[];

let arrayCountry=[];
let mainArrayCountry=[];

let arrayYear=[];
let mainArrayYear=[];

let end=[];

var checkboxesGenre = document.getElementsByClassName('genre');
for(let i=0;i<checkboxesGenre.length;i++){
if(checkboxesGenre[i].checked){
  arrayGenre.push(checkboxesGenre[i].value);
}
}
if(arrayGenre.length!=0){
for(let i=0;i<localStorage.length;i++){
let key = localStorage.key(i);
let str=localStorage.getItem(key);

let arr=str;
arr=arr.split(',');
for(let j=0;j<arrayGenre.length;j++){
    if(arr[2].toLowerCase()==arrayGenre[j].toLowerCase()){
      mainArrayGenre.push(key);
    }
  }
}
if(end.length!=0){
  end = end.filter(i => mainArrayGenre.includes(i));
}else{
  end=mainArrayGenre;
}

}

var checkboxesCountry = document.getElementsByClassName('country');
for(let i=0;i<checkboxesCountry.length;i++){
if(checkboxesCountry[i].checked){
  arrayCountry.push(checkboxesCountry[i].value);
}
}
if(arrayCountry.length!=0){
for(let i=0;i<localStorage.length;i++){
  let key = localStorage.key(i);
  let str=localStorage.getItem(key);
  
  let arr=str;
  arr=arr.split(',');
  for(let j=0;j<arrayCountry.length;j++){
      if(arr[1].toLowerCase()==arrayCountry[j].toLowerCase()){
        mainArrayCountry.push(key);
      }
  }
}

if(end.length!=0){

  end = end.filter(i => mainArrayCountry.includes(i));
  
}else{
  end=mainArrayCountry;
}

}

var checkboxesYear = document.getElementsByClassName('year');
for(let i=0;i<checkboxesYear.length;i++){
if(checkboxesYear[i].checked){
  arrayYear.push(checkboxesYear[i].value);
}
}
if(arrayYear.length!=0){
for(let i=0;i<localStorage.length;i++){
  let key = localStorage.key(i);
  let str=localStorage.getItem(key);
  
  let arr=str;
  arr=arr.split(',');
  for(let j=0;j<arrayYear.length;j++){
      if(arr[12]==arrayYear[j]){
        mainArrayYear.push(key);
      }
  }
}

if(end.length!=0){

  end = end.filter(i => mainArrayYear.includes(i));
}else{
  end=mainArrayYear;
}
}

for(let i=0;i<end.length;i++){
let greeting=document.getElementsByClassName('greeting')[0];
greeting.style.display='none';

let upGreeting =document.getElementById('imgGreeatingUp');
upGreeting.style.display='block';

let key = end[i];
let str=localStorage.getItem(key);

var newelem = document.createElement('div');
newelem.classList.add('innerComponent');

let elemTextafterImg = document.createElement('div');
elemTextafterImg.classList.add('componentAfterImg');

let arr=str;
arr=arr.split(',');
var p = document.createElement('div');
p.classList.add('classforImg');

let count=str.indexOf('data:image');
let strForImg=str.slice(count);

p.innerHTML += ['<img class="thumb" src="', strForImg,
                    '" title="test"/>'].join('');
    
newelem.appendChild(p);
    
let elemText = document.createElement("p");
elemText.innerHTML = arr[0];
let elemText2 = document.createElement("p");
elemText2.innerHTML ="Страна: "+ arr[1];
let elemText3 = document.createElement("p");
elemText3.innerHTML ="Жанр: "+ arr[2];
let elemText4 = document.createElement("p");
elemText4.innerHTML = "Режиссер: "+arr[3];
let elemText5 = document.createElement("p");
elemText5.innerHTML = "Сценарист: "+arr[4];

let elemText6 = document.createElement("p");
elemText6.innerHTML ="Продюсер: "+ arr[5];
let elemText7 = document.createElement("p");
elemText7.innerHTML ="Оператор: "+ arr[6];
let elemText8 = document.createElement("p");
elemText8.innerHTML ="Композитор: "+ arr[7];
let elemText9 = document.createElement("p");
elemText9.innerHTML ="Бюджет: " +arr[8]+"$";
let elemText10 = document.createElement("p");
elemText10.innerHTML = "Мировые сборы: " +arr[9]+"$";
let elemText11 = document.createElement("p");
elemText11.innerHTML = arr[10]+"+";
let elemText12 = document.createElement("p");
elemText12.innerHTML ="Минут: "+ arr[11];
let elemText13 = document.createElement("p");
elemText13.innerHTML =" Год " +arr[12];

let deleteButton = document.createElement("a");
deleteButton.setAttribute('href', '#');   
deleteButton.innerHTML="&times";
deleteButton.classList.add('deleteButtonForCard');
deleteButton.setAttribute('id',key);


elemTextafterImg.appendChild(elemText);
elemTextafterImg.appendChild(elemText2);
elemTextafterImg.appendChild(elemText3);
elemTextafterImg.appendChild(elemText4);
elemTextafterImg.appendChild(elemText5);
elemTextafterImg.appendChild(elemText6);
elemTextafterImg.appendChild(elemText7);
elemTextafterImg.appendChild(elemText8);
elemTextafterImg.appendChild(elemText9);
elemTextafterImg.appendChild(elemText10);
elemTextafterImg.appendChild(elemText11);
elemTextafterImg.appendChild(elemText12);
elemTextafterImg.appendChild(elemText13);
elemTextafterImg.appendChild(deleteButton);

newelem.appendChild(elemTextafterImg);
parent.appendChild(newelem);

}
end=[];
}

//Раскрытие checbox
var expanded1 = false;

function showCheckboxesGenre() {
var checkboxes = document.getElementById("checkboxesGenre");
if (!expanded1) {
checkboxes.style.display = "block";
expanded1 = true;
} else {
checkboxes.style.display = "none";
expanded1 = false;
}
}

var expanded2 = false;

function showCheckboxesCountry() {
var checkboxes = document.getElementById("checkboxesCountry");
if (!expanded2) {
checkboxes.style.display = "block";
expanded2 = true;
} else {
checkboxes.style.display = "none";
expanded2 = false;
}
}

var expanded3 = false;

function showCheckboxesYear() {
var checkboxes = document.getElementById("checkboxesYear");
if (!expanded3) {
checkboxes.style.display = "block";
expanded3 = true;
} else {
checkboxes.style.display = "none";
expanded3 = false;
}
}

//Видеоадаптер+удаление


let videoAdapt=document.getElementById('component');
videoAdapt.onclick=function(event){

if (event.target.className != 'deleteButtonForCard') {
video()
}else{
let z=event.target.getAttribute('id');
localStorage.removeItem(z);
console.log(z);
let pane = event.target.closest('.innerComponent');
pane.remove();
}

function video(){
if (event.target.className != 'thumb'&& event.target.className != 'componentAfterImg'&&event.target.className != 'innerComponent') return;

let a=document.getElementById('component');
let b=document.createElement('div');
b.classList.add('divForVideo');
b.innerHTML += ['<video autoplay src="" controls></video>'].join('');
let deleteButtonForVideo = document.createElement("a");
deleteButtonForVideo.setAttribute('href', '#');   
deleteButtonForVideo.innerHTML="&times";
deleteButtonForVideo.classList.add('deleteButtonForVideo');
deleteButtonForVideo.innerHTML;
b.appendChild(deleteButtonForVideo);
a.appendChild(b);

let closeVideoAdapt=document.getElementsByClassName('deleteButtonForVideo')[0];
    closeVideoAdapt.onclick=function(e){
    let button=document.getElementsByClassName('divForVideo')[0];
    button.remove();
}
}

}


//Появление главной страницы
let upGreetingЕкгу =document.getElementById('imgGreeatingUp');
upGreetingЕкгу.onclick=function(){
var uncheck=document.getElementsByTagName('input');
for(var i=0;i<uncheck.length;i++)
{
if(uncheck[i].type=='checkbox')
{
uncheck[i].checked=false;
}
}
var check1=document.getElementById('checkboxesGenre');
var check2=document.getElementById('checkboxesYear');
var check3=document.getElementById('checkboxesCountry');
check1.style.display='none';
check2.style.display='none';
check3.style.display='none';

let pane = document.getElementById('component');
pane.innerHTML='';
let greeting=document.getElementsByClassName('greeting')[0];
greeting.style.display='block';
let upGreeting =document.getElementById('imgGreeatingUp');
upGreeting.style.display='none';

}