window.phpIntellisense.outputControlFunctions = [
    snip(`flush();$\{}`, {
        label: "flush()",
        detail: "Output Control",
        type: "method",
        info: `The flush() function attempts to send content from the system's output buffer to the browser.`
    }),
    snip(`ob_clean();$\{}`, {
        label: "ob_clean()",
        detail: "Output Control",
        type: "method",
        info: `The ob_clean() function deletes all of the content from the topmost output buffer.`
    }),
    snip(`ob_end_clean();$\{}`, {
        label: "ob_end_clean()",
        detail: "Output Control",
        type: "method",
        info: `The ob_end_clean() function deletes the topmost output buffer and all of its contents.`
    }),
    snip(`ob_end_flush();$\{}`, {
        label: "ob_end_flush()",
        detail: "Output Control",
        type: "method",
        info: `The ob_end_flush() function deletes the topmost output buffer and outputs its contents.`
    }),
    snip(`ob_flush();$\{}`, {
        label: "ob_flush()",
        detail: "Output Control",
        type: "method",
        info: `The ob_flush() function outputs the contents of the topmost output buffer and clears the buffer.`
    }),
    snip(`ob_get_clean();$\{}`, {
        label: "ob_get_clean()",
        detail: "Output Control",
        type: "method",
        info: `The ob_get_clean() function returns all of the contents of the topmost output buffer and clears the buffer.`
    }),
    snip(`ob_get_contents();$\{}`, {
        label: "ob_get_contents()",
        detail: "Output Control",
        type: "method",
        info: `The ob_get_contents() function returns the contents of the topmost output buffer.`
    }),
    snip(`ob_get_flush();$\{}`, {
        label: "ob_get_flush()",
        detail: "Output Control",
        type: "method",
        info: `The ob_get_flush() function outputs and returns the contents of the topmost output buffer and then deletes the buffer.`
    }),
    snip(`ob_get_length();$\{}`, {
        label: "ob_get_length()",
        detail: "Output Control",
        type: "method",
        info: `The ob_get_length() function returns the number of bytes of data that are in the topmost output buffer.`
    }),
    snip(`ob_get_level();$\{}`, {
        label: "ob_get_level()",
        detail: "Output Control",
        type: "method",
        info: `The ob_get_level() function returns a number indicating how many output buffers are on the stack.`
    }),
    snip(`ob_get_status();$\{}`, {
        label: "ob_get_status()",
        detail: "Output Control",
        type: "method",
        info: `The ob_get_status() function returns information about the output buffers.`
    }),
    snip(`ob_gzhandler();$\{}`, {
        label: "ob_gzhandler()",
        detail: "Output Control",
        type: "method",
        info: `The ob_gzhandler() function is used as a callback function for ob_start() to compress the contents of the buffer when sending it to the browser.`
    }),
    snip(`ob_implicit_flush();$\{}`, {
        label: "ob_implicit_flush()",
        detail: "Output Control",
        type: "method",
        info: `The ob_implicit_flush() function turns implicit flushing on or off.`
    }),
    snip(`ob_list_handlers();$\{}`, {
        label: "ob_list_handlers()",
        detail: "Output Control",
        type: "method",
        info: `The ob_list_handlers() function returns an array of callback function names that are being used by the topmost output buffer.`
    }),
    snip(`ob_start();$\{}`, {
        label: "ob_start()",
        detail: "Output Control",
        type: "method",
        info: `The ob_start() function creates a new output buffer and adds it to the top of the stack.`
    }),
    snip(`output_add_rewrite_var($\{string}, $\{string});$\{}`, {
        label: "output_add_rewrite_var()",
        detail: "Output Control",
        type: "method",
        info: `The output_add_rewrite_var() function adds a variable to the list of variables that will be rewritten.`
    }),
    snip(`output_reset_rewrite_vars();$\{}`, {
        label: "output_reset_rewrite_vars()",
        detail: "Output Control",
        type: "method",
        info: `The output_reset_rewrite_vars() function resets the list of variables that will be rewritten.`
    })
];