const ftpFunctions = [
    snip(`ftp_alloc($\{});$\{}`, {
        label: "ftp_alloc()",
        detail: "FTP",
        type: "method",
        info: `The ftp_alloc() function allocates space for a file to be uploaded to the FTP server.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> Many FTP servers do not support this command!`
    }),
    //? ------------------ ftp_cdup()
    snip(`ftp_cdup($\{});$\{}`, {
        label: "ftp_cdup()",
        detail: "FTP",
        type: "method",
        info: `The ftp_cdup() function changes to the parent directory on the FTP server.`
    }),
    //? ------------------ ftp_chdir()
    snip(`ftp_chdir($\{});$\{}`, {
        label: "ftp_chdir()",
        detail: "FTP",
        type: "method",
        info: `The ftp_chdir() function changes the current directory on the FTP server.`
    }),
    //? ------------------ ftp_chmod()
    snip(`ftp_chmod($\{});$\{}`, {
        label: "ftp_chmod()",
        detail: "FTP",
        type: "method",
        info: `The ftp_chmod() function sets permissions on the specified file via FTP.`
    }),
    //? ------------------ ftp_close()
    snip(`ftp_close($\{});$\{}`, {
        label: "ftp_close()",
        detail: "FTP",
        type: "method",
        info: `The ftp_close() function closes an FTP connection.`
    }),
    //? ------------------ ftp_connect()
    snip(`ftp_connect($\{});$\{}`, {
        label: "ftp_connect()",
        detail: "FTP",
        type: "method",
        info: `The ftp_connect() function opens an FTP connection to the specified host.<br><br>
When the connection is open, you can run FTP functions against the server. `
    }),
    //? ------------------ ftp_delete()
    snip(`ftp_delete($\{});$\{}`, {
        label: "ftp_delete()",
        detail: "FTP",
        type: "method",
        info: `The ftp_delete() function deletes a file on the FTP server.`
    }),
    //? ------------------ ftp_exec()
    snip(`ftp_exec($\{});$\{}`, {
        label: "ftp_exec()",
        detail: "FTP",
        type: "method",
        info: `The ftp_exec() function requests for execution of a command on the FTP server.`
    }),
    //? ------------------ ftp_fget()
    snip(`ftp_fget($\{});$\{}`, {
        label: "ftp_fget()",
        detail: "FTP",
        type: "method",
        info: `The ftp_fget() function gets (downloads) a file from the FTP server, and saves it into an open local file.`
    }),
    //? ------------------ ftp_fput()
    snip(`ftp_fput($\{});$\{}`, {
        label: "ftp_fput()",
        detail: "FTP",
        type: "method",
        info: `The ftp_fput() function uploads from an open file and saves it to a file on the FTP server.`
    }),
    //? ------------------ ftp_get()
    snip(`ftp_get($\{});$\{}`, {
        label: "ftp_get()",
        detail: "FTP",
        type: "method",
        info: `The ftp_get() function gets (downloads) a file from the FTP server, and saves it into a local file.`
    }),
    //? ------------------ ftp_get_option()
    snip(`ftp_get_option($\{});$\{}`, {
        label: "ftp_get_option()",
        detail: "FTP",
        type: "method",
        info: `The ftp_get_option() function returns runtime options of the current FTP connection.`
    }),
    //? ------------------ ftp_login()
    snip(`ftp_login($\{});$\{}`, {
        label: "ftp_login()",
        detail: "FTP",
        type: "method",
        info: `The ftp_login() function logs in to the specified FTP connection.`
    }),
    //? ------------------ ftp_mdtm()
    snip(`ftp_mdtm($\{});$\{}`, {
        label: "ftp_mdtm()",
        detail: "FTP",
        type: "method",
        info: `The ftp_mdtm() function returns when the specified file was last modified.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> Not all servers support this function, and this function does not work with directories.`
    }),
    //? ------------------ ftp_mkdir()
    snip(`ftp_mkdir($\{});$\{}`, {
        label: "ftp_mkdir()",
        detail: "FTP",
        type: "method",
        info: `The ftp_mkdir() function creates a new directory on the FTP server.`
    }),
    //? ------------------ ftp_mlsd()
    snip(`ftp_mlsd($\{});$\{}`, {
        label: "ftp_mlsd()",
        detail: "FTP",
        type: "method",
        info: `The ftp_mlsd() function returns the list of files in the specified directory.`
    }),
    //? ------------------ ftp_nb_continue()
    snip(`ftp_nb_continue($\{});$\{}`, {
        label: "ftp_nb_continue()",
        detail: "FTP",
        type: "method",
        info: `The ftp_nb_continue() function continues to receive/send a file to the FTP server.`
    }),
    //? ------------------ ftp_nb_fget()
    snip(`ftp_nb_fget($\{});$\{}`, {
        label: "ftp_nb_fget()",
        detail: "FTP",
        type: "method",
        info: `The ftp_nb_fget() function gets (downloads) a file from the FTP server, and saves it into an open local file (non-blocking).<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> This function (as opposite to <code>ftp_fget()</code>) retrieves the file asynchronously, so you can perform other operations while the file is being downloaded.  `
    }),
    //? ------------------ ftp_nb_fput()
    snip(`ftp_nb_fput($\{});$\{}`, {
        label: "ftp_nb_fput()",
        detail: "FTP",
        type: "method",
        info: `The ftp_nb_fput() function uploads an open local file to the FTP server (non-blocking).<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> This function (as opposite to <code>ftp_fput()</code>) retrieves the file asynchronously, so you can perform other operations while the file is being downloaded.`
    }),
    //? ------------------ ftp_nb_get()
    snip(`ftp_nb_get($\{});$\{}`, {
        label: "ftp_nb_get()",
        detail: "FTP",
        type: "method",
        info: `The ftp_nb_get() function gets (downloads) a file from the FTP server, and saves it into a local file (non-blocking).<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> This function (as opposite to <code>ftp_get()</code>) retrieves the file asynchronously, so you can perform other operations while the file is being downloaded. `
    }),
    //? ------------------ ftp_nb_put()
    snip(`ftp_nb_put($\{});$\{}`, {
        label: "ftp_nb_put()",
        detail: "FTP",
        type: "method",
        info: `The ftp_nb_put() function uploads a file to the FTP server (non-blocking).<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> This function (as opposite to <code>ftp_put()</code>) retrieves the file asynchronously, so you can perform other operations while the file is being downloaded.`
    }),
    //? ------------------ ftp_nlist()
    snip(`ftp_nlist($\{});$\{}`, {
        label: "ftp_nlist()",
        detail: "FTP",
        type: "method",
        info: `The ftp_nlist() function returns a list of files in the specified directory on the FTP server.`
    }),
    //? ------------------ ftp_pasv()
    snip(`ftp_pasv($\{});$\{}`, {
        label: "ftp_pasv()",
        detail: "FTP",
        type: "method",
        info: `The ftp_pasv() function turns passive mode on or off.<br><br>
In passive mode, data connections are initiated by the client, not the server. This is useful if the client is behind a firewall.`
    }),
    //? ------------------ ftp_put()
    snip(`ftp_put($\{});$\{}`, {
        label: "ftp_put()",
        detail: "FTP",
        type: "method",
        info: `The ftp_put() function uploads a file to an FTP server.`
    }),
    //? ------------------ ftp_pwd()
    snip(`ftp_pwd($\{});$\{}`, {
        label: "ftp_pwd()",
        detail: "FTP",
        type: "method",
        info: `The ftp_pwd() function returns the current directory name.`
    }),
    //? ------------------ ftp_quit()
    snip(`ftp_quit($\{});$\{}`, {
        label: "ftp_quit()",
        detail: "FTP",
        type: "method",
        info: `The ftp_quit() function is an alias of <code>ftp_close()</code>.`
    }),
    //? ------------------ ftp_raw()
    snip(`ftp_raw($\{});$\{}`, {
        label: "ftp_raw()",
        detail: "FTP",
        type: "method",
        info: `The ftp_raw() function sends a raw command to the FTP server.`
    }),
    //? ------------------ ftp_rawlist()
    snip(`ftp_rawlist($\{});$\{}`, {
        label: "ftp_rawlist()",
        detail: "FTP",
        type: "method",
        info: `The ftp_rawlist() function returns a list of files with file information (from a specified directory on the FTP server).`
    }),
    //? ------------------ ftp_rename()
    snip(`ftp_rename($\{});$\{}`, {
        label: "ftp_rename()",
        detail: "FTP",
        type: "method",
        info: `The ftp_rename() function renames a file or directory on the FTP server.`
    }),
    //? ------------------ ftp_rmdir()
    snip(`ftp_rmdir($\{});$\{}`, {
        label: "ftp_rmdir()",
        detail: "FTP",
        type: "method",
        info: `The ftp_rmdir() function deletes a directory on the FTP server.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> A directory must be empty before it can be deleted!<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Use the ftp_mkdir() function to create a new directory.`
    }),
    //? ------------------ ftp_set_option()
    snip(`ftp_set_option($\{});$\{}`, {
        label: "ftp_set_option()",
        detail: "FTP",
        type: "method",
        info: `The ftp_set_option() function sets runtime options of the current FTP connection.`
    }),
    //? ------------------ ftp_site()
    snip(`ftp_site($\{});$\{}`, {
        label: "ftp_site()",
        detail: "FTP",
        type: "method",
        info: `The ftp_site() function sends a SITE command to the FTP server.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> SITE commands vary from server to server. They are useful for handling OS specific features such as file permissions and group membership.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> To see what SITE commands are available, send the REMOTEHELP command using the <code>ftp_raw()</code> function.`
    }),
    //? ------------------ ftp_size()
    snip(`ftp_size($\{});$\{}`, {
        label: "ftp_size()",
        detail: "FTP",
        type: "method",
        info: `The ftp_size() function returns the size of a specified file on the FTP server.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> Not all FTP servers support this function!`
    }),
    //? ------------------ ftp_ssl_connect()
    snip(`ftp_ssl_connect($\{});$\{}`, {
        label: "ftp_ssl_connect()",
        detail: "FTP",
        type: "method",
        info: `The ftp_ssl_connect() function opens a secure SSL-FTP connection.<br><br>
When the connection is open, you can run FTP functions against the server.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is only available if both the ftp module and the OpenSSL support is built statically into PHP. `
    }),
    //? ------------------ ftp_systype()
    snip(`ftp_systype($\{});$\{}`, {
        label: "ftp_systype()",
        detail: "FTP",
        type: "method",
        info: `The ftp_systype() function returns the system type identifier of the FTP server.`
    }),
];