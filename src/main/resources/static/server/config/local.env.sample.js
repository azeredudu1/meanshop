'use strict';

// Use local.env.js for environment variables that grunt will set when the
// server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
	DOMAIN : 'http://localhost:9000',
	SESSION_SECRET : 'meanshop-secret',

	FACEBOOK_ID : '1044810015574579',
	FACEBOOK_SECRET : '5a38d8f5ac8a9dc3a152bc42847f2c52',

	TWITTER_ID : 'dFZQnr5TrQO77RyexU4XXsjVT',
	TWITTER_SECRET : 'v1qULsnh5GhjXgVmPaAQk0F1cZf93W7BElMFghvpHFmgq6J8xN',

	GOOGLE_ID : 'app-id',
	GOOGLE_SECRET : 'secret',

	BRAINTREE_ID : 'shxpth8q5xksrcxy',
	BRAINTREE_SECRET : '2d4cb1d875a43eda1b03169129c79b4a',
	BRAINTREE_MERCHANT : 'wjfxm27dskbhy5c4',

	// Control debug level for modules using visionmedia/debug
	DEBUG : ''
};
