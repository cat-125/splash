const splash = { window, document };
(() => {
	function include(src) {
		return new Promise(resolve => {
			let head = document.getElementsByTagName('head')[0];
			let script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = src;

			script.onreadystatechange = resolve;
			script.onload = resolve;

			head.appendChild(script);
		});
	}
	splash.include = include;
	document.addEventListener('DOMContentLoaded', () => {
		(splash.applyTheme = function () { // Themes
			let color = localStorage.getItem('themeColor'),
				mode = localStorage.getItem('mode');
			if (mode == 'dark') {
				let style = document.createElement('link');
				style.type = 'text/css';
				style.rel = 'stylesheet';
				style.id = '_modeCss';
				style.href = '/themes/dark.css';
				document.head.appendChild(style);
			} else document.getElementById('_modeCss')?.remove();
			if (color && color != 'default') {
				let css = `:root {--primary: ${color}}`;
				let style = document.getElementById('_themeCss') ?? document.createElement('style');
				style.type = 'text/css';
				style.id = '_themeCss';
				style.textContent = css;
				document.head.appendChild(style);
			}
		})();

		include('https://unpkg.com/feather-icons').then(() => {
			for (let icon in feather.icons) {
				feather.icons[icon].attrs['stroke-width'] = 2.5;
				feather.icons[icon].attrs['width'] = 15;
			}
			feather.replace();
		});

		splash.userAgent = navigator.userAgent || window.navigator.userAgent;

		{ // User agent detection
			let ua = splash.userAgent.toLowerCase();
			splash.isMobile = /android|ios|iphone|mobi|touch|mini/.test(ua);
			splash.isDesktop = /windows|mac|pc|linux/.test(ua);
			splash.isBot = /bot/.test(ua);
			if (splash.isMobile) splash.platform = 'mobile';
			else if (splash.isDesktop) splash.platform = 'desktop';
			else if (splash.isBot) splash.platform = 'bot';
			else splash.platform = 'unknown';
		}

		try { // ServiceWorker
			if ('serviceWorker' in navigator && (location.protocol == 'https:' || location.hostname == 'localhost') && localStorage.getItem('useServiceWorker') !== 'false') {
				window.addEventListener('load', function () {
					navigator.serviceWorker.register('/sw.js').then(function (registration) {
						registration.update();
					}, function (err) {
						console.warn('ServiceWorker registration failed: ', err);
					}).catch(function (err) {
						console.warn('ServiceWorker registration failed: ', err);
					});
				});
			}
		} catch (e) {
			console.warn(e);
			localStorage.setItem('useServiceWorker', false);
		}
	});
})();