function isMobile() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

function isMobileOrTablet() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


(function () {
    var stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'http://ahost.flaunt.nu/content/site.css';
    stylesheet.type = 'text/css';
    var head = document.getElementsByTagName('head')[0].appendChild(stylesheet);
})();

var isInIframe = (window.location != window.parent.location) ? true : false;

var isTopFlaunt = function () {
    return window.location.hostname.includes('theflashbr.com') ||
        window.location.hostname.includes('dakotajohnson.com.br') ||
        window.location.hostname.includes('badmediakarma.com') ||
        window.location.hostname.includes('portalfamosos.com.br') ||
        window.location.hostname.includes('teenwolf.com.br') ||
        window.location.hostname.includes('riverdale.com.br') ||
        window.location.hostname.includes('heartbreakers.me') ||
        window.location.hostname.includes('dornan-johnson.com') ||
        window.location.hostname.includes('febreteen.com.br') ||
        window.location.hostname.includes('vampire-diaries.org') ||
        window.location.hostname.includes('flaunt.nu') ||
        window.location.hostname.includes('claricefalcao.com.br') ||
        window.location.hostname.includes('margotrobbie.com.br') ||
        window.location.hostname.includes('pink-forever.ca') ||
        window.location.hostname.includes('sobresagas.com') ||
        window.location.hostname.includes('dammit.com.br') ||
        window.location.hostname.includes('the100br.com') ||
        window.location.hostname.includes('edsheeranbr.com') ||
        window.location.hostname.includes('portal50tons.com.br') ||
        window.location.hostname.includes('arianagrandebrasil.com') ||
        window.location.hostname.includes('prettylittleliars.com.br') ||
        window.location.hostname.includes('paula-echevarria.org') ||
        window.location.hostname.includes('paneladeseries.com.br') ||
        window.location.hostname.includes('selenagomez.com.br') ||
        window.location.hostname.includes('bangtan.com.br') ||
        window.location.hostname.includes('diariosdeumvampirobr.com') ||
        window.location.hostname.includes('onceuponseries.net') ||
        window.location.hostname.includes('kissthemgoodbye.net') ||
        window.location.hostname.includes('gomezgallery.org') ||
        window.location.hostname.includes('americanhorrorstorybr.com') ||
        window.location.hostname.includes('britney-online.net') ||
        window.location.hostname.includes('arianagrandeweb.com') ||
        window.location.hostname.includes('chrisevans.com.br') ||
        window.location.hostname.includes('helen-mirren.net') ||
        window.location.hostname.includes('jessalba.net') ||
        window.location.hostname.includes('theoriginalsbra.com') ||
        window.location.hostname.includes('shopfandoms.com') ||
        window.location.hostname.includes('absolutebritney.com') ||
        window.location.hostname.includes('leonardodicaprio.com.br') ||
        window.location.hostname.includes('iansomerhalderfans.com.br') ||
        window.location.hostname.includes('theonyxzone.com') ||
        window.location.hostname.includes('emmawatsondaily.org') ||
        window.location.hostname.includes('victoriajustice.com.br') ||
        window.location.hostname.includes('fansbr.com') ||
        window.location.hostname.includes('rihannaonline.com.br') ||
        window.location.hostname.includes('portalreignbrasil.com') ||
        window.location.hostname.includes('zoeydeutch.com.br') ||
        window.location.hostname.includes('teenwolfsp.com') ||
        window.location.hostname.includes('ultimate-rihannas.com') ||
        window.location.hostname.includes('hq-pictures.com') ||
        window.location.hostname.includes('onceuponatimebrasil.net') ||
        window.location.hostname.includes('justinbphotos.org') ||
        window.location.hostname.includes('got7brasil.com') ||
        window.location.hostname.includes('phenomforever.com') ||
        window.location.hostname.includes('mbenoistbrasil.com') ||
        window.location.hostname.includes('dakotafanning.com.br') ||
        window.location.hostname.includes('mariahnow.com.br') ||
        window.location.hostname.includes('biebermania.com.br') ||
        window.location.hostname.includes('laurencohan.com.br') ||
        window.location.hostname.includes('centralanitta.com') ||
        window.location.hostname.includes('portalnicole.com.br') ||
        window.location.hostname.includes('dockery-michelle.com') ||
        window.location.hostname.includes('bieberfotos.com') ||
        window.location.hostname.includes('u2br.com') ||
        window.location.hostname.includes('rdjbrazil.net') ||
        window.location.hostname.includes('margot-robbie.us') ||
        window.location.hostname.includes('jemma-redgrave.net') ||
        window.location.hostname.includes('shineon-media.com') ||
        window.location.hostname.includes('beyoncebrasil.com') ||
        window.location.hostname.includes('fabulous-emma.com') ||
        window.location.hostname.includes('portalkatyperry.com.br') ||
        window.location.hostname.includes('demilovato.com.br') ||
        window.location.hostname.includes('britspears.net') ||
        window.location.hostname.includes('harryshumjr.net') ||
        window.location.hostname.includes('alessandrasbeijos.com') ||
        window.location.hostname.includes('arianagrandebr.com') ||
        window.location.hostname.includes('vanessa-annehudgens.com') ||
        window.location.hostname.includes('lanadelreyfan.com') ||
        window.location.hostname.includes('kj-apa.com') ||
        window.location.hostname.includes('priyankachoprafrance.com') ||
        window.location.hostname.includes('chrisevansfrance.net') ||
        window.location.hostname.includes('lilycollins.us') ||
        window.location.hostname.includes('ashleytisdaleportugal.com') ||
        window.location.hostname.includes('little-mix.org') ||
        window.location.hostname.includes('ligadasseries.com.br') ||
        window.location.hostname.includes('nicki-minaj.org') ||
        window.location.hostname.includes('adoring-kstewart.com') ||
        window.location.hostname.includes('hqdiesel.net') ||
        window.location.hostname.includes('bieberfeverbrasil.com') ||
        window.location.hostname.includes('haileesteinfeld.us') ||
        window.location.hostname.includes('roman-reigns.net') ||
        window.location.hostname.includes('aliona-vilani.org') ||
        window.location.hostname.includes('onedirectionphotos.net') ||
        window.location.hostname.includes('cheryl-online.net') ||
        window.location.hostname.includes('emma-w.net') ||
        window.location.hostname.includes('scarlett-photos.org') ||
        window.location.hostname.includes('justinbieber-portugal.com') ||
        window.location.hostname.includes('paulaglam.com') ||
        window.location.hostname.includes('emmastone.us') ||
        window.location.hostname.includes('kristenstewarthq.com');
}

