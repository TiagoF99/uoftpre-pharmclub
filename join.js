(function() {



	window.join = function() {
		document.getElementById('tab').innerHTML = 
		"<form id='email' action='jaheinsha.yousif@gmail.com' method='post' enctype='text/plain'> Name:<br>\
		<input type='text' name='name'><br>E-mail:<br>\
		<input type='text' name='mail'><br>Comment:<br>\
		<input id='comment' type='text' name='comment' size='50'><br><br>\
		<input type='submit' value='Send'>\
		<input type='reset' value='Reset'></form>";

	}

	window.about = function() {
		document.getElementById('tab').innerHTML = 
		"<div id='aboutusinfo'>UofT Pre-Pharmacy aims to provide a social platform for undergraduate students with ambitions to study pharmacy. \
		At Uoft Pre-Pharm, students will work together to establish and improve many skills necessary for admission into various PharmD programs. \
		Through information sessions, seminars and socials, the group will gain insight into the pharmacy application process. Through the collaboration \
		of like-minded individuals Uoft Pre-Pharm aims to help members excel in their pharmacy school applications. </div><div id='aboutusinfo'>\
        Unsure about pharmacy school? Confused about prerequisites and the PCAT? Come join us at our information sessions held throughout the year!!</div>";
	}

	window.contact = function() {
		document.getElementById('tab').innerHTML = 
		"<ul id='contact-list'>\
                      <li><b>Mailing Address:</b> 88 Bloor Street East</li>\
                      <li><b>Telephone:</b> (647) - 563 - 9597</li>\
                      <li><b>Contact Person:</b> Yousif Jaheinsha</li>\
                      <li><b>contact email:</b> jaheinsha.yousif@gmail.com</li>\
                    </ul>";
	}








})();