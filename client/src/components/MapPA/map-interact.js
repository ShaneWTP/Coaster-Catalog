// Quick feature detection
function isTouchEnabled() {
	return (('ontouchstart' in window)
		|| (navigator.MaxTouchPoints > 0)
		|| (navigator.msMaxTouchPoints > 0));
}

//The pins code
jQuery(function(){
	if(jQuery('#land-area').find('path').eq(0).attr('fill') != 'undefined'){
		jQuery('#land-area').find('path').attr({'fill':map_config['default']['landColor']}).css({'stroke':map_config['default']['borderColor']});
	}
	if(jQuery('#shadow').find('path').eq(0).attr('fill') != 'undefined'){
		var shadowOpacity = map_config['default']['shadowOpacity'];
		var shadowOpacity = parseInt(shadowOpacity);
		if (shadowOpacity >=100){shadowOpacity = 1;}else if(shadowOpacity <=0){shadowOpacity =0;}else{shadowOpacity = shadowOpacity/100;}
		
		jQuery('#shadow').find('path').attr({'fill':map_config['default']['mapShadow']}).css({'fill-opacity':shadowOpacity})
	}
	if(jQuery('#pin-shadow').find('path').eq(0).attr('fill') != 'undefined'){
		var pinShadowOpacity = map_config['default']['pinShadowOpacity'];
		var pinShadowOpacity = parseInt(pinShadowOpacity);
		if (pinShadowOpacity >=100){pinShadowOpacity = 1;}else if(pinShadowOpacity <=0){pinShadowOpacity =0;}else{pinShadowOpacity = pinShadowOpacity/100;}
		jQuery('#pin-shadow').find('path').attr({'fill':map_config['default']['pinShadow']}).css({'fill-opacity':pinShadowOpacity})	

	jQuery('#map-tip').css({
		'box-shadow':'1px 2px 4px '+map_config['default']['hoverShadow'],
		'-moz-box-shadow':'2px 3px 6px '+map_config['default']['hoverShadow'],
		'-webkit-box-shadow':'2px 3px 6px '+map_config['default']['hoverShadow'],
	});
};


	var points_len = map_config['points'].length;
	if( points_len > 0){
		var xmlns = "http://www.w3.org/2000/svg";
		var tsvg_obj = document.getElementById("map_points");
		var svg_circle,svg_rect;
		for(var i=0;i<points_len;i++){
			if (map_config['points'][i]['shape']=="circle"){
				svg_circle = document.createElementNS(xmlns, "circle");
				svg_circle.setAttributeNS(null, "cx", map_config['points'][i]['pos_X']+1);
				svg_circle.setAttributeNS(null, "cy", map_config['points'][i]['pos_Y']+1);
				svg_circle.setAttributeNS(null, "r", map_config['points'][i]['diameter']/2);
				svg_circle.setAttributeNS(null, "fill", map_config['default']['pinShadow']);
				svg_circle.setAttributeNS(null, "style",'fill-opacity:'+pinShadowOpacity);
				svg_circle.setAttributeNS(null, "id",'map_points_shadow_'+i);
				tsvg_obj.appendChild(svg_circle);
				svg_circle = document.createElementNS(xmlns, "circle");
				svg_circle.setAttributeNS(null, "cx", map_config['points'][i]['pos_X']);
				svg_circle.setAttributeNS(null, "cy", map_config['points'][i]['pos_Y']);
				svg_circle.setAttributeNS(null, "r", map_config['points'][i]['diameter']/2);
				svg_circle.setAttributeNS(null, "fill", map_config['points'][i]['upColor']);
				svg_circle.setAttributeNS(null, "stroke",map_config['points'][i]['outline']);
				svg_circle.setAttributeNS(null, "stroke-width",map_config['points'][i]['thickness']);
				svg_circle.setAttributeNS(null, "id",'map_points_'+i);
				tsvg_obj.appendChild(svg_circle);
				dynamicAddEvent(i);
			}
			else if(map_config['points'][i]['shape']=="rectangle"){
				svg_rect = document.createElementNS(xmlns, "rect");
				svg_rect.setAttributeNS(null, "x", map_config['points'][i]['pos_X']- map_config['points'][i]['width']/2+1);
				svg_rect.setAttributeNS(null, "y", map_config['points'][i]['pos_Y']- map_config['points'][i]['height']/2+1);
				svg_rect.setAttributeNS(null, "width", map_config['points'][i]['width']);
				svg_rect.setAttributeNS(null, "height", map_config['points'][i]['height']);
				svg_rect.setAttributeNS(null, "fill", map_config['default']['pinShadow']);
				svg_rect.setAttributeNS(null, "style",'fill-opacity:'+pinShadowOpacity);
				svg_rect.setAttributeNS(null, "id",'map_points_shadow_'+i);
				tsvg_obj.appendChild(svg_rect);
				svg_rect = document.createElementNS(xmlns, "rect");
				svg_rect.setAttributeNS(null, "x", map_config['points'][i]['pos_X']- map_config['points'][i]['width']/2);
				svg_rect.setAttributeNS(null, "y", map_config['points'][i]['pos_Y']- map_config['points'][i]['height']/2);
				svg_rect.setAttributeNS(null, "width", map_config['points'][i]['width']);
				svg_rect.setAttributeNS(null, "height", map_config['points'][i]['height']);
				svg_rect.setAttributeNS(null, "fill", map_config['points'][i]['upColor']);
				svg_rect.setAttributeNS(null, "stroke",map_config['points'][i]['outline']);
				svg_rect.setAttributeNS(null, "stroke-width",map_config['points'][i]['thickness']);
				svg_rect.setAttributeNS(null, "id",'map_points_'+i);
				tsvg_obj.appendChild(svg_rect);
				dynamicAddEvent(i);
			}
		}
	}
});

