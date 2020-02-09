import React from 'react';
import axios from 'axios';
import { call } from 'redux-saga/effects';

export default function* request(requestOptions = {}) {
  requestOptions.headers = {
    'Content-Type'               : 'application/json',
    'Access-Control-Allow-Origin': '*',
    ...requestOptions.headers
  };

  // For backend debug
  // const session = 'XDEBUG_SESSION_START=17280';
  // requestOptions.url = requestOptions.url.indexOf('?') > -1
  //   ? `${requestOptions.url}&${session}`
  //   : `${requestOptions.url}?${session}`;

  try {
    return yield call(axios, requestOptions);
  } catch (error) {
    throw error;
  }
}

