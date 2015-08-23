angular.module("manashield")
.controller("frontpage", function($scope) {
	$scope.getGameObject = function(imgUrl, title, shortDesc, desc, controls) {
		return {
			imgUrl: imgUrl,
			title: title,
			shortDesc: shortDesc,
			desc: desc,
			controls: controls
		};
	};

	$scope.gameList = [[
		$scope.getGameObject("img/jsh.png", 
			"JSH", 
			"A clone of the great Game Super Hexagon.", 
			"You play the little arrow and have to dodge the obstacles coming at you by moving around the central hexagon.", 
			["left arrow / left click : clockwise", "right arrow / right click : anti-clockwise"]),
		$scope.getGameObject("img/thex.png", 
			"THEX", 
			"A gravity enabled bubble shooter tetris.", 
			"You have to pop all the colored tiles by putting 3 or more together. Be carefull, the tiles always go toward the black one !", 
			["left arrow : clockwise", "right arrow : anti-clockwise", "down arrow : fast fall"])
	]];
})