(function () {
	function getCookie(name) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		if (parts.length === 2) {
			return parts.pop().split(";").shift();
		}
		return "no found";
	}

	function insertAfter(elem, refElem) {
		var parent = refElem.parentNode;
		var next = refElem.nextSibling;

		if (next) {
			return parent.insertBefore(elem, next);
		} else {
			return parent.appendChild(elem);
		}
	}

	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return "";
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	var $me = document.querySelector(
		'script[src*="simwidget.js"]:not([data-status])'
	);
	if (!$me) {
		return;
	}
	var me_src = $me.getAttribute("src");

	$me.setAttribute("data-status", "embedded");

	var widget = getParameterByName("widget", me_src) || "polling",
		pathname = "/simwidgets/v1/",
		$iframe = document.createElement("iframe"),
		widget_src;

	var url_parser = document.createElement("a");
	url_parser.href = $me.getAttribute("src");
	var origin = url_parser.hostname;
	var question_id = getParameterByName("question_id", url_parser.href);
	var group_id = getParameterByName("group_id", url_parser.href);
	var game = 'sim'; //getParameterByName("game", url_parser.href);
	var widget_id_to_show = getParameterByName('widget_id', url_parser.href);
	var region_to_show = getParameterByName('region', url_parser.href);
	var preview_mode = getParameterByName("preview_mode", url_parser.href) || "0";

	var screen_to_show = getParameterByName("screen_to_show", url_parser.href);
	var splash = getParameterByName("splash", url_parser.href);
	var is_homepage = false;
	var port = "";
	if (~origin.indexOf(".loc")) {
		port = ":8080";
		// pathname = "/";
	}

	var widget_id = widget + new Date().getTime();
	var game_route = 'sim';

	// Origin
	widget_src =
		location.protocol + "//" + origin + port + pathname + game_route;

	var body_width = $me.parentElement.clientWidth || document.body.offsetWidth;

	$iframe.src = "";
	$iframe.id = "voting-" + widget_id;
	$iframe.className = "voting-widget";
	$iframe.width = "100%";
	$iframe.style.display = "block";
	$iframe.style.height = body_width < 620 ? "450px" : "235px";
	// $iframe.style.maxHeight = '80%';
	$iframe.style.margin = "0 auto 15px";
	$iframe.style.boxSizing = "border-box";
	$iframe.style.border = "none";
	$iframe.style.boxShadow = "none";
	$iframe.style.outline = "none";
	$iframe.style.transition = "height 100ms linear";
	var remember_height = 0;
	window.addEventListener(
		"message",
		function (e) {
			if (typeof JSON == "undefined" || !e.data) {
				return;
			}

			try {
				var data = JSON.parse(e.data);
			} catch (error) {
				return;
			}

			if (data.type === undefined || data.widget_id !== widget_id) {
				return;
			}

			if (
				data.type === "voting_change_height" &&
				$iframe.style.width !== 0
			) {
				var body_width =
					$iframe.clientWidth ||
					$me.parentElement.clientWidth ||
					document.body.offsetWidth;
				var height = body_width < 620 ? 450 : 235;
				
				if (data.plus_height) {
					remember_height = data.plus_height;
				}
				$iframe.style.height = height + remember_height + "px";
			}

			if (data.type === "voting_hide") {
				$iframe.style = "width:0; height:0; border:0; border:none";
				window.parent.postMessage(
					{
						sentinel: 'amp',
						type: 'embed-size',
						height: '100px',
					},
					'*'
				);
			}
		},
		false
	);

	insertAfter($iframe, $me);

	function createObserver() {
		var observer;

		var options = {
			root: null,
			rootMargin: "200px",
			threshold: 0,
		};

		observer = new IntersectionObserver(handleIntersect, options);
		observer.observe($iframe);
	}
	var created = false;
	function handleIntersect(entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting && !created) {
				addScript();
				created = true;
			}
		});
	}

	function addScript() {
		$iframe.src = widget_src;

		var iFrameElement = document.getElementById($iframe.id);
		iFrameElement.onload = function () {
			var frame_content = iFrameElement.contentWindow;
			var url = window.location.href;
			var decodedURL = decodeURIComponent(url);

			var is_amp = decodedURL.indexOf('platform=amp') !== -1;

			var article_id;
			var article_name;
			var tealium_visitor_id;
			var tags;
			var page_type;
			var page_section;
			var page_section_2;

			if (window.utag_data) {
				article_id = window.utag_data.article_id;
				article_name = window.utag_data.article_name;
				tealium_visitor_id = window.utag_data.tealium_visitor_id;
				tags = window.utag_data['meta.article:tag'];
				page_type = window.utag_data.page_type;
				page_section = window.utag_data.page_section;
				page_section_2 = window.utag_data.page_section_2;
			}
			else {
				article_id = getParameterByName('article_id', decodedURL);
				article_name = getParameterByName('article_name', decodedURL);
				tealium_visitor_id = "";
				tags = getParameterByName('tags', decodedURL);
				page_type = getParameterByName('page_type', decodedURL);
				page_section = getParameterByName('page_section', decodedURL);
				page_section_2 = getParameterByName('page_section_2', decodedURL);
			}

			is_homepage = ['section level 1', 'section level 2', 'homepage'].includes(page_type);

			var analytics = {
				article_id: article_id,
				url: url,
				article_name: article_name,
				tealium_visitor_id: tealium_visitor_id,
				is_amp: is_amp,
				page_type: page_type,
				is_homepage: is_homepage,
				page_section: page_section,
				page_section_2: page_section_2,
				tags: tags
			};

			frame_content.postMessage(
				JSON.stringify({
					type: "voting_widget_data",
					payload: {
						question_id: question_id,
						group_id: group_id,
						widget_id: widget_id,
						analytics: analytics,
						game: game,
						screen_to_show: screen_to_show,
						widget_id_to_show: widget_id_to_show,
						region_to_show: region_to_show,
						splash: splash ? parseInt(splash, 10) : null,
						preview_mode: parseInt(preview_mode, 10),
						nuk_customer_country_code: getCookie(
							"nuk_customer_country_code"
						),
						is_dt_score_predictor: getParameterByName('DTSP', url_parser.href) !== null,
						is_dt_bracket_challenge: getParameterByName('DTBC', url_parser.href) !== null,
						is_homepage_newsletter:  getParameterByName('newsletter', url_parser.href) !== null && is_homepage,
						is_homepage_promo: getParameterByName('promo', url_parser.href) !== null && is_homepage,
					},
				}),
				"*"
			);
		};
	}

	if ("IntersectionObserver" in window) {
		addScript(); //createObserver();
	} else {
		addScript();
	}

	var NewsUKWidgetIframe = function () {};

	NewsUKWidgetIframe.prototype = {
		iframe: document.getElementById($iframe.id),
		clearStorage: function (id) {
			var frame_content = this.iframe.contentWindow;
			frame_content.postMessage(
				JSON.stringify({
					type: "voting_widget_clear",
					payload: {
						id: id,
						game: game
					},
				}),
				"*"
			);
		},
		showWidget: function (payload) {
			var frame_content = this.iframe.contentWindow;
			payload.preview_mode = 1;
			payload.game = game;
			payload.question_id = question_id;
			payload.widget_id_to_show = widget_id_to_show;
			frame_content.postMessage(
				JSON.stringify({
					type: "voting_widget_create",
					payload: payload,
				}),
				"*"
			);
		},
		showFinal: function (payload) {
			var frame_content = this.iframe.contentWindow;

			payload.preview_mode = 1;
			payload.game = game;
			payload.question_id = question_id;
			frame_content.postMessage(
				JSON.stringify({
					type: "voting_widget_show_final",
					payload: payload,
				}),
				"*"
			);
		},
	};

	window.NewsUKWidgetIframe = NewsUKWidgetIframe;
})();
