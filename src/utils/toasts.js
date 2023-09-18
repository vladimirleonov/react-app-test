import { toast } from "react-toastify";

const toastSuccess = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });
};

export const showPostCreatedToast = () => {
    toastSuccess("Article has been successfully created!");
};

export const showPostDeletedToast = () => {
    toastSuccess("Article(s) has been successfully deleted!");
};

export const showAuthenticationSuccessToast = () => {
    toastSuccess("Authentication successful!");
};
