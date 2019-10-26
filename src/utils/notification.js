import {NotificationManager} from 'react-notifications';

export const showMessage = (msg = {type: 'info'}) => {
    let text = ''
    console.log()
    switch (msg.type) {
        case 'error' :
            // TODO make an error handler depending on the object
            if(
                msg.data instanceof Object &&
                msg.data.response instanceof Object &&
                msg.data.response.data instanceof Object &&
                msg.data.response.data.error instanceof Object
            ) {
                text = msg.data.response.data.error.message
            }
            else if(
                msg.data instanceof Object &&
                msg.data.response instanceof Object &&
                msg.data.response.data instanceof Object &&
                (typeof(msg.data.response.data.error) == 'string' || typeof(msg.data.response.data.message) == 'string' )
            ) {
                text = msg.data.response.data.message || msg.data.response.data.error
            }
            else if(
                typeof(msg.data) == 'string'
            ) {
                text = msg.data
            } else {
                text = 'error'
            }
            break;
        case 'info' :
            if(msg.data instanceof String || typeof(msg.data) == 'string') text = msg.data
            break;
        default :
    }
    NotificationManager[msg.type](text)
}
