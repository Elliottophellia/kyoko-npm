# Kyoko-npm
Simple JavaScript Library To Interact With Kyoko API

```
npm i Kyoko-npm
```

Example
```javascript
const { Kyoko } = require('Kyoko-npm');

(async () => {
   
   Kyoko('quotes')
   .then(res => {
      console.log(res);
   })
   .catch(err => {
      console.log(err);
   });

})();
```
Result
```javascript
{
  quote: 'When I become Fuhrer President, all female personnel in the military ... will have to wear mini-skirts.',
  anime: 'Fullmetal Alchemist',
  id: 3833,
  name: 'Roy Mustang'
}
```
