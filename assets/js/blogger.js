
console.log("connected");
function myFunction(){

	document.getElementById('content').innerHTML = "";
	console.log(content);
    var blogId = "490040099979574304";
    var bloggerApiKey = "AIzaSyCXSkH80d_pDStgkoBzzJskEs_z795zkZ4";

	$.ajax({
		url: "https://www.googleapis.com/blogger/v3/blogs/"+blogId+"/posts?key="+bloggerApiKey,
		dataType: "json",
		type: 'GET',

success: function(data) {
			var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

			for(var i = 0; i < data.items.length; i++){
				var year = data.items[0].published.substring(0,4);
				var day = data.items[0].published.substring(8,10);
				var month = data.items[i].published.substring(5,7);
				var date = months[month-1] + " " + day + " , " + year;

				content.innerHTML += "<h1 class='blogTitle'>" + data.items[i].title + "</h1>"
				content.innerHTML += "<h3 class='blogAuthor'>" + data.items[i].author.displayName + "</h3>"
				content.innerHTML += "<h3 class='blogPublished'>" + date + "</h3>"
        content.innerHTML += "<p class='blogContent'>" + data.items[i].content + "</p>"
			}
		},
	});
}
