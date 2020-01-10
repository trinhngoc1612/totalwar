// --------------------------------
//  Define Data Sources
// --------------------------------

let getPostsList = async () => {
	  const options = {
		  method: 'GET',
		  headers: {
				'Content-Type': 'application/json'
		  }
	 };
	 try {
		  const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts`, options)
		  const json = await response.json();
		  // console.log(json)
		  return json
	 } catch (err) {
		  console.log('Error getting documents', err)
	 }
}

let Home = {
	 render : async () => {
		  let posts = await getPostsList()
		  let view =  /*html*/`
		  	<section class="section wrapper-home">
		  		<div id="test"></div>
		  		<div class="container header">
		  			<div class="menu-header">
		  				<ul class="nav">
								<li class="nav-item menu-link"><a class="nav-link" href="#">about</a></li>
								<li class="nav-item menu-link"><a class="nav-link" href="#">races</a></li>
								<li class="nav-item menu-link"><a class="nav-link" href="#">videos</a></li>
								<li class="nav-item menu-link"><a class="nav-link" href="#">gallery</a></li>
								<li class="nav-item menu-link"><a class="nav-link" href="#">blog</a></li>
								<li class="nav-item menu-link"><a class="nav-link last-child" href="#">related games</a></li>
							</ul>
		  			</div>

		  			<div class="button-right">
		  				<button class="btn-games btn-more" type="button" data-toggle="collapse" data-target="#collapseGames" aria-expanded="false" aria-controls="collapseGames">games</button>
		  				<div class="collapse" id="collapseGames">
							  <ul>
							  	<li><a href="#">Three Kingdoms</a></li>
							  	<li><a href="#">Warhammer II</a></li>
							  	<li><a href="#">Thrones of Britannia</a></li>
							  	<li><a href="#">Three Kingdoms</a></li>
							  	<li><a href="#">Warhammer II</a></li>
							  	<li><a href="#">Thrones of Britannia</a></li>
							  </ul>
							</div>
		  				<button class="btn-purchase">purchase</button>
		  			</div>
		  		</div> <!--header -->

		  		<div class="wrapper-video">
		  			<video autoplay="true" muted="">
			      	<source src="assets/img/Totalwar.mp4" type="video/mp4">
			      </video>
			      <div class="wrapper-captions">
				      <div class="video-text">
				      	<h1>total war: <br>warhammer</h1>
				      	<h3>the ultimate fantasy<br>strategy game.</h3>
				      </div>
				      <div class="video-button">
				      	<img src="assets/img/logo.png">
				      	<button class="btn-more"><a href="#">watch</a></button>
				      	<button class="btn-more"><a href="#">buy</a></button>
				      </div>
				    </div>
		  		</div> <!-- end wrapper-video -->

		  		<div class="line"></div>

		  		<div class="wrapper short-des">
		  			<img src="assets/img/description.png" >
		  			<div class="wrapper-text">
		  				<img src="assets/img/logo.png" style="width: 300px;">
		  				<h2>Strategy gaming perfected. A breath-taking campaign of exploration, expansion and conquest across a fantasy world.</h2>
		  				<p>Turn-based civilisation management and real-time epic strategy battles with thousands of troops and monsters at your command.</p>
		  				<div class="video-button">
				      	<button class="btn-more"><a href="#">buy</a></button>
				      </div>
		  			</div>
		  		</div> <!-- end short-des -->

		  		<div class="line"></div>

		  		<div class="wrapper img-game races">
		  			<div class="container">
		  				<h1>races</h1>
		  				<div class="owl-carousel owl-theme owl-loaded">
						    <div class="owl-stage-outer">
					        <div class="owl-stage">
				            <div class="owl-item"><img src="assets/img/slide1.jpg"></div>
				            <div class="owl-item"><img src="assets/img/slide2.jpg"></div>
				            <div class="owl-item"><img src="assets/img/slide3.jpg"></div>
				            <div class="owl-item"><img src="assets/img/slide4.jpg"></div>
				        	</div>
				    		</div>
							</div>
						</div>
		  		</div> <!-- end img-game -->

		  		<div class="line"></div>

		  		<div class="wrapper video-game">
			  			<video>
			      		<source src="assets/img/video1.mp4" type="video/mp4">
			      	</video>
			      	<div class="small-video">
			      		<video>
					      	<source src="assets/img/Totalwar.mp4" type="video/mp4">
					      </video>
					      <video>
					      	<source src="assets/img/video2.mp4" type="video/mp4">
					      </video>
					      <video>
					      	<source src="assets/img/video3.mp4" type="video/mp4">
					      </video>
						</div>
		  		</div> <!-- end video-game -->

		  		<div class="line"></div>

		  		<div class="wrapper player-guides">
		  			<div class="container">
		  				<h1>player guides</h1>
		  				<h5>Welcome to the Total War: WARHAMMER II Academy, Commander! Here you'll learn all the skills you need to become the strongest leader in the New World. Every great leader starts somewhere, and with our tutorials you're sure to find something useful to help crush your enemies.</h5>

		  				<div class="row">
		  					<div class="col-md-6 item">
		  						<div class="card">
		  							<div class="card-img">
		  								<a href="#"><img src="assets/img/player1.jpg"></a>
		  							</div>
		  							<div class="card-body">
		  								<a href="#"><h2 class="card-title">battle: what the ui is and does</h2></a>
		  								<p class="card-text">In this video we'll explain how to use the user interface on the battle map.</p>
		  							</div>
		  						</div>
		  					</div>

		  					<div class="col-md-6 item">
		  						<div class="card">
		  							<div class="card-img">
		  								<a href="#"><img src="assets/img/player1.jpg"></a>
		  							</div>
		  							<div class="card-body">
		  								<a href="#"><h2 class="card-title">battle: what the ui is and does</h2></a>
		  								<p class="card-text">In this video we'll explain how to use the user interface on the battle map.</p>
		  							</div>
		  						</div>
		  					</div>

		  					<div class="col-12 item">
		  						<div class="wrapper-btn-more">
		  							<button class="btn-more">total war academy</button>
		  						</div>
		  					</div>
		  				</div>
		  			</div>
		  		</div> <!-- end player-guides -->

		  		<div class="line"></div>

		  		<div class="wrapper blog">
		  			<div class="container">
		  				<h1>warhammer ii blog</h1>
		  				<div class="row">
		  					<div class="col-md-6 item">
		  						<div class="card">
		  							<div class="card-img">
		  								<a href="#"><img src="assets/img/player1.jpg"></a>
		  							</div>
		  							<div class="card-body">
		  								<a href="#"><p class="card-text">12 Days of Total War – The Shadow & The Blade Live Wallpaper</p></a>
		  							</div>
		  						</div>
		  					</div>

		  					<div class="col-md-6 item">
		  						<div class="card">
		  							<div class="card-img">
		  								<a href="#"><img src="assets/img/player1.jpg"></a>
		  							</div>
		  							<div class="card-body">
		  								<a href="#"><p class="card-text">12 Days of Total War – The Shadow & The Blade Live Wallpaper</p></a>
		  							</div>
		  						</div>
		  					</div>

		  					<div class="col-md-6 item">
		  						<div class="card">
		  							<div class="card-img">
		  								<a href="#"><img src="assets/img/player1.jpg"></a>
		  							</div>
		  							<div class="card-body">
		  								<a href="#"><p class="card-text">12 Days of Total War – The Shadow & The Blade Live Wallpaper</p></a>
		  							</div>
		  						</div>
		  					</div>

		  					<div class="col-12 item">
		  						<div class="wrapper-btn-more">
		  							<button class="btn-more">see more</button>
		  						</div>
		  					</div>
		  				</div>
		  			</div>
		  		</div> <!-- end blog -->

		  		<div class="line"></div>
		  		
		  		<div class="wrapper related-games">
		  			<div class="container">
		  				<h1>related games</h1>
		  				<div class="row">
		  					<div class="col-md-4 col-6">
		  						<img src="assets/img/game1.png">
		  					</div>
		  					<div class="col-md-4 col-6">
		  						<img src="assets/img/game2.png">
		  					</div>
		  					<div class="col-md-4 col-6">
		  						<img src="assets/img/game3.png">
		  					</div>
		  				</div>
		  			</div>
		  		</div>
		  		
		  	</section>
		  	
		  `
		  return view
	 }
	 , after_render: async () => {	 		
			$('.owl-carousel').owlCarousel({
			    center: true,
			    loop: true,
			    nav: true,
			    navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
			    dots: false
			});
	 }

}

export default Home;