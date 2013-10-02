/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-list' : '&#xe025;',
			'icon-Threshold_logo' : '&#xe01b;',
			'icon-map' : '&#xe001;',
			'icon-key' : '&#xe011;',
			'icon-building' : '&#xf0f7;',
			'icon-camera' : '&#xe00f;',
			'icon-user' : '&#xe000;',
			'icon-bubble' : '&#xe00c;',
			'icon-stack' : '&#xe010;',
			'icon-paperplane' : '&#xe012;',
			'icon-lock' : '&#xe015;',
			'icon-bulb' : '&#xe016;',
			'icon-pen' : '&#xe017;',
			'icon-location' : '&#xe019;',
			'icon-lab' : '&#xe01c;',
			'icon-banknote' : '&#xe01d;',
			'icon-params' : '&#xe01e;',
			'icon-note' : '&#xe01f;',
			'icon-photo' : '&#xe020;',
			'icon-mail' : '&#xe021;',
			'icon-clip' : '&#xe026;',
			'icon-calendar' : '&#xe027;',
			'icon-world' : '&#xe028;',
			'icon-cloud' : '&#xe003;',
			'icon-settings' : '&#xe029;',
			'icon-tag' : '&#xe02a;',
			'icon-diamond' : '&#xe02f;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};