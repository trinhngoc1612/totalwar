let Topbar = {
	render: async () => {
		let view =  /*html*/`
			<div class="topbar">
				<div class="container">
					<div class="wrapper-logo">
						<a href="#/home"><h1>TOTAL WAR</h1></a>
					</div>
					<div class="wrapper-menu">
						<ul class="nav">
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
	after_render: async () => { }

}

export default Topbar;