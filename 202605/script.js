const videoElement = $('.sample_video').get(0);
 
$('.sample_play_btn').on('click', function(){
	videoElement.play();
});
$('.sample_pause_btn').on('click', function(){
	videoElement.pause();
});
