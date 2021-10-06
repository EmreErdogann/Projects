		// background slider ekleme  ||  (html-css-js)
		var sliderImg = document.getElementById('sliderImg')

		var images = new Array(
			"img/header/img-1.jpg",
			"img/header/img-2.jpg",
			"img/header/img-3.jpg",
			"img/header/img-4.jpg"
		);

		var len = images.length;
		var i = 0;

		function slider() {
			if (i > len - 1) {
				i = 0;
			}
			sliderImg.src = images[i];
			i++;
			setTimeout('slider()', 3000);
		}


		// Event Listener  ????????
		// const button =document.querySelector('.btn--1');
		// const input =document.querySelector('.inp--2');

		// function required(e){
		// 	let val;
		// 	val = e;
		// 	// val = e.target.parentElement.previousElementSibling.children[1];

		// 	if(input.value==''){
		// 		val = e.target.parentElement.previousElementSibling.children[1].children[0];			
				
		// 		}

		// 	console.log(val);

		// 	e.preventDefault();
		// }

		// button.addEventListener('click', required);
		// btn1.addEventListener('click', required);

		function requiredCheck(event){
			event.preventDefault();
			let phoneCode = document.getElementById('phoneCode').value;
			let phoneNumber = document.getElementById('phoneNumber').value;

			if(phoneCode=="+90" && phoneNumber==""){
				$('.req').html('Lütfen Telefon Numarası Giriniz!');
				$('.req').css({color:"red"});
			}else{
				$('.req').html('');
			}
		}
		

		// // // Yapılamadı, SORULACAK1, telefon kadları
		// // var inpu
		// ById("telefon");
		// // intlTelInput(input, ({
		// // 	// bu alan özel ayarlar ekleyebilirsiniz
		// // 	initialCountry: "tr"
		// // }));

		// $(document).ready(function () {
		// 	$('.iti__flag-container').click(function () {
		// 		var countryCode = $('.iti__selected-flag').attr('title');
		// 		var countryCode = countryCode.replace(/[^0-9]/g, '')
		// 		$('#telefon').val("");
		// 		$('#telefon').val("+" + countryCode + " " + $('#telefon').val());
		// 	});
		// });
		




		// OWL Carousel
		$(".owl-carousel").owlCarousel({
			margin: 2,
			loop : true,
			autoplay : true,
			autoplayTimeout : 5000,
			autoplayHoverPause : true,

			nav : true,
			navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],

			responsive: {
				0: {
					items: 1,					
				},
				600: {
					items: 2,					
				},
				1000: {
					items: 3,
				}
			}
		})
		//
