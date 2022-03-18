# MakeTest-E
### electron install
```npm install electron -g```

### create electron app
```npm install create-electron-app -g```

```create-electron-app project_name```

### run electron
```npm run start```

### CPU Usage
```npm install os-utils```

### electron live reload
```npm install electron-reload```

in main.js 
```const electron = require('electron')```
// Enable live reload for all the files inside your project directory
```require('electron-reload')(__dirname); ```