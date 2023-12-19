/**
 * @name BasicPlugin
 * @author ArkhamCookie
 * @description The most basic plugin you can make.
 * @version 0.0.1
 */

module.exports = class BasicPlugin {
	start() {
		// Called when the plugin starts (including reloads)
		BdApi.alert('Hello World!', 'This is my first plugin.')
	}

	stop() {
		// Called when the plugin is deactivated
	}
}
