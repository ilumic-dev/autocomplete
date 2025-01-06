window.phpIntellisense.arrayFunctions = [

    //! ------------------ each()
    window.cmSnip(`each($\{});$\{}`, {
        label: "each()",
        detail: "Array",
        type: "method",
        info: `The each() function returns the current element key and value, and moves the internal pointer forward.<br><br>
<div class="error-warning">
    <b>WARNING</b><br>
    <font>The each() function is deprecated in PHP 7.2.</font>
</div>`
    }),
    //? -----------setStatusBarElementContent------- array()
    window.cmSnip(`array($\{});$\{}`, {
        label: "array()",
        detail: "Array",
        type: "method",
        info: `The array() function is used to create an array.<br><br>
In PHP, there are three types of arrays:
<ul>
    <font class="li"><b>Indexed arrays</b> - Arrays with numeric index</font>
    <font class="li"><b>Associative arrays</b> - Arrays with named keys</font>
    <font class="li"><b>Multidimensional arrays</b> - Arrays containing one or more arrays</font>
</ul>
`
    }),
    //? ------------------ array_change_key_case()
    window.cmSnip(`array_change_key_case($\{});$\{}`, {
        label: "array_change_key_case()",
        detail: "Array",
        type: "method",
        info: `The array_change_key_case() function changes all keys in an array to lowercase or uppercase.`
    }),
    //? ------------------ array_chunk()
    window.cmSnip(`array_chunk($\{});$\{}`, {
        label: "array_chunk()",
        detail: "Array",
        type: "method",
        info: `The array_chunk() function splits an array into chunks of new arrays.`
    }),
    //? ------------------ array_column()
    window.cmSnip(`array_column($\{});$\{}`, {
        label: "array_column()",
        detail: "Array",
        type: "method",
        info: `The array_column() function returns the values from a single column in the input array.`
    }),
    //? ------------------ array_combine()
    window.cmSnip(`array_combine($\{});$\{}`, {
        label: "array_combine()",
        detail: "Array",
        type: "method",
        info: `The array_combine() function creates an array by using the elements from one "keys" array and one "values" array.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> Both arrays must have equal number of elements!`
    }),
    //? ------------------ array_count_values()
    window.cmSnip(`array_count_values($\{});$\{}`, {
        label: "array_count_values()",
        detail: "Array",
        type: "method",
        info: `The array_count_values() function counts all the values of an array.`
    }),
    //? ------------------ array_diff()
    window.cmSnip(`array_diff($\{});$\{}`, {
        label: "array_diff()",
        detail: "Array",
        type: "method",
        info: `The array_diff() function compares <b>the values</b> of two (or more) arrays, and returns the differences.<br><br>
This function compares the values of two (or more) arrays, and return an array that contains the entries from <i>array1</i> that are not present in <i>array2</i> or <i>array3</i>, etc.`
    }),
    //? ------------------ array_diff_assoc()
    window.cmSnip(`array_diff_assoc($\{});$\{}`, {
        label: "array_diff_assoc()",
        detail: "Array",
        type: "method",
        info: `The array_diff_assoc() function compares <b>the keys and values</b> of two (or more) arrays, and returns the differences.<br><br>
This function compares the keys and values of two (or more) arrays, and return an array that contains the entries from <em>
array1</em> that are not present in <em>
array2</em> or <em>array3</em>, etc.`
    }),
    //? ------------------ array_diff_key()
    window.cmSnip(`array_diff_key($\{});$\{}`, {
        label: "array_diff_key()",
        detail: "Array",
        type: "method",
        info: `The array_diff_key() function compares <b>the keys</b> of two (or more) arrays, and returns the differences.<br><br>
This function compares the keys of two (or more) arrays, and return an array that contains the entries from <em>array1</em> that are not present in <em>array2</em> or <em>array3</em>, etc.`
    }),
    //? ------------------ array_diff_uassoc()
    window.cmSnip(`array_diff_uassoc($\{});$\{}`, {
        label: "array_diff_uassoc()",
        detail: "Array",
        type: "method",
        info: `The array_diff_uassoc() function compares <b>the keys and values</b> of two (or more) arrays, and returns the differences.<br><br>
This function compares the keys and values of two (or more) arrays, and return an array that contains the entries from <em>array1</em> that are not present in <em>array2</em> or <em>array3</em>, etc.`
    }),
    //? ------------------ array_diff_ukey()
    window.cmSnip(`array_diff_ukey($\{});$\{}`, {
        label: "array_diff_ukey()",
        detail: "Array",
        type: "method",
        info: `The array_diff_ukey() function compares <b>the keys</b> of two (or more) arrays, and returns the differences.<br><br>
This function compares the keys of two (or more) arrays, and return an array that contains the entries from <em>array1</em> that are not present in <em>array2</em> or <em>array3</em>, etc.`
    }),
    //? ------------------ array_fill()
    window.cmSnip(`array_fill($\{});$\{}`, {
        label: "array_fill()",
        detail: "Array",
        type: "method",
        info: `The array_fill() function fills an array with values.`
    }),
    //? ------------------ array_fill_keys()
    window.cmSnip(`array_fill_keys($\{});$\{}`, {
        label: "array_fill_keys()",
        detail: "Array",
        type: "method",
        info: `The array_fill_keys() function fills an array with values, specifying keys.`
    }),
    //? ------------------ array_filter()
    window.cmSnip(`array_filter($\{});$\{}`, {
        label: "array_filter()",
        detail: "Array",
        type: "method",
        info: `The array_filter() function filters the values of an array using a callback function.<br><br>
This function passes each value of the input array to the callback function. If the callback function returns true, the current value from input is returned into the result array. Array keys are preserved.`
    }),
    //? ------------------ array_flip()
    window.cmSnip(`array_flip($\{});$\{}`, {
        label: "array_flip()",
        detail: "Array",
        type: "method",
        info: `The array_flip() function flips/exchanges all keys with their associated values in an array.`
    }),
    //? ------------------ array_intersect()
    window.cmSnip(`array_intersect($\{});$\{}`, {
        label: "array_intersect()",
        detail: "Array",
        type: "method",
        info: `The array_intersect() function compares <strong>the values</strong> of two (or more) arrays, and returns the matches.<br><br>
This function compares the values of two or more arrays, and return an 
array that contains the entries from <em>array1</em> that are present in <em>
array2</em>, <em>array3</em>, etc.`
    }),
    //? ------------------ array_intersect_assoc()
    window.cmSnip(`array_intersect_assoc($\{});$\{}`, {
        label: "array_intersect_assoc()",
        detail: "Array",
        type: "method",
        info: `The array_intersect_assoc() function compares <strong>the keys and values
</strong> of two (or more) arrays, and returns the matches. <br><br>
This function compares the keys and values of two or more arrays, and return 
an array that contains the entries from <em>array1</em> that are present in <em>
array2</em>, <em>array3</em>, etc.`
    }),
    //? ------------------ array_intersect_key()
    window.cmSnip(`array_intersect_key($\{});$\{}`, {
        label: "array_intersect_key()",
        detail: "Array",
        type: "method",
        info: `The array_intersect_key() function compares <strong>the keys</strong> of two (or more) arrays, and returns the matches.<br><br>This function compares the keys of two or more arrays, and return an 
array that contains the entries from <em>array1</em> that are present in <em>
array2</em>, <em>array3</em>, etc.`
    }),
    //? ------------------ array_intersect_uassoc()
    window.cmSnip(`array_intersect_uassoc($\{});$\{}`, {
        label: "array_intersect_uassoc()",
        detail: "Array",
        type: "method",
        info: `The array_intersect_uassoc() function compares <strong>the keys and values</strong> 
of two (or more) arrays, and returns the matches.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function uses a user-defined function to compare the keys!<br><br>
This function compares the keys and values of two or more arrays, and return 
an array that contains the entries from <em>array1</em> that are present in <em>
array2</em>, <em>array3</em>, etc.`
    }),
    //? ------------------ array_intersect_ukey()
    window.cmSnip(`array_intersect_ukey($\{});$\{}`, {
        label: "array_intersect_ukey()",
        detail: "Array",
        type: "method",
        info: `The array_intersect_ukey() function compares <strong>the keys</strong> of two (or more) arrays, and returns the matches.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function uses a user-defined function to compare the keys!<br><br>
This function compares the keys of two or more arrays, and return an 
array that contains the entries from <em>array1</em> that are present in <em>
array2</em>, <em>array3</em>, etc.`
    }),
    //? ------------------ array_key_exists()
    window.cmSnip(`array_key_exists($\{});$\{}`, {
        label: "array_key_exists()",
        detail: "Array",
        type: "method",
        info: `The array_key_exists() function checks an array for a specified key, and returns true if the key exists and false if the key does not exist.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Remember that if you skip the key when you specify an array, an integer key is generated, starting at 0 and increases by 1 for each value.`
    }),
    //? ------------------ array_keys()
    window.cmSnip(`array_keys($\{});$\{}`, {
        label: "array_keys()",
        detail: "Array",
        type: "method",
        info: `The array_keys() function returns an array containing the keys.`
    }),
    //? ------------------ array_map()
    window.cmSnip(`array_map($\{});$\{}`, {
        label: "array_map()",
        detail: "Array",
        type: "method",
        info: `The array_map() function sends each value of an array to a user-made function, and returns an array with new values, given by the user-made function.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> You can assign one array to the function, or as many as you like.`
    }),
    //? ------------------ array_merge()
    window.cmSnip(`array_merge($\{});$\{}`, {
        label: "array_merge()",
        detail: "Array",
        type: "method",
        info: `The array_merge() function merges one or more arrays into one array.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> You can assign one array to the function, or as many as you like.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> If two or more array elements have the same key, the last one overrides the others.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> If you assign only one array to the array_merge() function, and the keys are integers, the function returns a new array with integer keys starting at 0 and increases by 1 for each value.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> The difference between this function and the array_merge_recursive() function is when two or more array elements have the same key. Instead of override the keys, the array_merge_recursive() function makes the value as an array.`
    }),
    //? ------------------ array_merge_recursive()
    window.cmSnip(`array_merge_recursive($\{});$\{}`, {
        label: "array_merge_recursive()",
        detail: "Array",
        type: "method",
        info: `The array_merge_recursive() function merges one or more arrays into one array.<br><br>
The difference between this function and the array_merge() function is when two or more array elements have the same key. Instead of override the keys, the array_merge_recursive() function makes the value as an array.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> If you assign only one array to the array_merge_recursive() function, it will behave exactly the same as the array_merge() function.`
    }),
    //? ------------------ array_multisort()
    window.cmSnip(`array_multisort($\{});$\{}`, {
        label: "array_multisort()",
        detail: "Array",
        type: "method",
        info: `The array_multisort() function returns a sorted array. You can assign one or more arrays. The function sorts the first array, and the other arrays follow, then, if two or more values are the same, it sorts the next array, and so on.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> String keys will be maintained, but numeric keys will be re-indexed, starting at 0 and increase by 1.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> You can assign the <i>sortorder</i> and the <i>sorttype</i> parameters after each array. If not specified, each array parameter uses the default values.`
    }),
    //? ------------------ array_pad()
    window.cmSnip(`array_pad($\{});$\{}`, {
        label: "array_pad()",
        detail: "Array",
        type: "method",
        info: `The array_pad() function inserts a specified number of elements, with a specified value, to an array.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> If you assign a negative size parameter, the function will insert new elements BEFORE the original elements (See example below).<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> This function will not delete any elements if the size parameter is less than the size of the original array.`
    }),
    //? ------------------ array_pop()
    window.cmSnip(`array_pop($\{});$\{}`, {
        label: "array_pop()",
        detail: "Array",
        type: "method",
        info: `The array_pop() function deletes the last element of an array.`
    }),
    //? ------------------ array_product()
    window.cmSnip(`array_product($\{});$\{}`, {
        label: "array_product()",
        detail: "Array",
        type: "method",
        info: `The array_product() function calculates and returns the product of an array.`
    }),
    //? ------------------ array_push()
    window.cmSnip(`array_push($\{});$\{}`, {
        label: "array_push()",
        detail: "Array",
        type: "method",
        info: `The array_push() function inserts one or more elements to the end of an array.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> You can add one value, or as many as you like.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> Even if your array has string keys, your added elements will always have numeric keys (See example below).`
    }),
    //? ------------------ array_rand()
    window.cmSnip(`array_rand($\{});$\{}`, {
        label: "array_rand()",
        detail: "Array",
        type: "method",
        info: `The array_rand() function returns a random key from an array, or it returns an array of random keys if you specify that the function should return more than one key.`
    }),
    //? ------------------ array_reduce()
    window.cmSnip(`array_reduce($\{});$\{}`, {
        label: "array_reduce()",
        detail: "Array",
        type: "method",
        info: `The array_reduce() function sends the values in an array to a user-defined function, and returns a string.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> If the array is empty and initial is not passed, this function returns NULL.`
    }),
    //? ------------------ array_replace()
    window.cmSnip(`array_replace($\{});$\{}`, {
        label: "array_replace()",
        detail: "Array",
        type: "method",
        info: `The array_replace() function replaces the values of the first array with the values from following arrays.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> You can assign one array to the function, or as many as you like.<br><br>
If a key from array1 exists in array2, values from array1 will be replaced by the values from array2. If the key only exists in array1, it will be left as it is.<br><br>
If a key exist in array2 and not in array1, it will be created in array1.<br><br>
If multiple arrays are used, values from later arrays will overwrite the previous ones.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Use array_replace_recursive() to replace the values of array1 with the values from following arrays recursively.`
    }),
    //? ------------------ array_replace_recursive()
    window.cmSnip(`array_replace_recursive($\{});$\{}`, {
        label: "array_replace_recursive()",
        detail: "Array",
        type: "method",
        info: `The array_replace_recursive() function replaces the values of the first array with the values from following arrays recursively.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> You can assign one array to the function, or as many as you like.<br><br>
If a key from array1 exists in array2, values from array1 will be replaced by the values from array2. If the key only exists in array1, it will be left as it is. If a key exist in array2 and not in array1, it will be created in array1. If multiple arrays are used, values from later arrays will overwrite the previous ones.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> If you do not specify a key for each array, this function will behave exactly the same as the array_replace() function.`
    }),
    //? ------------------ array_reverse()
    window.cmSnip(`array_reverse($\{});$\{}`, {
        label: "array_reverse()",
        detail: "Array",
        type: "method",
        info: `The array_reverse() function returns an array in the reverse order.`
    }),
    //? ------------------ array_search()
    window.cmSnip(`array_search($\{});$\{}`, {
        label: "array_search()",
        detail: "Array",
        type: "method",
        info: `The array_search() function search an array for a value and returns the key.`
    }),
    //? ------------------ array_shift()
    window.cmSnip(`array_shift($\{});$\{}`, {
        label: "array_shift()",
        detail: "Array",
        type: "method",
        info: `The array_shift() function removes the first element from an array, and returns the value of the removed element.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> If the keys are numeric, all elements will get new keys, starting from 0 and increases by 1.`
    }),
    //? ------------------ array_slice()
    window.cmSnip(`array_slice($\{});$\{}`, {
        label: "array_slice()",
        detail: "Array",
        type: "method",
        info: `The array_slice() function returns selected parts of an array.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> If the array have string keys, the returned array will always preserve the keys.`
    }),
    //? ------------------ array_splice()
    window.cmSnip(`array_splice($\{});$\{}`, {
        label: "array_splice()",
        detail: "Array",
        type: "method",
        info: `The array_splice() function removes selected elements from an array and replaces it with new elements. The function also returns an array with the removed elements.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> If the function does not remove any elements (length=0), the replaced array will be inserted from the position of the start parameter.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> The keys in the replaced array are not preserved.`
    }),
    //? ------------------ array_sum()
    window.cmSnip(`array_sum($\{});$\{}`, {
        label: "array_sum()",
        detail: "Array",
        type: "method",
        info: `The array_sum() function returns the sum of all the values in the array.`
    }),
    //? ------------------ array_udiff()
    window.cmSnip(`array_udiff($\{});$\{}`, {
        label: "array_udiff()",
        detail: "Array",
        type: "method",
        info: `The array_udiff() function compares <b>the values</b> of two or more arrays, and returns the differences.`
    }),
    //? ------------------ array_udiff_assoc()
    window.cmSnip(`array_udiff_assoc($\{});$\{}`, {
        label: "array_udiff_assoc()",
        detail: "Array",
        type: "method",
        info: `The array_udiff_assoc() function compares <b>the keys and values</b> of two or more arrays, and returns the differences.`
    }),
    //? ------------------ array_udiff_uassoc()
    window.cmSnip(`array_udiff_uassoc($\{});$\{}`, {
        label: "array_udiff_uassoc()",
        detail: "Array",
        type: "method",
        info: `The array_udiff_uassoc() function compares <b>the keys and values</b> of two or more arrays, and returns the differences.`
    }),
    //? ------------------ array_uintersect()
    window.cmSnip(`array_uintersect($\{});$\{}`, {
        label: "array_uintersect()",
        detail: "Array",
        type: "method",
        info: `The array_uintersect() function compares <b>the values</b> of two or more arrays, and returns the matches.`
    }),
    //? ------------------ array_uintersect_assoc()
    window.cmSnip(`array_uintersect_assoc($\{});$\{}`, {
        label: "array_uintersect_assoc()",
        detail: "Array",
        type: "method",
        info: `The array_uintersect_assoc() function compares <b>the keys and values</b> of two or more arrays, and returns the matches.`
    }),
    //? ------------------ array_uintersect_uassoc()
    window.cmSnip(`array_uintersect_uassoc($\{});$\{}`, {
        label: "array_uintersect_uassoc()",
        detail: "Array",
        type: "method",
        info: `The array_uintersect_uassoc() function compares <b>the keys and values</b> of two or more arrays, and returns the matches.`
    }),
    //? ------------------ array_unique()
    window.cmSnip(`array_unique($\{});$\{}`, {
        label: "array_unique()",
        detail: "Array",
        type: "method",
        info: `The array_unique() function removes duplicate values from an array. If two or more array values are the same, the first appearance will be kept and the other will be removed.`
    }),
    //? ------------------ array_unshift()
    window.cmSnip(`array_unshift($\{});$\{}`, {
        label: "array_unshift()",
        detail: "Array",
        type: "method",
        info: `The array_unshift() function inserts new elements to an array. The new array values will be inserted in the beginning of the array. `
    }),
    //? ------------------ array_values()
    window.cmSnip(`array_values($\{});$\{}`, {
        label: "array_values()",
        detail: "Array",
        type: "method",
        info: `The array_values() function returns an array containing all the values of an array.`
    }),
    //? ------------------ array_walk()
    window.cmSnip(`array_walk($\{});$\{}`, {
        label: "array_walk()",
        detail: "Array",
        type: "method",
        info: `The array_walk() function runs each array element in a user-defined function. The array's keys and values are parameters in the function.`
    }),
    //? ------------------ array_walk_recursive()
    window.cmSnip(`array_walk_recursive($\{});$\{}`, {
        label: "array_walk_recursive()",
        detail: "Array",
        type: "method",
        info: `The array_walk_recursive() function runs each array element in a user-defined function. The array's keys and values are parameters in the function. The difference between this function and the array_walk() function is that with this function you can work with deeper arrays (an array inside an array).`
    }),
    //? ------------------ arsort()
    window.cmSnip(`arsort($\{});$\{}`, {
        label: "arsort()",
        detail: "Array",
        type: "method",
        info: `The arsort() function sorts an associative array in descending order, according to the value.`
    }),
    //? ------------------ asort()
    window.cmSnip(`asort($\{});$\{}`, {
        label: "asort()",
        detail: "Array",
        type: "method",
        info: `The asort() function sorts an associative array in ascending order, according to the value.`
    }),
    //? ------------------ compact()
    window.cmSnip(`compact($\{});$\{}`, {
        label: "compact()",
        detail: "Array",
        type: "method",
        info: `The compact() function creates an array from variables and their values.`
    }),
    //? ------------------ count()
    window.cmSnip(`count($\{});$\{}`, {
        label: "count()",
        detail: "Array",
        type: "method",
        info: `The count() function returns the number of elements in an array.`
    }),
    //? ------------------ current()
    window.cmSnip(`current($\{});$\{}`, {
        label: "current()",
        detail: "Array",
        type: "method",
        info: `The current() function returns the value of the current element in an array.<br><br>
Every array has an internal pointer to its "current" element, which is initialized to the first element inserted into the array. `
    }),
    //? ------------------ end()
    window.cmSnip(`end($\{});$\{}`, {
        label: "end()",
        detail: "Array",
        type: "method",
        info: `The end() function moves the internal pointer to, and outputs, the last element in the array.`
    }),
    //? ------------------ extract()
    window.cmSnip(`extract($\{});$\{}`, {
        label: "extract()",
        detail: "Array",
        type: "method",
        info: `The extract() function imports variables into the local symbol table from an array.`
    }),
    //? ------------------ in_array()
    window.cmSnip(`in_array($\{});$\{}`, {
        label: "in_array()",
        detail: "Array",
        type: "method",
        info: `The in_array() function searches an array for a specific value.`
    }),
    //? ------------------ key()
    window.cmSnip(`key($\{});$\{}`, {
        label: "key()",
        detail: "Array",
        type: "method",
        info: `The key() function returns the element key from the current internal pointer position.<br><br>
This function returns FALSE on error.`
    }),
    //? ------------------ krsort()
    window.cmSnip(`ksort($\{});$\{}`, {
        label: "ksort()",
        detail: "Array",
        type: "method",
        info: `The ksort() function sorts an associative array in descending order, according to the key.`
    }),
    //? ------------------ ksort()
    window.cmSnip(`ksort($\{});$\{}`, {
        label: "ksort()",
        detail: "Array",
        type: "method",
        info: `The ksort() function sorts an associative array in ascending order, according to the key.`
    }),
    //? ------------------ list()
    window.cmSnip(`list($\{});$\{}`, {
        label: "list()",
        detail: "Array",
        type: "method",
        info: `The list() function is used to assign values to a list of variables in one operation.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> Prior to PHP 7.1, this function only worked on numerical arrays.`
    }),
    //? ------------------ natcasesort()
    window.cmSnip(`natcasesort($\{});$\{}`, {
        label: "natcasesort()",
        detail: "Array",
        type: "method",
        info: `The natcasesort() function sorts an array by using a "natural order" algorithm. The values keep their original keys.<br><br>
In a natural algorithm, the number 2 is less than the number 10. In computer sorting, 10 is less than 2, because the first number in "10" is less than 2.<br><br>
This function is case-insensitive.`
    }),
    //? ------------------ natsort()
    window.cmSnip(`natsort($\{});$\{}`, {
        label: "natsort()",
        detail: "Array",
        type: "method",
        info: `The natsort()  function sorts an array by using a "natural order" algorithm. The values keep their original keys.<br><br>
In a natural algorithm, the number 2 is less than the number 10. In computer sorting, 10 is less than 2, because the first number in "10" is less than 2.`
    }),
    //? ------------------ next()
    window.cmSnip(`next($\{});$\{}`, {
        label: "next()",
        detail: "Array",
        type: "method",
        info: `The next() function moves the internal pointer to, and outputs, the next element in the array.`
    }),
    //? ------------------ pos()
    window.cmSnip(`pos($\{});$\{}`, {
        label: "pos()",
        detail: "Array",
        type: "method",
        info: `The pos() function returns the value of the current element in an array.<br><br>
This function is an alias of the current() function.<br><br>
Every array has an internal pointer to its "current" element, which is initialized to the first element inserted into the array.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> This function does not move the arrays internal pointer.`
    }),
    //? ------------------ prev()
    window.cmSnip(`prev($\{});$\{}`, {
        label: "prev()",
        detail: "Array",
        type: "method",
        info: `The prev() function moves the internal pointer to, and outputs, the previous element in the array.`
    }),
    //? ------------------ range()
    window.cmSnip(`range($\{});$\{}`, {
        label: "range()",
        detail: "Array",
        type: "method",
        info: `The range() function creates an array containing a range of elements.<br><br>
This function returns an array of elements from low to high.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> If the low parameter is higher than the high parameter, the range array will be from high to low.`
    }),
    //? ------------------ reset()
    window.cmSnip(`reset($\{});$\{}`, {
        label: "reset()",
        detail: "Array",
        type: "method",
        info: `The reset() function moves the internal pointer to the first element of the array.`
    }),
    //? ------------------ rsort()
    window.cmSnip(`rsort($\{});$\{}`, {
        label: "rsort()",
        detail: "Array",
        type: "method",
        info: `The rsort() function sorts an indexed array in descending order.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Use the sort() function to sort an indexed array in ascending order.`
    }),
    //? ------------------ shuffle()
    window.cmSnip(`shuffle($\{});$\{}`, {
        label: "shuffle()",
        detail: "Array",
        type: "method",
        info: `The shuffle() function randomizes the order of the elements in the array.<br><br>
This function assigns new keys for the elements in the array. Existing keys will be removed.`
    }),
    //? ------------------ sizeof()
    window.cmSnip(`sizeof($\{});$\{}`, {
        label: "sizeof()",
        detail: "Array",
        type: "method",
        info: `The sizeof() function returns the number of elements in an array.<br><br>
The sizeof() function is an alias of the count() function.`
    }),
    //? ------------------ sort()
    window.cmSnip(`sort($\{});$\{}`, {
        label: "sort()",
        detail: "Array",
        type: "method",
        info: `The sort() function sorts an indexed array in ascending order.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Use the rsort() function to sort an indexed array in descending order.`
    }),
    //? ------------------ uasort()
    window.cmSnip(`uasort($\{});$\{}`, {
        label: "uasort()",
        detail: "Array",
        type: "method",
        info: `The uasort() function sorts an array by values using a user-defined comparison function and maintains the index association.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Use the uksort() function to sort an array by keys using a user-defined comparison function.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Use the usort() function to sort an array by values using a user-defined comparison function.`
    }),
    //? ------------------ uksort()
    window.cmSnip(`uksort($\{});$\{}`, {
        label: "uksort()",
        detail: "Array",
        type: "method",
        info: `The uksort() function sorts an array by keys using a user-defined comparison function.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Use the uasort() function to sort an array by values (and maintain the index association) using a user-defined comparison function.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Use the usort() function to sort an array by values using a user-defined comparison function. `
    }),
    //? ------------------ usort()
    window.cmSnip(`usort($\{});$\{}`, {
        label: "usort()",
        detail: "Array",
        type: "method",
        info: `The usort() function sorts an array by values using a user-defined comparison function.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Use the uksort() function to sort an array by keys using a user-defined comparison function.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Use the uasort() function to sort an array by values (and maintain the index association) using a user-defined comparison function. `
    })
]