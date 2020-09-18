//form validation
function validate() {
    var zipcode = $("#zip").val();
    if (zipcode.length != 5 || isNaN(zipcode)) {
        alert("Zip code is not valid.");
        return false;
    }
    else {
        alert($("#zip").val());
    }
}