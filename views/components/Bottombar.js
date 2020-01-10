let Bottombar = {
	render: async () => {
		let view =  /*html*/`
		<footer class="footer">
			<div class="container">
				<div class="row">
					<div class="logos">
						<img src="assets/img/footer1.png">
						<img src="assets/img/footer2.png">
						<img src="assets/img/footer3.png">
						<img src="assets/img/footer4.png">
					</div>
					<div class="wrapper-media">
						<ul>
							<li><i class="fab fa-facebook-square"></i></li>
							<li><i class="fab fa-twitter-square"></i></li>
							<li><i class="fab fa-instagram"></i></li>
						</ul>
					</div>
				</div>

				<div class="row">
					<div class="img-left">
						<img src="assets/img/footer5.jpg">
					</div>
					<div class="more-info">
						<ul>
							<li><a href="#">Privacy policy</a></li>
							<li><a href="#">Terms of service</a></li>
							<li><a href="#">Cookie policy</a></li>
							<li><a href="#">Support</a></li>
							<li><a href="#">Approved Partners</a></li>
							<li><a href="#">Careers</a></li>
						</ul>

						<p>© Copyright Games Workshop Limited 2020. Warhammer, the Warhammer logo, GW, Games Workshop, The Game of Fantasy Battles, the twin-tailed comet logo, and all associated logos, illustrations, images, names, creatures, races, vehicles, locations, weapons, characters, and the distinctive likeness thereof, are either ® or TM, and/or © Games Workshop Limited, variably registered around the world, and used under licence. Developed by Creative Assembly and published by SEGA. Creative Assembly, the Creative Assembly logo, Total War and the Total War logo are either registered trademarks or trademarks of The Creative Assembly Limited. SEGA and the SEGA logo are either registered trademarks or trademarks of SEGA Holdings Co., Ltd. or its affiliates. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. All other trademarks, logos and copyrights are property of their respective owners.</p>
					</div>
				</div>
				
			</div>
			<div></div>
		</footer>
		`
		return view
	},
	after_render: async () => { }

}

export default Bottombar;