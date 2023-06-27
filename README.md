# Chat Example with Socket IO

## Backend

### Pre requisites
* Node v20.3.1
  
Dependencies
```json
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "morgan": "^1.10.0",
    "socket.io": "^4.7.0"
```

devDependencies
```json
    "nodemon": "^2.0.22"
```
---

## Frontend

* ReactJS
* socket.io-client  v^4.7.0

If you want to deploy frontend & backend at the same Domain. 
Then add this at the vite.config.js

```js
    server:{
        proxy:{
            '/socket.io':{
                target: 'http://localhost:4000/',
                ws:true,
            }
        }
    }
```