let Topbar = {
	render: async () => {
		let view =  /*html*/`
<div class="topbar">
	<div class="container">
		<div class="wrapper-logo">
			<a href="/totalwar"><h1>TOTAL WAR</h1></a>
		</div>
		
		<div class="wrapper-menu">
			<div class="wrapper-button-menu">
				<button class="btn btn-primary"><i class="fas fa-bars"></i></button>
			</div>

			<ul class="nav menu-topbar">
				<li class="nav-item menu-link"><a class="nav-link" href="#/access">access</a></li>
				<li class="nav-item menu-link"><a class="nav-link" href="#/academy">academy</a></li>
				<li class="nav-item menu-link"><a class="nav-link" href="#/games">games</a></li>
				<li class="nav-item menu-link"><a class="nav-link" href="#/support">support</a></li>
				<li class="nav-item menu-link"><a class="nav-link" href="#/blog">blog</a></li>
				<li class="nav-item menu-link"><a class="nav-link" href="#/forums">forums</a></li>
				<li class="nav-item menu-link"><a class="nav-link last-child" href="#/faq">faq</a></li>
				<li><button class="btn-purchase btn-more">purchase</button></li>
				<li><i class="fab fa-facebook-square"></i></li>
				<li><i class="fab fa-twitter-square"></i></li>
				<li><i class="fab fa-instagram"></i></li>
			</ul>
		</div>
	</div>
</div>
		  `
		return view
	},
	after_render: async () => { 
		$(".wrapper-button-menu button").click(function(){
			$(".menu-topbar").toggle();
		});
	}
}

export default Topbar;