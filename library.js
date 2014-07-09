(function(module) {
    "use strict";

    var Embedly = {},
        embed = '<a class="embedly-card" href="$1"></a><script>!function(a){var b="embedly-platform",c="script";if(!a.getElementById(b)){var d=a.createElement(c);d.id=b,d.src=("https:"===document.location.protocol?"https":"http")+"://cdn.embedly.com/widgets/platform.js";var e=document.getElementsByTagName(c)[0];e.parentNode.insertBefore(d,e)}}(document);</script>';


    Embedly.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(.+)">.+<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = Embedly;
}(module));
