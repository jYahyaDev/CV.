'use strict';

//Selection des div contenant les images
var logo = document.querySelectorAll('.logo');
var bannierre = document.querySelector('.banniere'); //Animation scroll
/* var height = bannierre.clientHeight;
 */ document.addEventListener('scroll', function () {
  logo.forEach((log) => {
    if (scrollY >= 400) {
      log.classList.add('visible');
    } else if (scrollY < 300) {
      log.classList.remove('visible');
    }
  });
});

//Opacity bannierre

document.addEventListener('scroll', function () {
  if (scrollY > 295) {
    bannierre.classList.add('dispa');
  } else {
    bannierre.classList.remove('dispa');
  }
});

// Animation formation
//Selection des boutons et des div qui s'ajoutent
var simplonAdd = document.querySelector('.simplonAdd');
var btnSimplon = document.querySelector('.btnSimplon');
var btnAfpa = document.querySelector('.btnAfpa');
var afpaAdd = document.querySelector('.afpaAdd');
var btnEduc = document.querySelector('.btnEduc');
var educAdd = document.querySelector('.educAdd');

//Simplon
btnSimplon.addEventListener('click', function () {
  simplonAdd.classList.toggle('disparition');
  simplonAdd.classList.toggle('click');
  document.querySelector('.i').classList.toggle('green');
});
//Afpa
btnAfpa.addEventListener('click', function () {
  afpaAdd.classList.toggle('disparition');
  afpaAdd.classList.toggle('click');
  document.querySelector('.ia').classList.toggle('green');
});
//Educ
btnEduc.addEventListener('click', function () {
  educAdd.classList.toggle('disparition');
  educAdd.classList.toggle('click');
  document.querySelector('.ie').classList.toggle('green');
});
