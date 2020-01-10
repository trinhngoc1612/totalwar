$('.slider-game').slick({
	dots:false,
	accessibility:true, //điều hướng bằng thẻ và phím mũi tên
	adaptiveHeight: true, //chiều cao thích ứng 
	autoplay: false,
	autoplaySpeed: 1000,
	arrows: true, //mũi tên prev/next
  centerMode: true,
  centerPadding: '300px',
  slidesToShow: 1,
  variableWidth: false, //chiều rộng từng slide thay đổi
  useTransform: true,
  adaptiveHeight:true,
  infinite:true //lặp item
});