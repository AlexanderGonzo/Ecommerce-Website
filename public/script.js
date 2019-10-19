bootstrapValidate("#number-field", "max:12:Phone Number is too long!");
bootstrapValidate(
  "#number-field",
  "regex:/^(?([0-9]{3}))?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/: Please enter a valid number"
);
bootstrapValidate("#email-field", "email:Enter a valid E-Mail Address!");
bootstrapValidate("#email-field", "max:100:email too long!");
bootstrapValidate("#zip-field", "max:9:Zip is too long!");
bootstrapValidate("#cc-num", "max:10:Credit Card number too long!");
bootstrapValidate(
  ["#address1", "#address2", "#city-field"],
  "max:100:Enter no more than 100 characters!"
);

bootstrapValidate(
  "#cc-expiration",
  "regex:/([12]d{3}-(0[1-9]1[0-2]))/:Expiration date required"
);
