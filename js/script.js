
/*let modal = document.querySelector('.modal1');



first_button.addEventListener('click', function (evt) {
	evt.preventDefault();
	modal.classList.add('modal-flex');
})

modal.addEventListener('click', function () {
	modal.classList.remove('modal-flex');
})

*/
let form = document.querySelector('.flex-form');
let first_button = document.querySelector('.first_button');
let second_button = document.querySelector('.second_button');
let form_fst_child = form.querySelector('.qweqweqweqwe1');
let form_snd_child = form.querySelector('.qweqweqweqwe2');




first_button.addEventListener('click', function (evt) {
    evt.preventDefault();
    form.classList.add('anim1');

    form_fst_child.classList.add('anim1-1');
    form_snd_child.classList.add('anim1-2');
});








/*let form_move(){
	let elem = 
}
*/




// $(document).ready(function(){

//     $("#menu").on("click","a", function (event) {

//         //отменяем стандартную обработку нажатия по ссылке

//         event.preventDefault();

 

//         //забираем идентификатор бока с атрибута href

//         var id  = $(this).attr('href'),
//       //узнаем высоту от начала страницы до блока на который ссылается якорь

//             top = $(id).offset().top;
//        //анимируем переход на расстояние - top за 1500 мс

//         $('body,html').animate({scrollTop: top}, 1500);

//     });

// });
