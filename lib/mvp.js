const fs = require('fs-extra');
const toMs = require('ms');

/**
 * Add Mvp user.
 * @param {string} userId 
 * @param {string} expired 
 * @param {object} _premi
 */
const addMvpUser = (userId, expired, _premi) => {
    const obj = { id: userId, expired: Date.now() + toMs(expired) }
    _premi.push(obj)
    fs.writeFileSync('./database/user/mvp.json', JSON.stringify(_premi))
}

/**
 * Get Mvp user index position.
 * @param {string} userId
 * @param {object} _dir 
 * @returns {Number}
 */
const getMvpPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

/**
 * Get Mvp user expired.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {Number}
 */
const getMvpExpired = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}

/**
 * Check if is user Mvp.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {boolean}
 */
const checkMvpUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

/**
 * Constantly checking Mvp.
 * @param {object} _dir 
 */
const expiredCheck = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Mvp user expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./database/user/mvp.json', JSON.stringify(_dir))
        }
    }, 1000)
}

/**
 * Get all Mvp user ID.
 * @param {object} _dir 
 * @returns {string[]}
 */
const getAllMvpUser = (_dir) => {
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}
/**
 * Check if is user Mvp.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {boolean}
 */
 const checkOwner = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

module.exports = {
    addMvpUser,
    getMvpExpired,
    getMvpPosition,
    expiredCheck,
    checkMvpUser,
    getAllMvpUser,
    checkOwner
}
