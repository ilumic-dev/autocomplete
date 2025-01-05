import {snippetCompletion as snip} from "@codemirror/autocomplete";

const curlFunctions = [
    snip(`curl_close($\{curl});$\{}`, {
        label: "curl_close()",
        detail: "Curl",
        type: "method",
        info: `Closes a cURL session and frees resources.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Always call <code>curl_close()</code> to avoid memory leaks.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> <code>$ch</code> is the cURL handle returned by <code>curl_init()</code>.`
    }),
    snip(`curl_copy_handle($\{curl}): resource;$\{}`, {
        label: "curl_copy_handle()",
        detail: "Curl",
        type: "method",
        info: `Copies a cURL handle along with all its settings.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> Useful for reusing similar configurations without starting from scratch.`
    }),
    snip(`curl_errno($\{curl}): int;$\{}`, {
        label: "curl_errno()",
        detail: "Curl",
        type: "method",
        info: `Returns the error number for the last cURL operation.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Check this before using <code>curl_error()</code> to debug issues.`
    }),
    snip(`curl_error($\{curl}): string;$\{}`, {
        label: "curl_error()",
        detail: "Curl",
        type: "method",
        info: `Returns a human-readable error message for the last cURL operation.`
    }),
    snip(`curl_exec($\{curl}): mixed;$\{}`, {
        label: "curl_exec()",
        detail: "Curl",
        type: "method",
        info: `Executes the cURL session.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> Returns <code>true</code> for success or the output of the request, depending on options set.`
    }),
    snip(`curl_getinfo($\{curl}, int $option = 0): mixed;$\{}`, {
        label: "curl_getinfo()",
        detail: "Curl",
        type: "method",
        info: `Gets information about the last transfer, such as HTTP status codes or total time.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Use <code>CURLINFO_HTTP_CODE</code> to fetch the HTTP status code.`
    }),
    snip(`curl_init(?string $url = null): resource;$\{}`, {
        label: "curl_init()",
        detail: "Curl",
        type: "method",
        info: `Initializes a cURL session. Optionally, you can provide a URL.`
    }),
    snip(`curl_multi_add_handle($\{mh}, resource $ch): int;$\{}`, {
        label: "curl_multi_add_handle()",
        detail: "Curl",
        type: "method",
        info: `Adds a cURL handle to a multi-handle resource.`
    }),
    snip(`curl_multi_close($\{mh}): void;$\{}`, {
        label: "curl_multi_close()",
        detail: "Curl",
        type: "method",
        info: `Closes a multi-handle session and frees associated resources.`
    }),
    snip(`curl_multi_exec($\{mh}, int &$still_running): int;$\{}`, {
        label: "curl_multi_exec()",
        detail: "Curl",
        type: "method",
        info: `Processes cURL handles added to a multi-handle session.`
    }),
    snip(`curl_multi_getcontent($\{ch}): string;$\{}`, {
        label: "curl_multi_getcontent()",
        detail: "Curl",
        type: "method",
        info: `Returns the content of a cURL handle if <code>CURLOPT_RETURNTRANSFER</code> is set.`
    }),
    snip(`curl_multi_info_read($\{mh}, int &$msgs_in_queue = null): ?array;$\{}`, {
        label: "curl_multi_info_read()",
        detail: "Curl",
        type: "method",
        info: `Retrieves information about completed transfers in a multi-handle session.`
    }),
    snip(`curl_multi_init(): resource;$\{}`, {
        label: "curl_multi_init()",
        detail: "Curl",
        type: "method",
        info: `Initializes a new multi-handle session.`
    }),
    snip(`curl_multi_remove_handle($\{mh}, resource $ch): int;$\{}`, {
        label: "curl_multi_remove_handle()",
        detail: "Curl",
        type: "method",
        info: `Removes a cURL handle from a multi-handle session.`
    }),
    snip(`curl_multi_select($\{mh}, float $timeout = 1.0): int;$\{}`, {
        label: "curl_multi_select()",
        detail: "Curl",
        type: "method",
        info: `Blocks until one or more cURL handles are ready for I/O.`
    }),
    snip(`curl_pause($\{ch}, int $bitmask): int;$\{}`, {
        label: "curl_pause()",
        detail: "Curl",
        type: "method",
        info: `Pauses or unpauses a cURL transfer.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> Use constants like <code>CURLPAUSE_RECV</code> or <code>CURLPAUSE_SEND</code>.`
    }),
    snip(`curl_reset($\{ch}): void;$\{}`, {
        label: "curl_reset()",
        detail: "Curl",
        type: "method",
        info: `Resets all options of a cURL handle to their default values.`
    }),
    snip(`curl_setopt($\{ch}, int $option, mixed $value): bool;$\{}`, {
        label: "curl_setopt()",
        detail: "Curl",
        type: "method",
        info: `Sets an option for a cURL session.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Check the [list of options](https://www.php.net/manual/en/function.curl-setopt.php) for detailed usage.`
    }),
    snip(`curl_setopt_array($\{ch}, array $options): bool;$\{}`, {
        label: "curl_setopt_array()",
        detail: "Curl",
        type: "method",
        info: `Sets multiple options for a cURL session using an array.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> Easier for managing complex configurations.`
    }),
    snip(`curl_share_close($\{sh}): void;$\{}`, {
        label: "curl_share_close()",
        detail: "Curl",
        type: "method",
        info: `Closes a shared cURL handle.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Use for shared options between multiple sessions.`
    }),
    snip(`curl_share_init(): resource;$\{}`, {
        label: "curl_share_init()",
        detail: "Curl",
        type: "method",
        info: `Initializes a new shared cURL handle.`
    }),
    snip(`curl_share_setopt($\{sh}, int $option, mixed $value): bool;$\{}`, {
        label: "curl_share_setopt()",
        detail: "Curl",
        type: "method",
        info: `Sets an option on a shared cURL handle.`
    }),
    snip(`curl_strerror($\{errornum}): ?string;$\{}`, {
        label: "curl_strerror()",
        detail: "Curl",
        type: "method",
        info: `Returns a string describing a given cURL error code.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Helps in debugging by providing human-readable error descriptions.`
    }),
    snip(`curl_unescape($\{ch}, string $str): string;$\{}`, {
        label: "curl_unescape()",
        detail: "Curl",
        type: "method",
        info: `Decodes a percent-encoded string.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Opposite of <code>curl_escape()</code>.`
    }),
    snip(`curl_version($\{age = CURLVERSION_NOW}): array;$\{}`, {
        label: "curl_version()",
        detail: "Curl",
        type: "method",
        info: `Returns an array with cURL version information, including protocols supported.`
    }),
];

export default curlFunctions;