function dynamicAddEvent(id){
	var obj = jQuery('#map_points_'+id);

	if(map_config['points'][id]['enable'] == true){
		if (isTouchEnabled()) {
			obj.on('touchstart', function(e){
				var touch = e.originalEvent.touches[0];
				var x=touch.pageX+10, y=touch.pageY+15;
				var tipw=jQuery('#map-tip').outerWidth(), tiph=jQuery('#map-tip').outerHeight(),
				x=(x+tipw>jQuery(document).scrollLeft()+jQuery(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>jQuery(document).scrollTop()+jQuery(window).height())? jQuery(document).scrollTop()+jQuery(window).height()-tiph-10 : y
				jQuery('#'+id).css({'fill':map_config['points'][id]['downColor']});
				jQuery('#map-tip').show().html(map_config['points'][id]['hover']);
				jQuery('#map-tip').css({left:x, top:y})
			})
			obj.on('touchend', function(){
				jQuery('#'+id).css({'fill':map_config['points'][id]['upColor']});
				if(map_config['points'][id]['target'] == 'new_window'){
					window.open(map_config['points'][id]['url']);
				}else if(map_config['points'][id]['target'] == 'same_window'){
					window.parent.location.href=map_config['points'][id]['url'];
				}
			})
		}
		obj.attr({'cursor':'pointer'});
		obj.hover(function(){
			jQuery('#map-tip').show().html(map_config['points'][id]['hover']);
			obj.css({'fill':map_config['points'][id]['overColor']})
		},function(){
			jQuery('#map-tip').hide();
			obj.css({'fill':map_config['points'][id]['upColor']});
		})
		//clicking effect
		obj.mousedown(function(){
			obj.css({'fill':map_config['points'][id]['downColor']});
		})
		obj.mouseup(function(){
			obj.css({'fill':map_config['points'][id]['overColor']});
			if(map_config['points'][id]['target'] == 'new_window'){
				window.open(map_config['points'][id]['url']);	
			}else if(map_config['points'][id]['target'] == 'same_window'){
				window.parent.location.href=map_config['points'][id]['url'];
			}
		})
		obj.mousemove(function(e){
				var x=e.pageX+10, y=e.pageY+15;
				var tipw=jQuery('#map-tip').outerWidth(), tiph=jQuery('#map-tip').outerHeight(), 
				x=(x+tipw>jQuery(document).scrollLeft()+jQuery(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>jQuery(document).scrollTop()+jQuery(window).height())? jQuery(document).scrollTop()+jQuery(window).height()-tiph-10 : y
				jQuery('#map-tip').css({left:x, top:y})
		})
	}	
}
