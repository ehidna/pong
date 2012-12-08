function initializeSound(){
	createjs.FlashPlugin.BASE_PATH = "lib/" // Initialize the base path from this document to the Flash Plugin
	if (!createjs.SoundJS.checkPlugin(true)) {
		return;
	}

	var assetsPath = "assets/";
	var manifest = [
	    {src:assetsPath+"beep.ogg", id:1, data: 1},
	    {src:assetsPath+"beeeep.ogg", id:2, data: 1},
	    {src:assetsPath+"plop.ogg", id:3, data: 1}
	];

    preload = new createjs.PreloadJS();
    //Install SoundJS as a plugin, then PreloadJS will initialize it automatically.
    preload.installPlugin(createjs.SoundJS);

    //Load the manifest and pass 'true' to start loading immediately. Otherwise, you can call load() manually.
    preload.loadManifest(manifest, true);
}

	function stopSound() {
		if (preload != null) { preload.close(); }
		createjs.SoundJS.stop();
	}

	function playSound(id) {
	    //Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
	    var instance = createjs.SoundJS.play(id, createjs.SoundJS.INTERRUPT_NONE, 0, 0, false, 1);
		if (instance == null || instance.playState == createjs.SoundJS.PLAY_FAILED) { return; }

	}