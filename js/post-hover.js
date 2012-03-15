/*
 * post-hover.js
 * https://github.com/savetheinternet/Tinyboard-Tools/blob/master/js/post-hover.js
 *
 * Released under the MIT license
 * Copyright (c) 2012 Michael Save <savetheinternet@tinyboard.org>
 *
 * Usage:
 *   $config['additional_javascript'][] = 'js/jquery.min.js';
 *   $config['additional_javascript'][] = 'js/post-hover.js';
 *
 */

$(document).ready(function(){
	$('p.body a:not([rel="nofollow"])').each(function() {
		var id;
		
		if(id = $(this).text().match(/^>>(\d+)$/)) {
			id = id[1];
		}
		
		var post = $('div.post#reply_' + id);
		$(this).hover(function(e) {
			post.clone()
				.attr('id', 'post-hover-' + id)
				.addClass('post-hover')
				.css('position', 'absolute')
				.css('left', e.pageX + 15)
				.css('top', e.pageY - post.height() - 15)
				.css('border-style', 'solid')
				.css('box-shadow', '1px 1px 1px #999')
				.insertAfter($(this).parent());
		}, function() {
			$('.post-hover').remove();
		}).mousemove(function(e) {
			$('#post-hover-' + id)
				.css('left', e.pageX + 15)
				.css('top', e.pageY - post.height() - 15);
		});
	});
});

