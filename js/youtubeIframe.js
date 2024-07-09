
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '240',
      width: '400',
      events: {
        'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange 페이지 새로고침 후 자동재생이 되면 5초후 멈춤
      },
      playerVars: {
        'listType': 'playlist',
        'controls': 1, 
        autoplay: true,
        loop: true,
        'playlist':['J4d-a7dVtiQ,']
      }
    });
  }


/*
J4d-a7dVtiQ : 빗소리! 


*/



  //https://www.youtube.com/watch?v=J4d-a7dVtiQ

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }

  function stopVideo() {
    player.stopVideo();
  }