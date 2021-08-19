/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'luisangelmaciel\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-github-d': '&#xe902;',
		'icon-github-g': '&#xe903;',
		'icon-github-x': '&#xe904;',
		'icon-github': '&#xe900;',
		'icon-hhm': '&#xe901;',
		'icon-ico-codepen': '&#xe92a;',
		'icon-ico-codesandbox': '&#xe92f;',
		'icon-ico-replit': '&#xe930;',
		'icon-w3': '&#xe931;',
		'icon-avatar-hihello': '&#xec41;',
		'icon-luna-pokemon': '&#xea48;',
		'icon-sol-pokemon': '&#xea4b;',
		'icon-mercado-libre': '&#xe914;',
		'icon-onlyfans': '&#xe91b;',
		'icon-scruff': '&#xe91d;',
		'icon-netflix-gayflix': '&#xe929;',
		'icon-tumblr': '&#xe92b;',
		'icon-youtube': '&#xea5c;',
		'icon-tripadvisor': '&#xf65e;',
		'icon-google': '&#xea5b;',
		'icon-twitter-bird1': '&#xf5a5;',
		'icon-whatsapp': '&#xea5a;',
		'icon-facebook-azul-letra': '&#xf0a1;',
		'icon-gmail': '&#xe92c;',
		'icon-tumbrl': '&#xf661;',
		'icon-intagram-camera': '&#xf66c;',
		'icon-pinterest': '&#xe92d;',
		'icon-send': '&#xe92e;',
		'icon-repliit': '&#xf65a;',
		'icon-codesandbox': '&#xf65b;',
		'icon-w3spaces': '&#xf663;',
		'icon-hi5': '&#xf662;',
		'icon-xiib': '&#xf0b5;',
		'icon-logo-viajemos-todxs-por-mexico-turismo-gay-turismo-rosa-color': '&#xf344;',
		'icon-cursor-hand': '&#xf630;',
		'icon-hospedaje': '&#xf63d;',
		'icon-codepen': '&#xf657;',
		'icon-github-logo': '&#xf671;',
		'icon-www': '&#xf65f;',
		'icon-twitter-bird': '&#xf5a4;',
		'icon-flecha-atras': '&#xf0a8;',
		'icon-flecha-siguiente': '&#xf0a9;',
		'icon-etiquetas-codigo': '&#xf09f;',
		'icon-touch_app': '&#xf56b;',
		'icon-tarjeta-de-regalo': '&#xf463;',
		'icon-home': '&#xf0b3;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
