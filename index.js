function theBeatlesPlay (players, instrument){
  var array = []
  for (var i = 0; i <players.length; i++){
    array.push(`${players[i]} plays ${insturments[i]}`)
  }
  return array
}
