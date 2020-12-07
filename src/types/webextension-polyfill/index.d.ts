var browser: typeof globalThis.browser
export = browser

declare global {
	declare namespace browser {
		namespace webRequest {
			export const OnBeforeSendHeadersOptions: {
				BLOCKING: 'blocking'
				REQUEST_HEADERS: 'requestHeaders'
				/** Only in Chrome */
				EXTRA_HEADERS?: 'extraHeaders'
			}
			export const OnHeadersReceivedOptions: {
				BLOCKING: 'blocking'
				RESPONSE_HEADERS: 'responseHeaders'
				/** Only in Chrome */
				EXTRA_HEADERS?: 'extraHeaders'
			}
		}
	}
}
