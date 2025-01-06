globalThis.filesystemFunctions = [
    //? ------------------ basename()
    snip(`basename($\{path});$\{}`, {
        label: "basename()",
        detail: "Filesystem",
        type: "method",
        info: `The basename() function returns the filename from a path`
    }),
    //? ------------------ chgrp()
    snip(`chgrp($\{filename}, $\{group});$\{}`, {
        label: "chgrp()",
        detail: "Filesystem",
        type: "method",
        info: `The chgrp() function changes the group ownership of a symbolic link.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This is not an HTML link, but a link in the filesystem.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function does not work on Windows platforms`
    }),
    //? ------------------ chmod()
    snip(`chmod($\{filename}, $\{mode});$\{}`, {
        label: "chmod()",
        detail: "Filesystem",
        type: "method",
        info: `The chmod() function changes permissions of the specified file`
    }),
    //? ------------------ chown()
    snip(`chown($\{filename}, $\{user});$\{}`, {
        label: "chown()",
        detail: "Filesystem",
        type: "method",
        info: `The chown() function changes the user ownership of a symbolic link.<br><br>    
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This is not an HTML link, but a link in the filesystem.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function does not work on Windows platforms`
    }),
    //? ------------------ clearstatcache()
    snip(`clearstatcache($\{clear_realpath_cache});$\{}`, {
        label: "clearstatcache()",
        detail: "Filesystem",
        type: "method",
        info: `The clearstatcache() function clears the file status cache.<br><br>
PHP caches data for some functions for better performance. If a file is
to be checked several times in a script, you probably want to avoid caching to get
correct results. To do this, use the clearstatcache() function`
    }),
    //? ------------------ copy()
    snip(`copy($\{source}, $\{destination});$\{}`, {
        label: "copy()",
        detail: "Filesystem",
        type: "method",
        info: `The copy() function copies a file.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> If the <i>to_file</i> file already exists, it will be overwritten`
    }),
    //? ------------------ delete()
    snip(`delete($\{filename});$\{}`, {
        label: "delete()",
        detail: "Filesystem",
        type: "method",
        info: `There is no delete() function in PHP.<br><br>
If you need to delete a file, look at the
unlink() function`
    }),
    //? ------------------ dirname()
    snip(`dirname($\{path});$\{}`, {
        label: "dirname()",
        detail: "Filesystem",
        type: "method",
        info: `The dirname() function returns the path of the parent directory`
    }),
    //? ------------------ disk_free_space()
    snip(`disk_free_space($\{directory});$\{}`, {
        label: "disk_free_space()",
        detail: "Filesystem",
        type: "method",
        info: `The disk_free_space() function is an alias of the
disk_free_space() function`
    }),
    //? ------------------ disk_total_space()
    snip(`disk_total_space($\{directory});$\{}`, {
        label: "disk_total_space()",
        detail: "Filesystem",
        type: "method",
        info: `The disk_total_space() function is an alias of the
disk_total_space() function`
    }),
    //? ------------------ diskfreespace()
    snip(`diskfreespace($\{directory});$\{}`, {
        label: "diskfreespace()",
        detail: "Filesystem",
        type: "method",
        info: `The diskfreespace() function is an alias of the
disk_free_space() function`
    }),
    //? ------------------ fclose()
    snip(`fclose($\{handle});$\{}`, {
        label: "fclose()",
        detail: "Filesystem",
        type: "method",
        info: `The fclose() function closes an open file pointer.<br><br>
Note: The file must have been opened by fopen() or fsockopen()`
    }),
    //? ------------------ feof()
    snip(`feof($\{handle});$\{}`, {
        label: "feof()",
        detail: "Filesystem",
        type: "method",
        info: `The feof() function checks if the "end-of-file" (EOF) has been reached
for an open file.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> This function is useful for looping through data of unknown length`
    }),
    //? ------------------ fflush()
    snip(`fflush($\{handle});$\{}`, {
        label: "fflush()",
        detail: "Filesystem",
        type: "method",
        info: `The fflush() function writes all buffered output to an open file`
    }),
    //? ------------------ fgetc()
    snip(`fgetc($\{handle});$\{}`, {
        label: "fgetc()",
        detail: "Filesystem",
        type: "method",
        info: `The fgetc() function returns a single character from an open file.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is slow and should not be used on large files. If
you need to read one character at a time from a large file, use
fgets() to read
data one line at a time and then process the line one single character at a time with fgetc()`
    }),
    //? ------------------ fgetcsv()
    snip(`fgetcsv($\{handle}, $\{length}, $\{delimiter}, $\{enclosure});$\{}`, {
        label: "fgetcsv()",
        detail: "Filesystem",
        type: "method",
        info: `The fgetcsv() function parses a line from an open file, checking for <span lang="en-us">CSV fields</span>.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Also see the fputcsv() function`
    }),
    //? ------------------ fgets()
    snip(`fgets($\{handle});$\{}`, {
        label: "fgets()",
        detail: "Filesystem",
        type: "method",
        info: `The fgets() function returns a line from an open file`
    }),
    //? ------------------ fgetss()
    snip(`fgetss($\{handle}, $\{length}, $\{allowable_tags});$\{}`, {
        label: "fgetss()",
        detail: "Filesystem",
        type: "method",
        info: `The fgetss() function returns a line from an open file - stripped from HTML and PHP tags.<br><br>
<div style="width: 100%; background-color: var(--palette-red); border-radius: 4px; padding: 16px;"> <b style="color: var(--ui-base)">WARNING</b><br> <font style="color: var(--ui-base)">The fgetss() function is deprecated from PHP 7.3.</font> </div>`
    }),
    //? ------------------ file()
    snip(`file($\{filename});$\{}`, {
        label: "file()",
        detail: "Filesystem",
        type: "method",
        info: `The file() reads a file into an array.<br><br>
Each array element contains a line from the file, with the newline character still attached`
    }),
    //? ------------------ file_exists()
    snip(`file_exists($\{filename});$\{}`, {
        label: "file_exists()",
        detail: "Filesystem",
        type: "method",
        info: `The file_exists() function checks whether the specified filename exists.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to
clear the cache`
    }),
    //? ------------------ file_get_contents()
    snip(`file_get_contents($\{filename});$\{}`, {
        label: "file_get_contents()",
        detail: "Filesystem",
        type: "method",
        info: `The file_get_contents() reads a file into a string.<br><br>
This function is the preferred way to read the contents of a file into
a string. It will use memory mapping techniques, if this is supported by the server, to enhance performance`
    }),
    //? ------------------ file_put_contents()
    snip(`file_put_contents($\{filename}, $\{data});$\{}`, {
        label: "file_put_contents()",
        detail: "Filesystem",
        type: "method",
        info: `The file_put_contents() writes data to a file.<br><br>
This function follows these rules when accessing a file:
<ul>
<span class="li">If FILE_USE_INCLUDE_PATH is set, check the include path for a copy of <i>filename</i></span>
<span class="li">Create the file if it does not exist</span>
<span class="li">Open the file</span>
<span class="li">Lock the file if LOCK_EX is set</span>
<span class="li">If FILE_APPEND is set, move to the end of the file. Otherwise, clear the file content</span>
<span class="li">Write the data into the file</span>
<span class="li">Close the file and release any locks</span>
</ul>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> Use FILE_APPEND to avoid deleting the existing content of the file`
    }),
    //? ------------------ fileatime()
    snip(`fileatime($\{filename});$\{}`, {
        label: "fileatime()",
        detail: "Filesystem",
        type: "method",
        info: `The fileatime() function returns the last access time of the specified file.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to
clear the cache.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The atime of a file changes each time the data of a file are
being read. This can decrease the performance if an application accesses a
large number of files or directories. Some Unix systems have access time updates disabled
to increase performance. In this case this function is useless`
    }),
    //? ------------------ filectime()
    snip(`filectime($\{filename});$\{}`, {
        label: "filectime()",
        detail: "Filesystem",
        type: "method",
        info: `The filectime() function returns the last time a file was changed.<br><br>
This function checks for inode changes as well as regular changes. Inode
changes is when permissions, owner, group or other metadata is changed.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Use the filemtime() function to return the last time the file
content was changed.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to
clear the cache`
    }),
    //? ------------------ filegroup()
    snip(`filegroup($\{filename});$\{}`, {
        label: "filegroup()",
        detail: "Filesystem",
        type: "method",
        info: `The filegroup() function returns the group ID of a file.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Use the posix_getgrgid() function to convert the group ID to a group name.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to clear the cache`
    }),
    //? ------------------ fileinode()
    snip(`fileinode($\{filename});$\{}`, {
        label: "fileinode()",
        detail: "Filesystem",
        type: "method",
        info: `The fileinode() function returns the inode of the specified file.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to
clear the cache`
    }),
    //? ------------------ filemtime()
    snip(`filemtime($\{filename});$\{}`, {
        label: "filemtime()",
        detail: "Filesystem",
        type: "method",
        info: `The filemtime() function returns the last time the file content was modified.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Use the filemtime() function to return the last time the file
content was changed.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to
clear the cache`
    }),
    //? ------------------ fileowner()
    snip(`fileowner($\{filename});$\{}`, {
        label: "fileowner()",
        detail: "Filesystem",
        type: "method",
        info: `The fileowner() function returns the user ID (owner) of the specified file.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Use posix_getpwuid() to convert the user ID to a user name.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to clear the cache`
    }),
    //? ------------------ fileperms()
    snip(`fileperms($\{filename});$\{}`, {
        label: "fileperms()",
        detail: "Filesystem",
        type: "method",
        info: `The fileperms() function returns the permissions for a file.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to clear the cache`
    }),
    //? ------------------ filesize()
    snip(`filesize($\{filename});$\{}`, {
        label: "filesize()",
        detail: "Filesystem",
        type: "method",
        info: `The filesize() function returns the size of a file.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to clear the cache`
    }),
    //? ------------------ filetype()
    snip(`filetype($\{filename});$\{}`, {
        label: "filetype()",
        detail: "Filesystem",
        type: "method",
        info: `The filetype() function returns the file type of a file.<br><br>
Possible return values:<br><br>
<ul>
<span class="li">fifo</span>
<span class="li">char</span>
<span class="li">dir</span>
<span class="li">block</span>
<span class="li">link</span>
<span class="li">file</span>
<span class="li">socket</span>
<span class="li">unknown</span>
</ul>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to clear the cache`
    }),
    //? ------------------ flock()
    snip(`flock($\{handle}, $\{operation});$\{}`, {
        label: "flock()",
        detail: "Filesystem",
        type: "method",
        info: `The flock() function locks and releases a file`
    }),
    //? ------------------ fnmatch()
    snip(`fnmatch($\{pattern}, $\{string});$\{}`, {
        label: "fnmatch()",
        detail: "Filesystem",
        type: "method",
        info: `The fnmatch() function checks if a string or filename matches the given shell
wildcard pattern`
    }),
    //? ------------------ fopen()
    snip(`fopen($\{filename}, $\{mode});$\{}`, {
        label: "fopen()",
        detail: "Filesystem",
        type: "method",
        info: `The fopen() function opens a file or URL.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> When writing to a text file, be sure to use the correct
line-ending character! Unix systems use \n, Windows systems use \r\n, and Macintosh
systems use \r as the line ending character.
Windows offers a translation flag ('t') which will translate \n to \r\n when working with the file.
You can also use 'b' to force binary mode. To use
these flags, specify either 'b' or 't' as the last character of the mode parameter`
    }),
    //? ------------------ fpassthru()
    snip(`fpassthru($\{handle});$\{}`, {
        label: "fpassthru()",
        detail: "Filesystem",
        type: "method",
        info: `The fpassthru() function reads from the current position in a file - until EOF, and
then writes the result to the output buffer.<br><br>

<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> When using fpassthru() on a binary file on Windows, remember to open the file in binary mode.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Call rewind() to set the file pointer to the beginning of
the file if you have already written to the file.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> To just dump the contents of a file to the output buffer, use the
readfile() function instead`
    }),
    //? ------------------ fputcsv()
    snip(`fputcsv($\{handle}, $\{fields}, $\{delimiter}, $\{enclosure});$\{}`, {
        label: "fputcsv()",
        detail: "Filesystem",
        type: "method",
        info: `The fputcsv() function formats a line as CSV and writes it to an open file.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Also see the fgetcsv() function`
    }),
    //? ------------------ fputs()
    snip(`fputs($\{handle}, $\{string});$\{}`, {
        label: "fputs()",
        detail: "Filesystem",
        type: "method",
        info: `The fputs() function is an alias of the fwrite() function`
    }),
    //? ------------------ fread()
    snip(`fread($\{handle}, $\{length});$\{}`, {
        label: "fread()",
        detail: "Filesystem",
        type: "method",
        info: `The fread() reads from an open file.<br><br>
The function will stop at the end of the file or when it reaches the specified length, whichever comes first`
    }),
    //? ------------------ fscanf()
    snip(`fscanf($\{});$\{}`, {
        label: "fscanf()",
        detail: "Filesystem",
        type: "method",
        info: `The fscanf() function parses the input from an open file according to the specified format.<br><br>
Note: Any whitespace in the format string matches any whitespace in the input
stream. This means that a tab (\t) in the format string can match a single space
character in the input stream`
    }),
    //? ------------------ fseek()
    snip(`fseek($\{handle}, $\{offset}, $\{whence});$\{}`, {
        label: "fseek()",
        detail: "Filesystem",
        type: "method",
        info: `The fseek() function seeks in an open file.<br><br>
This function moves the file pointer from its current position to a new
position, forward or backward, specified by the number of bytes.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> You can find the current position by using ftell()`
    }),
    //? ------------------ fstat()
    snip(`fstat($\{handle});$\{}`, {
        label: "fstat()",
        detail: "Filesystem",
        type: "method",
        info: `The fstat() function returns information about an open file.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The results from this function will differ from server to server. The array
may contain the number index, the name index, or both.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to clear the cache`
    }),
    //? ------------------ ftell()
    snip(`ftell($\{handle});$\{}`, {
        label: "ftell()",
        detail: "Filesystem",
        type: "method",
        info: `The ftell() function returns the current position of the read/write pointer in an open file`
    }),
    //? ------------------ ftruncate()
    snip(`ftruncate($\{handle}, $\{size});$\{}`, {
        label: "ftruncate()",
        detail: "Filesystem",
        type: "method",
        info: `The ftruncate() function truncates an open file to the specified length`
    }),
    //? ------------------ fwrite()
    snip(`fwrite($\{handle}, $\{string}, $\{length});$\{}`, {
        label: "fwrite()",
        detail: "Filesystem",
        type: "method",
        info: `The fwrite() writes to an open file.<br><br>
The function will stop at the end of the file (EOF) or when it reaches the specified length, whichever comes first`
    }),
    //? ------------------ glob()
    snip(`glob($\{pattern}, $\{flags});$\{}`, {
        label: "glob()",
        detail: "Filesystem",
        type: "method",
        info: `The glob() function returns an array of filenames or directories matching a specified pattern`
    }),
    //? ------------------ is_dir()
    snip(`is_dir($\{filename});$\{}`, {
        label: "is_dir()",
        detail: "Filesystem",
        type: "method",
        info: `The is_dir() function checks whether the specified filename is a directory.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to clear the cache`
    }),
    //? ------------------ is_executable()
    snip(`is_executable($\{filename});$\{}`, {
        label: "is_executable()",
        detail: "Filesystem",
        type: "method",
        info: `The is_executable() function checks whether the specified filename is executable.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to
clear the cache`
    }),
    //? ------------------ is_file()
    snip(`is_file($\{filename});$\{}`, {
        label: "is_file()",
        detail: "Filesystem",
        type: "method",
        info: `The is_file() function checks whether the specified filename is a regular file.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to clear the cache.
`
    }),
    //? ------------------ is_link()
    snip(`is_link($\{filename});$\{}`, {
        label: "is_link()",
        detail: "Filesystem",
        type: "method",
        info: `The is_link() function checks whether the specified filename is a symbolic link.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to clear the cache`
    }),
    //? ------------------ is_readable()
    snip(`is_readable($\{filename});$\{}`, {
        label: "is_readable()",
        detail: "Filesystem",
        type: "method",
        info: `The is_readable() function checks whether the specified filename is readable.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to
clear the cache`
    }),
    //? ------------------ is_writable()
    snip(`is_writable($\{filename});$\{}`, {
        label: "is_writable()",
        detail: "Filesystem",
        type: "method",
        info: `The is_writable() function is an alias of the
is_writable() function`
    }),
    //? ------------------ is_writeable()
    snip(`is_writeable($\{filename});$\{}`, {
        label: "is_writeable()",
        detail: "Filesystem",
        type: "method",
        info: `The is_writeable() function is an alias of the
is_writable() function`
    }),
    //? ------------------ lchgrp()
    snip(`lchgrp($\{filename}, $\{group});$\{}`, {
        label: "lchgrp()",
        detail: "Filesystem",
        type: "method",
        info: `The lchgrp() function changes the group ownership of a symbolic link.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This is not an HTML link, but a link in the filesystem.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function does not work on Windows platforms`
    }),
    //? ------------------ lchown()
    snip(`lchown($\{filename}, $\{user});$\{}`, {
        label: "lchown()",
        detail: "Filesystem",
        type: "method",
        info: `The lchown() function changes the user ownership of a symbolic link.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This is not an HTML link, but a link in the filesystem.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function does not work on Windows platforms`
    }),
    //? ------------------ link()
    snip(`link($\{target}, $\{link});$\{}`, {
        label: "link()",
        detail: "Filesystem",
        type: "method",
        info: `The link() function creates a hard link`
    }),
    //? ------------------ linkinfo()
    snip(`linkinfo($\{filename});$\{}`, {
        label: "linkinfo()",
        detail: "Filesystem",
        type: "method",
        info: `The linkinfo() function returns information about a hard link, and is used to
verify if a link really exists`
    }),
    //? ------------------ lstat()
    snip(`lstat($\{filename});$\{}`, {
        label: "lstat()",
        detail: "Filesystem",
        type: "method",
        info: `The lstat() function returns information about a file or symbolic link.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The results from this function will differ from server to server. The array
may contain the number index, the name index, or both.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to clear the cache`
    }),
    //? ------------------ mkdir()
    snip(`mkdir($\{directory}, $\{mode}, $\{recursive});$\{}`, {
        label: "mkdir()",
        detail: "Filesystem",
        type: "method",
        info: `The mkdir() function creates a directory specified by a pathname`
    }),
    //? ------------------ move_uploaded_file()
    snip(`move_uploaded_file($\{path}, $\{destination});$\{}`, {
        label: "move_uploaded_file()",
        detail: "Filesystem",
        type: "method",
        info: `The move_uploaded_file() function moves an uploaded file to a new destination.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function only works on files uploaded via PHP's HTTP POST upload mechanism.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> If the destination file already exists, it will be overwritten`
    }),
    //? ------------------ parse_ini_file()
    snip(`parse_ini_file($\{filename}, $\{process_sections}, $\{scanner_mode});$\{}`, {
        label: "parse_ini_file()",
        detail: "Filesystem",
        type: "method",
        info: `The parse_ini_file() function parses a configuration (ini) file and returns
the settings.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> This function can be used to read in your own
configuration files, and has nothing to do with the php.ini file.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The following reserved words must not be used as keys for ini
files: null, yes, no, true, false, on, off, none. Furthermore, the following reserved
characters must not be used in the key: {}|<span>&</span>~!()^"
`
    }),
    //? ------------------ parse_ini_string()
    snip(`parse_ini_string($\{ini_string}, $\{process_sections}, $\{scanner_mode});$\{}`, {
        label: "parse_ini_string()",
        detail: "Filesystem",
        type: "method",
        info: `The parse_ini_string() function parses a configuration (ini) string and returns
the settings.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> This function can be used to read in your own
configuration files, and has nothing to do with the php.ini file.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The following reserved words must not be used as keys for ini files: null, yes, no, true, false, on, off, none. Furthermore, the following reserved characters must not be used in the key: {}|<span>&</span>~!()^"
`
    }),
    //? ------------------ pathinfo()
    snip(`pathinfo($\{path}, $\{options});$\{}`, {
        label: "pathinfo()",
        detail: "Filesystem",
        type: "method",
        info: `The pathinfo() function returns information about a file path`
    }),
    //? ------------------ pclose()
    snip(`pclose($\{handle});$\{}`, {
        label: "pclose()",
        detail: "Filesystem",
        type: "method",
        info: `The pclose() function closes a pipe opened by
popen()<
`
    }),
    //? ------------------ popen()
    snip(`popen($\{command}, $\{mode});$\{}`, {
        label: "popen()",
        detail: "Filesystem",
        type: "method",
        info: `The popen() function opens a pipe to the program specified in the command parameter`
    }),
    //? ------------------ readfile()
    snip(`readfile($\{filename}, $\{use_include_path}, $\{context});$\{}`, {
        label: "readfile()",
        detail: "Filesystem",
        type: "method",
        info: `The readfile() function reads a file and writes it to the output buffer.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> You can use a URL as a filename with this function if the fopen
wrappers have been enabled in the php.ini file
`
    }),
    //? ------------------ readlink()
    snip(`readlink($\{path});$\{}`, {
        label: "readlink()",
        detail: "Filesystem",
        type: "method",
        info: `The readlink() function returns the target of a symbolic link`
    }),
    //? ------------------ realpath()
    snip(`realpath($\{path});$\{}`, {
        label: "realpath()",
        detail: "Filesystem",
        type: "method",
        info: `The realpath() function returns the absolute pathname.<br><br>
This function removes all symbolic links (like '/./', '/../' and extra '/')
and returns the absolute pathname`
    }),
    //? ------------------ realpath_cache_get()
    snip(`realpath_cache_get();$\{}`, {
        label: "realpath_cache_get()",
        detail: "Filesystem",
        type: "method",
        info: `The realpath_cache_get() function returns realpath cache entries`
    }),
    //? ------------------ realpath_cache_size()
    snip(`realpath_cache_size();$\{}`, {
        label: "realpath_cache_size()",
        detail: "Filesystem",
        type: "method",
        info: `The realpath_cache_size() function returns realpath cache size`
    }),
    //? ------------------ rename()
    snip(`rename($\{oldname}, $\{newname}, $\{context});$\{}`, {
        label: "rename()",
        detail: "Filesystem",
        type: "method",
        info: `The rename() function renames a file or directory`
    }),
    //? ------------------ rewind()
    snip(`rewind($\{handle});$\{}`, {
        label: "rewind()",
        detail: "Filesystem",
        type: "method",
        info: `The rewind() function "rewinds" the position of the file pointer to the beginning of the file`
    }),
    //? ------------------ rmdir()
    snip(`rmdir($\{dirname}, $\{context});$\{}`, {
        label: "rmdir()",
        detail: "Filesystem",
        type: "method",
        info: `The rmdir() function removes an empty directory`
    }),
    //? ------------------ set_file_buffer()
    snip(`set_file_buffer($\{handle}, $\{buffersize});$\{}`, {
        label: "set_file_buffer()",
        detail: "Filesystem",
        type: "method",
        info: `The set_file_buffer() function specifies the number of bytes to buffer on the
given file.<br><br>
Output using fwrite() is normally buffered at 8K. So, if two processes
writes to the same file, each will write up to 8K
before pausing, and allow the other to write. If buffer is 0, write operations are unbuffered
(meaning that the first write process will be completed before allowing other
processes to write).<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> This function is an alias of stream_set_write_buffer()
`
    }),
    //? ------------------ stat()
    snip(`stat($\{filename});$\{}`, {
        label: "stat()",
        detail: "Filesystem",
        type: "method",
        info: `The stat() function returns information about a file.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The results from this function will differ from server to server. The array
may contain the number index, the name index, or both.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The result of this function is cached. Use
clearstatcache() to clear the cache`
    }),
    //? ------------------ symlink()
    snip(`symlink($\{target}, $\{link}, $\{context});$\{}`, {
        label: "symlink()",
        detail: "Filesystem",
        type: "method",
        info: `The symlink() function creates a symbolic link from the existing target with the specified name link.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This is not an HTML link, but a link in the filesystem
`
    }),
    //? ------------------ tempnam()
    snip(`tempnam($\{directory}, $\{prefix});$\{}`, {
        label: "tempnam()",
        detail: "Filesystem",
        type: "method",
        info: `The tempnam() function creates a temporary file with a unique name in read-write (w+) mode.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The file is automatically removed when closed, with fclose() or when the script ends.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> See also the tmpfile()
function`
    }),
    //? ------------------ tmpfile()
    snip(`tmpfile();$\{}`, {
        label: "tmpfile()",
        detail: "Filesystem",
        type: "method",
        info: `The tmpfile() function creates a temporary file with a unique name in read-write (w+) mode.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The file is automatically removed when closed, with fclose() or when the script ends.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> See also the tempnam()
function`
    }),
    //? ------------------ touch()
    snip(`touch($\{filename}, $\{time}, $\{atime});$\{}`, {
        label: "touch()",
        detail: "Filesystem",
        type: "method",
        info: `The touch() function sets the access and modification time of the specified file.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> If the specified file does not exist, it will be created
`
    }),
    //? ------------------ umask()
    snip(`umask($\{mask});$\{}`, {
        label: "umask()",
        detail: "Filesystem",
        type: "method",
        info: `The umask() function changes the file permissions for files.<br><br>
This function sets PHP's umask to <i>mask</i> <span>&</span> 0777 and returns the old
umask`
    }),
    //? ------------------ unlink()
    snip(`unlink($\{filename}, $\{context});$\{}`, {
        label: "unlink()",
        detail: "Filesystem",
        type: "method",
        info: `The unlink() function deletes a file`
    }),
];