/**
 * Hippo聚合广告SDK的入口主类
 *
 * 使用时会根据当前的终端类型实现Android或者iOS的SDK入口类;
 *
 * @author junewong
 * @date 2019-05-28
 * @version 1.0.0
 */
const HippoAdSDKBase = require( 'HippoAdSDKBase' );
const HippoAdSDKIOS = require( 'HippoAdSDKIOS' );
const HippoAdSDKAndroid = require( 'HippoAdSDKAndroid' );

const extendHippoAdSDK = cc.sys.os == cc.sys.OS_ANDROID ? HippoAdSDKAndroid :
			( cc.sys.os == cc.sys.OS_IOS ? HippoAdSDKIOS : HippoAdSDKBase );
			// ( cc.sys.os == cc.sys.OS_IOS ? HippoAdSDKIOS : HippoAdSDKBase );

require('HippoAdSDKProxy').init();

cc.Class({
    extends: extendHippoAdSDK,

    properties: {
    },
});
