import {isEmpty,isAlreadyExist,formatNumber} from './function.js'
$(document).ready(function(){
	$('#buttonSearch').click(function(){
		$('#header .nav-item .nav-link').css('color','#333')
		$('#header .icon').css('color','#333')
		$('#buttonSearch .icon').css('color','#333')
		$('#button-link-catalogue').css('border','0.1rem solid #333')
		$('#requestACall').css('color','#333')
	})
	$('#buttonUser').click(function(){
		$('#header .nav-item .nav-link').css('color','#333')
		$('#header .icon').css('color','#333')
		$('#buttonSearch .icon').css('color','#333')
		$('#button-link-catalogue').css('border','0.1rem solid #333')
		$('#requestACall').css('color','#333')
	})

	$('#pages').mouseover(function(){
		$('#header #hd-menu-left .nav-item .nav-link').css('color','#333')
	})

	$(function(){
		$('.img-product-1').Lazy()
	})

	// Applies only when the screen size is greater than 1250px
	$(window).scroll(function(){
		if($(window).width() > 1250){
			createItemSocialFixed()
		}
	})

	$(window).resize(function(){
		$('.product-share').css('position','absolute')
		$('.product-share').css('top','100px')
		$('.product-share').css('left','-7vw')
		$('.product-share').css('bottom','unset')
	})

	$(function(){
		$('.img-product').Lazy()
	})

	$('.review').click(function(){
		$("#formReview").slideToggle()
	})

	/** handle rating */
	var ratingIndex = 0;
	$('.star').mouseover(function(){
		var index = $(this).attr('id')
		ratingIndex = index
		remove_background(index)
		for(let i=1;i<=index;i++){
			$('#'+i).children().removeClass('far')
			$('#'+i).children().addClass('fas')
		}
	})

	$('#rating').mouseleave(function(){
		console.log(ratingIndex)
	})

	function remove_background(){
		for(let i=1;i<=5;i++){
			$('#'+i).children().removeClass('fas')
			$('#'+i).children().addClass('far')
		}
	}

	function createItemSocialFixed(){
		var posHeightProductArea = $('.product .wrapper').height()
		if($(window).scrollTop() > posHeightProductArea - 100){
			$('.product-share').css('position','absolute')
			$('.product-share').css('top','unset')
			$('.product-share').css('left','-7vw')
			$('.product-share').css('bottom','0')
		}
		else{
			$('.product-share').css('position','fixed')
			$('.product-share').css('left','10vw')
			$('.product-share').css('bottom','unset')
			$('.product-share').css('top','25%')
		}
	}

	var imageIndex = 1
	var totalImage = 0
	var images = null
	$('.picture .img').click(function(){
		var parentId = $(this).parent().attr('id')
		images = $('#'+parentId).find('img')
		totalImage = images.length;
		makeImageSlide(images,totalImage)
	})
	/** make image slide */
	function makeImageSlide(images,totalImage){
		console.log(imageIndex)
		var html = `
			<div class="lightBoxImage">
				<div class="top">
					<div class="wrap d-flex justify-content-between mx-auto">
						<div id="left">
							<span>${imageIndex} / ${totalImage}</span>
						</div>
						<div id="right">
							<button id="buttonZoom" class="button"><i class="fas fa-search-plus"></i></button>
							<button id="buttonFullScreen" class="button"><i class="fas fa-expand"></i></button>
							<button id="buttonClose" class="button"><i class="fas fa-times"></i></button>
						</div>
					</div>
				</div>
				<div class="center d-flex justify-content-between align-items-center mx-auto">
					<button id="prev" class="button"><i class="fas fa-arrow-left"></i></button>
					<div id="wrapImage">
						<img class="img-primary" src="${images[imageIndex - 1].src}" alt="ảnh sản phẩm" title="ảnh sản phẩm" style="cursor:zoom-in;width:100%;height:100%;object-fit:cover;">
					</div>
					<button id="next" class="button"><i class="fas fa-arrow-right"></i></button>
				</div>
				<div class="bottom">
					<div class="wrap">
						<p>p26<p>
					</div>
				</div>
			</div>
		`
		$('body').append(html)
	}
	/** move on to the next image */
	$(document).on('click','#next',function(){
		imageIndex = imageIndex === totalImage ? imageIndex = 1 : imageIndex + 1
		makeImageSlide(images,totalImage)
	})
	// move on to the prev image
	$(document).on('click','#prev',function(){
		imageIndex = imageIndex === 1 ? imageIndex = totalImage : imageIndex - 1
		makeImageSlide(images,totalImage)
	})

	$(document).on('click','#buttonZoom',function(){
		$('.img-primary').toggleClass('zoom-in')
	})
	$(document).on('click','.img-primary',function(){
		$('.img-primary').toggleClass('zoom-in')
	})

	$(document).on('click','#buttonFullScreen',function(){
		openFullscreen()
		closeFullscreen()
	})
	$(document).on('click','#buttonClose',function(){
		$('.lightBoxImage').remove()
	})
	function openFullscreen() {	
		var elem = document.querySelector(".lightBoxImage");
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) { /* Firefox */
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) { /* IE/Edge */
			elem.msRequestFullscreen();
		}
	}
	function closeFullscreen() {
		var elem = document.querySelector(".lightBoxImage");
		if (document.exitFullscreen) {
		  document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
		  document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
		  document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
		  document.msExitFullscreen();
		}
	 
	}

})