var isSoSugary = function() {
    return window.location.hostname.includes('sosugary.com') ||
        window.location.hostname.includes('sosugary.org') ||
        window.location.hostname.includes('hqcelebrity.org') ||
        window.location.hostname.includes('gomez-pictures.com') ||
        window.location.hostname.includes('wowcandyvisuals.com') ||
        window.location.hostname.includes('ora-world.com') ||
        window.location.hostname.includes('brooke-photos.com') ||
        window.location.hostname.includes('arianapictures.com') ||
        window.location.hostname.includes('jbdailyphotos.com') ||
        window.location.hostname.includes('ambrose-images.net') ||
        window.location.hostname.includes('onedirectiongallery.org') ||
        window.location.hostname.includes('carrie-photos.com') ||
        window.location.hostname.includes('kellyimgs.org') ||
        window.location.hostname.includes('skyhighimgs.net') ||
        window.location.hostname.includes('bethphoenixphotos.com') ||
        window.location.hostname.includes('nickelodeonkids.org') ||
        window.location.hostname.includes('bella-images.org') ||
        window.location.hostname.includes('taryn-photos.com') ||
        window.location.hostname.includes('smgphotos.org') ||
        window.location.hostname.includes('hadidsnews.com') ||
        window.location.hostname.includes('littledancersgallery.com') ||
        window.location.hostname.includes('irinashaykphotos.com') ||
        window.location.hostname.includes('dancemomsgallery.com') ||
        window.location.hostname.includes('clickanitta.com') ||
        window.location.hostname.includes('rebeccamader.com.br') ||
        window.location.hostname.includes('mamamoo-pics.com') ||
        window.location.hostname.includes('jacquieleegallery.com') ||
        window.location.hostname.includes('kendallkeek.com') ||
        window.location.hostname.includes('baldwinpictures.com') ||
        window.location.hostname.includes('demiphotos.net') ||
        window.location.hostname.includes('dncegallery.com') ||
        window.location.hostname.includes('sampaiopictures.com') ||
        window.location.hostname.includes('kyliekeek.com') ||
        window.location.hostname.includes('taylorhillpictures.com') ||
        window.location.hostname.includes('florencewelchgallery.com') ||
        window.location.hostname.includes('toripictures.net') ||
        window.location.hostname.includes('liampaynegallery.com') ||
        window.location.hostname.includes('henley-hayward.com') ||
        window.location.hostname.includes('grimesgallery.net');
}

