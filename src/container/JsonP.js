import React from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';

const UPDATEINTERVAL = 2000;
const getJSONP = jsUrl => {
	return new Promise((resolve, reject) => {
		window.latency = {
			_pingCallback: regionName => {
				resolve(regionName);
			}
		};
		let jsonp = require('superagent-jsonp');
		superagent.get(jsUrl).use(jsonp).end(() => {});
		setTimeout(reject, UPDATEINTERVAL, 'Time out');
	});
};

const mapDispatchToProps = () => {
	return {
		runJSONP: () => {
			const jsUrl = 'https://wdsonwestusqastorageacc1.blob.core.windows.net/public/callback.js';
			getJSONP(jsUrl).then(regionName => alert(regionName)).catch(ex => alert(ex));
		}
	};
};
const JsonPTag = ({runJSONP}) => (<button onClick={runJSONP}>Test JSONP </button>);

const JsonP = connect(null, mapDispatchToProps)(JsonPTag);

export default JsonP;
