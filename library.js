(function(module) {
    "use strict";

    var Embedly = {},
        embed = '<a class="embedly-card" href="$1"></a><script>!function(a){var b="embedly-platform",c="script";if(!a.getElementById(b)){var d=a.createElement(c);d.id=b,d.src=("https:"===document.location.protocol?"https":"http")+"://cdn.embedly.com/widgets/platform.js";var e=document.getElementsByTagName(c)[0];e.parentNode.insertBefore(d,e)}}(document);</script>';
    var embedlycode = '/<a href="(.+)">.+<\/a>/g';

    Embedly.parse = function(data, callback) {
        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(embedlycode)) {
            data.postData.content = data.postData.content.replace(embedlycode, embed);
        }
        callback(null, data);

    };

    module.exports = Embedly;
}(module));
