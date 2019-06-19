﻿const map_config = {
	'default':{
		'landColor':'#EBECED', //general counties color
		'borderColor':'#9CA8B6', //inter-county borders
		'mapShadow':'#000', //shadow color below the map
		'shadowOpacity':'50', //shadow opacity, value: 0-100
		'pinShadow':'#000', //shadow color below the pins
		'pinShadowOpacity':'50', //pins shadow opacity, value: 0-100
		'hoverShadow':'#666666', //the shadow color below the hover popup 
	},
	'points':[
	{
		'shape':'rectangle',//choose the shape of the pin circle or rectangle
		'hover':'<u><b>HARRISBURG </b></u><br>',//the content of the hover popup
		'pos_X':411,//location of the pin on X axis
		'pos_Y':266,//location of the pin on Y axis
		'width':10,//width of the pin if rectangle (if circle use diameter)
		'height':10,//height of the pin if rectangle (if circle delete this line)
		'outline':'#FFF',//outline color of the pin
		'thickness':1,//thickness of the line (0 to hide the line)
		'upColor':'#0000FF',//color of the pin when map loads
		'overColor':'#3399ff',//color of the pin when mouse hover
		'downColor':'#00ffff',//color of the pin when clicked 
		//(trick, if you make this pin un-clickable > make the overColor and downColor the same)
		'url': "#", //'https://codecanyon.net/user/art101/portfolio',//URL of this pin
		'target':'new_window',//'new_window' opens URL in new window//'same_window' opens URL in the same window //'none' pin is not clickable
		'enable':true,//true/false to enable/disable this pin
	},
	{
		'shape':'rectangle',
		'hover':'<u><b>PITTSBURGH </u><br>',
		'pos_X':79,
		'pos_Y':245,
    // 'diameter':10,
    'width':10,
		'height':10,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#0000FF',
		'overColor':'#3399ff',
		'downColor':'#00ffff',
		'url':'#',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'rectangle',
		'hover':'<u><b>PHILADELPHIA </u><br>',
		'pos_X':592,
		'pos_Y':305,
    // 'diameter':10,
    'width':10,
		'height':10,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#0000FF',
		'overColor':'#3399ff',
		'downColor':'#00ffff',
		'url':'#',
		'target':'none',
		'enable':true,
	},
	{
		'shape':'rectangle',
		'hover':'<u><b>SCRANTON </u><br>',
		'pos_X':546,
		'pos_Y':123,
    // 'diameter':10,
    'width':10,
    'height':10,
    'outline':'#FFF',
    'thickness':1,
    'upColor':'#0000FF',
    'overColor':'#3399ff',
    'downColor':'#00ffff',
		'url':'#',
		'target':'same_window',
		'enable':true,
  },
  {
		'shape':'circle',
    'hover':'<u><b>CONNEAUT LAKE PARK &nbsp;<span class="remove">X</span></b></u><br><br><img src="../map-assets/images/conneaut-lake-park.png" width="230px"><br><br><a href="#" class="coaster-link-1">Blue Streak</a><br><a href="#" class="coaster-link">Devil&#39;s Den</a><br><a href="#" class="coaster-link">Little Dipper</a><br>',
    'pos_X':40,
		'pos_Y':100,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#00ffff',
		'url':'#',
		'target':'same_window',
		'enable':true,
  },
  {
		'shape':'circle',
    'hover':'<u><b>DELGROSSO AMUSEMENT PARK &nbsp;&nbsp;&nbsp;<span class="remove">X</span></b></u><br><br><img src="../images/delgrossos.png" width="302px"><br><br><a href="#" class="coaster-link-del-1">Wacky Worm</a><br>',
    'pos_X':265,
		'pos_Y':200,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#00ffff',
		'url':'#',
		'target':'same_window',
		'enable':true,
  },
  {
		'shape':'circle',
    'hover':'<u><b>DORNEY PARK &nbsp;<span class="remove">X</span><br>& WILDWATER KINGDOM </b></u><br><br><img src="../images/dorney-park.png" width="235px"><br><br><a href="#" class="coaster-link-1">Hydra the Revenge</a><br><a href="#" class="coaster-link">Possessed</a><br><a href="#" class="coaster-link">Steel Force</a><br><a href="#" class="coaster-link">Talon: The Grip of Fear</a><br><a href="#" class="coaster-link">Thunderhawk</a><br><a href="#" class="coaster-link">Wild Mouse</a><br>',
    'pos_X':563,
		'pos_Y':223,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#00ffff',
		'url':'#',
		'target':'same_window',
		'enable':true,
  },
  {
		'shape':'circle',
    'hover':'<u><b>DUTCH WONDERLAND &nbsp;&nbsp;&nbsp;<span class="remove">X</span></b></u><br><br><img src="../images/dutch-wonderland.png" width="225px"><br><br><a href="#" class="coaster-link-1">Joust</a><br><a href="#" class="coaster-link">Kingdom Coaster</a><br><a href="#" class="coaster-link">Merlin&#39;s Mayhem</a><br>',
		'pos_X':473,
		'pos_Y':290,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#00ffff',
    'url':'#',
		'target':'same_window',
		'enable':true,
  },
  {
		'shape':'circle',
    'hover':'<u><b>FUN FORE ALL &nbsp;<span class="remove ffa">X</span></b></u><br><br><img src="../images/fun-fore-all.png" width="200px"><br><a href="#" class="coaster-link-1">Fiesta Express</a><br>',
		'pos_X':79,
		'pos_Y':200,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#ffcc5f',
    'url':'#',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'circle',
    'hover':'<u><b>HERSHEYPARK &nbsp;<span class="remove">X</span></b></u><br><br><img src="../images/hershey-park.png" width="210px"><br><br><a href="#" class="coaster-link-1">Cocoa Cruiser</a><br><a href="#" class="coaster-link">Comet</a><br><a href="#" class="coaster-link">Great Bear</a><br><a href="#" class="coaster-link">Laff Trakk</a><br><a href="#" class="coaster-link">Lightning Racer</a><br><a href="#" class="coaster-link">Sidewinder</a><br><a href="#" class="coaster-link">Skyrush</a><br><a href="#" class="coaster-link">SooperDooperLooper</a><br><a href="#" class="coaster-link">Storm Runner</a><br><a href="#" class="coaster-link">Trailblazer</a><br><a href="#" class="coaster-link">Wildcat</a><br><a href="#" class="coaster-link">Wild Mouse</a><br>',
		'pos_X':431,
		'pos_Y':264,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#ffcc5f',
    'url':'#',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'circle',
    'hover':'<u><b>IDLEWILD & SOAK ZONE &nbsp;&nbsp;&nbsp;<span class="remove">X</span></b></u><br><br><img src="../images/idlewild-park.png" width="239px"><br><br><a href="#" class="coaster-link-1">Rollo Coaster</a><br><a href="#" class="coaster-link">Wild Mouse</a><br>',
		'pos_X':149,
		'pos_Y':260,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#ffcc5f',
    'url':'#',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'circle',
    'hover':'<u><b>KENNYWOOD &nbsp;<span class="remove">X</span></b></u><br><br><img src="../images/kennywood.png" width="220px"><br><br><a href="#" class="coaster-link-1">Exterminator</a><br><a href="#" class="coaster-link">Jack Rabbit</a><br><a href="#" class="coaster-link">Lil&#39; Phantom</a><br><a href="#" class="coaster-link">Phantom&#39;s Revenge</a><br><a href="#" class="coaster-link">Racer</a><br><a href="#" class="coaster-link">Sky Rocket</a><br><a href="#" class="coaster-link">Steel Curtain</a><br>',
		'pos_X':99,
		'pos_Y':250,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#ffcc5f',
    'url':'#',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'circle',
    'hover':'<u><b>KNOEBELS AMUSEMENT PARK &nbsp;&nbsp;&nbsp;<span class="remove">X</span></b></u><br><br><img src="../images/knoebels.png" width="290px"><br><br><a href="#" class="coaster-link-del-1">Black Diamond</a><br><a href="#" class="coaster-link">Flying Turns</a><br><a href="#" class="coaster-link">Impulse</a><br><a href="#" class="coaster-link">Kozmo&#39;s Kurves</a><br><a href="#" class="coaster-link">Phoenix</a><br><a href="#" class="coaster-link">Twister</a><br>',
		'pos_X':445,
		'pos_Y':195,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#ffcc5f',
    'url':'#',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'circle',
    'hover': '<u><b>LAKEMONT PARK &nbsp;<span class="remove">X</span></b></u><br><br><img src="../images/lakemont-park.png" width="210px"><br><br><a href="#" class="coaster-link-1">Leap-The-Dips</a><br><a href="#" class="coaster-link">Little Leaper</a><br>',
		'pos_X':248,
		'pos_Y':245,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#ffcc5f',
    'url':'#',
		'target':'none',
		'enable':true,
  },
  // {
	// 	'shape':'circle',
	// 	'hover': '<u><b>POCONO MT. GO-KARTS & PLAY PARK</b></u><br>Write any text and load images<br><img src="images/hover.png" width="196px">',
	// 	'pos_X':590,
	// 	'pos_Y':170,
	// 	'diameter':8,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#ffcc5f',
	// 	'downColor':'#ffcc5f',
	// 	'url':'https://codecanyon.net/user/art101/portfolio',
	// 	'target':'none',
	// 	'enable':true,
  // },
  {
		'shape':'circle',
    'hover': '<u><b id="title">SESAME PLACE &nbsp;<span class="remove">X</span></b></u><br><br><img src="../images/sesame-place.png"width="210px"><br><br><a href="#" class="coaster-link-1">Oscar&#39;s Wacky Taxi</a><br><a href="#" class="coaster-link">Vapor Trail</a><br>',
		'pos_X':625,
		'pos_Y':275,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#ffcc5f',
    'url':'#',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'circle',
    'hover': '<u><b>WALDAMEER PARK &nbsp;<span class="remove">X</span></b></u><br><br><img src="../images/waldameer.png" width="200px"><br><a href="#" class="coaster-link-1" >Comet</a><br><a href="#" class="coaster-link">Ravine Flyer II</a><br><a href="#" class="coaster-link">Ravine Flyer III</a><br><a href="#" class="coaster-link">Steel Dragon</a><br>',
		'pos_X':55,
		'pos_Y':40,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#00ffff',
    'url':'#',
		'target':'same_window',
		'enable':true,
  },
	]
}
