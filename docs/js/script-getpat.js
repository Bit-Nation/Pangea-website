var SALE_ADDRESS = "0xAF702F4be0cAeCcc2a3B42ee5d7Dd725bFA20B65";
var MULTISIG_ADDRESS = "0x44E7346C988EdB3b23e7098f500Ff40138fFA03a";
var JSON_RPC_URL = "https://rinkeby.infura.io/bitnation";

const ethersProvider = new ethers.providers.JsonRpcProvider(JSON_RPC_URL);

$( document ).ready(function() {

    //Calculate invested ETH
    (function () {

        var investedEth;

        ethersProvider
            .getBalance(SALE_ADDRESS)
            .then(function (amount) {
                investedEth = amount;
                return ethersProvider.getBalance(MULTISIG_ADDRESS);
            })
            .then(function (amount) {
                investedEth = investedEth.add(amount);
                investedEth = investedEth.toString(10);
                investedEth = new BigNumber(ethers.utils.formatUnits(investedEth, 'ether'));

                $('#amount').text(investedEth.toFixed(3).toString());
            })
            .catch(console.error)

    })();
    // Checkboxes validation
    $(".accept").click(function (event) {
        var counter = 0;
        $(".accept").each(function(key, checkbox) {
            if(checkbox.checked == false) {
                $("#checkboxes-continue").attr("disabled", "disabled");
                return false;
            } else {
                counter++;
                if(counter == $(".accept").length) {
                    $("#checkboxes-continue").attr("disabled", false);
                }
            }
        });
    });
    // Show address
    $("#checkboxes-continue").click(function(){
        $( "#checkboxes" ).addClass( "hidden" );
        $( "#address" ).removeClass( "hidden" );
    });
});
