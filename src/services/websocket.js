import config from "../config";
import {
    addPost,
    removePost,
    setErrorMessage,
    startWebSocketRequest,
    websocketRequestSuccess,
    websocketRequestFailure
} from "../redux/slices/postsSlice";

export const connectWebSocket = (data) => {
    return (dispatch) => {
        dispatch(startWebSocketRequest());
        dispatch(setErrorMessage(null));

        const socket = new WebSocket(config.websocketUrl);

        socket.onopen = () => {
            console.log("WebSocket connected");
            socket.send(JSON.stringify(data));
        };

        socket.onmessage = (event) => {
            try {
                const receivedData = JSON.parse(event.data);
                if (data.type === "add") {
                    dispatch(addPost(receivedData));
                } else if (data.type === "del") {
                    dispatch(removePost(receivedData.id));
                } else {
                    dispatch(setErrorMessage("Unknown message type"));
                    dispatch(websocketRequestFailure());
                }
                dispatch(websocketRequestSuccess());
            } catch (error) {
                dispatch(
                    setErrorMessage(
                        "An error occurred while processing the message"
                    )
                );
                dispatch(websocketRequestFailure());
            }
        };

        socket.onerror = (error) => {
            dispatch(setErrorMessage("WebSocket error"));
            dispatch(websocketRequestFailure());
        };

        socket.onclose = () => {
            console.log("WebSocket disconnected");
        };
    };
};
