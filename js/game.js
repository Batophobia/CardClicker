var game = {
	init : function(){
		//shuffle decks
		blnInGame=true;
		$(".gameBoard").show();
		$(".buttons").hide();
		$(".store").hide();
		player.deck=this.shuffle(player.deck);
		for(var i=0;i<player.maxHandSize;i++)
			player.draw();
	},
	blnInGame: false,
	
	turn: function(who){
		if(who=="player")
			player.pool.base+=player.bps;
			$("#numForce").html("Force<br/>"+player.pool.base);
			player.draw();
	},
	
	play: function(card){
		var crdNum=card.id.substr(3);
		if(card.id.substr(0,3)=="plr"){
			$(card).appendTo("#plrField");
			player.hand[crdNum];
		}
	},
	
	shuffle: function(array){
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	},
	
	updateDisplay: function(){
		
	}
};