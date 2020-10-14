export const parse = e => {
    const errors = e.inner.reduce((data, item) => {
        return {
            ...data,
            [item.path]: item.message
        }
    }, {})

    return errors
}