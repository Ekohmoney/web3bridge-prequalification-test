
const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const locationField = document.getElementById("location");
const address = document.getElementById("address");
const email = document.getElementById("email");
const color = document.getElementById("color")
const food = document.getElementById("food")


const fullname_err = document.getElementById("fullname_err");
const address_err = document.getElementById("address_err");
const location_err = document.getElementById("location_err");
const color_err = document.getElementById("color_err");
const food_err = document.getElementById("food_err");
const email_err = document.getElementById("email_err");


const elements = [
  { element: fullname, err: fullname_err },
  { element: address, err: address_err },
  { element: locationField, err: location_err },
  { element: color, err: color_err },
  { element: email, err: email_err }
];

for (let i = 0; i < elements.length; i++) {
  const content = elements[i];
  content.element.addEventListener("input", () => {
    content.err.innerHTML = "";
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    alert("Form validated successfully.");
    resetForm();
  }
});

function validateForm() {
  const fullNameValidate = validateString(
    fullname,
    fullname_err,
    "Full name"
  );
  const addressValidate = validateString(address, address_err, "Address");
  const locationValidate = validateString(locationField, location_err, "Location");
  const emailValidate = validateEmail(email, email_err, "Email");
  const colorValidate = validateString(color, color_err, "Color");
  const foodValidate = validateString(food, food_err, "Food");
  if (
    fullNameValidate &&
    addressValidate &&
    locationValidate &&
    emailValidate &&
    colorValidate &&
    foodValidate
  ) {
    return true;
  } else {
    return false;
  }
}

function validateString(element, errElement, fieldname) {
  if (element.value !== "") {
    return true;
  } else {
    errElement.innerHTML = `${fieldname} is required`;
    return false;
  }
}

function validateEmail(element, errElement, fieldname) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (element.value === "") {
    errElement.innerHTML = `${fieldname} is required`;
    return false;
  } else if (!element.value.match(validRegex)) {
    errElement.innerHTML = `${fieldname} provided is invalid`;
    return false;
  } else {
    return true;
  }
}


function resetForm() {
  fullname.value = "";
  locationField.value = "";
  address.value = "";
  email.value = "";
  color.value = "";
  color.value = "";
}
