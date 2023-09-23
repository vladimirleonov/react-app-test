import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  shadows: [
    "none", // elevation 0
    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)", // elevation 1
    "0px 3px 4px 0px rgba(0,0,0,0.2), 0px 3px 3px -2px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)", // elevation 2
    "0px 4px 5px 0px rgba(0,0,0,0.2), 0px 1px 10px 0px rgba(0,0,0,0.14), 0px 2px 4px -1px rgba(0,0,0,0.12)", // elevation 3
    "0px 5px 8px 0px rgba(0,0,0,0.2), 0px 1px 14px 0px rgba(0,0,0,0.14), 0px 3px 5px -1px rgba(0,0,0,0.12)", // elevation 4
    "0px 6px 10px 0px rgba(0,0,0,0.2), 0px 1px 18px 0px rgba(0,0,0,0.14), 0px 3px 5px -1px rgba(0,0,0,0.12)", // elevation 5
    "0px 6px 10px 0px rgba(0,0,0,0.2), 0px 1px 18px 0px rgba(0,0,0,0.14), 0px 3px 5px -1px rgba(0,0,0,0.12)", // elevation 6
    "0px 7px 10px 0px rgba(0,0,0,0.2), 0px 2px 16px 1px rgba(0,0,0,0.14), 0px 4px 6px -2px rgba(0,0,0,0.12)", // elevation 7
    "0px 7px 12px 0px rgba(0,0,0,0.2), 0px 2px 18px 1px rgba(0,0,0,0.14), 0px 4px 7px -2px rgba(0,0,0,0.12)", // elevation 8
    "0px 8px 12px 0px rgba(0,0,0,0.2), 0px 3px 14px 2px rgba(0,0,0,0.14), 0px 5px 5px -3px rgba(0,0,0,0.12)", // elevation 9
    "0px 8px 14px 0px rgba(0,0,0,0.2), 0px 3px 16px 2px rgba(0,0,0,0.14), 0px 5px 6px -3px rgba(0,0,0,0.12)", // elevation 10
    "0px 9px 14px 0px rgba(0,0,0,0.2), 0px 3px 18px 2px rgba(0,0,0,0.14), 0px 5px 7px -3px rgba(0,0,0,0.12)", // elevation 11
    "0px 9px 16px 0px rgba(0,0,0,0.2), 0px 4px 20px 2px rgba(0,0,0,0.14), 0px 5px 8px -4px rgba(0,0,0,0.12)", // elevation 12
    "0px 10px 16px 1px rgba(0,0,0,0.2), 0px 4px 22px 2px rgba(0,0,0,0.14), 0px 6px 7px -4px rgba(0,0,0,0.12)", // elevation 13
    "0px 10px 18px 1px rgba(0,0,0,0.2), 0px 4px 24px 2px rgba(0,0,0,0.14), 0px 6px 8px -4px rgba(0,0,0,0.12)", // elevation 14
    "0px 11px 18px 1px rgba(0,0,0,0.2), 0px 4px 26px 2px rgba(0,0,0,0.14), 0px 6px 9px -4px rgba(0,0,0,0.12)", // elevation 15
    "0px 11px 20px 1px rgba(0,0,0,0.2), 0px 4px 28px 2px rgba(0,0,0,0.14), 0px 7px 10px -4px rgba(0,0,0,0.12)", // elevation 16
    "0px 12px 20px 1px rgba(0,0,0,0.2), 0px 5px 30px 2px rgba(0,0,0,0.14), 0px 7px 11px -5px rgba(0,0,0,0.12)", // elevation 17
    "0px 12px 22px 1px rgba(0,0,0,0.2), 0px 5px 32px 2px rgba(0,0,0,0.14), 0px 7px 12px -5px rgba(0,0,0,0.12)", // elevation 18
    "0px 13px 22px 1px rgba(0,0,0,0.2), 0px 5px 34px 2px rgba(0,0,0,0.14), 0px 7px 13px -5px rgba(0,0,0,0.12)", // elevation 19
    "0px 13px 24px 1px rgba(0,0,0,0.2), 0px 5px 36px 2px rgba(0,0,0,0.14), 0px 7px 14px -5px rgba(0,0,0,0.12)", // elevation 20
    "0px 14px 24px 1px rgba(0,0,0,0.2), 0px 6px 38px 2px rgba(0,0,0,0.14), 0px 7px 15px -6px rgba(0,0,0,0.12)", // elevation 21
    "0px 14px 26px 1px rgba(0,0,0,0.2), 0px 6px 40px 2px rgba(0,0,0,0.14), 0px 7px 16px -6px rgba(0,0,0,0.12)", // elevation 22
    "0px 15px 26px 1px rgba(0,0,0,0.2), 0px 6px 42px 3px rgba(0,0,0,0.14), 0px 8px 17px -6px rgba(0,0,0,0.12)", // elevation 23
    "0px 15px 28px 1px rgba(0,0,0,0.2), 0px 6px 44px 3px rgba(0,0,0,0.14), 0px 8px 18px -6px rgba(0,0,0,0.12)", // elevation 24
  ],
  palette: {
    primary: {
      main: "#6894ae",
    },
    secondary: {
      main: "#68aea5",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow:
            "0px 2px 3px -1px rgba(0,0,0,0.2), 0px 4px 6px 0px rgba(0,0,0,0.14), 0px 1px 9px 0px rgba(0,0,0,0.12)",
        },
      },
    },
  },
});
