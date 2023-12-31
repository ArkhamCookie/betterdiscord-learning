/**
 * @name Using The DOM
 * @author ArkhamCookie
 * @description A plugin that interacts with the DOM
 * @version 0.0.1
 */

module.exports = class BasicPlugin {
	start() {
		const myButton = document.createElement('button')
		myButton.textContent = 'Click me!'
		myButton.addEventListener('click', () => { window.alert('Hello World!') })

		const serverList = document.querySelector('#app-mount > div.appAsidePanelWrapper__714a6 > div.notAppAsidePanel__9d124 > div.app_b1f720 > div > div.layers__1c917.layers_a23c37 > div > div > nav > ul > div.scroller__3d071.none__51a8f.scrollerBase_dc3aa9 > div:nth-child(3)')
		serverList.append(myButton)
	}

	stop() {}
}
