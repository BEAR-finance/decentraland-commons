export interface KeyedObject {
  [key: string]: any
}

/**
 * Promisifies a node callback style function. Takes a second argument that is bound as `this`
 * @param  {Function} fn - Node style callback, accepting (error, result)
 * @return {Promise}
 */
export function promisify<T>(fn): (...args: any[]) => Promise<T> {
  return (...args) =>
    new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
}

/**
 * Sleep for a certain amount of milliseconds
 * @param {integer} ms - miliseconds to sleep
 * @return {Promise} - Promise that resolves when the sleeping is done
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Check if an object has keys
 * @param {object} obj
 */
export function isEmptyObject(obj: any): boolean {
  return obj && Object.keys(obj).length === 0
}

/**
 * Return a copy of the object, filtered to omit the blacklisted array of valid keys
 * @param {object} obj
 * @param {array} keys
 */
export function omit(obj: KeyedObject, keys: string[]): KeyedObject {
  const newKeys = Object.keys(obj).filter(key => !keys.includes(key))
  return pick(obj, newKeys)
}

/**
 * Returns a copy of the array of with the keys filtered on each object
 * @param {array} array - array of objects
 * @param {array} keys
 */
export function mapOmit(array: KeyedObject[], keys: string[]): KeyedObject[] {
  return array.map(obj => omit(obj, keys))
}

/**
 * Return a copy of the object, filtered to only have values for the whitelisted array of valid keys
 * @param {object} obj
 * @param {array} keys
 */
export function pick(obj: KeyedObject, keys: string[]): KeyedObject {
  const result = {}

  for (const key of keys) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key]
    }
  }

  return result
}
