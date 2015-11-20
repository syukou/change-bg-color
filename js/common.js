/**
 * Created by taguchimunetaka on 2015/11/20.
 */

var SYUKOU = SYUKOU || {};

SYUKOU.COMMON = {};

SYUKOU.COMMON.FADEBG = {
	init: function () {
		this.setParameters();
		this.prepare();
		this.runEvent();
	},
	setParameters: function () {
		this.$window = $(window);
		this.$body = $('#jsi-body');
		this.$sectionBox = $('.jsc-section');

		this.bgColor = [];
		this.boxPos = [];

		this.current = 1;
	},
	prepare: function () {
		var _self = this;

		this.$sectionBox.each(function (i) {
			_self.bgColor[i] = $(this).find('.jsc-section-color').css('background-color');
			_self.boxPos[i] = $(this).offset().top;

		});
	},
	runEvent: function () {
		var myself = this;

		this.$window.on('scroll', function () {

			var topPos = myself.$window.scrollTop();

			for (var i = 0; i < myself.boxPos.length; i++) {
				if (topPos >= myself.boxPos[i]) {
					if (i != myself.current) {
						myself.current = i;
						myself.$body.stop().animate({'background-color' : myself.bgColor[myself.current]}, 300);
					}
				}
			}
		});
	}
};


$(window).on('load', function () {
	SYUKOU.COMMON.FADEBG.init();
});