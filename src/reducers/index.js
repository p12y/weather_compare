import React from 'react';
import {combineReducers} from 'react-redux';
import weather from './weather';

export const reducer = combineReducers({
  weather
});