var App = {};

App.initialize = function () {

	var urlhighlights = "mocks/highlights.json";
	$.ajax({
	 	type: "GET",
	  	url: urlhighlights,
	  	async: true,
	  	contentType: 'application/x-www-form-urlencoded',
	  	dataType: 'json',
	  	context: this,
	  	success: function (data, status, obj) {
	  		if (data != null) {
		  		console.dir(JSON.stringify(data));
	  		}
	  		App.loadHighlights(data);
	  	},
	  	error: function (obj, status, error) {
			alert("error");
	  		console.log("highlights error" + JSON.stringify(error));
	  	},
	});

	var urlChapters = "mocks/chapters.json";
	$.ajax({
	 	type: "GET",
	  	url: urlChapters,
	  	async: true,
	  	contentType: 'application/x-www-form-urlencoded',
	  	dataType: 'json',
	  	context: this,
	  	success: function (data, status, obj) {
	  		if (data != null) {
		  		console.dir(JSON.stringify(data));
		  		console.dir(data);
	  		}
	  		App.loadEpisodes(data);
	  	},
	  	error: function (obj, status, error) {
			alert("error");
	  		console.log("chapters error" + JSON.stringify(error));
	  	},
	});
}

App.onLoad = function () {
	App.initialize();
	$("#help").click(function() {
		$('#helpContainer').fadeIn(1000);
	});
	$("#logo").click(function() {
		alert( "Handler for logo called." );
	});
	$("#highlight").click(function() {
		alert( "Handler for highlight called." );
	});
}

App.loadHighlights = function (data) {
	console.dir(data);
}

App.loadEpisodes = function (data) {
	console.dir(data.chapters[0].title);
	for (var i = 0; i<data.chapters.length; i++) {
		var chapterContainer = '<div class="chapter" id="chapter_'+i+'"  tabindex="'+i+'" onClick="App.viewDetail('+data.chapters[i].id+')">';
		chapterContainer += '<img src="img/chapterImg'+data.chapters[i].id+'.png"></img>';
		chapterContainer += '<h3>'+data.chapters[i].title+'</h3>';
		chapterContainer += '</div>';
		$('#chapters').append(chapterContainer);
		chapterContainer = null;
 	}
}

App.viewPlayer = function (chapterId) {
	$('#detailContainer').fadeOut(500);
	$('#playerContainer').fadeIn(1000);
	var src = 'videos/big_buck_bunny_480p_surround-fix.mp4';
	$('#videoPlayer').attr("src", src);
}

App.viewDetail = function (chapterId) {
	var src = 'img/bigImg'+chapterId+'.png';
	$('#imgContainer').attr("src", src);
	$('#detailTitle').html('aaaa');
	$('#detailDesc').html('bbbbb');

	$('#homeContainer').fadeOut(500);
	$('#detailContainer').fadeIn(1000);

	$('#imgContainer').click(App.viewPlayer);
}