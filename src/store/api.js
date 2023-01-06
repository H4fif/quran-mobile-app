import { createAction } from '@reduxjs/toolkit';

export const apiCallStart = createAction('api/callStart');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFail = createAction('api/callFail');
