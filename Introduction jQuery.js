$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 1);
    });
    $('div').mouseleave(function() {
        $('div').fadeTo('fast', 0.5);
    })
});

/*
index.html

<html>
	<head>
		<title>Button Magic</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
	</head>
	<body>
     <div><br/><strong>Click Me!</strong></div>
     <script type="text/javascript" src="script.js"></script>
	</body>
</html>
----------
stylesheet.css

div {
    height: 60px;
    width: 100px;
    border-radius: 5px;
    background-color: #69D2E7;
    text-align: center;
    color: #FFFFFF;
    font-family: Verdana, Arial, Sans-Serif;
    opacity: 0.5;
}

/*
