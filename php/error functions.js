const errorFunctions = [
    //? ------------------ debug_backtrace()
    snip(`debug_backtrace($\{start});$\{}`, {
        label: "debug_backtrace()",
        detail: "Error",
        type: "method",
        info: `The debug_backtrace() function generates a PHP backtrace.<br><br>
This function displays data from the code that led up to the debug_backtrace() function.<br><br>
Returns an array of associative arrays.
`
    }),
    //? ------------------ debug_print_backtrace()
    snip(`debug_print_backtrace($\{start});$\{}`, {
        label: "debug_print_backtrace()",
        detail: "Error",
        type: "method",
        info: `The debug_print_backtrace() function prints a PHP backtrace.<br><br>
This function displays data from the code that led up to the debug_print_backtrace() function.
`
    }),
    //? ------------------ error_clear_last()
    snip(`error_clear_last();$\{}`, {
        label: "error_clear_last()",
        detail: "Error",
        type: "method",
        info: `The error_clear_last() function clears the last error`
    }),
    //? ------------------ error_get_last()
    snip(`error_get_last();$\{}`, {
        label: "error_get_last()",
        detail: "Error",
        type: "method",
        info: `The error_get_last() function returns the last error that occurred (as an
associative array).<br><br>
The associative array contains four keys:<br><br>
<ul>
<span class="li">[type] - Describes the error type</span>
<span class="li">[message] - Describes the error message</span>
<span class="li">[file] - Describes the file where the error occurred</span>
<span class="li">[line] - Describes the line where the error occurred</span>
</ul>
`
    }),
    //? ------------------ error_log()
    snip(`error_log($\{message}, $\{message_type}, $\{destination}, $\{extra_headers});$\{}`, {
        label: "error_log()",
        detail: "Error",
        type: "method",
        info: `The error_log() function sends an error message to a log, to a file, or to a mail account.
`
    }),
    //? ------------------ error_reporting()
    snip(`error_reporting($\{level});$\{}`, {
        label: "error_reporting()",
        detail: "Error",
        type: "method",
        info: `The error_reporting() function specifies which errors are reported.<br><br>
PHP has many levels of errors, and using this function sets that level for the current script.
`
    }),
    //? ------------------ restore_error_handler()
    snip(`restore_error_handler();$\{}`, {
        label: "restore_error_handler()",
        detail: "Error",
        type: "method",
        info: `The restore_error_handler() function restores the previous error handler.<br><br>
This function is used to restore the previous error handler after changing
it with the set_error_handler() function. <br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> The previous error handler could be the built-in error handler or
a user-defined error handler function.
`
    }),
    //? ------------------ restore_exception_handler()
    snip(`restore_exception_handler();$\{}`, {
        label: "restore_exception_handler()",
        detail: "Error",
        type: "method",
        info: `The restore_exception_handler() function restores the previous exception handler.<br><br>
This function is used to restore the previous exception handler after changing
it with the set_exception_handler() function. <br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> The previous exception handler could be the built-in exception handler or
a user-defined exception handler function.
`
    }),
    //? ------------------ set_error_handler()
    snip(`set_error_handler($\{error_handler});$\{}`, {
        label: "set_error_handler()",
        detail: "Error",
        type: "method",
        info: `The set_error_handler() function sets a user-defined error handler function.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The standard PHP error handler is completely bypassed if this function is used,
and the user-defined error handler must terminate the script, die(), if necessary.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> If errors occur before the script is executed the custom error handler cannot be used since it is not registered at that time.
`
    }),
    //? ------------------ set_exception_handler()
    snip(`set_exception_handler($\{exception_handler});$\{}`, {
        label: "set_exception_handler()",
        detail: "Error",
        type: "method",
        info: `The set_exception_handler() function sets a user-defined exception handler function.<br><br>
The script will stop executing after the exception handler is called.
`
    }),
    //? ------------------ trigger_error()
    snip(`trigger_error($\{message}, $\{message_type});$\{}`, {
        label: "trigger_error()",
        detail: "Error",
        type: "method",
        info: `The trigger_error() function creates a user-level error message.<br><br>
The trigger_error() function can be used with
the built-in error handler, or with a user-defined function set by the
set_error_handler() function.
`
    }),
    //? ------------------ user_error()
    snip(`user_error($\{message}, $\{message_type});$\{}`, {
        label: "user_error()",
        detail: "Error",
        type: "method",
        info: `The trigger_error() function creates a user-level error message.<br><br>
The trigger_error() function can be used with
the built-in error handler, or with a user-defined function set by the
set_error_handler() function.
`
    }),
];

export default errorFunctions;