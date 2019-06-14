


export function reqStatusReducer(state = {}, action) {
    let { type } = action;
    switch (type) {
        case 'REQUEST_BEGIN': {
            let { message } = action;
            return { message }
        }
        case 'REQUEST_COMPLETED': {
            let { message } = action;
            return { message }
        }
        case 'REQUEST_ERROR': {
            let { message } = action;
            return { message }
        }
        default:
            return state;
    }
}