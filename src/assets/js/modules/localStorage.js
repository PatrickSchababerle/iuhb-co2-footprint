/**
 * Get a defined key from localStorage
 * @param {string} key
 * @return {string}
 */
export function getLocalStorage(key) {
    return localStorage.getItem(key);
}

/**
 * Store a value to a key in localStorage
 * @param {string} key
 * @param {string} value
 */
export function setLocalStorage(key, value) {
    return localStorage.setItem(key, value);
}

export default {
    "getLocalStorage": getLocalStorage,
    "setLocalStorage": setLocalStorage
}