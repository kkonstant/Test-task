$(document).ready(function(){

// ========== page scroll ==============
  $(".header-top a").mPageScroll2id();

 // ============ slider ================
})

// ============== video =================

function play() {
	$('#videobg',".video",".play-btn").hide();
    document.getElementById('video-wrap').innerHTML = '<iframe src="https://www.youtube.com/embed/hR3fDLf8tt0?autoplay=1&rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>';
}
