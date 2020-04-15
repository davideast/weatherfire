import firebase from 'firebase';
import { config } from './config';

const getApp = () => {
  let defaultApp = firebase.apps.find(app => app.name === '[DEFAULT]');
  if(!defaultApp) {
    defaultApp = firebase.initializeApp(config);
  }
  return defaultApp;
};

const cityCol = () => {
  return getApp().firestore().collection('cities');
}

const getCities = () => {
  return cityCol.get()
}

const getCity = name => cityCol().doc(name).get(); 

export {
  getApp,
  getCities,
  getCity,
}
