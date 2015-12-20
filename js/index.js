
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        $(document).ready(this.onDeviceReady);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var that = this;
        $('#loadmAmountSlider').slider({
            formatter: function(value) {
                $("#loanAmount").val(utils.formatRupee(value));
                return '₹ ' + utils.formatRupee(value);
            }
        });
        $('#yearSlider').slider({
            formatter: function(value) {
                $("#loanTerm").val(utils.formatRupee(value));
                return value + " Years";
            }
        });

        $('#interestSlider').slider({
            formatter: function(value) {
                $("#interestRate").val(value);
                return value + " %";
            }
        });

        $(":input").change(function() {
            var loanAmount = utils.unformatRupee($("#loanAmount").val()),
                loanTerm = $("#loanTerm").val(),
                interestRate = $("#interestRate").val(),
                r = interestRate / 12 / 100,
                rp = 1 + r,
                n = loanTerm * 12,
                rpn = Math.pow(rp, n),
                calculatedAmount = loanAmount * r * (rpn / (rpn - 1)),
                totalAmountToPay = calculatedAmount * loanTerm;

            $("#result").val(utils.formatRupee(calculatedAmount.toFixed()));
            $("#emi-words").text(calculatedAmount.toFixed()).toWords();
        });
        $('#loadmAmountSlider').change();
    }
};