import {createFormLogin,createFormRegister,createFormForgetPassword} from './form.js'
import {isEmpty,isAlreadyExist,formatNumber} from './function.js'
import { isPipelinePrimaryTopicReference } from '@babel/types'
$(document).ready(function(){

	/** for section header menu right  */
	function replaceTextWithIcon(){
		if($(window).width() < 1030){
			if(!isAlreadyExist('.icon-phone')){
				$('#requestACall').css('display','none')
				$('#hd-menu-right .block').append('<span class="icon-phone ml-3"><i class="fas fa-phone-volume icon"></i></span></span>')
			}
		}
		else{
			$('#requestACall').css('display','block')
			$('.icon-phone').remove()
		}
	}

	function closeMenuLeftHeader(){
		$('#hd-menu-left').removeClass('show')
		$('#header-menu').remove()
		$('.overlay').remove()
		$('#header #hd-menu-left .nav-item .nav-link').css('color','white')
		$('#pages .nav-link').css('border-left','0.1rem solid #7d7474')
		$('#icon-user .icon').css('color','#333')
	}

	function createBoxSearch(){
		var stringData = '';
		var listSearch = [
			{
				'id':1,
				'content':'chair'
			},
			{	'id':2,
				'content':'stand'
			},
			{	'id':3,
				'content':'studio'
			},
			{	'id':4,
				'content':'modern',
			},
			{	'id':5,
				'content':'dresser'
			},
			{	'id':6,
				'content':'sofa'
			},
			{	'id':7,
				'content':'bedroom'
			},
			{
				'id':8,
				'content':'wood'
			},
			{
				'id':9,
				'content':'walnut'
			},
			{	'id':10,
				'content':'office',
			},{
				'id':11,
				'content':'bed'
			}
		];
		listSearch.forEach(value => {
			stringData += `<span id="${value.id}">${value.content}</span>`
		})
		var boxSearch = `
			<div class="box-search pb-5">
				<div id="wrapper-search">
					<h5 class="title">Search demos.reytheme.com/valencia</h5>
					<form id="formSearch">
						<input type="text" placeholder="Type to search..." name="txt_search" id="txt-search" class="pb-3"/>
					</form>
					<h4 class="mt-3">Trending</h4>
					<div class="trending d-flex mt-2">
						${stringData}
					</div>
				</div>
			</div>`
			$('#box-search').append(boxSearch)
			$('#box-search').css('transform','translateY(0)')
			$('#box-search').css('opacity','1')
			$('#box-search').css('padding-top','3rem')
			$('#header').css('background-color','white')
			$('#header').css('color','#333')
			$('#header .nav-item .nav-link').css('color','#333')
			$('#header .icon').css('color','#333')
			$('#requestACall').css('color','#333')
			$('#btnSearch .icon').css('color','#333')
			$('#btn-link-catalogue').css('border','0.1rem solid #333')
			$('#pages .nav-link').css('border-left','none')
			$('body').append('<div class="overlay"></div>')
	}
	function closeBoxSearch(){
		$('#box-search').css('transform','translateY(-80px)')
		$('#box-search').css('opacity','0')
		$('#box-search').css('padding-top','0')
		$('.box-search').remove();
		$('#header').css('background-color','')
		$('#header').css('color','white')
		$('#header .nav-item .nav-link').css('color','white')
		$('#header .icon').css('color','white')
		$('#btnSearch .icon').css('color','white')
		$('#btn-link-catalogue').css('border','0.1rem solid white')
		$('#requestACall').css('color','white')
		$('#btnSearch .icon')[0].classList.replace('fa-times','fa-search')
		$('#pages .nav-link').css('border-left','0.1rem solid #7d7474')
		$('.overlay').remove()
	}
	function deleteThePreviousForm(){
		$('#lightBox div')[1].remove()
	}

	/** open menu (Only apply to screens smaller than 1030px) */
	$('#icon-menu').click(function(){
		$('#hd-menu-left').addClass('show')
		$('#hd-menu-left').prepend('<div id="header-menu"><button id="close-menu"><i class="fas fa-times icon" id="icon-close-menu"></i></button></div>')
		$('#header #hd-menu-left .nav-item .nav-link').css('color','#333')
		
		/** handle delete box search */
		if(isAlreadyExist('.box-search')){
			closeBoxSearch()
			$('#header #hd-menu-left .nav-item .nav-link').css('color','#333')
			$('#close-menu .icon').css('color','#333')
		}
		/** handle delete lightbox */
		if(isAlreadyExist('#lightBox')){
			$('#lightBox').css('display','none')			
			$('#form-area').remove()
		}
		$('#icon-user .icon').css('color','#333')
		$('#pages .nav-link').css('border-left','none')
		$('body').append('<div class="overlay"></div>')
	})

	/** close menu (Only apply to screens smaller than 1030px) */
	$(document).on('click','#icon-close-menu',function(){
		$('.overlay').remove()
		closeMenuLeftHeader()
	})
	$(document).on('click','.overlay',function(){
		closeMenuLeftHeader()
	})
	
	replaceTextWithIcon()

	/** handle when hovering on the page item */
	$('#pages').mouseover(function(){
		if(isAlreadyExist('.box-search')){
			closeBoxSearch()
			$('#header #hd-menu-left .nav-item .nav-link').css('color','white')
			$('#close-menu .icon').css('color','#333')
		}
		/** handle delete lightbox */
		if(isAlreadyExist('#lightBox')){
			$('#lightBox').css('display','none')			
			$('#form-area').remove()
		}
		if($('div').hasClass('.overlay') === true){
			$('body').append('<div class="overlay"></div>')
		}
	})

	$('#pages').mouseleave(function(){
		$('.overlay').remove()
	})

	/** handle close with open box search */
	$('#btnSearch').click(function(){
		if(!isAlreadyExist('.box-search')){
			if($(this).children()[0].classList.contains('fa-search')){
				$(this).children()[0].classList.replace('fa-search','fa-times')
			}
			createBoxSearch()
		}
		else{
			closeBoxSearch()
			$('#header #hd-menu-left .nav-item .nav-link').css('color','white')
			$('#close-menu .icon').css('color','#333')
		}
		/** handle delete lightbox */
		if(isAlreadyExist('#lightBox')){
			$('#lightBox').css('display','none')			
			$('#form-area').remove()
		}
		/** handle menu closure */
		$('#hd-menu-left').removeClass('show')
		$('#header-menu').remove()
		if($(window).width() > 1380) return
		$('#header #hd-menu-left .nav-item .nav-link').css('color','white')
	

	})

	var currentForm = 'login'
	/** open and close form login or register or forget-password */
	$('#btnUser').click(function(){
		if(isAlreadyExist('.box-search')){
			closeBoxSearch()
			$('#header #hd-menu-left .nav-item .nav-link').css('color','#333')
			$('#close-menu .icon').css('color','#333')
		}
		/** handle menu closure */
		$('#hd-menu-left').removeClass('show')
		$('body').append('<div class="overlay"></div>')
		$('#header-menu').remove()
		$('#header #hd-menu-left .nav-item .nav-link').css('color','white')
		if(currentForm === 'login'){
			if(!isAlreadyExist('#formLogin')){
				createFormLogin()
				$('#formLogin').animate({top:'20px'})
				$('#lightBox').fadeIn().css('display','flex')
			}
			else{
				$('#formLogin').animate({top:'0px'})
				$('#lightBox').fadeOut().css('display','none')			
				$('#form-area').remove()
				$('.overlay').remove()
			}
		}
		else if(currentForm === 'create account'){
			if(!isAlreadyExist('#formRegister')){
				createFormRegister()
				$('#formRegister').animate({top:'20px'})
				$('#lightBox').fadeIn().css('display','flex')
			}
			else{
				$('#formRegister').animate({top:'0px'})
				$('#lightBox').fadeOut().css('display','none')
				$('#form-area').remove()
				$('.overlay').remove()
			}
		}
		else{
			if(!isAlreadyExist('#formForgetPassword')){
				createFormForgetPassword()
				$('#formForgetPassword').animate({top:'20px'})
				$('#lightBox').fadeIn().css('display','flex')
			}
			else{
				$('#formForgetPassword').animate({top:'20px'})
				$('#lightBox').fadeOut().css('display','none')
				$('#form-area').remove()
				$('.overlay').remove()
			}
		}
	})
	/** handle the transfer of login, register, and forgot passwords */
	$(document).on('click','.btnAction',function(){
		var action = $(this).data('action')
		deleteThePreviousForm()
		if(action === 'login'){
			createFormLogin()
			currentForm = action
		}
		else if(action === 'create account'){
			createFormRegister()
			currentForm = action
		}
		else{
			createFormForgetPassword()
			currentForm = action
		}
	})
	/** handle when entering characters into the form **/
	$(document).on('keyup','.enter-input',function(){
		var content = $(this).val()
		var id = $(this).attr('id')
		if(!isEmpty(content)){
			$('#label-'+id).css('transform','translate(0,-78px)')
		}
		else{
			$('#label-'+id).css('transform','translate(13px,-35px)')
		}
	})

	$(window).resize(function(){
		replaceTextWithIcon()
		if($(window).width() < 576){
			$('#banner').css('width','100%')
		}
	})


	$(window).scroll(function(){
		// reduce the screen width when scrolling, provided that the screen width is greater than 576px
		if($(window).width() > 576){
			if($(window).scrollTop() > 10){
				$('#banner').css('width','96%')
			}
			else{
				$('#banner').css('width','100%')
			}
		}
		/** If the scroll bar exceeds the height of 150, it will close the search boxes, users, pages if they are enabled */
		if($(window).scrollTop() > 150){
			if(isAlreadyExist('.box-search')){
				closeBoxSearch()
				$('#header #hd-menu-left .nav-item .nav-link').css('color','white')
				$('#close-menu .icon').css('color','#333')
			}
			if(isAlreadyExist('#lightBox')){
				$('#lightBox').css('display','none')			
				$('#form-area').remove()
			}
		}
	})

	var productSlideIndex = 0
	var status = 0;
	
	$(document).on('mouseover','.brick-in-image',function(){
		var id = $(this).parent().attr('id')
		
		var listItemSlide = $('#'+id+' .list-slide .slide-item')
		var bricks = $('#'+id+' .brick-in-image .item-dot')
		status++;
		if(status === 1){
			var interval = setInterval(function(){
				slideShowProduct(listItemSlide,bricks)
			},5000)
		}
		// productSlideIndex = 0
		$(document).on('mouseleave','.brick-in-image',function(){
			clearInterval(interval)
			status = 0
		})
	})

	function slideShowProduct(slides,bricks){
		for(let i=0;i<slides.length;i++){
			slides[i].classList.remove('active')
			bricks[i].classList.remove('active')
		}
		slides[productSlideIndex].classList.add('active')
		bricks[productSlideIndex].classList.add('active')
		if(productSlideIndex === slides.length - 1){
			productSlideIndex = 0
		}
		else{
			productSlideIndex++
		}
	}
})
export {isEmpty,isAlreadyExist,formatNumber};
