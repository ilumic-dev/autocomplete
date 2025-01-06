window.phpIntellisense.jsonFunctions = [
    window.cmSnip(`json_encode($\{});$\{}`, {
        label: "json_encode()",
        detail: "JSON",
        type: "method",
        info: `The json_encode() function returns a string representation of a value in JSON format.`
    }),
    window.cmSnip(`json_decode($\{});$\{}`, {
        label: "json_decode()",
        detail: "JSON",
        type: "method",
        info: `The json_decode() function returns the value represented by the JSON string.`
    }),
    window.cmSnip(`json_last_error_msg();$\{}`, {
        label: "json_last_error_msg()",
        detail: "JSON",
        type: "method",
        info: `The json_last_error_msg() function returns the error string of the last json_encode() or json_decode() call.`
    }),
    window.cmSnip(`json_last_error();$\{}`, {
        label: "json_last_error()",
        detail: "JSON",
        type: "method",
        info: `The json_last_error() function returns the last error occurred.`
    }),
];