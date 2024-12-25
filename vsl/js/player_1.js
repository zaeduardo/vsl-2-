var vTurbOriginalPlayer = {
    "id": "new_video_id_12345",  // Change the video ID here
    "org_id": "new_org_id_12345",  // Change the original ID here
    "name": "New Video Title - Example.mp4",  // Change the video name here
    "device_type": "desktop",  // Keep as "desktop" or change to "mobile" depending on the device
    "video_aspect_ratio": "56.25",  // Aspect ratio
    "thumbnail_key": "new_org_id_12345/players/new_video_id_12345/thumbnail.jpg",  // Update thumbnail key
    "cover_key": "new_org_id_12345/players/new_video_id_12345/cover.jpg",  // Update cover key
    "version": "v1",  // Keep version as "v1" or update if necessary
    "video_id": "new_video_id_12345",  // Video ID for the video player
    "options": {
      "autoplay": "smartplay",
      "subtitle_active": false,
      "smart_autoplay_template": "default",
      "theme": "#99cc33",
      "foreground_color": "#FFFFFF",
      "video": {
        "width": 640,
        "height": 360
      },
      "cdn": "cdn.converteai.net",
      "conversion_params": [],
      "displays": {
        "big_play": false,
        "play_pause": false,
        "backward": false,
        "subtitle_control": false,
        "forward": false,
        "volume": false,
        "volume_bar": true,
        "time": false,
        "fullscreen": false,
        "seekbar": false,
        "seekbar_time": true,
        "speed_control": false
      },
      "callAction": [],
      "pixels": [],
      "thumbs": [],
      "headlines": [],
      "smart_autoplays": [],
      "turbos": [],
      "smart_autoplay_elements": [
        // Keep these smart autoplay elements or update if needed
      ],
      "mini_hooks": false,
      "mini_hooks_elements": [],
      "resume": true,
      "fake_bar": true,
      "headline": false,
      "turbo": false,
      "turbo_speed": 1,
      "turbo_auto_test": false,
      "smartplay_options": {
        "top_text": "Seu vídeo já começou",
        "bottom_text": "Clique para ouvir",
        "foreground_color": "#FFFFFF",
        "background_color": "rgba(153, 204, 51, 0.65)",
        "start_at": 0,
        "end_at": 49,
        "animation": {},
        "custom_preview": null
      },
      "resume_options": {
        "play": "Continuar assistindo?",
        "title": "Você já começou a assistir esse vídeo",
        "replay": "Assistir do início?",
        "disable_pause": false,
        "foreground_color": "#FFFFFF",
        "background_color": "#99cc33"
      },
      "fake_bar_options": {
        "height": 10,
        "alpha": 2,
        "vbar_height": true,
        "vbar_end": true,
        "vbar_network": true,
        "vbar_color": "#99cc33"
      }
    }
  };
  
  var vTurbSrcId = "new_video_id_12345";  // Update with the new video ID
  var vTurbPlayer = vTurbOriginalPlayer;
  var vTurbDeviceIsMobile = window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/);
  var vTurbOriginalPlayerIsMobile = "mobile" === vTurbOriginalPlayer.device_type;
  vTurbDeviceIsMobile = vTurbDeviceIsMobile && vTurbDeviceIsMobile[0];
  vTurbSmrtvds();
  