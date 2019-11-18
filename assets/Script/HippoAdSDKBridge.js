// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const HippoAdSDK = require('HippoAdSDK');
// 河马SDK激励视频广告位id
const HIPPO_AD_REWARD_ID = (cc.sys.os === cc.sys.OS_ANDROID)
    ? "04f915875f05f97b4847f979fd7cb5dd"
    : "e190e54574fc2501d937d67fc9af2d5e";
const HIPPO_AD_FULLSCREENVIDEO_ID = (cc.sys.os === cc.sys.OS_ANDROID)
    ? "f83d24296a85442e06d120dc1aba122c"
    : "e190e54574fc2501d937d67fc9af2d5e";
const HIPPO_AD_INTERSTITIAL_ID = (cc.sys.os === cc.sys.OS_ANDROID)
    ? "f83d24296a85442e06d120dc1aba1221"
    : "bfe4445553d1ff53dea7354c516c8442";
const HIPPO_AD_BANNER_ID = (cc.sys.os === cc.sys.OS_ANDROID)
    ? "f83d24296a85442e06d120dc1aba1222"
    : "01733049c510ecb150ef3198393639da";
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    init() {
        cc.log('dkhfoksldkmaslkmmldksmflkdmsflkdm;km')
    },

    initHippoSDK() {

        const _this = this;
        HippoAdSDK.logMode();

        HippoAdSDK.init((success) => {
            _this.isInitSuccess = success;
            console.log("hippo_sdk", "SDK init, success:" + success);
        });
    },

    loadHippoBannerAd() {
        if (!this.isInitSuccess) {
            console.log("hippo_sdk", "请先初始化SDK");
            return;
        }
        HippoAdSDK.initBannerAd([HIPPO_AD_BANNER_ID], (hippoPlacementId, success, errorMessage) => {
            console.log("hippo_sdk", " banner id:" + hippoPlacementId + " loaded, success:" + success + ", errorMessage:" + (errorMessage || ""));
        });
    },

    showHippoBannerAd() {
        HippoAdSDK.showBannerAd(HIPPO_AD_BANNER_ID, (success, errorMessage) => { // 展示回调
            console.log("hippo_sdk", "show banner success:" + success);

        }, () => { // 点击回调
            console.log("hippo_sdk", "cocos showHippoBannerAd clicked.");
        });
    },

    hideHippoBannerAd() {
        HippoAdSDK.hideBannerAd(HIPPO_AD_BANNER_ID);
    },

    loadHippoInterstitialAd() {
        if (!this.isInitSuccess) {
            console.log("hippo_sdk", "请先初始化SDK");
            return;
        }
        HippoAdSDK.initInterstitialAd([HIPPO_AD_INTERSTITIAL_ID], (hippoPlacementId, success) => {
            console.log("hippo_sdk", " Interstitial id:" + hippoPlacementId + " loaded, success:" + success);
        });
    },

    showHippoInterstitialAd() {
        HippoAdSDK.showInterstitialAd(HIPPO_AD_INTERSTITIAL_ID, (success, errorMessage) => {
            console.log("hippo_sdk", "show Interstitial success:" + success);
        }, () => {
            console.log("hippo_sdk", "cocos showHippoInterstitialAd clicked.");
        });
    },

    loadHippoFullScreenVideoAd() {
        if (!this.isInitSuccess) {
            console.log("hippo_sdk", "请先初始化SDK");
            return;
        }
        HippoAdSDK.initFullScreenVideoAd([HIPPO_AD_FULLSCREENVIDEO_ID], (hippoPlacementId, success) => {
            console.log("hippo_sdk", " fullscreenvideo id:" + hippoPlacementId + " loaded, success:" + success);
        });
    },

    showFullScreenVideoAd() {
        HippoAdSDK.showFullScreenVideoAd(HIPPO_AD_FULLSCREENVIDEO_ID, (success, errorMessage) => {
            console.log("hippo_sdk", "show FullScreenVideo success:" + success);
        }, () => {
            console.log("hippo_sdk", "cocos showFullScreenVideoAd clicked.");
        });
    },

    loadHippoRewardVideoAd() {
        if (!this.isInitSuccess) {
            console.log("hippo_sdk", "请先初始化SDK");
            return;
        }
        HippoAdSDK.initRewardedVideoAd([HIPPO_AD_REWARD_ID], (hippoPlacementId, success) => {
            console.log("hippo_sdk", " reward id:" + hippoPlacementId + " loaded, success:" + success);
        });
    },

    showHippoRewardVideoAd() {
        HippoAdSDK.showRewardVideoAd(HIPPO_AD_REWARD_ID, (success, errorMessage, isRewarded) => { // 展示回调
            console.log("hippo_sdk", "showRewardVideoAd success:" + success + ", isRewarded:" + isRewarded);
            if (success && isRewarded) {
                // 给奖励
            }
        }, () => { // 点击回调
            console.log("hippo_sdk", "cocos showRewardVideoAd clicked.");
        });
    },

    checkAdLoaded() {
        const isLoaded = HippoAdSDK.isLoaded(HIPPO_AD_REWARD_ID);
        console.log("hippo_sdk", "reward ad " + HIPPO_AD_REWARD_ID + " isLoaded:" + isLoaded);
    },

    sendUmengCustomEvent() {
        HippoAdSDK.sendEvent("test_event", {"parma1": "value1", "param2": "value2"});
    }

    // update (dt) {},
});
