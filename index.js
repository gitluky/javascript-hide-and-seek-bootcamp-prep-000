function getFirstSelector(selector){
  const firstSelection = document.querySelector(selector)
    return firstSelection
}

function nestedTarget(){
  const pulledTarget = document.querySelector('#nested .target')
    return pulledTarget

}

function increaseRankBy(n){
  const updateRanked = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < updateRanked.length; i++){
    updateRanked[i].innerHTML = parseInt(updateRanked[i].innerHTML) + n
  }
}
/*
function deepestChild(){
  var currentChildren = document.querySelectorAll('div#grand-node div')
  var remainingChildren = []
  //Set test to end function
  if (currentChildren.length < 1){
    return currentChildren
  }
  //Add all nodes from currentChildren into the remainingChildren array
  //Return the last element
  for (var i = 0; i < currentChildren.length; i++){
     remainingChildren.push(currentChildren[i])
	}
return remainingChildren[remainingChildren.length-1]
}
*/

function deepestChild(){
  const grandNode = document.querySelector('div#grand-node')
  var currentNode = grandNode
//Keep searching for the next div tag until querySelector returns null
	while (currentNode.querySelector('div') != null){
		currentNode = currentNode.querySelector('div')
	}
return currentNode
}
