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

    // onLoad () {},

    start () {

    },

	statics : {
		init : ( callback ) => {
            console.log( "[HippoAdSDKAndroid] try to init sdk." );
			HippoAdSDKProxy.registerSdkInitCallback( callback );
			jsb.reflection.callStaticMethod("org/cocos2dx/javascript/HippoAdManager", "initHippoSDK","()V");
        },

        logMode : () => {
			jsb.reflection.callStaticMethod("org/cocos2dx/javascript/HippoAdManager", "openDebugLog" ,"()V")
		},
        
        isLoaded : (hippoPlacementId) => {
			if ( ! hippoPlacementId ) {
				console.log( '[Error][HippoAdSDKAndroid isLoaded] id is empty.' );
				return false;
            }
            console.log( 'hippo_sdk','isLoaded.' );
			return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/HippoAdManager", "isLoaded", "(Ljava/lang/String;)Z",hippoPlacementId );
        },
        
		initRewardedVideoAd : (ids, callback) => {
            console.log( "[HippoAdSDKAndroid] try to initRewardedVideoAd." );
            for ( var i in ids ) {
				const adUnitId = ids[i];
				if ( ! adUnitId ) {
					console.log( '[Error][HippoAdSDKAndroid initRewardedVideoAd] ad id is empty.' );
					continue;
				}
				HippoAdSDKProxy.registerLoadAdCallback( adUnitId, callback );
				console.log( '[HippoAdSDKAndroid] try to load reward video, id:' + adUnitId );
				jsb.reflection.callStaticMethod("org/cocos2dx/javascript/HippoAdManager", "loadRewardVideo","(Ljava/lang/String;)V",adUnitId);
			}
			
		},

		/**
 		 * callback( success, isRewared )
		 */
		showRewardVideoAd : (hippoPlacementId, shownCallback,clickedCallback) => {
            console.log( "[HippoAdSDKAndroid] try to showRewardedVideoAd." );
            if ( ! hippoPlacementId ) {
				console.log( '[Error][HippoAdSDKAndroid showRewardVideoAd] id is empty.' );
				return;
            }
			HippoAdSDKProxy.registerShowAdCallback( hippoPlacementId, shownCallback );
			HippoAdSDKProxy.registerClickAdCallback( hippoPlacementId, clickedCallback );
			jsb.reflection.callStaticMethod("org/cocos2dx/javascript/HippoAdManager", "showRewardVideoAds","(Ljava/lang/String;)V",hippoPlacementId );
        },

        initBannerAd : (ids, callback) => {
            console.log( "[HippoAdSDKAndroid] try to initBannerAd." );
            for ( var i in ids ) {
				const adUnitId = ids[i];
				if ( ! adUnitId ) {
					console.log( '[Error][HippoAdSDKAndroid initBannerAd] ad id is empty.' );
					continue;
				}
				HippoAdSDKProxy.registerLoadAdCallback( adUnitId, callback );
				console.log( '[HippoAdSDKAndroid] try to load banner, id:' + adUnitId );
				jsb.reflection.callStaticMethod("org/cocos2dx/javascript/HippoAdManager", "loadBanner","(Ljava/lang/String;)V",adUnitId);
			}
        },
        
        showBannerAd : (hippoPlacementId, shownCallback,clickedCallback) => {
			console.log( "[HippoAdSDKAndroid] try to showBannerAd." );
            if ( ! hippoPlacementId ) {
				console.log( '[Error][HippoAdSDKAndroid showBannerAd] id is empty.' );
				return;
            }
			HippoAdSDKProxy.registerShowAdCallback( hippoPlacementId, shownCallback ,true);
			HippoAdSDKProxy.registerClickAdCallback( hippoPlacementId, clickedCallback );
			jsb.reflection.callStaticMethod("org/cocos2dx/javascript/HippoAdManager", "showBannerAds","(Ljava/lang/String;I)V",hippoPlacementId,1);
		},

		hideBannerAd : (hippoPlacementId) => {
			console.log( "[HippoAdSDKAndroid] try to hideBannerAd." );
            if ( ! hippoPlacementId ) {
				console.log( '[Error][HippoAdSDKAndroid hideBannerAd] id is empty.' );
				return;
			}
			jsb.reflection.callStaticMethod("org/cocos2dx/javascript/HippoAdManager", "hideBannerAds","(Ljava/lang/String;)V",hippoPlacementId);
        },
        
        initInterstitialAd : (ids, callback) => {
			console.log( "[HippoAdSDKAndroid] try to initInterstitialAd." );
            for ( var i in ids ) {
				const adUnitId = ids[i];
				if ( ! adUnitId ) {
					console.log( '[Error][HippoAdSDKAndroid initInterstitialAd] ad id is empty.' );
					continue;
				}
				HippoAdSDKProxy.registerLoadAdCallback( adUnitId, callback );
				console.log( '[HippoAdSDKAndroid] try to load interstitial, id:' + adUnitId );
				jsb.reflection.callStaticMethod("org/cocos2dx/javascript/HippoAdManager", "loadInterstitial","(Ljava/lang/String;)V",adUnitId);
			}
        },
        
		showInterstitialAd : (hippoPlacementId, shownCallback, clickedCallback) => {
			console.log( "[HippoAdSDKAndroid] try to showInterstitialAd." );
            if ( ! hippoPlacementId ) {
				console.log( '[Error][HippoAdSDKAndroid showInterstitialAd] id is empty.' );
				return;
            }
			HippoAdSDKProxy.registerShowAdCallback( hippoPlacementId, shownCallback );
			HippoAdSDKProxy.registerClickAdCallback( hippoPlacementId, clickedCallback );
			jsb.reflection.callStaticMethod("org/cocos2dx/javascript/HippoAdManager", "showInterstitialAds","(Ljava/lang/String;)V",hippoPlacementId );
		},

		initFullScreenVideoAd : (ids, callback) => { 
			console.log( "[HippoAdSDKAndroid] try to initFullScreenVideoAd." );
            for ( var i in ids ) {
				const adUnitId = ids[i];
				if ( ! adUnitId ) {
					console.log( '[Error][HippoAdSDKAndroid initFullScreenVideoAd] ad id is empty.' );
					continue;
				}
				HippoAdSDKProxy.registerLoadAdCallback( adUnitId, callback );
				console.log( '[HippoAdSDKAndroid] try to load fullScreenVideo, id:' + adUnitId );
				jsb.reflection.callStaticMethod("org/cocos2dx/javascript/HippoAdManager", "loadFullScreenVideo","(Ljava/lang/String;)V",adUnitId);
			}
		},

		showFullScreenVideoAd : (hippoPlacementId, shownCallback, clickedCallback) => {
			console.log( "[HippoAdSDKAndroid] try to showFullScreenVideoAd." );
            if ( ! hippoPlacementId ) {
				console.log( '[Error][HippoAdSDKAndroid showFullScreenVideoAd] id is empty.' );
				return;
            }
			HippoAdSDKProxy.registerShowAdCallback( hippoPlacementId, shownCallback );
			HippoAdSDKProxy.registerClickAdCallback( hippoPlacementId, clickedCallback );
			jsb.reflection.callStaticMethod("org/cocos2dx/javascript/HippoAdManager", "showFullScreenVideo","(Ljava/lang/String;)V",hippoPlacementId );
        },

		sendEvent : (eventName, params) => {
			if ( ! eventName ) return;
			params = params || {};
			const jsonString = JSON.stringify( params );
			console.log( '[HippoAdSDKIOS] try to send event:' + eventName + ', params:' + jsonString );
			jsb.reflection.callStaticMethod("org/cocos2dx/javascript/HippoAdManager", "sendCustomEvent","(Ljava/lang/String;Ljava/lang/String;)V",eventName,jsonString );
		}
        
	}


    // update (dt) {},
});
