// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop",
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  });
}
setInputFilter(document.getElementById("MobileNumber"), function (value) {
  return /^\d*$/.test(value);
});
setInputFilter(document.getElementById("Name"), function (value) {
  return /^[a-zA-Z ]*$/.test(value);
});

//Validations

$(document).ready(function () {
  jQuery.validator.addMethod("regex", function (value, element, regexp) {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
  });
  jQuery.validator.addMethod(
    "emailExt",
    function (value, element, param) {
      return value.match(
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
      );
    },
    "Please enter valid email id"
  );
  $("#puchke").validate({
    rules: {
      Name: {
        required: true,
        regex: "^[a-zA-Z ]*$",
      },
      MobileNumber: {
        required: true,
        minlength: 10,
        maxlength: 10,
        number: true,
        regex: "^[6789][0-9]{9}",
      },

      EmailAddress: {
        required: true,
        emailExt: true,
      },
    },
    messages: {
      Name: {
        required: "Please enter your name",
        regex: "Please enter valid name",
      },
      MobileNumber: {
        required: "Please enter mobile number",
        digits: "Please enter valid mobile number",
        maxlength: "Please enter valid mobile number",
        minlength: "Please enter valid mobile number",
        number: "Please enter numerical character only!",
        regex: "Mobile number is not valid!",
      },
      EmailAddress: {
        required: "Please enter email id",
        regex: "Please enter valid email id",
      },
    },
    onfocusout: function (element) {
      $(element).valid();
    },
    errorElement: "small",
    errorPlacement: function (error, element) {
      error.addClass("ErrorMsg");
      if (element.prop("type") === "checkbox") {
        error.insertAfter(element.next("label"));
      } else {
        error.insertAfter(element);
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
  });
});
