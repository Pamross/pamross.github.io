!function(a){a.fn.extend({rotaterator:function(b){var c={fadeSpeed:350,pauseSpeed:100,child:null},b=a.extend(c,b);return this.each(function(){var c=b,d=a(this),e=a(d.children(),d);if(e.each(function(){a(this).hide()}),c.child)var f=c.child;else var f=a(d).children(":first");a(f).fadeIn(c.fadeSpeed,function(){a(f).delay(c.pauseSpeed).fadeOut(c.fadeSpeed,function(){var b=a(this).next();0==b.length&&(b=a(d).children(":first")),a(d).rotaterator({child:b,fadeSpeed:c.fadeSpeed,pauseSpeed:c.pauseSpeed})})})})}})}(jQuery),$(document).ready(function(){$("#rotate").rotaterator({fadeSpeed:600,pauseSpeed:900})}),$(document).ready(function(){function a(a){$("#ajax-message").html(a),$("#ajax-message").fadeIn(1e3)}$("#contact_form").submit(function(b){b.preventDefault(),$("#ajax-message").hide(),$.ajax({url:"/",type:"post",dataType:"html",data:$(this).serialize(),error:function(b,c,d){a("Sorry, there was an error submitting your form. Please send me an e-mail <a mailto:'info@pamross.io'>info@pamross.io</a>")},success:function(b,c,d){if(b.match(/<title>Error<\/title>/)){var e=$(b).find("ul li:first").text();"A valid sender email is required"==e?a("Your email was&rsquo;t valid. Please enter your email address."):"Email Message is Required"==e&&a("Please enter a message.")}else a("<p>Your message was sent. Thanks for contacting me!</p>")}})})});
