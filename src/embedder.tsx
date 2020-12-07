import { Message } from './messages'

window.addEventListener('message', event => {
	const message = event.data as Message
	if (message.method === 'preview') {
		console.log('Received preview message in embedder frame for URL', message.linkUrl)
		document.querySelector<HTMLIFrameElement>('#iframe')!.src = message.linkUrl
		return
	}
	throw new Error('Unknown message ' + message.method)
})