//if (isTopFlaunt() && !isInIframe) {
//    window.apd_options = { 'websiteId': 6404, 'runFromFrame': false };
//    (function () {
//        var w = window.apd_options.runFromFrame ? window.top : window;
//        if (window.apd_options.runFromFrame && w != window.parent) w = window.parent;
//        if (w.location.hash.indexOf('apdAdmin') != -1) { if (typeof (Storage) !== 'undefined') { w.localStorage.apdAdmin = 1; } }
//        var adminMode = ((typeof (Storage) == 'undefined') || (w.localStorage.apdAdmin == 1));
//        w.apd_options = window.apd_options;
//        var apd = w.document.createElement('script'); apd.type = 'text/javascript'; apd.async = true;
//        apd.src = '//' + (adminMode ? 'cdn' : 'ecdn') + '.firstimpression.io/' + (adminMode ? 'fi.js?id=' + window.apd_options.websiteId : 'fi_client.js');
//        var s = w.document.getElementsByTagName('head')[0]; s.appendChild(apd);
//    })();
//}

//if (!isInIframe) {
//    var pa = document.createElement('script');
//    pa.async = 'true';
//    pa.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
//    document.head.appendChild(pa);
//    (adsbygoogle = window.adsbygoogle || []).push({
//        google_ad_client: "ca-pub-7892222271864999",
//        enable_page_level_ads: true
//    });    
//}

//(function () {
//    yuhuads = "//track.yuhuads.com/interstitial/5888cd8ff492f069492808b3/" + ((new Date()).getTime()) + Math.random();
//    document.write("<scr" + "ipt language='javascript' type='text/javascript' src='" + yuhuads + "'></scri" + "pt>");
//})();

