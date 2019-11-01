
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
			for(var i = 0; i < data.items.length; i++){
				content.innerHTML += "<h1 class='blogTitle'>" + data.items[i].title + "</h1>"

                content.innerHTML += "<h3 class='blogContent'>" + data.items[i].content + "</h3>"

			}
		},


	});
}
