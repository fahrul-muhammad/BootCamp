let data = {
  id: 1,
  name: "Leane Graham",
  username: "Bret",
  email: "sincere@april.biz",
  address: {
    street: "kulas light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031x56442",
  website: "hildegard.org",
};

let newData = {
  ...data,
  name: "Fahrul Muhammad",
  email: "fahrul.muh2306@gmail.com",
  hobby: "gaming",
};

const { street, city } = data.address;

console.log(newData);
console.log(`${street}  ${city}`);
