import {isEmpty,isAlreadyExist,formatNumber} from './function.js'

	/**
	 *  Assigns a sidebar that fixes the layer right in the garelly-2 section if the roller slides to that part. 
	 * 	Applies only to screens larger than 768px
	 * */
	function handleSidebarRight(){
		if($(window).width() > 975){
			var bannerHeight = $('#banner').height()
			var productArea1 = $('#product-area-1').height()
			var productArea2 = $('#product-area-2').height()
			var productArea3 = $('#product-area-3').height()

			var pos = bannerHeight + productArea1 + productArea2
			var sidebarRight = document.getElementById('sidebar-right').style

			if($(window).scrollTop() > pos && $(window).scrollTop() < pos + (productArea3 - 650)){
				$('#sidebar-right').addClass('sidebar-fixed')
			}
			else if($(window).scrollTop() > pos + (productArea3 - 650)){
				$('#sidebar-right').removeClass('sidebar-fixed')
				$('#sidebar-right').css('bottom','0')
				sidebarRight.removeProperty('top')
			}
			else{
				$('#sidebar-right').removeClass('sidebar-fixed')
				$('#sidebar-right').css('top','0')
				
				sidebarRight.removeProperty('bottom')
			}
		}
		else{
			$('#sidebar-right').removeClass('.sidebar-fixed')
		}
	}
	function handleSidebarLeft(){
		if($(window).width() > 975){
			var bannerHeight = $('#banner').height()
			var productArea1 = $('#product-area-1').height()
			var productArea2 = $('#product-area-2').height()
			var productArea3 = $('#product-area-3').height()
			var productArea4 = $('#product-area-4').height()
			var slider = $('#slider').height()
			var pos = bannerHeight + productArea1 + productArea2 + productArea3 + slider;
			
			var sidebarLeft = document.getElementById('sidebar-left').style
			if($(window).scrollTop() > pos && $(window).scrollTop() < pos + (productArea4 - 600)){
				$('#sidebar-left').addClass('sidebar-fixed')
			}
			else if($(window).scrollTop() > pos + (productArea4 - 600)){
				$('#sidebar-left').removeClass('sidebar-fixed')
				$('#sidebar-left').css('bottom','0')
				sidebarLeft.removeProperty('top')
			}
			else{
				$('#sidebar-left').removeClass('sidebar-fixed')
				$('#sidebar-left').css('top','0')
				
				sidebarLeft.removeProperty('bottom')
			}
		}
		else{
			$('#sidebar-left').removeClass('.sidebar-fixed')
		}
	}

	$(window).resize(function(){
		if($(window).width() > 991){
			handleSidebarRight()
			handleSidebarLeft()
		}
	})

	$(window).scroll(function(){
		handleSidebarRight()
		handleSidebarLeft()
	})

	/** handle slides for main part */
	var currentSlide = 0
	var slides = $('#slider .slide-area .slide-item')
	var dots = $('#slider .dots .item-dot')
	setInterval(function(){
		slides.removeClass('active')
		dots.removeClass('active')
		slides.addClass(i => { return currentSlide === i ? 'active' : '' })
		dots.addClass(i => { return currentSlide === i ? 'active' : ''})
		if(currentSlide == slides.length - 1){
			currentSlide = 0
		}
		else{
			currentSlide++
		}
	},3000)

		/**  
	 * Only use section product-area-3 and section product-area-4
	 * param url:path to get data
	 * param append:The wrapper tag containing the append content
	*/
	function getProducts(url,append){
		var columnIndex = url == './homepage_product3.json' ?  4 : 6
		$.ajax({
			url:url,
			method:"GET",
			dataType:"json",
			success:function(response){
				var html = ''
				response.forEach((product,key) => {
					let dash = '';
					let discount = '';
					let content = '';
						if(product.discount !== '' ){
							dash = 'style="text-decoration:line-through"'
							content = `
								<span class="old-price" ${dash}>`+formatNumber(product.price  / product.discount)+`</span>
								<span class="new-price">`+formatNumber(product.price)+`</span>
								<span class="discount">% ${product.discount}</span>
							`;
						}
						else{
							content = `<span class="new-price">`+formatNumber(product.price)+`</span>`
						}
					html += 
						`<div class="col-lg-${columnIndex} col-md-6 mt-4">
							<div class="slide-area" id="${columnIndex}-${key}">
								<div class="list-slide">`
								/** get image list */
								product.images.forEach((image,index) => {
									// default will be assigned to the first slide image active class
									let active = index === 0 ? 'active' : ''
									html += `
										<div class="slide-item ${active}">
											<img data-src="${image}" alt="ảnh sản phẩm" class="img-product-1"/>
										</div>
									`
								})
								html += '</div>'
								html += `<div class="wrapContent">					
											<a href="${product.linkReadMore}" class="link">Read More</a>
											<a href="${product.linkQuickView}" class="link">QuickView</a>
											<a href="#" class="favourite"><i class="far fa-heart"></i></a>
											<h3 class="product-title"><a href="${product.details}">${product.title}</a></h3>
											${content}
										</div>`
									/** create dots list */
								html += `<div class="brick-in-image">`
									for(let i=0;i<product.images.length;i++){
										let active = i === 0 ? 'active' : ''
										html += `<span class="item-dot ${active}"></span>`
									}
								html += `</div>
							</div>
						</div>`
				})
				$(append).append(html)
				$(function(){
					$('.img-product-1').Lazy()
				})
			}
		})
	}

	getProducts('./homepage_product3.json','#product-area-3 #wrapper-product-3')
	getProducts('./homepage_product4.json','#product-area-4 #wrapper-product-4')

	var currentValue = $(window).scrollTop()
	function moveItemAfter(){
		var timer;
		var pos = $('#banner').height()	
		var timer = setInterval(function(){
			if($(window).scrollTop() < pos){
				currentValue = $(window).scrollTop() + 10
				$(window).scrollTop(currentValue)
			}
			else{
				clearInterval(timer)
			}
		},5)
	}

	var count = 0  //the slide show count variable
	 
	function changeSlide(){
		console.log(count)
		var slides = document.querySelectorAll('#carouselExampleControls .carousel-item')
		var boxes  = document.querySelectorAll('#wrapBox .box')
		for(let i=0;i<slides.length;i++){
			slides[i].classList.remove('animate__animated','animate__fadeIn','active')
			boxes[i].classList.remove('active')
		}
		slides[count].classList.add('animate__animated','animate__fadeIn','active')
		boxes[count].classList.add('active')
		if(count === slides.length - 1){
			count = 0
		}
		else{
			count++
		}
	}
	/** after 5 seconds will move on to the next slide **/
	setInterval(changeSlide,5000)

	$('#wrapBox .box').mouseover(function(){
		var index = $(this).data('index')
		count = index
		changeSlide()
		var slides = $('#banner .carousel-item')
		slides.removeClass('active')
		for(let i=0;i<slides.length;i++){
			slides.addClass(function(i){
				if(index == i) return 'active'
			})
		}
	})
	$('.scroll').click(function(){
		moveItemAfter()	
	})	

	$(function(){
		$('.img-product').Lazy()
	})