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
