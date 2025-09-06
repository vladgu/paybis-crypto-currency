export class ApiError extends Error {
  constructor(message, code = 'UNKNOWN') {
    super(message)
    this.name = 'ApiError'
    this.code = code
  }
}