//var __kx_ad_slots = __kx_ad_slots || [];
(function () {
    document.addEventListener('DOMContentLoaded', function () {
           
    //if (location.search.split('testAnchor=')[1] == 1) {
        if (isMobileOrTablet()) {
            //var randomAnchor = Math.random();
            var closedAnchorCookie = getCookie('clsanchor');
            if (closedAnchorCookie != 'true') {

                //var ifdiv = document.createElement('div');
                //ifdiv.classList = 'ad-wrap';
                //ifdiv.id = 'smad';
                //var closeBtn = document.createElement('div');
                //closeBtn.className = 'close-btn';
                //closeBtn.innerText = 'x';
                //closeBtn.onclick = function () {
                //    document.getElementById('smad').outerHTML = '';
                //    setCookie('clsanchor', 'true', 1);
                //};
                //ifdiv.appendChild(closeBtn);

                //var revciframe = document.createElement('iframe');
                //revciframe.src = 'http://ahost.flaunt.nu/home/revcmobile';
                //ifdiv.appendChild(revciframe);

                //document.body.appendChild(ifdiv);







                //(function () 
                //{
                //    var fontLink = document.createElement('link');
                //    fontLink.rel = 'stylesheet';
                //    fontLink.type = 'text/css';
                //    fontLink.href = 'http://fonts.googleapis.com/css?family=Roboto:400,500,700,100,300,900';
                //    document.getElementsByTagName('head')[0].appendChild(fontLink);

                //    var anchorWrap = document.createElement('div');
                //    anchorWrap.className = 'ad-wrap';
                //    anchorWrap.id = 'smad';

                //    var anchorLink = document.createElement('a');
                //    anchorLink.className = 'hb-a';
                //    anchorLink.href = 'https://goo.gl/G3nu7R';
                //    anchorLink.target = '_blank';
                //    anchorWrap.appendChild(anchorLink);

                //    //var adHeader2 = document.createElement('h2');
                //    //adHeader2.className = 'hb-h2';
                //    //var adSpanSun = document.createElement('span');
                //    //adSpanSun.className = 'logo';
                //    //adSpanSun.innerText = 'Releases';
                //    //adHeader2.appendChild(adSpanSun);
                //    //anchorLink.appendChild(adHeader2);
                //    var descText = document.createElement('div');
                //    descText.className = 'subtext';
                //    descText.innerText = 'Releases.com';
                //    anchorLink.appendChild(descText);

                //    var adHeader3 = document.createElement('h3');
                //    adHeader3.className = 'hb-h3';
                //    adHeader3.innerText = "See what's coming on Netflix, TV and more";
                //    anchorLink.appendChild(adHeader3);

                //    var closeBtn = document.createElement('div');
                //    closeBtn.className = 'close-btn';
                //    closeBtn.innerText = 'x';
                //    closeBtn.onclick = function () {
                //        document.getElementById('smad').outerHTML = '';
                //        setCookie('clsanchor', 'true', 1);
                //    };
                //    anchorWrap.appendChild(closeBtn);
                //    document.body.appendChild(anchorWrap);
                //})();

                //var goToButton = document.createElement('div');
                //goToButton.className = 'ad-button';
                //goToButton.innerText = 'Enter';
                //anchorLink.appendChild(goToButton);

                //if (randomAnchor <= 0.5) {
                //    var zergId = '44553'; 
                //    var bottomBannerZerg = document.createElement('div');
                //    bottomBannerZerg.id = 'zergnet-widget-' + zergId;
                //    document.body.appendChild(bottomBannerZerg);

                //    var zergnet = document.createElement('script');
                //    zergnet.type = 'text/javascript'; zergnet.async = true;
                //    zergnet.src = (document.location.protocol == "https:" ? "https:" : "http:") + '//www.zergnet.com/zerg.js?id=' + zergId;
                //    var znscr = document.getElementsByTagName('script')[0];
                //    znscr.parentNode.insertBefore(zergnet, znscr);

                //    window.addEventListener('load', function () {
                //        var closeButton = document.createElement('div');
                //        closeButton.textContent = 'x';
                //        closeButton.style.position = 'absolute';
                //        closeButton.style.textAlign = 'center';
                //        closeButton.style.right = '3px';
                //        closeButton.style.top = '-20px';
                //        closeButton.style.borderRadius = '15px';
                //        closeButton.style.border = '1px solid #333';
                //        closeButton.style.lineHeight = '100%';
                //        closeButton.style.color = '#333';
                //        closeButton.style.background = '#fff';
                //        closeButton.style.fontSize = '29px';
                //        closeButton.style.width = '30px';
                //        closeButton.style.height = '30px';
                //        closeButton.onclick = function () {
                //            document.getElementById('zergnet-widget-' + zergId).outerHTML = '';
                //            setCookie('clsanchor', 'true', 1);
                //        };
                //        document.getElementById('zergnet-widget-' + zergId).appendChild(closeButton);
                //    }, false);
                //}
                //else if (randomAnchor > 0.5) {
                //    var bottomBannerKx = document.createElement('div');
                //    bottomBannerKx.id = '__kx_ad_6180';
                //    document.body.appendChild(bottomBannerKx);
                //    (function () {
                //        var slot = 6180;
                //        var h = false;
                //        var doc = document;
                //        __kx_ad_slots.push(slot);
                //        if (typeof __kx_ad_start == 'function') {
                //            __kx_ad_start();
                //        } else {
                //            if (top == self) {
                //                var s = doc.createElement('script');
                //                s.type = 'text/javascript';
                //                s.async = true;
                //                s.src = '//cdn.kixer.com/ad/load.js';
                //                s.onload = s.onreadystatechange = function () {
                //                    if (!h && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                //                        h = true;
                //                        s.onload = s.onreadystatechange = null;
                //                        __kx_ad_start();
                //                    }
                //                };
                //                var x = doc.getElementsByTagName('script')[0];
                //                x.parentNode.insertBefore(s, x);
                //            } else {
                //                var tag = doc.getElementById('__kx_tag_' + slot);
                //                var win = window.parent;
                //                doc = win.document;
                //                var top_div = doc.createElement("div");
                //                top_div.id = '__kx_ad_' + slot;
                //                doc.body.appendChild(top_div);
                //                var top_tag = doc.createElement("script");
                //                top_tag.id = '__kx_top_tag_' + slot;
                //                top_tag.innerHTML = tag.innerHTML;
                //                doc.body.appendChild(top_tag);
                //            }
                //        }
                //    })();
                //}
            }
        } else {
            //var closedAnchorCookie = getCookie('clsanchor');
            //if (closedAnchorCookie != 'true') {

            //    var ifdiv = document.createElement('div');
            //    ifdiv.classList = 'ad-wrap';
            //    ifdiv.id = 'smad';
            //    ifdiv.style.width = '575px';
            //    ifdiv.style.right = '0';
            //    var closeBtn = document.createElement('div');
            //    closeBtn.className = 'close-btn';
            //    closeBtn.innerText = 'x';
            //    closeBtn.onclick = function () {
            //        document.getElementById('smad').outerHTML = '';
            //        setCookie('clsanchor', 'true', 1);
            //    };
            //    ifdiv.appendChild(closeBtn);

            //    var revciframe = document.createElement('iframe');
            //    revciframe.src = 'http://ahost.flaunt.nu/home/revcdesktop';
            //    ifdiv.appendChild(revciframe);

            //    document.body.appendChild(ifdiv);
            //}
        }
    });
})();
    
