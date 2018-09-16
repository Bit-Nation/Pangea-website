function copyAddress(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    var address = $temp.val($(element).text());
    address.select();
    document.execCommand("copy");
    alert("Copied the text: 0xCDE042543307966bc16Eff3cDca4d32B23408C4c");
    $temp.remove();
}
