

const dateFunctions = [
    //? ------------------ checkdate()
    snip(`checkdate($\{month}, $\{day}, $\{year});$\{}`, {
        label: "checkdate()",
        detail: "Date",
        type: "method",
        info: `The checkdate() function is used to validate a Gregorian date.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The checkdate() function is binary-safe.`
    }),
    //? ------------------ date_add()
    snip(`date_add($\{date}, $\{interval});$\{}`, {
        label: "date_add()",
        detail: "Date",
        type: "method",
        info: `The date_add() function adds some days, months, years, hours, minutes, and seconds to a date.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The date_add() function is binary-safe.`
    }),
    //? ------------------ date_create_from_format()
    snip(`date_create_from_format($\{format}, $\{time});$\{}`, {
        label: "date_create_from_format()",
        detail: "Date",
        type: "method",
        info: `The date_create_from_format() function returns a new DateTime object formatted according to
the specified format.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ date_create()
    snip(`date_create($\{time});$\{}`, {
        label: "date_create()",
        detail: "Date",
        type: "method",
        info: `The date_create() function returns a new DateTime object.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ date_date_set()
    snip(`date_date_set($\{object}, $\{year}, $\{month}, $\{day});$\{}`, {
        label: "date_date_set()",
        detail: "Date",
        type: "method",
        info: `The date_date_set() function sets a new date.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The date_date_set() function is binary-safe.`
    }),
    //? ------------------ date_default_timezone_get()
    snip(`date_default_timezone_get();$\{}`, {
        label: "date_default_timezone_get()",
        detail: "Date",
        type: "method",
        info: `The date_default_timezone_get() function returns the default timezone used by all date/time functions in the script.`
    }),
    //? ------------------ date_default_timezone_set()
    snip(`date_default_timezone_set($\{timezone});$\{}`, {
        label: "date_default_timezone_set()",
        detail: "Date",
        type: "method",
        info: `The date_default_timezone_set() function sets the default timezone used by all date/time functions in the script.`
    }),
    //? ------------------ date_diff()
    snip(`date_diff($\{object}, $\{object});$\{}`, {
        label: "date_diff()",
        detail: "Date",
        type: "method",
        info: `The date_diff() function returns the difference between two DateTime objects.`
    }),
    //? ------------------ date_format()
    snip(`date_format($\{object}, $\{format});$\{}`, {
        label: "date_format()",
        detail: "Date",
        type: "method",
        info: `The date_format() function returns a date formatted according to the specified format.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function does not use locales (all output is in
English).<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> Also look at the date() function, which formats a local date/time.`
    }),
    //? ------------------ date_get_last_errors()
    snip(`date_get_last_errors();$\{}`, {
        label: "date_get_last_errors()",
        detail: "Date",
        type: "method",
        info: `The date_get_last_errors() function returns the warnings/errors found while parsing a date string.`
    }),
    //? ------------------ date_interval_create_from_date_string()
    snip(`date_interval_create_from_date_string($\{time});$\{}`, {
        label: "date_interval_create_from_date_string()",
        detail: "Date",
        type: "method",
        info: `The date_interval_create_from_date_string() function sets up a DateInterval from the relative parts of the string.`
    }),
    //? ------------------ date_interval_format()
    snip(`date_interval_format($\{object}, $\{format});$\{}`, {
        label: "date_interval_format()",
        detail: "Date",
        type: "method",
        info: `The date_interval_format() function is an alias of DateInterval::format().<br><br>
The DateInterval::format() function is used to format the interval.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ date_isodate_set()
    snip(`date_isodate_set($\{object}, $\{year}, $\{week}, $\{day});$\{}`, {
        label: "date_isodate_set()",
        detail: "Date",
        type: "method",
        info: `The date_isodate_set() function sets a date according to the ISO 8601 standard, using weeks and day
offsets (instead of using a specific date).<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The date_isodate_set() function is binary-safe.`
    }),
    //? ------------------ date_modify()
    snip(`date_modify($\{object}, $\{modify});$\{}`, {
        label: "date_modify()",
        detail: "Date",
        type: "method",
        info: `The date_modify() function modifies the timestamp.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The date_modify() function is binary-safe.`
    }),
    //? ------------------ date_offset_get()
    snip(`date_offset_get($\{object});$\{}`, {
        label: "date_offset_get()",
        detail: "Date",
        type: "method",
        info: `The date_offset_get() function returns the timezone offset.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The date_offset_get() function is binary-safe.`
    }),
    //? ------------------ date_parse_from_format()
    snip(`date_parse_from_format($\{format}, $\{time});$\{}`, {
        label: "date_parse_from_format()",
        detail: "Date",
        type: "method",
        info: `The date_parse_from_format() function returns an associative array with detailed information about
a specified date, according to the specified format.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ date_parse()
    snip(`date_parse($\{time});$\{}`, {
        label: "date_parse()",
        detail: "Date",
        type: "method",
        info: `The date_parse() function returns an associative array with detailed information about a specified date.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is binary-safe.`
    }),
    //? ------------------ date_sub()
    snip(`date_sub($\{object}, $\{interval});$\{}`, {
        label: "date_sub()",
        detail: "Date",
        type: "method",
        info: `The date_sub() function subtracts some days, months, years, hours, minutes, and seconds from a date.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The date_sub() function is binary-safe.`
    }),
    //? ------------------ date_sun_info()
    snip(`date_sun_info($\{time}, $\{latitude}, $\{longitude});$\{}`, {
        label: "date_sun_info()",
        detail: "Date",
        type: "method",
        info: `The date_sun_info() function returns an array containing information about sunset/sunrise
and twilight begin/end, for a specified day and location.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> Look at the date_sunrise() function
to return the sunrise time for a specified day and location.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> Look at the date_sunset() function to return the sunset time for a specified day and location.`
    }),
    //? ------------------ date_sunrise()
    snip(`date_sunrise($\{time}, $\{latitude}, $\{longitude});$\{}`, {
        label: "date_sunrise()",
        detail: "Date",
        type: "method",
        info: `The date_sunrise() function returns the sunrise time for a specified day and location.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> Look at the date_sunset() function
to return the sunset time for a specified day and location.`
    }),
    //? ------------------ date_sunset()
    snip(`date_sunset($\{time}, $\{latitude}, $\{longitude});$\{}`, {
        label: "date_sunset()",
        detail: "Date",
        type: "method",
        info: `The date_sunset() function returns the sunset time for a specified day and location.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> Look at the date_sunrise() function
to return the sunrise time for a specified day and location.`
    }),
    //? ------------------ date_time_set()
    snip(`date_time_set($\{object}, $\{hour}, $\{minute}, $\{second});$\{}`, {
        label: "date_time_set()",
        detail: "Date",
        type: "method",
        info: `The date_time_set() function sets the time.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The date_time_set() function is binary-safe.`
    }),
    //? ------------------ date_timestamp_get()
    snip(`date_timestamp_get($\{object});$\{}`, {
        label: "date_timestamp_get()",
        detail: "Date",
        type: "method",
        info: `The date_timestamp_get() function returns the Unix timestamp.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The date_timestamp_get() function is binary-safe.`
    }),
    //? ------------------ date_timestamp_set()
    snip(`date_timestamp_set($\{object}, $\{unixtimestamp});$\{}`, {
        label: "date_timestamp_set()",
        detail: "Date",
        type: "method",
        info: `The date_timestamp_set() function sets the date and time based on a Unix timestamp.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The date_timestamp_set() function is binary-safe.`
    }),
    //? ------------------ date_timezone_get()
    snip(`date_timezone_get($\{object});$\{}`, {
        label: "date_timezone_get()",
        detail: "Date",
        type: "method",
        info: `The date_timezone_get() function returns the time zone of the given DateTime object.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The date_timezone_get() function is binary-safe.`
    }),
    //? ------------------ date_timezone_set()
    snip(`date_timezone_set($\{object}, $\{timezone});$\{}`, {
        label: "date_timezone_set()",
        detail: "Date",
        type: "method",
        info: `The date_timezone_set() function sets the time zone for the DateTime object.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The date_timezone_set() function is binary-safe.`
    }),
    //? ------------------ date()
    snip(`date($\{format}, $\{timestamp});$\{}`, {
        label: "date()",
        detail: "Date",
        type: "method",
        info: `The date() function formats a local date and time, and returns the formatted date string.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function does not use locales (all output is in
English).<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> Also look at the date()
function, which formats a local date/time.`
    }),
    //? ------------------ getdate()
    snip(`getdate($\{timestamp});$\{}`, {
        label: "getdate()",
        detail: "Date",
        type: "method",
        info: `The getdate() function returns date/time information of a timestamp or the current local date/time.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The getdate() function is binary-safe.`
    }),
    //? ------------------ gettimeofday()
    snip(`gettimeofday($\{returnfloat});$\{}`, {
        label: "gettimeofday()",
        detail: "Date",
        type: "method",
        info: `The gettimeofday() function returns the current time.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The gettimeofday() function is binary-safe.`
    }),
    //? ------------------ gmdate()
    snip(`gmdate($\{format}, $\{timestamp});$\{}`, {
        label: "gmdate()",
        detail: "Date",
        type: "method",
        info: `The gmdate() function formats a GMT/UTC date and time, and returns the formatted date string.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function does not use locales (all output is in
English).<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> Also look at the date()
function, which formats a local date/time.`
    }),
    //? ------------------ gmmktime()
    snip(`gmmktime($\{hour}, $\{minute}, $\{second}, $\{month}, $\{day}, $\{year});$\{}`, {
        label: "gmmktime()",
        detail: "Date",
        type: "method",
        info: `The gmmktime() function returns the Unix timestamp for a GMT date.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> This function is identical to mktime()
except the passed parameters represents a GMT date.`
    }),
    //? ------------------ gmstrftime()
    snip(`gmstrftime($\{format}, $\{timestamp});$\{}`, {
        label: "gmstrftime()",
        detail: "Date",
        type: "method",
        info: `The gmstrftime() function formats a GMT/UTC time and/or date according to locale settings.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> Also look at the strftime() function,
which formats a local time and/or date according to locale settings.`
    }),
    //? ------------------ idate()
    snip(`idate($\{format}, $\{timestamp});$\{}`, {
        label: "idate()",
        detail: "Date",
        type: "method",
        info: `The idate() function formats a local time and/or date as integer.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The idate() function accepts just one character in the <i>format</i> parameter!
`
    }),
    //? ------------------ localtime()
    snip(`localtime($\{timestamp}, $\{associativeArray});$\{}`, {
        label: "localtime()",
        detail: "Date",
        type: "method",
        info: `The localtime() function returns the local time.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The localtime() function is binary-safe.`
    }),
    //? ------------------ microtime()
    snip(`microtime($\{getAsFloat});$\{}`, {
        label: "microtime()",
        detail: "Date",
        type: "method",
        info: `The microtime() function returns the current Unix timestamp with microseconds.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> The microtime() function is binary-safe.`
    }),
    //? ------------------ mktime()
    snip(`mktime($\{hour}, $\{minute}, $\{second}, $\{month}, $\{day}, $\{year});$\{}`, {
        label: "mktime()",
        detail: "Date",
        type: "method",
        info: `The mktime() function returns the Unix timestamp for a date.<br><br>    
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> This function is identical to gmmktime() except the passed parameters
represents a date (not a GMT date).`
    }),
    //? ------------------ strftime()
    snip(`strftime($\{format}, $\{timestamp});$\{}`, {
        label: "strftime()",
        detail: "Date",
        type: "method",
        info: `The strftime() function formats a local time and/or date according to locale settings.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> Also look at the gmstrftime() function,
which formats a GMT/UTC time and/or date according to locale settings.`
    }),
    //? ------------------ strptime()
    snip(`strptime($\{date}, $\{format});$\{}`, {
        label: "strptime()",
        detail: "Date",
        type: "method",
        info: `The strptime() function parses a time/date generated with strftime().<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is not implemented on Windows platforms!
`
    }),
    //? ------------------ strtotime()
    snip(`strtotime($\{time});$\{}`, {
        label: "strtotime()",
        detail: "Date",
        type: "method",
        info: `The strtotime() function parses an English textual datetime into a
Unix timestamp (the number of seconds since January 1 1970 00:00:00 GMT).<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> If the year is specified in a two-digit format, values between 0-69 are mapped to 2000-2069
and values between 70-100 are mapped to 1970-2000.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> Be aware of dates in the m/d/y or d-m-y formats; if
the separator is a slash (/), then the American m/d/y is assumed. If the
separator is a dash (-) or a dot (.), then the European d-m-y format is assumed.
To avoid potential errors, you should YYYY-MM-DD dates or
date_create_from_format() when possible.`
    }),
    //? ------------------ time()
    snip(`time($\{returnfloat});$\{}`, {
        label: "time()",
        detail: "Date",
        type: "method",
        info: `The time() function returns the current time in the number of seconds since
the Unix Epoch (January 1 1970 00:00:00 GMT).`
    }),
    //? ------------------ timezone_abbreviations_list()
    snip(`timezone_abbreviations_list($\{what});$\{}`, {
        label: "timezone_abbreviations_list()",
        detail: "Date",
        type: "method",
        info: `The timezone_abbreviations_list() returns an associative array containing dst, offset, and the timezone name.`
    }),
    //? ------------------ timezone_identifiers_list()
    snip(`timezone_identifiers_list($\{what});$\{}`, {
        label: "timezone_identifiers_list()",
        detail: "Date",
        type: "method",
        info: `The timezone_identifiers_list() returns an indexed array containing all timezone identifiers.`
    }),
    //? ------------------ timezone_location_get()
    snip(`timezone_location_get($\{object});$\{}`, {
        label: "timezone_location_get()",
        detail: "Date",
        type: "method",
        info: `The timezone_location_get() returns location information for the given timezone.`
    }),
    //? ------------------ timezone_name_from_abbr()
    snip(`timezone_name_from_abbr($\{abbr}, $\{gmtOffset});$\{}`, {
        label: "timezone_name_from_abbr()",
        detail: "Date",
        type: "method",
        info: `The timezone_name_from_abbr() returns the timezone name from abbreviation.`
    }),
    //? ------------------ timezone_name_get()
    snip(`timezone_name_get($\{object});$\{}`, {
        label: "timezone_name_get()",
        detail: "Date",
        type: "method",
        info: `The timezone_name_get() returns the name of the timezone.`
    }),
    //? ------------------ timezone_offset_get()
    snip(`timezone_offset_get($\{object});$\{}`, {
        label: "timezone_offset_get()",
        detail: "Date",
        type: "method",
        info: `The timezone_offset_get() returns the timezone offset from GMT.`
    }),
    //? ------------------ timezone_open()
    snip(`timezone_open($\{timezone});$\{}`, {
        label: "timezone_open()",
        detail: "Date",
        type: "method",
        info: `The timezone_open() creates a new DateTimeZone object.`
    }),
    //? ------------------ timezone_transitions_get()
    snip(`timezone_transitions_get($\{object});$\{}`, {
        label: "timezone_transitions_get()",
        detail: "Date",
        type: "method",
        info: `The timezone_transitions_get() returns all transitions for the timezone.`
    }),
    //? ------------------ timezone_version_get()
    snip(`timezone_version_get();$\{}`, {
        label: "timezone_version_get()",
        detail: "Date",
        type: "method",
        info: `The timezone_version_get() function returns the version of the timezonedb.`
    }),
]

export default dateFunctions;