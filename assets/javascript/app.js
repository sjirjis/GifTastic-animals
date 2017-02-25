//create static buttons
var static = {
    sButtons: [
        'Dog',
        'Cat',
        'Rabbit',
        'Hamster',
        'Skunk',
        'Fish'
    ],
};

for(i = 0; i < static.sButtons.length; i++){
	$('.staticButtons').append('<button class="sbtn" value=' + static.sButtons[i] + '>' + static.sButtons[i]);
};

//create api call
var giphyResults = function(animal){

    var apiKey = 'api_key=dc6zaTOxFJmzC';
    var qURL = 'http://api.giphy.com/v1/gifs/search?q=' + animal + '&' + apiKey + '&limit=10';

    $.ajax({
        url: qURL,
        method: 'GET'
    })
    .done(function(response){
//what to display in the call result   

//first clear out the div contents...
	$('.gifResults').html("");

//...now put the new stuff	
	for (i = 0; i < response.data.length; i++)	
	    $('.gifResults').append('<h4 class="rating">Rating: ' + response.data[i].rating + '</h4>'
			+ '<img src="' + response.data[i].images.fixed_height_still.url 
			+ '" data-animate="' + response.data[i].images.fixed_height.url 
			+ '" data-still="' + response.data[i].images.fixed_height_still.url + '" /> <br/>')duck
	    console.log(response);
	});
};

//display api call results as required on button click
$('body').on('click', '.sbtn', function(){
	giphyResults(
		$(this).val()
	);
	console.log(
		$(this).val()
	);
});

//append user button to static buttons
$('.addAnimalbtn').on('click', function(){
	var uVal = $('.uInput').val();
	$('.staticButtons').append('<button class="sbtn" value=' + uVal + '>' + uVal);
});

//create animation
$('body').on('click', 'img', function(){
	var $imgStill = $(this).attr('data-still'),
	$imgAnimate = $(this).attr('data-animate')
	$imgSrc = $(this).attr('src')

	if (
		$imgSrc === $imgStill
	) {
		$(this).attr('src', $imgAnimate);
	} else {
		$(this).attr('src', $imgStill);
	}
});
