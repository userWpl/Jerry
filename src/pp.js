        function html2image(source, image) {
			html2canvas(source).then(function(canvas) {
				console.log(2);
				
				var type = 'png';
				var imgData = canvas.toDataURL(type);
				
				var _fixType = function(type) {
					type = type.toLowerCase().replace(/jpg/i, 'jpeg');
					var r = type.match(/png|jpeg|bmp|gif/)[0];
					return 'image/' + r;
				};

				// 加工image data，替换mime type
				imgData = imgData.replace(_fixType(type), 'image/octet-stream');

				image.src = imgData;
			});
		};