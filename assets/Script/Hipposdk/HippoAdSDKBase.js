/**
 * Hippo聚合广告基类，定义各个API
 *
 * @author junewong
 * @date 2019-05-28
 */
cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        console.log('[HippoAdSDKBase] onLoad');
    },

    start() {
        console.log('[HippoAdSDKBase] start');
    },

    statics: {

        init: (callback) => {
            console.log('[HippoAdSDKBase] init. base');
        },

        registCallBack: () => {
        },

        logMode: () => {
        },

        initBannerAd: (ids, callback) => {
        },

        initInterstitialAd: (ids, callback) => {
        },

        initRewardedVideoAd: (ids, callback) => {
        },

        initFullScreenVideoAd: (ids, callback) => {
        },

        isLoaded: (hippoPlacementId) => {
            return false;
        },

        showBannerAd: (hippoPlacementId, shownCallback, clickedCallback) => {
        },

        hideBannerAd: (hippoPlacementId) => {
        },

        showInterstitialAd: (hippoPlacementId, shownCallback, clickedCallback) => {
        },

        showRewardVideoAd: (hippoPlacementId, shownCallback, clickedCallback) => {
        },

        showFullScreenVideoAd: (hippoPlacementId, shownCallback, clickedCallback) => {
        },

        sendEvent: (eventName, params) => {
        }
    }

});
