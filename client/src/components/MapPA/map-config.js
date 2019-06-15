var map_config = {
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
		'hover': '<u><b>HARRISBURG</b></u><br>Write any text and load images<br><img src="hover.png" width="196px">',//the content of the hover popup
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
		'url':'https://codecanyon.net/user/art101/portfolio',//URL of this pin
		'target':'new_window',//'new_window' opens URL in new window//'same_window' opens URL in the same window //'none' pin is not clickable
		'enable':true,//true/false to enable/disable this pin
	},
	{
		'shape':'rectangle',
		'hover': '<u><b>PITTSBURGH</b></u><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;321 Example Road 9. County, State 54321<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234',
		'pos_X':79,
		'pos_Y':245,
    // 'diameter':10,
    'width':10,//width of the pin if rectangle (if circle use diameter)
		'height':10,//height of the pin if rectangle (if circle delete this line)
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#0000FF',//color of the pin when map loads
		'overColor':'#3399ff',//color of the pin when mouse hover
		'downColor':'#00ffff',//color of the pin when clicked 
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'rectangle',
		'hover': '<u><b>PHILADELPHIA</b></u><br><span style="color:yellow;">*Link each pin to any webpage*</span>',
		'pos_X':592,
		'pos_Y':305,
    // 'diameter':10,
    'width':10,//width of the pin if rectangle (if circle use diameter)
		'height':10,//height of the pin if rectangle (if circle delete this line)
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#0000FF',//color of the pin when map loads
		'overColor':'#3399ff',//color of the pin when mouse hover
		'downColor':'#00ffff',//color of the pin when clicked 
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'none',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover': '<u><b>SCRANTON</b></u><br><span style="color:yellow;">*Link each pin to any webpage*</span>',
		'pos_X':546,
		'pos_Y':123,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#00ffff',
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'same_window',
		'enable':true,
  },
  {
		'shape':'circle',
		'hover': '<u><b>CONNEAUT LAKE PARK</b></u><br><span style="color:yellow;">*Link each pin to any webpage*</span>',
		'pos_X':40,
		'pos_Y':100,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#00ffff',
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'same_window',
		'enable':true,
  },
  {
		'shape':'circle',
		'hover': '<u><b>DELGROSSO AMUSEMENT PARK</b></u><br><span style="color:yellow;">*Link each pin to any webpage*</span>',
		'pos_X':265,
		'pos_Y':200,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#00ffff',
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'same_window',
		'enable':true,
  },
  {
		'shape':'circle',
		'hover': '<u><b>DORNEY PARK & WILDWATER KINGDOM</b></u><br><span style="color:yellow;">*Link each pin to any webpage*</span>',
		'pos_X':563,
		'pos_Y':223,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#00ffff',
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'same_window',
		'enable':true,
  },
  {
		'shape':'circle',
		'hover': '<u><b>DUTCH WONDERLAND</b></u><br><span style="color:yellow;">*Link each pin to any webpage*</span>',
		'pos_X':473,
		'pos_Y':290,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#00ffff',
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'same_window',
		'enable':true,
  },
  {
		'shape':'circle',
		'hover': '<u><b>FUN FORE ALL</b></u><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;321 Example Road 9. County, State 54321<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234',
		'pos_X':79,
		'pos_Y':200,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#ffcc5f',
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'circle',
		'hover': '<u><b>HERSHEYPARK</b></u><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;321 Example Road 9. County, State 54321<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234',
		'pos_X':431,
		'pos_Y':264,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#ffcc5f',
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'circle',
		'hover': '<u><b>IDLEWILD & SOAK ZONE</b></u><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;321 Example Road 9. County, State 54321<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234',
		'pos_X':149,
		'pos_Y':260,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#ffcc5f',
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'circle',
		'hover': '<u><b>KENNYWOOD</b></u><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;321 Example Road 9. County, State 54321<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234',
		'pos_X':99,
		'pos_Y':250,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#ffcc5f',
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'circle',
		'hover': '<u><b>KNOEBELS AMUSEMENT PARK</b></u><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;321 Example Road 9. County, State 54321<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234',
		'pos_X':445,
		'pos_Y':195,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#ffcc5f',
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'circle',
		'hover': '<u><b>LAKEMONT PARK</b></u><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;321 Example Road 9. County, State 54321<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234',
		'pos_X':248,
		'pos_Y':245,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#ffcc5f',
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'circle',
		'hover': '<u><b>POCONO MT. GO-KARTS & PLAY PARK</b></u><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;321 Example Road 9. County, State 54321<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234',
		'pos_X':590,
		'pos_Y':170,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#ffcc5f',
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'circle',
		'hover': '<u><b>SESAME PLACE</b></u><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;321 Example Road 9. County, State 54321<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234',
		'pos_X':625,
		'pos_Y':275,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#ffcc5f',
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'none',
		'enable':true,
  },
  {
		'shape':'circle',
		'hover': '<u><b>WALDAMEER PARK</b></u><br><span style="color:yellow;">*Link each pin to any webpage*</span>',
		'pos_X':55,
		'pos_Y':40,
		'diameter':8,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#ffcc5f',
		'downColor':'#00ffff',
		'url':'https://codecanyon.net/user/art101/portfolio',
		'target':'same_window',
		'enable':true,
  },
	]
}
