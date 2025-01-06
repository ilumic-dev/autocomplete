globalThis.miscFunctions = [
    //? ------------------ connection_aborted()
    snip(`connection_aborted();$\{}`, {
        label: "connection_aborted()",
        type: "method",
        info: `The connection_aborted() function checks whether the client has disconnected.`
    }),
    //? ------------------ connection_status()
    snip(`connection_status();$\{}`, {
        label: "connection_status()",
        type: "method",
        info: `The connection_status() function returns the current connection status.<br><br>
<b>Possible values that can be returned are:</b>
<ul>
    <span class="li">0 - CONNECTION_NORMAL - connection is running normally</span>
    <span class="li">1 - CONNECTION_ABORTED - connection is aborted by user or network error</span>
    <span class="li">2 - CONNECTION_TIMEOUT -  connection timed out</span>
    <span class="li">3 - CONNECTION_ABORTED & CONNECTION_TIMEOUT</span>
</ul>`
    }),
    //? ------------------ connection_timeout()
    snip(`connection_timeout();$\{}`, {
        label: "connection_timeout()",
        type: "method",
        info: `The connection_timeout() function checks whether the script has timed out.<br><br>
<div class="error-warning">
    <b>WARNING</b><br>
    <font>The each() function was deprecated and removed in PHP version 4.0.5.</font>
</div>`
    }),
    //? ------------------ constant()
    snip(`constant($\{name});$\{}`, {
        label: "constant()",
        type: "method",
        info: `The constant() function returns the value of a constant.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function also works with class constants. `
    }),
    //? ------------------ define()
    snip(`define($\{name}, $\{value});$\{}`, {
        label: "define()",
        type: "method",
        info: `The define() function defines a constant.<br><br>

<b>Constants are much like variables, except for the following differences:</b>
<ul>
    <span class="li">A constant's value cannot be changed after it is set</span>
    <span class="li">Constant names do not need a leading dollar sign ($)</span>
    <span class="li">Constants can be accessed regardless of scope</span>
    <span class="li">Constant values can only be strings and numbers</span>
</ul>`
    }),
    //? ------------------ defined()
    snip(`defined($\{name});$\{}`, {
        label: "defined()",
        type: "method",
        info: `The defined() function checks whether a constant exists.`
    }),
    //? ------------------ die()
    snip(`die($\{message});$\{}`, {
        label: "die()",
        type: "method",
        info: `The die() function prints a message and terminates the current script.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The die() function is an alias of the exit() function.`
    }),
    //? ------------------ eval()
    snip(`eval($\{code});$\{}`, {
        label: "eval()",
        type: "method",
        info: `The eval() function evaluates a string as PHP code.<br><br>
The string must be valid PHP code and must end with semicolon.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> A return statement will terminate the evaluation of the string immediately.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b> This function can be useful for storing PHP code in a database.`
    }),
    //? ------------------ exit()
    snip(`exit($\{message});$\{}`, {
        label: "exit()",
        type: "method",
        info: `The exit() function prints a message and terminates the current script.`
    }),
    //? ------------------ get_browser()
    snip(`get_browser($\{});$\{}`, {
        label: "get_browser()",
        type: "method",
        info: `The get_browser() function looks up the user's browscap.ini file and returns the capabilities of the user's browser.`
    }),
    //? ------------------ __halt_compiler()
    snip(`__halt_compiler();$\{}`, {
        label: "__halt_compiler()",
        type: "method",
        info: `The __halt_compiler() function halts the compiler execution.`
    }),
    //? ------------------ highlight_file()
    snip(`highlight_file($\{filename});$\{}`, {
        label: "highlight_file()",
        type: "method",
        info: `The highlight_file() function outputs a file with the PHP syntax highlighted. The syntax is highlighted by using HTML tags.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> The colors used for syntax highlighting can be set in the php.ini file or with the ini_set() function.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> When using this function, the entire file will be displayed - including passwords and any other sensitive information!`
    }),
    //? ------------------ highlight_string()
    snip(`highlight_string($\{code});$\{}`, {
        label: "highlight_string()",
        type: "method",
        info: `The highlight_string() function outputs a string with the PHP syntax highlighted. The string is highlighted by using HTML tags.<br><br>
The colors used for syntax highlighting can be set in the php.ini file or with the ini_set() function.`
    }),
    //? ------------------ hrtime()
    snip(`hrtime($\{});$\{}`, {
        label: "hrtime()",
        type: "method",
        info: `The hrtime() function returns the system's high resolution time.`
    }),
    //? ------------------ ignore_user_abort()
    snip(`ignore_user_abort();$\{}`, {
        label: "ignore_user_abort()",
        type: "method",
        info: `The ignore_user_abort() function sets whether a user should abort a script execution when he/she disconnects.`
    }),
    //? ------------------ pack()
    snip(`pack($\{});$\{}`, {
        label: "pack()",
        type: "method",
        info: `The pack() function packs data into a binary string.`
    }),
    //? ------------------ php_strip_whitespace()
    snip(`php_strip_whitespace($\{filename});$\{}`, {
        label: "php_strip_whitespace()",
        type: "method",
        info: `The php_strip_whitespace() function returns the source code of the specified file with PHP comments and whitespace removed.`
    }),
    //? ------------------ show_source()
    snip(`show_source($\{filename});$\{}`, {
        label: "show_source()",
        type: "method",
        info: `The show_source() function outputs a file with the PHP syntax highlighted. The syntax is highlighted by using HTML tags.<br><br>
The colors used for highlighting can be set in the php.ini file or with the ini_set() function.<br><br>
show_source() is an alias of highlight_file().<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> When using this function, the entire file will be displayed - including passwords and any other sensitive information!`
    }),
    //? ------------------ sleep()
    snip(`sleep($\{seconds});$\{}`, {
        label: "sleep()",
        type: "method",
        info: `The sleep() function delays execution of the current script for a specified number of seconds.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function throws an error if the specified number of seconds is negative.`
    }),
    //? ------------------ sys_getloadavg()
    snip(`sys_getloadavg();$\{}`, {
        label: "sys_getloadavg()",
        type: "method",
        info: `The sys_getloadavg() function returns the system load average.<br><br>
This function returns an array with three numbers that represents the average system load over the last 1, 5 and 15 minutes.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function does not work on Windows platforms.`
    }),
    //? ------------------ time_nanosleep()
    snip(`time_nanosleep($\{seconds}, $\{nanoseconds});$\{}`, {
        label: "time_nanosleep()",
        type: "method",
        info: `The time_nanosleep() function delays execution of the current script for a specified number of seconds and nanoseconds.`
    }),
    //? ------------------ time_sleep_until()
    snip(`time_sleep_until($\{timestamp});$\{}`, {
        label: "time_sleep_until()",
        type: "method",
        info: `The time_sleep_until() function is used to make a script sleep until the specified time.`
    }),
    //? ------------------ uniqid()
    snip(`uniqid($\{});$\{}`, {
        label: "uniqid()",
        type: "method",
        info: `The uniqid() function generates a unique ID based on the microtime (the current time in microseconds).`
    }),
    //? ------------------ unpack()
    snip(`unpack($\{format}, ...);$\{}`, {
        label: "unpack()",
        type: "method",
        info: `The unpack() function unpacks data from a binary string.`
    }),
    //? ------------------ usleep()
    snip(`usleep($\{microseconds});$\{}`, {
        label: "usleep()",
        type: "method",
        info: `The usleep() function delays execution of the current script for a specified number of microseconds (a microsecond equals one millionth of a second).`
    })
]