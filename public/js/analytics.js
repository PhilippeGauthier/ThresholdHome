// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-28842847-1']);
_gaq.push(['_setDomainName', 'thresholdcm.com']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Mixpanel
(function(c,a){window.mixpanel=a;var b,d,h,e;b=c.createElement("script");
b.type="text/javascript";b.async=!0;b.src=("https:"===c.location.protocol?"https:":"http:")+
'//cdn.mxpnl.com/libs/mixpanel-2.2.min.js';d=c.getElementsByTagName("script")[0];
d.parentNode.insertBefore(b,d);a._i=[];a.init=function(b,c,f){function d(a,b){
var c=b.split(".");2==c.length&&(a=a[c[0]],b=c[1]);a[b]=function(){a.push([b].concat(
Array.prototype.slice.call(arguments,0)))}}var g=a;"undefined"!==typeof f?g=a[f]=[]:
f="mixpanel";g.people=g.people||[];h=['disable','track','track_pageview','track_links',
'track_forms','register','register_once','unregister','identify','alias','name_tag',
'set_config','people.set','people.increment','people.track_charge','people.append'];
for(e=0;e<h.length;e++)d(g,h[e]);a._i.push([b,c,f])};a.__SV=1.2;})(document,window.mixpanel||[]);
mixpanel.init("eaf4754f3bd2c7479c70a831d386c5d0");

// Mixpanel Generic Events
(function() {

  // Track page load
  mixpanel.track($('body').data('description') + " Page Loaded");

  // Track link clicks
  $('.trackable').each(function() {
    mixpanel.track_links('#'+ $(this).attr("id"), "Link Clicked", {
      "Page" : $('body').data('description'),
      "Info" : $(this).attr('id')
    });
  });

})();