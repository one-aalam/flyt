import flatten from './flatten';

/**
 * Main library namespace to allow `extensions` in future
 */
const flyt = () => {
    return {
        flatten: flatten
    }
}

module.exports = flyt();