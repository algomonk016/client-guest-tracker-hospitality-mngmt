export const separateId = (string = '') => {
    const id = string.match(/\d+/g)
    return id[0]
}   