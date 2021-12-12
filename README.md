
<p align="center">
  <img src="https://api.rei.my.id/img/style/ayaxkyo.jpg" width=40%><br>
  <b>Simple JavaScript Library To Interact With <a href="https://api.rei.my.id/">Kyoko API</a></b>
  <br><br>
</p>

Installation
```
npm i kyoko-npm
```

Example
```javascript
const Kyoko = require('kyoko-npm');

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
