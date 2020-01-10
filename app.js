"use strict";

import Home       from './views/pages/Home.js'

import Access     from './views/pages/Access.js'
import Academy    from './views/pages/Academy.js'
import Games      from './views/pages/Games.js'
import Support    from './views/pages/Support.js'
import Blog       from './views/pages/Blog.js'
import Forums     from './views/pages/Forums.js'
import Faq        from './views/pages/Faq.js'

import About      from './views/pages/About.js'
import Error404   from './views/pages/Error404.js'
import PostShow     from './views/pages/PostShow.js'
import Register     from './views/pages/Register.js'

import Topbar       from './views/components/Topbar.js'
import Bottombar    from './views/components/Bottombar.js' 
import Test 			from './views/components/Test.js'

import Utils        from './services/Utils.js'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
	 '/home'             : Home
	 , '/access'         :Access
	 , '/academy'        :Academy
	 , '/games'       :Games
	 , '/support'        :Support
	 , '/blog'        :Blog
	 , '/forums'         :Forums
	 , '/faq'         :Faq

	 , '/about'      : About
	 , '/p/:id'      : PostShow
	 , '/register'   : Register
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

	 // Lazy load view element:
	 const header = null || document.getElementById('header_container');
	 const content = null || document.getElementById('page_container');
	 // const test = null || document.getElementById('test');
	 const footer = null || document.getElementById('footer_container');
	 
	 // Render the Header and footer of the page
	 header.innerHTML = await Topbar.render();
	 await Topbar.after_render();
	 // test.innerHTML = await Test.render();
	 // await Test.after_render();
	 footer.innerHTML = await Bottombar.render();
	 await Bottombar.after_render();


	 // Get the parsed URl from the addressbar
	 let request = Utils.parseRequestURL()

	 // Parse the URL and if it has an id part, change it with the string ":id"
	 let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
	 
	 // Get the page from our hash of supported routes.
	 // If the parsed URL is not in our list of supported routes, select the 404 page instead
	 let page = routes[parsedURL] ? routes[parsedURL] : Error404
	 content.innerHTML = await page.render();
	 await page.after_render();
  
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
