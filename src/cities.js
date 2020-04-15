/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
