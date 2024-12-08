```javascript
const query = { name: /John/i }; // Case-insensitive search

// This query will fail if the 'name' field is an array
db.collection('users').find(query).toArray((err, users) => {
  if (err) throw err;
  console.log(users);
});
```