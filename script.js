//your JS code here. If required.
function checkVote(name, age) {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
		if (age>18) {
			resolve(`Welcome, ${name}. You can vote.`)
		} else {
			reject(`Oh sorry ${name}. You aren't old enough.`)
		}
		}, 4000);
	})
}
const handleSubmit = (e) => {
	e.preventDefault();
	const name = document.getElementById("name").value;
	const age = document.getElementById("age").value;
	checkVote(name, age).then((data)=>{alert(data)}).catch((err)=>{alert(err)})
}