/**
 * Hippo聚合广告针对Android系统的主类
 *
 * @author junewong
 * @date 2019-05-28
 */
const HippoAdSDKBase = require( 'HippoAdSDKBase' );
const HippoAdSDKProxy = require( 'HippoAdSDKProxy' );

cc.Class({
    extends: HippoAdSDKBase,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
		console.log( '[HippoAdSDKBase] onLoad' );
	},

    start () {
		console.log( '[HippoAdSDKIOS] start.' );
    },

	statics : {
		init : ( callback ) => {
			console.log( "[HippoAdSDKIOS] try to init sdk." );
			HippoAdSDKProxy.registerSdkInitCallback( callback );
			jsb.reflection.callStaticMethod("HippoAdSDKBridge", "initSDK");
		},

		initBannerAd : (ids, callback) => {
			if ( ! ids ) {
				console.log( '[Error][HippoAdSDKIOS] banner ids is empty.' );
				return;
			}

			for ( var i in ids ) {
				const hippoPlacementId = ids[i];
				if ( ! hippoPlacementId ) {
					console.log( '[Error][HippoAdSDKIOS initBannerAd] ad id is empty.' );
					continue;
				}
				HippoAdSDKProxy.registerLoadAdCallback( hippoPlacementId, callback );
				console.log( '[HippoAdSDKIOS] try to load banner ad, id:' + hippoPlacementId );
				jsb.reflection.callStaticMethod("HippoAdSDKBridge", "createBannerAd:", hippoPlacementId );
			}
		},

		initRewardedVideoAd : (ids, callback) => {
			if ( ! ids ) {
				console.log( '[Error][HippoAdSDKIOS] reward ids is empty.' );
				return;
			}

			for ( var i in ids ) {
				const hippoPlacementId = ids[i];
				if ( ! hippoPlacementId ) {
					console.log( '[Error][HippoAdSDKIOS initRewardedVideoAd] ad id is empty.' );
					continue;
				}
				HippoAdSDKProxy.registerLoadAdCallback( hippoPlacementId, callback );
				console.log( '[HippoAdSDKIOS] try to load reward video, id:' + hippoPlacementId );
				jsb.reflection.callStaticMethod("HippoAdSDKBridge", "loadRewardedVideoAd:", hippoPlacementId );
			}
		},

		initFullScreenVideoAd : (ids, callback) => { 
			if ( ! ids ) {
				console.log( '[Error][HippoAdSDKIOS] fullscreen ids is empty.' );
				return;
			}

			for ( var i in ids ) {
				const hippoPlacementId = ids[i];
				if ( ! hippoPlacementId ) {
					console.log( '[Error][HippoAdSDKIOS initFullScreenVideoAd] ad id is empty.' );
					continue;
				}
				HippoAdSDKProxy.registerLoadAdCallback( hippoPlacementId, callback );
				console.log( '[HippoAdSDKIOS] try to load fullscreen video, id:' + hippoPlacementId );
				jsb.reflection.callStaticMethod("HippoAdSDKBridge", "loadFullscreenVideoAd:", hippoPlacementId );
			}
		},

		initInterstitialAd : (ids, callback) => {
			if ( ! ids ) {
				console.log( '[Error][HippoAdSDKIOS] interstial ids is empty.' );
				return;
			}

			for ( var i in ids ) {
				const hippoPlacementId = ids[i];
				if ( ! hippoPlacementId ) {
					console.log( '[Error][HippoAdSDKIOS initInterstitialAd] ad id is empty.' );
					continue;
				}
				HippoAdSDKProxy.registerLoadAdCallback( hippoPlacementId, callback );
				console.log( '[HippoAdSDKIOS] try to load fullscreen video, id:' + hippoPlacementId );
				jsb.reflection.callStaticMethod("HippoAdSDKBridge", "loadInterstitialAd:", hippoPlacementId );
			}
		},

		isLoaded : (hippoPlacementId) => {
			if ( ! hippoPlacementId ) {
				console.log( '[Error][HippoAdSDKIOS isLoaded] id is empty.' );
				return false;
			}
			return jsb.reflection.callStaticMethod("HippoAdSDKBridge", "isLoaded:", hippoPlacementId );
		},

		showRewardVideoAd : (hippoPlacementId, shownCallback, clickedCallback) => {
			if ( ! hippoPlacementId ) {
				console.log( '[Error][HippoAdSDKIOS showRewardVideoAd] id is empty.' );
				return;
			}
			console.log( '[HippoAdSDKIOS] try to show reward video, id:' + hippoPlacementId );
			HippoAdSDKProxy.registerShowAdCallback( hippoPlacementId, shownCallback );
			HippoAdSDKProxy.registerClickAdCallback( hippoPlacementId, clickedCallback );
			jsb.reflection.callStaticMethod("HippoAdSDKBridge", "showRewardedVideoAd:", hippoPlacementId );
		},

		showBannerAd : (hippoPlacementId, shownCallback, clickedCallback) => {
			if ( ! hippoPlacementId ) {
				console.log( '[Error][HippoAdSDKIOS showBannerAd] id is empty.' );
				return;
			}
			console.log( '[HippoAdSDKIOS] try to show banner ad , id:' + hippoPlacementId );
			HippoAdSDKProxy.registerShowAdCallback( hippoPlacementId, shownCallback, true );
			HippoAdSDKProxy.registerClickAdCallback( hippoPlacementId, clickedCallback );
			jsb.reflection.callStaticMethod("HippoAdSDKBridge", "showBannerAd:", hippoPlacementId );
		},

		hideBannerAd : (hippoPlacementId) => {
			if ( ! hippoPlacementId ) {
				console.log( '[Error][HippoAdSDKIOS hideBannerAd] id is empty.' );
				return;
			}
			console.log( '[HippoAdSDKIOS] try to hide banner ad , id:' + hippoPlacementId );
			jsb.reflection.callStaticMethod("HippoAdSDKBridge", "hideBannerAd:", hippoPlacementId );
		},

		showInterstitialAd : (hippoPlacementId, shownCallback, clickedCallback) => {
			if ( ! hippoPlacementId ) {
				console.log( '[Error][HippoAdSDKIOS showInterstitialAd] id is empty.' );
				return;
			}
			console.log( '[HippoAdSDKIOS] try to show interstitial ad, id:' + hippoPlacementId );
			HippoAdSDKProxy.registerShowAdCallback( hippoPlacementId, shownCallback );
			HippoAdSDKProxy.registerClickAdCallback( hippoPlacementId, clickedCallback );
			jsb.reflection.callStaticMethod("HippoAdSDKBridge", "showInterstitialAd:", hippoPlacementId );
		},

		showFullScreenVideoAd : (hippoPlacementId, shownCallback, clickedCallback) => {
			if ( ! hippoPlacementId ) {
				console.log( '[Error][HippoAdSDKIOS showFullScreenVideoAd] id is empty.' );
				return;
			}
			console.log( '[HippoAdSDKIOS] try to show fullScreen ad, id:' + hippoPlacementId );
			HippoAdSDKProxy.registerShowAdCallback( hippoPlacementId, shownCallback );
			HippoAdSDKProxy.registerClickAdCallback( hippoPlacementId, clickedCallback );
			jsb.reflection.callStaticMethod("HippoAdSDKBridge", "showFullscreenVideoAd:", hippoPlacementId );
		},

		sendEvent : (eventName, params) => {
			if ( ! eventName ) return;
			params = params || {};
			const jsonString = JSON.stringify( params );
			console.log( '[HippoAdSDKIOS] try to send event:' + eventName + ', params:' + jsonString );
			jsb.reflection.callStaticMethod("HippoAdSDKBridge", "sendEvent:params:", eventName,  jsonString );
		}
	}

    // update (dt) {},
});
