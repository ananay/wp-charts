<!DOCTYPE html>
<html>
<head>
	<title>Wordpress Charts Generator</title>
	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
	<link rel="stylesheet" type="text/css" href="chart.css">
	<script type="text/javascript" src="script.js"></script>
</head>
<body>
	<center>
		<div class="top">
			<h1>Wordpress Charts Generator</h1>
		</div>
		<br />
		<form>
			<input type="text" placeholder="Chart Title" id="title">
			<select name="type" id="type">
				<option value="pie">Pie Chart</option>
				<option value="doughnut">Doughnut Chart</option>
				<option value="polarArea">Polar Area Chart</option>
				<option value="bar">Bar Chart</option>
				<option value="line">Line Chart</option>
				<option value="radar">Radar Chart</option>
			</select>
			<input type="text" name="num" class="num" placeholder="Number of Values"/>
			<br />
			<br />
			<div class="lol"></div>
			<br />
			<div class="shortcode"></div>
			<span class="ok" style="cursor:pointer;">Generate</span>
		</form>
	</center>
</body>
</html>