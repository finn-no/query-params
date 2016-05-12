function encode (o, sep) {
    return (
        Object.keys(o).filter(function (key) {
            return o[key] != null && typeof o[key] != 'object' && typeof o[key] != 'function'
        })
        .map(function (key) { return encodeURIComponent(key) + '=' + encodeURIComponent(o[key]); })
        .join(sep || '&')
    )
}

var REXP_SPLIT = /&amp;|&|;/gmi;
function decode (str, sep) {
    sep = sep||REXP_SPLIT;
    var result = {};
    var expr = str.split(sep);
    var key, val, index;
    for (var i = 0, len = expr.length; i < len; i++) {
        index = expr[i].indexOf('=');
        key = expr[i].substring(0, index);
        val = expr[i].substring(index+1);
        if (val) {
            result[decodeURIComponent(key)] = decodeURIComponent(val);
        }
    }
    return result;
};

module.exports = {
    encode: encode,
    decode: decode
};
