import { abi } from './artifacts/LANDRegistry.json'
import { Contract } from '../ethereum'
import { env } from '../env'
import CSV from 'comma-separated-values'

const MAX_NAME_LENGTH = 50
const MAX_DESCRIPTION_LENGHT = 140

/** LANDToken contract class */
export class LANDRegistry extends Contract {
  static getContractName() {
    return 'LANDRegistry'
  }

  static decodeLandData(data = '') {
    const version = data.charAt(0)
    switch (version) {
      case '0': {
        const [version, name, description, ipns] = CSV.parse(data)[0]

        return {
          version,
          // when a value is blank, csv.parse returns 0, so we fallback to empty string
          // to support stuff like `0,,,ipns:link`
          name: name || '',
          description: description || '',
          ipns
        }
      }
      default:
        throw new Error(
          `Unknown version when trying to decode land data: "${data}" (see https://github.com/decentraland/commons/blob/master/docs/land-data.md)`
        )
    }
  }

  static encodeLandData(data = {}) {
    switch (data.version.toString()) {
      case '0': {
        const { version, name, description, ipns } = data
        if (name.length > MAX_NAME_LENGTH) {
          throw new Error(
            `The name is too long, max length allowed is ${MAX_NAME_LENGTH} chars`
          )
        }
        if (description.length > MAX_DESCRIPTION_LENGHT) {
          throw new Error(
            `The description is too long, max length allowed is ${MAX_DESCRIPTION_LENGHT} chars`
          )
        }
        return CSV.encode([[version, name, description, ipns]])
      }
      default:
        throw new Error(
          `Unknown version when trying to encode land data: "${JSON.stringify(
            data
          )}"
          (see https://github.com/decentraland/commons/blob/master/docs/land-data.md)`
        )
    }
  }

  static getDefaultAddress() {
    return env.universalGet('LAND_REGISTRY_CONTRACT_ADDRESS')
  }

  static getDefaultAbi() {
    return abi
  }

  getData(x, y) {
    return this.call('landData', x, y)
  }

  updateLandData(x, y, data) {
    return this.transaction('updateLandData', x, y, data)
  }

  updateManyLandData(coordinates, data) {
    const x = coordinates.map(coor => coor.x)
    const y = coordinates.map(coor => coor.y)
    return this.transaction('updateManyLandData', x, y, data)
  }

  getOwner(x, y) {
    return this.call('ownerOfLand', x, y)
  }

  encodeTokenId(x, y) {
    return this.call('encodeTokenId', x, y)
  }

  decodeTokenId(value) {
    return this.call('decodeTokenId', value)
  }

  ping(x, y) {
    return this.transaction('ping', x, y)
  }

  exists(x, y) {
    return this.call('exists', x, y)
  }

  transferTo(x, y, newOwner) {
    return this.transaction('transferLand', x, y, newOwner)
  }

  assetsOf(address) {
    return this.transaction('assetsOf', address)
  }

  ownerOfLand(x, y) {
    return this.call('ownerOfLand', x, y)
  }

  ownerOfLandMany(x, y) {
    return this.call('ownerOfLandMany', x, y)
  }

  landOf(owner) {
    return this.call('landOf', owner)
  }

  assignNewParcel(x, y, address, opts = {}) {
    return this.transaction(
      'assignNewParcel',
      x,
      y,
      address,
      Object.assign({}, { gas: 4000000, gasPrice: 28 * 1e9 }, opts)
    )
  }

  assignMultipleParcels(x, y, address, opts = {}) {
    return this.transaction(
      'assignMultipleParcels',
      x,
      y,
      address,
      Object.assign({}, { gas: 1000000, gasPrice: 28 * 1e9 }, opts)
    )
  }
}
