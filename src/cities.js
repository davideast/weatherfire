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

const getApp = (name = '[DEFAULT]') => {
  let app = firebase.apps.find(app => app.name === name);
  if(!app) {
    app = firebase.initializeApp(config);
  }
  return app;
};

const cityCol = () => getApp().firestore().collection('cities')
const getCities = () => cityCol.get();
const getCity = name => cityCol().doc(name).get(); 

export {
  getApp,
  getCities,
  getCity,
}
