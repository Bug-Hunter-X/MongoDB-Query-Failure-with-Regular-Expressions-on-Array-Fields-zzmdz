```javascript
const query = {
  name: { $elemMatch: { $regex: /John/i } },
};

// Alternative solution using $in
// const query = { name: { $in: [/John/i] } }; 

db.collection('users').find(query).toArray((err, users) => {
  if (err) throw err;
  console.log(users);
});
```