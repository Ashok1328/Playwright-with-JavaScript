const { faker } = require("@faker-js/faker");

exports.register_Data = () => {
  return {
    username:
      faker.internet.username() + faker.number.int({ min: 100, max: 999 }),
    password: faker.internet.password({ length: 8 }),
  };
};

exports.login_Data = () => {
  return {
    valid: {
      username: "RamPiyari12",
      password: "piyari12",
    },

    invalidUsername: {
      username:
        faker.internet.username() + faker.number.int({ min: 100, max: 999 }),
      password: "piyari12",
    },

    invalidPassword: {
      username: "RamPiyari12",
      password: faker.internet.password({ length: 8 }),
    },

    invalidBoth: {
      username:
        faker.internet.username() + faker.number.int({ min: 100, max: 999 }),
      password: faker.internet.password({ length: 8 }),
    },

    emptyFileds: {
      username: "",
      password: "",
    },
  };
};

exports.products_Data = () => {
  return [
    { category: "Phones", product: "Iphone 6 32gb" },
    { category: "Laptops", product: "MacBook air" },
    { category: "Monitors", product: "ASUS Full HD" },
  ];
};

exports.shipping_Data = () => ({
  fullName: faker.person.fullName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month({ abbreviated: false }),
  year: faker.date.future({ years: 5 }).getFullYear().toString(),
});
