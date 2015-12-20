(function (window) {


    var utils = {
        formatRupee: function (x) {
            x = x.toString();
            var lastThree = x.substring(x.length - 3);
            var otherNumbers = x.substring(0, x.length - 3);
            if (otherNumbers !== '')
                lastThree = ',' + lastThree;
            var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
            return res;
        },
        unformatRupee: function (x) {
            var find = ',',
                    re = new RegExp(find, 'g');

            return x.replace(re, '');
        }


    };


window.utils = utils;




})(window);
