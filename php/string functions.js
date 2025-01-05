

const stringFunctions = [
    //? ------------------ addcslashes()
    snip(`addcslashes($\{string}, $\{characters});$\{}`, {
        label: "addcslashes()",
        detail: "String",
        type: "method",
        info: `The addcslashes() function returns a string with backslashes in front of the specified characters.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The addcslashes() function is case-sensitive.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> Be careful using addcslashes() on 0 (NULL), r (carriage return), n (newline), f (form feed), t (tab) and v (vertical tab). In PHP, \\0, \\r, \\n, \\t, \\f and \\v are predefined escape sequences.`
    }),
    //? ------------------ addslashes()
    snip(`addslashes($\{string});$\{}`, {
        label: "addslashes()",
        detail: "String",
        type: "method",
        info: `The addslashes() function returns a string with backslashes in front of predefined characters.<br><br>
<b>The predefined characters are:</b>
<ul>
    <span class="li">single quote (')</span>
    <span class="li">double quote (")</span>
    <span class="li">backslash (\\)</span>
    <span class="li">NULL</span>
</ul><br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> This function can be used to prepare a string for storage in a database and database queries.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> Prior to PHP 5.4, the PHP dir magic_quotes_gpc was on by default and it ran addslashes() on all GET, POST, and COOKIE data by default. You should not use addslashes() on strings that have already been escaped, as it will cause double escaping. The function get_magic_quotes_gpc() can be used to check this.`
    }),
    //? ------------------ bin2hex()
    snip(`bin2hex($\{string});$\{}`, {
        label: "bin2hex()",
        detail: "String",
        type: "method",
        info: `The bin2hex() function converts a string of ASCII characters to hexadecimal values. The string can be converted back using the pack() function.`
    }),
    //? ------------------ chop()
    snip(`chop($\{string});$\{}`, {
        label: "chop()",
        detail: "String",
        type: "method",
        info: `The chop() function removes whitespaces or other predefined characters from the right end of a string.`
    }),
    //? ------------------ chr()
    snip(`chr($\{ascii});$\{}`, {
        label: "chr()",
        detail: "String",
        type: "method",
        info: `The chr() function returns a character from the specified ASCII value.<br><br>
The ASCII value can be specified in decimal, octal, or hex values. Octal values are defined by a leading 0, while hex values are defined by a leading 0x.`
    }),
    //? ------------------ chunk_split()
    snip(`chunk_split($\{string}, $\{length});$\{}`, {
        label: "chunk_split()",
        detail: "String",
        type: "method",
        info: `The chunk_split() function splits a string into a series of smaller parts.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function does not alter the original string.`
    }),
    //? ------------------ convert_cyr_string()
    snip(`convert_cyr_string($\{string}, $\{from}, $\{to});$\{}`, {
        label: "convert_cyr_string()",
        detail: "String",
        type: "method",
        info: `The convert_cyr_string() function converts a string from one Cyrillic character-set to another.<br><br>
<b>The supported Cyrillic character-sets are:</b><ul>
    <span class="li">k - koi8-r</span>
    <span class="li">w - windows-1251</span>
    <span class="li">i - iso8859-5</span>
    <span class="li">a - x-cp866</span>
    <span class="li">d - x-cp866</span>
    <span class="li">m - x-mac-cyrillic</span>
</ul>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ convert_uudecode()
    snip(`convert_uudecode($\{string});$\{}`, {
        label: "convert_uudecode()",
        detail: "String",
        type: "method",
        info: `The convert_uudecode() function decodes a uuencoded string.`
    }),
    //? ------------------ convert_uuencode()
    snip(`convert_uuencode($\{string});$\{}`, {
        label: "convert_uuencode()",
        detail: "String",
        type: "method",
        info: `The convert_uuencode() function encodes a string using the uuencode algorithm.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function encodes all strings (including binary) into printable characters. This will fix any problems with obscure binary data when storing in a database or transmit data over a network. Remember to use the convert_uudecode() function before using the data again.<br><br>
</b>Note:</b> Uuencoded data is about 35% larger than the original.`
    }),
    //? ------------------ count_chars()
    snip(`count_chars($\{string}, $\{0});$\{}`, {
        label: "count_chars()",
        detail: "String",
        type: "method",
        info: `The count_chars() function returns information about characters used in a string (for example, how many times an ASCII character occurs in a string, or which characters that have been used or not been used in a string).`
    }),
    //? ------------------ crc32()
    snip(`crc32($\{string});$\{}`, {
        label: "crc32()",
        detail: "String",
        type: "method",
        info: `The crc32() function calculates a 32-bit CRC (cyclic redundancy checksum) for a string.<br><br>
This function can be used to validate data integrity.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> To ensure that you get the correct string representation from the crc32() function, you'll need to use the %u formatter of the printf() or sprintf() function. If the %u formatter is not used, the result may display in incorrect and negative numbers.`
    }),
    //? ------------------ crypt()
    snip(`crypt($\{string}, $\{salt});$\{}`, {
        label: "crypt()",
        detail: "String",
        type: "method",
        info: `The crypt() function encrypts a string using a one-way hash.<br><br>
<b>We highly recommend you to read the official docs:</b><br>
<a target="_blank" href="https://www.php.net/manual/en/function.crypt.php">php.net</a> <span style="opacity: 0.5">|</span> <a target="_blank" href="https://www.w3schools.com/php/func_string_crypt.asp">w3schools.com</a>`
    }),
    //? ------------------ explode()
    snip(`explode($\{separator}, $\{string});$\{}`, {
        label: "explode()",
        detail: "String",
        type: "method",
        info: `The explode() function breaks a string into an array.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The "separator" parameter cannot be an empty string.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ fprint()
    snip(`fprint($\{});$\{}`, {
        label: "fprint()",
        detail: "String",
        type: "method",
        info: `The fprintf() function writes a formatted string to a specified output stream (example: file or database).<br><br>
The arg1, arg2, ++ parameters will be inserted at percent (%) signs in the main string. This function works "step-by-step". At the first % sign, arg1 is inserted, at the second % sign, arg2 is inserted, etc.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> If there are more % signs than arguments, you must use placeholders. A placeholder is inserted after the % sign, and consists of the argument-number and "\\$". See example two.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Related functions: <code>printf()</code>, <code>sprintf()</code>, <code>vprintf()</code>, <code>vsprintf()</code> and <code>vfprintf()</code>`
    }),
    //? ------------------ get_html_translation_table()
    snip(`get_html_translation_table($\{});$\{}`, {
        label: "get_html_translation_table()",
        detail: "String",
        type: "method",
        info: `The get_html_translation_table() function returns the translation table used by the htmlentities() and htmlspecialchars() functions.<br><br>
Tip: Some characters can be encoded several ways. The get_html_translation_table() function returns the most common encoding.`
    }),
    //? ------------------ hrebrev()
    snip(`hrebrev($\{string});$\{}`, {
        label: "hrebrev()",
        detail: "String",
        type: "method",
        info: `The hebrev() function converts Hebrew text from a right-to-left flow to a left-to-right flow.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> hebrev() and hebrevc() can convert Hebrew logical text (the Windows encoding) to Hebrew visual text. Hebrew visual requires no special right-to-left character support to be displayed properly, making it very useful for displaying Hebrew text on the web.`
    }),
    //? ------------------ hebrevc()
    snip(`hebrevc($\{string});$\{}`, {
        label: "hebrevc()",
        detail: "String",
        type: "method",
        info: `The hebrevc() function converts Hebrew text from a right-to-left flow to a left-to-right flow. It also converts new lines (\\n) into ＜br＞.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> hebrevc() and hebrev() can convert Hebrew logical text (the Windows encoding) to Hebrew visual text. Hebrew visual requires no special right-to-left character support to be displayed properly, making it very useful for displaying Hebrew text on the web.`
    }),
    //? ------------------ hex2bin()
    snip(`hex2bin($\{hex});$\{}`, {
        label: "hex2bin()",
        detail: "String",
        type: "method",
        info: `The hex2bin() function converts a string of hexadecimal values to ASCII characters.`
    }),
    //? ------------------ html_entity_decode()
    snip(`html_entity_decode($\{string});$\{}`, {
        label: "html_entity_decode()",
        detail: "String",
        type: "method",
        info: `The html_entity_decode() function converts HTML entities to characters.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The html_entity_decode() function is the opposite of htmlentities().`
    }),
    //? ------------------ htmlentities()
    snip(`htmlentities($\{string});$\{}`, {
        label: "htmlentities()",
        detail: "String",
        type: "method",
        info: `The htmlentities() function converts characters to HTML entities.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> To convert HTML entities back to characters, use the html_entity_decode() function.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Use the get_html_translation_table() function to return the translation table used by htmlentities().`
    }),
    //? ------------------ htmlspecialchars_decode()
    snip(`htmlspecialchars_decode($\{string});$\{}`, {
        label: "htmlspecialchars_decode()",
        detail: "String",
        type: "method",
        info: `The htmlspecialchars_decode() function converts some predefined HTML entities to characters.<br><br>
<b>HTML entities that will be decoded are:</b>
<ul>
    <span class="li"><b><span>&</span>amp;</b> becomes <b>&</b> <span style="opacity: 0.7">(ampersand)</span></span>
    <span class="li"><b><span>&</span>quot;</b> becomes <b>"</b> <span style="opacity: 0.7">(double quote)</span></span>
    <span class="li"><b><span>&</span>#039;</b> becomes <b>'</b> <span style="opacity: 0.7">(single quote)</span></span>
    <span class="li"><b><span>&</span>lt;</b> becomes <b>＜</b> <span style="opacity: 0.7">(less than)</span></span>
    <span class="li"><b><span>&</span>gt;</b> becomes <b>＞</b> <span style="opacity: 0.7">(greater than)</span></span>
</ul>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The htmlspecialchars_decode() function is the opposite of htmlspecialchars().`
    }),
    //? ------------------ htmlspecialchars()
    snip(`htmlspecialchars($\{string});$\{}`, {
        label: "htmlspecialchars()",
        detail: "String",
        type: "method",
        info: `The htmlspecialchars() function converts some predefined characters to HTML entities.<br><br>
<b>The predefined characters are:</b>
<ul>
    <span class="li"><b>&</b> <span style="opacity: 0.7">(ampersand)</span> becomes <b><span>&</span>amp;</b></span>
    <span class="li"><b>"</b> <span style="opacity: 0.7">(double quote)</span> becomes <b><span>&</span>quot;</b></span>
    <span class="li"><b>'</b> <span style="opacity: 0.7">(single quote)</span> becomes <b><span>&</span>#039;</b></span>
    <span class="li"><b>＜</b> <span style="opacity: 0.7">(less than)</span> becomes <b><span>&</span>lt;</b></span>
    <span class="li"><b>＞</b> <span style="opacity: 0.7">(greater than)</span> becomes <b><span>&</span>gt;</b></span>
</ul>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> To convert special HTML entities back to characters, use the htmlspecialchars_decode() function. `
    }),
    //? ------------------ implode()
    snip(`implode($\{"separator"}, $\{$array});$\{}`, {
        label: "implode()",
        detail: "Array",
        type: "method",
        info: `The implode() function returns a string from the elements of an array.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The implode() function accept its parameters in either order. However, for consistency with explode(), you should use the documented order of arguments.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The separator parameter of implode() is optional. However, it is recommended to always use two parameters for backwards compatibility.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ join()
    snip(`join($\{"separator"}, $\{$array});$\{}`, {
        label: "join()",
        detail: "Array",
        type: "method",
        info: `The join() function returns a string from the elements of an array.<br><br>
The join() function is an alias of the implode() function.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The join() function accept its parameters in either order. However, for consistency with explode(), you should use the documented order of arguments.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The separator parameter of join() is optional. However, it is recommended to always use two parameters for backwards compatibility.`
    }),
    //? ------------------ lcfirst()
    snip(`lcfirst($\{string});$\{}`, {
        label: "lcfirst()",
        detail: "String",
        type: "method",
        info: `The lcfirst() function converts the first character of a string to lowercase.`
    }),
    //? ------------------ levenshtein()
    snip(`levenshtein($\{string1}, $\{string2});$\{}`, {
        label: "levenshtein()",
        detail: "String",
        type: "method",
        info: `The levenshtein() function returns the Levenshtein distance between two strings.<br><br>
The Levenshtein distance is the number of characters you have to replace, insert or delete to transform string1 into string2.<br><br>
By default, PHP gives each operation (replace, insert, and delete) equal weight. However, you can define the cost of each operation by setting the optional insert, replace, and delete parameters.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The levenshtein() function is not case-sensitive.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The levenshtein() function is faster than the similar_text() function. However, similar_text() will give you a more accurate result with less modifications needed.`
    }),
    //? ------------------ localeconv()
    snip(`localeconv();$\{}`, {
        label: "localeconv()",
        detail: "Array",
        type: "method",
        info: `The localeconv() function returns an array containing local numeric and monetary formatting information.<br><br>
<b>We highly recommend you to read the official docs:</b><br>
<a target="_blank" href="https://www.php.net/manual/en/function.localeconv.php">php.net</a> <span style="opacity: 0.5">|</span> <a target="_blank" href="https://www.w3schools.com/php/func_string_localeconv.asp">w3schools.com</a>`
    }),
    //? ------------------ ltrim()
    snip(`ltrim($\{"string"});$\{}`, {
        label: "ltrim()",
        detail: "String",
        type: "method",
        info: `The ltrim() function removes whitespace or other predefined characters from the left side of a string.<br><br>
<b>Related functions:</b>
<ul>
<span class="li"><b>rtrim()</b> - Removes whitespace or other predefined characters from the right side of a string</span>
<span class="li"><b>trim()</b> - Removes whitespace or other predefined characters from both sides of a string</span>
</ul>`
    }),
    //? ------------------ md5()
    snip(`md5($\{"string"});$\{}`, {
        label: "md5()",
        detail: "String",
        type: "method",
        info: `The md5() function calculates the MD5 hash of a string.<br><br>
The md5() function uses the RSA Data Security, Inc. MD5 Message-Digest Algorithm.<br><br>
<b>From RFC 1321</b> - The MD5 Message-Digest Algorithm: "<i>The MD5 message-digest algorithm takes as input a message of arbitrary length and produces as output a 128-bit "fingerprint" or "message digest" of the input. The MD5 algorithm is intended for digital signature applications, where a large file must be "compressed" in a secure manner before being encrypted with a private (secret) key under a public-key cryptosystem such as RSA.</i>"<br><br>
To calculate the MD5 hash of a file, use the md5_file() function.`
    }),
    //? ------------------ md5_file()
    snip(`md5_file($\{file});$\{}`, {
        label: "md5_file()",
        detail: "String",
        type: "method",
        info: `The md5_file() function calculates the MD5 hash of a file.<br><br>
The md5_file() function uses the RSA Data Security, Inc. MD5 Message-Digest Algorithm.<br><br>
<b>From RFC 1321</b> - The MD5 Message-Digest Algorithm: "<i>The MD5 message-digest algorithm takes as input a message of arbitrary length and produces as output a 128-bit "fingerprint" or "message digest" of the input. The MD5 algorithm is intended for digital signature applications, where a large file must be "compressed" in a secure manner before being encrypted with a private (secret) key under a public-key cryptosystem such as RSA.</i>"<br><br>
To calculate the MD5 hash of a string, use the md5() function.`
    }),
    //? ------------------ metaphone()
    snip(`metaphone($\{string});$\{}`, {
        label: "metaphone()",
        detail: "String",
        type: "method",
        info: `The metaphone() function calculates the metaphone key of a string.<br><br>
A metaphone key represents how a string sounds if said by an English speaking person.<br><br>
The metaphone() function can be used for spelling applications.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The metaphone() function creates the same key for similar sounding words.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The generated metaphone keys vary in length.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> metaphone() is more accurate than the soundex() function, because metaphone() knows the basic rules of English pronunciation. `
    }),
    //? ------------------ money_format()
    snip(`money_format($\{"string"});$\{}`, {
        label: "money_format()",
        detail: "String",
        type: "method",
        info: `The money_format() function returns a string formatted as a currency string.<br><br>
This function inserts a formatted number where there is a percent (%) sign in the main string.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The money_format() function does not work on Windows platforms.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> This function is often used together with the setlocale() function.`
    }),
    //? ------------------ nl_langinfo()
    snip(`nl_langinfo($\{"string"});$\{}`, {
        label: "nl_langinfo()",
        detail: "String",
        type: "method",
        info: `The nl_langinfo() function returns specific local information.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function does not work on Windows platforms.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Unlike the localeconv() function, which returns all local formatting information, the nl_langinfo() function returns specific information.`
    }),
    //? ------------------ nl2br()
    snip(`nl2br($\{"string"});$\{}`, {
        label: "nl2br()",
        detail: "String",
        type: "method",
        info: `The nl2br() function inserts HTML line breaks (＜br＞ or ＜br /＞) in front of each newline (\\n) in a string.`
    }),
    //? ------------------ number_format()
    snip(`number_format($\{"string"});$\{}`, {
        label: "number_format()",
        detail: "String",
        type: "method",
        info: `The number_format() function formats a number with grouped thousands.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function supports one, two, or four parameters (not three).`
    }),
    //? ------------------ ord()
    snip(`ord($\{"string"});$\{}`, {
        label: "ord()",
        detail: "String",
        type: "method",
        info: `The ord() function returns the ASCII value of the first character of a string.`
    }),
    //? ------------------ parse_str()
    snip(`parse_str($\{"string"});$\{}`, {
        label: "parse_str()",
        detail: "String",
        type: "method",
        info: `The parse_str() function parses a query string into variables.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> If the array parameter is not set, variables set by this function will overwrite existing variables of the same name.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The magic_quotes_gpc setting in the php.ini file affects the output of this function. If enabled, the variables are converted by addslashes() before parsed by parse_str().`
    }),
    //? ------------------ print()
    snip(`print($\{"string"});$\{}`, {
        label: "print()",
        detail: "String",
        type: "method",
        info: `The print() function outputs one or more strings.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The print() function is not actually a function, so you are not required to use parentheses with it.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> The print() function is slightly slower than echo().`
    }),
    //? ------------------ printf()
    snip(`printf($\{});$\{}`, {
        label: "printf()",
        detail: "String",
        type: "method",
        info: `The printf() function outputs a formatted string.`
    }),
    //? ------------------ quoted_printable_decode()
    snip(`quoted_printable_decode($\{"string"});$\{}`, {
        label: "quoted_printable_decode()",
        detail: "String",
        type: "method",
        info: `The quoted_printable_decode() function decodes a quoted-printable string to an 8-bit ASCII string.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Data encoded in quoted-printable are unlikely to be modified by mail transport. A text which is entirely US-ASCII may be encoded in quoted-printable to ensure the integrity of the data should the message pass through a character-translating, or line-wrapping gateway.`
    }),
    //? ------------------ quoted_printable_encode()
    snip(`quoted_printable_encode($\{"string"});$\{}`, {
        label: "quoted_printable_encode()",
        detail: "String",
        type: "method",
        info: `The quoted_printable_encode() function converts an 8-bit string to a quoted-printable string.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Data encoded in quoted-printable are unlikely to be modified by mail transport. A text which is entirely US-ASCII may be encoded in quoted-printable to ensure the integrity of the data should the message pass through a character-translating, or line-wrapping gateway.The quoted_printable_encode() function converts an 8-bit string to a quoted-printable string.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Data encoded in quoted-printable are unlikely to be modified by mail transport. A text which is entirely US-ASCII may be encoded in quoted-printable to ensure the integrity of the data should the message pass through a character-translating, or line-wrapping gateway.`
    }),
    //? ------------------ quotemeta()
    snip(`quotemeta($\{"string"});$\{}`, {
        label: "quotemeta()",
        detail: "String",
        type: "method",
        info: `The quotemeta() function adds backslashes in front of some predefined characters in a string.<br><br>
<b>The predefined characters are:</b>
<ul>
    <span class="li">period (.)</span>
    <span class="li">backslash (\\)</span>
    <span class="li">plus sign (+)</span>
    <span class="li">asterisk (*)</span>
    <span class="li">question mark (?)</span>
    <span class="li">brackets ([])</span>
    <span class="li">caret (^)</span>
    <span class="li">dollar sign ($)</span>
    <span class="li">parenthesis (())</span>
</ul>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> 
This function can be used to escape characters with special meanings, such as ( ), [ ], and * in SQL.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> 
This function is binary-safe.`
    }),
    //? ------------------ rtrim()
    snip(`rtrim($\{"string"});$\{}`, {
        label: "rtrim()",
        detail: "String",
        type: "method",
        info: `The rtrim() function removes whitespace or other predefined characters from the right side of a string.<br><br>
<b>Related functions:</b>
<ul>
<span class="li"><b>ltrim()</b> - Removes whitespace or other predefined characters from the left side of a string</span>
<span class="li"><b>trim()</b> - Removes whitespace or other predefined characters from both sides of a string</span>
</ul>`
    }),
    //? ------------------ setlocale()
    snip(`setlocale($\{constant}, $\{location});$\{}`, {
        label: "setlocale()",
        detail: "String",
        type: "method",
        info: `The setlocale() function sets locale information.<br><br>
Locale information is language, monetary, time and other information specific for a geographical area.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The setlocale() function changes the locale only for the current script.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> The locale information can be set to system default with setlocale(LC_ALL,NULL)<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> To get numeric formatting information, see the localeconv() function.`
    }),
    //? ------------------ sha1()
    snip(`sha1($\{"string"});$\{}`, {
        label: "sha1()",
        detail: "String",
        type: "method",
        info: `The sha1() function calculates the SHA-1 hash of a string.<br><br>
The sha1() function uses the US Secure Hash Algorithm 1.<br><br>
From RFC 3174 - The US Secure Hash Algorithm 1: "<i>SHA-1 produces a 160-bit output called a message digest. The message digest can then, for example, be input to a signature algorithm which generates or verifies the signature for the message. Signing the message digest rather than the message often improves the efficiency of the process because the message digest is usually much smaller in size than the message. The same hash algorithm must be used by the verifier of a digital signature as was used by the creator of the digital signature.</i>"<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> To calculate the SHA-1 hash of a file, use the sha1_file() function.`
    }),
    //? ------------------ sha1_file()
    snip(`sha1_file($\{file});$\{}`, {
        label: "sha1_file()",
        detail: "String",
        type: "method",
        info: `The sha1_file() function calculates the SHA-1 hash of a file.<br><br>
The sha1_file() function uses the US Secure Hash Algorithm 1.<br><br>
From RFC 3174 - The US Secure Hash Algorithm 1: "<i>SHA-1 produces a 160-bit output called a message digest. The message digest can then, for example, be input to a signature algorithm which generates or verifies the signature for the message. Signing the message digest rather than the message often improves the efficiency of the process because the message digest is usually much smaller in size than the message. The same hash algorithm must be used by the verifier of a digital signature as was used by the creator of the digital signature.</i>"<br><br>
This function returns the calculated SHA-1 hash on success, or FALSE on failure.`
    }),
    //? ------------------ similar_text()
    snip(`similar_text($\{"string1"}, $\{"string2"});$\{}`, {
        label: "similar_text()",
        detail: "String",
        type: "method",
        info: `The similar_text() function calculates the similarity between two strings.<br><br>
It can also calculate the similarity of the two strings in percent.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The levenshtein() function is faster than the similar_text() function. However, the similar_text() function will give you a more accurate result with less modifications needed`
    }),
    //? ------------------ soundex()
    snip(`soundex($\{"string"});$\{}`, {
        label: "soundex()",
        detail: "String",
        type: "method",
        info: `The soundex() function calculates the soundex key of a string.<br><br>
A soundex key is a four character long alphanumeric string that represent English pronunciation of a word.<br><br>
The soundex() function can be used for spelling applications.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The soundex() function creates the same key for similar sounding words.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> metaphone() is more accurate than soundex(), because metaphone() knows the basic rules of English pronunciation.`
    }),
    //? ------------------ sprintf()
    snip(`sprintf($\{});$\{}`, {
        label: "sprintf()",
        detail: "String",
        type: "method",
        info: `The sprintf() function writes a formatted string to a variable.<br><br>
The arg1, arg2, ++ parameters will be inserted at percent (%) signs in the main string. This function works "step-by-step". At the first % sign, arg1 is inserted, at the second % sign, arg2 is inserted, etc.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> If there are more % signs than arguments, you must use placeholders. A placeholder is inserted after the % sign, and consists of the argument-number and "\\$". See example two.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Related functions: printf(), vprintf(), vsprintf(), fprintf() and vfprintf()`
    }),
    //? ------------------ sscanf()
    snip(`sscanf($\{"string"});$\{}`, {
        label: "sscanf()",
        detail: "String",
        type: "method",
        info: `The sscanf() function parses input from a string according to a specified format. The sscanf() function parses a string into variables based on the format string.<br><br>
If only two parameters are passed to this function, the data will be returned as an array. Otherwise, if optional parameters are passed, the data parsed are stored in them. If there are more specifiers than variables to contain them, an error occurs. However, if there are less specifiers than variables, the extra variables contain NULL.<br><br>
<b>Related functions:</b>
<ul>
    <span class="li">printf() - outputs a formatted string</span>
    <span class="li">sprintf() - writes a formatted string to a variable</span>
</ul>`
    }),
    //? ------------------ str_getcsv()
    snip(`str_getcsv($\{"string"});$\{}`, {
        label: "str_getcsv()",
        detail: "String",
        type: "method",
        info: `The str_getcsv() function parses a string for fields in CSV format and returns an array containing the fields read.`
    }),
    //? ------------------ str_ireplace()
    snip(`str_ireplace($\{"string"});$\{}`, {
        label: "str_ireplace()",
        detail: "String",
        type: "method",
        info: `The str_ireplace() function replaces some characters with some other characters in a string.<br><br>
<b>This function works by the following rules:</b>
<ul>
    <span class="li">If the string to be searched is an array, it returns an array</span>
    <span class="li">If the string to be searched is an array, find and replace is performed with every array element</span>
    <span class="li">If both find and replace are arrays, and replace has fewer elements than find, an empty string will be used as replace</span>
    <span class="li">If find is an array and replace is a string, the replace string will be used for every find value</span>
</ul>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is case-insensitive. Use the str_replace() function to perform a case-sensitive search.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ str_pad()
    snip(`str_pad($\{"string"}, $\{length});$\{}`, {
        label: "str_pad()",
        detail: "String",
        type: "method",
        info: `The str_pad() function pads a string to a new length.`
    }),
    //? ------------------ str_repeat()
    snip(`str_repeat($\{"string"}, $\{times});$\{}`, {
        label: "str_repeat()",
        detail: "String",
        type: "method",
        info: `The str_repeat() function repeats a string a specified number of times.`
    }),
    //? ------------------ str_replace()
    snip(`str_replace($\{find}, $\{replace}, $\{"string"});$\{}`, {
        label: "str_replace()",
        detail: "String",
        type: "method",
        info: `The str_replace() function replaces some characters with some other characters in a string.<br><br>
<b>This function works by the following rules:</b>
<ul>
    <span class="li">If the string to be searched is an array, it returns an array</span>
    <span class="li">If the string to be searched is an array, find and replace is performed with every array element</span>
    <span class="li">If both find and replace are arrays, and replace has fewer elements than find, an empty string will be used as replace</span>
    <span class="li">If find is an array and replace is a string, the replace string will be used for every find value</span>
</ul>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is case-sensitive. Use the str_ireplace() function to perform a case-insensitive search.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ str_rot13()
    snip(`str_rot13($\{"string"});$\{}`, {
        label: "str_rot13()",
        detail: "String",
        type: "method",
        info: `The str_rot13() function performs the ROT13 encoding on a string.<br><br>
The ROT13 encoding shifts every letter 13 places in the alphabet. Numeric and non-alphabetical characters remains untouched.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Encoding and decoding are done by the same function. If you pass an encoded string as argument, the original string will be returned.`
    }),
    //? ------------------ str_shuffle()
    snip(`str_shuffle($\{"string"});$\{}`, {
        label: "str_shuffle()",
        detail: "String",
        type: "method",
        info: `The str_shuffle() function randomly shuffles all the characters of a string.`
    }),
    //? ------------------ str_split()
    snip(`str_split($\{"string"}, $\{length});$\{}`, {
        label: "str_split()",
        detail: "String",
        type: "method",
        info: `The str_split() function splits a string into an array.`
    }),
    //? ------------------ str_word_count()
    snip(`str_word_count($\{"string"}, $\{0});$\{}`, {
        label: "str_word_count()",
        detail: "String",
        type: "method",
        info: `The str_word_count() function counts the number of words in a string.`
    }),
    //? ------------------ strcasecmp()
    snip(`strcasecmp($\{"string1"}, $\{"string2"});$\{}`, {
        label: "strcasecmp()",
        detail: "String",
        type: "method",
        info: `The strcasecmp() function compares two strings.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> The strcasecmp() function is binary-safe and case-insensitive.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> This function is similar to the strncasecmp() function, with the difference that you can specify the number of characters from each string to be used in the comparison with strncasecmp(). `
    }),
    //? ------------------ strchr()
    snip(`strchr($\{"string"}, $\{"needle"});$\{}`, {
        label: "strchr()",
        detail: "String",
        type: "method",
        info: `The strchr() function searches for the first occurrence of a string inside another string.<br><br>
This function is an alias of the strstr() function.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is binary-safe.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is case-sensitive. For a case-insensitive search, use stristr() function.`
    }),
    //? ------------------ strcmp()
    snip(`strcmp($\{"string1"}, $\{"string2"});$\{}`, {
        label: "strcmp()",
        detail: "String",
        type: "method",
        info: `The strcmp() function compares two strings.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The strcmp() function is binary-safe and case-sensitive.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> This function is similar to the strncmp() function, with the difference that you can specify the number of characters from each string to be used in the comparison with strncmp().`
    }),
    //? ------------------ strcoll()
    snip(`strcoll($\{"string1"}, $\{"string2"});$\{}`, {
        label: "strcoll()",
        detail: "String",
        type: "method",
        info: `The strcoll() function compares two strings.<br><br>
The comparison of the strings may vary depending on the locale settings (A＜a or A＞a).<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The strcoll() is case-sensitive but not binary-safe.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> If the current locale is C or POSIX, this function works the same way as strcmp().`
    }),
    //? ------------------ strcspn()
    snip(`strcspn($\{"string1"}, $\{"string2"});$\{}`, {
        label: "strcspn()",
        detail: "String",
        type: "method",
        info: `The strcspn() function returns the number of characters (including whitespaces) found in a string before any part of the specified characters are found.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Use the strspn() function to the number of characters found in the string that contains only characters from a specified character list.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is binary-safe.
`
    }),
    //? ------------------ strip_tags()
    snip(`strip_tags($\{"string"});$\{}`, {
        label: "strip_tags()",
        detail: "String",
        type: "method",
        info: `The strip_tags() function strips a string from HTML, XML, and PHP tags.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> HTML comments are always stripped. This cannot be changed with the allow parameter.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ stripcslashes()
    snip(`stripcslashes($\{"string"});$\{}`, {
        label: "stripcslashes()",
        detail: "String",
        type: "method",
        info: `The stripcslashes() function removes backslashes added by the addcslashes() function.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> This function can be used to clean up data retrieved from a database or from an HTML form.`
    }),
    //? ------------------ stripslashes()
    snip(`stripslashes($\{"string"});$\{}`, {
        label: "stripslashes()",
        detail: "String",
        type: "method",
        info: `The stripslashes() function removes backslashes added by the addslashes() function.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> This function can be used to clean up data retrieved from a database or from an HTML form.`
    }),
    //? ------------------ stripos()
    snip(`stripos($\{"string1"}, $\{"string2"});$\{}`, {
        label: "stripos()",
        detail: "String",
        type: "method",
        info: `The stripos() function finds the position of the first occurrence of a string inside another string.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The stripos() function is case-insensitive.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ stristr()
    snip(`stristr($\{"string1"}, $\{"string2"});$\{}`, {
        label: "stristr()",
        detail: "String",
        type: "method",
        info: `The stristr() function searches for the first occurrence of a string inside another string.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is binary-safe.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is case-insensitive. For a case-sensitive search, use strstr() function.`
    }),
    //? ------------------ strlen()
    snip(`strlen($\{"string"});$\{}`, {
        label: "strlen()",
        detail: "String",
        type: "method",
        info: `The strlen() function returns the length of a string.`
    }),
    //? ------------------ strnatcasecmp()
    snip(`strnatcasecmp($\{"string1"}, $\{"string2"});$\{}`, {
        label: "strnatcasecmp()",
        detail: "String",
        type: "method",
        info: `The strnatcasecmp() function compares two strings using a "natural" algorithm.<br><br>
In a natural algorithm, the number 2 is less than the number 10. In computer sorting, 10 is less than 2, because the first number in "10" is less than 2.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The strnatcasecmp() is case-insensitive.`
    }),
    //? ------------------ strnatcmp()
    snip(`strnatcmp($\{"string1"}, $\{"string2"});$\{}`, {
        label: "strnatcmp()",
        detail: "String",
        type: "method",
        info: `The strnatcmp() function compares two strings using a "natural" algorithm.<br><br>
In a natural algorithm, the number 2 is less than the number 10. In computer sorting, 10 is less than 2, because the first number in "10" is less than 2.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is case-sensitive.`
    }),
    //? ------------------ strncasecmp()
    snip(`strncasecmp($\{"string1"}, $\{"string2"}, $length);$\{}`, {
        label: "strncasecmp()",
        detail: "String",
        type: "method",
        info: `The strncasecmp() function compares two strings.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The strncasecmp() is binary-safe and case-insensitive.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> This function is similar to the strcasecmp() function, except that strcasecmp() does not have the length parameter. `
    }),
    //? ------------------ strncmp()
    snip(`strncmp($\{"string1"}, $\{"string2"}, $length);$\{}`, {
        label: "strncmp()",
        detail: "String",
        type: "method",
        info: `The strncmp() function compares two strings.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The strncmp() is binary-safe and case-sensitive.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> This function is similar to the strcmp() function, except that strcmp() does not have the length parameter. `
    }),
    //? ------------------ strpbrk()
    snip(`strpbrk($\{"string1"}, $\{"string2"});$\{}`, {
        label: "strpbrk()",
        detail: "String",
        type: "method",
        info: `The strpbrk() function searches a string for any of the specified characters.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is case-sensitive.<br><br>
This function returns the rest of the string from where it found the first occurrence of a specified character, otherwise it returns FALSE.`
    }),
    //? ------------------ strpos()
    snip(`strpos($\{"string1"}, $\{"string2"});$\{}`, {
        label: "strpos()",
        detail: "String",
        type: "method",
        info: `The strpos() function finds the position of the first occurrence of a string inside another string.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The strpos() function is case-sensitive.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ strrchr()
    snip(`strrchr($\{"string1"}, $\{"string2"});$\{}`, {
        label: "strrchr()",
        detail: "String",
        type: "method",
        info: `The strrchr() function finds the position of the last occurrence of a string within another string, and returns all characters from this position to the end of the string.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ strrev()
    snip(`strrev($\{"string"});$\{}`, {
        label: "strrev()",
        detail: "String",
        type: "method",
        info: `The strrev() function reverses a string.`
    }),
    //? ------------------ strripos()
    snip(`strripos($\{"string1"}, $\{"string2"});$\{}`, {
        label: "strripos()",
        detail: "String",
        type: "method",
        info: `The strripos() function finds the position of the last occurrence of a string inside another string.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The strripos() function is case-insensitive.`
    }),
    //? ------------------ strrpos()
    snip(`strrpos($\{"string1"}, $\{"string2"});$\{}`, {
        label: "strrpos()",
        detail: "String",
        type: "method",
        info: `The strrpos() function finds the position of the last occurrence of a string inside another string.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The strrpos() function is case-sensitive.`
    }),
    //? ------------------ strspn()
    snip(`strspn($\{"string1"}, $\{"string2"});$\{}`, {
        label: "strspn()",
        detail: "String",
        type: "method",
        info: `The strspn() function returns the number of characters found in the string that contains only characters from the charlist parameter.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> Use the strcspn() function to return the number of characters found in a string before any part of the specified characters are found.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ strstr()
    snip(`strstr($\{"string1"}, $\{"string2"});$\{}`, {
        label: "strstr()",
        detail: "String",
        type: "method",
        info: `The strstr() function searches for the first occurrence of a string inside another string.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is binary-safe.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is case-sensitive. For a case-insensitive search, use stristr() functio`
    }),
    //? ------------------ strtok()
    snip(`strtok($\{"string1"}, $\{"string2"});$\{}`, {
        label: "strtok()",
        detail: "String",
        type: "method",
        info: `The strtok() function splits a string into smaller strings (tokens).`
    }),
    //? ------------------ strtolower()
    snip(`strtolower($\{"string"});$\{}`, {
        label: "strtolower()",
        detail: "String",
        type: "method",
        info: `The strtolower() function converts a string to lowercase.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ strtoupper()
    snip(`strtoupper($\{"string"});$\{}`, {
        label: "strtoupper()",
        detail: "String",
        type: "method",
        info: `The strtoupper() function converts a string to uppercase.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ strtr()
    snip(`strtr($\{"string1"}, $\{"string2"});$\{}`, {
        label: "strtr()",
        detail: "String",
        type: "method",
        info: `The strtr() function translates certain characters in a string.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> If the from and to parameters are different in length, both will be formatted to the length of the shortest.`
    }),
    //? ------------------ substr()
    snip(`substr($\{});$\{}`, {
        label: "substr()",
        detail: "String",
        type: "method",
        info: `The substr() function returns a part of a string.`
    }),
    //? ------------------ str_contains()
    snip(`str_contains($\{"string1"}, $\{"string2"});$\{}`, {
        label: "str_contains()",
        detail: "String",
        type: "method",
        info: `The str_contains() function checks whether a string contains another string.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ substr_compare()
    snip(`substr_compare($\{});$\{}`, {
        label: "substr_compare()",
        detail: "String",
        type: "method",
        info: `The substr_compare() function compares two strings from a specified start position.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg><span>Tip:</span></b> This function is binary-safe and optionally case-sensitive.`
    }),
    //? ------------------ substr_count()
    snip(`substr_count($\{"string1"}, $\{"string2"});$\{}`, {
        label: "substr_count()",
        detail: "String",
        type: "method",
        info: `The substr_count() function counts the number of times a substring occurs in a string.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The substring is case-sensitive.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function does not count overlapped substrings (see example 2).<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function generates a warning if the start parameter plus the length parameter is greater than the string length (see example 3).`
    }),
    //? ------------------ substr_replace()
    snip(`substr_replace($\{});$\{}`, {
        label: "substr_replace()",
        detail: "String",
        type: "method",
        info: `The substr_replace() function replaces a part of a string with another string.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> If the start parameter is a negative number and length is less than or equal to start, length becomes 0.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is binary-safe.
`
    }),
    //? ------------------ str_starts_with()
    snip(`str_starts_with($\{"string1"}, $\{"string2"});$\{}`, {
        label: "str_starts_with()",
        detail: "String",
        type: "method",
        info: `The str_starts_with() function checks whether a string starts with another string.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ str_ends_with()
    snip(`str_ends_with($\{"string1"}, $\{"string2"});$\{}`, {
        label: "str_ends_with()",
        detail: "String",
        type: "method",
        info: `The str_ends_with() function checks whether a string ends with another string.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is binary-safe.`
    }),

    //? ------------------ trim()
    snip(`trim($\{"string"});$\{}`, {
        label: "trim()",
        detail: "String",
        type: "method",
        nfo: `The trim() function removes whitespace and other predefined characters from both sides of a string.`
    }),
    //? ------------------ ucfirst()
    snip(`ucfirst($\{"string"});$\{}`, {
        label: "ucfirst()",
        detail: "String",
        type: "method",
        info: `The ucfirst() function converts the first character of a string to uppercase.`
    }),
    //? ------------------ ucwords()
    snip(`ucwords($\{"string"});$\{}`, {
        label: "ucwords()",
        detail: "String",
        type: "method",
        info: `The ucwords() function converts the first character of each word in a string to uppercase.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ vfprintf()
    snip(`vfprintf($\{});$\{}`, {
        label: "vfprintf()",
        detail: "String",
        type: "method",
        info: `The vfprintf() function writes a formatted string to a specified output stream (example: file or database).<br><br>
Unlike fprintf(), the arguments in vfprintf(), are placed in an array. The array elements will be inserted at the percent (%) signs in the main string. This function works "step-by-step". At the first % sign, the first array element is inserted, at the second % sign, the second array element is inserted, etc.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> If there are more % signs than arguments, you must use placeholders. A placeholder is inserted after the % sign, and consists of the argument-number and "\\$". See example two.`
    }),
    //? ------------------ vprintf()
    snip(`vprintf($\{});$\{}`, {
        label: "vprintf()",
        detail: "String",
        type: "method",
        info: `The vprintf() function outputs a formatted string.<br><br>
Unlike printf(), the arguments in vprintf(), are placed in an array. The array elements will be inserted at the percent (%) signs in the main string. This function works "step-by-step". At the first % sign, the first array element is inserted, at the second % sign, the second array element is inserted, etc.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> If there are more % signs than arguments, you must use placeholders. A placeholder is inserted after the % sign, and consists of the argument-number and "\\$". See example two.`
    }),
    //? ------------------ vsprintf()
    snip(`vsprintf($\{});$\{}`, {
        label: "vsprintf()",
        detail: "String",
        type: "method",
        info: `The vsprintf() function writes a formatted string to a variable.<br><br>
Unlike sprintf(), the arguments in vsprintf(), are placed in an array. The array elements will be inserted at the percent (%) signs in the main string. This function works "step-by-step". At the first % sign, the first array element is inserted, at the second % sign, the second array element is inserted, etc.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> If there are more % signs than arguments, you must use placeholders. A placeholder is inserted after the % sign, and consists of the argument-number and "\\$". See example two.`
    }),
    //? ------------------ wordwrap()
    snip(`wordwrap($\{});$\{}`, {
        label: "wordwrap()",
        detail: "String",
        type: "method",
        info: `The wordwrap() function wraps a string into new lines when it reaches a specific length.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function may leave white spaces at the beginning of a line.`
    }),
]

export default stringFunctions;