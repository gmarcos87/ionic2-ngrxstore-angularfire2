#Ionic2 + Ngrx/store + AngularFire2

Ionic2 product list app with AngularFire2 (data persistence) and ngrx/store/effets (state management)

### Install
To install:
```bash
git clone https://github.com/gmarcos87/ionic2-ngrxstore-angularfire2
cd ionic2-ngrxstore-angularfire2
npm install
```
### Configure
Add your Firebase configuration in /src/app/app.module.ts
```javascript
export const firebaseConfig = {
    apiKey: "balblabla",
    authDomain: "balbla-11111.firebaseapp.com",
    databaseURL: "https://blalba-11111.firebaseio.com"
};
```

### Use
```bash
ionic serve
```
