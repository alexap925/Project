<html>
<head>

<title>Project 3</title>

<style>
h2 {color:black;
	font-family:helvetica;
	font-size:200%
	}
	
	
	#myCanvas{
		background-color: rgb(59,82,116); 
		width: 500px;
		heigth: 500px; 
	}
</style>

<script>
	var c;
	var canv; 
	var cans; 
	var square, circle, points, triangle, create; 
	var square2, circle2, points2, triangle2, create2; 

	var words = ["P", "R", "O", "J", "E","C","T"]; 

	var colors = ["00A0B0", "#CC333F", "#EB6841", "#EDC951"]; 


	var counter = 0; 
	var timer = 20; 

	var set = false; 

	var Letter = function(a, b, c, d){
	
	
		var x, y, z;
		var number, name;  
		
		this.x = a; 
		this.y = b; 
		this.z = 0;
		this.name = c; 
		this.number = d;

	}

	Letter.prototype.drawLetter = function(){
		cans.font = "20px Helvetica"; 
		cans.fillStyle = "white";
		cans.fillText(this.name, this.x, this.y); 
	}
	
	

	Letter.prototype.moveLetter = function(){
		this.y += this.z; 
	}

	function checkCollison(c){

		switch(c.name){
			case "P"

				if(c.y <= shap.y + shap.width && c.x == shap.x)
					c.z = 5; 
				break; 
			case "R"
				if(c.y <= shap.y + shap.width && c.x == shap.x)
					c.z = 5; ; 
				break; 
			case "O"
				if(c.y <= shap.y + shap.width && c.x == shap.x)
					c.z = 5; 
				break; 
			case "J" 
				if(c.y <= shap.y + shap.width && c.x == shap.x)
					c.z = 5; 
				break; 
			case "E"
				if(c.y <= shap.y + shap.width && c.x == shap.x)
					c.z = 5; 
				break; 
			case "C" 
				if(c.y <= shap.y + shap.width && c.x == shap.x)
					c.z = 5; 
				break; 
			case "T"
				if(c.y <= shap.y + shap.width && c.x == shap.x)
					c.z = 5; 
				break; 
		}
	}

	var Square = function(x, color){
		var x, y, z; 
		var width, height; 
		var color; 

		this.x = x; 
		this.y = 0; 
		this.z = 3; 

		this.width = 10; 
		this.height = 10; 

		this.color = color; 
	}

	Square.prototype.drawSquare = function(){
		cans.fillStyle = this.color; 
		cans.beginPath(); 
		cans.fillRect(this.x, this.y, 10, 10); 
		cans.closePath(); 
	}

	Square.prototype.moveSquare = function(){
		this.y += this.z; 
	}

	var Circle =  function(x, color){
			var x, y, z;
			var width, height; 
			var color; 

			this.x = x;
			this.y = -60;
			this.z = 2; 
			
			this.radius = 20;
			this.color = color;  
		}
		
	Circle.prototype.drawCircle = function() {
		var canv=document.getElementById("myCanvas");
		var cans=c.getContext("2d");
		cans.beginPath();
		cans.arc(140,this.y,20,0,2 * Math.PI);
		cans.fillStyle = this.color;
		cans.fill();
	}

	Circle.prototype.moveCircle = function(){
		this.y += this.z; 
	}
		
	var Points = function(x, color){
		var x, y, z; 
		var width, height; 
		var spikes, outerRadius;
		var color;

		this.x = x; 
		this.y = -160; 
		this.z = 2;

		this.width = 10; 
		this.height = 10; 
		
		this.spikes = 6; 
		this.outerRadius = 10; 
		this.color = color; 
	}

	Points.prototype.drawPoints = function () {
	    var rotate = Math.PI / 2 * 4;
	    var x = this.x;
	    var y = this.y;
	    var step = Math.PI / this.spikes;

	    cans.beginPath();
	    cans.moveTo(this.x, this.y - this.outerRadius)
	    for (d = 0; d < this.spikes; d++) {
	        x = this.x + Math.cos(rotate) * this.outerRadius;
	        y = this.y + Math.sin(rotate) * this.outerRadius;
	        cans.lineTo(x, y)

	        x = this.x + Math.cos(rotate) * this.innerRadius;
	        y = this.y + Math.sin(rotate) * this.innerRadius;
	        cans.lineTo(x, y)
	    }
	    cans.lineTo(this.x, this.y - this.outerRadius)
	    cans.closePath();
	    cans.fillStyle = this.color;
	    cans.fill();
	}

	Points.prototype.movePoints = function(){
		this.y += this.z; 
	}

	var Triangle = function(x, color){
		var x, y, z; 
		var width, height; 
		var spikes, outerRadius, innerRadius; 
		var color; 

		this.x = x; 
		this.y = -100; 
		this.z = 2; 
		
		this.width = 20; 
		this.height = 20; 
		
		this.spikes = 3; 
		this.outerRadius = 20; 
		this.innerRadius = 35; 
		this.color = color;
		}

	Triangle.prototype.drawTriangle = function () {
	    var rotate = Math.PI / 2 * 3;
	    var x = this.x;
	    var y = this.y;
	    var step = Math.PI / this.spikes;

	    cans.beginPath();
	    cans.moveTo(this.x, this.y - this.outerRadius)
	    for (d = 0; d < this.spikes; d++) {
	        x = this.x + Math.cos(rotate) * this.outerRadius;
	        y = this.y + Math.sin(rotate) * this.outerRadius;
	        cans.lineTo(x, y)

	        x = this.x + Math.cos(rotate) * this.innerRadius;
	        y = this.y + Math.sin(rotate) * this.innerRadius;
	        cans.lineTo(x, y)
	    }
	    cans.lineTo(this.x, this.y - this.outerRadius)
	    cans.closePath();
	    cans.fillStyle = this.color;

	}

	Triangle.prototype.moveTriangle = function(){
		this.y += this.z; 
	}

	var Create = function(x, color){
		var x, y, z; 
		var width, height; 
		var spikes, outerRadius, innerRadius;

		this.x = x; 
		this.y = -180; 
		this.z = 2;

		this.width = 20; 
		this.height = 20; 
		
		this.spikes = 9; 
		this.outerRadius = 10; 
		this.innerRadius = 15; 

		this.color = color; 
	}

	Create.prototype.drawCreate = function () {
	    var rotate = Math.PI / 2 * 3;
	    var x = this.x;
	    var y = this.y;
	    var step = Math.PI / this.spikes;

	    cans.beginPath();
	    cans.moveTo(this.x, this.y - this.outerRadius);
	    for (d = 0; d < this.spikes; d++) {
	        x = this.x + Math.cos(rotate) * this.outerRadius;
	        y = this.y + Math.sin(rotate) * this.outerRadius;
	        cans.lineTo(x, y)

	        x = this.x + Math.cos(rotate) * this.innerRadius;
	        y = this.y + Math.sin(rotate) * this.innerRadius;
	        cans.lineTo(x, y)
	    }
	    cans.lineTo(this.x, this.y - this.outerRadius)
	    cans.closePath();
	    cans.fillStyle = this.color;
	    cans.fill();

	}



	Create.prototype.moveCreate = function(){
		this.y += this.z; 
	}

	function init(){
		canv = document.getElementById("myCanvas"); 
		cans = c.getContext("2d"); 

		createLetters();  

		square = new Square(100, colors[randInt(0, 5)]); 
		circle = new Circle(200, colors[randInt(0, 5)]);
		points = new Points(160, colors[randInt(0, 5)]); 
		triangle = new Triangle(200, colors[randInt(0, 5)]);
		create = new Create(280, colors[randInt(0, 5)]); 

		square2 = new Square2(100, colors[randInt(0, 5)]); 
		circle2 = new Circle2(80, colors[randInt(0, 5)]);
		points2 = new Points2(160, colors[randInt(0, 5)]); 
		triangle = new Triangle2(200, colors[randInt(0, 5)]);
		create2 = new Create2(200, colors[randInt(0, 5)]);

		setInterval(draw, 20); 
	}


	function checkOffScreen(){
		if(square.y > c.width)
			square = new Square(randInt(0, 500), colors[randInt(0, 5)] 	); 

		if(circle.y >c.width)
			circle = new Circle(randInt(0, 500), colors[randInt(0, 5)]);

		if(points.y > c.width)
			points = new Points(randInt(0, 500), colors[randInt(0, 5)]); 
		
		if(triangle.y > c.width)
			triangle = new Triangle(randInt(0, 500), colors[randInt(0, 5)]);
		
		if(create.y > c.width)
			create = new Create(randInt(0, 500), colors[randInt(0, 5)]);



		if(square2.y > c.width)
			square2 = new Square2(randInt(0, 500), colors[randInt(0, 5)]); 

		if(circle2.y > c.width)
			circle2 = new Circle2(randInt(0, 500), colors[randInt(0, 5)]);

		if(points2.y > c.width)
			points2 = new Points2(randInt(0, 500), colors[randInt(0, 5)]); 
		
		if(triangle2.y > c.width)
			triangle = new Triangle2(randInt(0, 500), colors[randInt(0, 5)]);
		
		if(create2.y > c.width)
			create2 = new Create2(randInt(0, 500), colors[randInt(0, 5)]);
	}
	var y = 0; 
	 

	function draws(){
		
		clear(); 

		square.drawSquare(); 
		square.moveSquare(); 
		
		circle.drawCircle(); 
		circle.moveCircle();
		
		points.drawPoints(); 
		points.movePoints();
		
		triangle.drawTriangle(); 
		triangle.moveTriangle();
		
		create.drawCreate(); 
		create.moveCreate(); 

		if(timer <= 0){

			square2.drawSquare2(); 
			square2.moveSquare2(); 
			
			circle2.drawCircle2(); 
			circle2.moveCircle2();
			
			points2.drawPoints2(); 
			points2.movePoints2();
			
			triangle2.drawTriangle2(); 
			triangle.moveTriangle2();
			
			create2.drawCreate2(); 
			create2.moveCreate2(); 
		}
		
		y++;
		
		var d = 0; 
		while(d < 5){
			var temp = Letters[d];

			temp.drawLetter(); 
			checkCollison(temp); 
			temp.moveLetter(); 

		}

		timer--; 
		checkOffScreen(); 
	}

	function Rect(){
		c.Rect(0,0,500,500); 
	}

	function randInt(min, max){
		return Math.floor(Math.random() * (min, max) + min); 
	}


</script>
</head>
<body onLoad="init()">
<canvas id="myCanvas" width="500" height="500" ></canvas>
</body>
</html>