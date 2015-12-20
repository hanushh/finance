/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function formatRupee(x) {
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != '') lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
}

function unformatRupee(x){
    var find = ',',
    re = new RegExp(find, 'g');

    return x.replace(re,'');
}
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
        var that = this
        $('#loadmAmountSlider').slider({
            formatter: function(value) {
                $("#loanAmount").val(formatRupee(value));
                return '₹ ' + formatRupee(value);
            }
        });
        $('#yearSlider').slider({
            formatter: function(value) {
                $("#loanTerm").val(formatRupee(value));
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
            var loanAmount = unformatRupee($("#loanAmount").val()),
                loanTerm = $("#loanTerm").val(),
                interestRate = $("#interestRate").val(),
                r = interestRate / 12 / 100,
                rp = 1 + r,
                n = loanTerm * 12,
                rpn = Math.pow(rp, n),
                calculatedAmount = loanAmount * r * (rpn / (rpn - 1)),
                totalAmountToPay = calculatedAmount * loanTerm;

            $("#result").val(formatRupee(calculatedAmount.toFixed()));
            $("#emi-words").text(calculatedAmount.toFixed()).toWords();
        });
        $('#loadmAmountSlider').change();
    }
};