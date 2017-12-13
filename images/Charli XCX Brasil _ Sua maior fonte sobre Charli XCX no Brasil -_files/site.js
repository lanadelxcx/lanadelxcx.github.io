$(function () {
	$(".carousel").carousel();
	$('.marquee').marquee({
		duration: 1500,
		gap: 10,
		delayBeforeStart: 0,
		direction: 'up',
		duplicated: true,
		allowCss3Support: true,
		pauseOnHover: true
	});
	var currentX = 0;
	$(".ultimasGaleriaBaixo").on("click", "a.fa", function (ev) {
		var dir = ev.currentTarget.attributes["data-direction"].value;
		var widthBlock = $(".album-galeria").width();
		var nextX = 0;

		if (dir === "right")
			nextX = currentX + ((widthBlock + 15) * 3);
		else
			nextX = currentX - ((widthBlock + 15) * 3);

		var limiteMenor = ((widthBlock + 15) * 9) * -1;

		if (nextX > limiteMenor && nextX <= 0) {
			currentX = nextX;
		}

		$(".albums-galeria-wrapper").css({
			"transform": "translateX(" + currentX + "px)"
		});
	});
});