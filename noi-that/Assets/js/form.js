function createFormLogin(){
	var html = `
		<div id="form-area">
			<form id="formLogin" method="post">
				<h4 class="title-form">Login</h4>
				<div class="form-group">
					<input type="text" name="username" id="username" class="enter-input"/>
					<label id="label-username" class="title-input">Username or email address*</label>
				</div>
				<div class="form-group">
					<input type="password" name="password" id="password" class="enter-input"/>
					<label id="label-password" class="title-input">Password *</label>
				</div>
				<div class="d-flex">
					<div id="left">
						<input type="checkbox" name="remember_me" id="remember_me"/>
						<label class="ml-3 text-dark">Remember me</label>
					</div>
					<div id="right">
						<button type="submit" id="btn-login btn-action" class="btn-action">Sign in</button>
					</div>
				</div>
				<div id="show-error">
					<strong>Error:</strong><span>The username or password you entered is incorrect. Lost your password?</strong>
				</div>
				<div class="link-area d-flex">
					<a href="javascript:void(0)" class="nav-link btnAction" data-action="create account">Create account</a>
					<a href="javascript:void(0)" class="nav-link btnAction" data-action="forgot password">Forgot password</a>
				</div>
			</form>
		</div>
	`;
	$('#lightBox').append(html)
}
function createFormRegister(){
	var html = 
		`<div id="form-area">
			<form id="formRegister" method="post">
				<h4 class="title-form">Create account</h4>
				<div class="form-group">
					<input type="email" name="username" id="email-address" class="enter-input"/>
					<label id="label-email-address" class="title-input">Username or email address*</label>
				</div>
				<p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
				<button type="submit" id="btnRegister" class="btn-action">Create account</button>
				<div class="link-area d-flex">
					<a href="javascript:void(0)" class="nav-link btnAction" data-action="login">Login</a>
					<a href="javascript:void(0)" class="nav-link btnAction" data-action="forgot password">Forgot password</a>
				</div>
			</form>
		</div>
	`
	$('#lightBox').append(html)
}
function createFormForgetPassword(){
	var html = 
		`<div id="form-area">
			<form id="formForgetPassword" method="post">
				<h4 class="title-form">Password recovery</h4>
				<p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email .</p>
				<div class="form-group">
					<input type="email" name="username" id="email-address" class="enter-input"/>
					<label id="label-email-address" class="title-input">Username or email</label>
				</div>
				<button type="submit" id="btnForgetPassword" class="btn-action">New Password</button>
				<div class="link-area d-flex">
					<a href="javascript:void(0)" class="nav-link btnAction" data-action="create account">Create account</a>
					<a href="javascript:void(0)" class="nav-link btnAction" data-action="login">Login</a>
				</div>
			</form>
		</div>
	`;
	$('#lightBox').append(html)
}
export { createFormLogin,createFormRegister,createFormForgetPassword }