var messages = document.getElementsByClassName('_5blh _4-0h');

per = 1000;
time = 0;

for(var i = 0; i < messages.length; i++) {
	time = time + per; 
	
	setTimeout(function() {		
		if (messages[0] !== undefined) {
			messages[0].click();
			
			setTimeout(function() {
				var menu = document.getElementsByClassName('_54ni __MenuItem')
				menu[2].click()

				setTimeout(function() {
					var popup = document.getElementsByClassName('_3quh _30yy _2t_ _3ay_ _5ixy')
					popup[0].click()
				}, 200);
			}, 500);
		}
	}, time);
}