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

		const root = document.getElementById('app-mount')
		root.append(myButton)
	}

	stop() {}
}
