(function ($) {
	$.fn.emailValidator = function () {
		// your code here
		var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
		let email = this.val();
    return pattern.test(email);
	}
})(jQuery)
