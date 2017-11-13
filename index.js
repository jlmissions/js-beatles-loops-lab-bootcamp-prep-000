function theBeatlesPlay (players, instrument){
  var allplayers = []
  for (var i = 0; i <instrument.length; i++){
    allplayers.push(players[i] + "plays" + insturments[i])
  }
  return allplayers
}
