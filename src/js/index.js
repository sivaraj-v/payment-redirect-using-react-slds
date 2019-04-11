import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch'; // IE 11 Browser
import '../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css';
import '../css/common.css';
import RedirectLoader from './root.layout';
ReactDOM.render(<RedirectLoader />, document.getElementById('app-root'));