//(function () {
//    var seenOutstreamCookie = getCookie('seenoutstream' + location.hostname);
//    if (seenOutstreamCookie != 'true') {
        
//        if (!isMobile()) {
//            (function () {
//                var playerContainerId = '';
//                var playerId = '';
//                var playerWidth = '480';
//                var playerHeight = '270';
//                var playInitiation = 'auto';
//                var volume = '0';
//                var execution = 'outstream';
//                var placement = 'slider';
//                var support = '';
//                var render = '';
//                var controls = '';
//                var tracki = '';
//                var trackc = '';
//                var custom1 = '';
//                var custom2 = '';
//                var custom3 = '';
//                var pubMacros = '';

//                var lkqdVPAID;
//                var lkqdId = new Date().getTime().toString() + Math.round(Math.random() * 1000000000).toString();
//                var creativeData = '';
//                var environmentVars = { slot: document.getElementById(playerContainerId), videoSlot: document.getElementById(playerId), videoSlotCanAutoPlay: true };

//                function onVPAIDLoad() {
//                    lkqdVPAID.subscribe(function () { lkqdVPAID.startAd(); }, 'AdLoaded');
//                }

//                var vpaidFrame = document.createElement('iframe');
//                vpaidFrame.id = lkqdId;
//                vpaidFrame.name = lkqdId;
//                vpaidFrame.style.display = 'none';
//                var vpaidFrameLoaded = function () {
//                    vpaidLoader = vpaidFrame.contentWindow.document.createElement('script');
//                    vpaidLoader.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//ad.lkqd.net/vpaid/formats.js?pid=314&sid=110778&apt=' + playInitiation + '&volume=' + volume + '&render=' + render + '&controls=' + controls + '&support=' + support + '&execution=' + execution + '&placement=' + placement + '&tracki=' + encodeURIComponent(tracki) + '&trackc=' + encodeURIComponent(trackc) + '&c1=' + encodeURIComponent(custom1) + '&c2=' + encodeURIComponent(custom2) + '&c3=' + encodeURIComponent(custom3) + '&rnd=' + Math.floor(Math.random() * 100000000) + '&m=' + encodeURIComponent(pubMacros);

//                    vpaidLoader.onload = function () {
//                        lkqdVPAID = vpaidFrame.contentWindow.getVPAIDAd();
//                        onVPAIDLoad();
//                        lkqdVPAID.handshakeVersion('2.0');
//                        lkqdVPAID.initAd(playerWidth, playerHeight, 'normal', 600, creativeData, environmentVars);
//                    };
//                    vpaidFrame.contentWindow.document.body.appendChild(vpaidLoader);
//                };
//                vpaidFrame.onload = vpaidFrameLoaded;
//                vpaidFrame.onerror = vpaidFrameLoaded;
//                document.documentElement.appendChild(vpaidFrame);
//            })();

//            setCookie('seenoutstream' + location.hostname, 'true', 1);
//        }

        
//    }
//})();

