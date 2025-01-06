window.phpIntellisense.zipFunctions = [
    snip(`zip_close($\{zip});$\{}`, {
        label: "zip_close()",
        detail: "Zip",
        type: "method",
        info: `The zip_close() function closes a ZIP file archive opened by the <code>zip_open()</code> function.`
    }),
    snip(`zip_entry_close($\{zip_entry});$\{}`, {
        label: "zip_entry_close()",
        detail: "Zip",
        type: "method",
        info: `The zip_entry_close() function closes a ZIP directory entry opened by zip_entry_open().`
    }),
    snip(`zip_entry_compressedsize($\{zip_entry});$\{}`, {
        label: "zip_entry_compressedsize()",
        detail: "Zip",
        type: "method",
        info: `The zip_entry_compressedsize() function returns the compressed file size of a ZIP directory entry.`
    }),
    snip(`zip_entry_compressionmethod($\{zip_entry});$\{}`, {
        label: "zip_entry_compressionmethod()",
        detail: "Zip",
        type: "method",
        info: `The zip_entry_compressionmethod() function returns the compression method of a ZIP directory entry.`
    }),
    snip(`zip_entry_filesize($\{zip_entry});$\{}`, {
        label: "zip_entry_filesize()",
        detail: "Zip",
        type: "method",
        info: `The zip_entry_filesize() function returns the actual file size of a ZIP directory entry.`
    }),
    snip(`zip_entry_name($\{zip_entry});$\{}`, {
        label: "zip_entry_name()",
        detail: "Zip",
        type: "method",
        info: `The zip_entry_name() function returns the name of a ZIP directory entry.`
    }),
    snip(`zip_entry_open($\{zip_archive}, $\{zip_entry});$\{}`, {
        label: "zip_entry_open()",
        detail: "Zip",
        type: "method",
        info: `The zip_entry_open() function opens a directory entry in a ZIP file for reading.`
    }),
    snip(`zip_entry_read($\{zip_entry});$\{}`, {
        label: "zip_entry_read()",
        detail: "Zip",
        type: "method",
        info: `The zip_entry_read() function reads from an open directory entry.`
    }),
    snip(`zip_open($\{zip_archive});$\{}`, {
        label: "zip_open()",
        detail: "Zip",
        type: "method",
        info: `The zip_open() function opens a ZIP file archive.`
    }),
    snip(`zip_read($\{zip_archive});$\{}`, {
        label: "zip_read()",
        detail: "Zip",
        type: "method",
        info: `The zip_read() function reads the next file in a open ZIP file archive.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> The resource returned by zip_read() can be used by the zip_entry_*() functions.`
    })
];