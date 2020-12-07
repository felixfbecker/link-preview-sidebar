export interface PreviewMessage {
	method: 'preview'
	linkUrl: string
}
export interface AllowIframeMessage {
	method: 'allowIframe'
	linkUrl: string
}
export interface DisallowIframeMessage {
	method: 'disallowIframe'
	linkUrl: string
}
export type Message = PreviewMessage | AllowIframeMessage | DisallowIframeMessage
