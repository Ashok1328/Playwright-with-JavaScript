const { faker } = require("@faker-js/faker");

exports.register_Data = () => {
  return {
    username:
      faker.internet.username() + faker.number.int({ min: 100, max: 999 }),
    password: faker.internet.password({ length: 8 }),
  };
};
