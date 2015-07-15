$(function() {

$('#query').focus();



function showResults(results) {
	var statusHTML = "<ul>";
	$.each(results, function(index, value){
			statusHTML += "<li>" + value.snippet.title;
			statusHTML += "</li>"; 
	}); //End each
	statusHTML += "</ul>";
	$('#search-results').html(statusHTML);
}; //End showResults


function getRequest (searchTerm) {
	var url = "https://www.googleapis.com/youtube/v3/search";
	var params = {
		part : 'id,snippet',
		key : "AIzaSyBXRNgdiVy09x47yBxaUNGbwDFdb5EblvQ",
		q : searchTerm
	};

	$.getJSON(url, params, function(data){
		showResults(data.items);
		console.log(data);
	});//End getJSON
} //End getRequest



$("form#search-term").submit(function(event){
	event.preventDefault();
	var query = $("#query").val();
	getRequest(query);

}); //End submit
	







}); //End ready