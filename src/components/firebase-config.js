export default{
    apiKey: process.env.REACT_APP_FIRE_BASE_API_KEY || '',
    authDomain: process.env.REACT_APP_FIRE_BASE_AUTHDOMAIN || '',
    databaseURL: process.env.REACT_APP_FIRE_BASE_DATABASEURL || '',
    projectId: process.env.REACT_APP_FIRE_BASE_PROJECTID || '',
    storageBucket: process.env.REACT_APP_FIRE_BASE_STORAGEBUCKET || '',
    messagingSenderId: process.env.REACT_APP_FIRE_BASE_MESSAGINGSENDERID || '',
    appId: process.env.REACT_APP_FIRE_BASE_APPID || '',
    measurementId: process.env.REACT_APP_FIRE_BASE_MEASUREMENTID || ''
}