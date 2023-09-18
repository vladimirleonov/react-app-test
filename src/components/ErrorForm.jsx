import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useTheme } from "@mui/material/styles";

const ErrorForm = ({ open, onClose, error }) => {
    const theme = useTheme();

    return (
        <Dialog open={open} onClose={onClose} maxWidth="xs">
            <DialogContent>
                <div style={{ textAlign: "center", padding: theme.spacing(2) }}>
                    <Typography variant="h6" gutterBottom>
                        Error
                    </Typography>
                    <Typography variant="body1">{error}</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: theme.spacing(2) }}
                        onClick={onClose}
                    >
                        OK
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ErrorForm;

