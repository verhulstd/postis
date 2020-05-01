exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          firstname: "John",
          lastname: "Doe",
          email: "john.doe@mail.com",
          password: "test"
        },
        {
          firstname: "Jane",
          lastname: "Doe",
          email: "jane.doe@mail.com",
          password: "test"
        },
        {
          firstname: "Tom",
          lastname: "Sawyer",
          email: "tom.sawyer@mail.com",
          password: "test"
        },
        {
          firstname: "Jimmy",
          lastname: "Carter",
          email: "jim.carter@mail.com",
          password: "test"
        },
        {
          firstname: "Emily",
          lastname: "Jackson",
          email: "emily@mail.com",
          password: "test"
        }
      ]);
    });
};
