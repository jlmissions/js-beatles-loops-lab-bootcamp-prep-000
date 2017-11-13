function theBeatlesPlay (players, instrument){
  var array = []
  for (let i = 0; i <players.length; i++){
    array.push(`${players[i]} plays ${insturments[i]}`)
  }
  return array
}
