import { Message } from './messages'

window.addEventListener('message', event => {
	const message = event.data as Message
	if (message.method === 'preview') {
		document.querySelector<HTMLIFrameElement>('#iframe')!.src = message.linkUrl
	}
})
