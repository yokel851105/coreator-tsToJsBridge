/**
 * 原生客户端对Js端的回调
 *
 * @author junewong
 * @date 2019-05-30
 */
const HippoAdSDKProxy = cc.Class({
    extends: cc.Component,

    properties: {
    },

	statics : {
		/**
		 * 保持回调函数，全局持有，由原生客户端回调的时候调用；
		 */
		_loadAdCallbackMap : {},
		_showAdCallbackMap : {},
		_clickAdCallbackMap : {},
		_rewardAdMap : {},

		_sdkInitCallback : null,

		_keppShowAdCallbackMap : {},

		init: () => {
			window.HippoAdSDKProxy = HippoAdSDKProxy;
		},

		registerSdkInitCallback : ( callback ) => {
			_this._sdkInitCallback = callback;
		},

		registerLoadAdCallback : ( adUnitId, callback ) => {
			_this._loadAdCallbackMap[ adUnitId ] = callback;
		},

		registerShowAdCallback : ( adUnitId, callback, keep ) => {
			keep = !! keep;
			_this._showAdCallbackMap[ adUnitId ] = callback;
			_this._keppShowAdCallbackMap[ adUnitId ] = keep;
		},

		registerClickAdCallback : ( adUnitId, callback ) => {
			_this._clickAdCallbackMap[ adUnitId ] = callback;
		},

		clearLoadAdCallback : ( adUnitId ) => {
			_this._loadAdCallbackMap[ adUnitId ] = null;
		},

		clearShowAdCallback : ( adUnitId ) => {
			_this._showAdCallbackMap[ adUnitId ] = null;
		},

		clearClickAdCallback : ( adUnitId ) => {
			_this._clickAdCallbackMap[ adUnitId ] = null;
		},

		clearSdkInitCallback : () => {
			_this._sdkInitCallback = null;
		},

		onInit : ( success ) => {
			if ( _this._sdkInitCallback ) {
				_this._sdkInitCallback( success === true );
				_this.clearSdkInitCallback();
			}
		},

		onAdLoad : ( adUnitId ) => {
			_this._rewardAdMap[ adUnitId ] = false;
			const callback  = _this._loadAdCallbackMap[ adUnitId ];
			if ( ! callback ) return;
			callback( adUnitId, true, '' );
		},

		onReward : ( adUnitId ) => {
			_this._rewardAdMap[ adUnitId ] = true;
		},

		onClosed : ( adUnitId ) => {
			const callback  = _this._showAdCallbackMap[ adUnitId ];
			if ( ! callback ) return;
			const isRewarded = !! _this._rewardAdMap[ adUnitId ];
			callback( true, '', isRewarded );
			if ( ! _this._keppShowAdCallbackMap[ adUnitId ] ) {
				_this.clearShowAdCallback( adUnitId );
			}
		},

		onClicked : ( adUnitId ) => {
			const callback  = _this._clickAdCallbackMap[ adUnitId ];
			if ( ! callback ) return;
			callback();
			_this.clearClickAdCallback( adUnitId );
		},

		onLoadError : ( adUnitId, errorMessage ) => {
			const callback  = _this._loadAdCallbackMap[ adUnitId ];
			if ( ! callback ) return;
			callback( adUnitId, false, errorMessage );
		},

		onShowError : ( adUnitId, errorMessage ) => {
			const callback  = _this._showAdCallbackMap[ adUnitId ];
			if ( ! callback ) return;
			callback( false, errorMessage, false );
			if ( ! _this._keppShowAdCallbackMap[ adUnitId ] ) {
				_this.clearShowAdCallback( adUnitId );
			}
		}
	}

});

const _this = HippoAdSDKProxy;
