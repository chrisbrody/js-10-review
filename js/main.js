// 1.Create a new element on your page - using document.createElement()
	var newDiv = document.createElement('div'),
		oldDiv = document.getElementById('oldDiv'),
		text   = 'Content Goes Here'
	// add content to the new div
	newDiv.textContent = text
	// append the new tag to the old div
	oldDiv.appendChild(newDiv)
// 2.Remove an element on a click event - using .removeChild()
	function removeItem() {
		var item = document.getElementById('myLi')
		item.parentNode.removeChild(item)
	}
// 3.Change the class name on any element, and make sure there's some css changing also - using className()
	function changeClass() {
		var classDiv = document.getElementById('task3')
		if (classDiv.classList.contains('task3')) {
			classDiv.className = ''
			classDiv.textContent = 'Lots of Stuff Goes Here - Click to change me!'
		} else {
			classDiv.className = 'task3'
			classDiv.textContent = 'Click to change me back!'
		}
	}

// 4.Create a simple commenting app - name & comment
	var commentArray = []

	function addComment(form) {
		// store values of user inputs
		var username = form.username.value,
			comment  = form.comment.value
		// push comment to comment array
		commentArray.push({username:username, comment:comment})
		// display comments
		var newCommentItem = document.createElement('div'),
			newCommentItemUsername = document.createElement('h5'),
			commentList = document.getElementById('commentList')
		// add content to h4 and p tag
		newCommentItemUsername.textContent = username + ': ' + comment
		// append childs to li tag
		newCommentItem.appendChild(newCommentItemUsername)
		// add new comment item to comment list
		commentList.appendChild(newCommentItem)
		// clear username and comment input tags
		form.username.value = '' 
		form.comment.value = ''
		// focus on username input tag
		form.username.focus()
	}