export const isOnBeforeSendHeadersOption = (value: unknown): value is browser.webRequest.OnBeforeSendHeadersOptions =>
	Object.values<unknown>(browser.webRequest.OnBeforeSendHeadersOptions).includes(value)

export const isOnHeadersReceivedOption = (value: unknown): value is browser.webRequest.OnHeadersReceivedOptions =>
	Object.values<unknown>(browser.webRequest.OnHeadersReceivedOptions).includes(value)

export const logErrors = <A extends any[]>(func: (...args: A) => Promise<void>) => (...args: A): void => {
	func(...args).catch(console.error)
}

class AssertionError extends Error {
	public readonly name = 'AssertionError'
}

export function assert(condition: any, message: string): asserts condition {
	if (!condition) {
		throw new AssertionError(message)
	}
}
