const { faker } = require("@faker-js/faker");

exports.shipping_Data = () => ({
  fullName: faker.person.fullName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month({ abbreviated: false }),
  year: faker.date.future({ years: 5 }).getFullYear().toString(),
});
