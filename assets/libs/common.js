(function() {
    var ie = !!(window.attachEvent && !window.opera);
    var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
    var fn = [];
    var run = function() { for (var i = 0; i < fn.length; i++) fn[i](); };
    var d = document;
    d.ready = function(f) {
        if (!ie && !wk && d.addEventListener)
            return d.addEventListener('DOMContentLoaded', f, false);
        if (fn.push(f) > 1) return;
        if (ie)
            (function() {
                try {
                    d.documentElement.doScroll('left');
                    run();
                } catch (err) { setTimeout(arguments.callee, 0); }
            })();
        else if (wk)
            var t = setInterval(function() {
                if (/^(loaded|complete)$/.test(d.readyState))
                    clearInterval(t), run();
            }, 0);
    };
})();

var SWTOOL = {
    msg: function(text, time) {
    	var myTime = time || 2;
        layer.open({
            content: text,
            skin: 'msg',
            time: myTime
        })
    },
    alert: function(text) {
        layer.open({
            content: text
        })
    },
    confirm: function(text, yes, no) {
        layer.open({
            content: text,
            btn: ['确定', '取消'],
            yes: yes,
            no: no
        })
    }
}

SWTOOL.install = function(vue) {
    vue.prototype.SWTOOL = SWTOOL;
}