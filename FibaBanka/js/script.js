// *** Bankacılık Menüsü açılıp / kapanma ***
/* Sorulacak -- JS ile yapma? */
// 1- JS
// const showHide = document.querySelector('#global__nav');

	// 1. yöntem
// showHide.addEventListener('click',function(){
// 	// document.getElementsByClassName('.navigation').toggle('fast');

// 	// document.getElementsByClassName('.navigation').style.toggle('fast');

// 	document.querySelector('.navigation').style.display = "none";
// 	// document.querySelector('.navigation').style.display = "initial";

// });

	// 2. yöntem
// function Close(){
// 	document.querySelector('.navigation').style.display = "none";
// }
// function Open(){
// 	document.querySelector('.navigation').style.display = "initial";
// }
// showHide.addEventListener('click', Close);
// showHide.addEventListener('click', Open);



// 2- JQuery
$(document).ready(function () {

	$('#global__nav').click(function () {
		$('.navigation').toggle('fast');  
	}); 

});







// // *** Bankacılık Menüsü açılıp / kapanma  || KAPAT ***
// /* Sorulacak -- */
// const close = document.querySelector('.fa-times');
// const elementToClose = document.querySelector('.global__link');

// close.addEventListener('click',function(){  
// 	elementToClose.style.display = "none"
// });








// *** İNTERNET BANKACILIĞI ***













// *** PRATIC MENU ***
const pm1 = document.querySelector('.pm1');
const pm2 = document.querySelector('.pm2');
const pm3 = document.querySelector('.pm3');
const pm4 = document.querySelector('.pm4');
const pm5 = document.querySelector('.pm5');
const pm6 = document.querySelector('.pm6');

const part2Title = "Fibabankalı Olmak Çok Kolay!";
const part2Text = "Fibabanka Mobil uygulamamız üzerinden müşteri temsilcilerimiz ile görüntülü görüşme yaparak veya görüntülü görüşme yapmadan da müşterimiz olabilir, sizlere sunacağımız avantajlardan anında yararlanmaya başlayabilirsiniz.";

const part3Title = "Vadesiz Hesabın Özgürlüğü, Vadeli Hesabın Getirisiyle Kiraz Hesap’ta!";
const part3Text = "TL'ye %19, USD'ye %1, Altın'a %0,55, Gümüş'e %0,20, EUR'ye %0,20 ve GBP'ye %0,25 yüksek faizle paranızı değerlendirme fırsatı Kiraz Hesap'ta! Hemen başvurun, anında Kiraz Hesap’ın avantajlarla dolu dünyasına katılın.";


pm1.addEventListener('click', function () {
	pm1.classList.add('selected');
	pm2.classList.remove('selected');
	pm3.classList.remove('selected');
	pm4.classList.remove('selected');
	pm5.classList.remove('selected');
	pm6.classList.remove('selected');
	
	pm2.children[0].children[0].setAttribute('src', 'img/main/2-1.svg');
	pm3.children[0].children[0].setAttribute('src', 'img/main/3-1.svg');
	pm4.children[0].children[0].setAttribute('src', 'img/main/4-1.svg');
	pm5.children[0].children[0].setAttribute('src', 'img/main/5-1.svg');
	pm6.children[0].children[0].setAttribute('src', 'img/main/6-1.svg');

	
});
pm2.addEventListener('click', function () {
	pm1.classList.remove('selected');
	pm2.classList.add('selected');
	pm3.classList.remove('selected');
	pm4.classList.remove('selected');
	pm5.classList.remove('selected');
	pm6.classList.remove('selected');	

	// // attribute ait tüm value değişti
	// if (pm2.classList === 'praticSubMenu__item pm2 selected'){
	// 	pm2.children[0].children[0].setAttribute('src', 'img/main/2-2.svg');
	// }

	pm2.children[0].children[0].setAttribute('src', 'img/main/2-2.svg');
	pm3.children[0].children[0].setAttribute('src', 'img/main/3-1.svg');
	pm4.children[0].children[0].setAttribute('src', 'img/main/4-1.svg');
	pm5.children[0].children[0].setAttribute('src', 'img/main/5-1.svg');
	pm6.children[0].children[0].setAttribute('src', 'img/main/6-1.svg');
	
	document.querySelector('.praticMenuContent__title').innerHTML = part2Title;
	document.querySelector('.praticMenuContent__text').innerHTML = part2Text;
	document.querySelector('.praticMenuContent__btn').children[2].style.display='none'  // ??? 

	
});

