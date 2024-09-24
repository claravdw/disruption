/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={7062:function(t,n,e){var i;!function(r,o){"use strict";var a="function",u="undefined",c="object",s="string",f="model",l="name",d="type",h="vendor",v="version",p="architecture",g="console",m="mobile",_="tablet",w="smarttv",y="wearable",b="embedded",E="Amazon",I="Apple",A="ASUS",T="BlackBerry",S="Firefox",k="Google",R="Huawei",N="LG",D="Microsoft",C="Motorola",O="Opera",x="Samsung",P="Sharp",M="Sony",L="Xiaomi",U="Zebra",V="Facebook",F=function(t){for(var n={},e=0;e<t.length;e++)n[t[e].toUpperCase()]=t[e];return n},z=function(t,n){return typeof t===s&&-1!==j(n).indexOf(j(t))},j=function(t){return t.toLowerCase()},G=function(t,n){if(typeof t===s)return t=t.replace(/^\s\s*/,""),typeof n===u?t:t.substring(0,350)},q=function(t,n){for(var e,i,r,u,s,f,l=0;l<n.length&&!s;){var d=n[l],h=n[l+1];for(e=i=0;e<d.length&&!s&&d[e];)if(s=d[e++].exec(t))for(r=0;r<h.length;r++)f=s[++i],typeof(u=h[r])===c&&u.length>0?2===u.length?typeof u[1]==a?this[u[0]]=u[1].call(this,f):this[u[0]]=u[1]:3===u.length?typeof u[1]!==a||u[1].exec&&u[1].test?this[u[0]]=f?f.replace(u[1],u[2]):o:this[u[0]]=f?u[1].call(this,f,u[2]):o:4===u.length&&(this[u[0]]=f?u[3].call(this,f.replace(u[1],u[2])):o):this[u]=f||o;l+=2}},B=function(t,n){for(var e in n)if(typeof n[e]===c&&n[e].length>0){for(var i=0;i<n[e].length;i++)if(z(n[e][i],t))return"?"===e?o:e}else if(z(n[e],t))return"?"===e?o:e;return t},H={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Y={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[v,[l,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[v,[l,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[l,v],[/opios[\/ ]+([\w\.]+)/i],[v,[l,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[v,[l,O]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[l,v],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[v,[l,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[v,[l,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[v,[l,"WeChat"]],[/konqueror\/([\w\.]+)/i],[v,[l,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[v,[l,"IE"]],[/yabrowser\/([\w\.]+)/i],[v,[l,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[l,/(.+)/,"$1 Secure Browser"],v],[/\bfocus\/([\w\.]+)/i],[v,[l,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[v,[l,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[v,[l,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[v,[l,"Dolphin"]],[/coast\/([\w\.]+)/i],[v,[l,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[v,[l,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[v,[l,S]],[/\bqihu|(qi?ho?o?|360)browser/i],[[l,"360 Browser"]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[l,/(.+)/,"$1 Browser"],v],[/(comodo_dragon)\/([\w\.]+)/i],[[l,/_/g," "],v],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[l,v],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[l],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[l,V],v],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[l,v],[/\bgsa\/([\w\.]+) .*safari\//i],[v,[l,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[v,[l,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[l,"Chrome WebView"],v],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[v,[l,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[l,v],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[v,[l,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[v,l],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[l,[v,B,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[l,v],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[l,"Netscape"],v],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[v,[l,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[l,v],[/(cobalt)\/([\w\.]+)/i],[l,[v,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,j]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",j]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,j]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[f,[h,x],[d,_]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[f,[h,x],[d,m]],[/\((ip(?:hone|od)[\w ]*);/i],[f,[h,I],[d,m]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[f,[h,I],[d,_]],[/(macintosh);/i],[f,[h,I]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[f,[h,P],[d,m]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[f,[h,R],[d,_]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[f,[h,R],[d,m]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[f,/_/g," "],[h,L],[d,m]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[f,/_/g," "],[h,L],[d,_]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[f,[h,"OPPO"],[d,m]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[f,[h,"Vivo"],[d,m]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[f,[h,"Realme"],[d,m]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[f,[h,C],[d,m]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[f,[h,C],[d,_]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[f,[h,N],[d,_]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[f,[h,N],[d,m]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[f,[h,"Lenovo"],[d,_]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[f,/_/g," "],[h,"Nokia"],[d,m]],[/(pixel c)\b/i],[f,[h,k],[d,_]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[f,[h,k],[d,m]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[f,[h,M],[d,m]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[f,"Xperia Tablet"],[h,M],[d,_]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[f,[h,"OnePlus"],[d,m]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[f,[h,E],[d,_]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[f,/(.+)/g,"Fire Phone $1"],[h,E],[d,m]],[/(playbook);[-\w\),; ]+(rim)/i],[f,h,[d,_]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[f,[h,T],[d,m]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[f,[h,A],[d,_]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[f,[h,A],[d,m]],[/(nexus 9)/i],[f,[h,"HTC"],[d,_]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[h,[f,/_/g," "],[d,m]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[f,[h,"Acer"],[d,_]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[f,[h,"Meizu"],[d,m]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[h,f,[d,m]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[h,f,[d,_]],[/(surface duo)/i],[f,[h,D],[d,_]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[f,[h,"Fairphone"],[d,m]],[/(u304aa)/i],[f,[h,"AT&T"],[d,m]],[/\bsie-(\w*)/i],[f,[h,"Siemens"],[d,m]],[/\b(rct\w+) b/i],[f,[h,"RCA"],[d,_]],[/\b(venue[\d ]{2,7}) b/i],[f,[h,"Dell"],[d,_]],[/\b(q(?:mv|ta)\w+) b/i],[f,[h,"Verizon"],[d,_]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[f,[h,"Barnes & Noble"],[d,_]],[/\b(tm\d{3}\w+) b/i],[f,[h,"NuVision"],[d,_]],[/\b(k88) b/i],[f,[h,"ZTE"],[d,_]],[/\b(nx\d{3}j) b/i],[f,[h,"ZTE"],[d,m]],[/\b(gen\d{3}) b.+49h/i],[f,[h,"Swiss"],[d,m]],[/\b(zur\d{3}) b/i],[f,[h,"Swiss"],[d,_]],[/\b((zeki)?tb.*\b) b/i],[f,[h,"Zeki"],[d,_]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[h,"Dragon Touch"],f,[d,_]],[/\b(ns-?\w{0,9}) b/i],[f,[h,"Insignia"],[d,_]],[/\b((nxa|next)-?\w{0,9}) b/i],[f,[h,"NextBook"],[d,_]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[h,"Voice"],f,[d,m]],[/\b(lvtel\-)?(v1[12]) b/i],[[h,"LvTel"],f,[d,m]],[/\b(ph-1) /i],[f,[h,"Essential"],[d,m]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[f,[h,"Envizen"],[d,_]],[/\b(trio[-\w\. ]+) b/i],[f,[h,"MachSpeed"],[d,_]],[/\btu_(1491) b/i],[f,[h,"Rotor"],[d,_]],[/(shield[\w ]+) b/i],[f,[h,"Nvidia"],[d,_]],[/(sprint) (\w+)/i],[h,f,[d,m]],[/(kin\.[onetw]{3})/i],[[f,/\./g," "],[h,D],[d,m]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[f,[h,U],[d,_]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[f,[h,U],[d,m]],[/smart-tv.+(samsung)/i],[h,[d,w]],[/hbbtv.+maple;(\d+)/i],[[f,/^/,"SmartTV"],[h,x],[d,w]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[h,N],[d,w]],[/(apple) ?tv/i],[h,[f,"Apple TV"],[d,w]],[/crkey/i],[[f,"Chromecast"],[h,k],[d,w]],[/droid.+aft(\w)( bui|\))/i],[f,[h,E],[d,w]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[f,[h,P],[d,w]],[/(bravia[\w ]+)( bui|\))/i],[f,[h,M],[d,w]],[/(mitv-\w{5}) bui/i],[f,[h,L],[d,w]],[/Hbbtv.*(technisat) (.*);/i],[h,f,[d,w]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[h,G],[f,G],[d,w]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,w]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[h,f,[d,g]],[/droid.+; (shield) bui/i],[f,[h,"Nvidia"],[d,g]],[/(playstation [345portablevi]+)/i],[f,[h,M],[d,g]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[f,[h,D],[d,g]],[/((pebble))app/i],[h,f,[d,y]],[/droid.+; (glass) \d/i],[f,[h,k],[d,y]],[/droid.+; (wt63?0{2,3})\)/i],[f,[h,U],[d,y]],[/(quest( 2| pro)?)/i],[f,[h,V],[d,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[h,[d,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[f,[d,m]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[f,[d,_]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,_]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,m]],[/(android[-\w\. ]{0,9});.+buil/i],[f,[h,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[v,[l,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[v,[l,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[l,v],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[v,l]],os:[[/microsoft (windows) (vista|xp)/i],[l,v],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[l,[v,B,H]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[l,"Windows"],[v,B,H]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[v,/_/g,"."],[l,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[l,"Mac OS"],[v,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[v,l],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[l,v],[/\(bb(10);/i],[v,[l,T]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[v,[l,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[v,[l,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[v,[l,"webOS"]],[/crkey\/([\d\.]+)/i],[v,[l,"Chromecast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[l,"Chromium OS"],v],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[l,v],[/(sunos) ?([\w\.\d]*)/i],[[l,"Solaris"],v],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[l,v]]},K=function(t,n){if(typeof t===c&&(n=t,t=o),!(this instanceof K))return new K(t,n).getResult();var e=t||(typeof r!==u&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),i=typeof r!==u&&r.navigator&&r.navigator.userAgentData?r.navigator.userAgentData:o,a=n?function(t,n){var e={};for(var i in t)n[i]&&n[i].length%2==0?e[i]=n[i].concat(t[i]):e[i]=t[i];return e}(Y,n):Y;return this.getBrowser=function(){var t,n={};return n.name=o,n.version=o,q.call(n,e,a.browser),n.major=typeof(t=n.version)===s?t.replace(/[^\d\.]/g,"").split(".")[0]:o,n},this.getCPU=function(){var t={};return t.architecture=o,q.call(t,e,a.cpu),t},this.getDevice=function(){var t={};return t.vendor=o,t.model=o,t.type=o,q.call(t,e,a.device),!t.type&&i&&i.mobile&&(t.type=m),t},this.getEngine=function(){var t={};return t.name=o,t.version=o,q.call(t,e,a.engine),t},this.getOS=function(){var t={};return t.name=o,t.version=o,q.call(t,e,a.os),!t.name&&i&&"Unknown"!=i.platform&&(t.name=i.platform.replace(/chrome/i,"Chromium").replace(/mac/i,"Mac ")),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(t){return e=typeof t===s&&t.length>350?G(t,350):t,this},this.setUA(e),this};K.VERSION="0.7.33",K.BROWSER=F([l,v,"major"]),K.CPU=F([p]),K.DEVICE=F([f,h,d,g,m,w,_,y,b]),K.ENGINE=K.OS=F([l,v]),typeof n!==u?(t.exports&&(n=t.exports=K),n.UAParser=K):e.amdO?(i=function(){return K}.call(n,e,n,t))===o||(t.exports=i):typeof r!==u&&(r.UAParser=K)}("object"==typeof window?window:this)},9981:function(t,n,e){var i=e(7669)(),r=e(1397);t.exports=function(t,n){function e(n){if(!(this instanceof e))return new e(n);try{throw new Error(n)}catch(o){o.name=t,this.stack=o.stack}i&&this.stack&&(this.stack=r(this.stack,t,n)),this.message=n||"",this.name=t}return e.prototype=new(n||Error),e.prototype.constructor=e,e.prototype.inspect=function(){return this.message?"["+t+": "+this.message+"]":"["+t+"]"},e.prototype.name=t,e}},1397:function(t){"use strict";t.exports=function(t,n,e){var i=n;return e&&(i+=": "+e),t=i+t.slice(t.indexOf("\n"))}},7669:function(t){"use strict";t.exports=function(){var t=new Error("yep");return!!t.stack&&"Error: yep\n"===t.stack.substr(0,11)}},1763:function(t,n,e){t.exports=function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}undefined;var i=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=undefined,a=undefined,u=function(t,n){y[r]=t,y[r+1]=n,2===(r+=2)&&(a?a(b):I())};function c(t){a=t}function s(t){u=t}var f="undefined"!=typeof window?window:undefined,l=f||{},d=l.MutationObserver||l.WebKitMutationObserver,h="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),v="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){return function(){return process.nextTick(b)}}function g(){return void 0!==o?function(){o(b)}:w()}function m(){var t=0,n=new d(b),e=document.createTextNode("");return n.observe(e,{characterData:!0}),function(){e.data=t=++t%2}}function _(){var t=new MessageChannel;return t.port1.onmessage=b,function(){return t.port2.postMessage(0)}}function w(){var t=setTimeout;return function(){return t(b,1)}}var y=new Array(1e3);function b(){for(var t=0;t<r;t+=2)(0,y[t])(y[t+1]),y[t]=undefined,y[t+1]=undefined;r=0}function E(){try{undefined;var t=e(2016);return o=t.runOnLoop||t.runOnContext,g()}catch(n){return w()}}var I=undefined;function A(t,n){var e=arguments,i=this,r=new this.constructor(k);r[S]===undefined&&Q(r);var o,a=i._state;return a?(o=e[a-1],u((function(){return $(a,r,o,i._result)}))):q(i,r,t,n),r}function T(t){var n=this;if(t&&"object"==typeof t&&t.constructor===n)return t;var e=new n(k);return F(e,t),e}I=h?p():d?m():v?_():f===undefined?E():w();var S=Math.random().toString(36).substring(16);function k(){}var R=void 0,N=1,D=2,C=new H;function O(){return new TypeError("You cannot resolve a promise with itself")}function x(){return new TypeError("A promises callback cannot return that same promise.")}function P(t){try{return t.then}catch(n){return C.error=n,C}}function M(t,n,e,i){try{t.call(n,e,i)}catch(r){return r}}function L(t,n,e){u((function(t){var i=!1,r=M(e,n,(function(e){i||(i=!0,n!==e?F(t,e):j(t,e))}),(function(n){i||(i=!0,G(t,n))}),"Settle: "+(t._label||" unknown promise"));!i&&r&&(i=!0,G(t,r))}),t)}function U(t,n){n._state===N?j(t,n._result):n._state===D?G(t,n._result):q(n,undefined,(function(n){return F(t,n)}),(function(n){return G(t,n)}))}function V(t,e,i){e.constructor===t.constructor&&i===A&&e.constructor.resolve===T?U(t,e):i===C?(G(t,C.error),C.error=null):i===undefined?j(t,e):n(i)?L(t,e,i):j(t,e)}function F(n,e){n===e?G(n,O()):t(e)?V(n,e,P(e)):j(n,e)}function z(t){t._onerror&&t._onerror(t._result),B(t)}function j(t,n){t._state===R&&(t._result=n,t._state=N,0!==t._subscribers.length&&u(B,t))}function G(t,n){t._state===R&&(t._state=D,t._result=n,u(z,t))}function q(t,n,e,i){var r=t._subscribers,o=r.length;t._onerror=null,r[o]=n,r[o+N]=e,r[o+D]=i,0===o&&t._state&&u(B,t)}function B(t){var n=t._subscribers,e=t._state;if(0!==n.length){for(var i=undefined,r=undefined,o=t._result,a=0;a<n.length;a+=3)i=n[a],r=n[a+e],i?$(e,i,r,o):r(o);t._subscribers.length=0}}function H(){this.error=null}var Y=new H;function K(t,n){try{return t(n)}catch(e){return Y.error=e,Y}}function $(t,e,i,r){var o=n(i),a=undefined,u=undefined,c=undefined,s=undefined;if(o){if((a=K(i,r))===Y?(s=!0,u=a.error,a.error=null):c=!0,e===a)return void G(e,x())}else a=r,c=!0;e._state!==R||(o&&c?F(e,a):s?G(e,u):t===N?j(e,a):t===D&&G(e,a))}function W(t,n){try{n((function(n){F(t,n)}),(function(n){G(t,n)}))}catch(e){G(t,e)}}var X=0;function J(){return X++}function Q(t){t[S]=X++,t._state=undefined,t._result=undefined,t._subscribers=[]}function Z(t,n){this._instanceConstructor=t,this.promise=new t(k),this.promise[S]||Q(this.promise),i(n)?(this._input=n,this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?j(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&j(this.promise,this._result))):G(this.promise,tt())}function tt(){return new Error("Array Methods must be provided an Array")}function nt(t){return new Z(this,t).promise}function et(t){var n=this;return i(t)?new n((function(e,i){for(var r=t.length,o=0;o<r;o++)n.resolve(t[o]).then(e,i)})):new n((function(t,n){return n(new TypeError("You must pass an array to race."))}))}function it(t){var n=new this(k);return G(n,t),n}function rt(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ot(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function at(t){this[S]=J(),this._result=this._state=undefined,this._subscribers=[],k!==t&&("function"!=typeof t&&rt(),this instanceof at?W(this,t):ot())}function ut(){var t=undefined;if("undefined"!=typeof e.g)t=e.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(r){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var i=null;try{i=Object.prototype.toString.call(n.resolve())}catch(r){}if("[object Promise]"===i&&!n.cast)return}t.Promise=at}return Z.prototype._enumerate=function(){for(var t=this.length,n=this._input,e=0;this._state===R&&e<t;e++)this._eachEntry(n[e],e)},Z.prototype._eachEntry=function(t,n){var e=this._instanceConstructor,i=e.resolve;if(i===T){var r=P(t);if(r===A&&t._state!==R)this._settledAt(t._state,n,t._result);else if("function"!=typeof r)this._remaining--,this._result[n]=t;else if(e===at){var o=new e(k);V(o,t,r),this._willSettleAt(o,n)}else this._willSettleAt(new e((function(n){return n(t)})),n)}else this._willSettleAt(i(t),n)},Z.prototype._settledAt=function(t,n,e){var i=this.promise;i._state===R&&(this._remaining--,t===D?G(i,e):this._result[n]=e),0===this._remaining&&j(i,this._result)},Z.prototype._willSettleAt=function(t,n){var e=this;q(t,undefined,(function(t){return e._settledAt(N,n,t)}),(function(t){return e._settledAt(D,n,t)}))},at.all=nt,at.race=et,at.resolve=T,at.reject=it,at._setScheduler=c,at._setAsap=s,at._asap=u,at.prototype={constructor:at,then:A,"catch":function(t){return this.then(null,t)}},at.polyfill=ut,at.Promise=at,at}()},6744:function(t){"use strict";t.exports=function(t){var n,e={};if(!(t instanceof Object)||Array.isArray(t))throw new Error("keyMirror(...): Argument must be an object.");for(n in t)t.hasOwnProperty(n)&&(e[n]=n);return e}},7699:function(t){"use strict";t.exports=function(t,n,e,i){Object.defineProperty(t,n,{get:function(){var t=e.call(this);return Object.defineProperty(this,n,{value:t,enumerable:!!i,writable:!0}),t},set:function(t){return Object.defineProperty(this,n,{value:t,enumerable:!!i,writable:!0}),t},enumerable:!!i,configurable:!0})}},5410:function(t){"use strict";var n=Element.prototype,e=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;t.exports=function(t,n){if(e)return e.call(t,n);for(var i=t.parentNode.querySelectorAll(n),r=0;r<i.length;r++)if(i[r]==t)return!0;return!1}},4101:function(t){!function(){function n(t,n){var e,i,r,o,a,u,c,s;for(e=3&t.length,i=t.length-e,r=n,a=3432918353,u=461845907,s=0;s<i;)c=255&t.charCodeAt(s)|(255&t.charCodeAt(++s))<<8|(255&t.charCodeAt(++s))<<16|(255&t.charCodeAt(++s))<<24,++s,r=27492+(65535&(o=5*(65535&(r=(r^=c=(65535&(c=(c=(65535&c)*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295)<<13|r>>>19))+((5*(r>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16);switch(c=0,e){case 3:c^=(255&t.charCodeAt(s+2))<<16;case 2:c^=(255&t.charCodeAt(s+1))<<8;case 1:r^=c=(65535&(c=(c=(65535&(c^=255&t.charCodeAt(s)))*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295}return r^=t.length,r=2246822507*(65535&(r^=r>>>16))+((2246822507*(r>>>16)&65535)<<16)&4294967295,r=3266489909*(65535&(r^=r>>>13))+((3266489909*(r>>>16)&65535)<<16)&4294967295,(r^=r>>>16)>>>0}var e=n;e.v2=function(t,n){for(var e,i=t.length,r=n^i,o=0;i>=4;)e=1540483477*(65535&(e=255&t.charCodeAt(o)|(255&t.charCodeAt(++o))<<8|(255&t.charCodeAt(++o))<<16|(255&t.charCodeAt(++o))<<24))+((1540483477*(e>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^(e=1540483477*(65535&(e^=e>>>24))+((1540483477*(e>>>16)&65535)<<16)),i-=4,++o;switch(i){case 3:r^=(255&t.charCodeAt(o+2))<<16;case 2:r^=(255&t.charCodeAt(o+1))<<8;case 1:r=1540483477*(65535&(r^=255&t.charCodeAt(o)))+((1540483477*(r>>>16)&65535)<<16)}return r=1540483477*(65535&(r^=r>>>13))+((1540483477*(r>>>16)&65535)<<16),(r^=r>>>15)>>>0},e.v3=n,t.exports=e}()},356:function(t,n,e){t=e.nmd(t),function(){var i,r="Expected a function",o="__lodash_hash_undefined__",a=9007199254740991,u="[object Arguments]",c="[object Array]",s="[object Boolean]",f="[object Date]",l="[object Error]",d="[object Function]",h="[object GeneratorFunction]",v="[object Map]",p="[object Number]",g="[object Object]",m="[object RegExp]",_="[object Set]",w="[object String]",y="[object Symbol]",b="[object WeakMap]",E="[object ArrayBuffer]",I="[object Float32Array]",A="[object Float64Array]",T="[object Int8Array]",S="[object Int16Array]",k="[object Int32Array]",R="[object Uint8Array]",N="[object Uint8ClampedArray]",D="[object Uint16Array]",C="[object Uint32Array]",O=/[&<>"'`]/g,x=RegExp(O.source),P=/\w*$/,M=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,U={};U[I]=U[A]=U[T]=U[S]=U[k]=U[R]=U[N]=U[D]=U[C]=!0,U[u]=U[c]=U[E]=U[s]=U[f]=U[l]=U[d]=U[v]=U[p]=U[g]=U[m]=U[_]=U[w]=U[b]=!1;var V={};V[u]=V[c]=V[E]=V[s]=V[f]=V[I]=V[A]=V[T]=V[S]=V[k]=V[v]=V[p]=V[g]=V[m]=V[_]=V[w]=V[y]=V[R]=V[N]=V[D]=V[C]=!0,V[l]=V[d]=V[b]=!1;var F={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},z={"function":!0,object:!0},j=z[typeof n]&&n&&!n.nodeType?n:i,G=z.object&&t&&!t.nodeType?t:i,q=G&&G.exports===j?j:i,B=rt(j&&G&&"object"==typeof e.g&&e.g),H=rt(z[typeof self]&&self),Y=rt(z[typeof window]&&window),K=rt(z[typeof this]&&this),$=B||Y!==(K&&K.window)&&Y||H||K||Function("return this")();function W(t,n){return t.set(n[0],n[1]),t}function X(t,n){return t.add(n),t}function J(t,n){return tt(In(t),Ae)}function Q(t,n){return!!t.length&&et(t,n,0)>-1}function Z(t,n,e){for(var i=-1,r=t.length;++i<r;)if(e(n,t[i]))return!0;return!1}function tt(t,n){for(var e=-1,i=n.length,r=t.length;++e<i;)t[r+e]=n[e];return t}function nt(t,n,e){for(var r=-1,o=t.length;++r<o;){var a=t[r],u=n(a);if(null!=u&&(c===i?u==u:e(u,c)))var c=u,s=a}return s}function et(t,n,e){if(n!=n)return function(t,n,e){var i=t.length,r=n+(e?0:-1);for(;e?r--:++r<i;){var o=t[r];if(o!=o)return r}return-1}(t,e);for(var i=e-1,r=t.length;++i<r;)if(t[i]===n)return i;return-1}function it(t,n,e,i,r){return r(t,(function(t,r,o){e=i?(i=!1,t):n(e,t,r,o)})),e}function rt(t){return t&&t.Object===Object?t:null}function ot(t){return F[t]}function at(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(e){}return n}function ut(t,n){return t="number"==typeof t||L.test(t)?+t:-1,n=null==n?a:n,t>-1&&t%1==0&&t<n}var ct=Array.prototype,st=Object.prototype,ft=Function.prototype.toString,lt=st.hasOwnProperty,dt=0,ht=ft.call(Object),vt=st.toString,pt=$._,gt=RegExp("^"+ft.call(lt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),mt=$.Reflect,_t=$.Symbol,wt=$.Uint8Array,yt=mt?mt.enumerate:i,bt=Object.getPrototypeOf,Et=Object.getOwnPropertySymbols,It=Object.create,At=st.propertyIsEnumerable,Tt=ct.splice,St=$.isFinite,kt=Object.keys,Rt=Math.max,Nt=On($,"Map"),Dt=On($,"Set"),Ct=On($,"WeakMap"),Ot=On(Object,"create"),xt=Nt?ft.call(Nt):"",Pt=Dt?ft.call(Dt):"",Mt=Ct?ft.call(Ct):"",Lt=_t?_t.prototype:i,Ut=Lt?Lt.valueOf:i;function Vt(t){if(ue(t)&&!Zn(t)){if(t instanceof Ft)return t;if(lt.call(t,"__wrapped__"))return function(t){var n=new Ft(t.u,t.l);return n.m=In(t.m),n}(t)}return new Ft(t)}function Ft(t,n){this.u=t,this.m=[],this.l=!!n}function zt(){}function jt(t,n){return Ot?t[n]!==i:lt.call(t,n)}function Gt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var i=t[n];this.set(i[0],i[1])}}function qt(t){var n=-1,e=t?t.length:0;for(this.I=new Gt;++n<e;)this.push(t[n])}function Bt(t,n){var e=t.I;if(Ln(n)){var i=e.I;return("string"==typeof n?i.string:i.hash)[n]===o}return e.has(n)}function Ht(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var i=t[n];this.set(i[0],i[1])}}function Yt(t,n){var e=Wt(t,n);return!(e<0)&&(e==t.length-1?t.pop():Tt.call(t,e,1),!0)}function Kt(t,n){var e=Wt(t,n);return e<0?i:t[e][1]}function $t(t,n){return Wt(t,n)>-1}function Wt(t,n){for(var e=t.length;e--;)if(Xn(t[e][0],n))return e;return-1}function Xt(t,n,e){var i=Wt(t,n);i<0?t.push([n,e]):t[i][1]=e}function Jt(t,n,e,r){return t===i||Xn(t,st[e])&&!lt.call(r,e)?n:t}function Qt(t,n,e){(e!==i&&!Xn(t[n],e)||"number"==typeof n&&e===i&&!(n in t))&&(t[n]=e)}function Zt(t,n,e){var r=t[n];lt.call(t,n)&&Xn(r,e)&&(e!==i||n in t)||(t[n]=e)}function tn(t){return"function"==typeof t?t:Te}function nn(t,n,e,r,o,a,c){var l;if(r&&(l=a?r(t,o,a,c):r(t)),l!==i)return l;if(!ae(t))return t;var b=Zn(t);if(b){if(l=function(t){var n=t.length,e=t.constructor(n);n&&"string"==typeof t[0]&&lt.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!n)return In(t)}else{var O=Pn(t),x=O==d||O==h;if(ie(t))return function(t,n){if(n)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,n);if(O==g||O==u||x&&!a){if(at(t))return a?t:{};if(l=function(t){return"function"!=typeof t.constructor||Un(t)?{}:en(bt(t))}(x?{}:t),!n)return l=function(t,n){return t&&Sn(n,we(n),t)}(l,t),e?Rn(t,l):l}else{if(!V[O])return a?t:{};l=function(t,n,e){var i=t.constructor;switch(n){case E:return Tn(t);case s:case f:return new i(+t);case I:case A:case T:case S:case k:case R:case N:case D:case C:return function(t,n){var e=n?Tn(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,e);case v:return function(t){return qn(function(t){var n=-1,e=Array(t.size);return t.forEach((function(t,i){e[++n]=[i,t]})),e}(t),W,new t.constructor)}(t);case p:case w:return new i(t);case m:return function(t){var n=new t.constructor(t.source,P.exec(t));return n.lastIndex=t.lastIndex,n}(t);case _:return qn(function(t){var n=-1,e=Array(t.size);return t.forEach((function(t){e[++n]=t})),e}(o=t),X,new o.constructor);case y:return r=t,Ut?Object(Ut.call(r)):{}}var r;var o}(t,O,n)}}c||(c=new Ht);var M=c.get(t);return M||(c.set(t,l),(b?un:ln)(t,(function(i,o){Zt(l,o,nn(i,n,e,r,o,t,c))})),e&&!b?Rn(t,l):l)}function en(t){return ae(t)?It(t):{}}function rn(t,n,e){if("function"!=typeof t)throw new TypeError(r);return setTimeout((function(){t.apply(i,e)}),n)}var on,an,un=(on=ln,function(t,n){if(null==t)return t;if(!te(t))return on(t,n);for(var e=t.length,i=an?e:-1,r=Object(t);(an?i--:++i<e)&&!1!==n(r[i],i,r););return t});function cn(t,n){var e=[];return un(t,(function(t,i,r){n(t,i,r)&&e.push(t)})),e}function sn(t,n,e,i){i||(i=[]);for(var r=-1,o=t.length;++r<o;){var a=t[r];n>0&&ne(a)&&(e||Zn(a)||Qn(a))?n>1?sn(a,n-1,e,i):tt(i,a):e||(i[i.length]=a)}return i}var fn=function(t){return function(n,e,i){for(var r=-1,o=Object(n),a=i(n),u=a.length;u--;){var c=a[t?u:++r];if(!1===e(o[c],c,o))break}return n}}();function ln(t,n){return t&&fn(t,n,we)}function dn(t,n){return cn(n,(function(n){return re(t[n])}))}function hn(t,n,e,r,o){return t===n||(null==t||null==n||!ae(t)&&!ue(n)?t!=t&&n!=n:function(t,n,e,r,o,a){var d=Zn(t),h=Zn(n),v=c,_=c;d||(v=(v=vt.call(t))==u?g:v);h||(_=(_=vt.call(n))==u?g:_);var y=v==g&&!at(t),b=_==g&&!at(n),E=v==_;a||(a=[]);var I=jn(a,(function(n){return n[0]===t}));if(I&&I[1])return I[1]==n;if(a.push([t,n]),E&&!y){var A=d||fe(t)?function(t,n,e,r,o,a){var u=-1,c=2&o,s=1&o,f=t.length,l=n.length;if(f!=l&&!(c&&l>f))return!1;var d=!0;for(;++u<f;){var h,v=t[u],p=n[u];if(h!==i){if(h)continue;d=!1;break}if(s){if(!An(n,(function(t){return v===t||e(v,t,r,o,a)}))){d=!1;break}}else if(v!==p&&!e(v,p,r,o,a)){d=!1;break}}return d}(t,n,e,r,o,a):function(t,n,e,i,r,o,a){switch(e){case s:case f:return+t==+n;case l:return t.name==n.name&&t.message==n.message;case p:return t!=+t?n!=+n:t==+n;case m:case w:return t==n+""}return!1}(t,n,v);return a.pop(),A}if(!(2&o)){var T=y&&lt.call(t,"__wrapped__"),S=b&&lt.call(n,"__wrapped__");if(T||S){A=e(T?t.value():t,S?n.value():n,r,o,a);return a.pop(),A}}if(!E)return!1;A=function(t,n,e,r,o,a){var u=2&o,c=we(t),s=c.length,f=we(n).length;if(s!=f&&!u)return!1;var l=s;for(;l--;){var d=c[l];if(!(u?d in n:lt.call(n,d)))return!1}var h=!0,v=u;for(;++l<s;){var p,g=t[d=c[l]],m=n[d];if(!(p===i?g===m||e(g,m,r,o,a):p)){h=!1;break}v||(v="constructor"==d)}if(h&&!v){var _=t.constructor,w=n.constructor;_==w||!("constructor"in t)||!("constructor"in n)||"function"==typeof _&&_ instanceof _&&"function"==typeof w&&w instanceof w||(h=!1)}return h}(t,n,e,r,o,a);return a.pop(),A}(t,n,hn,e,r,o))}function vn(t){var n=typeof t;return"function"==n?t:null==t?Te:("object"==n?mn:bn)(t)}function pn(t){t=null==t?t:Object(t);var n=[];for(var e in t)n.push(e);return n}function gn(t,n){var e=-1,i=te(t)?Array(t.length):[];return un(t,(function(t,r,o){i[++e]=n(t,r,o)})),i}function mn(t){var n=we(t);return function(e){var r=n.length;if(null==e)return!r;for(e=Object(e);r--;){var o=n[r];if(!(o in e)||!hn(t[o],e[o],i,3))return!1}return!0}}function _n(t,n,e,r,o){if(t!==n){var a=Zn(n)||fe(n)?i:ye(n);un(a||n,(function(u,c){if(a&&(u=n[c=u]),ae(u))o||(o=new Ht),function(t,n,e,r,o,a,u){var c=t[e],s=n[e],f=u.get(s);if(f)return void Qt(t,e,f);var l=a?a(c,s,e+"",t,n,u):i,d=l===i;d&&(l=s,Zn(s)||fe(s)?Zn(c)?l=c:ne(c)?l=In(c):(d=!1,l=nn(s,!a)):function(t){if(!ue(t)||vt.call(t)!=g||at(t))return!1;var n=bt(t);if(null===n)return!0;var e=n.constructor;return"function"==typeof e&&e instanceof e&&ft.call(e)==ht}(s)||Qn(s)?Qn(c)?l=Sn(h=c,ye(h)):!ae(c)||r&&re(c)?(d=!1,l=nn(s,!a)):l=c:d=!1);var h;u.set(s,l),d&&o(l,s,r,a,u);u["delete"](s),Qt(t,e,l)}(t,n,c,e,_n,r,o);else{var s=r?r(t[c],u,c+"",t,n,o):i;s===i&&(s=u),Qt(t,c,s)}}))}}function wn(t,n){return t=Object(t),qn(n,(function(n,e){return e in t&&(n[e]=t[e]),n}),{})}function yn(t,n){var e={};return function(t,n){null==t||fn(t,n,ye)}(t,(function(t,i){n(t,i)&&(e[i]=t)})),e}function bn(t){return function(n){return null==n?i:n[t]}}function En(t,n,e){var i=-1,r=t.length;n<0&&(n=-n>r?0:r+n),(e=e>r?r:e)<0&&(e+=r),r=n>e?0:e-n>>>0,n>>>=0;for(var o=Array(r);++i<r;)o[i]=t[i+n];return o}function In(t){return En(t,0,t.length)}function An(t,n){var e;return un(t,(function(t,i,r){return!(e=n(t,i,r))})),!!e}function Tn(t){var n=new t.constructor(t.byteLength);return new wt(n).set(new wt(t)),n}yt&&!At.call({valueOf:1},"valueOf")&&(pn=function(t){return function(t){for(var n,e=[];!(n=t.next()).done;)e.push(n.value);return e}(yt(t))});var Sn=kn;function kn(t,n,e,i){e||(e={});for(var r=-1,o=n.length;++r<o;){var a=n[r];Zt(e,a,i?i(e[a],t[a],a,e,t):t[a])}return e}function Rn(t,n){return Sn(t,xn(t),n)}function Nn(t){return Wn((function(n,e){var r=-1,o=e.length,a=o>1?e[o-1]:i;for(a="function"==typeof a?(o--,a):i,n=Object(n);++r<o;){var u=e[r];u&&t(n,u,r,a)}return n}))}function Dn(t,n,e,i){if("function"!=typeof t)throw new TypeError(r);var o=1&n,a=function(t){return function(){var n=arguments,e=en(t.prototype),i=t.apply(e,n);return ae(i)?i:e}}(t);return function u(){for(var n=-1,r=arguments.length,c=-1,s=i.length,f=Array(s+r),l=this&&this!==$&&this instanceof u?a:t;++c<s;)f[c]=i[c];for(;r--;)f[c++]=arguments[++n];return l.apply(o?e:this,f)}}var Cn=bn("length");function On(t,n){var e=t[n];return function(t){if(null==t)return!1;if(re(t))return gt.test(ft.call(t));return ue(t)&&(at(t)?gt:M).test(t)}(e)?e:i}var xn=Et||function(){return[]};function Pn(t){return vt.call(t)}function Mn(t){var n=t?t.length:i;return oe(n)&&(Zn(t)||se(t)||Qn(t))?function(t,n){for(var e=-1,i=Array(t);++e<t;)i[e]=n(e);return i}(n,String):null}function Ln(t){var n=typeof t;return"number"==n||"boolean"==n||"string"==n&&"__proto__"!=t||null==t}function Un(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||st)}(Nt&&Pn(new Nt)!=v||Dt&&Pn(new Dt)!=_||Ct&&Pn(new Ct)!=b)&&(Pn=function(t){var n=vt.call(t),e=n==g?t.constructor:null,i="function"==typeof e?ft.call(e):"";if(i)switch(i){case xt:return v;case Pt:return _;case Mt:return b}return n});var Vn=Wn((function(t,n){return Zn(t)||(t=null==t?[]:[Object(t)]),n=sn(n,1),J(t)}));function Fn(t){return t?t[0]:i}function zn(t){var n=Vt(t);return n.l=!0,n}function jn(t,n){return function(t,n,e,i){var r;return e(t,(function(t,e,o){if(n(t,e,o))return r=i?e:t,!1})),r}(t,vn(n),un)}function Gn(t,n){return un(t,tn(n))}function qn(t,n,e){return it(t,vn(n),e,arguments.length<3,un)}function Bn(t,n){var e;if("function"!=typeof n)throw new TypeError(r);return t=de(t),function(){return--t>0&&(e=n.apply(this,arguments)),t<=1&&(n=i),e}}var Hn=Wn((function(t,n,e){return Dn(t,33,n,e)})),Yn=Wn((function(t,n){return rn(t,1,n)})),Kn=Wn((function(t,n,e){return rn(t,he(n)||0,e)}));var $n=Wn((function(t,n){return Dn(t,32,i,n)}));function Wn(t,n){if("function"!=typeof t)throw new TypeError(r);return n=Rt(n===i?t.length-1:de(n),0),function(){for(var e=arguments,i=-1,r=Rt(e.length-n,0),o=Array(r);++i<r;)o[i]=e[n+i];var a=Array(n+1);for(i=-1;++i<n;)a[i]=e[i];return a[n]=o,t.apply(this,a)}}function Xn(t,n){return t===n||t!=t&&n!=n}function Jn(t,n){return t>n}function Qn(t){return ne(t)&&lt.call(t,"callee")&&(!At.call(t,"callee")||vt.call(t)==u)}var Zn=Array.isArray;function te(t){return null!=t&&oe(Cn(t))&&!re(t)}function ne(t){return ue(t)&&te(t)}var ee,ie=(ee=!1,function(){return ee});function re(t){var n=ae(t)?vt.call(t):"";return n==d||n==h}function oe(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}function ae(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function ue(t){return!!t&&"object"==typeof t}function ce(t){return"number"==typeof t||ue(t)&&vt.call(t)==p}function se(t){return"string"==typeof t||!Zn(t)&&ue(t)&&vt.call(t)==w}function fe(t){return ue(t)&&oe(t.length)&&!!U[vt.call(t)]}function le(t,n){return t<n}var de=Number,he=Number;function ve(t){return"string"==typeof t?t:null==t?"":t+""}var pe=Nn((function(t,n){Sn(n,we(n),t)})),ge=Nn((function(t,n){Sn(n,ye(n),t)})),me=Nn((function(t,n,e,i){kn(n,ye(n),t,i)}));var _e=Wn((function(t){return t.push(i,Jt),me.apply(i,t)}));function we(t){var n=Un(t);if(!n&&!te(t))return function(t){return kt(Object(t))}(t);var e=Mn(t),i=!!e,r=e||[],o=r.length;for(var a in t)!lt.call(t,a)||i&&("length"==a||ut(a,o))||n&&"constructor"==a||r.push(a);return r}function ye(t){for(var n=-1,e=Un(t),i=pn(t),r=i.length,o=Mn(t),a=!!o,u=o||[],c=u.length;++n<r;){var s=i[n];a&&("length"==s||ut(s,c))||"constructor"==s&&(e||!lt.call(t,s))||u.push(s)}return u}var be=Nn((function(t,n,e){_n(t,n,e)})),Ee=Wn((function(t,n){return null==t?{}:(n=gn(sn(n,1),String),wn(t,function(t,n,e,i){var r,o=-1,a=Q,u=!0,c=t.length,s=[],f=n.length;if(!c)return s;e&&(n=gn(n,(r=e,function(t){return r(t)}))),i?(a=Z,u=!1):n.length>=200&&(a=Bt,u=!1,n=new qt(n));t:for(;++o<c;){var l=t[o],d=e?e(l):l;if(u&&d==d){for(var h=f;h--;)if(n[h]===d)continue t;s.push(l)}else a(n,d,i)||s.push(l)}return s}(ye(t),n)))}));var Ie=Wn((function(t,n){return null==t?{}:wn(t,sn(n,1))}));function Ae(t){return t?function(t,n){return gn(n,(function(n){return t[n]}))}(t,we(t)):[]}function Te(t){return t}var Se,ke=vn;function Re(t,n,e){var i=we(n),r=dn(n,i);null!=e||ae(n)&&(r.length||!i.length)||(e=n,n=t,t=this,r=dn(n,we(n)));var o=!ae(e)||!("chain"in e)||e.chain,a=re(t);return un(r,(function(e){var i=n[e];t[e]=i,a&&(t.prototype[e]=function(){var n=this.l;if(o||n){var e=t(this.u),r=e.m=In(this.m);return r.push({func:i,args:arguments,thisArg:t}),e.l=n,e}return i.apply(t,tt([this.value()],arguments))})})),t}Ft.prototype=en(Vt.prototype),Ft.prototype.constructor=Ft,zt.prototype=Ot?Ot(null):st,Gt.prototype.clear=function(){this.I={hash:new zt,map:Nt?new Nt:[],string:new zt}},Gt.prototype["delete"]=function(t){var n=this.I;return Ln(t)?function(t,n){return jt(t,n)&&delete t[n]}("string"==typeof t?n.string:n.hash,t):Nt?n.map["delete"](t):Yt(n.map,t)},Gt.prototype.get=function(t){var n=this.I;return Ln(t)?function(t,n){if(Ot){var e=t[n];return e===o?i:e}return lt.call(t,n)?t[n]:i}("string"==typeof t?n.string:n.hash,t):Nt?n.map.get(t):Kt(n.map,t)},Gt.prototype.has=function(t){var n=this.I;return Ln(t)?jt("string"==typeof t?n.string:n.hash,t):Nt?n.map.has(t):$t(n.map,t)},Gt.prototype.set=function(t,n){var e=this.I;return Ln(t)?function(t,n,e){t[n]=Ot&&e===i?o:e}("string"==typeof t?e.string:e.hash,t,n):Nt?e.map.set(t,n):Xt(e.map,t,n),this},qt.prototype.push=function(t){var n=this.I;if(Ln(t)){var e=n.I;("string"==typeof t?e.string:e.hash)[t]=o}else n.set(t,o)},Ht.prototype.clear=function(){this.I={array:[],map:null}},Ht.prototype["delete"]=function(t){var n=this.I,e=n.array;return e?Yt(e,t):n.map["delete"](t)},Ht.prototype.get=function(t){var n=this.I,e=n.array;return e?Kt(e,t):n.map.get(t)},Ht.prototype.has=function(t){var n=this.I,e=n.array;return e?$t(e,t):n.map.has(t)},Ht.prototype.set=function(t,n){var e=this.I,i=e.array;i&&(i.length<199?Xt(i,t,n):(e.array=null,e.map=new Gt(i)));var r=e.map;return r&&r.set(t,n),this},Vt.assign=pe,Vt.assignIn=ge,Vt.before=Bn,Vt.bind=Hn,Vt.chain=zn,Vt.compact=function(t){return cn(t,Boolean)},Vt.concat=Vn,Vt.create=function(t,n){var e=en(t);return n?pe(e,n):e},Vt.defaults=_e,Vt.defer=Yn,Vt.delay=Kn,Vt.filter=function(t,n){return cn(t,vn(n))},Vt.flatten=function(t){return(t?t.length:0)?sn(t,1):[]},Vt.flattenDeep=function(t){return(t?t.length:0)?sn(t,Infinity):[]},Vt.iteratee=ke,Vt.keys=we,Vt.map=function(t,n){return gn(t,vn(n))},Vt.mapValues=function(t,n){var e={};return n=vn(n),ln(t,(function(t,i,r){e[i]=n(t,i,r)})),e},Vt.matches=function(t){return mn(pe({},t))},Vt.merge=be,Vt.mixin=Re,Vt.negate=function(t){if("function"!=typeof t)throw new TypeError(r);return function(){return!t.apply(this,arguments)}},Vt.omit=Ee,Vt.omitBy=function(t,n){return n=vn(n),yn(t,(function(t,e){return!n(t,e)}))},Vt.once=function(t){return Bn(2,t)},Vt.partial=$n,Vt.pick=Ie,Vt.pickBy=function(t,n){return null==t?{}:yn(t,vn(n))},Vt.slice=function(t,n,e){var r=t?t.length:0;return n=null==n?0:+n,e=e===i?r:+e,r?En(t,n,e):[]},Vt.sortBy=function(t,n){var e=0;return n=vn(n),gn(gn(t,(function(t,i,r){return{value:t,index:e++,criteria:n(t,i,r)}})).sort((function(t,n){return function(t,n){if(t!==n){var e=null===t,r=t===i,o=t==t,a=null===n,u=n===i,c=n==n;if(t>n&&!a||!o||e&&!u&&c||r&&c)return 1;if(t<n&&!e||!c||a&&!r&&o||u&&o)return-1}return 0}(t.criteria,n.criteria)||t.index-n.index})),bn("value"))},Vt.tap=function(t,n){return n(t),t},Vt.thru=function(t,n){return n(t)},Vt.toArray=function(t){return te(t)?t.length?In(t):[]:Ae(t)},Vt.values=Ae,Vt.extend=ge,Re(Vt,Vt),Vt.clone=function(t){return ae(t)?Zn(t)?In(t):Sn(t,we(t)):t},Vt.cloneDeep=function(t){return nn(t,!0,!0)},Vt.escape=function(t){return(t=ve(t))&&x.test(t)?t.replace(O,ot):t},Vt.every=function(t,n,e){return function(t,n){var e=!0;return un(t,(function(t,i,r){return e=!!n(t,i,r)})),e}(t,vn(n=e?i:n))},Vt.find=jn,Vt.findIndex=function(t,n){return t&&t.length?function(t,n,e){for(var i=t.length,r=e?i:-1;e?r--:++r<i;)if(n(t[r],r,t))return r;return-1}(t,vn(n)):-1},Vt.forEach=Gn,Vt.forOwn=function(t,n){return t&&ln(t,tn(n))},Vt.has=function(t,n){return null!=t&&lt.call(t,n)},Vt.head=Fn,Vt.identity=Te,Vt.includes=function(t,n,e,i){t=te(t)?t:Ae(t),e=e&&!i?de(e):0;var r=t.length;return e<0&&(e=Rt(r+e,0)),se(t)?e<=r&&t.indexOf(n,e)>-1:!!r&&et(t,n,e)>-1},Vt.indexOf=function(t,n,e){for(var i=t?t.length:0,r=((e="number"==typeof e?e<0?Rt(i+e,0):e:0)||0)-1,o=n==n;++r<i;){var a=t[r];if(o?a===n:a!=a)return r}return-1},Vt.isArguments=Qn,Vt.isArray=Zn,Vt.isBoolean=function(t){return!0===t||!1===t||ue(t)&&vt.call(t)==s},Vt.isDate=function(t){return ue(t)&&vt.call(t)==f},Vt.isEmpty=function(t){if(te(t)&&(Zn(t)||se(t)||re(t.splice)||Qn(t)))return!t.length;for(var n in t)if(lt.call(t,n))return!1;return!0},Vt.isEqual=function(t,n){return hn(t,n)},Vt.isFinite=function(t){return"number"==typeof t&&St(t)},Vt.isFunction=re,Vt.isNaN=function(t){return ce(t)&&t!=+t},Vt.isNull=function(t){return null===t},Vt.isNumber=ce,Vt.isObject=ae,Vt.isRegExp=function(t){return ae(t)&&vt.call(t)==m},Vt.isString=se,Vt.isUndefined=function(t){return t===i},Vt.last=function(t){var n=t?t.length:0;return n?t[n-1]:i},Vt.max=function(t){return t&&t.length?nt(t,Te,Jn):i},Vt.min=function(t){return t&&t.length?nt(t,Te,le):i},Vt.noConflict=function(){return $._===this&&($._=pt),this},Vt.noop=function(){},Vt.reduce=qn,Vt.result=function(t,n,e){var r=null==t?i:t[n];return r===i&&(r=e),re(r)?r.call(t):r},Vt.size=function(t){return null==t?0:(t=te(t)?t:we(t)).length},Vt.some=function(t,n,e){return An(t,vn(n=e?i:n))},Vt.uniqueId=function(t){var n=++dt;return ve(t)+n},Vt.each=Gn,Vt.first=Fn,Re(Vt,(Se={},ln(Vt,(function(t,n){lt.call(Vt.prototype,n)||(Se[n]=t)})),Se),{chain:!1}),Vt.VERSION="4.6.1",un(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(t){var n=(/^(?:replace|split)$/.test(t)?String.prototype:ct)[t],e=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(t);Vt.prototype[t]=function(){var t=arguments;return i&&!this.l?n.apply(this.value(),t):this[e]((function(e){return n.apply(e,t)}))}})),Vt.prototype.toJSON=Vt.prototype.valueOf=Vt.prototype.value=function(){return t=this.u,qn(this.m,(function(t,n){return n.func.apply(n.thisArg,tt([t],n.args))}),t);var t},(Y||H||{})._=Vt,j&&G&&(q&&((G.exports=Vt)._=Vt),j._=Vt)}.call(this)},430:function(t,n,e){t.exports=e(356)._.noConflict()},9039:function(t,n,e){var i=e(4101).v3,r=Math.pow(2,32),o=function(t,n){return(i(t,n)>>>0)/r};t.exports={Seed:{IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},hashToHex:function(t,n){var e=i(t,n);return(e>>>16).toString(16)+(65535&e).toString(16)},hashToInt:function(t,n,e){return Math.floor(o(t,n)*e)},hashToReal:o,toByteString:function(t){var n=String.fromCharCode;return t.replace(/[\S\s]/gi,(function(t){t=t.charCodeAt(0);var e=n(255&t);return t>255&&(e=n(t>>>8&255)+e),t>65535&&(e=n(t>>>16)+e),e}))}}},2894:function(t,n){n.generate=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}},6030:function(t,n,e){var i=e(430),r=e(4748).get("stores/audience_data"),o=e(1564),a=e(552),u=e(4665),c=e(1226);function s(t){var n=["type","selector","attributes","value"],e=i.extend({},t);return e.changeSet=i.map(t.changeSet,(function(t){return i.pick(c.dereferenceChangeId(t),n)})),e}n.emitLayerDecided=function(t){var n=t.decisionTicket?t.decisionTicket.audienceIds:[],e=i.map(n,(function(t){return{id:t,name:r.get(t).name}})),u={type:a.TYPES.LIFECYCLE,name:"layerDecided",data:i.extend(t,{audiences:e})},s=c.translateLayerEventToCampaignEvent(u);o.emit(u),o.emit(s)},n.emitViewActivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"viewActivated",data:t},e=c.translateViewActivatedToPageActivated(n);o.emit(n),o.emit(e)},n.emitViewsActivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"viewsActivated",data:t};o.emit(n)},n.emitPageDeactivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"pageDeactivated",data:t};o.emit(n)},n.emitActivateEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activate"},!0)},n.emitActivatedEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activated"})},n.emitInitializedEvent=function(){var t={type:a.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),o.emit(t)},n.emitOriginsSyncedEvent=function(){var t={type:a.TYPES.LIFECYCLE,name:"originsSynced"};o.emit(t)},n.emitActionAppliedEvent=function(t){var n={type:t.type,campaignId:t.layerId,pageId:t.pageId,experimentId:t.experimentId,variationId:t.variationId};u.defineProperty(n,"changes",(function(){return s(t).changeSet}),"actionAppliedEvent");var e={type:a.TYPES.ACTION,name:"applied",data:n};o.emit(e)},n.emitActionsForDecisionAppliedEvent=function(t,n){var e={decision:t};u.defineProperty(e,"actions",(function(){return i.map(n,s)}),"appliedAllForDecisionEvent");var r={type:a.TYPES.ACTION,name:"appliedAllForDecision",data:e};o.emit(r)},n.emitSendEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"sendEvents"};o.emit(t)},n.emitHoldEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"holdEvents"};o.emit(t)}},6863:function(t,n,e){var i=e(430),r=e(6393),o=e(4665),a=e(1226),u=e(5431),c=e(8424);function s(t,n,e,r){var o=t.getLayerState(r),a=n.get(r),c=e.get();if(!o||!a)return c?{layer:{name:c.layerName,id:c.layerId,policy:c.layerPolicy,integrationStringVersion:c.integrationStringVersion},experiment:{name:c.experimentName,id:c.experimentId},variation:{name:c.variationName,id:c.variationId},isLayerHoldback:!1}:null;if(u.isSingleExperimentPolicy(a.policy)&&o.decision.isLayerHoldback)return null;var s,f,l=o.decision.experimentId,d=o.decision.variationId;return l&&d&&(s=i.find(a.experiments,{id:l}))&&(f=i.find(s.variations,{id:d}))?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:s.name,id:s.id},variation:{name:f.name,id:f.id},isLayerHoldback:o.decision.isLayerHoldback}:null}function f(t,n,e,r,o,a,s){var f=[],l=t.getLayerStates();s.onlySingleExperiments&&(l=i.filter(l,(function(t){var e=n.get(t.layerId);return e&&u.isSingleExperimentPolicy(e.policy)})));var d=e.getActiveViewIds(),h=i.map(l,(function(t){var e,r=!!t.decision.variationId,a=t.decisionActivationId&&t.decisionActivationId===o.getActivationId(),u=c.getExperimentAndVariation(),s=u?u.variationId:null,f=r&&t.decision.variationId===s,l=(null==(e=n.get(null==t?void 0:t.layerId))?void 0:e.viewIds)||[],h=i.every(l,(function(t){return!i.includes(d,t)}));return i.extend(t,{isActive:r&&a&&!h||f,visitorRedirected:f})})),v=a?i.filter(h,a):h;return i.each(v,(function(t){var e=function(t,n,e,r){var o,a,u=t.layerId,c=n.get(u)||{},s=i.map(c.experiments,(function(t){return i.pick(t,["id","name"])}));if(!r&&c.decisionMetadata&&c.decisionMetadata.offerConsistency)return;var f={id:u,campaignName:c.name||null,experiment:null,allExperiments:s,variation:null,reason:t.decision.reason,isActive:!!t.isActive,visitorRedirected:t.visitorRedirected,isInCampaignHoldback:t.decision.isLayerHoldback};t.decision&&t.decision.experimentId&&(o=i.find(c.experiments,{id:t.decision.experimentId})),o&&(f.experiment=i.pick(o,["id","name","campaignName"])),o&&t.decision.variationId&&(a=i.find(o.variations,{id:t.decision.variationId})),a&&(f.variation=i.pick(a,["id","name"]));var l=i.map(t.decisionTicket.audienceIds,(function(t){return i.pick(e.get(t),["id","name"])}));return f.audiences=l,c.decisionMetadata&&c.decisionMetadata.offerConsistency&&(f.pageId=t.pageId),f}(t,n,r,s.includeOfferConsistency);e&&f.push(e)})),f}n.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(t,n,e,r,u,c,s,f,l){var d={},h={},v={},p={audiences:t.getAudiencesMap(),events:e.getEventsMap(),campaigns:d,pages:u.getPagesMap(),experiments:h,variations:v,projectId:l.getProjectId(),snippetId:l.getSnippetId(),accountId:l.getAccountId(),dcpServiceId:l.getDCPServiceId(),revision:l.getRevision(),clientName:n.getClientName(),clientVersion:n.getClientVersion()},g=a.dereferenceChangeId;return i.each(r.getAll(),(function(t){o.defineProperty(d,t.id,(function(){var n=i.extend({},t);return o.defineProperty(n,"changes",(function(){return i.map(t.changes,g)}),"campaign"),o.defineProperty(n,"experiments",(function(){return i.map(t.experiments,(function(t){return h[t.id]}))}),"campaign"),n}),"campaignMap","byId"),i.each(t.experiments,(function(t){o.defineProperty(h,t.id,(function(){var n=i.extend({},t);return o.defineProperty(n,"changes",(function(){return i.map(t.changes,g)}),"experiment"),o.defineProperty(n,"variations",(function(){return i.map(t.variations,(function(t){return v[t.id]}))}),"experiment"),n}),"experimentMap","byId"),i.each(t.variations,(function(t){o.defineProperty(v,t.id,(function(){var n=i.extend({},t);return o.defineProperty(n,"actions",(function(){return i.map(t.actions,(function(t){return i.extend({},t,{changes:i.map(t.changes,g)})}))}),"variation"),n}),"variationMap","byId")}))}))})),p.groups=c.getGroupsMap(),p}],n.visitor=["stores/visitor",function(t){return i.cloneDeep(t.getVisitorProfile())}],n.visitor_id=["stores/visitor_id",function(t){return{randomId:t.getRandomId()}}],n.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(t,n,e,o,a,l,d){return{getCampaignStates:function(r){var o={},u=f(e,n,a,t,l,r,{includeOfferConsistency:!1});return i.each(u,(function(t){o[t.id]=t})),o},getExperimentStates:function(r){var o=f(e,n,a,t,l,r,{includeOfferConsistency:!1,onlySingleExperiments:!0}),u=["audiences","variation","reason","visitorRedirected","isActive"];return i.reduce(o,(function(t,n){var e=n.allExperiments[0];return t[e.id]=i.extend({},i.pick(n,u),{id:e.id,experimentName:e.name,isInExperimentHoldback:n.isInCampaignHoldback}),t}),{})},getCampaignStateLists:function(r){var o={},u=f(e,n,a,t,l,r,{includeOfferConsistency:!0});return i.each(u,(function(t){var n=t.id;o[n]||(o[n]=[]),o[n].push(t)})),o},getPageStates:function(t){var n=a.getAll(),e=i.reduce(n,(function(t,n){var e=o.get(n.id);return t[n.id]=i.extend({},i.pick(e,["id","name","apiName","category","staticConditions","tags"]),i.pick(n,["isActive","metadata"])),t[n.id].isActive=!!t[n.id].isActive,t}),{});return t?i.pickBy(e,t):e},isGlobalHoldback:function(){return l.isGlobalHoldback()},getActivationId:function(){return l.getActivationId()},getVariationMap:function(){var t=e.getLayerStates(),r={};return i.each(t,(function(t){var e=n.get(t.layerId);if(t.decision&&t.decision.experimentId&&(r[t.decision.experimentId]={id:t.decision.variationId,name:null,index:null},e)){var o=i.find(e.experiments,{id:t.decision.experimentId});if(o&&t.decision.variationId)var a=i.find(o.variations,{id:t.decision.variationId}),u=i.findIndex(o.variations,{id:t.decision.variationId});a&&(r[t.decision.experimentId]={id:t.decision.variationId,name:a.name,index:u})}})),r},getActiveExperimentIds:function(){var t={};return i.each(this.getCampaignStateLists({isActive:!0}),(function(n){i.each(n,(function(n){t[n.experiment.id]=!0}))})),i.keys(t)},getRedirectInfo:function(){var t=c.getExperimentAndVariation();return t&&(t.referrer=c.getReferrer()),t},getDecisionString:function(t){if(!t)throw new Error("Must pass a config to getDecisionString");t=i.extend({maxLength:255,shouldCleanString:!1},t);var o=s(e,n,d,t.campaignId);return o?r.generateAnalyticsString(o.layer,o.experiment,o.variation,o.isLayerHoldback,t.maxLength,t.shouldCleanString):null},getDecisionObject:function(t){if(!t)throw new Error("Must pass a config to getDecisionObject");t=i.extend({maxLength:255,shouldCleanString:!1},t);var o=s(e,n,d,t.campaignId);if(!o)return null;var a=r.formatNamesAndIdsForAnalytics(o.layer,o.experiment,o.variation,t.shouldCleanString),c=i.mapValues(a.names,(function(n,e){return r.combineAndTruncateIdAndName(n,a.idStrings[e],t.maxLength)})),f={experiment:c.experiment,variation:c.variation};return u.isSingleExperimentPolicy(o.layer.policy)||i.extend(f,{campaign:c.layer,holdback:o.isLayerHoldback}),f}}}],n.utils=e(8438).create(),n.jquery=["env/jquery",function(t){return t}],n.event_emitter=e(8001)},8905:function(t,n,e){var i=e(3457),r=e(3473),o="optimizelyDataApi";n.registerFunction=function(t,n){var e=r.getGlobal(o);e||(e={},r.setGlobal(o,e)),e[t]||(e[t]=n)},n.unregisterFunction=function(t){var n=r.getGlobal(o);n&&n[t]&&(n[t]=function(){i.log('Ignoring attempt to call "'+o+"."+t+'" which has been unregistered.')})},n.getFunction=function(t){return r.getGlobal(o)[t]}},5968:function(t,n,e){var i=e(430),r=e(3457),o=e(6863),a=e(4748),u=a.get("stores/plugins"),c=e(1664),s=e(2821),f=e(4407),l=[e(4779),e(418),e(3676)],d=["clientMetadata","cookieDomain","disable","load","optOut","rum"];n.push=function(t,n){var e,o,a,u;if(!i.isArray(t)&&i.isObject(t))u=i.isUndefined(t.version)?1:t.version,e=t.type,a=[t];else if(i.isArray(t))u=0,e=t[0],a=t.slice(1);else{if(!i.isString(t))return r.warn("API / Ignoring non-array/object/string argument:",t),!1;u=0,e=t,a=[]}if(l[u]&&(o=l[u][e]),n&&-1===d.indexOf(e))return r.debug("API / Ignoring non high priority function:",e,a),!1;if(!o)return r.warn('API / No function found for "'+e+'" (v'+u+") with arguments:",a),!1;r.log('API / Executing: "'+e,'" with arguments:',a);try{o.apply(null,a),f.dispatch(c.RECORD_API_USAGE,{methodName:u?"v"+u+"."+e:e})}catch(s){r.error(s)}return!0},n.get=function(t){r.log('API / Getting module: "'+t+'"');var n=o[t];if(n?i.isArray(n)&&(n=a.evaluate(n)):n=u.getPlugin(s.PluginTypes.apiModules,t),n)return f.dispatch(c.RECORD_API_USAGE,{methodName:"get."+t}),n;r.warn('Module "'+t+'" not found.')}},4665:function(t,n,e){var i=e(7699),r=e(1664),o=e(4407),a=e(3457);n.defineProperty=function(t,n,e,u,c){i(t,n,(function(){var t=["prop",u,c||n].join(".");return a.debug('Evaluating getter: "'+t+'"'),o.dispatch(r.RECORD_API_USAGE,{methodName:t}),e()}),!0)}},4779:function(t,n,e){var i=e(430),r=e(418);function o(t){var n,e={};if(t)if(a(t))n=Number(t);else{if("object"!=typeof t)throw new Error("tracker: Revenue argument "+t+"not a number.");if("revenue"in(e=i.extend({},t))){if(!a(e.revenue))throw new Error("tracker: Revenue value "+e.revenue+"not a number.");n=Number(e.revenue),delete e.revenue}}return i.isUndefined(n)||(e.revenue=n),e}function a(t){return i.isNumber(t)||i.isString(t)&&Number(t)==t}n.activateGeoDelayedExperiments=function(t,n){n||(n=t.lists?"odds":"cdn3"),r.dataFromSource({data:t,source:n})},n.activateSiteCatalyst=function(t){t&&t.sVariable&&r.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:t.sVariable}})},n.bucketVisitor=function(t,n){if(t&&n){var e={experimentId:String(t)};n>256?e.variationId=String(n):e.variationIndex=String(n),r.bucketVisitor(e)}},n.bucketUser=n.bucketVisitor,n.disable=function(t){r.disable({scope:t})},n.log=function(t){i.isUndefined(t)&&(t=!0),r.log({level:t?"INFO":"OFF"})},n.optOut=function(t){i.isUndefined(t)&&(t=!0),r.optOut({isOptOut:t})},n.setCookieDomain=function(t){r.cookieDomain({cookieDomain:t})},n.setCookieExpiration=function(t){r.cookieExpiration({cookieExpirationDays:t})},n.setDimensionValue=function(t,n){var e={};e[t]=n,r.user({attributes:e})},n.setUserId=function(t){r.user({userId:t})},n.setGA4UserId=function(t){r.ga4User({ga4UserId:t})},n.storeThirdPartyData=function(t,n){r.dataFromSource({source:t,data:n})},n.trackEvent=function(t,n){r.event({eventName:t,tags:o(n)})}},1226:function(t,n,e){var i=e(430),r=e(4748),o=e(22),a=e(4665),u=r.get("stores/change_data");n.translateDecisionToCampaignDecision=function(t){return c(i.cloneDeep(t),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},n.translateLayerEventToCampaignEvent=function(t){var e={};return a.defineProperty(e,"campaign",(function(){return function(t){var e=i.cloneDeep(t);return e.changes&&(e.changes=i.map(e.changes,n.dereferenceChangeId)),e.experiments&&i.each(e.experiments,(function(t){t.changes&&(t.changes=i.map(t.changes,n.dereferenceChangeId)),t.variations&&i.each(t.variations,(function(t){t.actions&&i.each(t.actions,(function(t){t.changes&&(t.changes=i.map(t.changes,n.dereferenceChangeId))}))}))})),e}(t.data.layer)}),"campaignEvent"),e.decisionTicket=t.data.decisionTicket,e.decision=this.translateDecisionToCampaignDecision(t.data.decision),e.audiences=t.data.audiences,{type:"lifecycle",name:"campaignDecided",data:e}},n.translateViewActivatedToPageActivated=function(t){return{type:"lifecycle",name:"pageActivated",data:{page:t.data.view}}},n.dereferenceChangeId=function(t){var n=u.getChange(t);return n?o.safeReference(n):t};var c=function(t,n){var e=i.omit(t,i.keys(n));return i.each(n,(function(n,i){e[n]=t[i]})),e}},8438:function(t,n,e){var i=e(7322).Promise,r=e(4192).t,o=e(1046).poll,a=e(5479).b,u=e(2551).A;n.create=function(){return{observeSelector:r,poll:o,Promise:i,waitForElement:a,waitUntil:u}}},5263:function(t){t.exports={DEFAULT_INTERVAL:20}},4192:function(t,n,e){var i=e(430),r=(e(1664),e(4748)),o=r.get("stores/directive"),a=e(6051),u=(e(3552),e(2821),e(4407),e(2894).generate),c=e(1046),s=e(3473),f=(r.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),l={},d=function(t){d=function(){if(!o.shouldObserveChangesIndefinitely())return function(t){var n=c.poll(i.partial(v,t));l[t].cancelObservation=function(){n(),delete l[t]}};var t,n=function(){this.disconnect(),i.each(i.keys(l),v),this.observe(r,e)},e={attributes:!0,childList:!0,subtree:!0,characterData:!0},r=a.getDocumentElement();return t=new MutationObserver(n),function(n){var o=l[n];t.observe(r,e),o.cancelObservation=function(){delete l[n],i.isEmpty(l)&&t.disconnect()}}}(),d(t)};function h(t){var n=l[t];n&&n.cancelObservation&&n.cancelObservation()}function v(t){if(l[t]){if(function(t){var n=t.options.timeout;if(null!==n)if("function"==typeof n)try{return n()}catch(e){}else if(Date.now()-t.startTime>n)return!0;return!1}(l[t]))return 0===l[t].matchedCount&&i.isFunction(l[t].options.onTimeout)&&l[t].options.onTimeout(),void h(t);var n=a.querySelectorAll(l[t].selector);n.length&&(i.each(n,(function(n){n.T&&n.T[t]||l[t].callbackQueue.push(n)})),function(t){for(;l[t]&&l[t].callbackQueue.length;){var n=l[t].callbackQueue.shift();if(p(n,t),l[t].matchedCount=l[t].matchedCount+1,l[t].callback(n),l[t]&&l[t].options.once)return void h(t)}}(t))}}function p(t,n){t.T||(t.T={}),t.T[n]=!0}n.t=function(t,n,e){if(!function(t){try{a.querySelector(t)}catch(n){return!1}return!0}(t))throw new Error("observeSelector expects a valid css selector as its first argument");if(!i.isFunction(n))throw new Error("observeSelector expects a function as its second argument");if(e&&(!i.isObject(e)||i.isFunction(e)))throw new Error("observeSelector expects an object as its third argument");var r=u();return e=i.assign({},f,e||{}),l[r]={callback:n,callbackQueue:[],matchedCount:0,options:e,selector:t,startTime:Date.now()},d(r),s.setTimeout(i.bind(v,null,r),0),i.partial(h,r)}},1046:function(t,n,e){var i=e(430),r=(e(1664),e(4748)),o=(e(2821),e(4407),e(2894).generate),a=e(3473),u=e(5263).DEFAULT_INTERVAL,c=(r.get("stores/rum"),{});function s(t){c[t]&&i.each(c[t].callbacks,(function(t){t.call(null)}))}function f(t,n){c[n]&&c[n].callbacks[t]&&(delete c[n].callbacks[t],i.some(c[n].callbacks)||(clearInterval(c[n].id),delete c[n]))}n.poll=function(t,n){i.isNumber(n)||(n=u),c[n]||(c[n]={callbacks:{},id:a.setInterval(i.partial(s,n),n)});var e=o();return c[n].callbacks[e]=t,i.partial(f,e,n)},n.cancelAll=function(){i.each(c,(function(t,n){clearInterval(t.id),delete c[n]}))}},5479:function(t,n,e){var i=e(7322).Promise,r=e(4192).t;n.b=function(t){return new i((function(n,e){r(t,n,{once:!0})}))}},2551:function(t,n,e){var i=e(7322).Promise,r=e(1046).poll;n.A=function(t){return new i((function(n,e){if(t())n();else var i=r((function(){t()&&(i(),n())}))}))}},418:function(t,n,e){var i=e(430),r=e(1664),o=e(5968),a=e(6863),u=e(3205),c=e(2821),s=e(9226),f=e(6030),l=e(1164),d=e(1364).U,h=e(2146),v=e(1299),p=(e(8685),e(8967)),g=e(1564),m=e(4407),_=e(716),w=e(1623),y=e(3457),b=e(121),E=(e(7598),e(5326)),I=e(9867),A=e(4748),T=A.get("stores/dimension_data"),S=A.get("stores/view"),k=A.get("stores/view_data"),R=A.get("stores/visitor_id"),N=A.get("stores/layer_data"),D=A.get("stores/directive"),C=n.ApiListenerError=d("ApiListenerError");n.event=function(t){var n;switch(t.eventType){case"click":n=function(t){var n;return t.eventData&&(n=p.create(t.eventData.id,t.eventData.apiName,"click",t.eventData)),function(){var t=s.trackClickEvent(n);t?y.log("API / Tracking click event:",t):y.log("API / Not tracking click event:",t)}}(t);break;case"decision":n=function(t){var n=t.eventData,e=w.createLayerState(n.layerId,n.experimentId,n.variationId,n.isLayerHoldback),i=w.createSingle(n.layerId,n.experimentId,n.variationId);return function(){w.recordLayerDecision(e.layerId,e.decisionTicket,e.decision),y.log("API / Tracking decision event:",e),s.trackDecisionEvent(e.decision,e.decisionTicket,i)}}(t);break;case"pageview":n=function(t){var n=E.create(t.eventData.id,t.eventData.apiName),e=E.createState(n.id);return function(){var t=s.trackViewActivation(n,e);t?y.log("API / Tracking pageview event:",t):y.log("API / Not tracking pageview event:",t)}}(t);break;default:n=function(t){var n;return t.eventId&&(n=p.create(t.eventId,t.eventName,"custom")),E.updateAllViewTags(),function(){s.trackCustomEvent(t.eventName,t.tags,n,t.properties)?y.log("API / Tracking custom event:",t.eventName,t.tags):y.log("API / Not tracking custom event:",t.eventName)}}(t)}R.getBucketingId()?n():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postActivate,cleanupFn:n})},n.clientMetadata=function(t){false},n.priorRedirectString=function(t){},n.microsnippetError=function(t){},n.rum=function(t){m.dispatch(r.SET_RUM_DATA,t.eventData)},n.initialViewStates=function(t){var n=i.map(t.states,(function(t,n){return{id:n,isActive:t}}));E.registerViews(n)},n.page=function(t){var n=k.getByApiName(t.pageName);if(!n)throw new Error('Unknown page "'+t.pageName+'"');var e=!t.hasOwnProperty("isActive")||t.isActive,i=function(){e?E.activateViaAPI(n,t.tags):(E.deactivate(n),y.log("API / Deactivated Page",E.description(n)))};R.getBucketingId()?i():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postViewsActivated,cleanupFn:i})},n.tags=function(t){E.setGlobalTags(t.tags)},n.user=function(t){y.log("API / Setting visitor custom attributes:",t.attributes),i.each(t.attributes,(function(t,n){var e,i,r=n,o=T.getById(n)||T.getByApiName(n);o&&(r=o.id,e=o.apiName,i=o.segmentId||o.id);var a={id:i,value:t};e&&(a.name=e),O(r,a,!0)}))},n.ga4User=function(t){t.ga4UserId?(y.log("API / Setting ga4 user id in the global store:",t.ga4UserId),m.dispatch(r.SET_GA4_USER_ID,t)):y.error('API / Argument "ga4UserId" is missing')};var O=function(t,n,e){var i=[{key:e?["custom",t]:[t],value:n,metadata:{lastModified:h.now()}}],o=function(){m.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:i})};R.getBucketingId()?o():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:o})};n.optOut=function(t){var n=!t.hasOwnProperty("isOptOut")||t.isOptOut;v.setOptOut(n)},n.cookieExpiration=function(t){var n=t.cookieExpirationDays;n<90&&(y.error('Argument "cookieExpirationDays"=',n,"less than minimum days:",90,", setting to minimum."),n=90),y.log("API / Setting cookie age to",n,"days."),m.dispatch(r.SET_COOKIE_AGE,86400*n)},n.extendCookieLifetime=function(t){t=i.extend({isEnabled:!0},t),y.log("API / Setting cookie automatic lifetime extension to",t.isEnabled),m.dispatch(r.SET_COOKIE_AUTO_REFRESH,t.isEnabled)},n.cookieDomain=function(t){y.log("API / Setting cookie domain to",t.cookieDomain),m.dispatch(r.SET_COOKIE_DOMAIN,t.cookieDomain)},n.disable=function(t){if(t.scope){if("tracking"!==t.scope)throw new Error('Unknown "scope" for disable: '+t.scope);y.log("API / Disabling tracking"),m.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else y.log("API / Disabling everything"),m.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},n.log=function(t){var n=t.level,e=t.match;i.isUndefined(n)&&(n="INFO"),i.isUndefined(e)&&(e=""),y.setLogMatcher(e),y.setLogLevel(n)},n.registerModule=function(t){var n="custom/"+t.moduleName;if(a[n]||o.get(n))throw new Error('Module name "'+n+'" is reserved. Will not be registered as plugin.');b.registerApiModule(n,t.module)},n.dataFromSource=function(t){var n=t.source;l.makeAsyncRequest(n),l.resolveRequest(n,t.data)},n.addListener=function(t){if(!i.isFunction(t.handler))throw new Error("A handler function must be supplied");(t=i.omit(t,"type")).publicOnly=!0,t.emitErrors=!0;var n=t.handler;t.handler=function(t){try{return n(t)}catch(e){throw new C(e)}},g.on(t)},n.removeListener=function(t){if(!t.token)throw new Error("Must supply a token to removeListener");g.off(t.token)},n.load=function(t){t.data=i.extend({},t.data),u.normalizeClientData(t.data),m.dispatch(r.DATA_LOADED,{data:t.data})},n.integrationSettings=function(t){if(!t.id)throw new Error("id is required");if(!t.settings)throw new Error("settings is required");m.dispatch(r.SET_INTEGRATION_SETTINGS,i.extend({},t.settings,{id:t.id}))},n.bucketVisitor=function(t){if(!t.variationId&&i.isUndefined(t.variationIndex)||t.variationId&&t.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!t.experimentId)throw new Error("An experimentId is required.");var n,e,r=t.campaignId;if(r){if(!(n=N.get(r)))throw new Error("Could not find layer "+r)}else if(!(r=(n=N.getLayerByExperimentId(t.experimentId)).id))throw new Error("Could not find layer for experiment "+t.experimentId);if(!(e=i.find(n.experiments,{id:t.experimentId})))throw new Error("Could not find experiment "+t.experimentId+" in layer "+r);var o=t.variationId;if(i.isUndefined(t.variationIndex)){if(!i.find(e.variations,{id:o}))throw new Error("Cound not find variation "+o+" in experiment "+t.experimentId)}else if(!(o=e.variations[t.variationIndex].id))throw new Error("Could not find variation at index "+t.variationIndex+" in experiment "+t.experimentId);I.updateVariationIdMap(r,t.experimentId,o),R.getBucketingId()&&I.persistVariationIdMap()},n.waitForOriginSync=function(t){if(!i.isArray(t.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+_.stringify(t.canonicalOrigins));i.each(t.canonicalOrigins,(function(t){if(!i.isString(t))throw new Error("Each item in canonicalOrigins must be a string. Found type "+(void 0===t?"undefined":(n=t)&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n));var n})),m.dispatch(r.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:t.canonicalOrigins})},n.disableCrossOrigin=function(){y.log("API / cross origin tracking is DISABLED"),m.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0})},n.activate=function(){D.shouldActivate()?(i.forEach(S.getActiveViewStates(),(function(t){E.deactivate(k.get(t.id))})),m.dispatch(r.RESET_VIEW_STATES),f.emitActivateEvent()):y.debug("Not activating.")},n.sendEvents=function(){f.emitSendEvents()},n.holdEvents=function(){f.emitHoldEvents()}},3676:function(){},9268:function(t,n,e){var i=e(430),r=e(1364).U,o=n.ActivationCodeError=r("ActivationCodeError"),a=n.ProjectJSError=r("ProjectJSError"),u=e(5971),c=e(1664),s=e(9226),f=e(6030),l=e(62),d=e(6397),h=e(3205),v=e(2146),p=e(3529),g=e(4748),m=e(1299),_=e(6051),w=e(2821),y=e(1564),b=e(552),E=e(3562),I=e(4407),A=e(5781),T=e(1623),S=e(4513).mM,k=e(3457),R=e(1017),N=e(2341),D=e(121),C=e(6216),O=e(7322).Promise,x=e(392),P=e(7598),M=e(2469),L=e(2781),U=e(5326),V=e(9867),F=e(3473),z=(g=e(4748)).get("stores/session"),j=g.get("stores/audience_data"),G=g.get("stores/action_data"),q=g.get("stores/cleanup"),B=g.get("stores/directive"),H=g.get("stores/global"),Y=g.get("stores/group_data"),K=g.get("stores/layer_data"),$=g.get("stores/layer"),W=g.get("stores/pending_events"),X=g.get("stores/plugins"),J=g.get("stores/rum"),Q=g.get("stores/visitor"),Z=g.get("stores/view_data"),tt=g.get("stores/view"),nt=g.get("stores/visitor_id"),et=g.get("stores/visitor_bucketing"),it=g.get("stores/xdomain"),rt=e(5968),ot=e(8685),at=e(1632),ut=n;function ct(){var t=null;i.isNumber(t)&&0===K.getCount()?(k.log("Activating after delay of",t,"ms because no Experiments are running"),I.dispatch(c.SET_RUM_DATA,{data:{activateDfd:!0}}),F.setTimeout(f.emitActivateEvent,t)):f.emitActivateEvent()}function st(t){ot.handleError(t.data.error,t.data.metadata)}function ft(t,n){I.dispatch(c.SET_RUM_DATA,{data:{extras:{xdAttempt:t,xdError:n?n.toString():void 0}}})}function lt(t,n,e){t=t||[];var r=H.getGlobalHoldbackThreshold(),o=nt.getBucketingId();if(!o)throw new Error("bucketingId not set");var a,u=Q.getVisitorProfile();n&&(a=et.getVariationIdMap()[n.id]);var c={bucketingId:o,visitorProfile:u,audiences:t,globalHoldback:r,preferredVariationMap:a,layer:n};return n&&e&&p.isPageIdRelevant(n)?i.map(e,(function(t){return p.createTicket(i.extend({},c,{pageId:t}))})):[p.createTicket(c)]}function dt(t,e,r,o){try{var a=function(t){return{bucketingId:nt.getBucketingId(),preferredLayerId:et.getPreferredLayerMap()[t.id]}}(o),u=p.decideGroup(o,a);if(u.reason)return k.debug("Not activating Group",A.description(o),"; reason:",u.reason),J.getSampleRum()&&I.dispatch(c.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),O.resolve();var s=K.get(u.layerId);if(!s)return k.debug("Visitor was bucketed into a Campaign ("+u.layerId+") which is not in this snippet"),O.resolve();var f=i.filter(s.pageIds,i.partial(i.includes,r));return i.isEmpty(f)?(k.debug("Not activating Group",A.description(o),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),O.resolve()):(J.getSampleRum()&&I.dispatch(c.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),n.decideAndExecuteLayerASAP(t,e,f,s))}catch(l){return k.error("Error getting decision for Group",A.description(o),"; ",l),O.reject(l)}}function ht(t,n){var e={};return i.each(t,(function(t){i.isArray(t)?i.extend(e,ht(t,n)):i.isObject(t)&&n[t.type]&&(e[t.type]=!0)})),e}function vt(t){var n=[];return i.each(t,(function(t){n.push(t.name,t)})),n}function pt(t){var n=q.getCleanupFns(t);if(n.length>0){for(;n.length>0;)n.shift()();I.dispatch(c.CLEAR_CLEANUP_FN,{lifecycle:t})}}n.initialize=function(t){return this.initGlobalStore(t.clientData),this.initializePlugins(t.plugins)},n.initGlobalStore=function(t){h.normalizeClientData(t),y.on({filter:{type:"error"},handler:st}),I.dispatch(c.DATA_LOADED,{data:t}),k.log("Initialized with DATA:",t)},n.initializePlugins=function(t){if(i.isArray(window.optimizely)&&(window.optimizely=i.filter(window.optimizely,(function(t){var n=!0;return!rt.push(t,n)}))),m.setOptOut(B.shouldOptOut()),!B.isDisabled()&&!B.shouldOptOut()){at.queueBeacons(),_.isReady()?I.dispatch(c.SET_DOMCONTENTLOADED):_.addReadyHandler((function(){I.dispatch(c.SET_DOMCONTENTLOADED)})),N.time("projectJS");var e=H.getProjectJS();if(i.isFunction(e))try{E.apply(e)}catch(h){k.error("Error while executing projectJS: ",h),d.emitError(new a(h))}N.timeEnd("projectJS"),i.each(t||[],(function(t){try{t(D)}catch(h){d.emitInternalError(h)}})),i.each(H.getPlugins()||[],(function(t){try{E.apply(t,[D])}catch(h){d.emitError(h)}})),P.load();var r=y.on({filter:{type:"lifecycle",name:"activated"},handler:function(){Q.observe(V.persistVisitorProfile),$.observe(V.persistLayerStates),z.observe(V.persistSessionState),W.observe(R.persistPendingEvents),et.observe(V.persistVisitorBucketingStore),y.off(r)}});y.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:n.onViewsActivated}),y.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:n.onPageDeactivated}),n.initializeApi();var o=R.getPendingEvents();if(o&&(I.dispatch(c.LOAD_PENDING_EVENTS,{events:o}),R.retryPendingEvents(o)),y.on({filter:{type:"lifecycle",name:"activate"},handler:n.activate}),f.emitInitializedEvent(),!B.shouldActivate())return O.resolve();var u=[];if(it.isDisabled())ct();else{var s=n.initializeXDomainStorage();if(u.push(s),Boolean(it.getCanonicalOrigins())){var l=M.makeTimeoutPromise(1e3);O.race([s,l])["catch"]((function(t){k.error("Failed to initialize xDomain storage: ",t)})).then(ct)["catch"](ot.handleError)}else ct()}return O.all(u)}k.log("Controller / Is disabled")},n.activate=function(){try{var t=[];k.log("Activated client"),pt(w.Lifecycle.preActivate);var n=v.now();I.dispatch(c.ACTIVATE,{activationId:String(n),activationTimestamp:n});var e=Z.getAll();U.registerViews(e),V.setId(V.getOrGenerateId()),t.push(s.trackPostRedirectDecisionEvent()),I.dispatch(c.MERGE_VARIATION_ID_MAP,{variationIdMap:V.getVariationIdMap()}),I.dispatch(c.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:V.getPreferredLayerMap()}),pt(w.Lifecycle.postVisitorProfileLoad),t.push((h=X.getAllPlugins(w.PluginTypes.visitorProfileProviders),g=Q.getVisitorProfile(),V.populateEagerVisitorData(h,g)).then((function(){k.log("Populated visitor profile")})));var r=lt(),o=p.decideGlobal(r);k.log("Made global decision",r,"->",o),I.dispatch(c.RECORD_GLOBAL_DECISION,o);var a=s.trackClientActivation();a?k.log("Tracked activation event",a):k.log("Not tracking activation event");var u=ut.setUpViewActivation(e),l=[];return i.each(u,(function(t){l=l.concat(U.activateMultiple([t]))})),pt(w.Lifecycle.postViewsActivated),pt(w.Lifecycle.postActivate),f.emitActivatedEvent(),O.all(t).then((function(){y.emit({type:b.TYPES.LIFECYCLE,name:"activateDeferredDone"}),k.log("All immediate effects of activation resolved")}),d.emitError)}catch(m){return d.emitError(m),O.reject(m)}var h,g},ut.setUpViewActivation=function(t){var n=[];return i.each(t,(function(t){i.isBoolean(tt.getViewState(t.id).isActive)&&U.isActivationTypeImmediate(t.activationType)?k.debug("Skipping page: already evaluated, presumably at the edge",U.description(t)):U.shouldTriggerImmediately(t.activationType)?n.push(t):t.activationType===w.ViewActivationTypes.callback?(k.debug("Setting up conditional activation for Page",U.description(t)),ut.activateViewOnCallback(t)):t.activationType===w.ViewActivationTypes.polling?(k.debug("Setting up polling activation for Page",U.description(t)),C.pollFor(i.partial(E.apply,t.activationCode),null,i.partial(L.isTimedOut,v.now())).then((function(){U.activateMultiple([t])}))["catch"]((function(n){k.warn("Failed to activate view ",t,n)}))):t.activationType!==w.ViewActivationTypes.manual&&d.emitError(new Error("Unknown view activationType: "+t.activationType))})),n},ut.activateViewOnCallback=function(t){var n={pageId:t.id};Object.defineProperty(n,"isActive",{get:function(){return tt.isViewActive(t.id)}});try{E.apply(t.activationCode,[function(n){var e=i.extend({},n,{pageName:t.apiName,type:"page"});rt.push(e)},n])}catch(r){var e=new o("("+r.toString()+") in activationCode for "+U.description(t));d.emitError(e,{originalError:r,userError:!0})}},n.onViewsActivated=function(t){var e,r=t.data.views,o=i.map(r,"id");try{if(!nt.getBucketingId())throw new Error("View activated with no visitorId set");var a=function(t){var e=K.getAllByPageIds(t),r=B.getForceVariationIds(),o=B.getForceAudienceIds(),a=!i.isEmpty(r);a&&k.log("Force variations are in use. Disabling mutual exclusivity.");var u=a?{individual:e}:i.reduce(e,(function(t,n){return n.groupId?t.groups[n.groupId]||(t.groups[n.groupId]=Y.get(n.groupId)):t.individual.push(n),t}),{groups:{},individual:[]});k.log("Deciding Campaigns/Experiments for Page(s)",t);var c=i.map(u.groups,A.description).join(", ");k.log("Groups:",c);var s=i.map(u.individual,T.description).join(", ");k.log("Campaigns/Experiments not in Groups (by Campaign id):",s);var f=i.map(u.groups,i.partial(dt,r,o,t))||[],l=i.map(u.individual,(function(e){var a=i.filter(e.pageIds,i.partial(i.includes,t));return n.decideAndExecuteLayerASAP(r,o,a,e)})),d=f.concat(l);return O.all(d).then((function(n){var e=i.filter(n,(function(t){return!!t}));return k.log("All Campaigns/Experiments for Page(s) (by Campaign id)",t,"resolved:",i.map(e,T.description).join(", ")),e}))}(o)["catch"](d.emitError);return e=O.all(i.map(r,(function(t){var n=function(){U.parseViewTags(t);var n=s.trackViewActivation(t);n?k.log("Tracked activation for Page",U.description(t),n):k.log("Not Tracking activation for Page",U.description(t))};return _.isReady()?O.resolve(n()):C.pollFor(_.isReady,1e3).then(n)}))),O.all([a,e])}catch(u){d.emitError(u)}},n.onPageDeactivated=function(t){var n=t.data.page,e=G.getAllActionIdsByPageId(n.id);i.each(e,(function(t){var e=G.getActionState(t);e&&(i.each(e,(function(t,e){if(t.cancel)try{t.cancel(),k.debug("Controller / Canceled change",e,"observation due to deactivation of page:",n)}catch(i){k.error("Controller / Error canceling change",e,"observation upon deactivation of page.",i)}if(n.undoOnDeactivation&&t.undo)try{t.undo(),k.debug("Controller / Undid change",e,"due to deactivation of page:",n)}catch(r){k.error("Controller / Error undoing change upon deactivation of page.",r)}})),I.dispatch(c.REMOVE_ACTION_STATE,{actionId:t}),k.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",n,t))}))},n.initializeApi=function(){var t={push:rt.push};t.get=rt.get;var n=window.optimizely;i.isArray(n)&&i.each(n,(function(n){t.push(n)})),t.data={note:"Obsolete, use optimizely.get('data') instead"},t.state={},window.optimizely=t},n.persistItemsWithId=function(t){return i.each(t,(function(t,n){V.checkKeyForVisitorId(n)&&S.setItem(n,t)})),t},n.initializeXDomainStorage=function(){var t=e(9111),r=!!V.getCurrentId(),o=!!r&&V.hasSomeData();r?o?k.log("xd / Existing visitor; has data on this origin"):k.log("xd / Existing visitor; new to this origin"):k.log("xd / New visitor");var a=H.getAccountId(),u="https://a15853140465.cdn-pci.optimizely.com".replace("__SUBDOMAIN__","a"+a+"."),s="/client_storage/a"+a+".html";t.subscribe((function(t,n){V.checkKeyForVisitorId(t)&&S.setItem(t,n)}));var l=t.fetchAll().then((function(n){if(!nt.getVisitorIdLocator()){var e=it.getCanonicalOrigins();if(e){var i=t.getXDomainUserId(n,e);i&&(k.log("Syncing cross-origin visitor randomId:",i),V.maybePersistVisitorId({randomId:i}))}}return V.deleteOldForeignData(),n})).then(n.persistItemsWithId).then((function(t){if(V.loadForeignData(),r&&!o){var n=!i.isEmpty(t);k.debug("xd / Loaded foreign data? ",n),ft(n)}k.log("Loaded visitor data from foreign origins"),f.emitOriginsSyncedEvent()}),(function(t){throw r&&!o&&(k.debug("xd / Failed to load foreign data:",t),ft(!1,t)),t}));return O.all([t.load(u,s)["catch"]((function(t){throw k.debug("xd / Failed to load iframe:",t),r&&!o&&ft(!1,t),t})),l["catch"]((function(t){k.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",t.message),k.debug("xd / Enqueuing sync to happen after visitorId set."),I.dispatch(c.ADD_CLEANUP_FN,{lifecycle:w.Lifecycle.postVisitorProfileLoad,cleanupFn:f.emitOriginsSyncedEvent})}))])},n.decideAndExecuteLayerASAP=function(t,e,r,o){return new O((function(a,d){try{!function(t,n,e,r,o){if(n.length||e.length)return void o(lt([],void 0,r));var a=T.relatedAudienceIds(t),u=i.reduce(a,(function(t,n){var e=j.get(n);return!e||t.push(e),t}),[]),s=X.getAllPlugins(w.PluginTypes.audienceMatchers);if(J.getSampleRum()){var f={};if(i.each(u,(function(t){i.extend(f,ht(t.conditions,s))})),!i.isEmpty(f)){var d=i.keys(f);I.dispatch(c.RECORD_AUDIENCE_USAGE,{audienceTypes:d,layerId:t.id})}}var h=function(t){k.debug("Audience list for extracting types",t);try{var n=new Set(i(t).map("conditions").flattenDeep().filter((function(t){return"string"!=typeof t})).map("type").value());return n.has("time_and_day")&&n.add("currentTimestamp"),k.debug("Extracted unique types from audiences",n),n}catch(e){return k.error("An error occurred while extracting types from audiences:",e),new Set}}(u),v=X.getAllPlugins(w.PluginTypes.visitorProfileProviders),p=Q.getVisitorProfile();V.populateLazyVisitorData(v,p,h),function(t,n,e,r){var o=i.reduce(t,(function(t,e){return i.extend(t,l.requiredAudienceFieldsForConditions(e.conditions,n))}),{}),a=i.reduce(o,(function(t,n){if(i.isUndefined(V.getAttribute(n))){var e=V.getPendingAttributeValue(n);i.isUndefined(e)||t.push(e)}return t}),[]);if(0===a.length)return r();var u=[].concat(t),c=x.firstToResolve(i.map(a,(function(t){return O.resolve(t).then((function(){var t=Q.getVisitorProfile();if(u=i.filter(u,(function(e){return i.isUndefined(l.isInAudience(t,e,n))})),!i.isEmpty(u))throw new Error("At least one audience is still pending")}))})));O.race([c,new O((function(t,n){F.setTimeout(n,e)}))]).then((function(){k.log("Activating Campaign after pending Audiences resolved",t),r()}),(function(){k.log("Activating Campaign after timeout on Audiences",t),r()}))}(u,s,T.getActivationTimeout(t),(function(){var n=lt(u,t,r);i.map(n,(function(n){!function(t,n,e){var r=i.map(t.audienceIds,i.bind(j.get,j)),o=i.filter(n,(function(n){return!i.includes(t.audienceIds,n.id)}));k.log("When deciding Campaign",T.description(e),"visitor is in audiences:",vt(r),"and not in audiences:",vt(o))}(n,u,t)})),o(n)}))}(o,t,e,r,(function(l){i.each(l,(function(a){var l=a.pageId?[a.pageId]:r;k.debug("Deciding layer: ",o,"with decisionTicket: ",a,"and actionViewIds: ",l),function(t,e,r,o,a){var l=T.description(t);k.log("Activating Campaign",l,"on Page(s)",o),r.length&&(k.log("Applying force audienceIds:",r,"to Campaign",l),(a=i.cloneDeep(a)).audienceIds=r);var d=n.decideLayer(t,a,e),h=!(!e.length&&!r.length),v=n.getActionsForDecision(t,d,h),g=function(t,n){return i.filter(t,(function(t){return i.isUndefined(t.pageId)||i.includes(n,t.pageId)}))}(v.actions,o);if(v.maybeExecute&&function(t,n,e,r){var o=T.description(n);k.log("Preparing actions",t,"for Campaign",o,"on Page(s)",r),i.forEach(t,u.prepareAction)}(g,t,0,o),i.forEach(o,(function(){s.trackDecisionEvent(d,a)})),f.emitLayerDecided({layer:t,decisionTicket:a,decision:d}),d.error)throw d.error;if(J.getSampleRum()){I.dispatch(c.RECORD_LAYER_POLICY_USAGE,{policy:t.policy,layerId:t.id});var m=function(t){var n={};return i.each(t,(function(t){i.each(t.changeSet,(function(t){n[t.type]||(n[t.type]=!0)}))})),n}(v.actions);I.dispatch(c.RECORD_CHANGE_TYPE_USAGE,{changeTypes:i.keys(m),layerId:t.id}),i.isEmpty(t.integrationSettings)||I.dispatch(c.RECORD_INTEGRATION_USAGE,{integrations:T.getIntegrationTypes(t),layerId:t.id})}if(!p.isInCohort(d))return void k.log("Not activating Campaign: "+T.description(t)+"; not in the cohort because:",d.reason);v.maybeExecute&&function(t,n,e,r){var o=T.description(n);k.log("Executing actions",t,"for Campaign",o,"on Page(s)",r),O.all(i.map(t,(function(t){return u.executePreparedAction(t).then(i.partial(f.emitActionAppliedEvent,t))}))).then((function(){k.log("All page actions for",e,"applied:",t),f.emitActionsForDecisionAppliedEvent(e,t)}))["catch"]((function(t){k.warn("Error evaluating page actions for decision",e,"because:",t)}))}(g,t,d,o)}(o,t,e,l,a)})),a(o)}))}catch(h){k.error("Error getting decision for Campaign: "+T.description(o),h),d(h)}}))},n.decideLayer=function(t,n,e){var i;var r=T.description(t);i=e.length?p.getDummyLayerDecision(t,e):p.decideLayer(t,n),k.log("Recording decision for Campaign",r,n,"->",i),T.recordLayerDecision(t.id,n,i),i.variationId&&i.experimentId&&V.updateVariationIdMap(t.id,i.experimentId,i.variationId),t.groupId&&V.updatePreferredLayerMap(t.groupId,t.id);return i},n.getActionsForDecision=function(t,n,e){var i=T.description(t),r="NOT applying changes for Campaign",o={actions:[],maybeExecute:!1};if(o.actions=[].concat(G.getLayerActions(n.layerId)||[],G.getExperimentActions(n.experimentId)||[],G.getExperimentVariationActions(n.experimentId,n.variationId)||[]),!e&&H.isGlobalHoldback())return k.log(r,i,"(visitor is in global holdback)"),o;if(n.isLayerHoldback)return k.log(r,i,"(visitor is in layer holdback)"),o;if(!n.experimentId||!n.variationId)return k.log(r,i,"(visitor is not eligible for any Experiments)"),o;return o.maybeExecute=!0,k.log("Got Actions for Campaign:",i,o.actions),o}},7529:function(t,n,e){var i=e(7322).Promise,r=e(2146),o=e(4748).get("stores/plugins"),a=e(2821),u=e(3457);n.create=function(t,n,e){var c={identifier:t.id,action:n,startTime:e||r.now()};try{var s=o.getPlugin(a.PluginTypes.changeAppliers,t.type);if(!s)throw new Error("Unrecognized change type "+t.type);return new s(t,c)}catch(f){return u.error("Change applier was never properly constructed:",f),{apply:function(){return i.reject(f)}}}}},3734:function(t){t.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}},2661:function(t,n,e){var i=e(430),r=e(3734).CHANGE_DATA_KEY;function o(t,n){return[t,n].join("_")}n.getData=function(t,n,e){var i=o(n,e);return t[r]&&t[r][i]?t[r][i]:null},n.hasData=function(t){return Boolean(t&&t[r]&&!i.isEmpty(t[r]))},n.removeData=function(t,n,e){t[r]&&delete t[r][o(n,e)]},n.setData=function(t,n,e,i){if("object"!=typeof i)throw new Error("setData expects an object");t[r]||(t[r]={}),t[r][o(n,e)]=i}},9818:function(t,n,e){var i=e(6744);t.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}},5971:function(t,n,e){var i=e(430),r=e(1664),o=e(6397),a=e(1164),u=e(1364).U,c=e(2146),s=e(4748),f=e(4407),l=e(3457),d=e(7322).Promise,h=e(2538),v=s.get("stores/global"),p=s.get("stores/action_data"),g=s.get("stores/change_data"),m=s.get("stores/session"),_=e(7529);e(2781).initialize();var w=u("ActionError");function y(t,n,e){if(p.getActionState(n.id)){var o=p.getChangeApplier(t.id,n.id);if(i.isUndefined(o)){var a={changeId:t.id,actionId:n.id,changeApplier:_.create(t,n,e)};f.dispatch(r.SET_CHANGE_APPLIER,a)}else l.warn("Action / Attempted to prepare a change which is already being applied: ",t)}else l.warn("Action / Attempted to prepare change for inactive action: ",n)}function b(t,n,e,r){if(!i.includes(r,n)){if(!t[String(n)]){var u=g.getChange(n);if(!u){var s="Change with id "+n+" is absent";return r.length&&(s+=" but listed as a dependency for "+r[r.length-1]),void l.warn(s)}t[String(n)]=new d((function(s){var f=i.map(u.dependencies||[],(function(i){return b(t,i,e,r.concat([n]))}));if(u.src){var v="change_"+u.src,m=a.makeAsyncRequest(v,(function(){return h.addScriptAsync("https://cdn-pci.optimizely.com/public/15853140465/data"+u.src,(function(){a.resolveRequest(v)}))})).then((function(){var t=g.getChange(u.id);t||o.emitError(new w("Failed to load async change from src: "+u.src)),y(t,e,c.now())}));f.push(m)}d.all(f).then((function(){var t=c.now(),i=p.getChangeApplier(n,e.id);return i?(l.debug("Action / Applying change:",u),i.apply().then((function(n){n?l.log(n):l.debug("Action / Applied change for the first time in "+(c.now()-t)+"ms:",u),s()}))):(l.debug("Action / Not applying change ",n," - No changeApplier found."),void s())}))["catch"]((function(t){l.error("Action / Failed to apply change:",u,t),s()}))}))}return t[String(n)]}l.error("Change with id "+n+" has circular dependencies: "+r.concat(n))}n.prepareAction=function(t){l.debug("Action / Preparing:",t),f.dispatch(r.ACTION_EXECUTED,{actionId:t.id,sessionId:m.getSessionId(),layerId:t.layerId,pageId:t.pageId,timestamp:c.now(),activationId:v.getActivationId()});var n=c.now();i.forEach(t.changeSet,(function(e){var o=i.isObject(e)?e.id:e,a=g.getChange(o);a||(f.dispatch(r.ADD_CHANGE,e),a=g.getChange(e.id)),a.src||y(a,t,n)}))},n.executePreparedAction=function(t){l.debug("Action / Executing:",t);var n={},e=i.map(t.changeSet,(function(e){var r=i.isObject(e)?e.id:e;return b(n,r,t,[])}));return d.all(e).then((function(){l.debug("changes for action id="+t.id+" applied")}))}},2781:function(t,n,e){var i=e(3734),r=e(4748).get("stores/directive");function o(){("interactive"===document.readyState||"complete"===document.readyState)&&(n.domReadyTime=Date.now())}n.domReadyTime=null,n.initialize=function(){o(),document.addEventListener("readystatechange",o,!0)},n.isTimedOut=function(t){var e=Date.now();if(!n.domReadyTime||!t)return!1;var o=Math.max(t,n.domReadyTime);return r.isEditor()&&(o=n.domReadyTime),!(e-o<i.SELECTOR_POLLING_MAX_TIME)}},9226:function(t,n,e){var i=e(430),r=e(1664),o=e(6397),a=e(5355),u=e(2146),c=e(5257),s=e(4748),f=e(6051),l=e(2821),d=e(6664),h=e(1564),v=e(552),p=e(5039),g=e(4407),m=e(1623),_=e(3457),w=(e(2341),e(7322).Promise),y=e(8424),b=e(7598),E=e(2469),I=e(1186),A=e(2894),T=s.get("stores/client_metadata"),S=s.get("stores/global"),k=s.get("stores/session"),R=s.get("stores/view"),N=s.get("stores/plugins"),D=s.get("stores/layer"),C=s.get("stores/layer_data"),O=s.get("stores/observed_redirect"),x=s.get("stores/pending_redirect"),P=s.get("stores/visitor"),M=s.get("stores/directive"),L=s.get("stores/event_data"),U=s.get("stores/visitor_id");function V(t,n){return i.extend({},t,{isLayerHoldback:n,isGlobalHoldback:!1,clientName:i.isNull(t.clientName)?c.NAME:t.clientName,integrationStringVersion:i.isNull(t.integrationStringVersion)?1:t.integrationStringVersion,anonymizeIP:i.isNull(S.getAnonymizeIP())?void 0:S.getAnonymizeIP(),activationId:S.getActivationId(),decisionTicketAudienceIds:[],sessionId:k.getSessionId(),activeViewStates:[],userFeatures:j(P.getVisitorProfile()),layerStates:D.getLayerStatesForAnalytics()})}function F(t){var n=y.getReferrer()||f.getReferrer();return{eventId:A.generate(),timestamp:u.now(),revision:S.getRevision(),clientName:T.getClientName(),clientVersion:T.getClientVersion(),projectId:S.getProjectId(),accountId:S.getAccountId(),activationId:S.getActivationId(),sessionId:k.getSessionId(),isGlobalHoldback:S.isGlobalHoldback(),namespace:S.getNamespace(),referrer:n,visitorId:U.getRandomId(),activeViewStates:t.activeViewStates,layerStates:t.layerStates,userFeatures:j(t.visitorProfile)}}function z(t){var n,e;return t.pageId?(n=t.pageId,(e=R.getViewState(n))&&e.isActive?e.metadata:{}):{}}function j(t){var n=N.getAllPlugins(l.PluginTypes.visitorProfileProviders),e=i.filter(n,{shouldTrack:!0}),r={id:null,type:null,name:"",value:null,shouldIndex:!0};return i.reduce(e,(function(n,e){try{var o=e.provides,a=t[o],u=[];if(!i.isUndefined(a)){i.isObject(a)?u=i.map(a,(function(t,n){var e=i.isObject(t)?t:{value:t};return i.extend({},{type:o,name:n},e)})):u.push({type:o,value:a});var c=i(u).map((function(t){return i.pick(i.extend({},r,t),i.keys(r))})).filter((function(t){return!!t.value})).value();n=n.concat(c)}}catch(s){_.warn("Error evaluating userFeature against visitorProfile:",s)}return n}),[])}function G(t,n,e){var r=function(t,n){var e=[];return i.each(N.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(i,r){if(i[t]&&(!n||!i[n]))try{e.push({name:r,hookFn:s.evaluate(i[t])})}catch(o){_.error(o)}})),e}(t,e);_.debug("Found "+r.length+" analytics integrations defining a "+t+" hook"),_.debug("Calling each with data: ",n),i.each(r,(function(t){try{_.debug("Calling plugin: "+t.name),t.hookFn(n),_.debug("Called plugin: "+t.name)}catch(e){_.error(e)}}))}function q(t,n,e){var r=function(t,n){0;var e=[];return i.each(N.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(r,o){i.includes(n,r[t])&&e.push({name:o,hookFn:r.trackLayerDecision})})),e}(t,n);_.debug("Found "+r.length+" analytics integrations  defining a trackLayerDecision "+t+" timing of "+n.join("|")),_.debug("Calling each with data: ",e),i.each(r,(function(t){try{_.debug("Calling plugin: "+t.name),t.hookFn(e),_.debug("Called plugin: "+t.name)}catch(n){_.error(n)}}))}n.trackClientActivation=function(){if(M.shouldSendTrackingData()){var t,n=(t=F({activeViewStates:[],visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()}),i.extend(t,{eventTags:{}}));return G("onClientActivation",n),n}},n.trackCustomEvent=function(t,n,e,r){n=n||{},r=r||{},e||(e=L.getByApiName(t));var u=function(t,n,e,r){var o=F({activeViewStates:R.getActiveViewStates(),visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()}),a=r&&r.pageId?z(r):R.getActiveViewTags(),u=i.extend({},a,n),c=r&&r.category?r.category:d.OTHER;return i.extend(o,{eventEntityId:r&&r.id,eventApiName:t,eventCategory:c,eventTags:u,eventProperties:e})}(t,n,r,e),c={name:t,type:p.CUSTOM,category:u.eventCategory,tags:i.omit(u.eventTags,"revenue")};if(i.isUndefined(n.revenue)||(c.revenue=n.revenue),o.emitAnalyticsEvent({name:e?e.name||e.apiName:t,apiName:e?e.apiName:void 0,type:p.CUSTOM,tags:i.omit(u.eventTags,"revenue"),category:u.eventCategory,metrics:c.revenue?{revenue:c.revenue}:{}},!M.shouldSendTrackingData()),M.shouldSendTrackingData())return a.addEvent(c),G("onCustomEvent",u),u},n.trackDecisionEvent=function(t,n,e){e||(e=C.get(t.layerId));var o=A.generate();g.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:t.layerId,pageId:n.pageId,decisionId:o});var a=function(t,n,e,r){var o=null,a=null,c=null;if(n.experimentId){var s=i.find(r.experiments,{id:n.experimentId});if(s&&(o=s.name||null,c=s.integrationSettings,n.variationId)){var l=i.find(s.variations,{id:n.variationId});l&&(a=l.name||null)}}var d=y.getReferrer()||f.getReferrer();return{sessionId:k.getSessionId(),decisionTicketAudienceIds:e.audienceIds,visitorId:U.getRandomId(),decisionId:t,activationId:S.getActivationId(),namespace:S.getNamespace(),timestamp:u.now(),pageId:e.pageId||null,variationId:n.variationId,variationName:a,experimentId:n.experimentId,experimentName:o,layerId:n.layerId,layerName:r.name,layerPolicy:r.policy,accountId:S.getAccountId(),projectId:S.getProjectId(),revision:String(S.getRevision()),clientName:T.getClientName(),clientVersion:T.getClientVersion(),referrer:d,integrationStringVersion:r.integrationStringVersion||1,integrationSettings:i.extend({},r.integrationSettings,c)}}(o,t,n,e),c=x.isExpectingRedirect(),s=x.getLayerId(),l=m.description(e);if(c&&s===e.id&&(b.persist(a,"COOKIE"),_.log("Relaying decision for redirect Campaign",l)),M.shouldSendTrackingData()){var d=V(a,t.isLayerHoldback);if(c&&s===e.id){var h=I.TrackLayerDecisionTimingFlags.preRedirectPolicy;d.timing=h,q(h,[I.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],d),_.log("Called trackLayerDecision for redirect Campaign",l,d)}else{h=I.TrackLayerDecisionTimingFlags.nonRedirectPolicy;d.timing=h,q(h,[I.NonRedirectPolicies.TRACK_IMMEDIATELY],d),_.log("Called trackLayerDecision for non-redirect Campaign",l,d)}}else _.log("Analytics / Not tracking decision for Campaign",m.description(e))},n.trackPostRedirectDecisionEvent=function(){if(!M.shouldSendTrackingData()||O.hasTracked())return w.resolve();var t=O.get();if(!t)return w.resolve();var n=V(t,!1),e=I.TrackLayerDecisionTimingFlags.postRedirectPolicy;n.timing=e,q(e,[I.PostRedirectPolicies.TRACK_IMMEDIATELY],n);var i=new w((function(t){var n=h.on({filter:{type:v.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){t(),h.off(n)}})})),o=E.makeTimeoutPromise(1e3);return w.race([i,o]).then((function(){_.log("Calling trackers after successful sync")}),(function(t){_.warn("Calling trackers after failed sync:",t)})).then((function(){(n=V(t,!1)).timing=I.TrackLayerDecisionTimingFlags.postRedirectPolicy,q(I.TrackLayerDecisionTimingFlags.postRedirectPolicy,[I.PostRedirectPolicies.TRACK_AFTER_SYNC],n),g.dispatch(r.REGISTER_TRACKED_REDIRECT_DATA)}))["catch"]((function(t){_.error("Error when calling trackers after sync:",t)}))},n.trackClickEvent=function(t){var n=function(t){var n=F({activeViewStates:R.getActiveViewStates(),visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()}),e=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector,r=t.apiName,o=t.category||d.OTHER,a=t.id,u=z(t);return i.extend(n,{eventApiName:r,eventCategory:o,eventEntityId:a,eventTags:u,pageId:t.pageId,selector:e})}(t),e={name:t.apiName,type:t.eventType,category:n.eventCategory,tags:n.eventTags};if(o.emitAnalyticsEvent({name:t.name||t.apiName,apiName:t?t.apiName:void 0,type:t.eventType,category:n.eventCategory,tags:n.eventTags,metrics:{}},!M.shouldSendTrackingData()),M.shouldSendTrackingData())return a.addEvent(e),G("onClickEvent",n),n},n.trackViewActivation=function(t,n){if(n||(n=R.getViewState(t.id)),n.isActive){var e=function(t,n){var e=F({activeViewStates:R.getActiveViewStates(),visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()});return i.extend(e,{pageId:t.id,pageApiName:t.apiName,viewCategory:t.category,eventTags:n.metadata})}(t,n);if(o.emitAnalyticsEvent({name:t.name||e.pageApiName,apiName:e.pageApiName,type:p.PAGEVIEW,category:e.viewCategory,tags:e.eventTags,metrics:{}},!M.shouldSendTrackingData()),M.shouldSendTrackingData())return a.addEvent({name:e.pageApiName,type:p.PAGEVIEW,category:e.viewCategory,tags:e.eventTags}),g.dispatch(r.TRACK_VIEW_ACTIVATED_EVENT,{pageId:t.id,eventData:e}),G("onPageActivated",e),e}else _.debug("Inactive view passed to `trackViewActivation`")}},7598:function(t,n,e){var i=e(430),r=e(1664),o=e(6113),a=e(6397),u=e(4748),c=e(2821),s=e(4407),f=e(3457),l=e(1186),d=u.get("stores/plugins"),h=".",v=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(t){return i.map(t,encodeURIComponent).join(",")},encodeValueString:i.identity,decodeValueString:i.identity,valueFromValueString:function(t){return i.map(t.split(","),o.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:function(t,n){var e=null;if(t){var r=d.getPlugin(c.PluginTypes.analyticsTrackers,n);if(r&&i.isFunction(r.serializeSettings))try{e=r.serializeSettings(t)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",n,o)}}return e},valueFromValueString:function(t,n){var e=null,r=d.getPlugin(c.PluginTypes.analyticsTrackers,n);if(r&&i.isFunction(r.deserializeSettings))try{e=r.deserializeSettings(t)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",n,o)}return e},isNullable:!0}],p={},g={};i.forEach(v,(function(t){p[t.name]=t,g[t.relayName]=t})),n.persist=function(t,n){n===l.RedirectRelayMedia.COOKIE?function(t){try{var n=function(t){var n=[],e=i.reduce(t,(function(t,e,r){var o=p[r];return o?(o.isMulti?i.forEach(e,(function(n,e){n=o.valueToValueString?o.valueToValueString(n,e):String(n),i.isNull(n)||(n=(o.encodeValueString||encodeURIComponent)(n),t.push(encodeURIComponent(o.relayName+h+e)+"="+n))})):i.isNull(e)||(e=(o.valueToValueString||String)(e),e=(o.encodeValueString||encodeURIComponent)(e),t.push(o.relayName+"="+e)),t):(n.push(r),t)}),[]);if(n.length)throw new Error("Relay / Don't know how to relay some fields: "+n);return e.sort(),e.join("&")}(t)}catch(e){return f.error("Relay / Error computing redirect relay cookie: ",e),void a.emitError(e)}f.debug("Relay / Setting redirect relay cookie:",n);try{o.set(c.COOKIES.REDIRECT,n,{maxAge:5,encodeValue:!1})}catch(r){f.error("Relay / Failed to set redirect relay cookie",r),a.emitError(r)}}(t):f.error("Relay / Unsupported redirect relay medium: "+n)},n.load=function(t){if(t||(t=function(){var t=o.get(c.COOKIES.REDIRECT,!1);if(t)return f.log("Relay / Found redirect cookie:",t),t}()),t){var n=function(t){var n={},e=t.split("&");return i.forEach(e,(function(t){var e=t.split("=");if(2===e.length){var r=o.safeDecodeURIComponent(e[0]),u=g[r];if(u||(u=i.find(v,(function(t){return t.isMulti&&0===r.indexOf(t.relayName+h)})))){var c=e[1];try{if(u.isMulti){n[u.name]=n[u.name]||{};var s=r.substring(u.relayName.length+h.length);c=(u.decodeValueString||o.safeDecodeURIComponent)(c),c=(u.valueFromValueString||i.identity)(c,s),n[u.name][s]=c}else c=(u.decodeValueString||o.safeDecodeURIComponent)(c),c=(u.valueFromValueString||i.identity)(c),n[u.name]=c}catch(l){return f.warn("Relay / Skipping segment due to decode or parse error:",t,l),void a.emitError(l)}}else f.warn("Relay / Skipping segment with unknown field identifier:",t,r)}else f.warn("Relay / Skipping invalid segment:",t)})),n}(t);if(n){var e=[];if(i.forEach(v,(function(t){(i.isNull(n[t.name])||i.isUndefined(n[t.name]))&&(t.isNullable?n[t.name]=null:(delete n[t.name],e.push(t.name)))})),!e.length)return s.dispatch(r.LOAD_REDIRECT_DATA,n),s.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){var t,e;e=(t=n).pageId||void 0,s.dispatch(r.RECORD_LAYER_DECISION,{layerId:t.layerId,decision:{layerId:t.layerId,experimentId:t.experimentId,variationId:t.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:t.decisionTicketAudienceIds,bucketingId:t.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:e,activationId:t.activationId},sessionId:t.sessionId,activationId:t.activationId,timestamp:t.timestamp,revision:t.revision,namespace:t.namespace,pageId:e}),s.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:t.layerId,pageId:e,decisionId:t.decisionId}),s.dispatch(r.ACTION_EXECUTED,{sessionId:t.sessionId,layerId:t.layerId,pageId:t.pageId,timestamp:t.timestamp,activationId:t.activationId})}}),n;f.error("Relay / Observed redirect data with missing fields:",e)}}}},6397:function(t,n,e){var i=e(1564);n.emitError=function(t,n,e){i.emit({type:"error",name:t.name||"Error",data:{error:t,metadata:n}},e||!1,!0)},n.emitInternalError=function(t,e){n.emitError(t,e,!0)},n.emitAnalyticsEvent=function(t,n){var e={type:"analytics",name:"trackEvent",data:t};i.emit(e,n)}},62:function(t,n,e){var i=e(430),r=e(7024),o=e(6457),a=e(3457),u=e(9867);function c(t,n){var e="function"==typeof t?t(n):t;return"string"==typeof e&&(e=[e]),i.isArray(e)?e:(a.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function s(t){return t.name?t.name+" ("+t.id+")":t.id}n.isInAudience=function(t,n,e){var u,f=function(t,n){return function(e){var r=e.type,u=n[r];if(!u)throw new Error("Audience / No matcher found for type="+r);if(u.fieldsNeeded)for(var s=c(u.fieldsNeeded,e),f=0;f<s.length;f++){var l=s[f],d=o.getFieldValue(t,l);if(i.isUndefined(d))return void a.debug("Audience / Required field",l,"for type",r,"has no value")}a.debug("Matching condition:",e,"to values:",t);var h=u.match(t,e);if(!i.isUndefined(h))return!!h}}(t,e);a.groupCollapsed("Checking audience",n.name,n.id,n),a.debug("Visitor Profile:",t);try{var l=r.evaluate(n.conditions,f)}catch(d){u=d,l=!1}return a.groupEnd(),u&&a.error("Audience / Error evaluating audience",s(n),":",u),a.log("Is "+(l?"in":"NOT in")+" audience:",s(n)),l},n.requiredAudienceFieldsForConditions=function f(t,n){var e={};return i.each(t,(function(t){if(i.isArray(t))i.extend(e,f(t,n));else if(i.isObject(t)){var r=n[t.type];if(r){var o=c(r.fieldsNeeded,t);i.each(o,(function(t){e[u.serializeFieldKey(t)]=t}))}}})),e}},8477:function(t,n){n.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},n.FIELDS_V0_2={name:n.FIELDS.NAME,time:n.FIELDS.TIME,type:n.FIELDS.TYPE,category:n.FIELDS.CATEGORY,tags:n.FIELDS.OPTIONS,session_index:n.FIELDS.SESSION_INDEX}},1836:function(t,n,e){var i=e(430),r=e(8477),o=e(6457).getFieldValue,a=e(9039);function u(t,n,e,o,a){this[r.FIELDS.NAME]=t,this[r.FIELDS.TYPE]=n,i.isString(e)&&e.trim().length>0&&(this[r.FIELDS.CATEGORY]=e),o&&i.keys(o).length>0&&(this[r.FIELDS.OPTIONS]=o),i.isUndefined(a)||(this[r.FIELDS.REVENUE]=a)}function c(t,n,e,o){this.eventBase=t,this[r.FIELDS.TIME]=n,i.isUndefined(e)||(this[r.FIELDS.SESSION_ID]=e),i.isUndefined(o)||(this[r.FIELDS.SESSION_INDEX]=o)}n.x=u,u.prototype.digest=function(){var t=function(t,n){return encodeURIComponent(t)+"="+encodeURIComponent(n)},n=[];if(n.push(t(r.FIELDS.NAME,this[r.FIELDS.NAME])),n.push(t(r.FIELDS.TYPE,this[r.FIELDS.TYPE])),this[r.FIELDS.CATEGORY]&&n.push(t(r.FIELDS.CATEGORY,this[r.FIELDS.CATEGORY])),this[r.FIELDS.REVENUE]&&n.push(t(r.FIELDS.REVENUE,this[r.FIELDS.REVENUE])),!this[r.FIELDS.OPTIONS])return n.join("&");var e=this[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(e),(function(t){return e.hasOwnProperty(t)}));o=o.sort();for(var a=0;a<o.length;a++)n.push(t(o[a],e[o[a]]));return n.join("&")},u.prototype.hash=function(){return this.hash_||(this.hash_=a.hashToHex(a.toByteString(this.digest()),a.Seed.BEHAVIOR_EVENT)),this.hash_},u.prototype.setHash=function(t){this.hash_=t},u.prototype.reHash=function(){this.hash_=null,this.hash()},u.prototype.equals=function(t){if(this.hash()!==t.hash()||this[r.FIELDS.NAME]!==t[r.FIELDS.NAME]||this[r.FIELDS.TYPE]!==t[r.FIELDS.TYPE]||this[r.FIELDS.CATEGORY]!==t[r.FIELDS.CATEGORY]||this[r.FIELDS.REVENUE]!==t[r.FIELDS.REVENUE])return!1;var n=this[r.FIELDS.OPTIONS]||{},e=t[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(n),(function(t){return n.hasOwnProperty(t)})),a=i.filter(i.keys(e),(function(t){return e.hasOwnProperty(t)}));if(o.length!==a.length)return!1;for(var u=0;u<o.length;u++){var c=o[u];if(!e.hasOwnProperty(c)||n[c]!==e[c])return!1}return!0},u.prototype.getValueOrDefault=function(t,n){var e=o(this,t);return i.isUndefined(e)?n:e},u.prototype.setFieldValue=function(t,n){t!==r.FIELDS.NAME&&t!==r.FIELDS.TYPE&&t!==r.FIELDS.CATEGORY&&t!==r.FIELDS.REVENUE&&t!==r.FIELDS.OPTIONS||(this[t]=n,this.reHash())},n.j=c,c.prototype.getValueOrDefault=function(t,n){if(0===t.length)return this;var e={};e[r.FIELDS.TIME]=this[r.FIELDS.TIME],e[r.FIELDS.SESSION_ID]=this[r.FIELDS.SESSION_ID],e[r.FIELDS.SESSION_INDEX]=this[r.FIELDS.SESSION_INDEX];var a=o(e,t);return i.isUndefined(a)?this.eventBase.getValueOrDefault(t,n):a},c.prototype.setFieldValue=function(t,n){t===r.FIELDS.TIME||t===r.FIELDS.SESSION_ID||t===r.FIELDS.SESSION_INDEX?this[t]=n:this.eventBase.setFieldValue(t,n)};var s={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};c.prototype.readableEvent=function(){var t,n,e=function(t){return i.isString(t)?'"'+t+'"':t},o=this,a=[];i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.SESSION_ID],(function(r){t=s[r],n=o.getValueOrDefault([r]),i.isUndefined(n)||a.push(t+": "+e(n))}));var u=[];if(t=s[r.FIELDS.OPTIONS],n=o.getValueOrDefault([r.FIELDS.OPTIONS]),i.isUndefined(n)||(i.each(n,(function(t,n){u.push(n+": "+String(e(t)))})),a.push(t+": {\n\t\t"+u.join(",\n\t\t")+"\n\t}")),n=o.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(n)&&(n=e(new Date(n).toString())),!i.isUndefined(n)){a.push("timestamp: "+n)}return"{\n\t"+a.join(",\n\t")+"\n}"},c.prototype.toObject=function(t){var n,e,o={},a=this;i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.OPTIONS,r.FIELDS.SESSION_INDEX],(function(t){n=s[t],e=a.getValueOrDefault([t],t===r.FIELDS.OPTIONS?{}:void 0),i.isUndefined(e)||(o[n]=e)}));var u=s[r.FIELDS.OPTIONS],c=s[r.FIELDS.REVENUE];if(t&&t.revenueAsTag&&o[c]&&(o[u]=o[u]||{},o[u][c]=o[c],delete o[c]),e=a.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(e))if(t&&t.timeAsTimestamp){o.timestamp=new Date(e)}else{o.time=e}return o}},5355:function(t,n,e){var i=e(6433);n.initializeStore=i.initialize,n.addEvent=i.addEvent,n.getEvents=i.getEvents,n.getEventCount=i.getEventCount},6035:function(t,n,e){var i=e(1836).j,r=e(2146),o=e(8477),a=e(1836).x;n.CURRENT_SESSION_INDEX=0;var u=18e5;function c(t,e){var i;i=n.isInSameSession(t,e)?t.getValueOrDefault([o.FIELDS.SESSION_ID]):e.getValueOrDefault([o.FIELDS.TIME]),e.setFieldValue(o.FIELDS.SESSION_ID,i)}function s(t,e,i){var r,a=t.getValueOrDefault([o.FIELDS.SESSION_INDEX]);r=n.isInSameSession(e,t)?a:i?a+1:a-1,e.setFieldValue(o.FIELDS.SESSION_INDEX,r)}n.isInSameSession=function(t,n){var e=t.getValueOrDefault([o.FIELDS.TIME],0),i=n.getValueOrDefault([o.FIELDS.TIME],0);return Math.abs(e-i)<u},n.updateSessionId=function(t,n){if(t){var e=t.getValueOrDefault([o.FIELDS.TIME]),r=t.getValueOrDefault([o.FIELDS.SESSION_ID]),u=n.getValueOrDefault([o.FIELDS.TIME]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?e:r,c(t=new i(new a("",""),e,r),n)}else n.setFieldValue(o.FIELDS.SESSION_ID,n.getValueOrDefault([o.FIELDS.TIME]))},n.updateSessionIndex=function(t,n){if(t){var e=t.getValueOrDefault([o.FIELDS.TIME]),r=t.getValueOrDefault([o.FIELDS.SESSION_INDEX]),u=n.getValueOrDefault([o.FIELDS.TIME]),c=t.getValueOrDefault([o.FIELDS.SESSION_ID]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?0:r,c="number"!=typeof c?e:c,s(t=new i(new a("",""),e,c,r),n,!1)}else n.setFieldValue(o.FIELDS.SESSION_INDEX,0)},n.sessionize=function(t){var e=t.length;if(0!==e){t[0].setFieldValue(o.FIELDS.SESSION_ID,t[0].getValueOrDefault([o.FIELDS.TIME]));for(var i=1;i<e;i++)c(t[i-1],t[i]);var a=n.CURRENT_SESSION_INDEX,f=t[e-1].getValueOrDefault([o.FIELDS.TIME]);r.now()-f>u&&(a+=1),t[e-1].setFieldValue(o.FIELDS.SESSION_INDEX,a);for(i=e-1;i>0;i--)s(t[i],t[i-1],!0)}},n.reindexIfNecessary=function(t,n,e){var i=function(t){for(var n=0;n<t.length;n++){var e=t[n].getValueOrDefault([o.FIELDS.SESSION_INDEX]);t[n].setFieldValue(o.FIELDS.SESSION_INDEX,e+1)}};-1===t.getValueOrDefault([o.FIELDS.SESSION_INDEX])&&(i(n),i(e))},n.sessionSortPredicate=function(t,n){return t[o.FIELDS.TIME]-n[o.FIELDS.TIME]},n.applyMigrations=function(t){return!1}},6433:function(t,n,e){var i=e(430),r=e(1664),o=e(2146),a=e(6664),u=e(4407),c=e(3457),s=e(9867),f=n,l=e(1836).j,d=e(8477),h=e(1836).x,v=e(6035),p=e(4748),g=p.get("stores/visitor_events"),m=p.get("stores/visitor_events_manager"),_={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"};function w(t){u.dispatch(r.SET_VISITOR_EVENTS,t)}function y(t){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:t})}function b(t){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:t})}function E(t){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:t})}function I(){return g.getEvents()}function A(){return m.getBaseMap()}function T(){return m.getEventQueue()}function S(){return m.getLastEvent()}function k(){var t=I().concat(T()),n=!1;return t.length>1e3&&(t=t.slice(-1e3),n=!0),w(t),b([]),n}n.initialize=function(t,n){if(!m.getInitialized()){f.S(t,n);var e=I();e.length>0&&E(e[e.length-1]);var i=T();i.length>0&&E(i[i.length-1]),u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}},n.addEvent=function(t){c.debug("Behavior store: adding event",t);var n=f.k(t);E(n),b(T().concat(n)),v.reindexIfNecessary(S(),I(),T()),f.R(T())},n.getEvents=function(){return T().length>0&&(k()&&v.sessionize(I()),f.N(I()),f.R(T())),I()},n.getEventCount=function(){return T().length+I().length},f.S=function(t,n){f.D(t,n)&&(f.N(I()),f.R(T())),v.sessionize(I())},f.D=function(t,n){if(0===t.length&&0===n.length)return w([]),b([]),!1;var e=!1,i=t[0]||n[0];return _.EVENTBASE in i?(w(f.C(t)),b(f.C(n))):(e=!0,w(f.O(t)),b(f.O(n))),T().length>0&&(k(),e=!0),w(f._updateBaseMapAndMaybeDedupe(I())),f._migrateEventBasesAndUpdateStore()&&(e=!0),e},f.O=function(t){for(var n=[],e=0;e<t.length;e++){var i=t[e],r=f.P(i);n[e]=new l(r,i[d.FIELDS.TIME])}return n},f._migrateEventBasesAndUpdateStore=function(){var t=!1,n=f.M();return v.applyMigrations(n)&&(t=!0,y({}),w(f._updateBaseMapAndMaybeDedupe(I())),b(f._updateBaseMapAndMaybeDedupe(T()))),t},f.L=function(){return o.now()},f.k=function(t){var n,e=t.name,i=t.type||"default",r=t.category||a.OTHER,o=t.tags||{};t.revenue&&(n=t.revenue);var u=new h(e,i,r,o,n);u=f.V(u);var c=f.L(),s=new l(u,c,-1);return v.updateSessionId(S(),s),v.updateSessionIndex(S(),s),s},f._updateBaseMapAndMaybeDedupe=function(t){for(var n=0;n<t.length;n++)t[n].eventBase=f.V(t[n].eventBase);return t},f.N=function(t){var n=f.F(t);s.persistBehaviorEvents(n)},f.R=function(t){var n=f.F(t);s.persistBehaviorEventQueue(n)},f.q=function(){var t;m.getCleared()||(w([]),b([]),f.N(I()),f.R(T()),y({}),E(null),t=!0,u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:t}))},f.V=function(t){var n=t.hash(),e=A(),r=e[n];if(i.isUndefined(r))return e[n]=[t],y(e),t;for(var o=0;o<r.length;o++)if(t.equals(r[o]))return r[o];return r.push(t),y(e),t},f.M=function(){var t=[],n=A();for(var e in n)!n.hasOwnProperty(e)||(t=t.concat(n[e]));return t},f.F=function(t){for(var n=function(t){var n={};n[d.FIELDS.NAME]=t.getValueOrDefault([d.FIELDS.NAME]),n[d.FIELDS.TYPE]=t.getValueOrDefault([d.FIELDS.TYPE]);var e=t.getValueOrDefault([d.FIELDS.CATEGORY]);i.isUndefined(e)||(n[d.FIELDS.CATEGORY]=e);var r=t.getValueOrDefault([d.FIELDS.REVENUE]);i.isUndefined(r)||(n[d.FIELDS.REVENUE]=r);var o=t.getValueOrDefault([d.FIELDS.OPTIONS]);return i.isUndefined(o)||(n[d.FIELDS.OPTIONS]=o),n},e=_,r=[],o="_idx_",a=0;a<t.length;a++){var u,c,s=t[a],f=s.eventBase;if(f.hasOwnProperty(o)){u=r[f._idx_];var l=s[d.FIELDS.TIME]-(u[e.TIMEBASE]||0);(c={})[e.DELTA]=l,c[e.INDEX]=a,u[e.TIMESTAMPS].push(c)}else(u={})[e.EVENTBASE]=n(s),u[e.HASH]=f.hash(),u[e.TIMEBASE]=s[d.FIELDS.TIME],(c={})[e.DELTA]=0,c[e.INDEX]=a,u[e.TIMESTAMPS]=[c],r.push(u),f._idx_=r.length-1}for(a=0;a<t.length;a++)delete t[a].eventBase._idx_;return r},f.P=function(t,n){var e=new h(t[d.FIELDS.NAME],t[d.FIELDS.TYPE],t[d.FIELDS.CATEGORY],t[d.FIELDS.OPTIONS],t[d.FIELDS.REVENUE]);return i.isUndefined(n)||e.setHash(n),e},f.C=function(t){for(var n=_,e=[],i=0;i<t.length;i++)for(var r=t[i],o=f.P(r[n.EVENTBASE],r[n.HASH]),a=r[n.TIMEBASE],u=r[n.TIMESTAMPS],c=0;c<u.length;c++){var s=u[c],d=new l(o,a+s[n.DELTA]);e[s[n.INDEX]]=d}return e},n.deserialize=function(t){return f.C(t)},n.mergeAllEvents=function(t){var n=[].concat.apply([],t);return n.sort(v.sessionSortPredicate),v.sessionize(n),n}},1664:function(t,n,e){var i=e(6744);t.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,SET_GA4_USER_ID:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,RESET_VIEW_STATES:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT:null,RECORD_VISITOR_ID_LOCATOR_USAGE:null,RECORD_VISITOR_ID_ERROR:null,RECORD_STICKY_BUCKETING_FEATURE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})},2821:function(t,n,e){var i=e(430),r=e(6744);n.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},n.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},n.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},n.Lifecycle=r({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),n.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},n.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},n.PluginTypes=r({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),n.ResourceTimingAttributes=r({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),n.RUMPerformanceTimingAttributes=r({blockTime:null}),n.AttributionTypes=r({FIRST_TOUCH:null,LAST_TOUCH:null}),n.SandboxedFunctions=r({XMLHttpRequest:null}),n.PerformanceData=r({performance_marks:null,resource_timing:null,performance_timing:null}),n.PerformanceCounters=r({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),n.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"},n.AllStorageKeys=i.assign({},n.StorageKeys,n.VisitorStorageKeys),n.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"},n.VisitorIdLocatorType={COOKIE:"cookie",JS_VARIABLE:"js",LOCALSTORAGE:"localStorage",QUERY:"query"}},6664:function(t){t.exports={OTHER:"other"}},552:function(t,n){n.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}},5039:function(t){t.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}},1186:function(t,n,e){var i=e(6744);n.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),n.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),n.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),n.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),n.RedirectRelayMedia=i({COOKIE:null})},1918:function(t,n,e){var i=e(9039),r=n.TOTAL_POINTS=1e4;n.bucketingNumber=function(t,n,e){return i.hashToInt(t+n,e,r)},n.isHoldback=function(t,e){return n.bucketingNumber(t,e.id,i.Seed.IGNORING)<(e.holdback||0)},n.chooseWeightedCandidate=function(t,e,r){for(var o=n.bucketingNumber(t,e,i.Seed.BUCKETING),a=0;a<r.length;a++)if(r[a].endOfRange>o)return r[a].entityId;throw new Error("Unable to choose candidate")}},9315:function(t,n,e){var i=e(430),r=e(1664),o=e(1918),a=e(7024),u=e(6782).E,c=e(4407),s=e(3457);n.isValidExperiment=function(t,n){var e,r=i.partial(i.includes,t);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",n,t),e=!n.audienceIds||a.evaluate(n.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",n,"is valid?",e),e},n.selectVariation=function(t,n,e,a,f){if(!t.variations||0===t.variations.length)throw new u('No variations in selected experiment "'+t.id+'"');if(!t.weightDistributions&&t.variations.length>1)throw new u('On selected experiment "'+t.id+'", weightDistributions must be defined if # variations > 1');var l;if(t.bucketingStrategy&&"impression"===t.bucketingStrategy)if(1===t.variations.length)l=t.variations[0].id;else{var d=a;l=o.chooseWeightedCandidate(e+d,t.id,t.weightDistributions)}else if(l=1===t.variations.length?t.variations[0].id:o.chooseWeightedCandidate(e,t.id,t.weightDistributions),f&&f[t.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",t.id);var h=f[t.id];if(!i.find(t.variations,{id:h}))return c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"stoppedVariation",id:t.id}),s.debug("Decision / Preferred variation:",h,"not found on experiment:",t.id,". Visitor not bucketed."),null;h!==l&&(c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredVariation",id:t.id}),l=h)}var v=i.find(t.variations,{id:l});if(v)return s.debug("Decision / Selected variation:",v),v;throw new u('Unable to find selected variation: "'+l+'".')},n.getExperimentById=function(t,n){var e=i.find(t.experiments,{id:n});if(e)return e;throw new u("Unable to find selected experiment.")},n.hasVariationActionsOnView=function(t,n){return s.debug("Decision / Checking variation:",t,"for actions on pageId:",n),!!i.find(t.actions,(function(t){return t.pageId===n&&!i.isEmpty(t.changes)}))}},6782:function(t,n){function e(t){this.message=t}e.prototype=new Error,n.E=e},3529:function(t,n,e){var i=e(430),r=e(1664),o=e(6397),a=e(62),u=e(1918),c=e(9315),s=e(6782).E,f=e(4748),l=e(2821),d=e(4407),h=e(5781),v=e(1623),p=e(3457),g=e(5431),m=f.get("stores/plugins"),_=f.get("stores/global"),w=f.get("stores/layer_data");function y(t){var n=m.getPlugin(l.PluginTypes.deciders,t);if(i.isEmpty(n))throw new Error("No deciders found for policy: "+t);return n}n.isPageIdRelevant=function(t){if(!t)return!1;var n=y(t.policy);return i.isFunction(n.includePageIdInDecisionTicket)?n.includePageIdInDecisionTicket(t):!0===n.includePageIdInDecisionTicket},n.createTicket=function(t){var n,e,r,o=i.pick(t,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return i.extend(o,{audienceIds:(n=t.visitorProfile,e=t.audiences,r=m.getAllPlugins(l.PluginTypes.audienceMatchers),i.reduce(e,(function(t,e){return a.isInAudience(n,e,r)&&t.push(e.id),t}),[])),activationId:_.getActivationId()}),o},n.decideGlobal=function(t){return{isGlobalHoldback:u.isHoldback(t.bucketingId,{id:null,holdback:t.globalHoldback})}},n.decideGroup=function(t,n){p.debug("Decision / Deciding layer for group: ",h.description(t));var e,o,a=n.preferredLayerId,c=!!a;try{(e=u.chooseWeightedCandidate(n.bucketingId,t.id,t.weightDistributions))&&"None"!==e||(o='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(l){o="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(c&&(p.debug("Decision / Using preferredLayerMap to select layer for group:",h.description(t)),a!==e&&(d.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredLayer",id:t.id}),e=a)),o)return{layerId:null,reason:o};if(!i.find(t.weightDistributions,{entityId:e})){var f="Visitor was"+(c?" sticky-":" non-sticky ")+"bucketed into a campaign ("+e+") which is not in the group";if(!c)throw new s(f);return{layerId:null,reason:f}}return{layerId:e}},n.decideLayer=function(t,n){var e,r;p.debug("Deciding: ",t,n);var a,f,l=y(t.policy),d={layerId:t.id,experimentId:null,variationId:null,isLayerHoldback:u.isHoldback(n.bucketingId,t)};if(i.isEmpty(t.experiments))throw new s("No experiments in layer.");try{if(l.decideLayer){p.debug("Decision / Using decider's custom decideLayer.");var h=l.decideLayer(t,n);e=h.experiment,r=h.variation}else p.debug("Decision / Using default decideLayer behavior."),e=l.selectExperiment(t,n.audienceIds,n.bucketingId),r=c.selectVariation(e,n.audienceIds,n.bucketingId,n.activationId,n.preferredVariationMap)}catch(v){a=v,(null!=(f=s)&&"undefined"!=typeof Symbol&&f[Symbol.hasInstance]?f[Symbol.hasInstance](a):a instanceof f)?d.reason=v.message:d.error=v}return d.experimentId=e?e.id:null,d.variationId=r?r.id:null,d.error&&(d.error.name="DecisionEngineError",o.emitError(d.error)),d},n.getDummyLayerDecision=function(t,n){var e,i=function(t,n){for(var e=0;e<t.experiments.length;e++)for(var i=0;i<t.experiments[e].variations.length;i++)if(n.indexOf(t.experiments[e].variations[i].id)>-1)return{experimentId:t.experiments[e].id,variationId:t.experiments[e].variations[i].id};return null}(t,n);return i?(p.log("Decision / Applying force variation:",i.variationId,"to Campaign",v.description(t)),e={layerId:t.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(p.log("No variation matches ids:",n,"in Campaign",v.description(t)),e={layerId:t.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),e},n.isInCohort=function(t){if(!t.experimentId||!t.variationId)return!1;var n=w.get(t.layerId);return!(g.isSingleExperimentPolicy(n.policy)&&t.isLayerHoldback)}},4748:function(t,n,e){var i=e(430),r=e(8729),o=e(4407),a=e(1613),u=r.create(),c={action_data:e(3732),async_request:e(784),audience_data:e(1912),change_data:e(1711),cleanup:e(3013),client_metadata:e(2334),cookie_options:e(5406),event_data:e(6546),event_emitter:e(7513),dimension_data:e(2835),directive:e(2972),global:e(7740),history:e(7584),integration_settings:e(9193),layer:e(6066),layer_data:e(7681),log:e(235),observed_redirect:e(9901),pending_events:e(46),performance:e(2608),plugins:e(4885),provider_status:e(6922),pending_redirect:e(2381),rum:e(6764),sandbox:e(1875),session:e(3740),tracker_optimizely:e(6334),ua_data:e(8991),view:e(746),view_data:e(4898),visitor:e(4441),visitor_attribute_entity:e(9335),visitor_events:e(3617),visitor_events_manager:e(9992),visitor_id:e(4322),visitor_bucketing:e(9307),xdomain:e(5866)};c.group_data=e(55),o.registerStores(c),i.forOwn(c,(function(t,n){u.register("stores/"+n,o.getStore(n))})),u.register("core/plugins/matchers/key_value",a),t.exports=u},1299:function(t,n,e){var i=e(430),r=e(1664),o=e(6397),a=e(6113),u=e(1364).U,c=e(2821),s=e(4407),f=e(3457),l=n.JSONParseError=u("JSONParseError"),d=e(4221),h=e(716),v=e(3473),p="optimizely_show_preview",g="optimizely_disable",m="optimizely_editor",_="optimizely_p13n",w="optimizely_x_audiences",y="optimizely_x",b="optimizely_show_preview",E="optimizely_opt_out",I="optimizely_token",A="optimizely_force_tracking";n.populateDirectiveData=function(){var t,n,e,u,T,S,k,R;!function(){var t="OFF",n=d.getQueryParamValue("optimizely_log");if(n){var e=n.split(":");""!==e[0]&&(t=String(e[0]).toUpperCase()),void 0!==e[1]&&f.setLogMatch(e[1])}f.setLogLevel(t)}(),function(){var t=v.getUserAgent()||"";if(!i.isString(t))return void f.warn("Directive / userAgent not a string");t=t.toLowerCase();var n=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],e=function(n){if(i.includes(t,n))return f.warn("Directive / Matches bot:",n),!0};i.some(n,e)&&(f.log("Directive / Disabling tracking"),s.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0}))}(),t=Boolean(i.result(window.optimizely,"initialized")),s.dispatch(r.LOAD_DIRECTIVE,{alreadyInitialized:t}),s.dispatch(r.LOAD_DIRECTIVE,{mutationObserverAPISupported:v.isMutationObserverAPISupported()}),function(){var t=a.get(c.COOKIES.OPT_OUT),n=d.getQueryParamValue(E),e="You have successfully opted out of Optimizely for this domain.",i="You are NOT opted out of Optimizely for this domain.";if("true"===n||"false"===n){var o="true"===n;s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:o}),v.alert(o?e:i)}else t&&s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:"true"===t})}(),function(){var t=!1,n=[p,g];n.push(m);for(var e=0;e<n.length;e++)if("true"===d.getQueryParamValue(n[e])){f.warn("Directive / Not activating because "+n[e]+" is set."),t=!0;break}s.dispatch(r.LOAD_DIRECTIVE,{disabled:t})}(),s.dispatch(r.LOAD_DIRECTIVE,{isEditor:!1}),s.dispatch(r.LOAD_DIRECTIVE,{isPreview:!1}),(n=d.getQueryParamValue(b))&&f.log("Directive / Is legacy preview mode"),s.dispatch(r.LOAD_DIRECTIVE,{isLegacyPreview:!!n}),s.dispatch(r.LOAD_DIRECTIVE,{isSlave:!1}),e=v.getGlobal("optlyDesktop"),(u=!(!e||i.isUndefined(e.p13nInner)))&&f.log("Directive / Is running in desktop app editor"),s.dispatch(r.LOAD_DIRECTIVE,{isRunningInDesktopApp:u}),(T="true"===d.getQueryParamValue(_))&&f.log("Directive / Is running in editor"),s.dispatch(r.LOAD_DIRECTIVE,{isRunningInV2Editor:T}),S=a.get(c.COOKIES.TOKEN)||null,k=d.getQueryParamValue(I)||S,s.dispatch(r.LOAD_DIRECTIVE,{projectToken:k}),function(){var t=a.get(c.COOKIES.PREVIEW),n=[],e=d.getQueryParamValue(w);if(e)n=a.safeDecodeURIComponent(e).split(",");else if(t)try{n=h.parse(t).forceAudienceIds}catch(v){var i=new l("Failed to parse previewCookie in registerForceAudienceIds: "+t),u={originalMessage:v.message,userError:!0};o.emitError(i,u)}n.length&&(f.log("Directive / Force Audience IDs:",n),s.dispatch(r.LOAD_DIRECTIVE,{forceAudienceIds:n}))}(),function(){var t=a.get(c.COOKIES.PREVIEW),n=[],e=d.getQueryParamValue(y);if(e)n=a.safeDecodeURIComponent(e).split(",");else if(t)try{n=h.parse(t).forceVariationIds}catch(v){var i=new l("Failed to parse previewCookie in registerForceVariationIds: "+t),u={originalMessage:v.message,userError:!0};o.emitError(i,u)}n.length&&(f.log("Directive / Force Variation IDs:",n),s.dispatch(r.LOAD_DIRECTIVE,{forceVariationIds:n}))}(),(R=d.getQueryParamValue(A))&&s.dispatch(r.LOAD_DIRECTIVE,{forceTracking:R})};n.setOptOut=function(t){t?(f.warn("Directive / Opting out"),a.set(c.COOKIES.OPT_OUT,"true",{maxAge:31536e4},!0)):a.remove(c.COOKIES.OPT_OUT),s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:t})}},2146:function(t,n){n.now=function(){return+new Date}},5257:function(t,n){n.VERSION="0.205.0",n.NAME="js"},6051:function(t,n,e){var i=e(4748).get("stores/global");n.getDocumentElement=function(){return document.documentElement},n.getCookieString=function(){return document.cookie||""},n.setCookie=function(t){document.cookie=t},n.querySelector=function(t){return document.querySelector(t)},n.querySelectorAll=function(t){return document.querySelectorAll(t)},n.parseUri=function(t){var e=n.createElement("a");return e.href=t,e},n.childrenOf=function(t){return Array.prototype.slice.call(t.querySelectorAll("*"))},n.createElement=function(t){return document.createElement(t)},n.isReady=function(){return i.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},n.isLoaded=function(){return"complete"===document.readyState},n.addReadyHandler=function(t){return document.addEventListener("DOMContentLoaded",t),function(){n.removeReadyHandler(t)}},n.removeReadyHandler=function(t){return function(){document.removeEventListener("DOMContentLoaded",t)}},n.getReferrer=function(){return document.referrer},n.getReadyState=function(){return document.readyState},n.write=function(t){if("loading"!==n.getReadyState())throw new Error("Aborting attempt to write to already-loaded document");document.write(t)},n.appendToHead=function(t){return n.appendTo(document.head,t)},n.appendTo=function(t,n){t.appendChild(n)},n.addEventListener=function(t,n,e){return document.addEventListener(t,n,e),function(){document.removeEventListener(t,n,e)}},n.getCurrentScript=function(){if(document.currentScript)return document.currentScript},n.parentElement=function(t){for(var n=t.parentNode;n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;return n}},4513:function(t,n,e){var i,r,o="optimizely_data",a=e(1364).U,u=e(7058),c=e(3473),s=a("StorageError");try{r=c.getGlobal("localStorage")}catch(f){throw new s("Unable to read localStorage: "+f.toString())}if(!r)throw new s("localStorage is undefined");i=u.create(r,o),n.mM=i},3552:function(t,n){n.create=function(t){return new MutationObserver(t)},n.observe=function(t,n,e){t.observe(n,e)}},2509:function(t,n,e){var i=e(7322).Promise,r=e(3473);n.estimateStorage=function(){var t=r.getGlobal("navigator");try{return t.storage.estimate()}catch(n){return i.resolve({usage:null,quota:null})}}},2341:function(t,n,e){var i=e(1664),r=e(1364).U,o=e(2146),a=e(4407),u=e(3473),c=e(4748).get("stores/rum"),s="optimizely:",f=n.Error=r("PerformanceError");function l(){return u.getGlobal("performance")}n.time=function(t){if(c.getSampleRum()){var n=l();if(n&&n.mark){var e=s+t;n.clearMarks(e+"Begin"),n.mark(e+"Begin")}}},n.timeEnd=function(t){if(c.getSampleRum()){var n=l();if(n&&n.mark){var e=s+t,r=n.getEntriesByName(e+"Begin");if(0===r.length)throw new f("Called timeEnd without matching time: "+t);n.clearMarks(e+"End"),n.mark(e+"End");var o=t+"Time",u=n.getEntriesByName(e+"End")[0].startTime-r[0].startTime;a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:o,data:{startTime:Math.round(1e3*r[0].startTime)/1e3,duration:Math.round(1e3*u)/1e3}})}}},n.setMark=function(t,n,e){if(c.getSampleRum()){var r=l();if(r&&r.mark){var o=s+t;r.mark(o),a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:t,data:{startTime:Math.round(1e3*n)/1e3,duration:Math.round(1e3*e)/1e3}})}}},n.now=function(){var t=l();return t?t.now():o.now()}},3473:function(t,n,e){var i=e(430),r=e(3457);n.getUserAgent=function(){return window.navigator.userAgent},n.getLocationSearch=function(){return window.location.search},n.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},n.getHref=function(){return window.location.href},n.getLocation=function(){return window.location},n.setLocation=function(t){window.location.replace(t)},n.setGlobal=function(t,n){window[t]=n},n.getGlobal=function(t){return window[t]},n.getGlobalByPath=function(t){for(var n=t.split("."),e=window;n.length;)try{e=e[n.shift()]}catch(i){throw r.error("Attempted to access nonexistent property. Path ",t),new Error("Attempted to access nonexistent property. Path "+t)}return e},n.addEventListener=function(){return window.addEventListener.apply(window,arguments)},n.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},n.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)},n.alert=function(t){alert(t)},n.setTimeout=function(t,n){return setTimeout((function(){try{t()}catch(n){r.warn("Deferred function threw error:",n)}}),n)},n.setInterval=function(t,n){return setInterval((function(){try{t()}catch(n){r.warn("Polling function threw error:",n)}}),n)}},8967:function(t,n,e){var i=e(430);n.create=function(t,n,e,r){return i.extend({category:"other"},r,{id:t,apiName:n,eventType:e})}},1564:function(t,n,e){var i=e(430),r=e(2894),o=e(1664),a=e(6397),u=e(4748),c=e(4407),s=e(3457),f=u.get("stores/event_emitter");n.on=function(t){return t.token||(t.token=r.generate()),c.dispatch(o.ADD_EMITTER_HANDLER,t),t.token},n.off=function(t){c.dispatch(o.REMOVE_EMITTER_HANDLER,{token:t})},n.emit=function(t,n,e){var r=f.getHandlers(t,n);i.each(r,(function(i){try{i.handler.call({$di:u},t)}catch(r){!e&&i.emitErrors?(s.error("Error in handler for event:",t,r),a.emitError(r,null,n)):s.warn("Suppressed error in handler for event:",t,r)}}))}},8001:function(t,n,e){var i=e(1564);n.on=function(t){return t.publicOnly=!0,i.on(t)},n.off=i.off,n.emit=function(t){i.emit(t)}},3562:function(__unused_webpack_module,exports,__webpack_require__){var createError=__webpack_require__(9981),di=__webpack_require__(4748),Logger=__webpack_require__(3457),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(t,n){n=n||[],EXEC_WITH_JQUERY&&(n=n.concat(di.get("env/jquery")));try{return t.apply(void 0,n)}catch(e){throw Logger.warn("Error applying function",t,"with args:",n,e),new ExecError(e)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}},4407:function(t,n,e){var i=e(9157);t.exports=i.create()},5781:function(t,n,e){var i=e(430);n.description=function(t){var n=!!t.name?'"'+t.name+'" ':"",e=function(t){return i.map(t.weightDistributions,"entityId")}(t).join(", ");return n+"(id "+t.id+", campaigns: "+e+")"}},1623:function(t,n,e){var i=e(430),r=e(1664),o=e(2146),a=e(4748),u=e(4407),c=a.get("stores/global"),s=a.get("stores/session");n.recordLayerDecision=function(t,n,e){return u.dispatch(r.RECORD_LAYER_DECISION,{layerId:t,decision:e,decisionTicket:n,sessionId:s.getSessionId(),activationId:c.getActivationId(),timestamp:o.now(),revision:c.getRevision(),namespace:c.getNamespace(),pageId:n.pageId}),e},n.relatedAudienceIds=function(t){var n={},e=["and","or","not"];return i.each(t.experiments,(function(t){i.each(i.flattenDeep(t.audienceIds),(function(t){i.includes(e,t)||(n[t]=!0)}))})),i.keys(n)},n.getActivationTimeout=function(t){var n=t.activation;return n&&null!==n.timeout&&void 0!==n.timeout?n.timeout:2e3},n.description=function(t){return(t.name?'"'+t.name+'" ':"")+"("+t.id+")"},n.createSingle=function(t,n,e){return{id:t,policy:"single_experiment",holdback:0,experiments:[{id:n||"",variations:[{id:e||"",actions:[]}],audienceIds:[]}],integrationStringVersion:1}},n.createLayerState=function(t,n,e,i){return void 0===i&&(i=!1),{layerId:t,decision:{layerId:t,experimentId:n,variationId:e,isLayerHoldback:i||!1},decisionTicket:{audienceIds:[]}}},n.getIntegrationTypes=function(t){return i.keys(i.reduce(i.keys(t.integrationSettings),(function(t,n){return i.isNaN(Number(n))||(n="custom"),t[n]=1,t}),{}))}},8613:function(t,n,e){var i=e(430);n.y=function(t,n){if(!n)return 0;for(var e=n.toString().split("."),r=t.toString().split("."),o=0;o<e.length;o++){if(i.isUndefined(r[o]))return-1;if(isNaN(Number(r[o]))){if(r[o]!==e[o])return-1}else{if(Number(r[o])<Number(e[o]))return-1;if(Number(r[o])>Number(e[o]))return 1}}return 0}},7024:function(t,n,e){var i=e(430),r=e(716),o=e(3457),a="or",u="not";var c={};function s(t,n){var e;if(i.isArray(t)){var u,s;t[0]in c?(u=t[0],s=t.slice(1)):(u=a,s=t),o.groupCollapsed('Condition / Applying operator "'+u+'" with args',r.stringify(s));try{e=c[u](s,n),o.debug("Condition / Result:",e)}finally{o.groupEnd()}return e}return e=n(t),o.debug("Condition / Evaluated:",r.stringify(t),":",e),e}c["and"]=function(t,n){for(var e,r,o=0;o<t.length;o++){if(!1===(e=s(t[o],n)))return!1;i.isUndefined(e)&&(r=!0)}if(!r)return!0},c[a]=function(t,n){for(var e,r=!1,o=0;o<t.length;o++){if(!0===(e=s(t[o],n)))return!0;i.isUndefined(e)&&(r=!0)}if(!r)return!1},c[u]=function(t,n){if(1!==t.length)return!1;var e=s(t[0],n);return i.isUndefined(e)?void 0:!e},t.exports={evaluate:s}},3637:function(t,n,e){var i=e(430),r=e(7062);function o(t){if((t=(t||"").toLowerCase())in c)return t;var n=i.keys(c);return i.find(n,(function(n){var e=c[n];return i.includes(e,t)}))||"unknown"}function a(t,n,e){return n||("unknown"===t?"unknown":e?"mobile":"desktop_laptop")}n.parseUA=function(t){var n=new r(t),e=n.getBrowser(),i=n.getOS(),c=n.getDevice(),f=(i.name||"unknown").toLowerCase(),l=(e.name||"unknown").toLowerCase(),d=u(c.type,l,f);return{browser:{id:o(e.name),version:e.version},platform:{name:f,version:i.version},device:{model:s[c.model]||"unknown",type:a(l,c.type,d),isMobile:d}}};var u=function(t,n,e){if(i.includes(["mobile","tablet"],t)||i.includes(["opera mini"],n))return!0;return!!i.includes(["android","blackberry","ios","windows phone"],e)},c={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},s={iPhone:"iphone",iPad:"ipad"}},8729:function(t,n,e){var i=e(430);function r(){this.B={}}r.prototype.register=function(t,n){if(1!==arguments.length){if(this.B[t])throw new Error("Module already registered for: "+t);this.B[t]=n}else{var e=this;i.each(t,(function(t,n){e.register(n,t)}))}},r.prototype.get=function(t){return this.B[t]},r.prototype.getModuleKeys=function(){var t=this.B;return i.keys(t)},r.prototype.evaluate=function(t){var n=t.length,e=t.slice(0,n-1),r=t[n-1];if("function"!=typeof r)throw new Error("Evaluate must take a function as last element in array");var o=i.map(e,i.bind(this.get,this));return r.apply(null,o)},r.prototype.reset=function(){this.B={}},t.exports={create:function(){return new r}}},7862:function(t,n,e){var i=e(430);function r(t,n,e){this.H=t,this.Y=n,this.K=0,this.$=!1,this.W={},i.extend(this,e),this.X={},this.initialize&&this.initialize()}r.prototype.J=function(t,n){var e=this.W[t];e&&"function"==typeof e&&e.call(this,n,t)},r.prototype.Z=function(){return i.cloneDeep(this.X)},r.prototype.on=function(t,n){this.W[t]=i.bind(n,this)},r.prototype.observe=function(t){return this.Y.tt(this.H,t)},r.prototype.emitChange=function(){this.$=!0,this.K++},r.prototype.hasChanges=function(){return this.$},r.prototype.resetChange=function(){this.$=!1},r.prototype.getStateId=function(){return this.K},r.prototype.nt=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},t.exports=r},9157:function(t,n,e){var i=e(430),r=e(7862);function o(t){t=t||{},this.et={},this.it={},this.rt=0,this.ot=[],this.ut=[]}function a(t,n){return function(){var e=t.indexOf(n);-1!==e&&t.splice(e,1)}}o.prototype.registerStores=function(t){i.forOwn(t,i.bind((function(t,n){this.et[n]=new r(n,this,t)}),this))},o.prototype.getStore=function(t){return this.et[t]},o.prototype.dispatch=function(t,n){this.dispatchId++,i.each(this.ot,i.bind((function(e){e.call(this,t,n)}),this)),i.forOwn(this.et,(function(e){e.J(t,n)})),i.each(this.ut,i.bind((function(e){e.call(this,t,n)}),this)),i.forOwn(this.et,i.bind((function(t,n){t.hasChanges()&&this.it[n]&&(t.resetChange(),i.each(this.it[n],(function(n){n(t)})))}),this))},o.prototype.reset=function(){this.it={},i.forOwn(this.et,(function(t,n){t.nt()}))},o.prototype.getState=function(){var t={};return i.forOwn(this.et,(function(n,e){t[e]=n.Z()})),t},o.prototype.onPreAction=function(t){var n=this.ot;return n.push(t),a(n,t)},o.prototype.onPostAction=function(t){var n=this.ut;return n.push(t),a(n,t)},o.prototype.tt=function(t,n){return this.it[t]||(this.it[t]=[]),this.it[t].push(n),a(this.it[t],n)},t.exports={create:function(t){return new o(t)}}},716:function(t,n,e){var i=e(430);function r(t){var n,e,r=[Array.prototype],o=[];i.each(r,(function(t){i.isUndefined(t.toJSON)||(o.push(t.toJSON),delete t.toJSON)}));try{n=t()}catch(a){e=a}finally{i.each(o,(function(t,n){r[n].toJSON=t}))}if(e)throw e;return n}n.stringify=function(){return r(i.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},n.parse=JSON.parse},95:function(t,n,e){var i=e(430);n.hasMatch=function(t,n,e){var r=!i.isUndefined(e)&&null!==e,o=!i.isUndefined(t)&&null!==t;switch(n||(o?"exact":"exists")){case"exists":return r;case"exact":return r&&String(e)===t;case"substring":return r&&String(e).indexOf(t)>-1;case"regex":try{return!(!o||!r)&&new RegExp(t).test(String(e))}catch(f){}return!1;case"range":var a=t.split(":"),u=parseFloat(a[0]),c=parseFloat(a[1]),s=parseFloat(e);return s>=u&&s<=c;default:return!1}}},7322:function(t,n,e){t.exports=e(1763)},7058:function(t,n,e){var i=e(430),r=e(3457);function o(t,n){this.ct=t,this.st=n}o.prototype.ft=function(t){return[this.st,t].join("$$")},o.prototype.dt=function(t){return t.replace(this.st+"$$","")},o.prototype.setItem=function(t,n){try{this.ct.setItem(this.ft(t),n)}catch(e){r.warn("Failed to save",t,"to localStorage:",e)}},o.prototype.removeItem=function(t){this.ct.removeItem(this.ft(t))},o.prototype.getItem=function(t){var n=null;try{n=this.ct.getItem(this.ft(t))}catch(e){}return n},o.prototype.keys=function(){var t=i.keys(this.ct);return i.map(i.filter(t,i.bind((function(t){return i.includes(t,this.st)}),this)),i.bind(this.dt,this))},o.prototype.allKeys=function(){return i.keys(this.ct)},o.prototype.allValues=function(){return i.values(this.ct)},t.exports={create:function(t,n){return new o(t,n)},mockStorage:{keys:function(){},getItem:function(t){},removeItem:function(t){},setItem:function(t,n){}}}},5907:function(t,n,e){var i=e(6051),r=e(1564),o=e(3552);n.createDOMChangedObserver=function(){var t=i.getDocumentElement(),n={type:"viewTrigger",name:"DOMChanged"},e=o.create((function(){r.emit(n,!0)}));o.observe(e,t,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}},1017:function(t,n,e){var i=e(430),r=e(6397),o=e(2821),a=e(716),u=e(4513).mM,c=e(3457),s=e(667),f=e(4748).get("stores/pending_events"),l=o.StorageKeys.PENDING_EVENTS;n.persistPendingEvents=function(){try{var t=f.getEventsString();u.setItem(l,t),e(9111).setItem(l,t)}catch(n){c.warn("PendingEvents / Unable to set localStorage key, error was: ",n),r.emitInternalError(n)}},n.getPendingEvents=function(){try{return a.parse(u.getItem(l))}catch(t){return null}},n.retryPendingEvents=function(t){i.forOwn(t,(function(t,n){s.retryableRequest(t.data,n,t.retryCount)})),i.isEmpty(t)||c.log("Retried pending events: ",t)}},121:function(t,n,e){var i=e(430),r=e(1664),o=e(4748),a=e(2821),u=e(1564),c=e(4407);n.registerApiModule=function(t,n){i.isArray(n)&&(n=o.evaluate(n)),c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.apiModules,name:t,plugin:n})},n.registerDependency=function(t,n){o.get(t)||o.register(t,n)},n.registerVisitorProfileProvider=function(t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.visitorProfileProviders,name:t.provides,plugin:t})},n.registerViewProvider=function(t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewProviders,name:t.provides,plugin:t})},n.registerAudienceMatcher=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.audienceMatchers,name:t,plugin:n})},n.registerViewMatcher=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewMatchers,name:t,plugin:n})},n.registerAnalyticsTracker=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.analyticsTrackers,name:t,plugin:n})},n.registerViewTagLocator=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTagLocators,name:t,plugin:n})},n.registerAudiencePlugin=function(t){t.dependencies&&i.each(t.dependencies,(function(t,e){n.registerDependency(e,t)}));var e,r,a="vendor."+t.vendor;e=i.isString(t.provider)?o.get(t.provider)(t.vendor):i.isFunction(t.provider)?t.provider(t.vendor):i.cloneDeep(t.provider),n.registerVisitorProfileProvider(i.extend(e,{provides:a})),r=i.isString(t.matcher)?o.get(t.matcher):t.matcher;var u={fieldsNeeded:[a],match:function(t,n){return r(t[a],n)}};n.registerAudienceMatcher(a,u)},n.registerWidget=function(t){return i.isArray(t)&&(t=o.evaluate(t)),{showToken:u.on({filter:{type:"showWidget",name:t.widgetId},handler:t.showFn}),hideToken:u.on({filter:{type:"hideWidget",name:t.widgetId},handler:t.hideFn})}},n.registerChangeApplier=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.changeAppliers,name:t,plugin:n})},n.registerDecider=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.deciders,name:t,plugin:n})},n.registerEventImplementation=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.eventImplementations,name:t,plugin:n})},n.registerViewTrigger=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTriggers,name:t,plugin:n})}},6393:function(t,n,e){var i=e(430),r=e(4748),o=":",a="holdback",u="treatment",c="",s=e(3457),f=e(5431);function l(t){return t.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}n.formatNamesAndIdsForAnalytics=function(t,n,e,o){var a={layer:t.name||c,experiment:n.name||c,variation:e.name||c};o&&(a=i.mapValues(a,l));var u,s=!t.integrationStringVersion||1===t.integrationStringVersion;if(a.experiment===c&&s)if(u=n.audienceIds,!i.isEmpty(u)&&i.includes(["and","or","not"],u[0]))a.experiment="Exp";else{var f=r.get("stores/audience_data");a.experiment=function(t,n){return i.isEmpty(n)?"everyone_else":i.reduce(n,(function(n,e){var i=t.get(e);return i?n+l(i.name?i.name:i.id)+",":n}),"").slice(0,-1)}(f,n.audienceIds)}return{names:a,idStrings:{layer:"("+l(t.id)+")",experiment:"("+l(n.id)+")",variation:"("+l(e.id)+")"}}},n.combineAndTruncateIdAndName=function(t,n,e){var i=e-n.length;if(i<0&&(s.warn("maxLength must be at least long enough to fit the entity ID, which is length"+n.length+". Defaulting to only use entity ID as name."),t=c),t===c)return n;if(t.length>i){var r=Math.min(t.length,i);return(t=t.substring(0,r))+n}return t+" "+n},n.generateAnalyticsString=function(t,e,r,c,s,l){return t.integrationStringVersion&&2===t.integrationStringVersion?function(t,e,r,u,c,s){if(f.isSingleExperimentPolicy(t.policy)&&u)return;var l=!f.isSingleExperimentPolicy(t.policy)&&u,d=n.formatNamesAndIdsForAnalytics(t,e,r,s),h=[d.names.experiment,d.names.variation],v=[d.idStrings.experiment,d.idStrings.variation];f.isSingleExperimentPolicy(t.policy)||(h.unshift(d.names.layer),v.unshift(d.idStrings.layer));var p=i.reduce(v,(function(t,n){return t+n.length}),0),g=h.length-1+(l?1:0),m=p+g*o.length;if(l&&(m+=a.length),m>c)throw new Error("The analytics string size is too low to send the entity IDs.");for(var _=c-m,w=h.length,y=[],b=h.length-1;b>=0;b--){var E=h[b],I=Math.min(E.length,Math.floor(_/w));_-=I,w--,y.unshift(E.substring(0,I))}var A=i.map(y,(function(t,n){return t+v[n]}));return l&&A.push(a),A.join(o)}(t,e,r,c,s,l):function(t,e,r,c,s,l){var d=c?a:u,h=3*o.length,v=n.formatNamesAndIdsForAnalytics(t,e,r,l),p=v.names,g=v.idStrings,m=i.reduce(g,(function(t,n){return t+n.length}),0);if(m+h+d.length>s)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var _=s-m-h-d.length,w={};w.variation=Math.min(p.variation.length,Math.floor(_/3)),_-=w.variation,w.experiment=Math.min(p.experiment.length,Math.floor(_/2)),_-=w.experiment,w.layer=_;var y={};i.each(p,(function(t,n){y[n]=t.substring(0,w[n])}));var b=[];return f.isSingleExperimentPolicy(t.policy)||b.push(y.layer+g.layer),(b=b.concat([y.experiment+g.experiment,y.variation+g.variation,d])).join(o)}(t,e,r,c,s,l)}},9842:function(t,n,e){var i=e(430);t.exports=function(t,n){t=function(t){var n=t.split("?");if(n[1]){var e=n[1].split("#"),r=e[0],a=e[1],u=r.split("&"),c=[];return i.each(u,(function(t){0!==t.indexOf(o)&&c.push(t)})),n[1]="",c.length>0&&(n[1]="?"+c.join("&")),a&&(n[1]+="#"+a),n.join("")}return t}(t);var e=n.value;switch(n.match){case"exact":return(t=c(t))===c(e);case"regex":try{return Boolean(t.match(e))}catch(r){}return!1;case"simple":return(t=u(t))===(e=u(e));case"substring":return t=c(t,!0),e=c(e,!0),-1!==t.indexOf(e);default:return!1}};var r=["www."],o="optimizely_",a=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"];function u(t){return c(function(t){var n=t.indexOf("?");return-1!==n&&(t=t.substring(0,n)),-1!==(n=t.indexOf("#"))&&(t=t.substring(0,n)),t}(t))}function c(t,n){t=(t=t.replace("/?","?")).toLowerCase().replace(/[/&?]+$/,"");var e=a.slice(0);n||(e=e.concat(r));for(var i=e.length,o=0;o<i;o++){var u=e[o],c=new RegExp("^"+u);t=t.replace(c,"")}return t}},1613:function(t,n,e){var i=e(430),r=e(6457).getFieldValue,o=e(95);t.exports=function(t,n){var e=r(t,n.name.split("."));return i.isArray(e)?i.some(e,i.partial(o.hasMatch,n.value,n.match)):o.hasMatch(n.value,n.match,e)}},7516:function(t,n,e){var i=e(1164),r=e(2538),o="cdn3";n.getIP=function(){return i.makeAsyncRequest(o,a).then((function(t){return t.ip}))},n.getIPDerivedGeolocation=function(){return i.makeAsyncRequest(o,a).then((function(t){return t.location}))};function a(){r.addScriptAsync("https://cdn-pci.optimizely.com/js/geo4.js")}},3732:function(t,n,e){var i=e(430),r=e(1664),o=e(22),a=e(3457);t.exports={initialize:function(){this.X={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.ht),this.on(r.ACTION_EXECUTED,this.vt),this.on(r.SET_CHANGE_APPLIER,this._t),this.on(r.REMOVE_ACTION_STATE,this.wt)},ht:function(t){var n=this;i.isEmpty(t.data.layers)||(i.each(t.data.layers,(function(t){var e;if(t.changes){var r="layerId:"+t.id;e={id:r,layerId:t.id,changeSet:t.changes,type:"layer"},o.deepFreeze(e),n.X.actions[r]=e}i.each(t.experiments,(function(r){if(r.changes){var a="experimentId:"+r.id;e={id:a,layerId:t.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},o.deepFreeze(e),n.X.actions[a]=e}i.each(r.variations,(function(a){i.each(a.actions,(function(i){var u=i.pageId||i.viewId,c=r.id+":"+a.id+":"+u;e={id:c,layerId:t.id,experimentId:r.id,variationId:a.id,pageId:u,changeSet:i.changes,type:"variation"},o.deepFreeze(e),n.X.actions[c]=e}))}))}))})),this.emitChange())},vt:function(t){var n=t.actionId;i.isUndefined(n)||this.X.actionState[n]||(this.X.actionState[n]={})},_t:function(t){var n=t.actionId,e=t.changeId;this.X.actionState[n]?this.X.actionState[n][e]=t.changeApplier:a.warn("Action Data / Attempted to set changeApplier for inactive action: ",n)},wt:function(t){delete this.X.actionState[t.actionId]},get:function(t){return o.safeReference(this.X.actions[t])},getActionState:function(t){return o.safeReference(this.X.actionState[t])},getByChangeId:function(t){return i.find(this.X.actions,{changeSet:[{id:t}]})},getAllActionIdsByPageId:function(t){return i.map(i.filter(this.X.actions,{pageId:t}),"id")},getChangeApplier:function(t,n){var e=this.X.actionState[n];if(e)return e[t]},getExperimentVariationActions:function(t,n){return o.safeReference(i.filter(this.X.actions,{experimentId:t,variationId:n}))},getLayerActions:function(t){return o.safeReference(i.filter(this.X.actions,{id:"layerId:"+t}))},getExperimentActions:function(t){return o.safeReference(i.filter(this.X.actions,{id:"experimentId:"+t}))},getAll:function(){return o.safeReference(i.values(this.X.actions))}}},784:function(t,n,e){var i=e(1664);t.exports={initialize:function(){this.X={},this.on(i.REGISTER_ASYNC_DEFERRED,this.yt),this.on(i.RESOLVE_DEFERRED,this.bt),this.on(i.REJECT_DEFERRED,this.Et)},getRequest:function(t){return this.X[t]},getPromise:function(t){var n=this.getRequest(t);if(n)return n.promise},yt:function(t){this.X[t.source]={promise:t.promise,resolver:t.resolver,rejecter:t.rejecter}},bt:function(t){var n=this.getRequest(t.source);if(!n)throw new Error("No request registered for source: "+t.source);n.resolver(t.resolveWith)},Et:function(t){var n=this.getRequest(t.source);if(!n)throw new Error("No request registered for source: "+t.source);if(!n.rejecter)throw new Error("No rejecter registered for source: "+t.source);n.rejecter(t.rejectWith)}}},1912:function(t,n,e){var i=e(430),r=e(1664),o=e(22);function a(t,n){return n||(n={}),t?(i.each(t,(function(t){if(!i.isString(t)){if(i.isObject(t)){var e=t.type,r=t.name||"_";n[e]||(n[e]={}),n[e][r]=!0}i.isArray(t)&&a(t,n)}})),n):n}t.exports={initialize:function(){this.X={audiences:{},featuresNeeded:{}},this.on(r.DATA_LOADED,this.ht)},ht:function(t){i.isEmpty(t.data.audiences)||(i.each(t.data.audiences,i.bind((function(t){o.deepFreeze(t),i.merge(this.X.featuresNeeded,a(t.conditions)),this.X.audiences[t.id]=t}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.X.audiences))},getFeaturesNeeded:function(t){return o.safeReference(this.X.featuresNeeded[t]||{})},getAudiencesMap:function(){return o.safeReference(this.X.audiences)},get:function(t){return o.safeReference(this.X.audiences[t])},getById:function(t){return o.safeReference(this.X.audiences[t])},getAudienceName:function(t){return i.find(i.values(this.X.audiences),{id:t}).name||"Aud "+t}}},1711:function(t,n,e){var i=e(430),r=e(1664),o=e(22);t.exports={initialize:function(){this.X={},this.on(r.ADD_CHANGE,this.It),this.on(r.DATA_LOADED,this.ht)},getChange:function(t){return this.X[t]},ht:function(t){i.isEmpty(t.data.changes)||i.each(t.data.changes,i.bind(this.It,this))},It:function(t){o.deepFreeze(t),this.X[t.id]=t,this.emitChange()}}},3013:function(t,n,e){var i=e(430),r=e(1664),o=e(2821);t.exports={initialize:function(){this.X={},i.each(o.Lifecycle,i.bind((function(t){this.X[t]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.At),this.on(r.CLEAR_CLEANUP_FN,this.Tt)},getCleanupFns:function(t){return i.cloneDeep(this.X[t])},At:function(t){this.X[t.lifecycle].push(t.cleanupFn),this.emitChange()},Tt:function(t){var n=this.X[t.lifecycle];if(t.cleanupFn){var e=n.indexOf(t.cleanupFn);e>-1&&(n.splice(e,1),this.emitChange())}else this.X[t.lifecycle]=[],this.emitChange()}}},2334:function(t,n,e){var i=e(1664),r=e(5257);t.exports={initialize:function(){this.X={name:r.NAME,version:r.VERSION},this.on(i.SET_CLIENT_NAME,this.St),this.on(i.SET_CLIENT_VERSION,this.kt)},getClientName:function(){return this.X.name},getClientVersion:function(){return this.X.version},St:function(t){t&&(this.X.name=t),this.emitChange()},kt:function(t){t&&(this.X.version=t),this.emitChange()}}},5406:function(t,n,e){var i=e(1664);t.exports={initialize:function(){this.X={currentDomain:null,defaultAgeSeconds:15552e3,autoRefresh:true},this.on(i.SET_COOKIE_DOMAIN,this.Rt),this.on(i.SET_COOKIE_AGE,this.Nt),this.on(i.SET_COOKIE_AUTO_REFRESH,this.Dt)},getCurrentDomain:function(){return this.X.currentDomain},getDefaultAgeInSeconds:function(){return this.X.defaultAgeSeconds},getAutoRefresh:function(){return this.X.autoRefresh},Rt:function(t){this.X.currentDomain=t,this.emitChange()},Nt:function(t){this.X.defaultAgeSeconds=t,this.emitChange()},Dt:function(t){this.X.autoRefresh=t,this.emitChange()}}},2835:function(t,n,e){var i=e(430),r=e(1664),o=e(22);t.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.ht)},ht:function(t){i.isEmpty(t.data.dimensions)||(i.each(t.data.dimensions,i.bind((function(t){o.deepFreeze(t),this.X[t.id]=t}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.X))},getById:function(t){return o.safeReference(this.X[t])},getByApiName:function(t){return o.safeReference(i.find(i.values(this.X),{apiName:t}))}}},2972:function(t,n,e){var i=e(430),r=e(1664);t.exports={initialize:function(){this.X={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.Ct)},getAll:function(){return i.cloneDeep(this.X)},conflictInObservingChanges:function(){return!this.X.mutationObserverAPISupported},isDisabled:function(){return this.X.disabled},isEditor:function(){return this.X.isEditor},clientHasAlreadyInitialized:function(){return this.X.alreadyInitialized},getForceAudienceIds:function(){return this.X.forceAudienceIds},getForceVariationIds:function(){return this.X.forceVariationIds},getPreviewLayerIds:function(){return this.X.previewLayerIds},getProjectToken:function(){return this.X.projectToken},getForceTracking:function(){return this.X.forceTracking},shouldActivate:function(){return!this.X.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.X.isPreview},shouldBootstrapDataForEditor:function(){return this.X.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.X.isPreview||this.X.isLegacyPreview||!this.getProjectToken()||this.X.isEditor)},shouldBailForDesktopApp:function(){return!this.X.isEditor&&this.X.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.X.isSlave&&!this.X.isEditor&&this.X.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return this.X.mutationObserverAPISupported},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.X.shouldOptOut},shouldSendTrackingData:function(){return!this.X.trackingDisabled&&(!!this.X.forceTracking||!this.X.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.X.isSlave},isRunningInDesktopApp:function(){return this.X.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.X.isRunningInV2Editor},Ct:function(t){i.extend(this.X,t),this.emitChange()}}},6546:function(t,n,e){var i=e(430),r=e(1664),o=e(22);t.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.ht)},getAll:function(){return o.safeReference(i.values(this.X))},getEventsMap:function(){return o.safeReference(this.X)},get:function(t){return o.safeReference(this.X[t])},getByApiName:function(t){return o.safeReference(i.find(i.values(this.X),{apiName:t}))},getByPageId:function(t){return o.safeReference(i.filter(this.X,{pageId:t}))},ht:function(t){i.isEmpty(t.data.events)||(i.each(t.data.events,i.bind((function(t){t.pageId||(t.pageId=t.viewId),o.deepFreeze(t),this.X[t.id]=t}),this)),this.emitChange())}}},7513:function(t,n,e){var i=e(430),r=e(1664);function o(t){var n=[];return t&&i.isObject(t)?(t.type&&n.push(t.type),n.push("|"),t.type&&t.name&&n.push(t.name),n.join("")):"|"}t.exports={initialize:function(){this.X={handlers:{}},this.on(r.ADD_EMITTER_HANDLER,this.Ot),this.on(r.REMOVE_EMITTER_HANDLER,this.xt)},getHandlers:function(t,n){var e=[null,{type:t.type},{type:t.type,name:t.name}],r=[];return i.each(e,i.bind((function(t){var n=o(t),e=this.X.handlers[n];e&&(r=r.concat(e))}),this)),n&&(r=i.filter(r,(function(t){return!t.publicOnly}))),r},Ot:function(t){var n=o(t.filter);this.X.handlers[n]||(this.X.handlers[n]=[]),this.X.handlers[n].push({handler:t.handler,token:t.token,publicOnly:!!t.publicOnly,emitErrors:!!t.emitErrors}),this.emitChange()},xt:function(t){var n=!1,e=t.token;i.forOwn(this.X.handlers,i.bind((function(t,r){var o=i.filter(t,(function(t){return t.token!==e}));o.length!==t.length&&(n=!0,this.X.handlers[r]=o)}),this)),n&&this.emitChange()}}},7740:function(t,n,e){var i=e(430),r=e(1664),o=e(22);t.exports={initialize:function(){this.X={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{},ga4UserId:null},this.on(r.DATA_LOADED,this.Pt),this.on(r.ACTIVATE,this.Mt),this.on(r.RECORD_GLOBAL_DECISION,this.Lt),this.on(r.SET_DOMCONTENTLOADED,this.Ut),this.on(r.SET_GA4_USER_ID,this.Vt)},getRevision:function(){return this.X.revision},getGlobalHoldbackThreshold:function(){return this.X.holdback},getProjectId:function(){return this.X.projectId},getSnippetId:function(){return this.X.snippetId},getAccountId:function(){return this.X.accountId},getNamespace:function(){return this.X.namespace},getActivationId:function(){return this.X.activationId},getActivationTimestamp:function(){return this.X.activationTimestamp},getAnonymizeIP:function(){return this.X.anonymizeIP},isGlobalHoldback:function(){return!!this.X.isGlobalHoldback},getListTargetingKeys:function(){return this.X.listTargetingKeys.slice()},getDCPServiceId:function(){return this.X.dcpServiceId},getDCPKeyfieldLocators:function(){return this.X.dcpKeyfieldLocators},getRecommenderServices:function(){return this.X.recommenderServices},getProjectJS:function(){return this.X.projectJS},getPlugins:function(){return this.X.plugins},getExperimental:function(){return o.safeReference(this.X.experimental)},getGA4UserId:function(){return this.X.ga4UserId},domContentLoadedHasFired:function(){return this.X.domContentLoaded},Mt:function(t){this.X.activationId=t.activationId,this.X.activationTimestamp=t.activationTimestamp,this.X.isGlobalHoldback=null},Lt:function(t){var n=t.isGlobalHoldback;if(null!==this.X.isGlobalHoldback&&this.X.isGlobalHoldback!==n)throw new Error("Attempted to change already set global holdback!");this.X.isGlobalHoldback=n,this.emitChange()},Vt:function(t){var n=t.ga4UserId;if(!n)throw new Error('Argument "payload.ga4UserId" is missing');this.X.ga4UserId=n,this.emitChange()},Pt:function(t){var n=i.pick(t.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental","ga4UserId"]);if(0!==i.keys(n).length){i.extend(this.X,{listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]},n),this.emitChange()}},Ut:function(){this.X.domContentLoaded=!0,this.emitChange()}}},55:function(t,n,e){var i=e(430),r=e(1664),o=e(22);t.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.ht)},ht:function(t){i.isEmpty(t.data.groups)||(i.each(t.data.groups,i.bind((function(t){o.deepFreeze(t),this.X[t.id]=t}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.X))},getGroupsMap:function(){return o.safeReference(this.X)},get:function(t){return o.safeReference(this.X[t])}}},7584:function(t,n,e){var i=e(430),r=e(1664),o=e(3473);t.exports={initialize:function(){this.X={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.Ft),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.zt)},getOriginalPushState:function(){return this.X.originalPushState},getOriginalReplaceState:function(){return this.X.originalReplaceState},Ft:function(){this.X.originalPushState||(this.X.originalPushState=i.bind(o.getGlobal("history").pushState,o.getGlobal("history")))},zt:function(){this.X.originalReplaceState||(this.X.originalReplaceState=i.bind(o.getGlobal("history").replaceState,o.getGlobal("history")))}}},9193:function(t,n,e){var i=e(430),r=e(1664);t.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.ht),this.on(r.SET_INTEGRATION_SETTINGS,this.jt)},ht:function(t){i.isEmpty(t.data.integrationSettings)||(i.each(t.data.integrationSettings,i.bind((function(t){this.X[t.id]=t}),this)),this.emitChange())},jt:function(t){var n=this.X[t.id];n?i.extend(n,t):this.X[t.id]=t},getAll:function(){return i.cloneDeep(i.values(this.X))},get:function(t){return i.cloneDeep(this.X[t])},getReference:function(t){return this.X[t]}}},6066:function(t,n,e){var i=e(430),r=e(1664),o=e(3457),a="*";t.exports={initialize:function(){this.X={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.Gt),this.on(r.RECORD_LAYER_DECISION,this.qt),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.Bt)},getLayerState:function(t,n){if(this.X[t]){var e=this.X[t];if(i.keys(e).length>1&&!n)throw new Error("View Id must be specified when more than one layerState for layer.");return n?i.cloneDeep(i.find(e,{pageId:n})):i.cloneDeep(e["*"])}},getLayerStates:function(t){var n=[];for(var e in this.X)i.forEach(this.X[e],(function(e){(i.isUndefined(t)||e.namespace===t)&&n.push(i.cloneDeep(e))}));return n},getLayerStatesForAnalytics:function(){var t=[];for(var n in this.X)i.forEach(this.X[n],(function(n){t.push(i.pick(n,["layerId","decision","decisionEventId"]))}));return t},Gt:function(t){t.merge||(this.X={}),i.each(t.layerStates,i.bind((function(t){var n=t.layerId;t.pageId||(t.pageId=t.viewId);var e=t.pageId||a,r=this.X[n];if(i.isUndefined(r))this.X[n]={},this.X[n][e]=t;else{var o=r[e];(!o||t.decisionTimestamp>(o.decisionTimestamp||0))&&(this.X[n][e]=t)}}),this)),this.emitChange()},qt:function(t){var n={layerId:t.layerId,revision:t.revision,namespace:t.namespace,pageId:t.pageId,decisionTicket:t.decisionTicket,decision:t.decision,decisionActivationId:t.activationId,decisionTimestamp:t.timestamp,decisionEventId:null},e=this.X[t.layerId]||{};t.pageId?(delete e["*"],e[t.pageId]=n):(e={})["*"]=n,this.X[t.layerId]=e,this.emitChange()},Bt:function(t){var n=t.layerId,e=t.pageId||a;this.X[n]?this.X[n][e]?(this.X[n][e].decisionEventId=t.decisionId,this.emitChange()):o.warn("Not recording decision event: Layer state not found for view",e):o.warn("Not recording decision event: Campaign not registered",n)}}},7681:function(t,n,e){var i=e(430),r=e(1664),o=e(22),a=e(5431);t.exports={initialize:function(){this.X={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.ht)},ht:function(t){if(!i.isEmpty(t.data.layers)){var n=this;i.each(t.data.layers,(function(t){i.each(t.experiments,(function(e){t.pageIds||(t.pageIds=t.viewIds),e.campaignName||a.isSingleExperimentPolicy(t.policy)?a.isSingleExperimentPolicy(t.policy)&&t.groupId&&(e.groupId=t.groupId):e.campaignName=t.name,i.each(e.variations,(function(t){i.each(t.actions,(function(t){t.pageId||(t.pageId=t.viewId)})),n.X.variations[t.id]=t})),n.X.experiments[e.id]=e})),o.deepFreeze(t),n.X.layers[t.id]=t})),this.emitChange()}},getAll:function(){return o.safeReference(i.values(this.X.layers))},getCampaignsMap:function(){return o.safeReference(this.X.layers)},getExperimentsMap:function(){return o.safeReference(this.X.experiments)},getVariationsMap:function(){return o.safeReference(this.X.variations)},getCount:function(){return i.keys(this.X.layers).length},getAllByPageIds:function(t){return o.safeReference(i.filter(this.X.layers,(function(n){return i.some(t,i.partial(i.includes,n.pageIds))})))},get:function(t){return o.safeReference(this.X.layers[t])},getLayerByExperimentId:function(t){var n=i.find(this.X.layers,(function(n){return i.find(n.experiments,{id:t})}));return o.safeReference(n)},getExperimentByVariationId:function(t){var n;return i.some(this.X.layers,(function(e){return i.some(e.experiments,(function(e){return i.find(e.variations,{id:t})&&(n=e),n})),n})),o.safeReference(n)}}},235:function(t,n,e){var i=e(1664);t.exports={initialize:function(){this.X={logs:[]},this.on(i.LOG,this.Ht)},getLogs:function(){return this.X.logs},Ht:function(t){this.X.logs.push(t),this.emitChange()},Z:function(){return this.X.logs.slice()}}},9901:function(t,n,e){var i=e(1664),r=e(22);t.exports={initialize:function(){this.X={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.Yt),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.Kt)},get:function(){return r.safeReference(this.X.data)},hasTracked:function(){return this.X.hasTracked},Yt:function(t){r.deepFreeze(t),this.X.data=t,this.X.hasTracked=!1,this.emitChange()},Kt:function(){this.X.hasTracked=!0}}},46:function(t,n,e){var i=e(430),r=e(1664),o=e(716);t.exports={initialize:function(){this.X={},this.on(r.SET_PENDING_EVENT,this.$t),this.on(r.REMOVE_PENDING_EVENT,this.Wt),this.on(r.LOAD_PENDING_EVENTS,this.Xt)},getEvents:function(){return this.X},getEventsString:function(){return o.stringify(this.X)},$t:function(t){i.keys(this.X).length>=1e3&&this.Jt();var n=t.id,e=t.retryCount;this.X[n]&&this.X[n].retryCount===e||(this.X[n]={id:n,timeStamp:t.timeStamp,data:t.data,retryCount:e},this.emitChange())},Wt:function(t){delete this.X[t.id],this.emitChange()},Xt:function(t){this.X=t.events,this.Jt(),this.emitChange()},Jt:function(){for(var t=i.sortBy(this.X,"timeStamp"),n=0;n<=t.length-1e3;n++)delete this.X[t[n].id];this.emitChange()}}},2381:function(t,n,e){var i=e(430),r=e(1664);t.exports={initialize:function(){this.X={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.Yt)},isExpectingRedirect:function(){return i.isString(this.X.layerId)},getLayerId:function(){return this.X.layerId},Yt:function(t){this.isExpectingRedirect()||(this.X.layerId=t.layerId,this.emitChange())}}},2608:function(t,n,e){var i=e(430),r=e(1664),o=e(2821);t.exports={initialize:function(){this.X={},this.X[o.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Qt)},Qt:function(t){i.isUndefined(this.X[o.PerformanceData.performance_marks][t.name])&&(this.X[o.PerformanceData.performance_marks][t.name]=[]),this.X[o.PerformanceData.performance_marks][t.name].push(t.data),this.emitChange()},getMarks:function(){return i.mapValues(this.X[o.PerformanceData.performance_marks],(function(t){return i.map(t,(function(t){return[t.startTime,t.duration]}))}))},getDurationsFor:function(t){return i.reduce(t,i.bind((function(t,n){var e=this.X[o.PerformanceData.performance_marks][n];return e&&(t[n]=Math.round(i.reduce(e,(function(t,n){return t+n.duration}),0))),t}),this),{})}}},4885:function(t,n,e){var i=e(430),r=e(1664),o=e(2821),a=e(3457);t.exports={initialize:function(){this.X=i.mapValues(o.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Zt)},Zt:function(t){var n=t.type,e=t.name,i=t.plugin;if(!n||!e)throw new Error("Missing information needed to register plugins: "+n+":"+e);if(!this.X[n])throw new Error("Invalid plugin type specified: "+n);this.X[n][e]=i,a.debug("Plugin Store: Registering Plugin :",t)},getAllPlugins:function(t){if(!t)return this.X;if(this.X[t])return this.X[t];throw new Error("Invalid plugin type: "+t)},getPlugin:function(t,n){if(!n||!t)throw new Error("Missing plugin parameters");return this.getAllPlugins(t)[n]||null}}},6922:function(t,n,e){var i=e(430),r=e(1664),o=e(6457);t.exports={initialize:function(){this.X={},this.on(r.SET_VISITOR_ATTRIBUTE_PENDING,this.tn)},getPendingAttributeValue:function(t){return t=i.isArray(t)?t.concat("pending"):[t,"pending"],o.getFieldValue(this.X,t)},tn:function(t){o.setFieldValue(this.X,t.key,{pending:t.pending}),this.emitChange()}}},6764:function(t,n,e){var i=e(430),r=e(1664);t.exports={initialize:function(){this.X={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(r.SET_RUM_DATA,this.nn),this.on(r.RECORD_API_USAGE,this.en),this.on(r.INITIALIZE_CHANGE_METRICS,this.rn),this.on(r.RECORD_ACTIVATION_TYPE_USAGE,this.an),this.on(r.RECORD_AUDIENCE_USAGE,this.un),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.cn),this.on(r.RECORD_CHANGE_OVERHEATED,this.sn),this.on(r.RECORD_CHANGE_TYPE_USAGE,this.fn),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.ln),this.on(r.RECORD_INTEGRATION_USAGE,this.dn),this.on(r.RECORD_LAYER_FEATURE_USAGE,this.hn),this.on(r.RECORD_LAYER_POLICY_USAGE,this.vn),this.on(r.RECORD_VIEW_FEATURE_USAGE,this.pn),this.on(r.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,this.gn),this.on(r.RECORD_VISITOR_ID_LOCATOR_USAGE,this.mn),this.on(r.RECORD_VISITOR_ID_ERROR,this._n),this.on(r.RECORD_STICKY_BUCKETING_FEATURE,this.wn)},nn:function(t){i.merge(this.X,t),this.emitChange()},en:function(t){this.X.apis[t.methodName]||(this.X.apis[t.methodName]=0),this.X.apis[t.methodName]++,this.emitChange()},rn:function(){i.isUndefined(this.X.data.extras.changeMacrotaskRate)&&(this.X.data.extras.changeMacrotaskRate=0),i.isUndefined(this.X.data.extras.numOverheatedChanges)&&(this.X.data.extras.numOverheatedChanges=0)},cn:function(t){i.isUndefined(this.X.data.extras.changeMacrotaskRate)&&(this.X.data.extras.changeMacrotaskRate=0),t.changeMacrotaskRate>this.X.data.extras.changeMacrotaskRate&&(this.X.data.extras.changeMacrotaskRate=t.changeMacrotaskRate),this.emitChange()},sn:function(){i.isUndefined(this.X.data.extras.numOverheatedChanges)&&(this.X.data.extras.numOverheatedChanges=0),this.X.data.extras.numOverheatedChanges++,this.emitChange()},ln:function(t){this.X.DOMObservation[t.counterName]||(this.X.DOMObservation[t.counterName]=0),this.X.DOMObservation[t.counterName]++,this.emitChange()},yn:function(t,n,e){i.isUndefined(this.X.featuresNeeded[t])&&(this.X.featuresNeeded[t]={});var r=this.X.featuresNeeded[t];i.each(n,(function(t){r[t]||(r[t]={}),r[t][e]||(r[t][e]=!0)}))},dn:function(t){this.yn("integrations",t.integrations,t.layerId)},fn:function(t){this.yn("changeTypes",t.changeTypes,t.layerId)},an:function(t){this.yn("activationTypes",[t.activationType],t.entityId),this.emitChange()},pn:function(t){this.yn("viewFeatures",t.featuresUsed,t.entityId),this.emitChange()},hn:function(t){this.yn("layerFeatures",[t.feature],t.entityId),this.emitChange()},vn:function(t){this.yn("policy",[t.policy],t.layerId),this.emitChange()},un:function(t){this.yn("audiences",t.audienceTypes,t.layerId),this.emitChange()},gn:function(t){this.X.data.extras.viewsInitiallyActivatedCount=t.viewsInitiallyActivatedCount,this.emitChange()},mn:function(t){this.yn("visitorIdLocatorType",[t.visitorIdLocatorType],t.entityId),this.emitChange()},_n:function(t){this.X.data.extras.errorCustomVisitorId=t.isError,this.emitChange()},wn:function(t){this.yn("stickyBucketing",[t.feature],t.id)},getSampleRum:function(){return this.X.inRumSample},getRumId:function(){return this.X.id},getRumHost:function(){return this.X.RumHost},getApiData:function(){return this.X.apis},getDOMObservationData:function(){return this.X.DOMObservation},getRumData:function(){return i.cloneDeep(this.X.data)},getScriptSrc:function(){return this.X.src},getFeaturesNeededData:function(){var t=this.X.featuresNeeded,n={};return i.forOwn(t,(function(t,e){var r=i.keys(t);i.isEmpty(r)||(n[e]={}),i.forEach(r,(function(r){n[e][r]=i.keys(t[r]).length}))})),n}}},1875:function(t,n,e){var i=e(1664);t.exports={initialize:function(){this.X={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.bn)},bn:function(t){if(!t.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.X.natives=t.sandboxedFunctions,this.X.initialized=!0,this.emitChange()},getAll:function(){return this.X.natives},get:function(t){if(!t)throw new Error("Missing name parameter");return this.X.natives[t]||null},isInitialized:function(){return this.X.initialized}}},3740:function(t,n,e){var i=e(430),r=e(1664),o=e(2146),a=e(2894);t.exports={initialize:function(){this.X={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.En),this.on(r.LOAD_SESSION_STATE,this.In)},getState:function(){return i.cloneDeep(this.X)},getSessionId:function(){return this.X.sessionId},In:function(t){this.X.sessionId=t.sessionId,this.X.lastSessionTimestamp=t.lastSessionTimestamp,this.emitChange()},En:function(){var t=o.now(),n=this.X.lastSessionTimestamp;(!this.X.sessionId||t-n>18e5)&&(this.X.sessionId=a.generate()),this.X.lastSessionTimestamp=t,this.emitChange()}}},6334:function(t,n,e){var i=e(430),r=e(1664);t.exports={initialize:function(){this.An(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.Tn),this.on(r.REGISTER_PREVIOUS_BATCH,this.Sn),this.on(r.REGISTER_TRACKER_VISITOR,this.kn),this.on(r.REGISTER_TRACKER_EVENT,this.Rn),this.on(r.REGISTER_TRACKER_DECISION,this.Nn),this.on(r.RESET_TRACKER_EVENTS,this.Dn),this.on(r.RESET_TRACKER_STORE,this.An),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.Cn),this.on(r.SET_TRACKER_POLLING,this.On),this.on(r.SET_TRACKER_BATCHING,this.xn),this.on(r.SET_TRACKER_SEND_EVENTS,this.Pn),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.Mn),this.on(r.SET_TRACKER_DIRTY,this.Ln),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.Un)},getPersistableState:function(){return this.X.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.X.data,decisions:this.X.decisions,decisionEvents:this.X.decisionEvents,previousBatches:this.X.previousBatches}:{}:null},Mn:function(t){i.isEmpty(this.X.data)||i.isEmpty(t.data)||(this.Tn(),this.X.previousBatches.push(this.getEventBatch())),this.X.data=t.data||{},this.X.decisions=t.decisions||[],this.X.decisionEvents=t.decisionEvents||[],i.isEmpty(this.X.previousBatches)||i.isEmpty(t.previousBatches)?this.X.previousBatches=t.previousBatches||[]:this.X.previousBatches=this.X.previousBatches.concat(t.previousBatches),this.emitChange()},Ln:function(t){this.X.isDirty=t,this.emitChange()},Rn:function(t){var n=this.Vn();(i.isEmpty(n.snapshots)||!i.isEmpty(this.X.decisionEvents))&&this.Fn(),this.zn().events.push(t.event),this.X.decisions=t.decisions,this.Ln(!0)},Nn:function(t){this.X.decisionEvents.push(t.decisionEvent),this.X.decisions=t.decisions,this.Ln(!0)},kn:function(t){i.isEmpty(this.X.data)?this.X.data=t.data:this.Tn(),this.X.data.visitors.push(t.visitor),this.X.decisions=t.decisions,this.X.decisionEvents=[],this.Ln(!0)},Sn:function(t){this.X.previousBatches.push(t),this.Ln(!0)},An:function(){this.X={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Dn:function(){var t=this.Vn();this.X.data.visitors=[t],t.snapshots=[],this.Ln(!0)},Cn:function(){this.X.previousBatches=[],this.Ln(!0)},On:function(t){this.X.polling=t,this.emitChange()},xn:function(t){this.X.shouldBatch=t,this.emitChange()},Pn:function(t){this.X.canSend=t,this.emitChange()},getEventBatch:function(){return i.cloneDeep(this.X.data)},getPreviousBatches:function(){return i.cloneDeep(this.X.previousBatches)},jn:function(){return this.X.decisionEvents.slice()},Gn:function(){this.X.decisionEvents=[]},qn:function(){return this.X.decisions.slice()},isPolling:function(){return this.X.polling},shouldBatch:function(){return this.X.shouldBatch},zn:function(){return i.last(this.Vn().snapshots)},Vn:function(){return i.last(this.X.data.visitors)},Fn:function(){var t=this.jn();this.Vn().snapshots.push({decisions:this.qn(),events:t}),this.Gn(),this.Ln(!0)},Tn:function(){this.X.decisionEvents.length>0&&this.Fn()},hasEventsToSend:function(){if(!i.isEmpty(this.X.decisionEvents))return!0;if(!i.isEmpty(this.X.data)&&i.some(this.X.data.visitors||[],(function(t){return t.snapshots.length>0})))return!0;return!1},hasPreviousBatchesToSend:function(){return!i.isEmpty(this.X.previousBatches)},canSend:function(){return this.X.canSend},Un:function(t){var n=this.Vn();n&&(n.attributes=t.attributes)}}},8991:function(t,n,e){var i=e(430),r=e(1664);t.exports={initialize:function(){this.X={},this.on(r.SET_UA_DATA,this.ht)},ht:function(t){i.isEmpty(this.X)&&(this.X=t.data)},get:function(){return i.cloneDeep(this.X)}}},746:function(t,n,e){var i=e(430),r=e(1664),o=e(3457),a={globalTags:{},viewStates:{},shouldBatch:!1};t.exports={initialize:function(){this.X=i.cloneDeep(a),this.on(r.REGISTER_VIEWS,this.Bn),this.on(r.SET_VIEW_ACTIVE_STATE,this.Hn),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.Yn),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.Kn),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.$n),this.on(r.SET_GLOBAL_TAGS,this.Wn),this.on(r.RESET_VIEW_STATES,this.Xn),this.on(r.SET_VIEW_BATCHING,this.xn)},getAll:function(){var t={};for(var n in this.X.viewStates)t[n]=this.getViewState(n);return t},getActiveViewIds:function(){return i.reduce(this.X.viewStates,i.bind((function(t,n,e){return this.isViewActive(e)&&t.push(e),t}),this),[])},shouldBatch:function(){return this.X.shouldBatch},getViewState:function(t){var n=i.cloneDeep(this.X.viewStates[t]),e=this.X.globalTags;return n.metadata=i.extend({},n.parsedMetadata,e,n.userSuppliedMetadata),n},getActiveViewTags:function(){var t=this.getActiveViewStates(),n=i.map(t,(function(t){return t.metadata})),e=[{}].concat(n);return i.extend.apply(i,e)},getActivationEventId:function(t){return this.X.viewStates[t]?this.X.viewStates[t].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.X.viewStates,i.bind((function(t,n,e){return this.isViewActive(e)&&t.push(this.getViewState(e)),t}),this),[])},isViewActive:function(t){var n=this.X.viewStates[t];return n||o.warn("No Page registered with id",t),!!n.isActive},getPageIdsOfActiveViews:function(){return i.map(this.getActiveViewStates(),(function(t){return t.id}))},getGlobalTags:function(){return i.cloneDeep(this.X.globalTags)},Xn:function(){this.X.viewStates={},this.emitChange()},Bn:function(t){i.each(t.views,i.bind((function(t){var n=t.id;this.X.viewStates[n]={id:n,isActive:i.isBoolean(t.isActive)?t.isActive:null,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}}),this)),this.emitChange()},Hn:function(t){var n=t.view.id;if(!this.X.viewStates[n])throw new Error("No view exists with id "+n);this.X.viewStates[n].isActive=t.isActive,t.isActive?this.X.viewStates[n].activatedTimestamp=t.timestamp:(this.X.viewStates[n].parsedMetadata={},this.X.viewStates[n].userSuppliedMetadata={}),this.emitChange()},Yn:function(t){var n=t.pageId;if(!this.X.viewStates[n])throw new Error("No view exists with id "+n);i.assign(this.X.viewStates[n].parsedMetadata,t.metadata),this.emitChange()},Kn:function(t){var n=t.pageId;if(!this.X.viewStates[n])throw new Error("No view exists with id "+n);i.assign(this.X.viewStates[n].userSuppliedMetadata,t.metadata),this.emitChange()},$n:function(t){var n=t.pageId;this.X.viewStates[n]&&(this.X.viewStates[n].activationEventId=t.eventData.eventId,this.emitChange())},Wn:function(t){i.extend(this.X.globalTags,t),this.emitChange()},xn:function(t){this.X.shouldBatch=t,this.emitChange()}}},4898:function(t,n,e){var i=e(430),r=e(1664),o=e(22);t.exports={initialize:function(){this.X={views:{},apiNamesToViews:{}},this.on(r.DATA_LOADED,this.ht)},getAll:function(){return o.safeReference(i.values(this.X.views))},getPagesMap:function(){return o.safeReference(this.X.views)},get:function(t){return o.safeReference(this.X.views[t])},getByApiName:function(t){return o.safeReference(this.X.apiNamesToViews[t])},apiNameToId:function(t){var n=this.X.apiNamesToViews[t];if(n)return n.id},idToApiName:function(t){var n=this.X.views[t];if(n)return n.apiName},getNumberOfPages:function(){return i.keys(this.X.views).length},getAllViewsForActivationType:function(t){return i.filter(this.X.views,{activationType:t})},ht:function(t){i.isEmpty(t.data.views)||(i.each(t.data.views,i.bind((function(t){o.deepFreeze(t),this.X.views[t.id]=t,this.X.apiNamesToViews[t.apiName]=t}),this)),this.emitChange())}}},4441:function(t,n,e){var i=e(430),r=e(1664),o=e(6457);t.exports={initialize:function(){this.X={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.Jn),this.on(r.SET_VISITOR_ATTRIBUTES,this.Qn),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.Zn)},getVisitorProfile:function(){return this.X.profile},getVisitorProfileMetadata:function(){return this.X.metadata},getAttribute:function(t){var n=this.X.profile;return i.cloneDeep(o.getFieldValue(n,t))},getAttributeMetadata:function(t){return i.cloneDeep(this.X.metadata[t])},getVisitorIdFromAPI:function(){return this.X.visitorId},Zn:function(t){this.X.profile=t.profile,this.X.metadata=t.metadata,this.emitChange()},Qn:function(t){i.each(t.attributes,i.bind((function(t){var n=t.key;o.setFieldValue(this.X.profile,n,t.value),t.metadata&&i.forOwn(t.metadata,i.bind((function(t,e){o.setFieldValue(this.X.metadata,n.concat(e),t)}),this))}),this)),this.emitChange()},Jn:function(t){this.X.visitorId=t,this.emitChange()}}},9335:function(t,n,e){var i=e(430),r=e(1664);t.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.te)},getCustomBehavioralAttributes:function(){return i.filter(this.X,(function(t){return!!t.rule_json}))},getVisitorAttribute:function(t){var n=i.values(this.X);if(t.datasourceId&&(n=i.filter(n,{dcp_datasource_id:String(t.datasourceId)})),t.attributeName&&t.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(t.attributeId){var e=this.X[t.attributeId];if(!e)throw new Error("Unrecognized attribute ID: "+t.attributeId);return e}if(t.attributeName){var r=i.filter(n,{name:t.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+t.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+t.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},te:function(t){i.isEmpty(t.data.visitorAttributes)||(i.each(t.data.visitorAttributes,i.bind((function(t){this.X[t.id]=t}),this)),this.emitChange())}}},9307:function(t,n,e){var i=e(430),r=e(1664),o=e(716);t.exports={initialize:function(){this.X={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.ne),this.on(r.MERGE_VARIATION_ID_MAP,this.ee),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.re),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.oe)},getVariationIdMap:function(){return i.cloneDeep(this.X.variationIdMap)},getVariationIdMapString:function(){return o.stringify(this.X.variationIdMap)},ne:function(t){var n=this.X.variationIdMap[t.layerId]||{};n[t.experimentId]!==t.variationId&&(n[t.experimentId]=t.variationId,this.X.variationIdMap[t.layerId]=n,this.emitChange())},ee:function(t){var n=this.getVariationIdMap(),e=t.variationIdMap;i.each(n||{},(function(t,n){e[n]?i.assign(e[n],t):e[n]=t})),this.X.variationIdMap=e,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.X.preferredLayerMap)},getPreferredLayerMapString:function(){return o.stringify(this.X.preferredLayerMap)},getPreferredLayerId:function(t){return this.X.preferredLayerMap[t]},re:function(t){this.X.preferredLayerMap[t.groupId]!==t.layerId&&(this.X.preferredLayerMap[t.groupId]=t.layerId,this.emitChange())},oe:function(t){var n=this.getPreferredLayerMap(),e=t.preferredLayerMap;i.assign(e,n),this.X.preferredLayerMap=e,this.emitChange()}}},3617:function(t,n,e){e(430);var i=e(1664);e(1836).j;t.exports={initialize:function(){this.X={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.ht),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.ae),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.ue)},getEvents:function(){return this.X.events},getForeignEvents:function(){return this.X.foreignEvents},getForeignEventQueues:function(){return this.X.foreignEventQueues},ht:function(t){this.X.events=t,this.emitChange()},ae:function(t){this.X.foreignEvents[t.key]=t.value},ue:function(t){this.X.foreignEventQueues[t.key]=t.value}}},9992:function(t,n,e){var i=e(1664);t.exports={initialize:function(){this.X={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.ce)},getBaseMap:function(){return this.X.baseMap},getEventQueue:function(){return this.X.eventQueue},getLastEvent:function(){return this.X.lastEvent},getCleared:function(){return this.X.cleared},getInitialized:function(){return this.X.initialized},ce:function(t){this.X[t.key]=t.value}}},4322:function(t,n,e){var i=e(430),r=e(1664);t.exports={initialize:function(){this.X={randomId:null,visitorIdLocator:null},this.on(r.SET_VISITOR_ID,this.ht),this.on(r.DATA_LOADED,this.se)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.X.randomId},getVisitorIdLocator:function(){return this.X.visitorIdLocator},ht:function(t){i.extend(this.X,t),this.emitChange()},se:function(t){i.isEmpty(t.data.visitorIdLocator)||(this.X.visitorIdLocator=t.data.visitorIdLocator,this.emitChange())}}},5866:function(t,n,e){var i=e(430),r=e(3457),o=e(1664);t.exports={initialize:function(){this.X={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(o.XDOMAIN_SET_DEFAULT_FRAME,this.fe),this.on(o.XDOMAIN_ADD_FRAME,this.le),this.on(o.XDOMAIN_SET_MESSAGE,this.de),this.on(o.XDOMAIN_ADD_SUBSCRIBER,this.he),this.on(o.XDOMAIN_SET_CANONICAL_ORIGINS,this.ve),this.on(o.XDOMAIN_SET_DISABLED,this.pe)},getMessages:function(){return i.cloneDeep(this.X.messages)},getOffset:function(){return 0===this.X.messages.length?0:this.X.messages[0].data.id},getNextMessageId:function(){return this.X.messages.length+this.getOffset()},getMessageById:function(t){return this.X.messages[t-this.getOffset()]},getSubscribers:function(){return this.X.subscribers},getFrames:function(){return this.X.frames},getNextFrameId:function(){return this.X.frames.length},getDefaultFrame:function(){return this.X.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.X.canonicalOrigins)},isDisabled:function(){return this.X.disabled},fe:function(t){this.X.defaultFrame=t},le:function(t){this.X.frames.push(t)},de:function(t){for(this.X.messages[t.messageId-this.getOffset()]=t.message;this.X.messages.length>1e3;){var n=this.X.messages.shift();r.debug("XDomainStorage: Cleared old message: "+n.data.id)}},he:function(t){this.X.subscribers.push(t.subscriber)},ve:function(t){this.X.canonicalOrigins=t.canonicalOrigins},pe:function(t){this.X.disabled=t.disabled}}},3916:function(t,n){n.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},n.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},n.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}},5466:function(t,n,e){var i=e(1364).U;n.Error=i("TagError")},1925:function(t,n,e){var i=e(2821).PluginTypes,r=e(4748).get("stores/plugins");n.getTagValue=function(t){var e=r.getPlugin(i.viewTagLocators,t.locatorType);if(!e)throw new n.Error("No locator registered for tag locatorType: "+t.locatorType);return e(t)},n.enums=e(3916),n.Error=e(5466).Error},1164:function(t,n,e){var i=e(1664),r=e(4407),o=e(7322).Promise,a=e(4748).get("stores/async_request");n.makeAsyncRequest=function(t,n){var e,u,c=a.getPromise(t);if(c)return c;var s=new o((function(t,n){e=t,u=n}));return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:t,promise:s,resolver:e,rejecter:u}),n&&n(),s},n.resolveRequest=function(t,n){r.dispatch(i.RESOLVE_DEFERRED,{source:t,resolveWith:n})},n.rejectRequest=function(t,n){r.dispatch(i.REJECT_DEFERRED,{source:t,rejectWith:n})}},4221:function(t,n,e){var i=e(8830),r=e(3473);n.getLanguage=function(){return r.getNavigatorLanguage()},n.getQueryParams=i.getQueryParams,n.getQueryParamValue=i.getQueryParamValue,n.getUrl=function(){return r.getHref()}},6113:function(t,n,e){var i=e(430),r=e(1364).U,o=e(2146),a=e(6051),u=e(3473),c=e(1664),s=e(4748),f=e(4407),l=s.get("stores/cookie_options"),d=n.SetError=r("CookieSetError"),h=n.MismatchError=r("CookieMismatchError");n.getAll=function(t){var e,r,o,u,c;i.isUndefined(t)&&(t=!0),e=a.getCookieString().split(/\s*;\s*/);var s={};for(o=0;o<e.length;o++)if((u=(r=e[o]).indexOf("="))>0&&void 0===s[c=n.safeDecodeURIComponent(r.substring(0,u))]){var f=r.substring(u+1);t&&(f=n.safeDecodeURIComponent(f)),s[c]=f}return s},n.safeDecodeURIComponent=function(t){try{return decodeURIComponent(t)}catch(n){return t}},n.get=function(t,e){return n.getAll(e)[t]},n.set=function(t,e,r,s){r=i.extend({encodeValue:!0},r),!1!==s&&(s=!0);var g=[];if(i.isUndefined(r.domain)){var m=l.getCurrentDomain();m||(m=function(t,e){!1!==e&&(e=!0);for(var r,o,a=t.hostname.split("."),u=[],s=null,l=a.length-1;l>=0;l--)if(u.unshift(a[l]),r=u.join("."),!i.includes(v,r)){o={domain:e?"."+r:r};try{n.set(p,Math.random().toString(),o),n.remove(p,o),s=o.domain;break}catch(d){}}return f.dispatch(c.SET_COOKIE_DOMAIN,s),s}(u.getLocation(),!0)),r.domain=m}if(r.domain&&g.push("domain="+r.domain),i.isUndefined(r.path)&&(r.path="/"),r.path&&g.push("path="+r.path),i.isUndefined(r.expires)){var _=i.isUndefined(r.maxAge)?l.getDefaultAgeInSeconds():r.maxAge;r.expires=new Date(o.now()+1e3*_)}if(i.isUndefined(r.expires)||g.push("expires="+r.expires.toUTCString()),r.secure&&g.push("secure"),a.setCookie(t+"="+(r.encodeValue?encodeURIComponent(e):e)+";"+g.join(";")),s){var w=r.encodeValue,y=n.get(t,w);if(y!==e){if(!y)throw new d('Failed to set cookie "'+t+'"');throw new h('Expected "'+e+'" for "'+t+'", got "'+y+'"')}}},n.remove=function(t,e){for(var r=u.getLocation().hostname.split(".");r.length>0;)n.set(t,null,i.extend({},e,{domain:"."+r.join("."),expires:new Date(0)}),!1),r.shift()};var v=["optimizely.test"],p="optimizelyDomainTestCookie"},1364:function(t,n,e){var i=e(9981),r=i("InternalError");n.G=r,n.U=function(t){return i(t,r)}},408:function(t,n,e){var i=e(430),r=e(7322).Promise;t.exports=function(){var t,n,e=new r((function(e,i){t=e,n=i}));return e.resolve=function(){return t.apply(null,i.toArray(arguments)),e},e.reject=function(){return n.apply(null,i.toArray(arguments)),e},e}},22:function(t,n,e){var i=e(430);n.deepFreeze=function(t){},n.safeReference=function(t){return i.cloneDeep(t)}},6457:function(t,n,e){var i=e(430);n.getFieldValue=function(t,n){i.isArray(n)||(n=[n]);for(var e=t,r=0;r<n.length;r++){var o=n[r];if(!i.isObject(e)||!e.hasOwnProperty(o))return;e=e[o]}return e},n.setFieldValue=function(t,n,e){if(!i.isArray(n)||i.isEmpty(n))throw new Error("Attempted to set an invalid key path: "+n);for(var r=t,o=0;o<n.length-1;o++){var a=n[o];i.isObject(r[a])||(r[a]={}),r=r[a]}r[n[n.length-1]]=e}},3457:function(t,n,e){var i=e(430),r=e(1664),o=e(2146),a=e(2821),u=e(4407),c=e(716);function s(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}s.prototype.ge=function(){return!i.isNull(this.logLevel)},s.prototype.setLogLevel=function(t){var n=this.me(t);null===n?console.error("Unknown log level: "+t):this.logLevel!==n&&(this.log("Setting log level to "+n),this.logLevel=n,this.flush())},s.prototype.setLogMatcher=function(t){i.isString(t)?this.logMatcher=t:this.logMatcher="",this.logGroup=0},s.prototype.shouldLog=function(t){return this.ge()&&this.logLevel>=t},s.prototype.matchesLogMessage=function(t,n){var e=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===t?this.logGroup++:"GROUPEND"===t&&this.logGroup--,!0;var r=i.some(n,(function(t){if(!i.isString(t))try{t=c.stringify(t)}catch(n){}return i.isString(t)&&i.includes(t,e)}));return r&&"GROUPSTART"===t&&this.logGroup++,r},s.prototype.storeLog=function(t,n){var e={logLevel:t,logMessage:n};u.dispatch(r.LOG,e)},s.prototype.flush=function(){var t=e(4748).get("stores/log");this.logGroup=0;var n=t.getLogs();i.each(n,i.bind((function(t){this._e(t.logLevel,t.logMessage,!0)}),this))},s.prototype._e=function(t,n,e){var r,o=t;if(console)switch(t){case"GROUPSTART":r=console.groupCollapsed,o=a.LogLevel.DEBUG;break;case"GROUPEND":r=console.groupEnd,o=a.LogLevel.DEBUG;break;case a.LogLevel.ERROR:r=console.error;break;case a.LogLevel.WARN:r=console.warn;break;case a.LogLevel.DEBUG:r=console.debug;break;default:r=console.log}try{e||this.ge()&&!this.shouldLog(o)||(i.isArray(n)&&i.isString(n[0])&&(n=this.we(n)),this.storeLog(t,n)),r&&this.shouldLog(o)&&this.matchesLogMessage(t,n)&&r.apply(console,n)}catch(u){console&&(console.error?console.error(u):console.log(u))}},s.prototype.debug=function(){this._e(a.LogLevel.DEBUG,[].slice.call(arguments))},s.prototype.log=function(){this._e(a.LogLevel.INFO,[].slice.call(arguments))},s.prototype.logAlways=function(){var t=this.we([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,t),this.storeLog(a.LogLevel.INFO,t)},s.prototype.warn=function(){this._e(a.LogLevel.WARN,[].slice.call(arguments))},s.prototype.error=function(t){var n=[].slice.call(arguments);1===n.length&&t.stack?(this._e(a.LogLevel.ERROR,[this.ye(),t]),this._e(a.LogLevel.INFO,[t.stack])):this._e(a.LogLevel.ERROR,n)},s.prototype.groupCollapsed=function(){this._e("GROUPSTART",[].slice.call(arguments))},s.prototype.groupEnd=function(){this._e("GROUPEND",[].slice.call(arguments))},s.prototype.we=function(t){var n=this.ye().toString();return n.length<6&&(n=("     "+n).slice(-6)),[n+"| Optly / "+t[0]].concat(t.slice(1))},s.prototype.ye=function(){return this.timebase?o.now()-this.timebase:0},s.prototype.me=function(t){return t&&("TRUE"===(t=t.toUpperCase())&&(t="INFO"),"FALSE"===t&&(t="OFF"),"ALL"===t&&(t="DEBUG"),!i.isUndefined(a.LogLevel[t]))?a.LogLevel[t]:null},t.exports=new s},4694:function(t,n,e){var i;i=e(5410),t.exports=i},5431:function(t,n){n.isSingleExperimentPolicy=function(t){return"single_experiment"===t||"multivariate"===t}},6216:function(t,n,e){var i=e(430),r=e(7322).Promise,o=e(3473);n.pollFor=function(t,n,e){var a,u;return i.isFunction(e)?u=e:(a=e||100,u=function(){return--a<-1}),n=n||50,new r((function(e,i){!function r(){var a;if(!u()){try{var c=t();if(c)return e(c)}catch(s){a=s}return o.setTimeout(r,n)}i(a||new Error("Poll timed out"))}()}))}},392:function(t,n,e){var i=e(430),r=e(7322).Promise;n.firstToResolve=function(t){return new r((function(n){i.each(t,(function(t){r.resolve(t).then(n,(function(){}))}))}))}},8830:function(t,n,e){var i=e(430),r=e(3473);n.getQueryParams=function(){var t=r.getLocationSearch()||"";if(0===t.indexOf("?")&&(t=t.substring(1)),0===t.length)return[];for(var n=t.split("&"),e=[],i=0;i<n.length;i++){var o="",a="",u=n[i].split("=");u.length>0&&(o=u[0]),u.length>1&&(a=u[1]),e.push([o,a])}return e},n.getQueryParamValue=function(t){for(var e=n.getQueryParams(),i=0;i<e.length;i++)if(e[i][0]===t)return e[i][1]},n.queryStringFromMap=function(t){return i.map(t,(function(t,n){return n+"="+t})).join("&")}},7138:function(t,n,e){var i=e(430),r=e(3457),o=e(3473);function a(t){this.windowLength=t,this.count=0,this.listeners={},this.isIncrementingTick=!1}a.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),o.setTimeout(i.bind((function(){this.isIncrementingTick=!1}),this),0))},a.prototype.increment=function(){this.count+=1,i.forEach(this.listeners[String(this.count)],(function(t){t()})),o.setTimeout(i.bind(this.decrement,this),this.windowLength)},a.prototype.decrement=function(){this.count-=1,this.count<0&&(r.warn("Decremented down to negative count: ",this.count),this.count=0)},a.prototype.addListener=function(t,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(n)},t.exports=a},8424:function(t,n,e){var i=e(430),r=e(4748).get("stores/observed_redirect");n.getReferrer=function(){var t=r.get();return t?t.referrer:null},n.getExperimentAndVariation=function(){var t=r.get();return t&&i.isString(t.variationId)?i.pick(t,["experimentId","variationId"]):null}},4651:function(t,n,e){var i=e(430),r=e(1664),o=e(2146),a=e(4748),u=e(6051),c=e(2821),s=e(4407),f=e(3457),l=a.get("stores/sandbox"),d=e(3473);n.shouldSandbox=function(){return!1},n.get=function(t){if(!t)throw new Error("Name is required");if(n.shouldSandbox()){l.isInitialized()||h();var e=l.get(t);if(e)return e}return d.getGlobal(t)};var h=function(){try{var t="optimizely_"+o.now(),n=u.createElement("iframe");n.name=t,n.style.display="none",u.appendToHead(n);var e=n.contentWindow,a=n.contentDocument;a.write("<scr"),a.write("ipt></scr"),a.write("ipt>"),a.close();var l=i.mapValues(c.SandboxedFunctions,(function(t){return e[t]}));s.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:l}),n.parentNode.removeChild(n)}catch(d){f.warn("Unable to create a sandbox: ",d)}}},2538:function(t,n,e){var i=e(6051),r=e(3457),o=e(667);n.addScriptAsync=function(t,n){var e=i.querySelector("head"),o=i.createElement("script");o.type="text/javascript",o.async=!0,o.src=t,n&&(o.onload=n),e.insertBefore(o,e.firstChild),r.debug("Asynchronously requesting "+t)},n.addScriptSync=function(t,e){try{var a="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(-1!==t.indexOf('"'))return void r.error("Blocked attempt to load unsafe script: "+t);i.write("<scr"),i.write('ipt id="'+a+'" src="'+t+'"></scr'),i.write("ipt>");var u=i.querySelector("#"+a);if(!u)throw new Error("DocumentEnv.write failed to append script");u.onload=e,u.onerror=function(i){r.warn("Failed to load script ("+t+") synchronously:",i),n.addScriptAsync(t,e)}}catch(c){r.debug("DocumentEnv.write failed for "+t+": "+c.message);return o.request({url:t,async:!1,contentType:"text/plain",success:function(t){new Function(t.responseText)(),e&&e()}})["catch"]((function(i){r.error("Failed to load "+t+" via synchronous XHR: "+i.message),n.addScriptAsync(t,e)}))}}},2469:function(t,n,e){var i=e(7322).Promise,r=e(3473);n.makeTimeoutPromise=function(t){return new i((function(n,e){r.setTimeout((function(){e(new Error("Timed out after "+t+" ms"))}),t)}))}},9747:function(t,n,e){var i=e(430),r=e(3637),o=e(3473),a=e(1664),u=e(4748),c=e(4407),s=u.get("stores/ua_data");n.get=function(){var t=s.get();return i.isEmpty(t)&&(t=r.parseUA(o.getUserAgent()),c.dispatch(a.SET_UA_DATA,{data:t})),t}},3713:function(t,n){n.guessDomain=function(t,n){if(!t)return"";try{return n?t.match(/:\/\/(.[^/]+)/)[1]:t.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]}catch(e){return""}}},9111:function(t,n,e){var i=e(430),r=e(7322).Promise,o=e(1664),a=e(4748),u=e(4407),c=e(6397),s=e(1364).U,f=e(2146),l=e(6051),d=e(716),h=e(6216),v=e(9867),p=e(3473),g=e(3457),m=a.get("stores/xdomain"),_=n.Error=s("XDomainStorageError");function w(t){var n;if(i.find(m.getFrames(),{origin:t.origin})){try{n=d.parse(t.data)}catch(a){return void g.debug("XDomain","Ignoring malformed message event:",t)}if("ERROR"===n.type)u.dispatch(o.XDOMAIN_SET_DISABLED,{disabled:!0}),c.emitInternalError(new _("Xdomain Error: "+n.response));else if("SYNC"===n.type)i.each(m.getSubscribers(),(function(t){t(n.response.key,n.response.value)}));else{var e=m.getMessageById(n.id);if(!e){if(g.warn("XDomain","No stored message found for ID",n.id),i.isNumber(n.id)){var r=m.getNextMessageId();n.id>=r?c.emitInternalError(new _("Message ID is greater than expected maximum ID ("+n.id+">"+r+")")):n.id<0?c.emitInternalError(new _("Message ID is < 0: "+n.id)):c.emitInternalError(new _("No stored message found for message ID: "+n.id))}else c.emitInternalError(new _("Message ID is not a number: "+n.id));return}if(!e.resolver)return void g.warn("XDomain","Message already resolved, ignoring:",n.id);e.resolver(n.response),u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:n.id,message:{data:{id:n.id,type:e.data.type,key:e.data.key},startTime:e.startTime,endTime:f.now()}})}}else g.debug("XDomain","No frame found for origin: "+t.origin)}function y(t,n){return n||(n=m.getDefaultFrame()),new r((function(e){var r={data:i.extend({},t,{id:m.getNextMessageId()}),resolver:e};n?m.isDisabled()||b(r,n):u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:r.data.id,message:r})}))}function b(t,n){var e=t.data;u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:t.data.id,message:i.extend({},t,{startTime:f.now()})}),n.target.postMessage(d.stringify(e),n.origin)}n.setItem=function(t,n,e){return y({type:"PUT",key:t,value:n},e)},n.getItem=function(t,n){return y({type:"GET",key:t},n)},n.fetchAll=function(t){return y({type:"GETALL"},t)},n.deleteData=function(t,n){return y({type:"DELETE",visitorId:t},n)},n.subscribe=function(t){u.dispatch(o.XDOMAIN_ADD_SUBSCRIBER,{subscriber:t})},n.loadIframe=function(t,n){return new r((function(e){var i=l.createElement("iframe");i.src=t+n,i.hidden=!0,i.setAttribute("tabindex","-1"),i.setAttribute("title","Optimizely Internal Frame"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:m.getNextFrameId(),target:i.contentWindow,origin:t,path:n};u.dispatch(o.XDOMAIN_ADD_FRAME,r),e(r)},l.appendTo(l.querySelector("body"),i)}))},n.getXDomainUserId=function(t,n){var e,r={},o=i.keys(t);return i.each(n,(function(t){r[t]=[],i.each(o,(function(n){var o=v.getUserIdFromKey(n,t);!e&&o&&(e=o),o&&!i.includes(r[t],o)&&r[t].push(o)}))})),g.debug("XDomain: Found userIds:",r),e},n.load=function(t,e){p.addEventListener("message",w);return h.pollFor((function(){return!!l.querySelector("body")})).then((function(){return n.loadIframe(t,e)})).then((function(t){u.dispatch(o.XDOMAIN_SET_DEFAULT_FRAME,t),m.isDisabled()||i.each(m.getMessages(),(function(n){n.startTime||b(n,t)}))}))}},667:function(t,n,e){var i=e(430),r=e(1664),o=e(2146),a=e(4407),u=e(716),c=e(3457),s=e(7322).Promise,f=e(4651);n.isCORSSupported=function(){return"withCredentials"in new(f.get("XMLHttpRequest"))},n.request=function(t){return t=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},t),new s((function(e,r){if(!n.isCORSSupported())return r("CORS is not supported");var o=new(f.get("XMLHttpRequest"));o.onload=function(){t.success&&t.success(o),e(o)},o.onerror=function(){t.error&&t.error(o),r(o)},i.isObject(t.data)&&(t.data=u.stringify(t.data)),o.open(t.method,t.url,t.async),t.withCredentials&&(o.withCredentials=t.withCredentials),o.setRequestHeader("Content-Type",t.contentType),i.isObject(t.headers)&&i.forEach(t.headers,(function(t,n){o.setRequestHeader(n,t)})),o.send(t.data)}))},n.retryableRequest=function(t,e,u,f){if(!e)return s.reject(new Error("No id specified for request."));if(!n.isCORSSupported())return s.reject(new Error("CORS is not supported."));i.isUndefined(f)&&(f=3),i.isUndefined(u)&&(u=0);var l={id:e,timeStamp:o.now(),data:t,retryCount:u};return a.dispatch(r.SET_PENDING_EVENT,l),c.debug("Sending event ",e),n.request(t).then((function(t){return a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),t}),(function(t){throw l.retryCount>=f?(a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),c.warn("Event ",l," could not be sent after ",f," attempts.")):(l.retryCount++,a.dispatch(r.SET_PENDING_EVENT,l),c.debug("Event ",l," failed to send, with error ",t," It will be retried ",f-u," times.")),t}))},n.sendBeacon=n.request},5326:function(t,n,e){var i=e(430),r=e(1664),o=e(6030),a=e(7024),u=e(2146),c=e(4748),s=e(2821),f=e(5039),l=e(4407),d=e(3457),h=e(1925),v=c.get("stores/event_data"),p=c.get("stores/plugins"),g=c.get("stores/rum"),m=c.get("stores/view"),_=c.get("stores/view_data");function w(t,n){i.forEach(t,(function(t){if(t.eventType!==f.CUSTOM){var e=p.getPlugin(s.PluginTypes.eventImplementations,t.eventType);e?n?e.attach(t):e.detach(t):d.warn("No implementation found for event type:",t.eventType,"needed for event:",t)}}))}n.parseViewTags=function(t){var e=n.evaluateViewTags(t);n.setParsedViewTags(t.id,e)},n.updateAllViewTags=function(){var t=m.getActiveViewStates();i.each(t,(function(t){var e=_.get(t.id);n.parseViewTags(e)}))},n.evaluateViewTags=function(t){return t.tags?i.reduce(t.tags,(function(t,n){try{t[n.apiName]=h.getTagValue(n)}catch(r){e=r,(null!=(i=h.Error)&&"undefined"!=typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](e):e instanceof i)?d.warn("Page / Ignoring unparseable tag",n,r):d.error(r)}var e,i;return t}),{}):{}},n.createViewTicket=function(){var t={};return i.each(p.getAllPlugins(s.PluginTypes.viewProviders),(function(n){t[n.provides]=c.evaluate(n.getter)})),t},n.registerViews=function(t){l.dispatch(r.REGISTER_VIEWS,{views:t})},n.activateViaAPI=function(t,e){e&&n.setUserSuppliedViewTags(t.id,e),n.activateMultiple([t],e)},n.getViewsAndActivate=function(t){var e=_.getAllViewsForActivationType(t);n.activateMultiple(e)},n.activateMultiple=function(t,e){var a=[];return i.each(t,(function(t){var u=m.getViewState(t.id),c=n.createViewTicket();if(u.isActive)if(t.deactivationEnabled)try{n.hasValidStaticConditions(t,c)||n.deactivate(t)}catch(h){d.error("Page / Error evaluating whether to deactivate page ",n.description(t),h)}else d.log("Not activating Page, already active ",n.description(t));else{try{if(!n.hasValidStaticConditions(t,c))return i.isBoolean(u.isActive)||n.setViewActiveState(t,!1),void d.log("Page / Failed to match page conditions for "+n.description(t),t.staticConditions)}catch(h){return i.isBoolean(u.isActive)||n.setViewActiveState(t,!1),void d.error("Page / Error evaluating whether to activate page ",n.description(t),h)}if(a.push(t),n.setViewActiveState(t,!0),d.log("Activated Page",n.description(t)),o.emitViewActivated({view:t,metadata:e}),g.getSampleRum()){var f=t.activationType||s.ViewActivationTypes.immediate;l.dispatch(r.RECORD_ACTIVATION_TYPE_USAGE,{activationType:f,entityId:t.id})}w(v.getByPageId(t.id),!0)}})),i.isEmpty(a)||o.emitViewsActivated({views:a}),a},n.deactivate=function(t){m.getViewState(t.id).isActive?(n.setViewActiveState(t,!1),d.log("Deactivated Page",n.description(t)),o.emitPageDeactivated({page:t}),w(v.getByPageId(t.id),!1)):d.log("Not deactivating Page, already inactive ",n.description(t))},n.setViewActiveState=function(t,n){l.dispatch(r.SET_VIEW_ACTIVE_STATE,{view:t,timestamp:u.now(),isActive:n})},n.setGlobalTags=function(t){l.dispatch(r.SET_GLOBAL_TAGS,t)},n.setParsedViewTags=function(t,n){l.dispatch(r.UPDATE_PARSED_VIEW_METADATA,{pageId:t,metadata:n})},n.setUserSuppliedViewTags=function(t,n){l.dispatch(r.UPDATE_USER_SUPPLIED_METADATA,{pageId:t,metadata:n})},n.hasValidStaticConditions=function(t,n){var e={};if(i.isEmpty(t.staticConditions))return!0;var o=p.getAllPlugins(s.PluginTypes.viewMatchers);d.groupCollapsed("Page / Evaluating staticConditions:",t.staticConditions),d.debug("Matching to current value:",n);var u=a.evaluate(t.staticConditions,(function(t){var i=t.type,r=o[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r&&(e[t.type]||(e[t.type]=!0)),r.match(n,t)}));return d.groupEnd(),g.getSampleRum()&&u&&l.dispatch(r.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:i.keys(e),entityId:t.id}),u},n.description=function(t){return'"'+t.name+'" ('+t.id+")"},n.isActivationTypeImmediate=function(t){return t===s.ViewActivationTypes.immediate||!t},n.shouldTriggerImmediately=function(t){return t===s.ViewActivationTypes.DOMChanged||t===s.ViewActivationTypes.URLChanged||t===s.ViewActivationTypes.immediate||!t},n.create=function(t,n){return{id:t,apiName:n,category:"other"}},n.createState=function(t){return{id:t,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}}}},9867:function(t,n,e){var i,r=e(430),o=e(4407),a=e(1664),u=e(5355),c=e(6433),s=e(6113),f=e(2146),l=e(4748),d=e(2821),h=e(716),v=e(6457),p=e(4513).mM,g=e(3457),m=e(7322).Promise,_=e(8830),w=e(2821).VisitorStorageKeys,y=e(3473);i=e(9111);var b=l.get("stores/cookie_options"),E=l.get("stores/global"),I=l.get("stores/layer"),A=l.get("stores/plugins"),T=l.get("stores/rum"),S=l.get("stores/session"),k=l.get("stores/visitor_id"),R=l.get("stores/visitor_bucketing"),N=l.get("stores/visitor"),D=l.get("stores/provider_status");function C(t,n){var e=function(t,e){var i;n.attributionType&&(i=f.now()),o.dispatch(a.SET_VISITOR_ATTRIBUTES,{attributes:[{key:t,value:e,metadata:{lastModified:i}}]})};if(n.getter){var i=n.provides;if(r.isArray(i)||(i=[i]),!(n.isSticky&&!r.isUndefined(v.getFieldValue(t,i)))){var u;try{var c=l.evaluate(n.getter);r.isFunction(c)&&(c=c((function(){return v.getFieldValue(t,i)}),(function(t){e(i,t)}))),r.isUndefined(c)||(n.isAsync?(u=c.then((function(t){e(i,t)}),(function(t){g.warn('Failed to evaluate provider for "'+n.provides+'"; error was:',t)})),o.dispatch(a.SET_VISITOR_ATTRIBUTE_PENDING,{key:i,pending:u})):e(i,c))}catch(s){g.warn('Failed to evaluate getter for provider for "'+n.provides+'"; error was: '+s.message)}return u}}}function O(t){var n=M(t),e=p.getItem(n);return r.isString(e)&&(e=V(e)),e}function x(t){var n;if(t.layerId)n=t;else{var e=t;n={layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}return n}function P(t,n,e){try{var r=M(t);e||(n=h.stringify(n));try{p.setItem(r,n)}catch(o){throw g.warn("Visitor / Unable to set localStorage key, error was:",o),new Error("Unable to set localStorage")}i.setItem(r,n)}catch(o){g.warn("Unable to persist visitor data:",o.message)}}function M(t){var e=k.getBucketingId();if(!e)throw new Error("Visitor bucketingId not set");var i=n.getNamespace();if(!i)throw new Error("Namespace is not set");return[e,i,t].join("$$")}function L(t,e){if(!k.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(U(t)){var i=n.getStorageKeyFromKey(t);if(r.includes(w,i)){var u=M(i);if(!(t.indexOf(u)<=0)&&(e=V(e)))if(i===w.EVENT_QUEUE)o.dispatch(a.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:t,value:c.deserialize(e)});else if(i===w.EVENTS)o.dispatch(a.SET_FOREIGN_VISITOR_EVENTS,{key:t,value:c.deserialize(e)});else if(i===w.LAYER_STATES)o.dispatch(a.LOAD_PERSISTED_LAYER_STATES,{layerStates:r.map(e,x),merge:!0});else if(i===w.VARIATION_MAP)o.dispatch(a.MERGE_VARIATION_ID_MAP,{variationIdMap:e});else if(i===w.VISITOR_PROFILE){var s=e;r.each(["custom"],(function(t){var n=A.getPlugin(d.PluginTypes.visitorProfileProviders,t);if(n){if(s.profile&&s.metadata){var e=function(t,n,e){var i=N.getAttribute(n),o=N.getAttributeMetadata(n),a=t.profile[n],u=t.metadata[n];if(r.isEmpty(i))return{data:a,metadata:u};var c={};return r.forOwn(a,(function(t,n){var i,a;o&&o[n]&&(i=o[n].lastModified),u&&u[n]&&(a=u[n].lastModified),(e===d.AttributionTypes.FIRST_TOUCH&&i>=a||e===d.AttributionTypes.LAST_TOUCH&&a>=i||r.isUndefined(i)&&a)&&(c.data=c.data||{},c.data[n]=t,a&&(c.metadata=c.metadata||{},c.metadata[n]=c.metadata[n]||{},c.metadata[n].lastModified=a))})),c}(s,t,n.attributionType);if(!r.isEmpty(e)){var i=[];r.forOwn(e.data,(function(n,r){var o=e.metadata[r],a={key:[t,r],value:n,metadata:o};i.push(a)})),o.dispatch(a.SET_VISITOR_ATTRIBUTES,{attributes:i})}}}else g.debug("Attribute type",t,"not used by any audiences")}))}}}}function U(t){return t.split("$$")[0].indexOf("://")>0}function V(t){try{return h.parse(t)}catch(n){return g.debug("Failed to parse: ",t,n),null}}n.getOrGenerateId=function(){return{randomId:n.getCurrentId()||"oeu"+f.now()+"r"+Math.random()}},n.getCurrentId=function(){var t=k.getVisitorIdLocator();return N.getVisitorIdFromAPI()||(t?function(t){var n,e=t.name;switch(t.type){case d.VisitorIdLocatorType.COOKIE:n=s.get(e);break;case d.VisitorIdLocatorType.JS_VARIABLE:n=y.getGlobalByPath(e);break;case d.VisitorIdLocatorType.LOCALSTORAGE:try{n=y.getGlobal("localStorage").getItem(e)}catch(u){throw new Error("Unable to read localStorage: "+u.toString())}break;case d.VisitorIdLocatorType.QUERY:n=_.getQueryParamValue(e)}try{if(!n)throw g.error("Visitor / Customer provided visitor id cannot be found. Type:",t.type," Name:",e),new Error("Failure to obtain visitor id from "+t.type);if(!r.isString(n)&&!r.isNumber(n))throw g.error("Visitor / Customer provided visitor id is not a string or number. Type:",t.type," Name:",e," Id Type:",(i=n)&&"undefined"!=typeof Symbol&&i.constructor===Symbol?"symbol":typeof i),new Error("Customer provided visitor id is not a string or number")}catch(c){throw T.getSampleRum()&&o.dispatch(a.RECORD_VISITOR_ID_ERROR,{isError:!0}),c}var i;T.getSampleRum()&&(o.dispatch(a.RECORD_VISITOR_ID_ERROR,{isError:!1}),o.dispatch(a.RECORD_VISITOR_ID_LOCATOR_USAGE,{visitorIdLocatorType:t.type,entityId:n}));return String(n)}(t):s.get(d.COOKIES.VISITOR_ID))},n.hasSomeData=function(){return p.keys().length>0},n.setId=function(t){var e,c,f=k.getBucketingId();o.dispatch(a.SET_VISITOR_ID,t),k.getBucketingId()!==f&&(!function(){!function(t,n){0;u.initializeStore(t,n)}(O(w.EVENTS)||[],O(w.EVENT_QUEUE)||[]);var t=(e=w.LAYER_STATES,i=k.getBucketingId(),c=[],s=new RegExp(i+"\\$\\$([^$]+?)\\$\\$"+e),r.each(p.keys(),(function(t){var n=t.match(s);if(n){var e={namespace:n[1],userId:i,item:V(p.getItem(t))};c.push(e)}})),c);var e,i,c,s;r.forEach(t,(function(t){t.item=r.map(t.item,x)})),l=t,h=[],r.each(l,(function(t){r.each(t.item,(function(n){n.namespace=t.namespace,h.push(n)}))})),g=h,o.dispatch(a.LOAD_PERSISTED_LAYER_STATES,{layerStates:r.filter(g,(function(t){return!!t.decision}))}),v=O(w.SESSION_STATE)||{},v=r.extend({lastSessionTimestamp:0,sessionId:null},v),o.dispatch(a.LOAD_SESSION_STATE,v),function(t){var n,e,i=A.getAllPlugins(d.PluginTypes.visitorProfileProviders),u=r.filter(i,(function(t){return r.isFunction(t.restorer)}));t.profile&&t.metadata?(n=t.profile,e=t.metadata):(n=t,e={});n=r.reduce(n,(function(t,n,e){var i=n,o=r.find(u,{provides:e});return o&&(i=o.restorer(n)),t[e]=i,t}),{}),o.dispatch(a.LOAD_EXISTING_VISITOR_PROFILE,{profile:n,metadata:e})}(O(w.VISITOR_PROFILE)||{});var f=O(w.TRACKER_OPTIMIZELY);f&&(m=f,o.dispatch(a.SET_TRACKER_PERSISTABLE_STATE,m));var l,h;var v;var g;var m;n.loadForeignData(),n.removeLegacySessionStateCookies()}(),n.deleteOldLocalData(),i.deleteData(t));try{k.getVisitorIdLocator()||n.maybePersistVisitorId(t)}catch(l){if(g.error("Visitor / Unable to persist visitorId, disabling tracking"),o.dispatch(a.LOAD_DIRECTIVE,{trackingDisabled:!0}),e=l,null!=(c=s.MismatchError)&&"undefined"!=typeof Symbol&&c[Symbol.hasInstance]?c[Symbol.hasInstance](e):e instanceof c)throw g.error("Visitor / Cookie not set to correct value:",l),new Error("Cookie mismatch error while persisting visitorId");throw l}n.refreshSession()},n.getVariationIdMap=function(){return O(w.VARIATION_MAP)||{}},n.updateVariationIdMap=function(t,n,e){o.dispatch(a.UPDATE_VARIATION_ID_MAP,{layerId:t,experimentId:n,variationId:e})},n.persistVariationIdMap=function(){var t=R.getVariationIdMapString();P(w.VARIATION_MAP,t,!0)},n.getPreferredLayerMap=function(){return O(w.LAYER_MAP)||{}},n.updatePreferredLayerMap=function(t,n){o.dispatch(a.UPDATE_PREFERRED_LAYER_MAP,{groupId:t,layerId:n})},n.persistTrackerOptimizelyData=function(t){P(w.TRACKER_OPTIMIZELY,t)},n.refreshSession=function(){o.dispatch(a.REFRESH_SESSION)},n.populateEagerVisitorData=function(t,e){var i=r.filter(t,(function(t){return!t.isLazy}));return n.populateVisitorData(i,e)},n.populateLazyVisitorData=function(t,e,i){g.debug("Populating lazy visitor. List of all providers",t);var o=r.filter(t,(function(t){return t.isLazy&&i.has(t.provides)}));return g.debug("Filtered list of providers that are lazy and present in audiences",o),n.populateVisitorData(o,e)},n.populateVisitorData=function(t,n){n=n||{};var e=r.partial(C,n),i=r(t).filter({isAsync:!0}).map(e).filter().value();return r.forEach(r.filter(t,(function(t){return!t.isAsync})),e),i.length>0?m.all(i):m.resolve()},n.persistBehaviorEvents=function(t){P(w.EVENTS,t)},n.persistBehaviorEventQueue=function(t){P(w.EVENT_QUEUE,t)},n.getPersistedBehaviorEventCount=function(){var t=O(w.EVENTS)||[],n=O(w.EVENT_QUEUE)||[];return c.deserialize(t).length+c.deserialize(n).length},n.persistLayerStates=function(){var t=I.getLayerStates(n.getNamespace());t=r.map(t,(function(t){return r.omit(t,"namespace")})),P(w.LAYER_STATES,t)},n.persistSessionState=function(){P(w.SESSION_STATE,S.getState())},n.persistVisitorProfile=function(){P(w.VISITOR_PROFILE,function(){var t=N.getVisitorProfile(),n=N.getVisitorProfileMetadata(),e=A.getAllPlugins(d.PluginTypes.visitorProfileProviders);if(e){var i=r.reduce(e,(function(t,n){return n.provides&&(t[n.provides]=n),t}),{});t=r.omitBy(t,(function(t,n){var e=i[n];return e&&e.isTransient}))}return{profile:t,metadata:n}}())},n.persistVisitorBucketingStore=function(){var t;n.persistVariationIdMap(),t=R.getPreferredLayerMapString(),P(w.LAYER_MAP,t,!0)},n.getUserIdFromKey=function(t,e){var i;return r.includes(t,e)&&r.includes(t,"_")&&r.includes(t,"$$")&&r.includes(t.slice(t.indexOf("$$")),n.getNamespace())&&(i=t.slice(t.indexOf("_")+1,t.indexOf("$$"))),i},n.maybePersistVisitorId=function(t){t.randomId&&(b.getAutoRefresh()||n.getCurrentId()!==t.randomId?(s.set(d.COOKIES.VISITOR_ID,t.randomId),g.log("Persisting visitorId:",t.randomId)):g.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},n.getAttribute=function(t){return N.getAttribute(t)},n.getPendingAttributeValue=function(t){return D.getPendingAttributeValue(t)},n.isForeignKey=U,n.checkKeyForVisitorId=function(t){var e=k.getBucketingId()||n.getCurrentId(),i=n.getIdFromKey(t);return!i||i===e},n.getIdFromKey=function(t){var e=t.split("$$")[0],i=n.getStorageKeyFromKey(t);if(r.includes(d.StorageKeys,i))return null;var o=e.indexOf("_");return-1===o?e:e.substring(o+1)},n.getStorageKeyFromKey=function(t){var n,e=t.split("$$").pop();if(e.indexOf("://")>-1){var i=e.indexOf("_");n=e.substring(i+1)}else n=e;return r.includes(r.values(d.AllStorageKeys),n)?n:null},n.deleteOldLocalData=function(){var t=p.keys();r.each(t,(function(t){n.isForeignKey(t)||n.checkKeyForVisitorId(t)||p.removeItem(t)}))},n.deleteOldForeignData=function(){var t=p.keys();r.each(t,(function(t){n.isForeignKey(t)&&p.removeItem(t)}))},n.loadForeignData=function(){r.each(p.keys(),(function(t){var n=p.getItem(t);n&&L(t,n)}))},n.getNamespace=function(){return E.getNamespace()},n.serializeFieldKey=function(t){return r.isArray(t)?t.join("$$"):t},n.removeLegacySessionStateCookies=function(){var t=s.getAll();r.forEach(r.keys(t),(function(t){0===t.indexOf(d.COOKIES.SESSION_STATE+"$$")&&s.remove(t)}))}},3205:function(t,n,e){var i=e(430),r=e(2821);n.normalizeClientData=function(t){!t.listTargetingKeys&&t.listTargetingCookies&&(t.listTargetingKeys=i.map(t.listTargetingCookies,(function(t){return{type:r.ListTargetingKeyTypes.COOKIE,key:t}})),delete t.listTargetingCookies)}},8701:function(t,n,e){e(4748).register("env/jquery",e(7573))},7573:function(t,n,e){var i,r=e(3473);try{i=$}catch(a){}var o=r.getGlobal("$");t.exports=i&&i!==o?i:o},8685:function(t,n,e){e(430),e(1364).G,e(2146);var i=e(4748),r=(e(6051),e(3457));e(3473),e(667),i.get("stores/client_metadata"),i.get("stores/global");n.handleError=function(t,n){n?r.error("Uncaught error:",t,n):r.error("Uncaught error:",t)}},6114:function(t,n,e){var i=e(430),r=e(1664),o=e(6397),a=e(3734),u=e(1364).U,c=e(2661),s=e(408),f=e(4748).get("stores/directive"),l=e(6051),d=e(9818),h=e(4407),v=e(3457),p=e(7138),g=e(2781),m=e(8438).create(),_=1e3,w=10,y=u("ChangeOverheatError");function b(t,n){if(this.change=t,this.identifier=n.identifier,this.startTime=n.startTime,f.shouldObserveChangesIndefinitely()){h.dispatch(r.INITIALIZE_CHANGE_METRICS),this.rateMeter=new p(_);var e=i.isNull(w)?Number.POSITIVE_INFINITY:w;this.rateMeter.addListener(e,i.bind((function(){v.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),h.dispatch(r.RECORD_CHANGE_OVERHEATED),o.emitError(new y("Change "+this.identifier+" has overheated"),{layerId:n.action&&n.action.layerId,experimentId:n.action&&n.action.experimentId,variationId:n.action&&n.action.variationId,changeId:t.id,changeType:t.type,movingWindowMilliseconds:_,maxMacroTasksInMovingWindow:e})}),this));for(var a=Math.min(e,50),u=0;u<=a;u++)this.rateMeter.addListener(u,i.partial((function(t){h.dispatch(r.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:t})}),u))}}b.prototype.numberOfRootNodes=function(t){var n=document.createElement("div");return n.innerHTML=t,n.childNodes.length},b.prototype.getSiblingElements=function(t,n,e){for(var i=t,r=[],o=0;o<n;o++)e?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},b.prototype.apply=function(){this.applyDeferred=s();try{if(!this.numberOfRootNodes(this.change.value))throw new Error("No DOM elements to be created for this change: "+this.change.value);var t=i.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),n={};f.shouldObserveChangesUntilTimeout()?n={timeout:i.partial(g.isTimedOut,this.startTime),onTimeout:t}:f.isEditor()&&m.waitUntil(i.partial(g.isTimedOut,this.startTime)).then(t,t),this.unobserveSelector=m.observeSelector(this.change.selector,i.bind(this.maybeApplyToElement,this),n);var e=l.querySelectorAll(this.change.selector);i.each(e,i.bind(this.maybeApplyToElement,this))}catch(r){this.applyDeferred.reject(r)}return this.applyDeferred},b.prototype.maybeApplyToElement=function(t){var n=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(t.hasAttribute(n))return v.debug("Not applying AppendChange to element",t,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick(),i.bind(this.applyOrReapplyToElement,this,t,n)(),this.applyDeferred.resolve()},b.prototype.applyOrReapplyToElement=function(t,n){var e;switch(this.change.operator){case d.DOMInsertionType.AFTER:e=d.insertAdjacentHTMLType.AFTER_END;break;case d.DOMInsertionType.APPEND:e=d.insertAdjacentHTMLType.BEFORE_END;break;case d.DOMInsertionType.BEFORE:e=d.insertAdjacentHTMLType.BEFORE_BEGIN;break;case d.DOMInsertionType.PREPEND:e=d.insertAdjacentHTMLType.AFTER_BEGIN;break;default:e=d.insertAdjacentHTMLType.BEFORE_END}t.insertAdjacentHTML(e,this.change.value),t.setAttribute(n,""),c.setData(t,this.change.id,this.identifier,[]);var r,o,a=this.numberOfRootNodes(this.change.value)-1;e===d.insertAdjacentHTMLType.BEFORE_END?(r=t.lastChild,o=this.getSiblingElements(r,a,!1)):e===d.insertAdjacentHTMLType.AFTER_BEGIN?(r=t.firstChild,o=this.getSiblingElements(r,a,!0)):e===d.insertAdjacentHTMLType.BEFORE_BEGIN?(r=t.previousSibling,o=this.getSiblingElements(r,a,!1)):e===d.insertAdjacentHTMLType.AFTER_END&&(r=t.nextSibling,o=this.getSiblingElements(r,a,!0)),o.unshift(r),i.each(o,i.bind((function(t){var e=t.nodeType===Node.ELEMENT_NODE?t:l.parentElement(t);e.setAttribute(n,"");var r=c.getData(e,this.change.id,this.identifier)||[];r.push(t),c.setData(e,this.change.id,this.identifier,r),i.each(l.childrenOf(e),(function(t){t.setAttribute(n,"")}))}),this))},b.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},b.prototype.undo=function(){var t=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id,n=l.querySelectorAll("["+t+"]");return i.each(n,i.bind((function(n){var e=c.getData(n,this.change.id,this.identifier)||[];i.each(e,(function(t){t.parentNode.removeChild(t)})),n.removeAttribute(t),c.removeData(n,this.change.id,this.identifier),i.each(l.childrenOf(n),(function(n){n.removeAttribute(t)}))}),this)),s().resolve(d.changeState.UNAPPLIED)},t.exports=function(t){t.registerChangeApplier(d.changeType.APPEND,b)}},9269:function(t,n,e){var i=e(430),r=e(9818);n.transformVisibilityAttributesToCSS=function(t){if(!t.attributes)return t;if(t.attributes[r.selectorChangeType.HIDE]||t.attributes[r.selectorChangeType.REMOVE]){var n=i.extend({css:{}},i.cloneDeep(t));return t.attributes[r.selectorChangeType.HIDE]&&(n.css.visibility="hidden",delete n.attributes[r.selectorChangeType.HIDE]),t.attributes[r.selectorChangeType.REMOVE]&&(n.css.display="none",delete n.attributes[r.selectorChangeType.REMOVE]),n}return t},n.createStylesFromChange=function(t,n){if(i.isEmpty(n.css))return n.attributes.style;var e="",r=n.attributes.style||"";return i.each(n.css,(function(t,n){new RegExp(n+"\\s?:").test(r)||(e+=n+":"+t+";")})),i.isUndefined(n.attributes.style)?(t||"")+e:e+r}},39:function(t,n,e){var i=e(430),r=(e(7322).Promise,e(1664)),o=e(6397),a=e(3734),u=e(1364).U,c=e(2661),s=e(408),f=e(4748).get("stores/directive"),l=e(6051),d=e(9818),h=e(4407),v=e(3457),p=e(3552),g=e(7138),m=e(2781),_=e(3473),w=e(9269),y=e(8438).create(),b={attributes:!0,childList:!0,subtree:!0,characterData:!0},E=1e3,I=10,A=u("ChangeOverheatError");function T(t,n){if(this.change=i.cloneDeep(t),this.change=w.transformVisibilityAttributesToCSS(this.change),this.identifier=n.identifier,this.startTime=n.startTime,this.disconnectObserverQueue=[],f.shouldObserveChangesIndefinitely()){h.dispatch(r.INITIALIZE_CHANGE_METRICS),this.rateMeter=new g(E);var e=i.isNull(I)?Number.POSITIVE_INFINITY:I;this.rateMeter.addListener(e,i.bind((function(){v.warn("AttributeChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),h.dispatch(r.RECORD_CHANGE_OVERHEATED),o.emitError(new A("Change "+this.identifier+" has overheated"),{layerId:n.action&&n.action.layerId,experimentId:n.action&&n.action.experimentId,variationId:n.action&&n.action.variationId,changeId:t.id,changeType:t.type,movingWindowMilliseconds:E,maxMacroTasksInMovingWindow:e})}),this));for(var a=Math.min(e,50),u=0;u<=a;u++)this.rateMeter.addListener(u,i.partial((function(t){h.dispatch(r.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:t})}),u))}this.cancelled=!1}T.prototype.apply=function(){this.applyDeferred=s();try{if(i.isEmpty(this.change.attributes)&&i.isEmpty(this.change.css))return v.debug("Not applying empty AttributeChange"),this.applyDeferred.resolve(),this.applyDeferred;var t=i.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),n={};f.shouldObserveChangesUntilTimeout()?n={timeout:i.partial(m.isTimedOut,this.startTime),onTimeout:t}:f.isEditor()&&y.waitUntil(i.partial(m.isTimedOut,this.startTime)).then(t,t),this.unobserveSelector=y.observeSelector(this.change.selector,i.bind(this.maybeApplyToElement,this),n);var e=l.querySelectorAll(this.change.selector);i.each(e,i.bind(this.maybeApplyToElement,this))}catch(r){this.applyDeferred.reject(r)}return this.applyDeferred},T.prototype.maybeApplyToElement=function(t){var n=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(t.hasAttribute(n))return v.debug("AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. "+t),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var e=i.bind(this.applyOrReapplyToElement,this,t,n);e();var r=i.bind((function(){var n=i.bind((function(){this.cancelled||p.observe(o,t,b)}),this);return _.setTimeout(n)}),this),o=p.create(i.bind((function(){this.rateMeter&&this.rateMeter.countCurrentTick(),o.disconnect(),e(),r()}),this));r(),this.disconnectObserverQueue.push(i.bind(o.disconnect,o)),this.applyDeferred.resolve()},T.prototype.applyOrReapplyToElement=function(t,n){var e={};i.forOwn(this.change.attributes,(function(r,o){switch(o){case d.selectorChangeType.CLASS:i.isUndefined(t.className)||(e[d.selectorChangeType.CLASS]=t.className,t.className=r);break;case d.selectorChangeType.HREF:i.isUndefined(t.href)||(e[d.selectorChangeType.HREF]=t.href,t.href=r);break;case d.selectorChangeType.HTML:i.isUndefined(t.innerHTML)||(e[d.selectorChangeType.HTML]=t.innerHTML,t.innerHTML=r,i.each(l.childrenOf(t),(function(t){t.setAttribute(n,"")})));break;case d.selectorChangeType.SRC:i.isUndefined(t.src)||(e[d.selectorChangeType.SRC]=t.src,t.src=r);break;case d.selectorChangeType.STYLE:break;case d.selectorChangeType.TEXT:i.isUndefined(t.textContent)||(e[d.selectorChangeType.TEXT]=t.textContent,t.textContent=r);break;default:throw new Error("Unrecognized attribute: "+o)}}));var r=w.createStylesFromChange(t.style.cssText,this.change);i.isString(r)&&(e[d.selectorChangeType.STYLE]=t.style.cssText,t.style.cssText=r),t.setAttribute(n,""),c.setData(t,this.change.id,this.identifier,e)},T.prototype.cancel=function(){this.cancelled=!0,this.unobserveSelector&&this.unobserveSelector(),i.each(this.disconnectObserverQueue,(function(t){try{t()}catch(n){}}))},T.prototype.undo=function(){var t=l.querySelectorAll("["+a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id+"]");return i.each(t,i.bind((function(t){var n=c.getData(t,this.change.id,this.identifier);n&&i.forOwn(n,(function(n,e){switch(e){case d.selectorChangeType.CLASS:t.className=n;break;case d.selectorChangeType.HREF:t.href=n;break;case d.selectorChangeType.HTML:t.innerHTML=n;break;case d.selectorChangeType.SRC:t.src=n;break;case d.selectorChangeType.STYLE:t.style.cssText=n;break;case d.selectorChangeType.TEXT:t.textContent=n;break;case d.selectorChangeType.HIDE:t.style.visibility=n;break;case d.selectorChangeType.REMOVE:t.style.display=n;break;default:throw new Error("Unrecognized attribute: "+e)}})),t.removeAttribute(a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id),c.removeData(t,this.change.id,this.identifier)}),this)),s().resolve(d.changeState.UNAPPLIED)},t.exports=function(t){t.registerChangeApplier(d.changeType.ATTRIBUTE,T)}},6221:function(t,n,e){var i=e(430),r=e(408),o=e(9818),a=e(3562);function u(t,n){if(!i.isFunction(t.value))throw new Error("Custom code must be a function");this.change=t}u.prototype.apply=function(){var t=r();try{a.apply(this.change.value),t.resolve()}catch(n){t.reject(n)}return t},u.prototype.undo=function(){return r().resolve(o.changeState.IGNORED)},t.exports=function(t){t.registerChangeApplier(o.changeType.CUSTOM_CODE,u)}},7205:function(t,n,e){var i=e(9315),r=e(6782).E,o={selectExperiment:function(t,n,e){if(t.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var o=t.experiments[0];if(!i.isValidExperiment(n,o))throw new r('Audience conditions failed for experiment: "'+o.id+'".');return o}};t.exports=function(t){t.registerDecider("single_experiment",o),t.registerDecider("multivariate",o)}},1254:function(t,n,e){var i=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},r=e(430),o=e(6397),a=e(1364).U,u=e(6051),c=e(4694),s=n.Error=a("ClickDelegateError");function f(t){this.handler=t,this.events=[],this.unlistenFn=null,this.clickHandler=r.bind((function(t){r.forEach(this.events,r.bind((function(n){try{var e=n.config&&n.config.selector?n.config.selector:n.eventFilter.selector;(function(t,n,e){var a=t.target,u=0;for(;a;){var f;try{f=c(a,n)}catch(d){var l={typeofElementValue:void 0===a?"undefined":i(a),nodeName:r.result(a,["nodeName"],null),nodeType:r.result(a,["nodeType"],null),targetName:r.result(t,["target","nodeName"],null),targetType:r.result(t,["target","nodeType"],null),numParentsTraversed:u,selector:n,errorMessage:d.message,eventId:e.id};return o.emitError(new s("Unable to evaluate match for element"),l),!1}if(f)return!0;a=a.parentElement,u++}return!1})(t,e,n)&&this.handler(n)}catch(a){o.emitError(new s("Unable to handle click for selector"+e+":"+a.message))}}),this))}),this)}f.prototype.listen=function(){this.unlistenFn=u.addEventListener("click",this.clickHandler,!0)},f.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},f.prototype.hasEvents=function(){return this.events.length>0},f.prototype.addEvent=function(t){this.events.push(t)},f.prototype.removeEvent=function(t){this.events=r.filter(this.events,(function(n){return n.apiName!==t.apiName}))},t.exports=f},9590:function(t,n,e){var i=e(9226),r=e(1254),o=e(3457),a=e(5326);function u(t){return"apiName: "+t.apiName+", selector: "+t.eventFilter.selector}t.exports=function(t){var n=new r((function(t){a.updateAllViewTags(),i.trackClickEvent(t)?o.log("Tracking click event:",t):o.log("Not tracking click event:",t)}));t.registerEventImplementation("click",{attach:function(t){n.hasEvents()||n.listen(),n.addEvent(t),o.debug("Started listening for click event ("+u(t)+"):",t)},detach:function(t){n.removeEvent(t),n.hasEvents()||n.unlisten(),o.debug("Stopped listening for click event ("+u(t)+"):",t)}})}},3003:function(t,n,e){var i=e(430),r=e(9925),o=e(4588),a=e(7512);function u(t,n){var e=o.buildFromSpecV0_1(n);if(1!==e.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return a.execute(e[0],t)}function c(t,n){return i.map(t,(function(t){return i.isFunction(t.toObject)?t.toObject(n):t}))}function s(t,n){if(!t)return["Descriptor not defined"];var e=[];return t.count&&e.push('Unexpected "count" clause specified'),t.pick&&t.pick.modifier&&-1===n.indexOf(t.pick.modifier)&&e.push('Invalid "pick" modifier "'+t.pick.modifier+'"'),i.each(t.filters,(function(t){i.isUndefined(t.modifier)||e.push('Unexpected "filter" modifier "'+t.modifier+'"')})),e.length>0?e:void 0}function f(t,n){var e={revenueAsTag:!1,timeAsTimestamp:!0};if(i.isUndefined(n))return c(r.getEvents(t),e);if(i.isNumber(n)){if(n<=0)throw new Error("Count must be a positive integer, got "+n);return c(r.getEvents(t).slice(-n),e)}var a=s(n,i.values(o.RECENCY_FILTERS));if(a)throw new Error(a.join("\n"));return c(u(r.getEvents(t),n),e)}function l(t,n){if(!(n=i.cloneDeep(n)||{}).pick)throw new Error('No "pick" clause provided in query descriptor');if(!n.pick.name)throw new Error('No field name provided in "pick" clause');n.pick.modifier=n.pick.modifier||o.FREQUENCY_FILTERS.MOST_FREQUENT;var e=s(n,i.values(o.FREQUENCY_FILTERS));if(e)throw new Error(e.join("\n"));return u(r.getEvents(t),n)}function d(t,n){var e=o.buildFromSpecV0_2(n),u=r.getEvents(t),s=c(a.execute(e,u),{revenueAsTag:!0,timeAsTimestamp:!1});return(n.pick||n.reduce&&"count"===n.reduce.aggregator)&&(s=i.flatten(s)),n.reduce&&(s=s[0]),s}t.exports=["stores/visitor_events",function(t){return{getEvents:i.partial(f,t),getByFrequency:i.partial(l,t),query:i.partial(d,t)}}]},8340:function(t,n,e){t.exports=function(t){t.registerApiModule("behavior",e(3003))}},8838:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(8513)),t.registerAudienceMatcher("behavior",e(4952))}},4952:function(t,n,e){var i=e(430),r=e(716),o=e(4588),a=e(7512);t.exports={fieldsNeeded:["events"],match:function(t,n){var e,u=r.parse(n.value);return e=i.isUndefined(u.version)?[u]:o.buildFromSpecV0_1(u),i.every(e,(function(n){return a.isSatisfied(n,t.events)}))}}},8513:function(t,n,e){var i=e(9925);t.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}},1468:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(7857))}},7857:function(t,n,e){var i=e(430),r=e(9398),o=e(9925),a=e(716),u=e(4588);t.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(t,n){var e=t.getProjectId(),c=i.filter(i.map(n.getCustomBehavioralAttributes(e),(function(t){try{return{id:t.id,granularity:r.GRANULARITY.ALL,rule:u.buildFromSpecV0_2(a.parse(t.rule_json))}}catch(n){return}}))),s=o.getEvents();return r.evaluate(c,s)}]}},4350:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(6036)),t.registerAudienceMatcher("first_session",e(5737))}},5737:function(t){t.exports={fieldsNeeded:["first_session"],match:function(t){return!!t.first_session}}},6036:function(t,n,e){var i=e(8477),r=e(9925),o=e(6457).getFieldValue,a=e(6035).CURRENT_SESSION_INDEX;t.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var t=r.getEvents();if(t&&t.length>0){var n=t[0];return o(n,[i.FIELDS.SESSION_INDEX])===a}return!0}]}},9398:function(t,n,e){var i=e(3457),r={FIELDS:e(8477).FIELDS},o=e(4588),a=e(7512);n.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},n.evaluate=function(t,e){var u={};if(0===e.length){for(var c=0;c<t.length;c++)u[t[c].id]=t[c].defaultValue;return u}var s=function(t){if(0===t.length)return[];for(var n=t.length-1,e=r.FIELDS.SESSION_ID,i=t[n][e];n>0&&i===t[n-1][e];)n--;return t.slice(n)}(e),f=function(t,n){if(0===t.length||n<=0)return[];var e=+new Date-n*o.MILLIS_IN_A_DAY;e-=e%o.MILLIS_IN_A_DAY;for(var i=t.length;i>0&&e<=t[i-1][r.FIELDS.TIME];)i--;return t.slice(i)}(e,60);for(c=0;c<t.length;c++){var l=t[c],d=e;l.granularity===n.GRANULARITY.CURRENT_SESSION?d=s:l.granularity===n.GRANULARITY.LAST_60_DAYS&&(d=f);try{var h=d;l.rule&&(h=a.execute(l.rule,d)),u[l.id]=l.defaultValue,1===h.length?u[l.id]=h[0][0]||l.defaultValue:i.debug("Behavior / Rule for",l.id,"returned",h.length,"results, expected 1")}catch(v){i.error("Behavior / Rule for",l.id,"failed with",v.message||"")}}return u}},9925:function(t,n,e){var i=e(430),r=e(6433),o=e(4748).get("stores/visitor_events");n.getEvents=function(){var t=r.getEvents(),n=[].concat.apply([],i.values(o.getForeignEvents())),e=[].concat.apply([],i.values(o.getForeignEventQueues())),a=r.mergeAllEvents([t,n,e]);return a.slice(a.length-1e3)}},4588:function(t,n,e){var i=n,r=e(430),o={FIELDS:e(8477).FIELDS,FIELDS_V0_2:e(8477).FIELDS_V0_2},a=e(716),u=e(3457),c=e(7512);i.MILLIS_IN_A_DAY=864e5,i.aggregateField=function(t,n){return r.isString(n)&&(n=[n]),n=n||c.DEFAULT_FIELD,[c.generateAlias(t,n)]},i.groupField=function(t){return r.isString(t)&&(t=[t]),[(t=t||c.DEFAULT_FIELD).join(".")]};var s={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};function f(t){return t=(t||"").toString().trim(),s[t]||t}function l(t,n,e){var a={where:n};if(t.count&&(a.limit=t.count),t.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT){var u=i.getFieldKeyPathForSource(t.name,e),c=i.aggregate("count"),s=i.aggregateField("count"),f=i.groupField(u);return r.extend(a,{select:[{field:f}],groupBy:i.groupBy([u]),aggregate:[c],orderBy:[{field:s,direction:"DESC"}]})}return r.extend(a,{orderBy:[{field:[o.FIELDS.TIME],direction:"DESC"}]})}i.fieldComparison=function(t,n,e){return t=f(t),r.isString(n)&&(n=[n]),"exists"===t?{op:t,args:[{field:n}]}:{op:t,args:[{field:n},{value:e}]}},i.relativeTimeComparison=function(t,n){return{op:f(t),args:[{op:"-",args:[{eval:"now"},{field:[o.FIELDS.TIME]}]},{value:n*i.MILLIS_IN_A_DAY}]}},i.rangeTimeComparison=function(t){return r.isArray(t)?{op:"between",args:[{field:[o.FIELDS.TIME]},{value:[t[0]||+new Date(0),t[1]||+new Date]}]}:(u.error("Rule builder","rangeTimeComparison passed invalid range",t),null)},i.groupBy=function(t){for(var n=[],e=0;e<t.length;e++)n[e]={field:t[e]};return n},i.aggregate=function(t,n){return r.isString(n)&&(n=[n]),{op:t,args:[{field:n=n||c.DEFAULT_FIELD}]}},i.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},i.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},i.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},i.getFieldKeyPathForSource=function(t,n){n=n||i.SOURCE_TYPES.BEHAVIOR;var e=[];return r.isString(t)?(e=[t],n!==i.SOURCE_TYPES.BEHAVIOR||r.includes(r.values(o.FIELDS),t)||(e=[o.FIELDS.OPTIONS,t])):e=t,e},i.buildFromSpecV0_1=function(t){if(!(t.action||t.filters&&0!==t.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+a.stringify(t));var n=i.fieldComparison("gt",o.FIELDS.TIME,0),e=[],c=[];if(t.action&&(c.push(i.fieldComparison("eq",o.FIELDS.NAME,t.action.value)),t.action.type&&c.push(i.fieldComparison("eq",o.FIELDS.TYPE,t.action.type))),t.time)if("last_days"===t.time.type)c.push(i.relativeTimeComparison("lte",t.time.days));else if("range"===t.time.type){var s=i.rangeTimeComparison([t.time.start,t.time.stop]);s&&c.push(s)}else u.error("Rule builder",'Audience spec has bad "time" type',t.time.type);if(n={op:"and",args:c},t.count&&e.push({where:i.fieldComparison(t.count.comparator,"0",t.count.value),from:{select:[{field:i.aggregateField("count")}],where:n,aggregate:[i.aggregate("count")]}}),t.filters&&r.each(t.filters,(function(r){var a,u,s=i.getFieldKeyPathForSource(r.name,t.source);if(r.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT?(a=i.aggregate("count"),u=i.aggregateField("count")):r.modifier===i.RECENCY_FILTERS.MOST_RECENT&&(a=i.aggregate("max",o.FIELDS.TIME),u=i.aggregateField("max",o.FIELDS.TIME)),a){var f=s,l=i.groupField(f);e.push({where:i.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:l}],where:n,groupBy:i.groupBy([f]),aggregate:[a],orderBy:[{field:u,direction:"DESC"}],limit:1}})}else c.push(i.fieldComparison(r.comparator,s,r.value))})),t.pick){if(e.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+a.stringify(t));return[l(t.pick,n,t.source)]}return e.length>0?e:[{where:n}]},i.buildFromSpecV0_2=function(t){!function(t){var n=[];if(r.isUndefined(t))throw new Error("rule is undefined");if(!r.isObject(t))throw new Error("rule is not an Object");"0.2"!==t.version&&n.push('version: not "0.2"'),t.filter&&(r.isArray(t.filter)?r.each(t.filter,(function(t,e){var r=i.validateFieldKeyPathV0_2(t.field,i.FieldPurpose.FILTER);r&&n.push("filter["+e+"]: "+r);var o=i.validateComparatorAndValue(t.comparator,t.value);o&&n.push("filter["+e+"]: "+o)})):n.push("filter: not an array"));var e=[],o=[];t.sort&&(t.reduce&&t.reduce.aggregator&&"nth"!==t.reduce.aggregator&&n.push("sort: superfluous because we can apply aggregator "+a.stringify(t.reduce.aggregator)+" to unsorted items"),r.isArray(t.sort)?r.each(t.sort,(function(t,u){var c=i.validateFieldKeyPathV0_2(t.field,i.FieldPurpose.SORT);c&&n.push("sort["+u+"]: "+c),t.field&&"frequency"===t.field[0]?e.push(t):o.push(t);var s=function(t){var n="direction "+(a.stringify(t)||String(t));if(!r.includes(["ascending","descending"],t))return n+' is not "ascending" or "descending"'}(t.direction);s&&n.push("sort["+u+"]: "+s)})):n.push("sort: not an array"),e.length&&o.length&&n.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),e.length&&!t.pick&&n.push('sort: sorting by ["frequency"] is impossible because no values have been picked'));if(t.pick){t.reduce&&"count"===t.reduce.aggregator&&n.push('pick: superfluous because we can apply aggregator "count" to raw events');var u=i.validateFieldKeyPathV0_2(t.pick.field);u&&n.push("pick: "+u)}if(t.reduce){var c=t.reduce.aggregator,s="aggregator "+(a.stringify(c)||String(c)),f=t.reduce.n,l="index "+(a.stringify(f)||String(f));r.includes(["sum","avg","max","min","count","nth"],c)||n.push("reduce: "+s+" is unknown"),r.includes(["sum","avg","max","min"],c)&&(t.pick||n.push("reduce: "+s+" is impossible to use because no values have been picked")),"nth"===c?((!r.isNumber(f)||isNaN(f)||parseInt(f,10)!==f||f<0)&&n.push("reduce: "+l+" is not a non-negative integer (mandated by "+s+")"),t.sort||n.push('reduce: aggregator "nth" is meaningless without a specific sort order')):r.isUndefined(f)||n.push("reduce: "+l+" is defined (not mandated by "+s+")")}if(n.length)throw new Error(n.join("\n"))}(t);var n={where:{op:"and",args:r.map(t.filter||[],(function(t){return"age"===t.field[0]?i.relativeTimeComparison(t.comparator||"eq",t.value/i.MILLIS_IN_A_DAY):i.fieldComparison(t.comparator||"eq",i.convertFieldKeyPathFromSpecV0_2(t.field),t.value)}))}};if(t.reduce&&"count"===t.reduce.aggregator)return r.extend(n,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var e=[],o=[];if(t.sort&&(r.each(t.sort,(function(t){r.includes(["ascending","descending"],t.direction)&&(r.includes(["time","age"],t.field[0])&&o.push(t),"frequency"===t.field[0]&&e.push(t))})),o.length&&!e.length&&(n.orderBy=r.filter(r.map(o,(function(t){return"time"===t.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===t.direction?"ASC":"DESC"}:"age"===t.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===t.direction?"DESC":"ASC"}:void 0}))))),t.pick&&t.pick.field){var u=i.convertFieldKeyPathFromSpecV0_2(t.pick.field);if(t.reduce&&r.includes(["avg","max","min","sum"],t.reduce.aggregator))return r.extend(n,{aggregate:[{op:t.reduce.aggregator,args:[{field:u}]}],select:[{field:[c.generateAlias(t.reduce.aggregator,u)]}]});n=e.length?r.extend(n,{groupBy:[{field:u}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===e[0].direction?"ASC":"DESC"}],select:[{field:[u.join(".")]}]}):r.extend(n,{select:[{field:u}]})}if(t.reduce&&"nth"===t.reduce.aggregator){var s=t.reduce.n;if(r.isNumber(s)&&s>=0&&Number(s)===Math.floor(Number(s)))return r.extend(n,{offset:s,limit:1})}return n},i.convertFieldKeyPathFromSpecV0_2=function(t){return"tags"===t[0]&&"revenue"===t[1]?["r"]:[o.FIELDS_V0_2[t[0]]].concat(t.slice(1))},i.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},i.validateFieldKeyPathV0_2=function(t,n){var e="field "+(a.stringify(t)||String(t));if(!r.isArray(t)||!r.every(t,r.isString))return e+" is not an array of strings";if("tags"===t[0]&&t.length>2||"tags"!==t[0]&&t.length>1)return e+" includes too many strings";if("tags"===t[0]&&t.length<2)return e+" does not specify an exact tag";if(t.length<1)return e+" does not specify a top-level field";var u=r.keys(o.FIELDS_V0_2),c=["age","frequency"];return n===i.FieldPurpose.FILTER&&(u.push("age"),c=["frequency"]),n===i.FieldPurpose.SORT&&(u=["time","age","frequency"],c=["name","type","category","tags"]),r.includes(c,t[0])?e+" is not supported here":r.includes(u,t[0])?void 0:e+" is unknown"},i.validateComparatorAndValue=function(t,n){var e="comparator "+(a.stringify(t)||String(t)),i="value "+(a.stringify(n)||String(n));if(!r.isString(t)&&!r.isUndefined(t))return e+" is not a string";switch(t){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!r.isNumber(n))return i+" is not a number (mandated by "+e+")";break;case"in":if(!r.isArray(n))return i+" is not an array (mandated by "+e+")";break;case"between":if(!(r.isArray(n)&&2===n.length&&r.isNumber(n[0])&&r.isNumber(n[1])&&n[0]<=n[1]))return i+" is not a pair of increasing numbers (mandated by "+e+")";break;case"regex":if(!(r.isString(n)||r.isArray(n)&&2===n.length&&r.isString(n[0])&&r.isString(n[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+e+")";break;case"exists":if(!r.isUndefined(n))return i+" is not undefined (mandated by "+e+")";break;default:return e+" is unknown"}}},7512:function(t,n,e){var i=e(430),r=e(2821),o=e(3457),a=i.bind(o.log,o),u=e(2146),c=e(6457).getFieldValue,s=e(716),f=function(t,n,e){if(t.getValueOrDefault)return t.getValueOrDefault(n,e);if(!i.isArray(n))return e;var r=c(t,n);return void 0===r&&(r=e),r},l=function(t){return"string"==typeof t?t.trim().toLowerCase():t};n.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},n.DEFAULT_FIELD=["*"],n.booleanOperators={eq:function(t){var n=i.map(t,l);return n[0]==n[1]},is:function(t){return t[0]===t[1]},gt:function(t){return t[0]>t[1]},lt:function(t){return t[0]<t[1]},gte:function(t){return t[0]>=t[1]},lte:function(t){return t[0]<=t[1]},"in":function(t){var n=i.map(t[1]||[],l);return i.includes(n,l(t[0]))},between:function(t){return t[1][0]<=t[0]&&t[0]<=t[1][1]},contains:function(t){var n=i.map(t,(function(t){return"string"==typeof t?t.toLowerCase():t}));return-1!==(n[0]||"").indexOf(n[1])},regex:function(t){try{var n,e;return i.isString(t[1])?(n=t[1],e="i"):(n=t[1][0]||"",e=t[1][1]||""),new RegExp(n,e).test(t[0])}catch(r){return o.error("Rules",'In operator "regex", error: '+(r.message||"invalid RegExp /"+[n,e].join("/"))),!1}},exists:function(t){return void 0!==t[0]},and:function(t){return i.every(t,(function(t){return t}))},or:function(t){return i.some(t,(function(t){return t}))},not:function(t){return!t[0]}},n.arithmeticOperators={"+":function(t){return(t[0]||0)+(t[1]||0)},"-":function(t){return(t[0]||0)-(t[1]||0)},"/":function(t){return(t[0]||0)/(t[1]||1)},"%":function(t){return(t[0]||0)%(t[1]||1)}},n.aggregateOperators={sum:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r},avg:function(t,e){if(0===e.length)return 0;for(var i=t[0]||n.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r/e.length},max:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,o=0;o<e.length;o++)r=Math.max(r,f(e[o],i,Number.NEGATIVE_INFINITY));return r},min:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,o=0;o<e.length;o++)r=Math.min(r,f(e[o],i,Number.POSITIVE_INFINITY));return r},count:function(t,n){return n.length}};var d={now:function(){return u.now()}},h=function(t,e){if(e.hasOwnProperty("value"))return e.value;if(e.hasOwnProperty("field"))return f(t,e.field);if(e.hasOwnProperty("eval"))return e.eval in d?d[e.eval]():void o.error("Rules","Unknown function: "+e.eval);if(e.op){var r,a=(r=e.op)in n.booleanOperators?n.booleanOperators[r]:r in n.arithmeticOperators?n.arithmeticOperators[r]:null;if(a){var u=i.partial(h,t),c=e.args||[];return a(i.map(c,(function(t){return u(t)})),t)}o.error("Rules","Unknown operator: "+e.op)}else o.error("Rules","No operator specified: "+s.stringify(e))};n.generateAlias=function(t,n){return"_"+t+"_"+n.join(".")};n.rewrite=function(t){var e=[],r={};function a(t,u){if(i.isArray(t)&&("and"!==t[0]&&"or"!==t[0]&&"not"!==t[0]&&o.error("Rules","Unexpected operation "+t[0]+". Continuing optimistically."),t={op:t[0],args:t.slice(1)}),t.hasOwnProperty("field")||t.hasOwnProperty("value")||t.hasOwnProperty("eval"))return t;if(u&&t.op in n.aggregateOperators){var c=(t.args&&t.args[0]||{}).field||n.DEFAULT_FIELD,s=n.generateAlias(t.op,c);return s in r||(e.push({op:t.op,args:t.args}),r[s]=!0),{field:[s]}}for(var f=[],l=t.args||[],d=0;d<l.length;d++)f[d]=a(l[d],u);return{op:t.op,args:f}}var u={};t.hasOwnProperty(n.clause.WHERE)&&(u[n.clause.WHERE]=a(t[n.clause.WHERE],!1)),t.hasOwnProperty(n.clause.HAVING)&&(u[n.clause.HAVING]=a(t[n.clause.HAVING],!0)),(t.hasOwnProperty(n.clause.AGGREGATE)||e.length>0)&&(u[n.clause.AGGREGATE]=(t[n.clause.AGGREGATE]||[]).concat(e));for(var c=[n.clause.GROUP_BY,n.clause.ORDER_BY,n.clause.SELECT,n.clause.OFFSET,n.clause.LIMIT],s=0;s<c.length;s++)t.hasOwnProperty(c[s])&&(u[c[s]]=t[c[s]]);return t.hasOwnProperty(n.clause.FROM)&&(u[n.clause.FROM]=n.rewrite(t[n.clause.FROM])),u};var v=function(t,e){e=e||0;var r=[];if(t.hasOwnProperty(n.clause.WHERE)?t[n.clause.WHERE].op?t[n.clause.WHERE].op in n.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),!t.hasOwnProperty(n.clause.HAVING)||(t[n.clause.HAVING].op?t[n.clause.HAVING].op in n.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),t.hasOwnProperty(n.clause.GROUP_BY)&&!t.hasOwnProperty(n.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),t.hasOwnProperty(n.clause.SELECT)){var o=t[n.clause.SELECT];if(i.isArray(o))for(var a=0;a<o.length;a++)o[a].op&&o[a].op in n.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+o[a].op+'" specified in selector at index '+a);else r.push("SELECT clause must be an array")}if(t.hasOwnProperty(n.clause.OFFSET)){var u=t[n.clause.OFFSET];(!i.isNumber(u)||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&r.push("OFFSET must be a non-negative integer")}if(t.hasOwnProperty(n.clause.LIMIT)){var c=t[n.clause.LIMIT];(!i.isNumber(c)||Number(c)<0||Number(c)!==Math.floor(Number(c)))&&r.push("LIMIT must be a non-negative integer")}return e>0&&(r=i.map(r,(function(t){return"Sub-rule "+e+": "+t}))),t.hasOwnProperty(n.clause.FROM)&&(r=r.concat(v(t[n.clause.FROM],e+1))),r},p=function(t,e){var r,u,c,l=e;if(t.hasOwnProperty(n.clause.FROM)&&(o.debug("Evaluating FROM clause:",t[n.clause.FROM]),l=p(t[n.clause.FROM],l),o.debug("Results after FROM:",l)),o.debug("Evaluating WHERE clause:",t[n.clause.WHERE]),l=i.filter(l,(function(e){return h(e,t[n.clause.WHERE])})),o.debug("Results after WHERE:",l),t.hasOwnProperty(n.clause.AGGREGATE)){o.debug("Evaluating AGGREGATE clause:",t[n.clause.AGGREGATE]);var d=function(t,n){var e={};if(void 0===t||!i.isArray(t)||0===t.length)return e["*"]={fieldValues:{},events:n},e;for(var r=i.map(t,(function(t){return t.field})),o=0;o<n.length;o++){for(var a=n[o],u=[],c={},l=0;l<r.length;l++){var d=r[l],h=f(a,d),v=d.join(".");c[v]=h,u.push(encodeURIComponent(v)+"="+encodeURIComponent(s.stringify(h)))}var p=u.join("&");e.hasOwnProperty(p)||(e[p]={fieldValues:c,events:[]}),e[p].events.push(a)}return e}(t[n.clause.GROUP_BY],l);l=function(t,n){var e=[];return i.each(t,(function(t,r){var o=i.extend({},t.fieldValues),a=n[r]||{};i.extend(o,a),e.push(o)})),e}(d,(r=t[n.clause.AGGREGATE],u=d,c={},i.each(u,(function(t,e){c[e]={};for(var i=0;i<r.length;i++){var a=r[i],u=a.op;if(u in n.aggregateOperators){var s=(a.args&&a.args[0]||{}).field||n.DEFAULT_FIELD,f=n.generateAlias(u,s),l=n.aggregateOperators[u]([s],t.events);c[e][f]=l}else o.error("Rules","Unknown aggregate operator "+u)}})),c)),o.debug("Results after AGGREGATE:",l)}t.hasOwnProperty(n.clause.HAVING)&&(o.debug("Evaluating HAVING clause:",t[n.clause.HAVING]),l=i.filter(l,(function(e){return h(e,t[n.clause.HAVING])})),o.debug("Results after HAVING:",l)),t.hasOwnProperty(n.clause.ORDER_BY)&&(o.debug("Evaluating ORDER_BY clause:",t[n.clause.ORDER_BY]),l=function(t,n){return i.isArray(t)?0===t.length?n:n.sort((function(n,e){for(var i=0;i<t.length;i++){var r=t[i],o="ASC"===(r.direction||"ASC")?1:-1,a=r.field,u=f(n,a,0),c=f(e,a,0);if(u<c)return-o;if(u>c)return o}return 0})):(a("Rules","groupBy rule must be an array"),n)}(t[n.clause.ORDER_BY],l),o.debug("Results after ORDER_BY:",l));var v,g=0;return t.hasOwnProperty(n.clause.OFFSET)&&(o.debug("Evaluating OFFSET clause:",t[n.clause.OFFSET]),g=Number(t[n.clause.OFFSET])),t.hasOwnProperty(n.clause.LIMIT)&&(o.debug("Evaluating LIMIT clause:",t[n.clause.LIMIT]),v=g+Number(t[n.clause.LIMIT])),(g>0||!i.isUndefined(v))&&(l=l.slice(g,v),o.debug("Results after OFFSET/LIMIT:",l)),t.hasOwnProperty(n.clause.SELECT)&&(o.debug("Evaluating SELECT clause:",t[n.clause.SELECT]),l=function(t,n){return i.map(n,(function(n){return i.map(t,(function(t){return h(n,t)}))}))}(t[n.clause.SELECT],l),o.debug("Results after SELECT:",l)),l};n.execute=function(t,e){t=n.rewrite(t),o.shouldLog(r.LogLevel.DEBUG)&&o.groupCollapsed("Evaluating Behavioral Rule"),o.debug("Rule:",t,s.stringify(t)),o.debug("Events:",e);var i=v(t);if(i.length>0)throw new Error("Rule "+s.stringify(t)+" has violations: "+i.join("\n"));var a=p(t,e);return o.debug("Rule result:",a),o.shouldLog(r.LogLevel.DEBUG)&&o.groupEnd(),a},n.isSatisfied=function(t,e){try{return n.execute(t,e).length>0}catch(i){return o.error("Rules","Error "+i.toString()+" while evaluating rule "+s.stringify(t)),!1}}},4402:function(t,n,e){t.exports=function(t){t.registerDependency("sources/browser_id",e(6003)),t.registerVisitorProfileProvider(e(7691)),t.registerVisitorProfileProvider(e(5114)),t.registerAudienceMatcher("browser_version",e(5693))}},5693:function(t,n,e){var i=e(8613).y;t.exports={fieldsNeeded:["browserVersion","browserId"],match:function(t,n){var e=n.value,r=t.browserId,o=t.browserVersion;if(0===e.indexOf(r)){var a=e.substr(r.length);return 0===i(o,a)}return!1}}},7691:function(t){t.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(t){return t.getId()}]}},5114:function(t){t.exports={provides:"browserVersion",getter:["sources/browser_id",function(t){return t.getVersion()}]}},6003:function(t,n,e){var i=e(9747);n.getId=function(){return i.get().browser.id},n.getVersion=function(){return i.get().browser.version}},4826:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(2331)),t.registerAudienceMatcher("campaign",e(5094))}},5094:function(t,n,e){var i=e(95);t.exports={fieldsNeeded:["campaign"],match:function(t,n){return i.hasMatch(n.value,n.match,t.campaign)}}},2331:function(t,n,e){var i=e(4221);t.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}},6580:function(t,n,e){t.exports=function(t){t.registerAudienceMatcher("code",e(6270))}},6270:function(t,n,e){var i=e(430),r=e(3562);n.fieldsNeeded=[],n.match=function(t,n){if(i.isUndefined(n.value))return!0;if("function"==typeof n.value)try{return Boolean(r.apply(n.value))}catch(e){return!1}else try{return Boolean(r.eval(n.value))}catch(o){return!1}return!1}},6946:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(7204)),t.registerAudienceMatcher("cookies",e(2687))}},2687:function(t,n,e){var i=e(95);t.exports={fieldsNeeded:["cookies"],match:function(t,n){var e=n.name,r=n.value,o=n.match,a=t.cookies[e];return i.hasMatch(r,o,a)}}},7204:function(t,n,e){var i=e(430),r=e(6113),o=e(4748).get("stores/audience_data");t.exports={provides:"cookies",isLazy:!0,getter:[function(){var t=r.getAll(),n=o.getFeaturesNeeded("cookies");return i.reduce(t,(function(t,e,r){return i.has(n,r)&&(t[r]=e),t}),{})}]}},5422:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(8841));var n=e(7933);t.registerAudienceMatcher("custom_attribute",n),t.registerAudienceMatcher("custom_dimension",n)}},7933:function(t,n,e){var i=e(430),r=e(95);n.match=function(t,n){var e;return t.custom&&(e=t.custom[n.name]),i.isObject(e)&&(e=e.value),r.hasMatch(n.value,n.match,e)}},8841:function(t,n,e){var i=e(430),r=e(2821),o=e(3457),a=e(4748).get("stores/dimension_data");t.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(t){return i.reduce(t,(function(t,n,e){var r=e,u=a.getByApiName(e),c=a.getById(e);return i.isObject(n)?(!n.id&&u&&(c=u,r=u.id,i.extend(n,{id:c.segmentId||c.id})),!n.name&&c&&c.apiName&&(n.name=c.apiName),n.id||c||o.warn("Unable to determine ID for custom attribute:",e,"; segmentation is disabled."),t[r]=n,t):(o.error('Unable to restore custom attribute "'+e+'" because value is not an object'),t)}),{})},shouldTrack:!0}},170:function(t,n,e){t.exports=function(t){t.registerDependency("sources/device",e(7576)),t.registerVisitorProfileProvider(e(672)),t.registerAudienceMatcher("device",e(3616))}},3616:function(t){t.exports={fieldsNeeded:["device"],match:function(t,n){return t.device===n.value}}},672:function(t){t.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(t){return t.getDevice()}]}},7576:function(t,n,e){var i=e(9747);n.getDevice=function(){var t=i.get().device;return"unknown"!==t.model?t.model:"tablet"===t.type?"tablet":t.isMobile?"mobile":"desktop"}},3388:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(7246)),t.registerAudienceMatcher("device_type",e(5332))}},5332:function(t){t.exports={fieldsNeeded:["device_type"],match:function(t,n){return t.device_type===n.value}}},7246:function(t,n,e){var i=e(9747);t.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var t=i.get().device;switch(t.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return t.type;default:return"other"}}]}},3629:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(7425)),t.registerAudienceMatcher("location",e(9916))}},9916:function(t,n){n.fieldsNeeded=["location"],n.match=function(t,n){if(!t.hasOwnProperty("location"))return!1;var e=t.location,i=n.value.split("|"),r=(i[0]||"").trim(),o=(i[1]||"").trim(),a=(i[2]||"").trim(),u=(i[3]||"").trim(),c=(i.length>4&&i[4]||"").trim();switch(o="EN"===o?"ENG":o,i.length){case 1:if(e.country===r)return!0;break;case 2:if(e.region===o&&e.country===r)return!0;break;case 3:if(e.city===a&&(e.region===o||""===o)&&e.country===r)return!0;break;case 4:if(e.continent===u)return!0;break;case 5:if(e.dma===c)return!0}return!1}},7425:function(t,n,e){var i=e(7516);t.exports={provides:"location",isAsync:!0,getter:[function(){return i.getIPDerivedGeolocation()}]}},7041:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(6181)),t.registerAudienceMatcher("query",e(1666))}},1666:function(t,n,e){var i=e(430),r=e(95);n.fieldsNeeded=["queryParams"],n.match=function(t,n){var e=i.find(t.queryParams,(function(t){return t[0]===n.name}));return r.hasMatch(n.value,n.match,e?e[1]:null)}},6181:function(t,n,e){var i=e(4221);t.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}},8848:function(t,n,e){function i(t,n){return null!=n&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](t):t instanceof n}var r=e(430),o=e(716),a=e(3457),u=e(7322).Promise,c=e(667),s=1,f=2,l="itemMetadata",d="recos";function h(t){return t===f}function v(t,n){if(!function(t){return t===s}(n))return d in t?o.parse(t.recos):(a.warn('recommender / Expected key "recos" not found'),[]);var e=new RegExp("^reco(\\d+)$"),i=r.reduce(t,(function(n,i,a){var u=a.match(e);if(u){var c=o.parse(t[a]);c&&r.isObject(c)&&(n[u[1]]=c)}return n}),[]);return r.filter(i,(function(t){return!r.isUndefined(t)}))}function p(t,n){return[t,encodeURIComponent(n)].join("/")}function g(t,n){var e=function(t,n,e){if(!r.isArray(t)||r.isEmpty(t))throw new Error("No "+e+"s available");var i;if(n){if(!(i=r.find(t,{id:n})))throw new Error("No "+e+" found with specified id "+n)}else{if(t.length>1)throw new Error("No "+e+" id specified when there are more than one available.");i=t[0]}return i},i=e(t.getRecommenderServices(),n&&n.recommenderServiceId,"recommender service");return i.idTagName||(i.idTagName="id"),{recommenderService:i,recommender:e(i.recommenders,n&&n.recommenderId,"recommender")}}function m(t){return o.parse(t).data}function _(t,n){return c.request({url:p(t,n)}).then((function(t){var n=m(t.response),e={};return l in n&&(e=o.parse(n.itemMetadata)),e}))}function w(t,n,e,o){var a=!(!o||!o.fetchWithMetadata),u=o&&o.overrideServingUrl||n.servingUrl;return c.request({url:p(u,e)}).then((function(n){var e,u=m(n.response);return e=v(u,t.serviceVersion),a&&h(t.serviceVersion)?y(t,r.map(e,t.idTagName),o).then((function(t){return t=r.map(t,(function(t){return i(t,Error)&&(t={}),delete t.__proto__,t})),r.merge(e,t)})):e}))}function y(t,n,e){var i=e&&e.overrideCatalogUrl||t.catalogUrl;return r.isString(n)?_(i,n):u.all(r.map(n,(function(t){return _(i,t)["catch"]((function(n){return a.warn("recommender / Failed to get recommendations for item:",t,n),n}))})))}function b(t,n,e){var i=g(t,e);return w(i.recommenderService,i.recommender,n,{overrideServingUrl:e&&e.overrideServingUrl,overrideCatalogUrl:e&&e.overrideCatalogUrl,fetchWithMetadata:!0})}function E(t,n,e){var i=g(t,e),r=i.recommenderService,o=i.recommender;if(!h(r.serviceVersion))throw new Error("Recommender service "+r.id+" serves self-contained recos. Use `fetchRecommendations` API call");return w(r,o,n,{overrideServingUrl:e&&e.overrideServingUrl,fetchWithMetadata:!1})}function I(t,n,e){var i=g(t,e).recommenderService;if(!h(i.serviceVersion))throw new Error("Recommender service "+i.id+" serves self-contained recos. Use `fetchRecommendations` API call");return r.isArray(n)&&n.length>20?u.reject("Cannot fetch more than 20 items"):y(i,n,e)}function A(t,n,e,i){return new T(t,n,e,i)}function T(t,n,e,i){this.recommenderSettings=n;var r=g(t,n);this.recommenderService=r.recommenderService,this.recommender=r.recommender,this.targetId=e,i&&(this.preFilter=i.preFilter,this.canonicalize=i.canonicalize,this.postFilter=i.postFilter),this._globalStore=t,this.reset()}function S(){var t={recosNoMeta:[],recosNoMetaOffset:0,recos:[],recosOffset:0};return a.debug("recommender / fetching recommended items for",this.targetId,"from recommender",this.recommender.id),h(this.recommenderService.serviceVersion)?E(this._globalStore,this.targetId,this.recommenderSettings).then(r.bind((function(n){return t.recosNoMeta=r.filter(n,this.preFilter),t}),this)):b(this._globalStore,this.targetId,this.recommenderSettings).then(r.bind((function(n){return t.recos=r(n).filter(this.preFilter).map(this.canonicalize).filter(this.postFilter).value(),t}),this))}function k(t){var n=t.numNeeded,e=t.buffer,o=e.recosNoMeta.length-e.recosNoMetaOffset;if(n<=0||o<=0)return u.resolve(t);var c=Math.max(n,5),s=r.slice(e.recosNoMeta,e.recosNoMetaOffset,e.recosNoMetaOffset+c),f=r.map(s,this.recommenderService.idTagName);e.recosNoMetaOffset+=f.length;var l=t.recosSoFar;return a.debug("recommender / fetching metadata for",f,"from recommender",this.recommender.id),I(this._globalStore,f,this.recommenderSettings).then(r.bind((function(o){o=r.map(o,(function(t){return i(t,Error)?{}:t})),e.recos=r(s).merge(o).map(this.canonicalize).filter(this.postFilter).value();var a=r.slice(e.recos,0,n);return e.recosOffset=a.length,t.recosSoFar=l.concat(a),t.numNeeded-=a.length,t.numNeeded>0?k.call(this,t):t}),this))}T.prototype.reset=function(){this._bufferPromise=null},T.prototype.next=function(t){var n=Math.floor(r.isNumber(t)?t:1);if(n<=0)throw new Error("Invalid argument "+t+". Must be positive integer");this._bufferPromise||(this._bufferPromise=S.call(this));var e=this._bufferPromise.then(r.bind((function(t){var e=[];return t.recos.length-t.recosOffset>0&&(e=t.recos.slice(t.recosOffset,t.recosOffset+n),t.recosOffset+=e.length,n-=e.length),n<=0?{result:e,buffer:t}:k.call(this,{buffer:t,recosSoFar:e,numNeeded:n}).then((function(t){return{result:t.recosSoFar,buffer:t.buffer}}))}),this));return this._bufferPromise=e.then((function(t){return t.buffer})),e.then((function(t){return t.result}))},t.exports=["stores/global",function(t){return{fetchRecommendations:r.partial(b,t),fetchRecommendedItems:r.partial(E,t),fetchItemMetadata:r.partial(I,t),getRecommendationsFetcher:r.partial(A,t)}}]},842:function(t,n,e){t.exports=function(t){t.registerApiModule("recommender",e(8848))}},7340:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(8716)),t.registerAudienceMatcher("referrer",e(3406))}},3406:function(t,n,e){var i=e(9842);n.fieldsNeeded=["referrer"],n.match=function(t,n){return null!==t.referrer&&i(t.referrer,n)}},8716:function(t,n,e){var i=e(6051),r=e(8424);t.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var t=r.getReferrer()||i.getReferrer();return""===t&&(t=null),t}]}},9434:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(5029)),t.registerAudienceMatcher("source_type",e(6788))}},6788:function(t,n,e){var i=e(95);n.fieldsNeeded=["source_type"],n.match=function(t,n){return i.hasMatch(n.value,n.match,t.source_type)}},5029:function(t,n,e){var i=e(4221),r=e(6051),o=e(8424),a=e(3713),u=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/","https://(www)?\\.google\\..*?/?$","https://search\\.yahoo\\..*?/?$","https://(www)?\\.bing\\..*?/?$"];t.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(t,n){var e,c=t(),s=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var t=o.getReferrer()||r.getReferrer(),n=0;n<u.length;n++){var e=u[n];if(t.match(e))return"search"}return t&&a.guessDomain(t)!==a.guessDomain(i.getUrl())?"referral":"direct"}();e=s,(!c||"direct"!==e)&&n(s)}}]}},68:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(5391)),t.registerVisitorProfileProvider(e(4420)),t.registerAudienceMatcher("time_and_day",e(5714))}},5714:function(t,n,e){var i=e(7552);n.fieldsNeeded=["currentTimestamp"],n.match=function(t,n){return i.test(n.value,new Date(t.currentTimestamp))}},5391:function(t,n,e){var i=e(2146);t.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}},4420:function(t){t.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}},7552:function(t,n,e){var i=e(430);function r(t){var n=t.split(":");if(2!==n.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+t);return 60*parseInt(n[0],10)+parseInt(n[1],10)}n.test=function(t,n){var e=function(t){var n=t.split("_");if(3!==n.length)throw new Error("Invalid time and day string "+t);var e=n[2].split(",");return{start_time:n[0],end_time:n[1],days:e}}(t),o=r(e.start_time),a=r(e.end_time),u=60*n.getHours()+n.getMinutes(),c=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][n.getDay()];return u>=o&&u<=a&&i.includes(e.days,c)}},6661:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(1529))}},1529:function(t){t.exports={provides:"visitorId",getter:["stores/visitor_id",function(t){return t.getRandomId()}]}},7447:function(t,n,e){var i=e(430),r=e(6397),o=e(2894),a=e(1664),u=e(1364).U,c=e(716),s=e(3457),f=e(1186),l=e(9867),d=e(3473),h=e(667),v=e(4748),p=(e(6051),e(1564)),g=e(552),m=e(4407),_=v.get("stores/global"),w=v.get("stores/tracker_optimizely"),y=n.Error=u("OptimizelyTrackerError"),b="client_activation",E="campaign_activated",I="view_activated",A={revenue:{validate:x,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:x,sanitize:Math.floor,excludeFeature:!0},value:{validate:x,sanitize:i.identity}},T="AUTO",S=[function(){return function(t){M(function(t){return i.extend({entity_id:t.pageId,key:t.pageApiName,timestamp:t.timestamp,uuid:t.eventId,type:I},D(t.eventTags))}(t),t.userFeatures,$(t.layerStates))}}],k=[function(){return function(t){!function(t){var n=i.isNull(_.getAnonymizeIP())?void 0:_.getAnonymizeIP(),e={account_id:t.accountId,anonymize_ip:n,client_name:t.clientName,client_version:t.clientVersion,project_id:t.projectId,visitors:[]};e.revision=t.revision,e.enrich_decisions=!0;var r={session_id:U(t.sessionId),visitor_id:t.visitorId,attributes:[],snapshots:[]},o=$(t.layerStates);m.dispatch(a.REGISTER_TRACKER_VISITOR,{data:e,visitor:r,decisions:o}),K()}(t),M(function(t){return{entity_id:null,type:b,uuid:t.eventId,timestamp:t.timestamp}}(t),t.userFeatures,$(t.layerStates))}}],R=[function(){return function(t){var n;M((n=t,i.extend({entity_id:n.eventEntityId,key:n.eventApiName,timestamp:n.timestamp,uuid:n.eventId,type:n.eventCategory,properties:C(n.eventProperties)},D(n.eventTags))),t.userFeatures,$(t.layerStates))}}],N=[function(){return function(t){var n;M((n=t,i.extend({entity_id:n.eventEntityId,key:n.eventApiName,timestamp:n.timestamp,uuid:n.eventId,type:n.eventCategory},D(n.eventTags))),t.userFeatures,$(t.layerStates))}}];function D(t){var n=function(t,n,e){try{O(n),t[e]=n}catch(i){r.emitError(new y("Bad value for eventTags["+e+"]: "+i.message))}return t},e=i.keys(A),o=i.omit(t,e),a=i.pick(t,e),u=i.reduce(o,n,{}),c=i.reduce(a,(function(t,e,i){var o=A[i];o.excludeFeature||n(u,e,i);try{o.validate(e),t[i]=o.sanitize(e),u[i]=t[i]}catch(a){r.emitError(new y("Bad value for eventMetrics["+i+"]: "+a.message))}return t}),{});return c.tags=u,c}function C(t){if(i.keys(t).length<=15)return t;var n={},e={},r=0;for(var o in t)r<15?n[o]=t[o]:e[o]=t[o],r++;return s.log("Custom event has more than 15 properties. The following properties were not pushed",e),n}function O(t){if(null==t)throw new Error("Feature value is null");if("object"==typeof t){var n;try{n=c.stringify(t)}catch(e){}throw new Error('Feature value is complex: "'+n)}}function x(t){if(null==t)throw new Error("Metric value is null");if(!i.isNumber(t))throw new Error("Metric value is not numeric")}function P(t){return i.reduce(t,(function(t,n){try{O(n.value),t.push({entity_id:n.id||null,key:n.name,type:n.type,value:n.value})}catch(e){s.warn("Error evaluating user feature",n,e)}return t}),[])}function M(t,n,e){m.dispatch(a.REGISTER_TRACKER_EVENT,{event:t,decisions:e}),L(n),K()}function L(t){var n=P(t);m.dispatch(a.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:n})}function U(t){return T}function V(){if(w.canSend()){var t=w.hasEventsToSend(),n=w.hasPreviousBatchesToSend();t||n?(n&&(i.each(w.getPreviousBatches(),F),m.dispatch(a.RESET_TRACKER_PREVIOUS_BATCHES)),t&&(m.dispatch(a.FINALIZE_BATCH_SNAPSHOT),F(w.getEventBatch()),m.dispatch(a.RESET_TRACKER_EVENTS))):s.debug("Not sending events because there are no events to send")}else s.debug("Not sending events (holding)")}function F(t){s.debug("Sending ticket:",t);var n=o.generate();h.retryableRequest({url:"https://logx.optimizely.com/v1/events",method:"POST",data:z(t)},n)}function z(t){return i.extend({},i.pick(t,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:i.map(t.visitors,j)})}function j(t){return{visitor_id:t.visitor_id,session_id:T,attributes:i.map(t.attributes,G),snapshots:i.map(t.snapshots,q)}}function G(t){return Y(t,{entity_id:"e",key:"k",type:"t",value:"v"})}function q(t){var n=t.events;return n=function(t){var n=i.reduce(t,(function(t,n){var e;if(t[e=n.type===I&&i.isEmpty(n.tags)&&i.isEmpty(i.pick(n,i.keys(A)))?n.type:n.uuid]){var r=t[e].timestamp;n.timestamp>r&&(r=n.timestamp),t[e]=i.extend({},t[e],{key:t[e].key+"-"+(n.key||""),entity_id:t[e].entity_id+"-"+n.entity_id,timestamp:r})}else t[e]=n;return t}),{});return i.values(n)}(n),{activationTimestamp:_.getActivationTimestamp(),decisions:i.map(t.decisions,B),events:i.map(n,H)}}function B(t){return Y(t,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"})}function H(t){return t.key===E&&(t.type=E,delete t.key),Y(t,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",properties:"p",timestamp:"t",uuid:"u",value:"v",type:"y"})}function Y(t,n){return i.reduce(t,(function(t,e,i){return i in n&&(t[n[i]||i]=e),t}),{})}function K(){if(w.shouldBatch()){if(!w.isPolling()){d.setTimeout((function t(){V(),w.isPolling()&&d.setTimeout(t,1e3)}),1e3),m.dispatch(a.SET_TRACKER_POLLING,!0),d.setTimeout((function(){m.dispatch(a.SET_TRACKER_BATCHING,!1),m.dispatch(a.SET_TRACKER_POLLING,!1)}),1e4)}}else V()}function $(t){return i.map(t,(function(t){return{campaign_id:t.layerId,experiment_id:t.decision.experimentId,variation_id:t.decision.variationId,is_campaign_holdback:t.decision.isLayerHoldback}}))}function W(){var t=w.getPersistableState();if(t)try{s.debug("Persisting pending batch:",t),l.persistTrackerOptimizelyData(t),m.dispatch(a.SET_TRACKER_DIRTY,!1)}catch(n){s.debug("Failed to persist pending batch:",n)}}var X={trackLayerDecision:function(t){t.timing===f.TrackLayerDecisionTimingFlags.postRedirectPolicy?function(t){var n=P(t.userFeatures),e={account_id:t.accountId,anonymize_ip:t.anonymizeIP,client_name:t.clientName,client_version:t.clientVersion,project_id:t.projectId,visitors:[{session_id:U(t.sessionId),visitor_id:t.visitorId,attributes:n,snapshots:[{decisions:[{campaign_id:t.layerId,experiment_id:t.experimentId,variation_id:t.variationId,is_campaign_holdback:t.isLayerHoldback}],events:[{uuid:t.decisionId,entity_id:t.layerId,timestamp:t.timestamp,type:E}]}]}]};m.dispatch(a.REGISTER_PREVIOUS_BATCH,e),K()}(t):function(t){var n={entity_id:t.layerId,type:E,uuid:t.decisionId,timestamp:t.timestamp};m.dispatch(a.REGISTER_TRACKER_DECISION,{decisionEvent:n,decisions:$(t.layerStates)}),L(t.userFeatures),K()}(t)},postRedirectPolicy:f.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:f.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:S,onClientActivation:k,onClickEvent:N,onCustomEvent:R};t.exports=function(t){t.registerAnalyticsTracker("optimizely",X),p.on({filter:{type:g.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){m.dispatch(a.SET_TRACKER_SEND_EVENTS,!0),w.isPolling()||V()}}),p.on({filter:{type:g.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){m.dispatch(a.SET_TRACKER_SEND_EVENTS,!1)}}),m.dispatch(a.SET_TRACKER_SEND_EVENTS,!0);var n=p.on({filter:{type:"lifecycle",name:"activated"},handler:function(){w.observe(W),p.off(n)}})}},6612:function(t,n,e){var i=e(6051),r={match:function(t,n){return!!i.querySelector(n.value)}};t.exports=function(t){t.registerViewMatcher("element_present",r)}},8185:function(t,n,e){t.exports=function(t){t.registerViewProvider(e(4308)),t.registerViewMatcher("url",e(2006))}},2006:function(t,n,e){var i=e(9842);t.exports={fieldsNeeded:["url"],match:function(t,n){return i(t.url,n)}}},4308:function(t,n,e){var i=e(4221);t.exports={provides:"url",getter:[function(){return i.getUrl()}]}},8289:function(t,n,e){var i=e(6051),r=e(2821),o=e(1564),a=e(5907),u=e(5326),c={token:void 0,setUpObserver:function(){a.createDOMChangedObserver(),this.token=o.on({filter:{type:"viewTrigger",name:"DOMChanged"},handler:function(){u.getViewsAndActivate(r.ViewActivationTypes.DOMChanged)}})},turnOffObserver:function(){o.off(this.token)}};t.exports=function(t){i.isReady()?c.setUpObserver():i.addReadyHandler(c.setUpObserver),t.registerViewTrigger("DOMChanged",c)}},2791:function(t,n,e){var i=e(430),r=e(1664),o=e(4748),a=e(2821),u=e(1564),c=e(4407),s=o.get("stores/history"),f=e(3457),l=e(7322).Promise,d=e(5326),h=e(3473);function v(t){u.emit({type:"viewTrigger",name:"URLChanged",data:{source:t,newURL:h.getHref()}},!0)}t.exports=function(t){var n;n=function(){var t=s.getOriginalPushState().apply(this,arguments);return l.resolve().then((function(){v("pushState")}))["catch"]((function(t){f.error("Error while wrapPushState: ",t)})),t},c.dispatch(r.ENSURE_ORIGINAL_PUSHSTATE),h.getGlobal("history").pushState=n,function(){var t=function(){var t=s.getOriginalReplaceState().apply(this,arguments);return l.resolve().then((function(){v("replaceState")}))["catch"]((function(t){f.error("Error while wrapReplaceState: ",t)})),t};c.dispatch(r.ENSURE_ORIGINAL_REPLACESTATE),h.getGlobal("history").replaceState=t}(),h.addEventListener("popstate",p,!1),h.addEventListener("hashchange",g,!1),u.on({filter:{type:"viewTrigger",name:"URLChanged"},handler:function(){d.getViewsAndActivate(a.ViewActivationTypes.URLChanged)}}),t.registerViewTrigger("URLChanged")};var p=i.partial(v,"popstate"),g=i.partial(v,"hashchange")},7254:function(t,n,e){var i=e(430),r=e(4748),o=e(1564),a=e(552),u=e(3473),c=r.get("stores/directive"),s="optimizelyPreview",f=function(t){u.getGlobal(s).push(t)};n.initialize=function(t){c.isSlave()&&function(t){var n=!1;if(i.isArray(window.optimizely)&&i.each(window.optimizely,(function(e){i.isArray(e)&&"verifyPreviewProject"===e[0]&&String(e[1])===t&&(n=!0)})),!n)throw new Error("Preview projectId: "+t+" does not match expected")}(t),o.on({filter:{type:a.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),o.on({filter:{type:a.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),o.on({filter:{type:a.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),o.on({filter:{type:"error"},publicOnly:!0,handler:f})},n.setupPreviewGlobal=function(){u.getGlobal(s)||u.setGlobal(s,[])},n.pushToPreviewGlobal=function(t){f(t)}},1632:function(t,n,e){var i=e(430),r=e(2894),o=e(1164),a=e(5355),u=e(2146),c=e(6051),s=e(4407),f=e(4513).mM,l=e(3457),d=e(2509),h=e(7322).Promise,v=e(9867),p=e(3473),g=e(667),m=e(1664),_=e(2821),w=e(4748),y=w.get("stores/async_request"),b=w.get("stores/client_metadata"),E=w.get("stores/global"),I=w.get("stores/rum"),A=w.get("stores/performance"),T=w.get("stores/xdomain"),S=w.get("stores/view_data"),k=e(5968),R="https://rum.optimizely.com/rum",N="1.0";function D(t){return i.isEmpty(t)?h.resolve():(n=function(){return g.request({url:R,method:"POST",data:t,withCredentials:!0}).then((function(t){return o.resolveRequest("RUM_FIRST_BEACON",t),t}))["catch"]((function(t){throw l.error("POST to client-rum failed:",t),o.rejectRequest("RUM_FIRST_BEACON",t),t}))},(e=y.getPromise("RUM_FIRST_BEACON"))?e.then(n):o.makeAsyncRequest("RUM_FIRST_BEACON",n));var n,e}function C(){try{return!c.querySelector("body")}catch(t){return null}}function O(){var t=p.getGlobal("performance"),n=t?t.timing:{},e=A.getMarks()||{},r=I.getApiData(),o=I.getDOMObservationData(),a=k.get("state").getActiveExperimentIds(),u=I.getFeaturesNeededData(),s=c.parseUri(I.getScriptSrc()),l=I.getRumData()||{},h=l.extras||{};i.assign(h,{apiCalls:r,DOMObservationData:o,paintTimings:P(),activeExperimentIds:a,numPages:S.getNumberOfPages(),snippet:{scheme:s.protocol.slice(0,-1),host:s.host,path:s.pathname},networkInfo:x(),experimental:E.getExperimental(),featuresNeeded:u,beacon:{cjsOnload:!0}});var g=p.getGlobal("Prototype");g&&!i.isUndefined(g.Version)&&(h.prototypeJS=g.Version);var m=!1;m=!0;var _=T.getFrames();_.length&&(h.xdFramesLoaded=_.length);var w={id:I.getRumId(),v:N,project:E.getSnippetId()||E.getProjectId(),navigationTimings:n,userTimings:e,xd:m,apis:i.keys(r),extras:h,sampleRate:l.sampleRate};(function(){var t=f.keys(),n=i.filter(i.map(t,(function(t){var n=v.getStorageKeyFromKey(t);return n?{key:t,isForeign:v.isForeignKey(t),category:n,size:t.length+f.getItem(t).length}:null}))),e=i.reduce(n,(function(t,n){var e=n.key,i=v.getIdFromKey(e);return i?((n.isForeign?t.foreign:t.local)[i]=!0,t):t}),{local:{},foreign:{}}),r=i.chain(n).filter({isForeign:!0}).reduce((function(t,n){return t[n.key.split("_")[0]]=!0,t}),{}).value(),o={local:0,foreign:0},a={local:{},foreign:{}};i.forEach(n,(function(t){var n=t.isForeign?"foreign":"local";o[n]+=t.size,a[n][t.category]||(a[n][t.category]=0),a[n][t.category]+=t.size}));var u={numKeys:f.allKeys().length,sizeKeys:f.allKeys().toString().length,sizeValues:f.allValues().toString().length,idCounts:{local:i.keys(e.local).length,foreign:i.keys(e.foreign).length},foreignOriginCount:i.keys(r).length,byteTotals:o,byteTotalsByCategory:a};return d.estimateStorage().then((function(t){return i.assign(u,{storageEstimate:t})}))})().then((function(t){D(i.assign(w,{lsMetrics:t}))}))}function x(){var t=p.getGlobal("navigator");if(t&&t.connection)return i.pick(t.connection,["downlink","rtt","effectiveType"])}function P(){var t=p.getGlobal("performance");if(t)try{var n=t.getEntriesByType("paint");if(i.isEmpty(n))return;return i.reduce(n,(function(t,n){return t[n.name]=Math.round(n.startTime),t}),{})}catch(e){return}}n.initialize=function(){var t,n=r.generate().replace(/-/g,"");t=Math.random()<.01;var e=function(){var t=c.getCurrentScript();if(t)return t.src}();s.dispatch(m.SET_RUM_DATA,{id:n,RumHost:R,inRumSample:t,src:e,data:{id:n,sync:C(),timebase:u.now(),sampleRate:.01,url:e,extras:{initialDOMState:c.getReadyState()}}})},n.queueBeacons=function(){return I.getSampleRum()?(function(){try{p.getGlobal("requestAnimationFrame")((function(){var t=I.getRumData().timebase;s.dispatch(m.SET_RUM_DATA,{data:{render:u.now()-(t||0)}})}))}catch(t){return}}(),c.isLoaded()?p.setTimeout(O,3e3):p.addEventListener("load",O),new h((function(t,n){p.setTimeout((function(){(function(){!function(){var t={id:I.getRumId(),v:N,account:E.getAccountId(),project:E.getSnippetId()||E.getProjectId(),snippet:E.getSnippetId(),revision:E.getRevision(),clientVersion:b.getClientVersion(),hasSlave:!1,wxhr:!0,extras:{}},n=v.getPersistedBehaviorEventCount(),e=a.getEventCount();t.numBehaviorEvents=e;var r=e-n;i.extend(t.extras,{behaviorEventCountDiff:r,behaviorEventCountDecreased:r<0}),i.assign(t,function(){var t=p.getGlobal("performance");if(!t)return;var n,e=I.getScriptSrc();try{if(e){l.debug("Using derived script src: ",e);var r=t.getEntriesByName(e);r.length>0&&(n=r[0])}if(!n){var o=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;l.debug("Scanning resource timing entries with regex");var a=t.getEntriesByType("resource");n=i.find(a,(function(t){return o.test(t.name)}))}if(n)return i.mapValues(_.ResourceTimingAttributes,(function(t,e){var i=n[e];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===e?i||[]:void 0}))}catch(u){return}}(),A.getDurationsFor(i.values(_.RUMPerformanceTimingAttributes))),s.dispatch(m.SET_RUM_DATA,{data:t})}();var t=I.getRumData(),n=A.getMarks()||{};return t.extras=t.extras||{},t.extras.beacon={cjsTimeout:!0},t.userTimings=n,D(t=i.pickBy(t,(function(t){return!i.isUndefined(t)})))})().then(t,n)}),3e3)}))["catch"]((function(t){l.warn("RUM / Error sending data:",t)}))):h.resolve()}},2016:function(){}},__webpack_module_cache__={};function __webpack_require__(t){var n=__webpack_module_cache__[t];if(n!==undefined)return n.exports;var e=__webpack_module_cache__[t]={id:t,loaded:!1,exports:{}};return __webpack_modules__[t].call(e.exports,e,e.exports,__webpack_require__),e.loaded=!0,e.exports}__webpack_require__.amdO={},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),__webpack_require__.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t};var __webpack_exports__={};!function(){try{!function(){var t=function(t){var n=[__webpack_require__(6661)];n.push(__webpack_require__(8838)),n.push(__webpack_require__(1468)),n.push(__webpack_require__(4350)),n.push(__webpack_require__(8340)),n.push(__webpack_require__(4402)),n.push(__webpack_require__(4826)),n.push(__webpack_require__(6580)),n.push(__webpack_require__(6946)),n.push(__webpack_require__(5422)),n.push(__webpack_require__(170)),n.push(__webpack_require__(3388)),n.push(__webpack_require__(3629)),n.push(__webpack_require__(7041)),n.push(__webpack_require__(7340)),n.push(__webpack_require__(9434)),n.push(__webpack_require__(68)),n.push(__webpack_require__(7447)),n.push(__webpack_require__(8185)),n.push(__webpack_require__(6612)),n.push(__webpack_require__(8289)),n.push(__webpack_require__(2791)),n.push(__webpack_require__(9590)),n.push(__webpack_require__(842)),n.push(__webpack_require__(6114)),n.push(__webpack_require__(39)),n.push(__webpack_require__(6221)),n.push(__webpack_require__(7205)),f.initializePlugins(n)};window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(1632).initialize();var n=__webpack_require__(2341);n.time("gtagReady");var e=__webpack_require__(3457),i=__webpack_require__(4748);__webpack_require__(8701);var r=i.get("stores/directive");if(!__webpack_require__(667).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var o,a=__webpack_require__(8905),u=__webpack_require__(1299),c=__webpack_require__(2538),s={"accountId": "15853140465", "namespace": "a15853140465", "revision": "129548", "anonymizeIP": true, "enableForceParameters": true, "experimental": {"trimPages": true}, "snippetId": "19194980281", "projectId": "19194980281", "layers": [{"changes": [{"id": "c3cafaaea6e543ac9781360074a989bf", "type": "custom_code", "value": function($){window.optimizely = window.optimizely || [];

const tag = 'cv-3-19';
const utils = window.optimizely.get('utils');

utils.waitForElement('body').then(() => {
	if (
		nuk.user &&
		nuk.user.isRegisteredUser
	) {
		window.optimizely.push({
			"type": "user",
			"attributes": {
			  "registered-user": "True"
			}
		});
	}

	const articleEvents = () => {
		const registered = nuk.user.isRegisteredUser;
		const pageViewData = JSON.parse(localStorage.getItem(`${tag}-article-viewed`));
		
		if (!pageViewData && registered) {
			window.localStorage.setItem(
				`${tag}-article-viewed`,
				JSON.stringify({
					pageView: 1,
					url: location.pathname,
				})
			);

			if (nuk.user.isRegisteredUser && registered) {
				window.optimizely.push({
					type: 'event',
					eventName: 'Article_1_viewed_in_registration',
				});
			}
		}

		if (pageViewData && registered) {
			if (pageViewData.url !== location.pathname) {
				localStorage.setItem(
					`${tag}-article-viewed`,
					JSON.stringify({
						pageView: pageViewData.pageView + 1,
						url: location.pathname,
					})
				);
			}

			if (pageViewData.pageView == 1) {
				window.optimizely.push({
					type: 'event',
					eventName: 'Article_2_viewed_in_registration',
				});
			}

			if (pageViewData.pageView == 2) {
				window.optimizely.push({
					type: 'event',
					eventName: 'Article_3_viewed_in_registration',
				});
			}

			if (pageViewData.pageView == 3) {
				window.optimizely.push({
					type: 'event',
					eventName: 'Article_limit_reached',
				});

				localStorage.removeItem(`${tag}-article-viewed`);
			}
		}
	};

	if (location.pathname.indexOf('/article/') > -1) {
		setTimeout(() => articleEvents(), 2000);
	}

	utils
		.waitForElement('div[data-testid="ConversionPopUp"] button')
		.then((element) => {
			element.addEventListener('click', () => {
				window.optimizely.push({
					type: 'event',
					eventName: 'CONV_Clicks_registration_paywall_CTA',
				});
			});
		});
});
}, "dependencies": []}], "id": "30266860131", "name": null, "commitId": "30301960062", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "19011630586"], "audienceName": null, "changes": null, "id": "30281130126", "integrationSettings": null, "variations": [{"id": "30281130127", "name": null, "actions": [{"viewId": "30272070067", "changes": []}]}, {"id": "30264360152", "name": null, "actions": [{"viewId": "30272070067", "changes": [{"id": "5db79dd0e9dc4a759a992ef8ff9f2054", "type": "custom_code", "value": function($){((w) => {
	const tag = 'cv-3-19';
	const exp = 'NUK 3.19';
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const qa = document.cookie.indexOf('cfQA') > -1;
	const mobile = window.innerWidth < 1280;
	const log = qa
		? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`)
		: () => {};
		
	let price = '£1';

	window.optimizely = window.optimizely || [];

	const utils = {
		waitUntil: (condition, wait = 10000) => {
			return new Promise((resolve, reject) => {
				let stop;

				const timeout =
				wait &&
				setTimeout(() => {
					stop = true;
					reject();
				}, wait);

				const check = () => {
				if (stop) return;
				if (!condition()) return requestAnimationFrame(check);

				clearTimeout(timeout);
				resolve(condition());
				};

				requestAnimationFrame(check);
			});
		}
	};

	utils
		.waitUntil(() => document.querySelector('div[data-testid="ConversionPopUp"] button'), 0)
		.then((element) => {
			document.body.classList.add(tag);
			document.body.classList.add(tag + '-v2');

			const optionsObj = [
				{
					label: 'Create an account',
					title: 'Free',
					list: [
						'<b>Free</b> access to this article'
					]
				},
				{
					label: 'Subscribe',
					title: `£1 for 3 months`,
					list: [
						'<b>£1/month</b> for unlimited access'
					]
				}
			];

			const markup = `
				<div class='${tag}-option-container'>
					${optionsObj.map((option, index) => {
						return `
							<div class='${tag}-option'>
                                <p>${option.label}</p>
								<div class='${tag}-info'>
									<h4>${option.title}</h4>
									<ul>
									${option.list.map(item => {
										return `
											<li>${item}</li>
										`;
									}).join('')}
									</ul>
								</div>
                                ${
                                    index === 0
                                        ? `<div class='${tag}-button-container'></div>`
                                        : `<a href='${window.nuk.article.storefrontConfig}' class='${tag}-subscribe-cta'>Subscribe now</a>`
                                }
							</div>
						`;
					}).join('')}
				</div>
				<div class='${tag}-scroll-bottom active'></div>
			`;

			element.insertAdjacentHTML('beforebegin', markup);

            log('running');

			const sub = document.querySelector('[data-testid="ConversionPopUp"] h4');
			const scrollBottom = document.querySelector(`.${tag}-scroll-bottom`);
			const cta = element;
			const email = document.querySelector('div[data-testid="ConversionPopUp"] input[aria-label="Your email for registration"]');
			const ctaContainer = document.querySelector(`.${tag}-button-container`);
			const ad = document.getElementById('sticky-banner-wrapper');
			const paywall = document.querySelector('[data-testid="ConversionPopUp"] > div:first-child');

			ctaContainer.appendChild(email);
			ctaContainer.appendChild(cta);

			scrollBottom.insertAdjacentHTML('beforeend', document.querySelector(`.${tag}-scroll-bottom`).parentElement.nextElementSibling.outerHTML);

			sub.textContent = 'Two ways to continue reading';
			cta.textContent = 'Continue';
			email.placeholder = 'Enter email address';
			if (ad) scrollBottom.style.bottom = ad.clientHeight + 'px';

			paywall.addEventListener('scroll', () => {
				paywall.scrollTop > 0
					? sub.classList.add(`${tag}-scroll`)
					: sub.classList.remove(`${tag}-scroll`);

				paywall.scrollTop > 145
					? scrollBottom.classList.remove('active')
					: scrollBottom.classList.add('active');

				const ad = document.getElementById('sticky-banner-wrapper');
				if (ad) scrollBottom.style.bottom = ad.clientHeight + 'px';
			});

			const checkAd = setInterval(() => {
				const ad = document.getElementById('sticky-banner-wrapper');
				if (ad) scrollBottom.style.bottom = ad.clientHeight + 'px';
			}, 1000);

			setTimeout(() => clearInterval(checkAd), 10000);

			document.addEventListener('click', (event) => {
				if (event.target.matches(`.${tag}-button-container button`)) {
					if (event.target.innerText.includes('Continue')) {
						const checkError = setInterval(() => {
							document
								.querySelectorAll('form > div')
								.forEach(element => {
									if (element.innerText.includes('You will need to login')) {
										clearInterval(checkError);
										const errorElem = document.querySelector('.cv-3-19 [data-testid="ConversionPopUp"] form > h4 + div + div + div:not(:last-child)');
										if (errorElem) errorElem.style.display = 'block';
										ctaContainer.appendChild(element);
									}
							})
						}, 25);

						setTimeout(() => clearInterval(checkError), 8000);
					}
				}
			});
		});
})(window);
}, "dependencies": []}, {"id": "dd9d05fa8c7746f59f3e6e3f7f059c3d", "type": "append", "selector": "head", "value": "<style>input[aria-label=\"Your email for registration\"] {\n    margin-top: 19px;\n    margin-bottom: 16px;\n    padding: 14px 16px;\n    order: 1;\n}\n.cv-3-19 [data-testid=\"ConversionPopUp\"] > div {\n    padding: 20px 0;\n}\n.cv-3-19 [data-testid=\"ConversionPopUp\"] > div > div {\n    width: 719px;\n}\n.cv-3-19 [data-testid=\"ConversionPopUp\"] h4 {\n    font-size: 24px;\n}\n.cv-3-19 [data-testid=\"ConversionPopUp\"] h4 + div {\n    display: none;\n}\n.cv-3-19 .cv-13-0-email-container {\n    border: 1px solid rgba(0, 0, 0, 0.20);\n}\n.cv-3-19-option-container {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    gap: 16px;\n    margin: 8px 0 16px;\n}\n.cv-3-19-option {\n    border-radius: 4px;\n    border: 1px solid rgba(0, 0, 0, 0.20);\n    background: #FFF;\n    width: 100%;\n    padding: 12px 16px 15px;\n    -webkit-text-size-adjust: 100%;\n}\n.cv-3-19-option:nth-child(2) .cv-3-19-subscribe-cta {\n    display: flex;\n    -webkit-box-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    background-color: rgb(0, 92, 138);\n    border: 0px;\n    color: rgb(255, 255, 255);\n    font-family: Roboto-Medium, sans-serif;\n    font-size: 16px;\n    width: 100%;\n    height: 48px;\n    line-height: 24px;\n    margin: 65px 0px 0;\n    text-align: center;\n    text-decoration: none;\n    transition: background-color 0.25s ease-in-out 0s;\n}\n.cv-3-19-option > p:first-child {\n    font-family: Roboto, sans-serif;\n    font-weight: normal;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 21px;\n    color: #333333;\n    text-align: left;\n    -webkit-text-size-adjust: 100%;\n}\n.cv-3-19-info {\n    padding: 8px 0 0;\n    -webkit-text-size-adjust: 100%;\n}\n.cv-3-19-info h4 {\n    font-family: TimesModern-Regular, TimesModern-Regular-fallback, serif;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 27px;\n    text-align: left;\n    margin: 0;\n    -webkit-text-size-adjust: 100%;\n}\n.cv-3-19-info ul {\n    list-style: none;\n    padding-left: 0;\n    margin: 0;\n    text-align: left;\n    -webkit-text-size-adjust: 100%;\n}\n.cv-3-19-info li {\n    font-family: Roboto, sans-serif;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 18px;\n    color: #535353;\n    background: url(https://d1mgcpums0qvsa.cloudfront.net/NUK/3.16/tick.svg) no-repeat left 5px;\n    padding: 3px 0 0 24px;\n    list-style: none;\n    margin: 0;\n    -webkit-text-size-adjust: 100%;\n}\n.cv-3-19 .cv-13-0-email-container {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    height: 48px;\n}\n.cv-3-19-button-container {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 0;\n    width: 100%;\n    height: 50px;\n    margin: 0;\n}\n.cv-3-19-button-container button {\n    margin: 0;\n    order: 4;\n}\n.cv-3-19-button-container div[data-lastpass-icon-root] {\n    order: 3;\n}\n.cv-3-19 .cv-13-0-cta-overlay {\n    margin: 0\n}\n.cv-3-19 .cv-13-0-email-container {\n    margin: 0\n}\n.cv-3-19 .cv-13-0-email-container.cv-13-0-invalid + p {\n    position: absolute;\n    top: 45px;\n}\n.cv-3-19 .cv-13-0-invalid + p + .cv-13-0-cta-overlay {\n    margin: 0;\n}\n.cv-3-19-button-container button:not(:disabled), .cv-3-19-subscribe-cta {\n    background: #2A6495 !important;\n}\n@media only screen and (max-width:1279px) {\n    .cv-3-19 [data-testid=\"ConversionPopUp\"] {\n        background: #FFF;\n    }\n    .cv-3-19 [data-testid=\"ConversionPopUp\"] form {\n        width: 100%;\n    }\n    .cv-3-19 [data-testid=\"ConversionPopUp\"] > div {\n        padding: 0 0 20px;\n        overflow: scroll;\n    }\n    .cv-3-19 [data-testid=\"ConversionPopUp\"] > div > div {\n        width: 100%;\n        padding: 0 16px;\n        max-height: 340px;\n    }\n    .cv-3-19 [data-testid=\"ConversionPopUp\"] form > h4 + div + div + div {\n        margin-bottom: 20px;\n    }\n    .cv-3-19 [data-testid=\"ConversionPopUp\"] form > h4,\n    .cv-3-19-scroll-bottom {\n        color: #01000D;\n        font-family: TimesModern-Bold, TimesModern-Bold-fallback, serif;\n        font-size: 20px;\n        font-weight: 400;\n        width: calc(100% + 10px);\n        background: #FFF;\n        padding: 20px 0 22px;\n        position: fixed;\n        z-index: 10;\n        height: 57px;\n        left: 0;\n        line-height: 22.5px;\n    }\n    .cv-3-19 [data-testid=\"ConversionPopUp\"] form > h4.cv-3-19-scroll {\n        background: linear-gradient(0deg, rgba(255, 255, 255, 0.00) 1%, rgba(255, 255, 255, 0.98) 35.73%, #FFF 59.79%);\n        height: 89px;\n    }\n    .cv-3-19 [data-testid=\"ConversionPopUp\"] .cv-3-19-scroll-bottom {\n        bottom: 0;\n        left: 0;\n        background: none !important;\n        height: 78px;\n        padding: 22px 0;\n    }\n    .cv-3-19 [data-testid=\"ConversionPopUp\"] .cv-3-19-scroll-bottom.active {\n        background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 1%, rgba(255, 255, 255, 0.98) 35.73%, #FFF 59.79%) !important;\n    }\n    .cv-3-19 [data-testid=\"ConversionPopUp\"] .cv-3-19-scroll-bottom div {\n        font-size: 16px;\n        max-width: none;\n        margin-top: 16px;\n    }\n    .cv-3-19 [data-testid=\"ConversionPopUp\"] .cv-3-19-scroll-bottom  + div{\n        height: 20px;\n        top: 284px;\n    }\n    .cv-3-19 [data-testid=\"ConversionPopUp\"] form > h4 + div + div + div + div {\n        display: none;\n    }\n    .cv-3-19 [data-testid=\"ConversionPopUp\"] > div > div > div:last-child {\n        padding: 0 0 18px;\n    }\n    .cv-3-19-option-container {\n        flex-direction: column;\n        margin: 58px 0 16px;\n        padding-bottom: 60px;\n    }\n    .cv-3-19-button-container { \n        height: auto;;\n    }\n    .cv-3-19-info h4 {\n        display: none;\n    }\n    .cv-3-19-info li {\n        font-family: Roboto, sans-serif;\n        font-weight: 400;\n        font-size: 18px;\n        line-height: 112.5%;\n        color: #01000D;\n        background: none;\n        padding: 0;\n    }\n    .cv-3-19 .cv-13-0-invalid + p + .cv-13-0-cta-overlay {\n        margin: 10px 0 16px;\n    }\n    .cv-3-19-option:nth-child(2) .cv-3-19-subscribe-cta {\n        margin: 22px 0 0;\n    }\n    .cv-3-19-button-container > div:last-child {\n        margin: -5px 0 5px;\n        order: 3;\n    }\n    .cv-3-19 [data-testid=\"ConversionPopUp\"] div > svg {\n        margin-top: -250px;\n    }\n    .cv-12-1.cv-3-19  [data-testid=\"ConversionPopUp\"] {\n        padding: 0 0;\n    }\n    .cv-3-19 [data-testid=\"ConversionPopUp\"] .cv-3-19-scroll-bottom a > svg {\n        vertical-align: middle;\n    }\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "30264360152", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "30266860131"}}], "policy": "single_experiment", "viewIds": ["30272070067"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"id": "DDEA6D2C-F88B-4094-9E53-0C0D4030FB4B", "type": "custom_code", "value": function($){const utils = window.optimizely.get('utils');

utils.waitForElement('body').then(() => {
	setTimeout(() => {
		if (nukt_cmp && nukt_cmp.dataLayers && nukt_cmp.dataLayers[0]['cp.nuk_customer_location_hint']) {
			const location = nukt_cmp.dataLayers[0]['cp.nuk_customer_location_hint'];

			if (location === 'IE') {
				window.optimizely = window.optimizely || [];
				window.optimizely.push({
					"type": "user",
					"attributes": {
						"location": "Ireland"
					}
				});
			}

			if (location === 'UK') {
				window.optimizely = window.optimizely || [];
				window.optimizely.push({
					"type": "user",
					"attributes": {
						"location": "UK"
					}
				});
			}

			if (location === 'GLOBAL') {
				window.optimizely = window.optimizely || [];
				window.optimizely.push({
					"type": "user",
					"attributes": {
						"location": "International"
					}
				});
			}
		}
	}, 3000);
});
}, "dependencies": []}], "id": "30071691333", "name": null, "commitId": "30447470493", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18817253497": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23074782274", "23185140152"], "audienceName": null, "changes": null, "id": "30157190016", "integrationSettings": null, "variations": [{"id": "30045591353", "name": null, "actions": [{"viewId": "30124900020", "changes": [{"id": "25b6694be8af4e7a8ee288d75a6be676", "type": "custom_code", "value": function($){window.sessionStorage.setItem('checkout_mobile_payments', 1);
window.sessionStorage.setItem('new_checkout_flow', 1);
window.sessionStorage.setItem('checkout_bypass_address', 1);
window.sessionStorage.setItem('checkout_removal', 1);
}, "dependencies": []}]}]}, {"id": "30147410005", "name": null, "actions": [{"viewId": "30124900020", "changes": [{"id": "EFB57ABF-99DD-4900-8860-FC607E25E58B", "type": "custom_code", "value": function($){window.sessionStorage.setItem('new_checkout_flow', 1);
window.sessionStorage.setItem('future-checkout', 1);
window.sessionStorage.setItem('journey_option_for_experiment', 'permissions_on_payment')
}, "dependencies": []}]}]}, {"id": "30018551114", "name": null, "actions": [{"viewId": "30124900020", "changes": [{"id": "3D3C853C-2209-41BF-B1A8-2451515B4ED8", "type": "custom_code", "value": function($){window.sessionStorage.setItem('new_checkout_flow', 1);
window.sessionStorage.setItem('future-checkout', 1);
window.sessionStorage.setItem('journey_option_for_experiment', 'permissions_on_confirmation')
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "30045591353", "endOfRange": 3333}, {"entityId": "30147410005", "endOfRange": 6666}, {"entityId": "30018551114", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "30071691333"}}], "policy": "single_experiment", "viewIds": ["30124900020"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"id": "1795B9AF-7D16-4BF2-91E5-6A6D4131A2B1", "type": "custom_code", "value": function($){console.log('NUK 4.7')

const tag = 'cv-4-7';
const utils = {
    waitUntil: (condition, wait = 5000) => {
        return new Promise((resolve, reject) => {
            let stop;

            const timeout =
                wait &&
                setTimeout(() => {
                    stop = true;
                    reject();
                }, wait);

            const check = () => {
                if (stop) return;
                if (!condition()) return requestAnimationFrame(check);

                clearTimeout(timeout);
                resolve(condition());
            };

            requestAnimationFrame(check);
        });
    },
    observerElm: (target, callbackFn) => {
        var config = {
            childList: true,
            attributes: true,
            subtree: true,
        };
        var callback = function(mutationsList, observer) {
            callbackFn(mutationsList, observer);
        };
        var observer = new MutationObserver(callback);
        observer.observe(target, config);
    },
    sendEvent: (label) => {
        window.optimizely.push({
            type: 'event',
            eventName: label,
        });
    }
};

const pathName = window.location.pathname;

utils
    .waitUntil(() => document.body, 0)
    .then((body) => {
        body.classList.add(`${tag}`);

        if (pathName.includes('checkout')) {
            utils
                .waitUntil(() => document.querySelector('.abandonWrapper'), 0)
                .then((main) => {
                    utils.observerElm(main, () => {
                        paymentFun();
                    });
                });

            let creditCard = false;
            let debitCard = false;
            let paypal = false;

            function paymentFun() {
                document.querySelectorAll('#credit-card, #direct-debit, #paypal').forEach(function(card) {
                    card.addEventListener('click', function(event) {
                        const cardClick = event.target;
                        if (cardClick.closest('#credit-card') && !creditCard) {
                            console.log('conv_4_7_card_pay_confirmation');
                            utils.sendEvent('conv_4_7_card_pay_confirmation');
                            creditCard = true;
                        } else if (cardClick.closest('#direct-debit') && !debitCard) {
                            console.log('conv_4_7_debit_pay_confirmation');
                            utils.sendEvent('conv_4_7_debit_pay_confirmation');
                            debitCard = true;
                        } else if (cardClick.closest('#paypal') && !paypal) {
                            console.log('conv_4_7_paypal_pay_confirmation');
                            utils.sendEvent('conv_4_7_paypal_pay_confirmation');
                            paypal = true;
                        }
                    });
                });
            };

            let paypalForm = false;
            let debitCardForm = false;
            utils
                .waitUntil(() => document.querySelector('main'), 0)
                .then((mainSec) => {
                    utils.observerElm(mainSec, () => {
                        var paypalCTA = setInterval(() => {
                            if (document.querySelector('[data-testid="Pay with Paypal"]')) {
                                clearInterval(paypalCTA);
                                document.querySelector('[data-testid="Pay with Paypal"]').addEventListener('click', () => {
                                    if (!paypalForm) {
                                        console.log('conv_4_7_paypal_pay_confirmation')
                                        utils.sendEvent('conv_4_7_paypal_pay_confirmation');
                                        paypalForm = true;
                                    }
                                })
                            };
                        }, 200)

                        document.querySelectorAll('button').forEach(function(debit) {
                            if (debit.innerText == "Direct Debit") {
                                debit.addEventListener('click', () => {
                                    if (!debitCardForm) {
                                        console.log('conv_4_7_debit_pay_confirmation')
                                        utils.sendEvent('conv_4_7_debit_pay_confirmation');
                                        debitCardForm = true;
                                    }
                                })
                            }
                        });
                    });
                })

            utils
                .waitUntil(() => document.querySelector('.StripeElement iframe'), 0)
                .then((gpay) => {
                    focus();
                    const listener = window.addEventListener('blur', () => {
                        if (document.activeElement === gpay && !gpay.classList.contains(`${tag}-evtClicked`)) {
                            console.log('conv_4_7_google_pay_confirmation');
                            utils.sendEvent('conv_4_7_google_pay_confirmation');
                            gpay.classList.add(`${tag}-evtClicked`);
                        }
                        window.removeEventListener('blur', listener);
                    });
                })
        }
    });
}, "dependencies": []}], "id": "30418860542", "name": null, "commitId": "30453220763", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "22391750619", "21175821657", "30402280818", "20892792337"], "audienceName": null, "changes": null, "id": "30413800556", "integrationSettings": null, "variations": [{"id": "30405580547", "name": null, "actions": [{"viewId": "30396320546", "changes": []}]}, {"id": "30396320547", "name": null, "actions": [{"viewId": "30396320546", "changes": [{"id": "2c1e95bd7259499887dfc86e8457a2e5", "type": "custom_code", "value": function($){((w) => {
    const tag = 'cv-4-7';
    const exp = 'NUK 4.7';
    const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
    const qa = document.cookie.indexOf('cfQA') > -1;
    const log = qa ?
        Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) :
        () => {};
    const img = `https://d1mgcpums0qvsa.cloudfront.net/NUK/4.7/`;

    const utils = {
        waitUntil: (condition, wait = 5000) => {
            return new Promise((resolve, reject) => {
                let stop;

                const timeout =
                    wait &&
                    setTimeout(() => {
                        stop = true;
                        reject();
                    }, wait);

                const check = () => {
                    if (stop) return;
                    if (!condition()) return requestAnimationFrame(check);

                    clearTimeout(timeout);
                    resolve(condition());
                };

                requestAnimationFrame(check);
            });
        },
        observerElm: (target, callbackFn) => {
            var config = {
                childList: true,
                attributes: true,
                subtree: true,
            };
            var callback = function(mutationsList, observer) {
                callbackFn(mutationsList, observer);
            };
            var observer = new MutationObserver(callback);
            observer.observe(target, config);
        },

        sendSegment: (label, value) => {
            window.optimizely.push({
                "type": "user",
                "attributes": {
                    [label]: value
                }
            });
            log(`${exp} Segment event fire : ${label}`);
        }
    };

    log("running")

    const url = window.location.origin;
    const pathName = window.location.pathname;
    const payment = `<div class="${tag}-payment">
        <div class="${tag}-icons">
            <img src="${img}mastercard.svg" class="${tag}-mastercard" alt="" />
            <img src="${img}Visa.svg" class="${tag}-visa" alt="" />
            <img src="${img}Amex.svg" class="${tag}-amex" alt="" />
            <img src="${img}Apple pay.svg" class="${tag}-applepay" alt="" />
            <img src="${img}GooglePay.svg" class="${tag}-googlepay" alt="" />
        </div>
    </div>`

    utils
        .waitUntil(() => document.body, 0)
        .then((body) => {
            body.classList.add(`${tag}`);

            // IRELANG 
            if (url == 'https://store.thetimes.ie') {
                utils
                    .waitUntil(() => document.querySelector('.feature-column .prompt'), 0)
                    .then((headline) => {
                        if (!document.querySelector(`.${tag}-payment`)) {
                            headline.insertAdjacentHTML('afterend', payment);
                        }
                    });
            }
        });
})(window);
}, "dependencies": []}, {"id": "ed4899277be4411a9d4572c135ed6ea7", "type": "append", "selector": "head", "value": "<style>.cv-4-7-icons img {\n\tmargin-right: 1px;\n}\n.cv-4-7-payment{\n\tmargin-top: 23px;\n}\n@media (min-width:768px) {\n\t.cv-4-7-icons .cv-4-7-applepay,\n\t.cv-4-7-icons .cv-4-7-googlepay{\n\t\tdisplay: none;\n\t}\n}\n@media (max-width : 767px) {\n\t.cv-4-7-icons .cv-4-7-mastercard,\n\t.cv-4-7-icons .cv-4-7-visa,\n\t.cv-4-7-icons .cv-4-7-amex{\n\t\tdisplay: none;\n\t}\n\t.cv-4-7 .custom_left_aligned_content .scroll_arrow{\n\t\tmargin-top: -34px;\n\t}\n\t.cv-4-7-icons img {\n\t\tmargin-right: 4px;\n\t}\n\t.cv-4-7-payment {\n\t\tmargin-top: 12px;\n\t}\n\t.cv-4-7-payment .cv-4-7-googlepay{\n\t\tmargin-right: 0;\n\t}\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "30396320547", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "30418860542"}}], "policy": "single_experiment", "viewIds": ["30396320546"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "27302940776", "name": null, "commitId": "30440830360", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "21207170142", "25469260064"], "audienceName": null, "changes": null, "id": "27272601106", "integrationSettings": null, "variations": [{"id": "27272520935", "name": null, "actions": [{"viewId": "27309091057", "changes": [{"id": "9c755a05aee947a580a58f005cbbc33c", "type": "custom_code", "value": function($){((w) => {
    const tag = 'nur-11-1-control';
    const exp = 'NUR 11.1 control';
    const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
    const qa = document.cookie.indexOf('cfQA') > -1;
    const log = qa
        ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`)
        : () => { };

    window.optimizely = window.optimizely || [];

    const utils = {
        waitUntil: (condition, wait = 5000) => {
            return new Promise((resolve, reject) => {
                let stop;

                const timeout =
                    wait &&
                    setTimeout(() => {
                        stop = true;
                        reject();
                    }, wait);

                const check = () => {
                    if (stop) return;
                    if (!condition()) return requestAnimationFrame(check);

                    clearTimeout(timeout);
                    resolve(condition());
                };

                requestAnimationFrame(check);
            });
        },

        observerElm: (target, callbackFn) => {
            var config = {
                childList: true,
                attributes: true,
                subtree: true,
            };
            var callback = function (mutationsList, observer) {
                callbackFn(observer);
            };
            var observer = new MutationObserver(callback);
            observer.observe(target, config);
        },

        sendEvent: (label) => {
			window.optimizely.push({
				type: 'event',
				eventName: label,
			});
			log(`${exp} tracking event fire : ${label}`);
		},

		sendSegment: (label, value) => {
            window.optimizely.push({
                "type": "user",
                "attributes": {
                    [label]: value
                }
            });
            log(`${exp} Segment event fire : ${label}`);
        }
    };

    utils
        .waitUntil(() => document.body, 0)
        .then(() => {
            document.body.classList.add(tag);

            checkStep();
            utils.observerElm(document.body, function () {
                checkStep();
            });

            window.addEventListener("beforeunload", function () {
                if (document.querySelector(`.rec-carousel-item-0 a`)) {
                    utils.sendEvent('conv-exits-on-page-3-timeplus');
                }
            });

            function checkStep() {
                const aTag = document.querySelectorAll('a');
                if (aTag.length > 0) {
                    aTag.forEach(function (a) {
                        if (a.innerText.includes('Go to Times+')) {
                            a.onclick = function () {
                                utils.sendEvent('conv-clicks-times-plus-link');
                            };
                        }
                    });
                }

                const offer1 = document.querySelector('.rec-carousel-item-0 a'),
                    offer2 = document.querySelector('.rec-carousel-item-1 a'),
                    offer3 = document.querySelector('.rec-carousel-item-2 a');
                    
                if (offer1) {
                    offer1.onclick = function () {
                        utils.sendEvent('conv-clicks-offer-1');
                    };
                }

                if (offer2) {
                    offer2.onclick = function () {
                        utils.sendEvent('conv-clicks-offer-2');
                    };
                }

                if (offer3) {
                    offer3.onclick = function () {
                        utils.sendEvent('conv-clicks-offer-3');
                    };
                }
            }
        });
})(window);
}, "dependencies": []}]}]}, {"id": "27307021201", "name": null, "actions": [{"viewId": "27309091057", "changes": [{"id": "9e09d178a1ca41b9a443ce3e61eab9bf", "type": "custom_code", "value": function($){((w) => {
    const tag = 'nur-11-1';
    const exp = 'NUR 11.1';
    const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
    const qa = document.cookie.indexOf('cfQA') > -1;
    const log = qa
        ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`)
        : () => { };
    const img = `https://d1mgcpums0qvsa.cloudfront.net`;

    window.optimizely = window.optimizely || [];

    const utils = {
        waitUntil: (condition, wait = 5000) => {
            return new Promise((resolve, reject) => {
                let stop;

                const timeout =
                    wait &&
                    setTimeout(() => {
                        stop = true;
                        reject();
                    }, wait);

                const check = () => {
                    if (stop) return;
                    if (!condition()) return requestAnimationFrame(check);

                    clearTimeout(timeout);
                    resolve(condition());
                };

                requestAnimationFrame(check);
            });
        },

        observerElm: (target, callbackFn) => {
            var config = {
                childList: true,
                attributes: true,
                subtree: true,
            };
            var callback = function (mutationsList, observer) {
                callbackFn(observer);
            };
            var observer = new MutationObserver(callback);
            observer.observe(target, config);
        },

        sendEvent: (label) => {
			window.optimizely.push({
				type: 'event',
				eventName: label,
			});
			log(`${exp} tracking event fire : ${label}`);
		},

		sendSegment: (label, value) => {
            window.optimizely.push({
                "type": "user",
                "attributes": {
                    [label]: value
                }
            });
            log(`${exp} Segment event fire : ${label}`);
        }
    };

    // Fetch data
    const puzzleData = [];

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var parser = new DOMParser();

            var doc = parser.parseFromString(xhttp.responseText.match(/<body[^>]*>((.|[\n\r])*)<\/body>/)[0], 'text/html');

            function getPuzzleName(key) {
                switch (key) {
                    case 0:
                        return ["Warm-up Sudoku", "Sunday"];
                    case 1:
                        return ["Sudoku", "Easy"];
                    case 2:
                        return ["Sudoku", "Mild"];
                    case 3:
                        return ["Extra Sudoku", "Easy"];
                    case 4:
                        return ["Sudoku", "Mild"];
                    case 5:
                        return ["Sudoku", "Mild"];
                    case 6:
                        return ["Sudoku", "Easy"];
                }
            }

            const puzzleName = [
                {
                    name: "Times Concise",
                    status: '',
                },
                {
                    name: getPuzzleName(new Date().getDay(23, 6, 2024))[0],
                    status: getPuzzleName(new Date().getDay())[1],
                },
                {
                    name: "Polygon",
                    status: '',
                },
                {
                    name: "Suko",
                    status: '',
                }
            ];

            const waitGameName = setInterval(() => {
                if (doc.querySelector(`[data-test-id="single-card"] a + div`)) {
                    clearInterval(waitGameName);

                    puzzleName.forEach(puzzle => {
                        const cards = doc.querySelectorAll('[data-test-id="single-card"]');

                        for (let i = 0; i < cards.length; i++) {

                            const card = cards[i];

                            if (card.querySelector('a').innerText == puzzle.name && card.querySelector('a + div').innerText.includes(puzzle.status)) {

                                const Name = card.querySelector('a').innerText;
                                const Url = card.querySelector('a').getAttribute('href');
                                const Day = card.querySelector('a + div > div').innerHTML;

                                puzzleData.push({
                                    name: Name,
                                    url: Url,
                                    day: Day,
                                });
                                break;
                            }
                        }
                    });
                }
            }, 1000);

        }
    };

    xhttp.open("GET", "https://www.thetimes.com/puzzles", true);
    xhttp.send();

    utils
        .waitUntil(() => document.body, 1000)
        .then(() => {
            document.body.classList.add(tag);

            checkStep();
            utils.observerElm(document.body, function () {
                if(puzzleData.length > 0){
                    checkStep();
                }
            });

            window.addEventListener("beforeunload", function () {
                if (document.querySelector(`.${tag}-step3`)) {
                    utils.sendEvent('conv-exits-on-page-3-puzzles');
                }
            });

            function checkStep() {
                const step1Class = `${tag}-step1`,
                    step2Class = `${tag}-step2`,
                    step3Class = `${tag}-step3`,
                    step4Class = `${tag}-step4`;
                const pathname = window.location.pathname;
                const progressBar = document.querySelector('[data-testid="progressBar"]');
                const stepText = progressBar.previousElementSibling.querySelector('p span');
                const contactLink = progressBar.previousElementSibling.querySelector('p + div [data-testid="progressContactUsLink"]');
                const backBtn = progressBar.previousElementSibling.querySelector('button');
                if (progressBar && stepText) {
                    if (pathname == '/account/welcome' || pathname == '/account/welcome/') {
                        if (!document.body.classList.contains(step1Class)) {
                            document.body.classList.remove(step2Class, step3Class, step4Class);
                            document.body.classList.add(step1Class);
                            progressBar.style.width = "25%";
                            window.localStorage.removeItem(`${tag}-step3-complated`);
                        }
                        if (!stepText.innerText.includes("Step 1 of 4")) {
                            stepText.innerText = "Step 1 of 4";
                        }
                    } else if (pathname == '/account/welcome/stage-two') {
                        if (!document.body.classList.contains(step2Class)) {
                            document.body.classList.remove(step1Class, step3Class, step4Class);
                            document.body.classList.add(step2Class);
                            progressBar.style.width = "50%";
                        }
                        if (!stepText.innerText.includes("Step 2 of 4")) {
                            stepText.innerText = "Step 2 of 4";
                        }
                    } else if (pathname == '/account/welcome/stage-three') {
                        if (!window.localStorage.getItem(`${tag}-step3-complated`)) {
                            step3Fun();
                        } else {
                            step4Fun();
                        }

                        function step3Fun() {
                            if (!document.body.classList.contains(step3Class)) {
                                document.body.classList.remove(step1Class, step2Class, step4Class);
                                document.body.classList.add(step3Class);
                                progressBar.style.width = "75%";
                            }
                            if (!stepText.innerText.includes("Step 3 of 4")) {
                                stepText.innerText = "Step 3 of 4";
                            }

                            if (!document.querySelector(`.${tag}-exclusive-puzzle`)) {
                                progressBar.closest('section').insertAdjacentHTML('beforeend', `<div class="${tag}-exclusive-puzzle">
                                    <div class="${tag}-container">
                                        <h1 class="${tag}-title">Get exclusive puzzle access</h1>
                                        <p class="${tag}-sub-title">Play today’s puzzles now</p>
                                        <div class="${tag}-grid-item-wrapper">
                                            <div class="${tag}-grid-item">
                                                <img src="${img}/NUR/11.1/Crossword.jpg" />
                                                <div class="${tag}-content">
                                                    <h3>Crossword</h3>
                                                    <p>Looking for a quick mental workout? Try our concise crossword.</p>
                                                </div>
                                                <div class="${tag}-button">
                                                    <a class="${tag}-cta" data-id="Crossword" href="${puzzleData[0].url}">Play now</a>
                                                </div>
                                            </div>
                                            <div class="${tag}-grid-item">
                                                <img src="${img}/NUR/11.1/Sudoku.jpg" />
                                                <div class="${tag}-content">
                                                    <h3>Sudoku</h3>
                                                    <p>The classic logic puzzle. The rules are simple, the possibilities are endless.</p>
                                                </div>
                                                <div class="${tag}-button">
                                                    <a class="${tag}-cta" data-id="Sudoku" href="${puzzleData[1].url}">Play now</a>
                                                </div>
                                            </div>
                                            <div class="${tag}-grid-item">
                                                <img src="${img}/NUR/11.1/Polygon.jpg" />
                                                <div class="${tag}-content">
                                                    <h3>Polygon</h3>
                                                    <p>How many words can you make from the letters in our word wheel puzzle?</p>
                                                </div>
                                                <div class="${tag}-button">
                                                    <a class="${tag}-cta" data-id="Polygon" href="${puzzleData[2].url}">Play now</a>
                                                </div>
                                            </div>
                                            <div class="${tag}-grid-item">
                                                <img src="${img}/NUR/11.1/Suko.jpg" />
                                                <div class="${tag}-content">
                                                    <h3>Suko</h3>
                                                    <p>Fill the nine squares with nine digits so they all add up.</p>
                                                </div>
                                                <div class="${tag}-button">
                                                    <a class="${tag}-cta" data-id="Suko" href="${puzzleData[3].url}">Play now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`);
                            }

                            if (contactLink && !document.querySelector(`.${tag}-nextBtn`)) {
                                contactLink.insertAdjacentHTML('afterend', `<button type="button" class="${tag}-nextBtn"><span>Next</span></button>`);
                                contactLink.parentElement.classList.add(`${tag}-nextBtn-wrapper`)
                                document.querySelector(`.${tag}-nextBtn`).onclick = function () {
                                    window.localStorage.setItem(`${tag}-step3-complated`, true);
                                    step4Fun();
                                };
                            }
                        }

                        function step4Fun() {
                            if (!document.body.classList.contains(step4Class)) {
                                document.body.classList.remove(step1Class, step2Class, step3Class);
                                document.body.classList.add(step4Class);
                                progressBar.style.width = "100%";
                            }
                            if (!stepText.innerText.includes("Step 4 of 4")) {
                                stepText.innerText = "Step 4 of 4";
                            }

                            if (backBtn && !document.querySelector(`.${tag}-backBtn`)) {
                                backBtn.insertAdjacentHTML('beforebegin', `<div class="${tag}-backBtn">${backBtn.outerHTML}</div>`);
                                document.querySelector(`.${tag}-backBtn`).nextElementSibling.style.display = "none";
                                document.querySelector(`.${tag}-backBtn`).onclick = function () {
                                    document.querySelector(`.${tag}-backBtn`).nextElementSibling.style.display = "";
                                    window.localStorage.removeItem(`${tag}-step3-complated`);
                                    step3Fun();
                                };
                            }else if(document.querySelector(`.${tag}-backBtn`)){
                                document.querySelector(`.${tag}-backBtn`).nextElementSibling.style.display = "none";
                            }
                        }
                    }
                }

                const crosswordPlay = document.querySelector(`.${tag}-cta[data-id="Crossword"]`);
                const sudokuPlay = document.querySelector(`.${tag}-cta[data-id="Sudoku"]`);
                const polygonPlay = document.querySelector(`.${tag}-cta[data-id="Polygon"]`);
                const sukoPlay = document.querySelector(`.${tag}-cta[data-id="Suko"]`);
            
                if (crosswordPlay) {
                    crosswordPlay.onclick = function () {
                        utils.sendEvent('conv-clicks-puzzle-1-in-onboarding');
                    };
                }
                if (sudokuPlay) {
                    sudokuPlay.onclick = function () {
                        utils.sendEvent('conv-clicks-puzzle-2-in-onboarding');
                    };
                }
                if (polygonPlay) {
                    polygonPlay.onclick = function () {
                        utils.sendEvent('conv-clicks-puzzle-3-in-onboarding');
                    };
                }
                if (sukoPlay) {
                    sukoPlay.onclick = function () {
                        utils.sendEvent('conv-clicks-puzzle-4-in-onboarding');
                    };
                }
                
                // Clicks times plus link
                const aTimesTag = document.querySelectorAll('a');
                if (aTimesTag.length > 0) {
                    aTimesTag.forEach(function (a) {
                        if (a.innerText.includes('Go to Times+')) {
                            a.onclick = function () {
                                utils.sendEvent('conv-clicks-times-plus-link');
                            };
                        }
                    });
                }

                const offer1 = document.querySelector('.rec-carousel-item-0 a'),
                    offer2 = document.querySelector('.rec-carousel-item-1 a'),
                    offer3 = document.querySelector('.rec-carousel-item-2 a');
                if (offer1) {
                    offer1.onclick = function () {
                        utils.sendEvent('conv-clicks-offer-1');
                    };
                }

                if (offer2) {
                    offer2.onclick = function () {
                        utils.sendEvent('conv-clicks-offer-2');
                    };
                }

                if (offer3) {
                    offer3.onclick = function () {
                        utils.sendEvent('conv-clicks-offer-3');
                    };
                }
            }
        });
})(window);
}, "dependencies": []}, {"id": "d15fc057d3794fc798b1dcab079d8f23", "type": "append", "selector": "head", "value": "<style>/* step 3 */\n.nur-11-1-nextBtn {\n    display: none;\n}\n\n.nur-11-1-step3 [data-testid=\"progressContactUsLink\"] {\n    display: none;\n}\n\n.nur-11-1-step3 .nur-11-1-nextBtn-wrapper {\n    position: unset;\n    display: initial;\n    margin: 0;\n}\n\n.nur-11-1-step3 .nur-11-1-nextBtn {\n    transition-property: background-color;\n    transition-duration: 200ms;\n    transition-timing-function: cubic-bezier(0, 0, 0.5, 1);\n    min-height: 32px;\n    min-width: 64px;\n    appearance: none;\n    background-color: rgb(21, 115, 162);\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n    border: none;\n    display: block;\n    font-family: Roboto;\n    font-size: 12px;\n    line-height: normal;\n}\n\n.nur-11-1-step3 .nur-11-1-nextBtn:hover {\n    background-color: rgb(43, 128, 170);\n}\n\n.nur-11-1-step3 .BodyContainer section>div:not(:first-child) {\n    display: none;\n}\n\n/* step 4 */\n.nur-11-1-backBtn {\n    display: none;\n}\n\n.nur-11-1-step4 .nur-11-1-backBtn {\n    display: block;\n}\n\n.nur-11-1-step4 .nur-11-1-backBtn button {\n    display: inline-grid !important;\n}\n\n/* Puzzle section */\n.nur-11-1-exclusive-puzzle {\n    margin: 19px 0 64px;\n    display: none;\n}\n\n.nur-11-1-step3 .nur-11-1-exclusive-puzzle{\n    display: block !important;\n}\n\n.nur-11-1-title {\n    color: #01000D;\n    font-family: \"TimesModern-bold\";\n    font-size: 32px;\n    font-weight: 400;\n    line-height: 1.75;\n}\n\n.nur-11-1-sub-title {\n    color: #696969;\n    font-family: 'Roboto';\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 18px;\n}\n\n.nur-11-1-grid-item-wrapper {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 23px;\n    width: 100%;\n    max-width: 983px;\n}\n\n.nur-11-1-grid-item {\n    width: calc(25% - 15px);\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 16px;\n}\n\n.nur-11-1-grid-item .nur-11-1-content,\n.nur-11-1-button {\n    padding: 0 12px;\n}\n\n.nur-11-1-grid-item .nur-11-1-content {\n    height: 100%;\n}\n\n.nur-11-1-grid-item>img {\n    width: 100%;\n}\n\n.nur-11-1-grid-item h3 {\n    color: #1D1D1B;\n    font-family: \"Times Modern\";\n    font-size: 18px;\n    font-weight: 700;\n    line-height: 20px;\n    margin-bottom: 7px;\n    margin-top: 12px;\n}\n\n.nur-11-1-grid-item p {\n    color: #333333;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 21px;\n    margin-bottom: 20px;\n}\n\n.nur-11-1-cta {\n    width: 100%;\n    border: 2px solid #000;\n    color: #000;\n    text-align: center;\n    font-family: Roboto;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 24px;\n    display: block;\n    padding: 10px 16px;\n}\n\n.nur-11-1-cta:hover {\n    background-color: #ffffff;\n}\n\n.nur-11-1-container {\n    width: 100%;\n    margin: 0 auto;\n    padding: 0 20px;\n}\n\n@media screen and (min-width: 768px) {\n    .nur-11-1-container {\n        max-width: 860px;\n    }\n}\n\n@media screen and (min-width: 1090px) {\n    .nur-11-1-container {\n        max-width: 1064px;\n    }\n}\n\n@media screen and (min-width: 1320px) {\n    .nur-11-1-container {\n        max-width: 1220px;\n    }\n}\n\n@media screen and (max-width: 767px) {\n    .nur-11-1-exclusive-puzzle {\n        margin: 15px 0 76px;\n    }\n\n    .nur-11-1-container {\n        padding: 0 15px;\n    }\n\n    .nur-11-1-grid-item-wrapper {\n        flex-wrap: wrap;\n        margin-top: 19px;\n    }\n\n    .nur-11-1-grid-item {\n        width: calc(50% - 10px);\n        margin-bottom: 15px;\n    }\n\n    .nur-11-1-title {\n        font-size: 24px;\n        line-height: 38.4px;\n        margin-bottom: 7px;\n    }\n\n    .nur-11-1-sub-title {\n        font-size: 16px;\n        line-height: 18px;\n    }\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "27307021201", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "27302940776"}}], "policy": "single_experiment", "viewIds": ["27309091057"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "30449590335", "name": null, "commitId": "30407710817", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "21207170142", "30028220132", "22391750619"], "audienceName": null, "changes": null, "id": "30459870068", "integrationSettings": null, "variations": [{"id": "30440410226", "name": null, "actions": [{"viewId": "30467120094", "changes": [{"id": "619448ce96844e92a1812bb7416e7ce5", "type": "custom_code", "value": function($){((w) => {
    const tag = 'nur-9-5';
    const exp = 'NUR 9.5';
    const qa = document.cookie.indexOf('cfQA') > -1;
    const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
    const log = qa ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) : () => { };

    const utils = {
        waitUntil: (condition, wait = 40000) => {
            return new Promise((resolve, reject) => {
                let stop;

                const timeout =
                    wait && setTimeout(() => {
                        stop = true;
                        reject();
                    }, wait);

                const check = () => {
                    if (stop) return;
                    if (!condition()) return requestAnimationFrame(check);

                    clearTimeout(timeout);
                    resolve(condition());
                };

                requestAnimationFrame(check);
            });
        },

        sendEvent: (label) => {
            window.optimizely.push({
                type: 'event',
                eventName: label,
            });
            log(`${exp} tracking event fire : ${label}`);
        },

        sendSegment: (label, value) => {
            window.optimizely.push({
                "type": "user",
                "attributes": {
                    [label]: value
                }
            });
            log(`${exp} Segment event fire : ${label} : ${value}`);
        }
    };

    var elemCheckInterval = setInterval(function () {
        const reactElem = document.querySelector('#react-app');
        if (reactElem) {
            log('Running');
            
            window.addEventListener('click', function (e) {
                if (e.target.closest("a[href*='/article/']")) {
                    utils.sendEvent('clicks-on-any-article-on-the-sport-page');
                }
            });

        }

    },100);
    setTimeout(function(){
        clearInterval(elemCheckInterval);
    },20000);

})(window);
}, "dependencies": []}]}]}, {"id": "30436380348", "name": null, "actions": [{"viewId": "30467120094", "changes": [{"id": "cf671ee201f641969851206a8bb6be5c", "type": "custom_code", "value": function($){((w) => {
    const tag = 'nur-9-5';
    const exp = 'NUR 9.5';
    const qa = document.cookie.indexOf('cfQA') > -1;
    const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
    const log = qa ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) : () => { };

    const utils = {
        waitUntil: (condition, wait = 40000) => {
            return new Promise((resolve, reject) => {
                let stop;

                const timeout =
                    wait && setTimeout(() => {
                        stop = true;
                        reject();
                    }, wait);

                const check = () => {
                    if (stop) return;
                    if (!condition()) return requestAnimationFrame(check);

                    clearTimeout(timeout);
                    resolve(condition());
                };

                requestAnimationFrame(check);
            });
        },

        sendEvent: (label) => {
            window.optimizely.push({
                type: 'event',
                eventName: label,
            });
            log(`${exp} tracking event fire : ${label}`);
        },

        sendSegment: (label, value) => {
            window.optimizely.push({
                "type": "user",
                "attributes": {
                    [label]: value
                }
            });
            log(`${exp} Segment event fire : ${label} : ${value}`);
        }
    };

    const query = `
	query GetRecommendedArticles($publisher: Publisher! $recomArgs: RecommendationsParameters!) {
		recommendations(publisher: $publisher, recomArgs: $recomArgs) {
			recommendedArticles {
				url
				headline
                label
				media {
					... on Image {
						crops(cropsArguments: [{ ratio: SIXTEEN_BY_NINE }]) {
							url
							alt
							aspectRatio
						}
					}
					... on Video {
						videoId
						posterImage {
							crops(cropsArguments: [{ ratio: SIXTEEN_BY_NINE }]) {
								url
								alt
								aspectRatio
							}
						}
					}
				}
			}
		}
	}
	`;

    const CPN_ID_KEY = 'eid';

    const decodeCookie = value => {
        if (!value) return;

        try {
            return decodeURIComponent(value);
        } catch (e) {
            return;
        }
    };

    const parseCookie = (
        value,
        valueSeparator,
        paramSeparator
    ) => {
        value = decodeCookie(value) || '';

        return value.split(valueSeparator).reduce((res, param) => {
            const parts = param.split(paramSeparator);
            res[parts[0]] = parts[1];
            return res;
        }, {});
    };

    const getCpnId = (value) => {
        const cookie = parseCookie(value, '&', '=');
        return cookie[CPN_ID_KEY] || null;
    };

    const getRecommendedArticles = (experienceId) => {
        const userId = getCpnId(window.nuk.getCookieValue('acs_tnl'));
        const articleId = '1';

        const recomArgs = {
            userId,
            articleId,
            experienceId: experienceId,
            section: "sport"
        };

        const variables = {
            publisher: 'TIMES',
            recomArgs
        };

        const apiUrl = window.__TIMES_CONFIG__.newskitApi.url;
        const apiKey = window.__TIMES_CONFIG__.newskitApi.token;

        const recData = fetch(apiUrl, {
            headers: {
                'apollographql-client-name': 'optimizely',
                'apollographql-client-version': `${window.__TIMES_CONFIG__.environmentName}-${window.__TIMES_CONFIG__.build.number}`,
                'X-API-KEY': apiKey,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ query, variables })
        }).then(response => {
            if (!response.ok) {
                console.error(
                    `[GraphQL error]: ${response.status} Message ${response.statusText}`,
                    response
                );
                throw new Error('EAPIFAILURE');
            }
            return response.json();
        }).then(response => {
            if (response.errors) {
                response.errors.map(error => {
                    console.error(
                        `[GraphQL error]: Message ${error.message}`,
                        error
                    );
                });
                throw new Error('EAPIFAILURE');
            }
            return response.data;
        });
        return recData;
    };

    var interval = setInterval(function () {
        if (window.nuk && window.__TIMES_CONFIG__) {
            clearInterval(interval);
            getRecommendedArticles('most_commented').then((result) => {
                const articles = result.recommendations.recommendedArticles;

                var elemCheckInterval = setInterval(function () {
                    const reactElem = document.querySelector('#react-app');
                    if (reactElem && !reactElem.querySelector(`.${tag}-most-commented`)) {
                        log('Running');
                        reactElem.insertAdjacentHTML('beforeend', `<section class="${tag}-most-commented">
                            <div class="${tag}-container">
                                <div class="title-commented">
                                    <h3 class="title">Most Commented</h3>
                                </div>
                                <div class="${tag}-commented-section">
                                    ${articles.map((article, index) => {
                            if (index < 5)
                                return (
                                    `<div class="section-box">
                                                    <a href="${article.url}" class="img-box">
                                                        <img src="${article.media.crops ? article.media.crops[0].url : article.media.posterImage.crops[0].url}&crop=3488%2C2325%2C0%2C124&resize=750" alt="" />
                                                    </a>
                                                    <div class="box-info">
                                                        <div class="slot">
                                                            <div class="top">
                                                                <span class="number">${index + 1}.</span>
                                                            </div>
                                                            <div class="name">
                                                                ${article.label ? `<span class="category">${article.label}</span>` : ''}
                                                            </div>
                                                            <a href="${article.url}" class="headline">
                                                                <span class="info">
                                                                    ${article.headline}
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <a href="#" class="sports_category">
                                                            <span class="sport">Formula One</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr />
                                            `);
                            return '';
                        }).join('')}
                                </div>
                            </div>
                        </section>`);

                        const targetElement = document.querySelector(`.${tag}-most-commented`);
                        var isFire = false;
                        window.addEventListener('scroll', () => {
                            if (targetElement && isElementPartiallyInViewport(targetElement) && !isFire) {
                                utils.sendEvent('scrolls-to-see-most-commented-section');
                                utils.sendSegment('scrolls-to-see-most-commented-section', 'Yes');
                                isFire = true;
                            }
                        });

                        targetElement.querySelectorAll('a').forEach(function (aTag) {
                            aTag.addEventListener('click', function () {
                                utils.sendEvent('clicks-on-article-in-most-commented-rail');
                            });
                        });

                        window.addEventListener('click', function (e) {
                            if (e.target.closest("a[href*='/article/']")) {
                                utils.sendEvent('clicks-on-any-article-on-the-sport-page');
                            }
                        });

                        function isElementPartiallyInViewport(el) {
                            const rect = el.getBoundingClientRect();
                            const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
                            const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

                            const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
                            const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

                            return (vertInView && horInView);
                        }

                        window.addEventListener('popstate', function () {
                            location.reload();
                        });
                    }

                    function isSafari() {
                        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                    }
                    
                    if (isSafari()) {
                        document.body.classList.add(`${tag}-safari`);
                    }
                },100);
                setTimeout(function(){
                    clearInterval(elemCheckInterval);
                },20000);
            });
        }
    }, 50);

})(window);
}, "dependencies": []}, {"id": "26ab67bc5c5f4431bbc2649651abbac8", "type": "append", "selector": "head", "value": "<style>.nur-9-5-most-commented {\n    margin-top: -48px;\n    padding-bottom: 48px;\n}\n\n.nur-9-5-container {\n    max-width: 1144px;\n    margin: auto;\n}\n.nur-9-5-most-commented .title-commented{\n    border-top:1px solid #333;\n    border-bottom: 1px dashed #CCC;\n    border-radius: 0px;\n    display: flex;\n    height: 100%;\n    align-items: center;\n    min-height: 48px;\n    padding: 13px 0;\n    margin-bottom: 14px;\n}\n.nur-9-5-most-commented .title-commented h3{\n    color: #007a3f;\n    font-family: Times Modern;\n    font-size: 24px;\n    line-height: 31.5px;\n    font-weight: 800;\n}\n.nur-9-5-commented-section{\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n}\n.nur-9-5-commented-section .section-box{\n    width: calc(25% - 76px);\n    display: flex;\n    flex-direction: column;\n}\n.nur-9-5-commented-section hr {\n    border-color: #e4e4e4;\n    border: 1px solid #e4e4e4;\n    border-width: 0;\n    border-left-width: 1px;\n}\n.nur-9-5-commented-section hr:last-child{\n    display: none;\n}\n.nur-9-5-commented-section .section-box .img-box{\n    margin-bottom: 10px;\n} \n.nur-9-5-commented-section .slot .top{\n    margin-bottom: 4px;\n}\n.nur-9-5-commented-section .slot .number{\n    font-size: 36px;\n    font-weight: 400;\n    line-height: 112.5%;\n    font-family: Times Modern;\n    color: #007a3f;\n\n}\n.nur-9-5-commented-section .slot .name{\n    margin-bottom: 5px;\n}\n.nur-9-5-commented-section .slot .category{\n    color: #007a3f;\n    font-family: Roboto;\n    font-size: 12px;\n    font-weight: 700;\n    line-height:  14px;\n    letter-spacing: 0.36px;\n    text-transform: uppercase;\n}\n.nur-9-5-commented-section .slot .headline{\n    height: auto;\n    margin-bottom: 10px;\n    display: inline-block;\n}   \n.nur-9-5-commented-section .slot .info{\n    font-family: Times Modern;\n    color: #01000d;\n    font-size: 20px;\n    font-weight: 400;\n    line-height: 22.5px;  \n    transition-property: color, fill;\n    transition-duration: 200ms, 200ms;\n    transition-timing-function: cubic-bezier(0, 0, .5, 1), cubic-bezier(0, 0, .5, 1);\n}\n.nur-9-5-commented-section .box-info {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: space-between;\n}\n.nur-9-5-commented-section .box-info .sport{\n    display: none; /* hide category*/\n    font-family: Roboto;\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 18px;\n    transition-property: color, fill;\n    transition-duration: 200ms, 200ms;\n    transition-timing-function: cubic-bezier(0, 0, .5, 1), cubic-bezier(0, 0, .5, 1);\n}\n.nur-9-5-commented-section .box-info .sports_category:hover > .sport,\n.nur-9-5-commented-section .slot .headline:hover > .info{\n    color: #00527a;\n}\n.nur-9-5-commented-section .section-box .img-box img {\n    object-position: top;\n}\n@media (max-width: 1319px) {\n    .nur-9-5-container {\n        max-width: 976px;\n        margin: auto;\n    }\n    .nur-9-5-commented-section .section-box{\n        width: calc(25% - 74px);\n    }\n    .nur-9-5-commented-section .section-box .img-box img{\n        object-fit: cover;\n        aspect-ratio: 3 / 2;\n        height: auto;\n    }\n}\n\n@media (min-width: 1320px){\n    .nur-9-5-commented-section .section-box .img-box img {\n        aspect-ratio: 3 / 2;\n        object-fit: cover;\n        height: auto;\n    }\n}\n@media (max-width:1023px) {\n    .nur-9-5-container{\n        max-width: 720px;\n        margin: auto;\n    }\n    .nur-9-5-commented-section .section-box{\n        width: calc(25% - 50px);\n    }\n}\n@media (max-width:767px){\n    .nur-9-5-most-commented{\n        margin-top: -36px;\n        padding-bottom: 36px;\n    }\n    .nur-9-5-container{\n        max-width: 100%;\n        margin: 0;\n    }\n    .nur-9-5-most-commented .title-commented h3{\n        font-size: 24px;\n        line-height: 27px;\n    }\n    .nur-9-5-most-commented .title-commented{\n        border-top: solid;\n        border-width: 3px;\n        border-color: #007a3f;\n        border-radius: 0px;\n        padding: 19px 20px;\n        margin-bottom: 0;\n        border-bottom: none;\n    }\n    .nur-9-5-commented-section{\n        padding: 0 20px;\n        flex-direction: column;\n    }\n    .nur-9-5-commented-section hr{\n        display: none;\n    }\n    .nur-9-5-commented-section .section-box{\n        width: 100%;\n        border-bottom: 1px dashed #ccc;\n        margin-bottom: 15px;\n        padding-bottom: 0;\n    }\n    .nur-9-5-commented-section .section-box:last-of-type{\n        border: none;\n        padding: 0;\n    }\n    .nur-9-5-commented-section .section-box .img-box {\n        display: none;\n        margin-bottom: 30px;\n    }\n    .nur-9-5-commented-section .section-box:first-child .img-box {\n        display: block;\n        min-height: 100%;\n        margin: 0 -20px 20px;\n    }\n    .nur-9-5-commented-section .section-box .img-box img {\n        min-height: 66.66vw;\n    }\n    .nur-9-5-commented-section .box-info {\n        position: relative;\n        padding-left: 39px;\n    }\n    .nur-9-5-commented-section .slot .top{\n        margin-bottom: 0;\n        position: absolute;\n        left: 0;\n    }\n    .nur-9-5-commented-section .slot .name {\n        margin-bottom: 0;\n    }\n    .nur-9-5-commented-section .slot .name .category{\n        margin-bottom: 4px;\n        display: block;\n    }\n    .nur-9-5-commented-section .slot .number{\n        line-height: normal;\n    }\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "30440410226", "endOfRange": 5000}, {"entityId": "30436380348", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "30449590335"}}], "policy": "single_experiment", "viewIds": ["30467120094"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"id": "1EE0AEE6-BAA4-4943-9EC7-9592F7E7E970", "type": "append", "selector": "head", "value": "<style>.cv-1-19 [data-testid=\"ConversionPopUp\"] {\n    flex-direction: column;\n    box-shadow: 4px 0px 4px 0px rgba(0, 0, 0, 0.25);\n}\n\n.cv-1-19-paywell-value {\n    color: #01000D;\n    text-align: center;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 112.5%;\n    padding: 16px !important;\n    border-bottom: 1px solid #C2C2C2;\n}\n\n.cv-1-19 .cv-12-1-paywall-text{\n    display: none;\n}\n\n.cv-1-19.cv-12-1-v1 [data-testid=\"bau-paywall\"] > a{\n    margin-bottom: 16px;\n}\n\n.cv-1-19.cv-12-1-v1 [data-testid=\"bau-paywall\"] > a + div{\n    display: block;\n}\n\n.cv-1-19.cv-12-1 [data-testid=\"ConversionPopUp\"] > div:last-child {\n    padding: 11px 0 17px !important;\n}\n\n@media screen and (max-width: 767px){\n    .cv-1-19-paywell-value {\n        padding: 16px 0 !important;\n        margin: 0 16px;\n    }\n\n    .cv-1-19.cv-12-1 .cv-1-19-paywell-value{\n        margin: 0;\n    }\n}</style>", "dependencies": []}], "id": "29836060108", "name": null, "commitId": "30444540390", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "19011630586", "22391750619", "21175821657", "20692010806", "19408543900", "30028220132"], "audienceName": null, "changes": null, "id": "29846940199", "integrationSettings": null, "variations": [{"id": "29836870113", "name": null, "actions": [{"viewId": "29839260196", "changes": []}]}, {"id": "29857240170", "name": null, "actions": [{"viewId": "29839260196", "changes": [{"dependencies": [], "id": "f15eeffd9c95473190de83a64a0d0ac5", "type": "custom_code", "value": function($){((w) => {
	const tag = 'cv-1-19';
	const exp = 'NUK 1.19';
	const qa = document.cookie.indexOf('cfQA') > -1;
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const log = qa ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) : () => { };

	window.optimizely = window.optimizely || [];

	log('Varaiation Active');

	const copy = `Discover The Times: Authority, Integrity, Trust`;

	const utils = {
		waitUntil: (condition, wait = 5000) => {
			return new Promise((resolve, reject) => {
				let stop;

				const timeout =
					wait && setTimeout(() => {
						stop = true;
						reject();
					}, wait);

				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);

					clearTimeout(timeout);
					resolve(condition());
				};

				requestAnimationFrame(check);
			});
		}
	};

	utils.waitUntil(() => document.body, 0)
		.then((body) => {
			body.classList.add(tag);
			utils.waitUntil(() => document.querySelector('#paywall-portal-page-footer [data-testid="ConversionPopUp"]'), 0)
				.then((popup) => {
					popup.insertAdjacentHTML('afterbegin', `<div class="${tag}-paywell-value">${copy}</div>`);
				});
		});
})(window);
}}]}]}, {"id": "29839260197", "name": null, "actions": [{"viewId": "29839260196", "changes": [{"dependencies": [], "id": "77DC04FB-B434-43B4-82E7-74C1035A001F", "type": "custom_code", "value": function($){((w) => {
	const tag = 'cv-1-19';
	const exp = 'NUK 1.19';
	const qa = document.cookie.indexOf('cfQA') > -1;
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const log = qa ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) : () => { };

	window.optimizely = window.optimizely || [];

	log('Varaiation Active');

	const copy = `Join The Times today - Stay informed`;

	const utils = {
		waitUntil: (condition, wait = 5000) => {
			return new Promise((resolve, reject) => {
				let stop;

				const timeout =
					wait && setTimeout(() => {
						stop = true;
						reject();
					}, wait);

				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);

					clearTimeout(timeout);
					resolve(condition());
				};

				requestAnimationFrame(check);
			});
		}
	};

	utils.waitUntil(() => document.body, 0)
		.then((body) => {
			body.classList.add(tag);
			utils.waitUntil(() => document.querySelector('#paywall-portal-page-footer [data-testid="ConversionPopUp"]'), 0)
				.then((popup) => {
					popup.insertAdjacentHTML('afterbegin', `<div class="${tag}-paywell-value">${copy}</div>`);
				});
		});
})(window);
}}]}]}, {"id": "29873120073", "name": null, "actions": [{"viewId": "29839260196", "changes": [{"dependencies": [], "id": "325BE97B-6744-4ADE-9326-67EC5A2B6920", "type": "custom_code", "value": function($){((w) => {
	const tag = 'cv-1-19';
	const exp = 'NUK 1.19';
	const qa = document.cookie.indexOf('cfQA') > -1;
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const log = qa ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) : () => { };

	window.optimizely = window.optimizely || [];

	log('Varaiation Active');

	const copy = `Enjoy all of The Times for just £1`;

	const utils = {
		waitUntil: (condition, wait = 5000) => {
			return new Promise((resolve, reject) => {
				let stop;

				const timeout =
					wait && setTimeout(() => {
						stop = true;
						reject();
					}, wait);

				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);

					clearTimeout(timeout);
					resolve(condition());
				};

				requestAnimationFrame(check);
			});
		}
	};

	utils.waitUntil(() => document.body, 0)
		.then((body) => {
			body.classList.add(tag);
			utils.waitUntil(() => document.querySelector('#paywall-portal-page-footer [data-testid="ConversionPopUp"]'), 0)
				.then((popup) => {
					popup.insertAdjacentHTML('afterbegin', `<div class="${tag}-paywell-value">${copy}</div>`);
				});
		});
})(window);
}}]}]}, {"id": "29850740023", "name": null, "actions": [{"viewId": "29839260196", "changes": [{"dependencies": [], "id": "BC7BEF86-4ADD-4EC4-AA41-00EE9F0DC641", "type": "custom_code", "value": function($){((w) => {
	const tag = 'cv-1-19';
	const exp = 'NUK 1.19';
	const qa = document.cookie.indexOf('cfQA') > -1;
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const log = qa ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) : () => { };

	window.optimizely = window.optimizely || [];

	log('Varaiation Active');

	const copy = `The Times: Informing and inspiring since 1785`;

	const utils = {
		waitUntil: (condition, wait = 5000) => {
			return new Promise((resolve, reject) => {
				let stop;

				const timeout =
					wait && setTimeout(() => {
						stop = true;
						reject();
					}, wait);

				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);

					clearTimeout(timeout);
					resolve(condition());
				};

				requestAnimationFrame(check);
			});
		}
	};

	utils.waitUntil(() => document.body, 0)
		.then((body) => {
			body.classList.add(tag);
			utils.waitUntil(() => document.querySelector('#paywall-portal-page-footer [data-testid="ConversionPopUp"]'), 0)
				.then((popup) => {
					popup.insertAdjacentHTML('afterbegin', `<div class="${tag}-paywell-value">${copy}</div>`);
				});
		});
})(window);
}}]}]}], "weightDistributions": [{"entityId": "29836870113", "endOfRange": 3067}, {"entityId": "29857240170", "endOfRange": 4507}, {"entityId": "29839260197", "endOfRange": 5861}, {"entityId": "29873120073", "endOfRange": 7277}, {"entityId": "29850740023", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "min-time", "layerId": "29836060108"}}], "policy": "single_experiment", "viewIds": ["29839260196"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"id": "5E90CD33-9307-4B1E-AF21-C7148A68F0F4", "type": "custom_code", "value": function($){((w) => {
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	window.optimizely = window.optimizely || [];
	window.localStorage.setItem('NUK 9.13', 'Activated');

	const utils = {
		waitUntil: (condition, wait = 10000) => {
			return new Promise((resolve, reject) => {
				let stop;
	
				const timeout =
					wait && setTimeout(() => {
						stop = true; 
						reject();
					}, wait);
	
				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);
	
					clearTimeout(timeout);
					resolve(condition());
				};
	
				requestAnimationFrame(check);
			});
		},
		
		sendEvent: (label) => {
			window.optimizely.push({
				type: 'event',
				eventName: label,
			});
		}
	};

	document.addEventListener('click', (e) => {
		if (e.target.closest('[data-testid="ConversionPopUp"] a[href^="https://www.thetimes.co.uk/subscribe/digital"]') || e.target.closest('.cv-9-13-paywall a[href^="https://www.thetimes.co.uk/subscribe/digital"]')) {
			utils.sendEvent('CONV_Clicks_registration_paywall_CTA');
		}
	});

	const pageViewData = JSON.parse(localStorage.getItem('NUK 9.13 page'));

	if (!pageViewData) {
		localStorage.setItem(
			'NUK 9.13 page',
			JSON.stringify([{
				pageView: 1,
				url: location.pathname,
			}])
		);

		utils.sendEvent('Article_1_viewed_in_registration');
	}

	if (pageViewData) {
		var checkURL = pageViewData.filter(element => element.url == location.pathname);
		if(checkURL.length == 0){
			pageViewData.unshift({
				pageView: pageViewData.length + 1,
				url: location.pathname,
			});
			localStorage.setItem(
				'NUK 9.13 page',
				JSON.stringify(pageViewData)
			);
		}
	}

	if (JSON.parse(localStorage.getItem('NUK 9.13 page'))[0].pageView === 2) {
		utils.sendEvent('Article_2_viewed_in_registration');
	}

	if (JSON.parse(localStorage.getItem('NUK 9.13 page'))[0].pageView === 3) {
		utils.sendEvent('Article_3_viewed_in_registration');
		utils.sendEvent('Article_limit_reached');
	}
	
	// if (JSON.parse(localStorage.getItem('NUK 9.13 page'))[0].pageView === 4) {
	// 	utils.sendEvent('Article_limit_reached');
	// }

	utils
		.waitUntil(() => document.querySelector('#paywall-portal-page-footer [data-testid="upgrade-paywall"]'), 0)
		.then(() => {
			utils.sendEvent('Article_limit_reached');
		});

})(window);
}, "dependencies": []}], "id": "29831950190", "name": null, "commitId": "30426610951", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "29905090128", "20027145419", "19011630586"], "audienceName": null, "changes": null, "id": "29889820015", "integrationSettings": null, "variations": [{"id": "29814100791", "name": null, "actions": []}, {"id": "29875320325", "name": null, "actions": [{"viewId": "29860640074", "changes": [{"id": "BB4604C6-3455-4DC9-A7D0-A15A5185CB2B", "type": "custom_code", "value": function($){((w) => {
	const tag = 'cv-9-13';
	const exp = 'NUK 9.13';
	const qa = document.cookie.indexOf('cfQA') > -1;
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const log = qa ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) : () => { };

	log('NUK 9.13 variation 1');
	window.optimizely = window.optimizely || [];

	const utils = {
		waitUntil: (condition, wait = 10000) => {
			return new Promise((resolve, reject) => {
				let stop;

				const timeout =
					wait && setTimeout(() => {
						stop = true;
						reject();
					}, wait);

				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);

					clearTimeout(timeout);
					resolve(condition());
				};

				requestAnimationFrame(check);
			});
		},

		sendEvent: (label) => {
			window.optimizely.push({
				type: 'event',
				eventName: label,
			});
		}
	};

	var url = window.location.pathname;
	if(url.includes('REGMX13')){
		window.location.replace('https://www.thetimes.com/checkout/pcCode/REGMX19/step/Account');
	} else if(url.includes('REGMX14')){
		window.location.replace('https://www.thetimes.com/checkout/pcCode/REGMX20/step/Account');
	} else if(url.includes('REGMX15')){
		window.location.replace('https://www.thetimes.com/checkout/pcCode/REGMX21/step/Account');
	}

})(window);
}, "dependencies": []}]}]}, {"id": "29866020230", "name": null, "actions": [{"viewId": "29860640074", "changes": [{"id": "1C7F6D88-60C7-426A-A60C-885A2F1829F5", "type": "custom_code", "value": function($){((w) => {
	const tag = 'cv-9-13';
	const exp = 'NUK 9.13';
	const qa = document.cookie.indexOf('cfQA') > -1;
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const log = qa ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) : () => { };

	log('NUK 9.13 variation 2');
	window.optimizely = window.optimizely || [];

	const utils = {
		waitUntil: (condition, wait = 10000) => {
			return new Promise((resolve, reject) => {
				let stop;

				const timeout =
					wait && setTimeout(() => {
						stop = true;
						reject();
					}, wait);

				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);

					clearTimeout(timeout);
					resolve(condition());
				};

				requestAnimationFrame(check);
			});
		},

		sendEvent: (label) => {
			window.optimizely.push({
				type: 'event',
				eventName: label,
			});
		}
	};

	var url = window.location.pathname;
	if(url.includes('REGMX13')){
		window.location.replace('https://www.thetimes.com/checkout/pcCode/REGMX16/step/Account');
	} else if(url.includes('REGMX14')){
		window.location.replace('https://www.thetimes.com/checkout/pcCode/REGMX17/step/Account');
	} else if(url.includes('REGMX15')){
		window.location.replace('https://www.thetimes.com/checkout/pcCode/REGMX18/step/Account');
	}

})(window);
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "29866020230", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "29831950190"}}], "policy": "single_experiment", "viewIds": ["29860640074"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"dependencies": [], "type": "custom_code", "id": "cc56966884714b13aed2343d57508cad", "value": function($){(function(){

    window.optimizely = window.optimizely || [];

    var url = window.location.href;

    if (url.indexOf('ONS7D01Z8H1SM') > -1) {
        window.optimizely.push({
            "type": "user",
            "attributes": {
                "plan-type": "7 day print"
            }
        });
    }

    if (url.indexOf('ONS6D02PFV6TF') > -1) {
        window.optimizely.push({
            "type": "user",
            "attributes": {
                "plan-type": "6 day print"
            }
        });
    }

    if (url.indexOf('ONSSTPD21') > -1) {
        window.optimizely.push({
            "type": "user",
            "attributes": {
                "plan-type": "Sunday Times print"
            }
        });
    }

    if (url.indexOf('ONSUl040QSD3K') > -1) {
        window.optimizely.push({
            "type": "user",
            "attributes": {
                "plan-type": "Print and digital"
            }
        });
    }

    var observerNode;
  
    var waitForTarget = setInterval(function() {
        
        var target = document.querySelector('main > div > div:nth-child(2)');
        var wrapper = document.querySelector('.abandonWrapper');
        var mobileForm = document.querySelector('.abandonWrapper > form');
        
        if (target || mobileForm) {
            clearInterval(waitForTarget);
            mobileForm ? observerNode = wrapper : observerNode = target;
            
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function() {
                    if (document.querySelector('h1').innerText === "Payment Type" || document.querySelector('h1').innerText === "Payment method") {
                        window.optimizely.push({
                            "type": "user",
                            "attributes": {
                                "checkout-stage": "3B (Payment method)"
                            }
                        });
                    }
                });    
            });

            var config = {
                attributes: true,
                childList: true,
                characterData: true
            };

            observer.observe(observerNode, config);
        }
    }, 50);

    setTimeout(function(){
        clearInterval(waitForTarget);
    }, 5000);
})();
}}], "id": "21174700335", "name": null, "commitId": "21187200981", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18817253497": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "19605404013"], "audienceName": null, "changes": null, "id": "21185910036", "integrationSettings": null, "variations": [{"id": "21158830993", "name": null, "actions": []}, {"id": "21148910808", "name": null, "actions": [{"viewId": "21203020181", "changes": [{"value": "<style>form button#direct-debit {\n\tdisplay: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "2febef02b233418c886b5d0fe45af8bf"}]}]}], "weightDistributions": [{"entityId": "21148910808", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "21174700335"}}], "policy": "single_experiment", "viewIds": ["21203020181"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"id": "4F6A7C70-3D71-46D8-83EE-386A8B92C160", "type": "custom_code", "value": function($){console.log('NUK 4.7')

const tag = 'cv-4-7';
const utils = {
    waitUntil: (condition, wait = 5000) => {
        return new Promise((resolve, reject) => {
            let stop;

            const timeout =
                wait &&
                setTimeout(() => {
                    stop = true;
                    reject();
                }, wait);

            const check = () => {
                if (stop) return;
                if (!condition()) return requestAnimationFrame(check);

                clearTimeout(timeout);
                resolve(condition());
            };

            requestAnimationFrame(check);
        });
    },
    observerElm: (target, callbackFn) => {
        var config = {
            childList: true,
            attributes: true,
            subtree: true,
        };
        var callback = function(mutationsList, observer) {
            callbackFn(mutationsList, observer);
        };
        var observer = new MutationObserver(callback);
        observer.observe(target, config);
    },
    sendEvent: (label) => {
        window.optimizely.push({
            type: 'event',
            eventName: label,
        });
    }
};

const pathName = window.location.pathname;

utils
    .waitUntil(() => document.body, 0)
    .then((body) => {
        body.classList.add(`${tag}`);

        if (pathName.includes('checkout')) {
            utils
                .waitUntil(() => document.querySelector('.abandonWrapper'), 0)
                .then((main) => {
                    utils.observerElm(main, () => {
                        paymentFun();
                    });
                });

            let creditCard = false;
            let debitCard = false;
            let paypal = false;

            function paymentFun() {
                document.querySelectorAll('#credit-card, #direct-debit, #paypal').forEach(function(card) {
                    card.addEventListener('click', function(event) {
                        const cardClick = event.target;
                        if (cardClick.closest('#credit-card') && !creditCard) {
                            console.log('conv_4_7_card_pay_confirmation');
                            utils.sendEvent('conv_4_7_card_pay_confirmation');
                            creditCard = true;
                        } else if (cardClick.closest('#direct-debit') && !debitCard) {
                            console.log('conv_4_7_debit_pay_confirmation');
                            utils.sendEvent('conv_4_7_debit_pay_confirmation');
                            debitCard = true;
                        } else if (cardClick.closest('#paypal') && !paypal) {
                            console.log('conv_4_7_paypal_pay_confirmation');
                            utils.sendEvent('conv_4_7_paypal_pay_confirmation');
                            paypal = true;
                        }
                    });
                });
            };

            let paypalForm = false;
            let debitCardForm = false;
            utils
                .waitUntil(() => document.querySelector('main'), 0)
                .then((mainSec) => {
                    utils.observerElm(mainSec, () => {
                        var paypalCTA = setInterval(() => {
                            if (document.querySelector('[data-testid="Pay with Paypal"]')) {
                                clearInterval(paypalCTA);
                                document.querySelector('[data-testid="Pay with Paypal"]').addEventListener('click', () => {
                                    if (!paypalForm) {
                                        console.log('conv_4_7_paypal_pay_confirmation')
                                        utils.sendEvent('conv_4_7_paypal_pay_confirmation');
                                        paypalForm = true;
                                    }
                                })
                            };
                        }, 200)

                        document.querySelectorAll('button').forEach(function(debit) {
                            if (debit.innerText == "Direct Debit") {
                                debit.addEventListener('click', () => {
                                    if (!debitCardForm) {
                                        console.log('conv_4_7_debit_pay_confirmation')
                                        utils.sendEvent('conv_4_7_debit_pay_confirmation');
                                        debitCardForm = true;
                                    }
                                })
                            }
                        });
                    });
                })

            utils
                .waitUntil(() => document.querySelector('.StripeElement iframe'), 0)
                .then((gpay) => {
                    focus();
                    const listener = window.addEventListener('blur', () => {
                        if (document.activeElement === gpay && !gpay.classList.contains(`${tag}-evtClicked`)) {
                            console.log('conv_4_7_google_pay_confirmation');
                            utils.sendEvent('conv_4_7_google_pay_confirmation');
                            gpay.classList.add(`${tag}-evtClicked`);
                        }
                        window.removeEventListener('blur', listener);
                    });
                })
        }
    });
}, "dependencies": []}], "id": "30453270416", "name": null, "commitId": "30457140802", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "22391750619", "21175821657", "30402280818", "19876560166"], "audienceName": null, "changes": null, "id": "30409520433", "integrationSettings": null, "variations": [{"id": "30417430673", "name": null, "actions": [{"viewId": "30403300393", "changes": []}]}, {"id": "30418970534", "name": null, "actions": [{"viewId": "30403300393", "changes": [{"id": "0b381b0a1efc4766b5c26913bd996439", "type": "custom_code", "value": function($){((w) => {
    const tag = 'cv-4-7';
    const exp = 'NUK 4.7';
    const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
    const qa = document.cookie.indexOf('cfQA') > -1;
    const log = qa ?
        Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) :
        () => {};
    const img = `https://d1mgcpums0qvsa.cloudfront.net/NUK/4.7/`;

    const utils = {
        waitUntil: (condition, wait = 5000) => {
            return new Promise((resolve, reject) => {
                let stop;

                const timeout =
                    wait &&
                    setTimeout(() => {
                        stop = true;
                        reject();
                    }, wait);

                const check = () => {
                    if (stop) return;
                    if (!condition()) return requestAnimationFrame(check);

                    clearTimeout(timeout);
                    resolve(condition());
                };

                requestAnimationFrame(check);
            });
        },
        observerElm: (target, callbackFn) => {
            var config = {
                childList: true,
                attributes: true,
                subtree: true,
            };
            var callback = function(mutationsList, observer) {
                callbackFn(mutationsList, observer);
            };
            var observer = new MutationObserver(callback);
            observer.observe(target, config);
        },
    };
    log('running')

    const url = window.location.origin;
    const pathName = window.location.pathname;
    const payment = `<div class="${tag}-payment">
        <div class="${tag}-icons">
            <img src="${img}mastercard.svg" class="${tag}-mastercard" alt="" />
            <img src="${img}Visa.svg" class="${tag}-visa" alt="" />
            <img src="${img}Amex.svg" class="${tag}-amex" alt="" />
            <img src="${img}Apple pay.svg" class="${tag}-applepay" alt="" />
            <img src="${img}GooglePay.svg" class="${tag}-googlepay" alt="" />
        </div>
    </div>`

    // GLOBLE
    utils
        .waitUntil(() => document.body, 0)
        .then((body) => {
            body.classList.add(`${tag}`);
            if (url == 'https://globalstore.thetimes.com') {
                utils
                    .waitUntil(() => document.querySelector('#custom_left_aligned_block .inner_block'), 0)
                    .then((innerBlock) => {
                        if (!document.querySelector(`.${tag}-globle`)) {
                            innerBlock.insertAdjacentHTML('beforeend', payment);
                            const paymentTag = document.querySelector(`.${tag}-payment`);
                            paymentTag.classList.add(`${tag}-globle`);
                        }
                    });
                utils
                    .waitUntil(() => document.querySelector('.feature-column .container'), 0)
                    .then((feature_sec) => {
                        if(!document.querySelector(`.${tag}-globle_sub`)){
                            feature_sec.insertAdjacentHTML('beforeend' , payment);
                            const globalSub = feature_sec.querySelector(`.${tag}-payment`);
                            globalSub.classList.add(`${tag}-globle_sub`);
                        }   
                    });
            }
        });

})(window);
}, "dependencies": []}, {"id": "c517f906dc5742739914bb8b2bc8385d", "type": "append", "selector": "head", "value": "<style>/* --common-- */\n.cv-4-7-icons img {\n\tmargin-right: 1px;\n}\n/* --globle-- */\n.cv-4-7-globle{\n\tposition: relative;\n\tz-index: 9;\n\tmargin-top: -16px;\n\tmargin-left: 4px;\n}\n.cv-4-7-globle_sub{\n\tmargin-top: 23px;\n}\n@media (min-width:768px) {\n\t/* --common-- */\n\t.cv-4-7-icons .cv-4-7-applepay,\n\t.cv-4-7-icons .cv-4-7-googlepay{\n\t\tdisplay: none;\n\t}\n}\n@media (max-width:900px){\n\t/* --globle-- */\n\t.cv-4-7-globle{\n\t\tmargin-top: 10px;\n\t}\n}\n@media (max-width : 767px) {\n\t/* --common-- */\n\t.cv-4-7-icons .cv-4-7-mastercard,\n\t.cv-4-7-icons .cv-4-7-visa,\n\t.cv-4-7-icons .cv-4-7-amex{\n\t\tdisplay: none;\n\t}\n\t.cv-4-7 .custom_left_aligned_content .scroll_arrow{\n\t\tmargin-top: -34px;\n\t}\n\t.cv-4-7-icons img {\n\t\tmargin-right: 4px;\n\t}\n\t/* --globle-- */\n\t.cv-4-7-globle {\n\t\tmargin-top: -2px;\n\t\tmargin-left: 0;\n\t\tmargin-bottom: 9px;\n\t}\n\t.cv-4-7-globle .cv-4-7-icons img{\n\t\tmargin-right: 3px;\n\t}\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "30418970534", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "30453270416"}}], "policy": "single_experiment", "viewIds": ["30403300393"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"id": "B405AF30-34A3-45C3-A0EF-629A4BA8C9C5", "type": "custom_code", "value": function($){console.log('NUK 4.7')

const tag = 'cv-4-7';
const utils = {
    waitUntil: (condition, wait = 5000) => {
        return new Promise((resolve, reject) => {
            let stop;

            const timeout =
                wait &&
                setTimeout(() => {
                    stop = true;
                    reject();
                }, wait);

            const check = () => {
                if (stop) return;
                if (!condition()) return requestAnimationFrame(check);

                clearTimeout(timeout);
                resolve(condition());
            };

            requestAnimationFrame(check);
        });
    },
    observerElm: (target, callbackFn) => {
        var config = {
            childList: true,
            attributes: true,
            subtree: true,
        };
        var callback = function(mutationsList, observer) {
            callbackFn(mutationsList, observer);
        };
        var observer = new MutationObserver(callback);
        observer.observe(target, config);
    },
    sendEvent: (label) => {
        window.optimizely.push({
            type: 'event',
            eventName: label,
        });
    }
};

const pathName = window.location.pathname;

utils
    .waitUntil(() => document.body, 0)
    .then((body) => {
        body.classList.add(`${tag}`);

        if (pathName.includes('checkout')) {
            utils
                .waitUntil(() => document.querySelector('.abandonWrapper'), 0)
                .then((main) => {
                    utils.observerElm(main, () => {
                        paymentFun();
                    });
                });

            let creditCard = false;
            let debitCard = false;
            let paypal = false;

            function paymentFun() {
                document.querySelectorAll('#credit-card, #direct-debit, #paypal').forEach(function(card) {
                    card.addEventListener('click', function(event) {
                        const cardClick = event.target;
                        if (cardClick.closest('#credit-card') && !creditCard) {
                            console.log('conv_4_7_card_pay_confirmation');
                            utils.sendEvent('conv_4_7_card_pay_confirmation');
                            creditCard = true;
                        } else if (cardClick.closest('#direct-debit') && !debitCard) {
                            console.log('conv_4_7_debit_pay_confirmation');
                            utils.sendEvent('conv_4_7_debit_pay_confirmation');
                            debitCard = true;
                        } else if (cardClick.closest('#paypal') && !paypal) {
                            console.log('conv_4_7_paypal_pay_confirmation');
                            utils.sendEvent('conv_4_7_paypal_pay_confirmation');
                            paypal = true;
                        }
                    });
                });
            };

            let paypalForm = false;
            let debitCardForm = false;
            utils
                .waitUntil(() => document.querySelector('main'), 0)
                .then((mainSec) => {
                    utils.observerElm(mainSec, () => {
                        var paypalCTA = setInterval(() => {
                            if (document.querySelector('[data-testid="Pay with Paypal"]')) {
                                clearInterval(paypalCTA);
                                document.querySelector('[data-testid="Pay with Paypal"]').addEventListener('click', () => {
                                    if (!paypalForm) {
                                        console.log('conv_4_7_paypal_pay_confirmation')
                                        utils.sendEvent('conv_4_7_paypal_pay_confirmation');
                                        paypalForm = true;
                                    }
                                })
                            };
                        }, 200)

                        document.querySelectorAll('button').forEach(function(debit) {
                            if (debit.innerText == "Direct Debit") {
                                debit.addEventListener('click', () => {
                                    if (!debitCardForm) {
                                        console.log('conv_4_7_debit_pay_confirmation')
                                        utils.sendEvent('conv_4_7_debit_pay_confirmation');
                                        debitCardForm = true;
                                    }
                                })
                            }
                        });
                    });
                })

            utils
                .waitUntil(() => document.querySelector('.StripeElement iframe'), 0)
                .then((gpay) => {
                    focus();
                    const listener = window.addEventListener('blur', () => {
                        if (document.activeElement === gpay && !gpay.classList.contains(`${tag}-evtClicked`)) {
                            console.log('conv_4_7_google_pay_confirmation');
                            utils.sendEvent('conv_4_7_google_pay_confirmation');
                            gpay.classList.add(`${tag}-evtClicked`);
                        }
                        window.removeEventListener('blur', listener);
                    });
                })
        }
    });
}, "dependencies": []}], "id": "30467740124", "name": null, "commitId": "30399900600", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "22391750619", "19011630586", "21175821657", "30402280818"], "audienceName": null, "changes": null, "id": "30380370585", "integrationSettings": null, "variations": [{"id": "30485300061", "name": null, "actions": [{"viewId": "30467370188", "changes": []}]}, {"id": "30382690569", "name": null, "actions": [{"viewId": "30467370188", "changes": [{"id": "fd8844120de748bd8b9fdfb49fae517b", "type": "custom_code", "value": function($){((w) => {
    const tag = 'cv-4-7';
    const exp = 'NUK 4.7';
    const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
    const qa = document.cookie.indexOf('cfQA') > -1;
    const log = qa ?
        Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) :
        () => {};
    const img = `https://d1mgcpums0qvsa.cloudfront.net/NUK/4.7/`;

    const utils = {
        waitUntil: (condition, wait = 5000) => {
            return new Promise((resolve, reject) => {
                let stop;

                const timeout =
                    wait &&
                    setTimeout(() => {
                        stop = true;
                        reject();
                    }, wait);

                const check = () => {
                    if (stop) return;
                    if (!condition()) return requestAnimationFrame(check);

                    clearTimeout(timeout);
                    resolve(condition());
                };

                requestAnimationFrame(check);
            });
        },
        observerElm: (target, callbackFn) => {
            var config = {
                childList: true,
                attributes: true,
                subtree: true,
            };
            var callback = function(mutationsList, observer) {
                callbackFn(mutationsList, observer);
            };
            var observer = new MutationObserver(callback);
            observer.observe(target, config);
        },
        sendEvent: (label) => {
            window.optimizely.push({
                type: 'event',
                eventName: label,
            });
        }
    };
    log('running')

    const pathName = window.location.pathname;

    const payment = `<div class="${tag}-payment">
        <div class="${tag}-icons">
            <img src="${img}Paypal.svg" class="${tag}-paypal" alt="" />
            <img src="${img}mastercard_uk.svg" class="${tag}-mastercard" alt="" />
            <img src="${img}Visa_uk.svg" class="${tag}-visa" alt="" />
            <img src="${img}Amex_uk.svg" class="${tag}-amex" alt="" />
            <img src="${img}Apple pay.svg" class="${tag}-applepay" alt="" />
            <img src="${img}GooglePay.svg" class="${tag}-googlepay" alt="" />
        </div>
    </div>`
    utils
        .waitUntil(() => document.body, 0)
        .then((body) => {
            body.classList.add(`${tag}`);

            // UK
            if (pathName.includes('subscribe')) {
                utils
                    .waitUntil(() => document.querySelector('.subscription_pack-container'), 0)
                    .then((cards) => {
                        if (!document.querySelector(`.${tag}-payment`)) {
                            cards.querySelectorAll('.c-subscription_pack__primary-container').forEach(function(subscription) {
                                subscription.insertAdjacentHTML('beforeend', payment);
                            });
                        }
                    });
            }
        });

})(window);
}, "dependencies": []}, {"id": "1d581a83f6f5414bbbd89d863d897bb4", "type": "append", "selector": "head", "value": "<style>.cv-4-7-icons img {\n\tmargin-right: 1px;\n}\n.cv-4-7-payment {\n    margin-top: 10px;\n}\n@media (min-width:768px) {\n\t.cv-4-7-icons .cv-4-7-applepay,\n\t.cv-4-7-icons .cv-4-7-googlepay{\n\t\tdisplay: none;\n\t}\n}\n@media (max-width : 767px) {\n\t.cv-4-7-icons .cv-4-7-mastercard,\n\t.cv-4-7-icons .cv-4-7-visa,\n\t.cv-4-7-icons .cv-4-7-amex{\n\t\tdisplay: none;\n\t}\n\t.cv-4-7 .custom_left_aligned_content .scroll_arrow{\n\t\tmargin-top: -34px;\n\t}\n\t.cv-4-7-icons img {\n\t\tmargin-right: 4px;\n\t}\n\t.cv-4-7-icons .cv-4-7-paypal{\n\t\tdisplay: none;\n\t}\n}</style>", "dependencies": []}]}]}, {"id": "30414280369", "name": null, "actions": [{"viewId": "30467370188", "changes": [{"id": "89D4465F-0F4A-44D4-A90C-564A4092FD53", "type": "custom_code", "value": function($){((w) => {
    const tag = 'cv-4-7';
    const exp = 'NUK 4.7';
    const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
    const qa = document.cookie.indexOf('cfQA') > -1;
    const log = qa ?
        Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) :
        () => {};
    const img = `https://d1mgcpums0qvsa.cloudfront.net/NUK/4.7/`;

    const utils = {
        waitUntil: (condition, wait = 5000) => {
            return new Promise((resolve, reject) => {
                let stop;

                const timeout =
                    wait &&
                    setTimeout(() => {
                        stop = true;
                        reject();
                    }, wait);

                const check = () => {
                    if (stop) return;
                    if (!condition()) return requestAnimationFrame(check);

                    clearTimeout(timeout);
                    resolve(condition());
                };

                requestAnimationFrame(check);
            });
        },
        observerElm: (target, callbackFn) => {
            var config = {
                childList: true,
                attributes: true,
                subtree: true,
            };
            var callback = function(mutationsList, observer) {
                callbackFn(mutationsList, observer);
            };
            var observer = new MutationObserver(callback);
            observer.observe(target, config);
        },
    };
    log('running')

    const pathName = window.location.pathname;

    const payment = `<div class="${tag}-payment">
        <div class="${tag}-icons">
            <img src="${img}Paypal.svg" class="${tag}-paypal" alt="" />
            <img src="${img}mastercard_uk.svg" class="${tag}-mastercard" alt="" />
            <img src="${img}Visa_uk.svg" class="${tag}-visa" alt="" />
            <img src="${img}Amex_uk.svg" class="${tag}-amex" alt="" />
            <img src="${img}Apple pay.svg" class="${tag}-applepay" alt="" />
            <img src="${img}GooglePay.svg" class="${tag}-googlepay" alt="" />
        </div>
    </div>`
    utils
        .waitUntil(() => document.body, 0)
        .then((body) => {
            body.classList.add(`${tag}`);

            // UK 
            if (pathName.includes('subscribe')) {
                utils
                    .waitUntil(() => document.querySelector('.page__subscription_pack-container .container'), 0)
                    .then((cards) => {
                        if (!document.querySelector(`.${tag}-payment`)) {
                            cards.insertAdjacentHTML('beforeend', payment);
                        }
                    });
            }
        });

})(window);
}, "dependencies": []}, {"id": "5C2B1E4C-33AA-4C4C-BA23-A0709C962133", "type": "append", "selector": "head", "value": "<style>.cv-4-7-icons img {\n\tmargin-right: 1px;\n}\n.cv-4-7-payment .cv-4-7-icons{\n\ttext-align: center;\n}\n@media (min-width:768px) {\n\t.cv-4-7-icons .cv-4-7-applepay,\n\t.cv-4-7-icons .cv-4-7-googlepay{\n\t\tdisplay: none;\n\t}\n\t.cv-4-7 .subscription_pack-container{\n\t\tpadding-bottom: 32px;\n\t}\n}\n@media (max-width : 767px) {\n\t.cv-4-7-icons .cv-4-7-mastercard,\n\t.cv-4-7-icons .cv-4-7-visa,\n\t.cv-4-7-icons .cv-4-7-amex{\n\t\tdisplay: none;\n\t}\n\t.cv-4-7 .custom_left_aligned_content .scroll_arrow{\n\t\tmargin-top: -34px;\n\t}\n\t.cv-4-7-icons img {\n\t\tmargin-right: 4px;\n\t}\n\t.cv-4-7 .subscription_pack-container{\n\t\tpadding-bottom: 14px;\n\t}\n\t.cv-4-7-icons .cv-4-7-paypal{\n\t\tdisplay: none;\n\t}\n\t.cv-4-7-payment .cv-4-7-icons{\n\t\tmargin-bottom: 10px;\n\t}\n\t.cv-4-7-payment .cv-4-7-icons .cv-4-7-googlepay{\n\t\tmargin-right: 0;\n\t}\n\t.cv-4-7-payment .cv-4-7-icons img{\n\t\tmargin-right: 3px;\n\t}\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "30382690569", "endOfRange": 5000}, {"entityId": "30414280369", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "30467740124"}}], "policy": "single_experiment", "viewIds": ["30467370188"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"id": "97eaef9d9de34eeab8a09dcd2cc626d8", "type": "custom_code", "value": function($){const utils = window.optimizely.get('utils');

utils.waitForElement('button[data-testid="PlayButton"]').then(() => {
    // Add all code here

    // User attributes:
    const play = document.querySelector('button[data-testid="PlayButton"]');

    play.addEventListener('click', () => {
        window.optimizely = window.optimizely || [];
        window.optimizely.push({
            "type": "user",
            "attributes": {
                "clicked-radio-play-button": "true"
            }
        });
    });
});
}, "dependencies": []}], "id": "30154170077", "name": null, "commitId": "30191740486", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "21175821657"], "audienceName": null, "changes": null, "id": "30163790118", "integrationSettings": null, "variations": [{"id": "30143510157", "name": null, "actions": [{"viewId": "30183020043", "changes": [{"id": "2587bb9fc9544809b85731cbf3abc83d", "type": "custom_code", "value": function($){window.sessionStorage.setItem('radio-modal-visible', 'false');
}, "dependencies": []}]}]}, {"id": "30154170078", "name": null, "actions": [{"viewId": "30183020043", "changes": [{"id": "0d4d7d4e912d46839e4f49b35a402d9f", "type": "custom_code", "value": function($){window.sessionStorage.setItem('radio-modal-visible', 'true');
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "30143510157", "endOfRange": 5000}, {"entityId": "30154170078", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "30154170077"}}], "policy": "single_experiment", "viewIds": ["30183020043"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "30219060158", "name": null, "commitId": "30428020270", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "30380760037"], "audienceName": null, "changes": null, "id": "30192430039", "integrationSettings": null, "variations": [{"id": "30116450590", "name": null, "actions": []}, {"id": "30172350207", "name": null, "actions": [{"viewId": "30205700102", "changes": [{"css": {}, "dependencies": [], "attributes": {"href": "/home?ff=%7B%22channelPages%22%3A%7B%22enabled%22%3Atrue%7D%7D"}, "type": "attribute", "id": "070D2A5B-1336-4F17-89E1-FAA31E0EE19A", "selector": "a[aria-current=\"page\"]"}]}, {"viewId": "20143500955", "changes": [{"css": {}, "dependencies": [], "attributes": {"href": "/home?ff=%7B\"channelPages\"%3A%7B\"enabled\"%3Atrue%7D%7D"}, "type": "attribute", "id": "93819AD2-4802-4A2D-B050-0B1447B1BB2E", "selector": "#menu-item-home-desktop > a"}, {"css": {}, "dependencies": [], "attributes": {"href": "/home?ff=%7B\"channelPages\"%3A%7B\"enabled\"%3Atrue%7D%7D"}, "type": "attribute", "id": "93661804-9C6F-4543-A1D9-10F96498E363", "selector": "#vertical-home"}, {"css": {}, "dependencies": [], "attributes": {"href": "/home?ff=%7B\"channelPages\"%3A%7B\"enabled\"%3Atrue%7D%7D"}, "type": "attribute", "id": "AFA45859-6BBB-451E-8BDB-056D1DA83919", "selector": "#menu-item-home-mobile a"}]}]}], "weightDistributions": [{"entityId": "30172350207", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "30219060158"}}], "policy": "single_experiment", "viewIds": ["20143500955", "30205700102"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "30454960415", "name": null, "commitId": "30437750571", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "22391750619", "19011630586", "30380220691", "21175821657"], "audienceName": null, "changes": null, "id": "30443700474", "integrationSettings": null, "variations": [{"id": "30431960498", "name": null, "actions": [{"viewId": "30457010337", "changes": []}]}, {"id": "30438090273", "name": null, "actions": [{"viewId": "30457010337", "changes": [{"id": "b2f507b550d94a72960cf2a93b749c4f", "type": "custom_code", "value": function($){((w) => {
	const tag = 'cv-7-15';
	const exp = 'NUK 7.15';
	const qa = document.cookie.indexOf('cfQA') > -1;
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const log = qa ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) : () => {};

	window.optimizely = window.optimizely || [];

	log('Varaiation Active');

	const utils = {
		waitUntil: (condition, wait = 10000) => {
			return new Promise((resolve, reject) => {
				let stop;

				const timeout =
					wait && setTimeout(() => {
						stop = true;
						reject();
					}, wait);

				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);

					clearTimeout(timeout);
					resolve(condition());
				};

				requestAnimationFrame(check);
			});
		},

		sendSegment: (label, value) => {
			window.optimizely.push({
				"type": "user",
				"attributes": {
					[label]: value
				}
			});
			log(`${exp} Segment event fire : ${label}`);
		}
	};


	utils.waitUntil(() => document.querySelector('.subscription_pack-container > :nth-child(3)'), 0)
		.then((subscription_pack) => {
			document.body.classList.add(tag);
			const selectors = [{
					selector: '.c-subscription_pack__title span',
					text: "Weekend Print + Digital"
				},
				{
					selector: '.c-subscription_pack__subtitle span',
					text: "Weekend papers, plus full digital access"
				},
				{
					selector: '.c-subscription_pack_price',
					text: "£19.50 /month for 3 months"
				},
				{
					selector: '.c-subscription_pack__terms_conditions span',
					text: "Billed as £19.50 a month for your first 3 months, saving 50% off the standard subscription rate. Auto-renews after 3 months at £39 a month. 3-month minimum contract."
				}
			];

			selectors.forEach(({selector,text}) => {
				subscription_pack.querySelector(selector).innerText = text;
			});

			const newList = ['The Times and Sunday Times newspaper (Sat and Sun)', 'Unlimited app and web access', 'Exclusive subscriber-only newsletters', 'Comment on articles', 'Save and share articles', 'Exclusive subscriber rewards with Times+'];

			const updateList = (list, newList) => {
				for (var i = 0; i < list.length; i++) {
					list[i].innerText = newList[i];
				}
			};

			const desktoplist = subscription_pack.querySelectorAll('.c-subscription_pack__benefits-content-desktop-view .subscription_pack__benefit-title-yes');
			updateList(desktoplist, newList);

			const mobileList = subscription_pack.querySelectorAll('.c-subscription_pack__benefits-content-mobile-view .subscription_pack__benefit-title-yes');
			updateList(mobileList, newList);

			subscription_pack.querySelectorAll('.c-subscription-pack__cta_link').forEach(cta => {
				cta.href = "https://www.thetimes.com/checkout?pc=ONS5004QEDHKU";
			});
		});

	let registration = false;
	window.addEventListener('load', function() {
		if (!registration && window.location.pathname.includes('REGMX13')) {
			utils.sendSegment("conv_nuk_7_15_registration_users", "true");
			registration = true;
		}	
	});

})(window);
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "30438090273", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "30454960415"}}], "policy": "single_experiment", "viewIds": ["30457010337"], "weightDistributions": null, "decisionMetadata": null}], "groups": [], "audiences": [{"id": "19011630586", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "location", "value": "GB"}]]]}, {"id": "19408543900", "name": null, "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": null, "type": "browser_version", "value": "ie"}]]]]}, {"id": "19605404013", "name": null, "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": null, "type": "browser_version", "value": "ie"}]]]]}, {"id": "19876560166", "name": null, "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": null, "type": "location", "value": "GB"}, {"match": null, "name": null, "type": "location", "value": "IE"}]]]]}, {"id": "20027145419", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "device", "value": "mobile"}, {"match": null, "name": null, "type": "device", "value": "iphone"}]]]}, {"id": "20692010806", "name": null, "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": null, "type": "browser_version", "value": "edge"}]]]]}, {"id": "20892792337", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "location", "value": "IE"}]]]}, {"id": "21175821657", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "!window.nuk || (nuk.user && nuk.user.isLoggedIn) === false"}]]]}, {"id": "21207170142", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "(window.nuk && nuk.user && nuk.user.isLoggedIn) === true"}]]]}, {"id": "22391750619", "name": null, "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": null, "type": "source_type", "value": "campaign"}]], ["not", ["or", {"match": "substring", "name": null, "type": "campaign", "value": "UK_Times_PMax_Subs"}]], ["not", ["or", {"match": "exact", "name": null, "type": "campaign", "value": " fy24_times_twitter_"}]]]]}, {"id": "23074782274", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "browser_version", "value": "safari"}, {"match": null, "name": null, "type": "browser_version", "value": "gc"}]]]}, {"id": "23185140152", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "window && !window.optimizelyDynamicallyLoaded"}]]]}, {"id": "25469260064", "name": null, "conditions": ["and", ["or", ["or", {"match": "exact", "name": "cfQA", "type": "cookies", "value": "true"}], ["or", {"match": "exact", "name": "cfQA", "type": "query", "value": "true"}]]]}, {"id": "29905090128", "name": null, "conditions": ["and", ["or", ["or", {"match": "exact", "name": "cfQA-9-13", "type": "cookies", "value": "true"}]]]}, {"id": "30028220132", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "!window.nuk || (nuk.user && nuk.user.isRegisteredUser !== true)"}]]]}, {"id": "30380220691", "name": null, "conditions": ["and", ["or", ["or", {"match": "exact", "name": "cfQA-7-15", "type": "cookies", "value": "true"}]]]}, {"id": "30380760037", "name": null, "conditions": ["and", ["or", ["or", {"match": "substring", "name": "acs_tnl", "type": "cookies", "value": "AAAA022327020"}], ["or", {"match": "substring", "name": "acs_tnl", "type": "cookies", "value": "AAAA006558029"}], ["or", {"match": "substring", "name": "acs_tnl", "type": "cookies", "value": "AAAA005390403"}], ["or", {"match": "substring", "name": "acs_tnl", "type": "cookies", "value": "AAAA013177120"}], ["or", {"match": "substring", "name": "acs_tnl", "type": "cookies", "value": "AAAA002330554"}], ["or", {"match": "substring", "name": "acs_tnl", "type": "cookies", "value": "AAAA022780218"}], ["or", {"match": "substring", "name": "acs_tnl", "type": "cookies", "value": "AAAA023921013"}], ["or", {"match": "substring", "name": "acs_tnl", "type": "cookies", "value": "AAAA089990415"}], ["or", {"match": "substring", "name": "acs_tnl", "type": "cookies", "value": "AAAA061154017"}], ["or", {"match": "substring", "name": "acs_tnl", "type": "cookies", "value": "DIG3831 668237"}], ["or", {"match": "substring", "name": "acs_tnl", "type": "cookies", "value": "AAAA003885550"}]]]}, {"id": "30402280818", "name": null, "conditions": ["and", ["or", ["or", {"match": "exact", "name": "cfQA-4-7", "type": "cookies", "value": "true"}]]]}], "listTargetingKeys": [], "visitorAttributes": [], "visitorIdLocator": null, "integrationSettings": [], "views": [{"id": "19063710241", "category": "other", "apiName": "18133370155_checkout__excluding_thank_you_prod_", "name": null, "staticConditions": ["or", ["or", {"match": "substring", "type": "url", "value": "www.thetimes.co.uk/checkout?"}, {"match": "substring", "type": "url", "value": "www.thetimes.com/checkout?"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "19724408845", "category": "other", "apiName": "18261964525_articlesedition_prod", "name": null, "staticConditions": ["or", ["or", {"match": "regex", "type": "url", "value": "www.thetimes.co.*\\/article\\/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "19947273314", "category": "other", "apiName": "18261964525_conv_checkout_stage_5_confirmation_page__paypal", "name": null, "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout/?s=1&pok=1"}, {"match": "exact", "type": "url", "value": "https://www.thetimes.com/checkout/?s=1&pok=1"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "20143500955", "category": "other", "apiName": "18261964525_all_pages", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "www.thetimes.co.uk"}, {"match": "substring", "type": "url", "value": "www.thetimes.com"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "21015823650", "category": "other", "apiName": "18261964525_conv_digital_store", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.thetimes.co.uk/subscribe/digital/"}, {"match": "simple", "type": "url", "value": "https://www.thetimes.com/subscribe/digital/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21203020181", "category": "other", "apiName": "18133370155_url_targeting_for_copy_of_conv_live_nuk_101__print_s", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONS7D01Z8H1SM"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONS7D01Z8H1SM"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONS6D02PFV6TF"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONS6D02PFV6TF"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSSTPD21"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONSSTPD21"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSUl040QSD3K"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONSUl040QSD3K"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSST01C97C1Q"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONSST01C97C1Q"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONS7D016WH6JH"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONS7D016WH6JH"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONS6D049KYNK4"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONS6D049KYNK4"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSUL083V0HPS"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONSUL083V0HPS"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSUL093TS34Z"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONSUL093TS34Z"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSST02FVJGD1"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONSST02FVJGD1"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSPR02NGHTC9"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONSPR02NGHTC9"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSPR014QGB8D"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONSPR014QGB8D"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONS24014VU9QD"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONS24014VU9QD"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSST03SW9V2J"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONSST03SW9V2J"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONS100HBV39R"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONS100HBV39R"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONS5004QEDHKU"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONS5006ZPQBU6"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONS50056SJ1W5"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "25815060033", "category": "other", "apiName": "18261964525_conv_onboarding_completion_rate", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.thetimes.co.uk/account/welcome/stage-three"}, {"match": "simple", "type": "url", "value": "https://www.thetimes.com/account/welcome/stage-three"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "26009142303", "category": "other", "apiName": "18261964525_conv_puzzle_page_for_longer_than_8_seconds_", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "https://www.thetimes.com/puzzles/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
  setTimeout(() => {
			activate();
	}, 8000);
}
}, {"id": "26337601039", "category": "other", "apiName": "18261964525_conv_checkout_stage_5_confirmation_page", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout"}], ["or", {"type": "element_present", "value": "#confirm-order-button"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "27309091057", "category": "other", "apiName": "18261964525_url_targeting_for_copy_of_conveng__concluded__nur_41", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.com/account/welcome"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
	var tag = "nur-11-1";
	const utils = window.optimizely.get('utils');

	const setCookie = (cookieName, cookieValue) => {
		const today = new Date();
		const expire = new Date();
		expire.setTime(today.getTime() + 3600000*24*7);
		document.cookie = cookieName+"="+encodeURI(cookieValue) + ";expires="+expire.toGMTString() + "; path=/";
	};

	if (window.location.pathname.includes("/account/welcome") && ((document.referrer.includes('ONS1M01GJJ4W2') || window.nuk.user.registrationType === 'fully subscribed'))) {
		if (!document.cookie.includes('nur-11-1-activated')) {
			setCookie('nur-11-1-expiry', true);
		}
		
		document.cookie='nur-11-1-activated=true; path=/';

		if (document.cookie.includes('nur-11-1-expiry')) {
			window.optimizely.push({
				'type': 'user',
				'attributes': {
				  'CONV_Early_life_user': 'Yes'
				}
			});
		}

		activate();
	}

	if (document.referrer.includes('/account/welcome/stage-three') && location.pathname.indexOf('/puzzles/') > -1) {
		utils.waitForElement('#puzzle-iframe').then(() => {
			setTimeout(() => {
				window.optimizely.push({
					type: 'event',
					eventName: 'play-for-8-seconds-of-puzzles-added-to-page-from-welcome-page',
				});
			}, 8000);
		});
	}

	if (location.pathname.indexOf('/puzzles/') > -1) {
		utils.waitForElement('#puzzle-iframe').then(() => {
			setTimeout(() => {
				window.optimizely.push({
					type: 'event',
					eventName: '18261964525_conv_puzzle_page_for_longer_than_8_seconds_',
				});
			}, 8000);
		});
	}

	if (location.pathname.indexOf('/puzzles/') > -1) {
		if(document.cookie.includes('nur-11-1-expiry') && document.referrer.includes('/account/welcome/stage-three')){
			window.optimizely.push({
				'type': 'user',
				'attributes': {
					'CONV_Early_life_user_puzzle_player': 'Yes'
				}
			});
		}
	}
}
}, {"id": "29839260196", "category": "other", "apiName": "18261964525_url_targeting_for_copy_of_convacq__draft__nuk_120__r", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/article/"}, {"match": "regex", "type": "url", "value": "www.thetimes.com.*\\/article\\/ "}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "callback", "activationCode": // Activation JS
function callbackFn(activate) {
	const exp = 'NUK 1.19';
	const qa = document.cookie.indexOf('cfQA') > -1;
	const log = qa ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) : () => { };
	log('Checking');

	const utils = {
		waitUntil: (condition, wait = 10000) => {
			return new Promise((resolve, reject) => {
				let stop;
	
				const timeout =
					wait && setTimeout(() => {
						stop = true; 
						reject();
					}, wait);
	
				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);
	
					clearTimeout(timeout);
					resolve(condition());
				};
	
				requestAnimationFrame(check);
			});
		}
	};

	if (window.location.pathname.indexOf('/article') > -1) {
		utils
			.waitUntil(() => document.querySelector('#paywall-portal-page-footer [data-testid="bau-paywall"]'), 0)
			.then((paywall) => {
				
				if(paywall){
					activate();
					log('Activation called successfully .....');
				}

			});
	}
}
}, {"id": "29860640074", "category": "other", "apiName": "18261964525_url_targeting_for_conv_draft_nuk_913__registration_f", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "REGMX13"}, {"match": "substring", "type": "url", "value": "REGMX14"}, {"match": "substring", "type": "url", "value": "REGMX15"}, {"match": "substring", "type": "url", "value": "/article/"}, {"match": "regex", "type": "url", "value": "www.thetimes.com.*\\/article\\/"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "30073610904", "category": "other", "apiName": "18261964525_prod__radio_live_pages", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.com/radio/show/"}, {"match": "simple", "type": "url", "value": "https://www.thetimes.com/radio/live"}, {"match": "simple", "type": "url", "value": "https://www.thetimes.com/radio/live-player"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "30124900020", "category": "other", "apiName": "18133370155_url_targeting_for_copy_of_prod__nuk_150__gl_marketin", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?"}], ["not", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSUL093TS34Z"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONSUL093TS34Z"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSST02FVJGD1"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONSST02FVJGD1"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=REGMX14"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=REGMX14"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout/?s"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout/?s"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout/?s=1&pok=1"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout/?s=1&pok=1"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSPR04DJ5QV5"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONSPR04DJ5QV5"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSPR03HRQE4K"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONSPR03HRQE4K"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=REGMX13"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=REGMX13"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=REGMX15"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=REGMX15"}, {"match": "substring", "type": "url", "value": "www.thetimes.co.uk/checkout/pccode/regmx13/step/account"}, {"match": "substring", "type": "url", "value": "www.thetimes.com/checkout/pccode/regmx13/step/account"}, {"match": "substring", "type": "url", "value": "www.thetimes.co.uk/checkout/pccode/regmx14/step/account"}, {"match": "substring", "type": "url", "value": "www.thetimes.com/checkout/pccode/regmx14/step/account"}, {"match": "substring", "type": "url", "value": "www.thetimes.co.uk/checkout/pccode/regmx15/step/account"}, {"match": "substring", "type": "url", "value": "www.thetimes.co.uk/checkout/pccode/regmx15/step/account"}, {"match": "substring", "type": "url", "value": "www.thetimes.co.uk/checkout/pccode/regmx13/step/payment"}, {"match": "substring", "type": "url", "value": "www.thetimes.com/checkout/pccode/regmx13/step/payment"}, {"match": "substring", "type": "url", "value": "www.thetimes.co.uk/checkout/pccode/regmx14/step/payment"}, {"match": "substring", "type": "url", "value": "www.thetimes.com/checkout/pccode/regmx14/step/payment"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSPR03HRQE4K"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONSPR03HRQE4K"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSPR04DJ5QV5"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout?pc=ONSPR04DJ5QV5"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "30183020043", "category": "other", "apiName": "18261964525_uat_targeting_for_copy_of_uat__times_radio_modal_web", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.com/radio/show/"}, {"match": "simple", "type": "url", "value": "https://www.thetimes.com/radio/live"}, {"match": "simple", "type": "url", "value": "https://www.thetimes.com/radio/live-player"}, {"match": "simple", "type": "url", "value": "https://www.thetimes.com/radio"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "30205700102", "category": "other", "apiName": "18261964525_channel_homepage", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.thetimes.com/home?ff=%7B%22channelPages%22%3A%7B%22enabled%22%3Atrue%7D%7D"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "30272070067", "category": "other", "apiName": "18261964525_url_targeting_for_copy_of_convacq__concluded__nuk_31", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/article/"}, {"match": "regex", "type": "url", "value": "www.thetimes.com.*\\/article\\/ "}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
    const utils = window.optimizely.get('utils');

    if (window.location.pathname.includes('article') && nuk.user && nuk.user.isLoggedIn === false) {
        utils
            .waitForElement('div[data-testid="ConversionPopUp"] button')
            .then(() => {
                activate();
            });
    }

    if (window.location.pathname.includes('article') && nuk.user && nuk.user.isRegisteredUser === true && nuk.user.customerType === 'registered') {
        activate();
    }
}
}, {"id": "30396320546", "category": "other", "apiName": "18261964525_url_targeting_for_copy_of_convacq__draft__nuk_47__pa", "name": null, "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://store.thetimes.ie/"}, {"match": "substring", "type": "url", "value": "/checkout/"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "30403300393", "category": "other", "apiName": "18261964525_url_targeting_for_copy_of_convacq__draft__nuk_47___1", "name": null, "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://globalstore.thetimes.com/"}, {"match": "substring", "type": "url", "value": "/checkout/"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "30457010337", "category": "other", "apiName": "18261964525_url_targeting_for_copy_of_convacq__draft__nuk_321__s", "name": null, "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.thetimes.com/subscribe/digital/"}, {"match": "substring", "type": "url", "value": "/checkout/"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "30467120094", "category": "other", "apiName": "18261964525_url_targeting_for_copy_of_conveng__prod__nur_95__mos", "name": null, "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.thetimes.com/sport"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
    const utils = {
        waitUntil: (condition, wait = 5000) => {
            return new Promise((resolve, reject) => {
                let stop;

                const timeout =
                    wait && setTimeout(() => {
                        stop = true;
                        reject();
                    }, wait);

                const check = () => {
                    if (stop) return;
                    if (!condition()) return requestAnimationFrame(check);

                    clearTimeout(timeout);
                    resolve(condition());
                };

                requestAnimationFrame(check);
            });
        },
        isInViewport: (element) => {
            const rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
    };
    let hasActivated = false;
    utils.waitUntil(() => document.querySelector('h1.nk-headline-heading'), 0)
        .then((sport) => {
            if (sport.innerText === 'Sport') {

                const headline = document.querySelectorAll('h3.nk-headline-heading');
                headline.forEach(function(textH3) {
                    if (textH3.innerText === 'Tennis') {
                        const handleScroll = () => {

                            if (utils.isInViewport(textH3) && !hasActivated) {
                                hasActivated = true;
                                window.removeEventListener('scroll', handleScroll);
                                activate();
                            }
                        };
                        window.addEventListener('scroll', handleScroll);
                    }
                });
            }
        });
}
}, {"id": "30467370188", "category": "other", "apiName": "18261964525_url_targeting_for_copy_of_convacq__draft__nuk_321__1", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "subscribe/digital"}, {"match": "substring", "type": "url", "value": "/checkout/"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}], "events": [{"id": "19402421990", "viewId": null, "name": null, "category": "other", "apiName": "subscription", "eventType": "custom", "eventFilter": null}, {"id": "19412422409", "viewId": null, "name": null, "category": "other", "apiName": "continue button - complete order - credit_card", "eventType": "custom", "eventFilter": null}, {"id": "19560684921", "viewId": "19063710241", "name": null, "category": "other", "apiName": "18133370155_confirm_payment_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#confirm-order-button, .bottom #submitButton"}}, {"id": "19749338318", "viewId": null, "name": null, "category": "other", "apiName": "continue button - continue to about you", "eventType": "custom", "eventFilter": null}, {"id": "19860572637", "viewId": null, "name": null, "category": "other", "apiName": "continue button - continue to payment", "eventType": "custom", "eventFilter": null}, {"id": "19882140759", "viewId": null, "name": null, "category": "other", "apiName": "continue button - review your order - credit_card", "eventType": "custom", "eventFilter": null}, {"id": "19891761055", "viewId": null, "name": null, "category": "other", "apiName": "button - subscribe", "eventType": "custom", "eventFilter": null}, {"id": "19897960246", "viewId": null, "name": null, "category": "other", "apiName": "continue button - review your order - direct_debit", "eventType": "custom", "eventFilter": null}, {"id": "19909031568", "viewId": null, "name": null, "category": "other", "apiName": "continue button - continue to billing address - credit_card", "eventType": "custom", "eventFilter": null}, {"id": "19928882313", "viewId": null, "name": null, "category": "other", "apiName": "interaction-with-the-second-tooltip", "eventType": "custom", "eventFilter": null}, {"id": "19937782864", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-in-page-paywall-section-CTA", "eventType": "custom", "eventFilter": null}, {"id": "19942893743", "viewId": null, "name": null, "category": "other", "apiName": "interaction-with-the-first-tooltip", "eventType": "custom", "eventFilter": null}, {"id": "19961023768", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-sticky-paywall-CTA", "eventType": "custom", "eventFilter": null}, {"id": "19984239968", "viewId": null, "name": null, "category": "other", "apiName": "button-show more", "eventType": "custom", "eventFilter": null}, {"id": "20040650740", "viewId": null, "name": null, "category": "other", "apiName": "ad-viewed", "eventType": "custom", "eventFilter": null}, {"id": "20100382534", "viewId": null, "name": null, "category": "other", "apiName": "download on app store", "eventType": "custom", "eventFilter": null}, {"id": "20112975586", "viewId": null, "name": null, "category": "other", "apiName": "closed-pop-up", "eventType": "custom", "eventFilter": null}, {"id": "20113185116", "viewId": null, "name": null, "category": "other", "apiName": "clicked-cta-popup", "eventType": "custom", "eventFilter": null}, {"id": "20118215210", "viewId": null, "name": null, "category": "other", "apiName": "widget-related article", "eventType": "custom", "eventFilter": null}, {"id": "20125501858", "viewId": null, "name": null, "category": "other", "apiName": "download google play", "eventType": "custom", "eventFilter": null}, {"id": "20125545817", "viewId": "19724408845", "name": null, "category": "other", "apiName": "18261964525_click_related_article_card", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".responsiveweb__Base-aumpme-1 > div:nth-of-type(1), .responsiveweb__Base-aumpme-1 > div:nth-of-type(3), .responsiveweb__Base-aumpme-1 > div:nth-of-type(5)"}}, {"id": "20164310155", "viewId": null, "name": null, "category": "other", "apiName": "close_popover", "eventType": "custom", "eventFilter": null}, {"id": "20164852805", "viewId": null, "name": null, "category": "other", "apiName": "right arrow", "eventType": "custom", "eventFilter": null}, {"id": "20165815913", "viewId": null, "name": null, "category": "other", "apiName": "widget - puff - sign up now - displayed", "eventType": "custom", "eventFilter": null}, {"id": "20175317135", "viewId": null, "name": null, "category": "other", "apiName": "article - view end", "eventType": "custom", "eventFilter": null}, {"id": "20181097271", "viewId": "19724408845", "name": null, "category": "other", "apiName": "18261964525_explore_nav_link_click_prod", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#global-menu-mobile > div > div.GlobalMenu-contentBucket > a.GlobalMenu-mobileLink.GlobalMenu-parentLink.js-channelsDropdownToggle.js-tracking, .GlobalNav-menu > nav > div > div.GlobalMenu-contentBucket > a.GlobalMenu-mobileLink.GlobalMenu-parentLink.js-channelsDropdownToggle.js-tracking"}}, {"id": "20183860963", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-hero-CTA", "eventType": "custom", "eventFilter": null}, {"id": "20184761314", "viewId": null, "name": null, "category": "other", "apiName": "previous article", "eventType": "custom", "eventFilter": null}, {"id": "20186147875", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-middle-of-the-page-CTA", "eventType": "custom", "eventFilter": null}, {"id": "20186187218", "viewId": null, "name": null, "category": "other", "apiName": "interaction-with-arrow ", "eventType": "custom", "eventFilter": null}, {"id": "20189405013", "viewId": null, "name": null, "category": "other", "apiName": "sign up to newsletters", "eventType": "custom", "eventFilter": null}, {"id": "20191032937", "viewId": null, "name": null, "category": "other", "apiName": "go to my newsletters", "eventType": "custom", "eventFilter": null}, {"id": "20197241758", "viewId": null, "name": null, "category": "other", "apiName": "left arrow", "eventType": "custom", "eventFilter": null}, {"id": "20202410664", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-cta", "eventType": "custom", "eventFilter": null}, {"id": "20202451234", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-any-mandatory-tick-box", "eventType": "custom", "eventFilter": null}, {"id": "20204941229", "viewId": null, "name": null, "category": "other", "apiName": "unsubscribe from newsletter", "eventType": "custom", "eventFilter": null}, {"id": "20213217321", "viewId": null, "name": null, "category": "other", "apiName": "interactions-with-dropdown", "eventType": "custom", "eventFilter": null}, {"id": "20215265948", "viewId": null, "name": null, "category": "other", "apiName": "next article", "eventType": "custom", "eventFilter": null}, {"id": "20263823206", "viewId": null, "name": null, "category": "other", "apiName": "widget - puff - sign up now", "eventType": "custom", "eventFilter": null}, {"id": "20279203045", "viewId": null, "name": null, "category": "other", "apiName": "auto-newsletter-puff-displayed", "eventType": "custom", "eventFilter": null}, {"id": "20313269521", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-expand-arrow", "eventType": "custom", "eventFilter": null}, {"id": "20334701391", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-any-faq", "eventType": "custom", "eventFilter": null}, {"id": "20379515422", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-subscribe-cta", "eventType": "custom", "eventFilter": null}, {"id": "20438580525", "viewId": null, "name": null, "category": "other", "apiName": "click-on-details-or-view-details", "eventType": "custom", "eventFilter": null}, {"id": "20445594668", "viewId": null, "name": null, "category": "other", "apiName": "back-to-hp-from-article", "eventType": "custom", "eventFilter": null}, {"id": "20458677211", "viewId": null, "name": null, "category": "other", "apiName": "payment type - paypal", "eventType": "custom", "eventFilter": null}, {"id": "20471618880", "viewId": null, "name": null, "category": "other", "apiName": "payment type - direct debit", "eventType": "custom", "eventFilter": null}, {"id": "20477400536", "viewId": null, "name": null, "category": "other", "apiName": "click-on-view-contract-and-billing-details", "eventType": "custom", "eventFilter": null}, {"id": "20479318576", "viewId": null, "name": null, "category": "other", "apiName": "payment type - card", "eventType": "custom", "eventFilter": null}, {"id": "20482804866", "viewId": null, "name": null, "category": "other", "apiName": "users-reaching-int-store-from-article", "eventType": "custom", "eventFilter": null}, {"id": "20511341599", "viewId": null, "name": null, "category": "other", "apiName": "header-global navigation-join now", "eventType": "custom", "eventFilter": null}, {"id": "20560843990", "viewId": null, "name": null, "category": "other", "apiName": "spot im - comment - start", "eventType": "custom", "eventFilter": null}, {"id": "20574710313", "viewId": null, "name": null, "category": "other", "apiName": "listened-to-80", "eventType": "custom", "eventFilter": null}, {"id": "20581790178", "viewId": null, "name": null, "category": "other", "apiName": "clicked-sidebar-article", "eventType": "custom", "eventFilter": null}, {"id": "20583041730", "viewId": null, "name": null, "category": "other", "apiName": "clicks-hero-cta-subscribe-now", "eventType": "custom", "eventFilter": null}, {"id": "20586942294", "viewId": null, "name": null, "category": "other", "apiName": "clicks-benefits-cta-subscribe-now", "eventType": "custom", "eventFilter": null}, {"id": "20590353538", "viewId": null, "name": null, "category": "other", "apiName": "saw-comments-section", "eventType": "custom", "eventFilter": null}, {"id": "20594005068", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-apple", "eventType": "custom", "eventFilter": null}, {"id": "20601710482", "viewId": null, "name": null, "category": "other", "apiName": "clicks-subscription-options-in-nav", "eventType": "custom", "eventFilter": null}, {"id": "20603322296", "viewId": null, "name": null, "category": "other", "apiName": "post comment", "eventType": "custom", "eventFilter": null}, {"id": "20604190403", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-show-podcasts", "eventType": "custom", "eventFilter": null}, {"id": "20606640204", "viewId": null, "name": null, "category": "other", "apiName": "clicked-mobile-controls", "eventType": "custom", "eventFilter": null}, {"id": "20628930206", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-google", "eventType": "custom", "eventFilter": null}, {"id": "20629260300", "viewId": null, "name": null, "category": "other", "apiName": "clicked-pause-widget", "eventType": "custom", "eventFilter": null}, {"id": "20642990131", "viewId": null, "name": null, "category": "other", "apiName": "clicked-play-widget", "eventType": "custom", "eventFilter": null}, {"id": "20643050064", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-spotify", "eventType": "custom", "eventFilter": null}, {"id": "20682490881", "viewId": null, "name": null, "category": "other", "apiName": "clicks-outside-popup", "eventType": "custom", "eventFilter": null}, {"id": "20696731040", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-related-articles", "eventType": "custom", "eventFilter": null}, {"id": "20721040733", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-close", "eventType": "custom", "eventFilter": null}, {"id": "20725870011", "viewId": null, "name": null, "category": "other", "apiName": "closes-popup-via-esc", "eventType": "custom", "eventFilter": null}, {"id": "20733120205", "viewId": null, "name": null, "category": "other", "apiName": "clicks-subscribe-now-cta", "eventType": "custom", "eventFilter": null}, {"id": "20838161906", "viewId": null, "name": null, "category": "other", "apiName": "twenty-secs-inactive", "eventType": "custom", "eventFilter": null}, {"id": "20852270431", "viewId": null, "name": null, "category": "other", "apiName": "ten-secs-inactive", "eventType": "custom", "eventFilter": null}, {"id": "20863410645", "viewId": null, "name": null, "category": "other", "apiName": "thirty-secs-inactive", "eventType": "custom", "eventFilter": null}, {"id": "20886652918", "viewId": null, "name": null, "category": "other", "apiName": "share-email", "eventType": "custom", "eventFilter": null}, {"id": "20890593849", "viewId": null, "name": null, "category": "other", "apiName": "share-twitter", "eventType": "custom", "eventFilter": null}, {"id": "20898563917", "viewId": null, "name": null, "category": "other", "apiName": "share-copy", "eventType": "custom", "eventFilter": null}, {"id": "20909824098", "viewId": null, "name": null, "category": "other", "apiName": "remove from my articles", "eventType": "custom", "eventFilter": null}, {"id": "20918053585", "viewId": null, "name": null, "category": "other", "apiName": "closed-tooltip", "eventType": "custom", "eventFilter": null}, {"id": "20934540600", "viewId": null, "name": null, "category": "other", "apiName": "share-facebook", "eventType": "custom", "eventFilter": null}, {"id": "20941880182", "viewId": null, "name": null, "category": "other", "apiName": "clicked-coms-icon-on-sharing-bar", "eventType": "custom", "eventFilter": null}, {"id": "20955700004", "viewId": null, "name": null, "category": "other", "apiName": "add to my articles", "eventType": "custom", "eventFilter": null}, {"id": "20963440003", "viewId": null, "name": null, "category": "other", "apiName": "user-saw-sidebar", "eventType": "custom", "eventFilter": null}, {"id": "20976700071", "viewId": null, "name": null, "category": "other", "apiName": "clicked-expandable-section", "eventType": "custom", "eventFilter": null}, {"id": "21031234702", "viewId": null, "name": null, "category": "other", "apiName": "comment_name_pop_up_displayed", "eventType": "custom", "eventFilter": null}, {"id": "21032662090", "viewId": null, "name": null, "category": "other", "apiName": "comment_name_pop_up_clicked_x", "eventType": "custom", "eventFilter": null}, {"id": "21055580281", "viewId": null, "name": null, "category": "other", "apiName": "comment_name_pop_up_clicked_ok", "eventType": "custom", "eventFilter": null}, {"id": "21065710328", "viewId": null, "name": null, "category": "other", "apiName": "comment_name_pop_up_clicked_learn_more", "eventType": "custom", "eventFilter": null}, {"id": "21069420083", "viewId": null, "name": null, "category": "other", "apiName": "comment_name_pop_up_clicked_anywhere", "eventType": "custom", "eventFilter": null}, {"id": "21077020534", "viewId": null, "name": null, "category": "other", "apiName": "comment_name_pop_up_clicked_here", "eventType": "custom", "eventFilter": null}, {"id": "21110320653", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-most-popular", "eventType": "custom", "eventFilter": null}, {"id": "21213682403", "viewId": null, "name": null, "category": "other", "apiName": "clicked-puzzle-tab", "eventType": "custom", "eventFilter": null}, {"id": "21214430156", "viewId": null, "name": null, "category": "other", "apiName": "button-show less", "eventType": "custom", "eventFilter": null}, {"id": "21219140135", "viewId": "19063710241", "name": null, "category": "other", "apiName": "18133370155_conv_or_view_all_subscription_options_from_checkout_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "form#account-setup p.nuk-3_7-view-all-options a"}}, {"id": "21219921530", "viewId": null, "name": null, "category": "other", "apiName": "clicked-puzzle-category", "eventType": "custom", "eventFilter": null}, {"id": "21220851853", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "21231561205", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-show-more", "eventType": "custom", "eventFilter": null}, {"id": "21234890108", "viewId": null, "name": null, "category": "other", "apiName": "cta-flash-sale", "eventType": "custom", "eventFilter": null}, {"id": "21237750564", "viewId": null, "name": null, "category": "other", "apiName": "closed-flash-sale", "eventType": "custom", "eventFilter": null}, {"id": "21238630732", "viewId": null, "name": null, "category": "other", "apiName": "interact-with-free-trial-summary", "eventType": "custom", "eventFilter": null}, {"id": "21253250124", "viewId": null, "name": null, "category": "other", "apiName": "clicked-show-less-go-back", "eventType": "custom", "eventFilter": null}, {"id": "21291990918", "viewId": null, "name": null, "category": "other", "apiName": "swg_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21316060526", "viewId": null, "name": null, "category": "other", "apiName": "swg_premium_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21324070892", "viewId": null, "name": null, "category": "other", "apiName": "scroll25", "eventType": "custom", "eventFilter": null}, {"id": "21330000682", "viewId": null, "name": null, "category": "other", "apiName": "scroll75", "eventType": "custom", "eventFilter": null}, {"id": "21332230535", "viewId": null, "name": null, "category": "other", "apiName": "scroll100", "eventType": "custom", "eventFilter": null}, {"id": "21334170048", "viewId": null, "name": null, "category": "other", "apiName": "swg_basic_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21354940212", "viewId": null, "name": null, "category": "other", "apiName": "scroll50", "eventType": "custom", "eventFilter": null}, {"id": "21360700109", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-related-or-most-popular", "eventType": "custom", "eventFilter": null}, {"id": "21367970267", "viewId": null, "name": null, "category": "other", "apiName": "clicked-logo-or-category", "eventType": "custom", "eventFilter": null}, {"id": "21562371901", "viewId": "20143500955", "name": null, "category": "other", "apiName": "18261964525_all_anchor_tags_in_nav", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".GlobalNav a, .GlobalMenu a"}}, {"id": "21602072985", "viewId": null, "name": null, "category": "other", "apiName": "header-global navigation-todays sections", "eventType": "custom", "eventFilter": null}, {"id": "21605001940", "viewId": null, "name": null, "category": "other", "apiName": "header-global navigation-logo", "eventType": "custom", "eventFilter": null}, {"id": "21615471183", "viewId": null, "name": null, "category": "other", "apiName": "1-10-most-related", "eventType": "custom", "eventFilter": null}, {"id": "21704911295", "viewId": null, "name": null, "category": "other", "apiName": "pack details - subscribe with google", "eventType": "custom", "eventFilter": null}, {"id": "21707481344", "viewId": null, "name": null, "category": "other", "apiName": "swg_clicked_basic", "eventType": "custom", "eventFilter": null}, {"id": "21722662069", "viewId": null, "name": null, "category": "other", "apiName": "creating account modal - displayed - google event 1", "eventType": "custom", "eventFilter": null}, {"id": "21728510575", "viewId": null, "name": null, "category": "other", "apiName": "swg_clicked_any", "eventType": "custom", "eventFilter": null}, {"id": "21728800057", "viewId": null, "name": null, "category": "other", "apiName": "swg_clicked_premium", "eventType": "custom", "eventFilter": null}, {"id": "21748330740", "viewId": null, "name": null, "category": "other", "apiName": "google subscription confirmation modal - continue reading", "eventType": "custom", "eventFilter": null}, {"id": "21748981494", "viewId": null, "name": null, "category": "other", "apiName": "google payflow modal - displayed", "eventType": "custom", "eventFilter": null}, {"id": "21750440072", "viewId": null, "name": null, "category": "other", "apiName": "google payflow modal - cancel", "eventType": "custom", "eventFilter": null}, {"id": "21753600919", "viewId": null, "name": null, "category": "other", "apiName": "clicked-editors-choice", "eventType": "custom", "eventFilter": null}, {"id": "21771480069", "viewId": null, "name": null, "category": "other", "apiName": "creating account modal - displayed - google event 2", "eventType": "custom", "eventFilter": null}, {"id": "21968240004", "viewId": null, "name": null, "category": "other", "apiName": "clicked-any-article-from-related-or-todays-rail", "eventType": "custom", "eventFilter": null}, {"id": "21977360038", "viewId": null, "name": null, "category": "other", "apiName": "clicked-article-in-todays", "eventType": "custom", "eventFilter": null}, {"id": "22023006917", "viewId": null, "name": null, "category": "other", "apiName": "widget-article", "eventType": "custom", "eventFilter": null}, {"id": "22029384842", "viewId": null, "name": null, "category": "other", "apiName": "clicked-sidebar-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "22039837852", "viewId": null, "name": null, "category": "other", "apiName": "clicked-sidebar-puzzle-or-homepage", "eventType": "custom", "eventFilter": null}, {"id": "22054391947", "viewId": null, "name": null, "category": "other", "apiName": "scrolled-to-puzzle-section", "eventType": "custom", "eventFilter": null}, {"id": "22066001636", "viewId": null, "name": null, "category": "other", "apiName": "clicked-sidebar-puzzle-or-related", "eventType": "custom", "eventFilter": null}, {"id": "22148700181", "viewId": null, "name": null, "category": "other", "apiName": "clicked-puzzle-on-homepage", "eventType": "custom", "eventFilter": null}, {"id": "22296862323", "viewId": null, "name": null, "category": "other", "apiName": "widget-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "22316140848", "viewId": null, "name": null, "category": "other", "apiName": "returned-to-key-moments", "eventType": "custom", "eventFilter": null}, {"id": "22323990635", "viewId": "19724408845", "name": null, "category": "other", "apiName": "18261964525_conv_click_key_moment", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[class*=\"KeyFactTextLink\"]"}}, {"id": "22399554593", "viewId": null, "name": null, "category": "other", "apiName": "header-global navigation-todays sections-puzzles", "eventType": "custom", "eventFilter": null}, {"id": "22423090016", "viewId": null, "name": null, "category": "other", "apiName": "clicked-puzzle-nav", "eventType": "custom", "eventFilter": null}, {"id": "22574760019", "viewId": null, "name": null, "category": "other", "apiName": "clicked-starter-category", "eventType": "custom", "eventFilter": null}, {"id": "22599070076", "viewId": null, "name": null, "category": "other", "apiName": "clicked-starter-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "23077750041", "viewId": null, "name": null, "category": "other", "apiName": "cv-close-download-prompt", "eventType": "custom", "eventFilter": null}, {"id": "23081040043", "viewId": null, "name": null, "category": "other", "apiName": "cv-click-app-download-cta", "eventType": "custom", "eventFilter": null}, {"id": "23359790595", "viewId": null, "name": null, "category": "other", "apiName": "marketing-opt-in", "eventType": "custom", "eventFilter": null}, {"id": "23478040863", "viewId": null, "name": null, "category": "other", "apiName": "payment failed- stripe payment", "eventType": "custom", "eventFilter": null}, {"id": "23478451050", "viewId": null, "name": null, "category": "other", "apiName": "payment successful- stripe payment", "eventType": "custom", "eventFilter": null}, {"id": "23486630432", "viewId": null, "name": null, "category": "other", "apiName": "closed-web-story", "eventType": "custom", "eventFilter": null}, {"id": "23531530094", "viewId": null, "name": null, "category": "other", "apiName": "clicked-web-story", "eventType": "custom", "eventFilter": null}, {"id": "23556960030", "viewId": null, "name": null, "category": "other", "apiName": "continue button - complete order - stripe", "eventType": "custom", "eventFilter": null}, {"id": "23966580976", "viewId": null, "name": null, "category": "other", "apiName": "clicked-radio-link", "eventType": "custom", "eventFilter": null}, {"id": "23987201698", "viewId": null, "name": null, "category": "other", "apiName": "clicked-radio-nav", "eventType": "custom", "eventFilter": null}, {"id": "24135400793", "viewId": null, "name": null, "category": "other", "apiName": "light-viewed", "eventType": "custom", "eventFilter": null}, {"id": "24175480117", "viewId": null, "name": null, "category": "other", "apiName": "26-viewed", "eventType": "custom", "eventFilter": null}, {"id": "24177150314", "viewId": null, "name": null, "category": "other", "apiName": "15-viewed", "eventType": "custom", "eventFilter": null}, {"id": "24194070867", "viewId": null, "name": null, "category": "other", "apiName": "link- view all articles", "eventType": "custom", "eventFilter": null}, {"id": "24220340016", "viewId": null, "name": null, "category": "other", "apiName": "button- destinations", "eventType": "custom", "eventFilter": null}, {"id": "24233750040", "viewId": null, "name": null, "category": "other", "apiName": "button- offers", "eventType": "custom", "eventFilter": null}, {"id": "24235890067", "viewId": null, "name": null, "category": "other", "apiName": "article selected", "eventType": "custom", "eventFilter": null}, {"id": "24241680144", "viewId": null, "name": null, "category": "other", "apiName": "button- holiday-types", "eventType": "custom", "eventFilter": null}, {"id": "24242980439", "viewId": null, "name": null, "category": "other", "apiName": "button- most-read-stories", "eventType": "custom", "eventFilter": null}, {"id": "24307460709", "viewId": null, "name": null, "category": "other", "apiName": "clicks-inline-related-article", "eventType": "custom", "eventFilter": null}, {"id": "24369560105", "viewId": null, "name": null, "category": "other", "apiName": "clicks-any-related-article", "eventType": "custom", "eventFilter": null}, {"id": "24571301954", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-gift-article", "eventType": "custom", "eventFilter": null}, {"id": "24574550900", "viewId": null, "name": null, "category": "other", "apiName": "clicked-any-share", "eventType": "custom", "eventFilter": null}, {"id": "24584120677", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-close-button-for-gift-article", "eventType": "custom", "eventFilter": null}, {"id": "24614900131", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-close-button-for-share-articles", "eventType": "custom", "eventFilter": null}, {"id": "24619160453", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-email-a-link", "eventType": "custom", "eventFilter": null}, {"id": "24715800552", "viewId": null, "name": null, "category": "other", "apiName": "newsletter - popup - open", "eventType": "custom", "eventFilter": null}, {"id": "24758640142", "viewId": null, "name": null, "category": "other", "apiName": "button - marketing opt-in-promotions-true", "eventType": "custom", "eventFilter": null}, {"id": "24790631800", "viewId": null, "name": null, "category": "other", "apiName": "recommended-articles-click", "eventType": "custom", "eventFilter": null}, {"id": "24807140035", "viewId": null, "name": null, "category": "other", "apiName": "button - marketing opt-in-upgrade-false", "eventType": "custom", "eventFilter": null}, {"id": "24858360844", "viewId": null, "name": null, "category": "other", "apiName": "continue button - complete order - direct_debit", "eventType": "custom", "eventFilter": null}, {"id": "24871780074", "viewId": null, "name": null, "category": "other", "apiName": "click-nur-9-2-sidebar-close", "eventType": "custom", "eventFilter": null}, {"id": "24898300085", "viewId": null, "name": null, "category": "other", "apiName": "continue button - complete order - paypal", "eventType": "custom", "eventFilter": null}, {"id": "24935500029", "viewId": null, "name": null, "category": "other", "apiName": "click-nur-9-2-sidebar", "eventType": "custom", "eventFilter": null}, {"id": "24961110624", "viewId": null, "name": null, "category": "other", "apiName": "link - login", "eventType": "custom", "eventFilter": null}, {"id": "25056490605", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-1", "eventType": "custom", "eventFilter": null}, {"id": "25061950463", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-2", "eventType": "custom", "eventFilter": null}, {"id": "25063520747", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-5", "eventType": "custom", "eventFilter": null}, {"id": "25066710014", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-10", "eventType": "custom", "eventFilter": null}, {"id": "25067950862", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-7", "eventType": "custom", "eventFilter": null}, {"id": "25069870295", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-8", "eventType": "custom", "eventFilter": null}, {"id": "25075510370", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-6", "eventType": "custom", "eventFilter": null}, {"id": "25084060111", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-3", "eventType": "custom", "eventFilter": null}, {"id": "25094980123", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-4", "eventType": "custom", "eventFilter": null}, {"id": "25110960008", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-9", "eventType": "custom", "eventFilter": null}, {"id": "25209330096", "viewId": null, "name": null, "category": "other", "apiName": "play-button-clicked", "eventType": "custom", "eventFilter": null}, {"id": "25408420198", "viewId": null, "name": null, "category": "other", "apiName": "Click_Close", "eventType": "custom", "eventFilter": null}, {"id": "25411840465", "viewId": null, "name": null, "category": "other", "apiName": "automatic renewal terms - expand", "eventType": "custom", "eventFilter": null}, {"id": "25412000419", "viewId": null, "name": null, "category": "other", "apiName": "automatic renewal terms - collapse", "eventType": "custom", "eventFilter": null}, {"id": "25418390163", "viewId": null, "name": null, "category": "other", "apiName": "Click_popup_CTA", "eventType": "custom", "eventFilter": null}, {"id": "25437730581", "viewId": null, "name": null, "category": "other", "apiName": "feedback-thumbs-down", "eventType": "custom", "eventFilter": null}, {"id": "25448080549", "viewId": null, "name": null, "category": "other", "apiName": "feedback-thumbs-up", "eventType": "custom", "eventFilter": null}, {"id": "25448900228", "viewId": null, "name": null, "category": "other", "apiName": "Sunday_Crossword_plays", "eventType": "custom", "eventFilter": null}, {"id": "25461910680", "viewId": null, "name": null, "category": "other", "apiName": "pause-button-clicked", "eventType": "custom", "eventFilter": null}, {"id": "25581150213", "viewId": null, "name": null, "category": "other", "apiName": "Article_3_viewed_in_registration", "eventType": "custom", "eventFilter": null}, {"id": "25606930236", "viewId": null, "name": null, "category": "other", "apiName": "subscription - success", "eventType": "custom", "eventFilter": null}, {"id": "25613770234", "viewId": null, "name": null, "category": "other", "apiName": "Article_limit_reached", "eventType": "custom", "eventFilter": null}, {"id": "25622040267", "viewId": null, "name": null, "category": "other", "apiName": "Article_1_viewed_in_registration", "eventType": "custom", "eventFilter": null}, {"id": "25625230064", "viewId": null, "name": null, "category": "other", "apiName": "NUK_6_11_Registration_complete", "eventType": "custom", "eventFilter": null}, {"id": "25633740074", "viewId": null, "name": null, "category": "other", "apiName": "Article_2_viewed_in_registration", "eventType": "custom", "eventFilter": null}, {"id": "25663900419", "viewId": null, "name": null, "category": "other", "apiName": "confirmation - PAYPAL", "eventType": "custom", "eventFilter": null}, {"id": "25674440365", "viewId": null, "name": null, "category": "other", "apiName": "confirmation - DIRECT_DEBIT", "eventType": "custom", "eventFilter": null}, {"id": "25687090370", "viewId": null, "name": null, "category": "other", "apiName": "registration", "eventType": "custom", "eventFilter": null}, {"id": "25699340482", "viewId": null, "name": null, "category": "other", "apiName": "Clicks_on_paywall_CTA", "eventType": "custom", "eventFilter": null}, {"id": "25704220059", "viewId": null, "name": null, "category": "other", "apiName": "confirmation - CREDIT_CARD", "eventType": "custom", "eventFilter": null}, {"id": "25789870374", "viewId": null, "name": null, "category": "other", "apiName": "clicks-returning-users-pop-up-cta", "eventType": "custom", "eventFilter": null}, {"id": "25791680852", "viewId": null, "name": null, "category": "other", "apiName": "Saw_alternative_puzzles", "eventType": "custom", "eventFilter": null}, {"id": "25817290903", "viewId": null, "name": null, "category": "other", "apiName": "Played_alternative_puzzles", "eventType": "custom", "eventFilter": null}, {"id": "25837020063", "viewId": "19724408845", "name": null, "category": "other", "apiName": "18261964525_conv_clicks_on_the_save_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "div[data-testid=\"save-star\"] button"}}, {"id": "25971480028", "viewId": null, "name": null, "category": "other", "apiName": "Clicked_on_a_puzzle_and_play", "eventType": "custom", "eventFilter": null}, {"id": "26021200170", "viewId": "19724408845", "name": null, "category": "other", "apiName": "18261964525_conv_clicked_any_article_in_todays", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#related-articles article a"}}, {"id": "26032282766", "viewId": null, "name": null, "category": "other", "apiName": "CONV_Clicks_registration_paywall_CTA", "eventType": "custom", "eventFilter": null}, {"id": "26079880178", "viewId": null, "name": null, "category": "other", "apiName": "nur-11-0-show-more", "eventType": "custom", "eventFilter": null}, {"id": "26142710610", "viewId": null, "name": null, "category": "other", "apiName": "conv_clicks_student_subscription_under_other_subscription_opt", "eventType": "custom", "eventFilter": null}, {"id": "26156401167", "viewId": null, "name": null, "category": "other", "apiName": "header-global navigation-channels-puzzles", "eventType": "custom", "eventFilter": null}, {"id": "26156911258", "viewId": null, "name": null, "category": "other", "apiName": "text-field updated-email address", "eventType": "custom", "eventFilter": null}, {"id": "26158100659", "viewId": null, "name": null, "category": "other", "apiName": "conv_studentPage_cta_click__center", "eventType": "custom", "eventFilter": null}, {"id": "26160251648", "viewId": null, "name": null, "category": "other", "apiName": "conv_Play_for_8_seconds", "eventType": "custom", "eventFilter": null}, {"id": "26161891633", "viewId": null, "name": null, "category": "other", "apiName": "header-global navigation-channels", "eventType": "custom", "eventFilter": null}, {"id": "26164491243", "viewId": null, "name": null, "category": "other", "apiName": "clicks-take-the-tour", "eventType": "custom", "eventFilter": null}, {"id": "26167731184", "viewId": null, "name": null, "category": "other", "apiName": "mobile menu-open", "eventType": "custom", "eventFilter": null}, {"id": "26168370790", "viewId": null, "name": null, "category": "other", "apiName": "conv_studentPage_cta_click__top", "eventType": "custom", "eventFilter": null}, {"id": "26171601178", "viewId": null, "name": null, "category": "other", "apiName": "Clicks regi wall 1", "eventType": "custom", "eventFilter": null}, {"id": "26172470543", "viewId": null, "name": null, "category": "other", "apiName": "conv_User_clicks_on_Click_here_CTA", "eventType": "custom", "eventFilter": null}, {"id": "26173100465", "viewId": null, "name": null, "category": "other", "apiName": "conv_clicks_Student_in_the_Nav_subscription_drop_down", "eventType": "custom", "eventFilter": null}, {"id": "26177170234", "viewId": null, "name": null, "category": "other", "apiName": "cv-9-11-clicks_paywall_v1", "eventType": "custom", "eventFilter": null}, {"id": "26185160822", "viewId": null, "name": null, "category": "other", "apiName": "User changes email", "eventType": "custom", "eventFilter": null}, {"id": "26188930259", "viewId": null, "name": null, "category": "other", "apiName": "cv-9-11-clicks_paywall_v2", "eventType": "custom", "eventFilter": null}, {"id": "26205081555", "viewId": null, "name": null, "category": "other", "apiName": "clicks-overlay-to-close", "eventType": "custom", "eventFilter": null}, {"id": "26220531002", "viewId": null, "name": null, "category": "other", "apiName": "clicks-cross-to-close", "eventType": "custom", "eventFilter": null}, {"id": "26249490775", "viewId": null, "name": null, "category": "other", "apiName": "clicks-close-to-finish", "eventType": "custom", "eventFilter": null}, {"id": "26261180028", "viewId": null, "name": null, "category": "other", "apiName": "conv_Opens_nav_mobile_or_tablet", "eventType": "custom", "eventFilter": null}, {"id": "26289080018", "viewId": null, "name": null, "category": "other", "apiName": "clicks-maybe-later", "eventType": "custom", "eventFilter": null}, {"id": "26294300015", "viewId": null, "name": null, "category": "other", "apiName": "CONV_Clicked_tooltip", "eventType": "custom", "eventFilter": null}, {"id": "26321770610", "viewId": null, "name": null, "category": "other", "apiName": "flash sale popup modal-subscribe cta", "eventType": "custom", "eventFilter": null}, {"id": "26350550144", "viewId": null, "name": null, "category": "other", "apiName": "link - subscribe", "eventType": "custom", "eventFilter": null}, {"id": "26361850361", "viewId": null, "name": null, "category": "other", "apiName": "newsletters-hub-toggle", "eventType": "custom", "eventFilter": null}, {"id": "26582850099", "viewId": null, "name": null, "category": "other", "apiName": "puzzle completed", "eventType": "custom", "eventFilter": null}, {"id": "26585910135", "viewId": null, "name": null, "category": "other", "apiName": "puzzle started", "eventType": "custom", "eventFilter": null}, {"id": "26590720083", "viewId": null, "name": null, "category": "other", "apiName": "puzzle category clicked", "eventType": "custom", "eventFilter": null}, {"id": "26617230038", "viewId": null, "name": null, "category": "other", "apiName": "puzzle completed-success", "eventType": "custom", "eventFilter": null}, {"id": "26624980749", "viewId": null, "name": null, "category": "other", "apiName": "closes-email-fly-in", "eventType": "custom", "eventFilter": null}, {"id": "27162050173", "viewId": null, "name": null, "category": "other", "apiName": "nuk-3-16-continue-cta", "eventType": "custom", "eventFilter": null}, {"id": "27166700182", "viewId": null, "name": null, "category": "other", "apiName": "conv_closes_survey", "eventType": "custom", "eventFilter": null}, {"id": "27168470040", "viewId": null, "name": null, "category": "other", "apiName": "times-radio-banner-cta", "eventType": "custom", "eventFilter": null}, {"id": "27177560134", "viewId": null, "name": null, "category": "other", "apiName": "nuk-3-16-continue-cta-v2", "eventType": "custom", "eventFilter": null}, {"id": "27177860121", "viewId": null, "name": null, "category": "other", "apiName": "nuk-3-16-continue-cta-v1", "eventType": "custom", "eventFilter": null}, {"id": "27178330248", "viewId": null, "name": null, "category": "other", "apiName": "nur-0-3-closes-survey", "eventType": "custom", "eventFilter": null}, {"id": "27201170140", "viewId": null, "name": null, "category": "other", "apiName": "nuk-3-16-subscribe-now-v2", "eventType": "custom", "eventFilter": null}, {"id": "27208940164", "viewId": null, "name": null, "category": "other", "apiName": "nuk-3-16-view-subs-v1", "eventType": "custom", "eventFilter": null}, {"id": "27303200915", "viewId": null, "name": null, "category": "other", "apiName": "conv-clicks-offer-2", "eventType": "custom", "eventFilter": null}, {"id": "27307470879", "viewId": null, "name": null, "category": "other", "apiName": "conv-exits-on-page-3-puzzles", "eventType": "custom", "eventFilter": null}, {"id": "27350620296", "viewId": null, "name": null, "category": "other", "apiName": "conv-clicks-times-plus-link", "eventType": "custom", "eventFilter": null}, {"id": "27405290171", "viewId": null, "name": null, "category": "other", "apiName": "conv-clicks-offer-1", "eventType": "custom", "eventFilter": null}, {"id": "27419230071", "viewId": null, "name": null, "category": "other", "apiName": "conv-clicks-offer-3", "eventType": "custom", "eventFilter": null}, {"id": "27432241166", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_0_52_clicks_on_return_user_pop_up_cta", "eventType": "custom", "eventFilter": null}, {"id": "27438701056", "viewId": null, "name": null, "category": "other", "apiName": "clicks-todays-news-section", "eventType": "custom", "eventFilter": null}, {"id": "27444461085", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-mini-quiz", "eventType": "custom", "eventFilter": null}, {"id": "27451951304", "viewId": null, "name": null, "category": "other", "apiName": "clicks-hint-five", "eventType": "custom", "eventFilter": null}, {"id": "27457151495", "viewId": null, "name": null, "category": "other", "apiName": "clicks-hint-once", "eventType": "custom", "eventFilter": null}, {"id": "27457261090", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_0_52_clicks_on_store_page_pop_up_cta", "eventType": "custom", "eventFilter": null}, {"id": "27459510076", "viewId": null, "name": null, "category": "other", "apiName": "conv-exits-on-page-3-timeplus", "eventType": "custom", "eventFilter": null}, {"id": "27467461015", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-most-commented", "eventType": "custom", "eventFilter": null}, {"id": "27503061124", "viewId": null, "name": null, "category": "other", "apiName": "clicks-hint-four", "eventType": "custom", "eventFilter": null}, {"id": "27570720470", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_0_52_clicks_on_paywall_cta", "eventType": "custom", "eventFilter": null}, {"id": "27572720510", "viewId": "20143500955", "name": null, "category": "other", "apiName": "18261964525_conv_clicks_explore_and_clicks_puzzles", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#channels-menu-desktop .GlobalMenu-dropdownListItem--puzzles"}}, {"id": "27578180614", "viewId": null, "name": null, "category": "other", "apiName": "clicks-show-more-btn", "eventType": "custom", "eventFilter": null}, {"id": "27595220356", "viewId": null, "name": null, "category": "other", "apiName": "clicks-any-puzzle-in-sidebar", "eventType": "custom", "eventFilter": null}, {"id": "27618840208", "viewId": null, "name": null, "category": "other", "apiName": "clicks-hint-twice", "eventType": "custom", "eventFilter": null}, {"id": "27619590093", "viewId": null, "name": null, "category": "other", "apiName": "clicks-hint-three", "eventType": "custom", "eventFilter": null}, {"id": "27667130322", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_0_52_clicks_on_homepage_cta", "eventType": "custom", "eventFilter": null}, {"id": "27682350331", "viewId": null, "name": null, "category": "other", "apiName": "conv-store-page-popup-cta-click", "eventType": "custom", "eventFilter": null}, {"id": "27932660167", "viewId": null, "name": null, "category": "other", "apiName": "hh_canary", "eventType": "custom", "eventFilter": null}, {"id": "27934760288", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-promotions-box-2", "eventType": "custom", "eventFilter": null}, {"id": "27954030240", "viewId": null, "name": null, "category": "other", "apiName": "hh_cat_killer", "eventType": "custom", "eventFilter": null}, {"id": "27958050695", "viewId": null, "name": null, "category": "other", "apiName": "extremism", "eventType": "custom", "eventFilter": null}, {"id": "27961980915", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-concise-crossword-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "27962020500", "viewId": null, "name": null, "category": "other", "apiName": "clicks-any-word-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "27964250925", "viewId": null, "name": null, "category": "other", "apiName": "clicks-any-card-and-boardgame-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "27965090622", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-polygon-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "27965470605", "viewId": null, "name": null, "category": "other", "apiName": "clicks-any-number-and-logic-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "27970960409", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-offers-box-1", "eventType": "custom", "eventFilter": null}, {"id": "27973060746", "viewId": null, "name": null, "category": "other", "apiName": "clicks-any-crossword-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "27974800726", "viewId": null, "name": null, "category": "other", "apiName": "clicks-any-sudoko-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "28003131028", "viewId": null, "name": null, "category": "other", "apiName": "hh_extremism", "eventType": "custom", "eventFilter": null}, {"id": "28035090092", "viewId": null, "name": null, "category": "other", "apiName": "hh_sports", "eventType": "custom", "eventFilter": null}, {"id": "28037760696", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-sudoko-hero", "eventType": "custom", "eventFilter": null}, {"id": "28064320256", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-fiendish-sudoko-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "28088470016", "viewId": null, "name": null, "category": "other", "apiName": "logged-in-users", "eventType": "custom", "eventFilter": null}, {"id": "28088500019", "viewId": null, "name": null, "category": "other", "apiName": "logged-out-users", "eventType": "custom", "eventFilter": null}, {"id": "28089850052", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-crossword-hero", "eventType": "custom", "eventFilter": null}, {"id": "28119160013", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-polygon-hero", "eventType": "custom", "eventFilter": null}, {"id": "28166250443", "viewId": null, "name": null, "category": "other", "apiName": "hh_putin", "eventType": "custom", "eventFilter": null}, {"id": "28194280588", "viewId": null, "name": null, "category": "other", "apiName": "hh_steps", "eventType": "custom", "eventFilter": null}, {"id": "28240120563", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-thumbs-up", "eventType": "custom", "eventFilter": null}, {"id": "28326280036", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-thumbs-down", "eventType": "custom", "eventFilter": null}, {"id": "28351880780", "viewId": null, "name": null, "category": "other", "apiName": "clicks-today-chip", "eventType": "custom", "eventFilter": null}, {"id": "28359411329", "viewId": null, "name": null, "category": "other", "apiName": "clicks-six-days-ago-chip", "eventType": "custom", "eventFilter": null}, {"id": "28382941357", "viewId": null, "name": null, "category": "other", "apiName": "clicks-three-days-ago-chip", "eventType": "custom", "eventFilter": null}, {"id": "28405090335", "viewId": null, "name": null, "category": "other", "apiName": "hh_plots", "eventType": "custom", "eventFilter": null}, {"id": "28405350754", "viewId": null, "name": null, "category": "other", "apiName": "hh_nhs", "eventType": "custom", "eventFilter": null}, {"id": "28430160634", "viewId": null, "name": null, "category": "other", "apiName": "clicks-four-days-ago-chip", "eventType": "custom", "eventFilter": null}, {"id": "28460250571", "viewId": null, "name": null, "category": "other", "apiName": "clicks-yesterdays-chip", "eventType": "custom", "eventFilter": null}, {"id": "28488900197", "viewId": null, "name": null, "category": "other", "apiName": "clicks-five-days-ago-chip", "eventType": "custom", "eventFilter": null}, {"id": "28500270018", "viewId": null, "name": null, "category": "other", "apiName": "clicks-two-days-ago-chip", "eventType": "custom", "eventFilter": null}, {"id": "28537550039", "viewId": null, "name": null, "category": "other", "apiName": "hh_sunak", "eventType": "custom", "eventFilter": null}, {"id": "28560050412", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_16_0_clicks_on_return_user_pop_up_cta", "eventType": "custom", "eventFilter": null}, {"id": "28563980610", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_5_users_clicks_cta_on_exit_intent_pop_up", "eventType": "custom", "eventFilter": null}, {"id": "28566490520", "viewId": null, "name": null, "category": "other", "apiName": "clicks-date-chip", "eventType": "custom", "eventFilter": null}, {"id": "28570160700", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_5_user_clicks_cta_on_return_user_pop_up", "eventType": "custom", "eventFilter": null}, {"id": "28576961186", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_5_page_view_of_the_international_store", "eventType": "custom", "eventFilter": null}, {"id": "28611630311", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_16_0_clicks_on_homepage_cta", "eventType": "custom", "eventFilter": null}, {"id": "28664850066", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_16_0_clicks_on_paywall_cta", "eventType": "custom", "eventFilter": null}, {"id": "28702630464", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_5_user_clicks_paywall", "eventType": "custom", "eventFilter": null}, {"id": "28719500328", "viewId": null, "name": null, "category": "other", "apiName": "hh_smoking", "eventType": "custom", "eventFilter": null}, {"id": "28729940035", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_5_user_clicks_homepage_banner", "eventType": "custom", "eventFilter": null}, {"id": "28733230202", "viewId": null, "name": null, "category": "other", "apiName": "hh_cass", "eventType": "custom", "eventFilter": null}, {"id": "28809930871", "viewId": null, "name": null, "category": "other", "apiName": "conv_nur_6_7_clicks_first_puzzle", "eventType": "custom", "eventFilter": null}, {"id": "28825640607", "viewId": null, "name": null, "category": "other", "apiName": "conv_nur_6_7_clicks_third_puzzle", "eventType": "custom", "eventFilter": null}, {"id": "28825870156", "viewId": null, "name": null, "category": "other", "apiName": "author-unfollowed", "eventType": "custom", "eventFilter": null}, {"id": "28840390122", "viewId": null, "name": null, "category": "other", "apiName": "author-followed", "eventType": "custom", "eventFilter": null}, {"id": "28853330198", "viewId": null, "name": null, "category": "other", "apiName": "author-following-popover-x", "eventType": "custom", "eventFilter": null}, {"id": "28914850033", "viewId": null, "name": null, "category": "other", "apiName": "conv_nur_6_7_clicks_second_puzzle", "eventType": "custom", "eventFilter": null}, {"id": "28935730015", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_12_1_user_clicks_paywall", "eventType": "custom", "eventFilter": null}, {"id": "28946840009", "viewId": null, "name": null, "category": "other", "apiName": "conv_nur_6_7_clicks_fourth_puzzle", "eventType": "custom", "eventFilter": null}, {"id": "28960800364", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_6_user_clicks_cta_on_return_user_pop_up", "eventType": "custom", "eventFilter": null}, {"id": "28986640490", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_6_user_clicks_paywall", "eventType": "custom", "eventFilter": null}, {"id": "29032270100", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_6_page_view_of_the_international_store", "eventType": "custom", "eventFilter": null}, {"id": "29037500263", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_6_user_clicks_homepage_banner", "eventType": "custom", "eventFilter": null}, {"id": "29208520313", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_7_user_clicks_cta_on_return_user_pop_up", "eventType": "custom", "eventFilter": null}, {"id": "29212890319", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_7_users_clicks_cta_on_exit_intent_pop_up", "eventType": "custom", "eventFilter": null}, {"id": "29225190273", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_7_page_view_of_the_international_store", "eventType": "custom", "eventFilter": null}, {"id": "29234920280", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_7_user_clicks_paywall", "eventType": "custom", "eventFilter": null}, {"id": "29252810045", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_7_user_clicks_homepage_banner", "eventType": "custom", "eventFilter": null}, {"id": "29324550531", "viewId": null, "name": null, "category": "other", "apiName": "newsletter-hub-feedback-x", "eventType": "custom", "eventFilter": null}, {"id": "29329930415", "viewId": null, "name": null, "category": "other", "apiName": "clicks_on_arrow_in_V1_to_channel_page", "eventType": "custom", "eventFilter": null}, {"id": "29337760432", "viewId": null, "name": null, "category": "other", "apiName": "clicks_puzzle_2_in_V1", "eventType": "custom", "eventFilter": null}, {"id": "29341620272", "viewId": null, "name": null, "category": "other", "apiName": "clicks_polygon_from_side_bar", "eventType": "custom", "eventFilter": null}, {"id": "29345851022", "viewId": null, "name": null, "category": "other", "apiName": "newsletter-author-unfollowed", "eventType": "custom", "eventFilter": null}, {"id": "29346040462", "viewId": null, "name": null, "category": "other", "apiName": "clicks_explore_more_puzzles_in_V2", "eventType": "custom", "eventFilter": null}, {"id": "29349650944", "viewId": null, "name": null, "category": "other", "apiName": "authors-following-undo", "eventType": "custom", "eventFilter": null}, {"id": "29359510866", "viewId": null, "name": null, "category": "other", "apiName": "clicks-banner-dismissed", "eventType": "custom", "eventFilter": null}, {"id": "29360950467", "viewId": null, "name": null, "category": "other", "apiName": "clicks_any_puzzle_in_V1", "eventType": "custom", "eventFilter": null}, {"id": "29361450370", "viewId": null, "name": null, "category": "other", "apiName": "clicks_puzzle_1_in_V1", "eventType": "custom", "eventFilter": null}, {"id": "29363400800", "viewId": null, "name": null, "category": "other", "apiName": "newsletter-author-undo", "eventType": "custom", "eventFilter": null}, {"id": "29368540125", "viewId": null, "name": null, "category": "other", "apiName": "clicks_puzzle_3_in_V1", "eventType": "custom", "eventFilter": null}, {"id": "29406510902", "viewId": null, "name": null, "category": "other", "apiName": "hh_labour", "eventType": "custom", "eventFilter": null}, {"id": "29407230187", "viewId": null, "name": null, "category": "other", "apiName": "newsletter-author-followed", "eventType": "custom", "eventFilter": null}, {"id": "29410470012", "viewId": null, "name": null, "category": "other", "apiName": "update_banner_displayed", "eventType": "custom", "eventFilter": null}, {"id": "29416150907", "viewId": null, "name": null, "category": "other", "apiName": "hh_blood_donors", "eventType": "custom", "eventFilter": null}, {"id": "29418220394", "viewId": null, "name": null, "category": "other", "apiName": "hh_cancer_rise", "eventType": "custom", "eventFilter": null}, {"id": "29418561081", "viewId": null, "name": null, "category": "other", "apiName": "hh_stolen", "eventType": "custom", "eventFilter": null}, {"id": "29418800179", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_8_user_clicks_homepage_banner", "eventType": "custom", "eventFilter": null}, {"id": "29422290595", "viewId": null, "name": null, "category": "other", "apiName": "hh_roam", "eventType": "custom", "eventFilter": null}, {"id": "29422600167", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_8_user_clicks_cta_on_return_user_pop_up", "eventType": "custom", "eventFilter": null}, {"id": "29423661033", "viewId": null, "name": null, "category": "other", "apiName": "hh_kafe", "eventType": "custom", "eventFilter": null}, {"id": "29423700579", "viewId": null, "name": null, "category": "other", "apiName": "hh_skin_cancer", "eventType": "custom", "eventFilter": null}, {"id": "29423820197", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_8_page_view_of_the_international_store", "eventType": "custom", "eventFilter": null}, {"id": "29426260681", "viewId": null, "name": null, "category": "other", "apiName": "hh_mbappe", "eventType": "custom", "eventFilter": null}, {"id": "29427500584", "viewId": null, "name": null, "category": "other", "apiName": "hh_bbc", "eventType": "custom", "eventFilter": null}, {"id": "29427640118", "viewId": null, "name": null, "category": "other", "apiName": "conv_nuk_5_8_user_clicks_paywall", "eventType": "custom", "eventFilter": null}, {"id": "29428480440", "viewId": null, "name": null, "category": "other", "apiName": "hh_youtube", "eventType": "custom", "eventFilter": null}, {"id": "29429310570", "viewId": null, "name": null, "category": "other", "apiName": "hh_health", "eventType": "custom", "eventFilter": null}, {"id": "29429361081", "viewId": null, "name": null, "category": "other", "apiName": "hh_millennials", "eventType": "custom", "eventFilter": null}, {"id": "29431580902", "viewId": null, "name": null, "category": "other", "apiName": "hh_ikea", "eventType": "custom", "eventFilter": null}, {"id": "29434760264", "viewId": null, "name": null, "category": "other", "apiName": "hh_dalston", "eventType": "custom", "eventFilter": null}, {"id": "29434810697", "viewId": null, "name": null, "category": "other", "apiName": "hh_farage_rayner", "eventType": "custom", "eventFilter": null}, {"id": "29434920429", "viewId": null, "name": null, "category": "other", "apiName": "hh_strictly", "eventType": "custom", "eventFilter": null}, {"id": "29435540647", "viewId": null, "name": null, "category": "other", "apiName": "hh_anxiety", "eventType": "custom", "eventFilter": null}, {"id": "29438960500", "viewId": null, "name": null, "category": "other", "apiName": "hh_comeback", "eventType": "custom", "eventFilter": null}, {"id": "29440730296", "viewId": null, "name": null, "category": "other", "apiName": "hh_gaza", "eventType": "custom", "eventFilter": null}, {"id": "29441370519", "viewId": null, "name": null, "category": "other", "apiName": "hh_india", "eventType": "custom", "eventFilter": null}, {"id": "29442980606", "viewId": null, "name": null, "category": "other", "apiName": "hh_shein", "eventType": "custom", "eventFilter": null}, {"id": "29443950249", "viewId": null, "name": null, "category": "other", "apiName": "hh_bee", "eventType": "custom", "eventFilter": null}, {"id": "29444140621", "viewId": null, "name": null, "category": "other", "apiName": "hh_le_pen", "eventType": "custom", "eventFilter": null}, {"id": "29444650426", "viewId": null, "name": null, "category": "other", "apiName": "hh_tributes", "eventType": "custom", "eventFilter": null}, {"id": "29445170028", "viewId": null, "name": null, "category": "other", "apiName": "hh_festival", "eventType": "custom", "eventFilter": null}, {"id": "29446100722", "viewId": null, "name": null, "category": "other", "apiName": "hh_smart_phone", "eventType": "custom", "eventFilter": null}, {"id": "29446610187", "viewId": null, "name": null, "category": "other", "apiName": "hh_djokovic", "eventType": "custom", "eventFilter": null}, {"id": "29448930512", "viewId": null, "name": null, "category": "other", "apiName": "hh_weapons", "eventType": "custom", "eventFilter": null}, {"id": "29449020972", "viewId": null, "name": null, "category": "other", "apiName": "hh_taylor", "eventType": "custom", "eventFilter": null}, {"id": "29450660413", "viewId": null, "name": null, "category": "other", "apiName": "hh_sunak_benefits", "eventType": "custom", "eventFilter": null}, {"id": "29454900186", "viewId": null, "name": null, "category": "other", "apiName": "hh_trent", "eventType": "custom", "eventFilter": null}, {"id": "29458420256", "viewId": null, "name": null, "category": "other", "apiName": "hh_localmps", "eventType": "custom", "eventFilter": null}, {"id": "29458590152", "viewId": null, "name": null, "category": "other", "apiName": "hh_farage", "eventType": "custom", "eventFilter": null}, {"id": "29458750217", "viewId": null, "name": null, "category": "other", "apiName": "hh_science", "eventType": "custom", "eventFilter": null}, {"id": "29458780208", "viewId": null, "name": null, "category": "other", "apiName": "hh_rory", "eventType": "custom", "eventFilter": null}, {"id": "29459520660", "viewId": null, "name": null, "category": "other", "apiName": "hh_airports", "eventType": "custom", "eventFilter": null}, {"id": "29459550398", "viewId": null, "name": null, "category": "other", "apiName": "hh_heathrow", "eventType": "custom", "eventFilter": null}, {"id": "29461210672", "viewId": null, "name": null, "category": "other", "apiName": "hh_naomi", "eventType": "custom", "eventFilter": null}, {"id": "29463750303", "viewId": null, "name": null, "category": "other", "apiName": "hh_dummy", "eventType": "custom", "eventFilter": null}, {"id": "29464150221", "viewId": null, "name": null, "category": "other", "apiName": "hh_china", "eventType": "custom", "eventFilter": null}, {"id": "29464370178", "viewId": null, "name": null, "category": "other", "apiName": "hh_debate", "eventType": "custom", "eventFilter": null}, {"id": "29464390793", "viewId": null, "name": null, "category": "other", "apiName": "hh_clooney", "eventType": "custom", "eventFilter": null}, {"id": "29465940193", "viewId": null, "name": null, "category": "other", "apiName": "hh_schoolboys", "eventType": "custom", "eventFilter": null}, {"id": "29469520333", "viewId": null, "name": null, "category": "other", "apiName": "hh_abandoned", "eventType": "custom", "eventFilter": null}, {"id": "29469670193", "viewId": null, "name": null, "category": "other", "apiName": "hh_rob", "eventType": "custom", "eventFilter": null}, {"id": "29470160032", "viewId": null, "name": null, "category": "other", "apiName": "hh_gsk", "eventType": "custom", "eventFilter": null}, {"id": "29470170554", "viewId": null, "name": null, "category": "other", "apiName": "hh_dday", "eventType": "custom", "eventFilter": null}, {"id": "29470170570", "viewId": null, "name": null, "category": "other", "apiName": "hh_southgate", "eventType": "custom", "eventFilter": null}, {"id": "29470220450", "viewId": null, "name": null, "category": "other", "apiName": "hh_madeleine", "eventType": "custom", "eventFilter": null}, {"id": "29471580289", "viewId": null, "name": null, "category": "other", "apiName": "hh_cabinet", "eventType": "custom", "eventFilter": null}, {"id": "29471770235", "viewId": null, "name": null, "category": "other", "apiName": "hh_reform", "eventType": "custom", "eventFilter": null}, {"id": "29472270616", "viewId": null, "name": null, "category": "other", "apiName": "hh_hard_right", "eventType": "custom", "eventFilter": null}, {"id": "29473720281", "viewId": null, "name": null, "category": "other", "apiName": "hh_harry", "eventType": "custom", "eventFilter": null}, {"id": "29473790210", "viewId": null, "name": null, "category": "other", "apiName": "hh_euro", "eventType": "custom", "eventFilter": null}, {"id": "29474570032", "viewId": null, "name": null, "category": "other", "apiName": "hh_starmer", "eventType": "custom", "eventFilter": null}, {"id": "29475910101", "viewId": null, "name": null, "category": "other", "apiName": "hh_tory_vow", "eventType": "custom", "eventFilter": null}, {"id": "29476580031", "viewId": null, "name": null, "category": "other", "apiName": "hh_cyber_attack", "eventType": "custom", "eventFilter": null}, {"id": "29477770074", "viewId": null, "name": null, "category": "other", "apiName": "hh_vote", "eventType": "custom", "eventFilter": null}, {"id": "29480940710", "viewId": null, "name": null, "category": "other", "apiName": "hh_bon_jovi", "eventType": "custom", "eventFilter": null}, {"id": "29481210122", "viewId": null, "name": null, "category": "other", "apiName": "hh_teens", "eventType": "custom", "eventFilter": null}, {"id": "29483460019", "viewId": null, "name": null, "category": "other", "apiName": "hh_sunak_poll", "eventType": "custom", "eventFilter": null}, {"id": "29487360091", "viewId": null, "name": null, "category": "other", "apiName": "hh_dementia", "eventType": "custom", "eventFilter": null}, {"id": "29491170014", "viewId": null, "name": null, "category": "other", "apiName": "hh_visas", "eventType": "custom", "eventFilter": null}, {"id": "29491840303", "viewId": null, "name": null, "category": "other", "apiName": "hh_david_tait", "eventType": "custom", "eventFilter": null}, {"id": "29499110251", "viewId": null, "name": null, "category": "other", "apiName": "hh_green_party", "eventType": "custom", "eventFilter": null}, {"id": "29501160407", "viewId": null, "name": null, "category": "other", "apiName": "hh_chanel", "eventType": "custom", "eventFilter": null}, {"id": "29502090264", "viewId": null, "name": null, "category": "other", "apiName": "hh_mosley", "eventType": "custom", "eventFilter": null}, {"id": "29504660091", "viewId": null, "name": null, "category": "other", "apiName": "hh_stalker", "eventType": "custom", "eventFilter": null}, {"id": "29508050375", "viewId": null, "name": null, "category": "other", "apiName": "hh_separatists", "eventType": "custom", "eventFilter": null}, {"id": "29512130240", "viewId": null, "name": null, "category": "other", "apiName": "hh_cathedral", "eventType": "custom", "eventFilter": null}, {"id": "29522260006", "viewId": null, "name": null, "category": "other", "apiName": "hh_rushford", "eventType": "custom", "eventFilter": null}, {"id": "29531910009", "viewId": null, "name": null, "category": "other", "apiName": "hh_putin_girls", "eventType": "custom", "eventFilter": null}, {"id": "29559450170", "viewId": null, "name": null, "category": "other", "apiName": "hh_queens", "eventType": "custom", "eventFilter": null}, {"id": "29567170093", "viewId": null, "name": null, "category": "other", "apiName": "hh_phone_theft", "eventType": "custom", "eventFilter": null}, {"id": "29586710046", "viewId": null, "name": null, "category": "other", "apiName": "hh_ghosts", "eventType": "custom", "eventFilter": null}, {"id": "29598450029", "viewId": null, "name": null, "category": "other", "apiName": "hh_armando", "eventType": "custom", "eventFilter": null}, {"id": "29598710017", "viewId": null, "name": null, "category": "other", "apiName": "hh_police", "eventType": "custom", "eventFilter": null}, {"id": "29611560040", "viewId": null, "name": null, "category": "other", "apiName": "hh_summer", "eventType": "custom", "eventFilter": null}, {"id": "29617510018", "viewId": null, "name": null, "category": "other", "apiName": "hh_growth", "eventType": "custom", "eventFilter": null}, {"id": "29619840015", "viewId": null, "name": null, "category": "other", "apiName": "hh_benefits", "eventType": "custom", "eventFilter": null}, {"id": "29628940018", "viewId": null, "name": null, "category": "other", "apiName": "hh_ross", "eventType": "custom", "eventFilter": null}, {"id": "29635320014", "viewId": null, "name": null, "category": "other", "apiName": "hh_philosophy", "eventType": "custom", "eventFilter": null}, {"id": "29732790007", "viewId": null, "name": null, "category": "other", "apiName": "conv-clicks-puzzle-1-in-onboarding", "eventType": "custom", "eventFilter": null}, {"id": "29744340022", "viewId": null, "name": null, "category": "other", "apiName": "play-for-8-seconds-of-puzzles-added-to-page-from-welcome-page", "eventType": "custom", "eventFilter": null}, {"id": "29758190008", "viewId": null, "name": null, "category": "other", "apiName": "conv-clicks-puzzle-2-in-onboarding", "eventType": "custom", "eventFilter": null}, {"id": "29763270016", "viewId": null, "name": null, "category": "other", "apiName": "conv-clicks-puzzle-3-in-onboarding", "eventType": "custom", "eventFilter": null}, {"id": "29777280005", "viewId": null, "name": null, "category": "other", "apiName": "conv-clicks-puzzle-4-in-onboarding", "eventType": "custom", "eventFilter": null}, {"id": "29841930149", "viewId": "20143500955", "name": null, "category": "other", "apiName": "18261964525_conv_clicks_on_paywall_cta__article_page", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#paywall-portal-page-footer a[href^=\"https://www.thetimes.com\"]"}}, {"id": "30024730067", "viewId": null, "name": null, "category": "other", "apiName": "scrolls-to-see-most-commented-section", "eventType": "custom", "eventFilter": null}, {"id": "30025900130", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-any-article-on-the-sport-page", "eventType": "custom", "eventFilter": null}, {"id": "30033650226", "viewId": null, "name": null, "category": "other", "apiName": "conv_nur_6_8_clicks_on_article_in_rail_on_articles", "eventType": "custom", "eventFilter": null}, {"id": "30045000236", "viewId": null, "name": null, "category": "other", "apiName": "conv_nur_6_8_clicks_on_article_in_rail_on_puzzles", "eventType": "custom", "eventFilter": null}, {"id": "30048030140", "viewId": null, "name": null, "category": "other", "apiName": "conv_nur_6_8_clicks_on_puzzle_in_rail_on_articles", "eventType": "custom", "eventFilter": null}, {"id": "30067130041", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-article-in-most-commented-rail", "eventType": "custom", "eventFilter": null}, {"id": "30075020005", "viewId": null, "name": null, "category": "other", "apiName": "login - success", "eventType": "custom", "eventFilter": null}, {"id": "30086011728", "viewId": null, "name": null, "category": "other", "apiName": "conv_3_5_click_share", "eventType": "custom", "eventFilter": null}, {"id": "30089781101", "viewId": "19063710241", "name": null, "category": "other", "apiName": "18133370155_checkout__marketing_opt_in_offers_from_news_int", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "input#acceptOffersFromNewsInt-checkbox, input#offersFromNewsInt"}}, {"id": "30097261387", "viewId": null, "name": null, "category": "other", "apiName": "conv_3_5_click_save", "eventType": "custom", "eventFilter": null}, {"id": "30111781327", "viewId": null, "name": null, "category": "other", "apiName": "conv-3-5-75-percentage-scroll", "eventType": "custom", "eventFilter": null}, {"id": "30128660453", "viewId": null, "name": null, "category": "other", "apiName": "conv-3-5-25-percentage-scroll", "eventType": "custom", "eventFilter": null}, {"id": "30132281213", "viewId": null, "name": null, "category": "other", "apiName": "checkbox updated-offers-from-news-int", "eventType": "custom", "eventFilter": null}, {"id": "30132880847", "viewId": null, "name": null, "category": "other", "apiName": "conv_3_5_clicked_star_reccomended", "eventType": "custom", "eventFilter": null}, {"id": "30140820331", "viewId": null, "name": null, "category": "other", "apiName": "conv_3_5_saw_the_comments_section_at_the_bottom_of_the_page", "eventType": "custom", "eventFilter": null}, {"id": "30142590232", "viewId": null, "name": null, "category": "other", "apiName": "checkbox updated-offers-other", "eventType": "custom", "eventFilter": null}, {"id": "30147010542", "viewId": "19063710241", "name": null, "category": "other", "apiName": "18133370155_checkout__marketing_opt_in_other", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "input#acceptOffersOther-checkbox, input#offersOther"}}, {"id": "30150080423", "viewId": null, "name": null, "category": "other", "apiName": "conv_3_5_replied_to_a_comment_on_a_thread", "eventType": "custom", "eventFilter": null}, {"id": "30152350084", "viewId": "30073610904", "name": null, "category": "other", "apiName": "18261964525_clicks_create_account__prod", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".primary"}}, {"id": "30155550551", "viewId": "30073610904", "name": null, "category": "other", "apiName": "18261964525_close_pop_up__prod", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".close"}}, {"id": "30163690528", "viewId": null, "name": null, "category": "other", "apiName": "conv-3-5-100-percenatage-scroll", "eventType": "custom", "eventFilter": null}, {"id": "30164730232", "viewId": "19724408845", "name": null, "category": "other", "apiName": "18261964525_conv_clicks_on_the_share_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "div[class*=\"styled__ShareButtonContainer\"] > button"}}, {"id": "30168850122", "viewId": null, "name": null, "category": "other", "apiName": "conv_3_5_clicked_show_more_on_any_of_the_comment_threads", "eventType": "custom", "eventFilter": null}, {"id": "30179820072", "viewId": null, "name": null, "category": "other", "apiName": "conv_3_5_click_comment", "eventType": "custom", "eventFilter": null}, {"id": "30182990029", "viewId": "30073610904", "name": null, "category": "other", "apiName": "18261964525_clicks_login__prod", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".secondary"}}, {"id": "30189580027", "viewId": null, "name": null, "category": "other", "apiName": "conv-3-5-50-percentage-scroll", "eventType": "custom", "eventFilter": null}, {"id": "30199450006", "viewId": null, "name": null, "category": "other", "apiName": "conv_3_5_clicked_share_on_a_comment", "eventType": "custom", "eventFilter": null}, {"id": "30225140170", "viewId": null, "name": null, "category": "other", "apiName": "registration - success", "eventType": "custom", "eventFilter": null}, {"id": "30392850439", "viewId": null, "name": null, "category": "other", "apiName": "conv_4_7_paypal_pay_confirmation", "eventType": "custom", "eventFilter": null}, {"id": "30445440977", "viewId": null, "name": null, "category": "other", "apiName": "conv_4_7_debit_pay_confirmation", "eventType": "custom", "eventFilter": null}, {"id": "30452660737", "viewId": null, "name": null, "category": "other", "apiName": "conv_4_7_google_pay_confirmation", "eventType": "custom", "eventFilter": null}, {"id": "30455670684", "viewId": null, "name": null, "category": "other", "apiName": "conv_4_7_card_pay_confirmation", "eventType": "custom", "eventFilter": null}], "dimensions": [{"id": "19947278362", "name": null, "apiName": "plan-type", "segmentId": null}, {"id": "19972290967", "name": null, "apiName": "checkout-stage", "segmentId": null}, {"id": "20028919636", "name": null, "apiName": "Exit Intent", "segmentId": null}, {"id": "20046021193", "name": null, "apiName": "Segment by experiment", "segmentId": null}, {"id": "20080989385", "name": null, "apiName": "plan-type-store", "segmentId": null}, {"id": "20246495507", "name": null, "apiName": "logged-in-user-attribute", "segmentId": null}, {"id": "20267913091", "name": null, "apiName": "logged-out-user-attribute", "segmentId": null}, {"id": "20411821545", "name": null, "apiName": "related-article-count", "segmentId": null}, {"id": "20445524556", "name": null, "apiName": "website-section", "segmentId": null}, {"id": "20550021082", "name": null, "apiName": "plan-type-render", "segmentId": null}, {"id": "20569584652", "name": null, "apiName": "user-saw-sidebar", "segmentId": null}, {"id": "20603910204", "name": null, "apiName": "saw-comments-section", "segmentId": null}, {"id": "20625520423", "name": null, "apiName": "played-audio-widget", "segmentId": null}, {"id": "20633020321", "name": null, "apiName": "seen-briefing-widget", "segmentId": null}, {"id": "20686800589", "name": null, "apiName": "ten-secs-inactive", "segmentId": null}, {"id": "20713220919", "name": null, "apiName": "clicked-on-one-related-articles", "segmentId": null}, {"id": "20886395230", "name": null, "apiName": "nur-4_1-saw-content", "segmentId": null}, {"id": "20905972703", "name": null, "apiName": "type-of-article", "segmentId": null}, {"id": "20909831489", "name": null, "apiName": "reached-uk-store-page", "segmentId": null}, {"id": "20915684019", "name": null, "apiName": "next-article", "segmentId": null}, {"id": "20928031287", "name": null, "apiName": "previous-article", "segmentId": null}, {"id": "21006563682", "name": null, "apiName": "clicked-gift-icon", "segmentId": null}, {"id": "21021982265", "name": null, "apiName": "clicked-article-in-todays", "segmentId": null}, {"id": "21022931918", "name": null, "apiName": "no-todays-rail", "segmentId": null}, {"id": "21037001129", "name": null, "apiName": "seen-article-with-no-related", "segmentId": null}, {"id": "21116950066", "name": null, "apiName": "cv-7-1-clicks-on-toggle", "segmentId": null}, {"id": "21123280806", "name": null, "apiName": "clicked-on-most-popular", "segmentId": null}, {"id": "21162062895", "name": null, "apiName": "clicked-start-free-trial", "segmentId": null}, {"id": "21162490887", "name": null, "apiName": "clicked-on-save", "segmentId": null}, {"id": "21162620346", "name": null, "apiName": "print-delivery-method", "segmentId": null}, {"id": "21181690143", "name": null, "apiName": "print-plan-type", "segmentId": null}, {"id": "21182990896", "name": null, "apiName": "clicked-any-share", "segmentId": null}, {"id": "21199041409", "name": null, "apiName": "clicked-on-comments-icon", "segmentId": null}, {"id": "21204711561", "name": null, "apiName": "clicked-numbers-category", "segmentId": null}, {"id": "21211180476", "name": null, "apiName": "clicked-view-all-subscription-options", "segmentId": null}, {"id": "21231301113", "name": null, "apiName": "clicked-games-category", "segmentId": null}, {"id": "21236900658", "name": null, "apiName": "expanded-trial-section", "segmentId": null}, {"id": "21240420688", "name": null, "apiName": "clicked-words-category", "segmentId": null}, {"id": "21350810159", "name": null, "apiName": "clicked-on-related-or-most-popular", "segmentId": null}, {"id": "21372301678", "name": null, "apiName": "switched-to-monthly-15", "segmentId": null}, {"id": "21376022249", "name": null, "apiName": "switched-to-monthly-26", "segmentId": null}, {"id": "21380890891", "name": null, "apiName": "switched-to-annual-26", "segmentId": null}, {"id": "21392310954", "name": null, "apiName": "switched-to-annual-15", "segmentId": null}, {"id": "21536430338", "name": null, "apiName": "payment-type", "segmentId": null}, {"id": "21586281026", "name": null, "apiName": "is-logged-in", "segmentId": null}, {"id": "21603430141", "name": null, "apiName": "conv-plan-type", "segmentId": null}, {"id": "21639380123", "name": null, "apiName": "session-number", "segmentId": null}, {"id": "21688241046", "name": null, "apiName": "clicked-editors-choice", "segmentId": null}, {"id": "21696212028", "name": null, "apiName": "swg-flow-started", "segmentId": null}, {"id": "21737751020", "name": null, "apiName": "is-swg-subscription", "segmentId": null}, {"id": "21783230141", "name": null, "apiName": "article-market", "segmentId": null}, {"id": "21950270018", "name": null, "apiName": "clicked-any-article-from-related-or-todays-rail", "segmentId": null}, {"id": "21977410055", "name": null, "apiName": "number-of-articles-both-rails", "segmentId": null}, {"id": "21981350010", "name": null, "apiName": "saw-related", "segmentId": null}, {"id": "22055662655", "name": null, "apiName": "clicked-sidebar-puzzle", "segmentId": null}, {"id": "22060060895", "name": null, "apiName": "saw-article-page", "segmentId": null}, {"id": "22264331402", "name": null, "apiName": "swg-is-ready-to-pay-flow", "segmentId": null}, {"id": "22378642009", "name": null, "apiName": "tealium-visitor-id", "segmentId": null}, {"id": "22696480920", "name": null, "apiName": "zephr-hot-cold-paywall", "segmentId": null}, {"id": "24299950773", "name": null, "apiName": "saw-inline-related-article-nur-1-12", "segmentId": null}, {"id": "24862080918", "name": null, "apiName": "nur-9-2-sidebar-click", "segmentId": null}, {"id": "24924900460", "name": null, "apiName": "acs_tnl", "segmentId": null}, {"id": "25085270587", "name": null, "apiName": "store-page-user", "segmentId": null}, {"id": "25095300210", "name": null, "apiName": "used-most-read", "segmentId": null}, {"id": "25870510499", "name": null, "apiName": "Users_served_banner_ad", "segmentId": null}, {"id": "25932920011", "name": null, "apiName": "Saw_alternative_puzzles_segment", "segmentId": null}, {"id": "25934090006", "name": null, "apiName": "Users_who_have_not_been_served_the_banner_ad", "segmentId": null}, {"id": "26171721569", "name": null, "apiName": "CONV_Clicks_explore", "segmentId": null}, {"id": "26173630149", "name": null, "apiName": "registered-user", "segmentId": null}, {"id": "26202780397", "name": null, "apiName": "CONV_Early_life_user", "segmentId": null}, {"id": "26319720004", "name": null, "apiName": "players", "segmentId": null}, {"id": "26445290403", "name": null, "apiName": "navigation-anchor-puzzles", "segmentId": null}, {"id": "26592500218", "name": null, "apiName": "Saw_Tooltip", "segmentId": null}, {"id": "26841270252", "name": null, "apiName": "nuk-048-source", "segmentId": null}, {"id": "27449280055", "name": null, "apiName": "CONV_Early_life_user_puzzle_player", "segmentId": null}, {"id": "27589600382", "name": null, "apiName": "nur-13-0-returning-user", "segmentId": null}, {"id": "28104190140", "name": null, "apiName": "nuk-053-source", "segmentId": null}, {"id": "28104630016", "name": null, "apiName": "users-who-scroll", "segmentId": null}, {"id": "29204630056", "name": null, "apiName": "user-saw-puzzle-rail", "segmentId": null}, {"id": "30016730121", "name": null, "apiName": "scrolls-to-see-most-commented-section", "segmentId": null}, {"id": "30028090370", "name": null, "apiName": "clicked-radio-play-button", "segmentId": null}, {"id": "30162770049", "name": null, "apiName": "conv_3_5_saw_the_comments_section_at_the_bottom_of_the_page", "segmentId": null}, {"id": "30262670014", "name": null, "apiName": "location", "segmentId": null}, {"id": "30390670575", "name": null, "apiName": "conv_nuk_7_15_registration_users", "segmentId": null}], "plugins": [function(PluginManager) {
  
  PluginManager.registerAnalyticsTracker('18639401787', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['18639401787'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

(function() {
  function onCampaignDecided(event) {
    if (isHoldback) {
      return;
    }
    
    // when the user doesn't pass audience conditions the expriment id is null
    if (!experimentId) {
			return;
    }

    var experimentData = {
    	experiment_platform: "optimizely_web",
      experiment_platform_user_id: window.optimizely.get('visitor_id').randomId,
      experiment_data: []
    };
    
    if (window.utag_data && window.utag_data.experiment_data && window.utag_data.experiment_data.length > 0) {
    	experimentData.experiment_data = window.utag_data.experiment_data;
    }
    
    experimentData.experiment_data.push([experimentId, variationId]);

    window.utag_data = Object.assign(window.utag_data || {}, experimentData);
  }
  
  onCampaignDecided();

})();
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
PluginManager.registerAnalyticsTracker('18802034055', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['18802034055'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

(function() {
  function onCampaignDecided(event) {
    if (isHoldback) {
      return;
    }
    
    // when the user doesn't pass audience conditions the expriment id is null
    if (!experimentId) {
			return;
    }

    var experimentData = {
    	experiment_platform: "optimizely_web",
      experiment_platform_user_id: window.optimizely.get('visitor_id').randomId,
      experiment_data: []
    };
    
    if (window.utag_data && window.utag_data.experiment_data && window.utag_data.experiment_data.length > 0) {
    	experimentData.experiment_data = window.utag_data.experiment_data;
    }
    
    experimentData.experiment_data.push([experimentId, variationId]);

    window.utag_data = Object.assign(window.utag_data || {}, experimentData);
  }
  
  onCampaignDecided();

})();
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
PluginManager.registerAnalyticsTracker('18817253497', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['18817253497'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

(function() {
  function onCampaignDecided(event) {
    if (isHoldback) {
      return;
    }
    
    // when the user doesn't pass audience conditions the expriment id is null
    if (!experimentId) {
			return;
    }

    var experimentData = {
    	experiment_platform: "optimizely_web",
      experiment_platform_user_id: window.optimizely.get('visitor_id').randomId,
      experiment_data: []
    };
    
    if (window.utag_data && window.utag_data.experiment_data && window.utag_data.experiment_data.length > 0) {
    	experimentData.experiment_data = window.utag_data.experiment_data;
    }
    
    experimentData.experiment_data.push([experimentId, variationId]);

    window.utag_data = Object.assign(window.utag_data || {}, experimentData);
    
    // send link event for every experiment on thank-you page
    if (window.location.href.indexOf('thank-you') !== -1 && 
        window && window.utag && window.utag.link) {
          window.utag.link({
            "event_navigation_action": "navigation",
            "event_navigation_name": "optimizely experiment data",
            "event_navigation_browsing_method": "automated",
            "experiment_platform": experimentData.experiment_platform,
            "experiment_platform_user_id": experimentData.experiment_platform_user_id,
            "experiment_data": [[experimentId, variationId]]
         });
     }
  }
  
  onCampaignDecided();

})();
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
PluginManager.registerAnalyticsTracker('20160650637', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['20160650637'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

(function() {
  function onCampaignDecided(event) {
    if (isHoldback) {
      return;
    }
    
    // when the user doesn't pass audience conditions the expriment id is null
    if (!experimentId) {
			return;
    }

    var experimentData = {
    	experiment_platform: "optimizely_web",
      experiment_platform_user_id: window.optimizely.get('visitor_id').randomId,
      experiment_data: []
    };
    
    if (window.utag_data && window.utag_data.experiment_data && window.utag_data.experiment_data.length > 0) {
    	experimentData.experiment_data = window.utag_data.experiment_data;
    }
    
    experimentData.experiment_data.push([experimentId, variationId]);

    window.utag_data = Object.assign(window.utag_data || {}, experimentData);
  }
  
  onCampaignDecided();

})();
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
PluginManager.registerAnalyticsTracker('22275782302', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['22275782302'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

function onCampaignDecided() {
  if (isHoldback || !experimentId || !variationId) {
    return;
  }

  window.optimizely_newrelic_data = window.optimizely_newrelic_data || [];

  window.optimizely_newrelic_data.push(experimentId + ':' + variationId);

  if (
    window.newrelic &&
    typeof window.newrelic == 'object' &&
    typeof window.newrelic.setCustomAttribute === 'function'
  ) {
    window.newrelic.setCustomAttribute('optimizely-web', JSON.stringify(window.optimizely_newrelic_data));
  }
}

if (window && window.optimizely && window.optimizely.initialized) {
  onCampaignDecided();
}

      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
PluginManager.registerAnalyticsTracker('26036251294', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['26036251294'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

function onCampaignDecided() {
  if (isHoldback || !experimentId || !variationId) {
    return;
  }

  window.optimizely_newrelic_data = window.optimizely_newrelic_data || [];

  window.optimizely_newrelic_data.push(experimentId + ':' + variationId);

  if (
    window.newrelic &&
    typeof window.newrelic == 'object' &&
    typeof window.newrelic.setCustomAttribute === 'function'
  ) {
    window.newrelic.setCustomAttribute('optimizely-web', JSON.stringify(window.optimizely_newrelic_data));
  }
}

if (window && window.optimizely && window.optimizely.initialized) {
  onCampaignDecided();
}

      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
}
], "interestGroups": [], "tagGroups": []},f=__webpack_require__(9268),l="initializeOptimizelyPreview";if(f.initGlobalStore(s),u.populateDirectiveData(),r.clientHasAlreadyInitialized())e.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(r.shouldBailForDesktopApp())e.log("Main / Disabling because of desktop app.");else if(r.conflictInObservingChanges())e.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(r.shouldLoadInnie())a.registerFunction("getProjectId",(function(){return s.projectId})),a.registerFunction("getAccountId",(function(){return s.accountId})),c.addScriptAsync("https://app.optimizely.com/js/innie.js"),e.log("Main / Disabling in favor of the editor client.");else if(r.shouldLoadPreview())(r.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:s}),e.log("Main / Disabling in favor of the preview client."),__webpack_require__(7254).setupPreviewGlobal(),__webpack_require__(7254).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:s}),r.isSlave()||(a.registerFunction("getProjectId",(function(){return s.projectId})),c.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/public/15853140465/s/tnl_custom_snippet/preview.js"));else if(r.shouldBootstrapDataForPreview()){a.registerFunction(l,(function(n){t(),a.unregisterFunction(l)}));var d=r.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:a.getFunction("getProjectId")();h=r.getProjectToken(),v=d,p=r.getPreviewLayerIds(),o="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",h).replace("__PROJECT_ID__",v).replace("__PREVIEW_LAYER_IDS__",p.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0),c.addScriptSync(o),__webpack_require__(7254).setupPreviewGlobal(),c.addScriptAsync("/dist/js/preview_ui.js")}else r.shouldBootstrapDataForEditor()?(a.registerFunction(l,(function(n){t(),a.unregisterFunction(l)})),c.addScriptAsync(window.optimizely_editor_data_endpoint)):r.shouldInitialize()&&t();var h,v,p;n.timeEnd("block");var g=n.now();n.setMark("optimizelyFinished",g,g)}}()}catch(t){try{__webpack_require__(8685).handleError(t)}catch(n){console.log(n)}}}()})();