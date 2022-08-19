const faker = require('faker');
const bcrypt = require("bcrypt");
 function randomBetween(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 exports.seed =  async function(knex) {
  function randomBetween(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
   await knex.raw('TRUNCATE TABLE "users" CASCADE');
   await knex.raw('TRUNCATE TABLE products CASCADE');
   await knex.raw('TRUNCATE TABLE reviews CASCADE');


  const emails = await Promise.all(Array.from({length: 7}).map(() => {return faker.internet.email()}));
  //creates one admin and five customers
  
  let PASSWORD = "123"
  PASSWORD = await bcrypt.hash(PASSWORD, 10);
  

  const users =  await Promise.all(Array.from({length: 6}).map((e, index) => {
    console.log(PASSWORD)
    if(index === 0 ){
      return {
        email: "admin@user.com",
        password: PASSWORD,
        is_customer:false
      }
    }else{
      
      return {
        email: `client${index}@user.com`,
        password: PASSWORD,
        is_customer:true
      }
    }

  }))

  await knex('users').insert(users)
  const res_users = await knex('users')

  const images = await Promise.all(Array.from({length: 7}).map(() => {return faker.image.food(1234, 2345, true)}));
  

  const products = await Promise.all(Array.from({length: 5}).map((ele, index) => {
    const num = randomBetween(2,5)
    return {
      name: "haha",
      description: "hahahahaha",
      imageUrl: images[index],
      user_id:res_users[num].id,
    }
  }))
  //insert product data into the product table
  await knex('products').insert(products)
  //call products and get data out of it
  const res_product = await knex('products')  
  const fake_words = await Promise.all(Array.from({length: 1}).map(() => {return faker.lorem.paragraph(1)}));
  const reviews =  await Promise.all(Array.from({length:8}).map((ele, index) => {

    const rate = randomBetween(1,5)
    const index1 = index%5
    return {
      rating:rate,
      body:fake_words[index1],
      owner: res_users[index1].email,
      user_id: res_users[index1].id,
      product_id: res_product[index1].id
    }
  }))
  console.log("review length",reviews.length)
  await knex('reviews').insert(reviews)
  const res_reviews = await knex("reviews")
 

  console.log(`Reviews ${res_reviews.length} Products ${res_product.length} Users ${res_users.length}`)

};


