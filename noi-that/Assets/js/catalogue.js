import { formatNumber } from './function.js';
$(document).ready(function(){
	function getProducts(){
		$.ajax({
			url:"./../catalogue_product.json",
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
						`<div class="col-lg-4 col-md-6 mt-4">
							<div class="slide-area" id="5-${key}">
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
				$('#product-area .row').append(html)
				$(function(){
					$('.img-product-1').Lazy()
				})
			}
		})
	}
	getProducts()
	$(function(){
		$('.img-product').Lazy()
	})
})