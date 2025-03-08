document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").addEventListener("click", function (event) {
    event.preventDefault();

    const inputs = document.querySelectorAll("input[type='text'], textarea");
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const radioGroup = document.querySelectorAll("input[name='options']");
    const successMessage = document.querySelector(".confirmed");
    let isValid = true;

    //Check email for correct form
    const regex = /^[a-zA-Z1-9.-_]+@[a-zA-Z1-9.-]+\.[a-zA-Z]{2,6}$/;

    const email = document.querySelector('input[type="email"]');
    if (!regex.test(email.value)) {
      email.nextElementSibling.style.display = "block";
      isValid = false;
    } else {
      email.nextElementSibling.style.display = "none";
    }

    // Validate text and email inputs
    inputs.forEach(function (input) {
      const errorMsg = input.nextElementSibling;
      if (errorMsg) {
        errorMsg.style.display = "none"; // Hide error initially
        if (input.value.trim() === "") {
          errorMsg.style.display = "block"; // Show error if empty
          isValid = false;
        }
      }
    });

    // Validate checkboxes
    checkboxes.forEach(function (checkbox) {
      const errorMsg = checkbox
        .closest(".checkbox-form")
        .querySelector(".error");
      if (errorMsg) {
        errorMsg.style.display = "none";
        if (!checkbox.checked) {
          errorMsg.style.display = "block";
          isValid = false;
        }
      }
    });

    // Validate radio buttons (only show error if no option is selected)
    const isRadioChecked = [...radioGroup].some((radio) => radio.checked);
    const radioError = document.querySelector(".query-type-form .error");

    if (radioError) {
      radioError.style.display = isRadioChecked ? "none" : "block";
      if (!isRadioChecked) {
        isValid = false;
      }
    }

    // If all validations pass, show success message and hide the form
    if (isValid) {
      successMessage.style.display = "flex";
    }
  });
});
