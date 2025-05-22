import React, { lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

export default HeavyComponent; 