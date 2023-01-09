"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Products", [
      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8210d9",
        company_id: "6f8cd063-3945-324c-b3c1-714b716ea55b",
        product_name: "Asus Vivobook 13",
        product_description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien nibh, sollicitudin quis fringilla ac, dignissim in massa. Morbi nec porta nisi.",
        specifications: "Duis molestie eu nisi sed ornare.",
        price: 35,
        category_id: "b158c5f0-86c4-4be5-9d4e-4eea37d2670a",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8211d9",
        company_id: "3d593620-f0ba-3d2b-a9b9-04d6eb8227d9",
        product_name: "Samsung Galaxy S10 64GB",
        product_description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien nibh, sollicitudin quis fringilla ac, dignissim in massa. Morbi nec porta nisi.",
        specifications:
          "Maecenas placerat sagittis libero, eget efficitur lorem varius eu",
        price: 200,
        category_id: "b158c5f0-86c4-4be5-9d4e-4eea37d2670b",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8212d9",
        company_id: "6f8cd063-3945-324c-b3c1-714b716ea55b",
        product_name: "Allview Phone",
        product_description: "Sed efficitur nec diam id fringilla",
        specifications:
          "Etiam ex tellus, tempus egestas eros eget, luctus tempor nisi",
        price: 14,
        category_id: "b158c5f0-86c4-4be5-9d4e-4eea37d2670b",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8213d9",
        company_id: "3d593620-f0ba-3d2b-a9b9-04d6eb8227d9",
        product_name: "Skullcandy Crusher",
        product_description:
          "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        specifications:
          "In at enim sit amet nisi euismod egestas. Duis varius lectus vehicula leo ultrices laoreet. Sed vitae velit bibendum est accumsan accumsan.",
        price: 46,
        category_id: "b158c5f0-86c4-4be5-9d4e-4eea37d2670c",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8214d9",
        company_id: "a3235348-00f0-3452-949c-a8dde53c5af9",
        product_name: "Apple Macbook Air 13",
        product_description:
          "Nullam diam ipsum, viverra et augue pretium, tincidunt fermentum diam. Proin id nibh convallis, elementum justo vitae, rutrum magna.",
        specifications:
          "Nam mauris dolor, scelerisque vel ultrices at, blandit ut nisi",
        price: 754,
        category_id: "b158c5f0-86c4-4be5-9d4e-4eea37d2670a",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8215d9",
        company_id: "a3235348-00f0-3452-949c-a8dde53c5af9",
        product_name: "ASUS TUF Gaming 15",
        product_description:
          "Phasellus ut arcu lorem. Phasellus pellentesque neque iaculis lacus euismod gravida.",
        specifications:
          "Mauris imperdiet odio efficitur egestas bibendum. Phasellus et odio orci. Suspendisse ut turpis vel metus posuere pulvinar a auctor est.",
        price: 234,
        category_id: "b158c5f0-86c4-4be5-9d4e-4eea37d2670a",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8216d9",
        company_id: "b091b74c-8dbe-34a6-a813-31a46c15e7ae",
        product_name: "Samsung Galaxy Ear Buds 2",
        product_description:
          "Suspendisse dignissim gravida ullamcorper. Ut vitae placerat dolor. Duis nec tristique nisi.",
        specifications:
          "Aliquam tristique arcu consequat lacus imperdiet, a vulputate neque feugiat. Maecenas vel elementum nunc, vitae faucibus tortor",
        price: 532,
        category_id: "b158c5f0-86c4-4be5-9d4e-4eea37d2670c",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8217d9",
        company_id: "b091b74c-8dbe-34a6-a813-31a46c15e7ae",
        product_name: "JBL Audio Master",
        product_description: "Duis molestie eu nisi sed ornare.",
        specifications:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam lacus, consectetur eget elit ut, luctus aliquam tellus",
        price: 156,
        category_id: "b158c5f0-86c4-4be5-9d4e-4eea37d2670c",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8218d9",
        company_id: "6f8cd063-3945-324c-b3c1-714b716ea55b",
        product_name: "Apple Macbook Pro M3",
        product_description:
          "Maecenas placerat sagittis libero, eget efficitur lorem varius eu. Etiam ornare suscipit ante, et feugiat dui cursus a. Phasellus aliquet orci neque, et tempor justo rhoncus vel.",
        specifications:
          "Morbi vehicula eros nunc, sit amet varius tellus dapibus id. Suspendisse convallis interdum neque, et laoreet felis pulvinar ut",
        price: 2415,
        category_id: "b158c5f0-86c4-4be5-9d4e-4eea37d2670a",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8219d9",
        company_id: "8016f83b-075b-3b4d-9db2-0c3a2db73235",
        product_name: "Huawei MateBook D15",
        product_description: "Morbi vel mattis libero, sed fermentum arcu.",
        specifications: "Morbi vel mattis libero, sed fermentum arcu",
        price: 124,
        category_id: "b158c5f0-86c4-4be5-9d4e-4eea37d2670a",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Products", null, {});
  },
};