pm3.addEventListener('click', function () {
	pm1.classList.remove('selected');
	pm2.classList.remove('selected');
	pm3.classList.add('selected');
	pm4.classList.remove('selected');
	pm5.classList.remove('selected');
	pm6.classList.remove('selected');
		
	pm2.children[0].children[0].setAttribute('src', 'img/main/2-1.svg');
	pm3.children[0].children[0].setAttribute('src', 'img/main/3-2.svg');
	pm4.children[0].children[0].setAttribute('src', 'img/main/4-1.svg');
	pm5.children[0].children[0].setAttribute('src', 'img/main/5-1.svg');
	pm6.children[0].children[0].setAttribute('src', 'img/main/6-1.svg');

	document.querySelector('.praticMenuContent__title').innerHTML = part3Title;
	document.querySelector('.praticMenuContent__text').innerHTML = part3Text;
	document.querySelector('.praticMenuContent__btn').children[2].style.display='inline-block'
});
pm4.addEventListener('click', function () {
	pm1.classList.remove('selected');
	pm2.classList.remove('selected');
	pm3.classList.remove('selected');
	pm4.classList.add('selected');
	pm5.classList.remove('selected');
	pm6.classList.remove('selected');

	pm2.children[0].children[0].setAttribute('src', 'img/main/2-1.svg');
	pm3.children[0].children[0].setAttribute('src', 'img/main/3-1.svg');
	pm4.children[0].children[0].setAttribute('src', 'img/main/4-2.svg');
	pm5.children[0].children[0].setAttribute('src', 'img/main/5-1.svg');
	pm6.children[0].children[0].setAttribute('src', 'img/main/6-1.svg');

	document.querySelector('.praticMenuContent__left').innerHTML = "Sonra bakılabilir";
});
pm5.addEventListener('click', function () {
	pm1.classList.remove('selected');
	pm2.classList.remove('selected');
	pm3.classList.remove('selected');
	pm4.classList.remove('selected');
	pm5.classList.add('selected');
	pm6.classList.remove('selected');

	pm2.children[0].children[0].setAttribute('src', 'img/main/2-1.svg');
	pm3.children[0].children[0].setAttribute('src', 'img/main/3-1.svg');
	pm4.children[0].children[0].setAttribute('src', 'img/main/4-1.svg');
	pm5.children[0].children[0].setAttribute('src', 'img/main/5-2.svg');
	pm6.children[0].children[0].setAttribute('src', 'img/main/6-1.svg');

	document.querySelector('.praticMenuContent__left').innerHTML = "Sonra bakılabilir";
});
pm6.addEventListener('click', function () {
	pm1.classList.remove('selected');
	pm2.classList.remove('selected');
	pm3.classList.remove('selected');
	pm4.classList.remove('selected');
	pm5.classList.remove('selected');
	pm6.classList.add('selected');

	pm2.children[0].children[0].setAttribute('src', 'img/main/2-1.svg');
	pm3.children[0].children[0].setAttribute('src', 'img/main/3-1.svg');
	pm4.children[0].children[0].setAttribute('src', 'img/main/4-1.svg');
	pm5.children[0].children[0].setAttribute('src', 'img/main/5-1.svg');
	pm6.children[0].children[0].setAttribute('src', 'img/main/6-2.svg');

	document.querySelector('.praticMenuContent__left').innerHTML = "Sonra bakılabilir";
});
