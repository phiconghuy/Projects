function isEmpty(value){
	return value === '' ? true : false
}
function isAlreadyExist(element){
	return $(element).length > 0 ? true : false
}
function formatNumber(number){
	return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'USD' }).format(number)
}
export {isEmpty,isAlreadyExist,formatNumber}