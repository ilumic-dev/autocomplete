globalThis.directoryFunctions = [
    //? ------------------ chdir()
    snip(`chdir($\{directory});$\{}`, {
        label: "chdir()",
        type: "method",
        detail: "Directory",
        info: `The chdir() function changes the current directory.`
    }),
    //? ------------------ chroot()
    snip(`chroot($\{directory});$\{}`, {
        label: "chroot()",
        type: "method",
        detail: "Directory",
        info: `The chroot() function changes the root directory of the current process to directory, and changes the current working directory to "/".<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function requires root privileges, and is only available to GNU and BSD systems, and only when using the CLI, CGI or Embed SAPI.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is not implemented on Windows platforms.`
    }),
    //? ------------------ closedir()
    snip(`closedir($\{directory});$\{}`, {
        label: "closedir()",
        type: "method",
        detail: "Directory",
        info: `The closedir() function closes a directory handle.`
    }),
    //? ------------------ dir()
    snip(`dir($\{directory});$\{}`, {
        label: "dir()",
        type: "method",
        detail: "Directory",
        info: `The dir() function returns an instance of the Directory class. This function is used to read a directory, which includes the following:
<ul>
    <span class="li">The given directory is opened</span>
    <span class="li">The two properties handle and path of dir() are available</span>
    <span class="li">Both handle and path properties have three methods: read(), rewind(), and close()</span>
</ul>`
    }),
    //? ------------------ getcwd()
    snip(`getcwd();$\{}`, {
        label: "getcwd()",
        type: "method",
        detail: "Directory",
        info: `The getcwd() function returns the current working directory.`
    }),
    //? ------------------ opendir()
    snip(`opendir($\{path});$\{}`, {
        label: "opendir()",
        type: "method",
        detail: "Directory",
        info: `The opendir() function opens a directory handle.`
    }),
    //? ------------------ readdir()
    snip(`readdir($\{directory});$\{}`, {
        label: "readdir()",
        type: "method",
        detail: "Directory",
        info: `The readdir() function returns the name of the next entry in a directory.`
    }),
    //? ------------------ rewinddir()
    snip(`rewinddir($\{directory});$\{}`, {
        label: "rewinddir()",
        type: "method",
        detail: "Directory",
        info: `The rewinddir() function resets the directory handle created by opendir().`
    }),
    //? ------------------ scandir()
    snip(`scandir($\{directory});$\{}`, {
        label: "scandir()",
        type: "method",
        detail: "Directory",
        info: `The scandir() function returns an array of files and directories of the specified directory.`
    })
]