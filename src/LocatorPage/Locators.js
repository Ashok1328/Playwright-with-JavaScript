exports.register_Locators = {
  signup_Btn: "#signin2",
  username_Input: "#sign-username",
  password_Input: "#sign-password",
  submit_Btn: "//button[normalize-space()='Sign up']",
};

exports.login_Locators = {
  login_Btn: "#login2",
  username_Input: "#loginusername",
  password_Input: "#loginpassword",
  submit_Btn: "//button[normalize-space()='Log in']",
};

exports.home_Locators = {
  product_No: ".card .hrefch",
};

exports.product_Locators = {
  category_ByName: (category) => `//a[normalize-space()='${category}']`,
  product_ByName: (name) => `//a[normalize-space()='${name}']`,
  single_Product: "//a[normalize-space()='Nexus 6']",
  addtocart_Btn: "//a[normalize-space()='Add to cart']",
  home_Btn: "//li[@class='nav-item active']//a[@class='nav-link']",
};

exports.cart_Locators = {
  cart_Btn: "//a[@id='cartur']",
  checkcart_Items: "#tbodyid tr",
};

exports.shipping_Locators = {
  placeorder_Btn: "//button[normalize-space()='Place Order']",
  user_Input: "#name",
  country_Input: "#country",
  city_Input: "#city",
  creditcard_Input: "#card",
  month_Input: "#month",
  year_Input: "#year",
  purchase_Btn: "//button[normalize-space()='Purchase']",
  success_Message: "//h2[normalize-space()='Thank you for your purchase!']",
  ok_Btn: "button.confirm",
};

exports.logout_Locators = {
  logout_Btn: "#logout2",
};
