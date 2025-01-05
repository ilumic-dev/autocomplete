

const calendarFunctions = [
    //? ------------------ cal_days_in_month()
    snip(`cal_days_in_month($\{calendar}, $\{month}, $\{year});$\{}`, {
        label: "cal_days_in_month()",
        detail: "Calendar",
        type: "method",
        info: `The cal_days_in_month() function returns the number of days in a month for a specified year and calendar.`
    }),
    //? ------------------ cal_from_jd()
    snip(`cal_from_jd($\{jd}, $\{calendar});$\{}`, {
        label: "cal_from_jd()",
        detail: "Calendar",
        type: "method",
        info: `The cal_from_jd() function converts a Julian Day Count into a date of a specified calendar.`
    }),
    //? ------------------ cal_info()
    snip(`cal_info($\{});$\{}`, {
        label: "cal_info()",
        detail: "Calendar",
        type: "method",
        info: `The cal_info() function returns information about a specified calendar.`
    }),
    //? ------------------ cal_to_jd()
    snip(`cal_to_jd($\{calendar}, $\{month}, $\{day}, $\{year});$\{}`, {
        label: "cal_to_jd()",
        detail: "Calendar",
        type: "method",
        info: `The cal_to_jd() function converts a date in a specified calendar to Julian Day Count.`
    }),
    //? ------------------ easter_date()
    snip(`easter_date($\{});$\{}`, {
        label: "easter_date()",
        detail: "Calendar",
        type: "method",
        info: `The easter_date() function returns the Unix timestamp for midnight on Easter of a given year.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> The date of Easter Day is defined as the Sunday after the first full moon which falls on or after the Spring Equinox (21st March).`
    }),
    //? ------------------ easter_days()
    snip(`easter_days($\{});$\{}`, {
        label: "easter_days()",
        detail: "Calendar",
        type: "method",
        info: `The easter_days() function returns the number of days after March 21, that the Easter Day is in the given year.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> The date of Easter Day is defined as the Sunday after the first full moon which falls on or after the Spring Equinox (21st March).`
    }),
    //? ------------------ frenchtojd()
    snip(`frenchtojd($\{month}, $\{day}, $\{year});$\{}`, {
        label: "frenchtojd()",
        detail: "Calendar",
        type: "method",
        info: `The frenchtojd() function converts a date from the French Republican Calendar to a Julian Day Count.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> The French Republican Calendar is a calendar proposed during the French Revolution, and used by the French government for about twelve years from late 1793. This function only convert dates in years 1 through 14 (Gregorian dates 22 September 1792 - 22 September 1806).<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Look at the jdtofrench() function to convert a Julian Day Count to a French Republican date.`
    }),
    //? ------------------ gregoriantojd()
    snip(`gregoriantojd($\{month}, $\{day}, $\{year});$\{}`, {
        label: "gregoriantojd()",
        detail: "Calendar",
        type: "method",
        info: `The gregoriantojd() function converts a date from the Gregorian Calendar to a Julian Day Count.<br><br>
<b class="info-note"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg> <span>Note:</span></b> Although this function can handle dates back to 4714 B.C., notice that the Gregorian calendar was not instituted until 1582, and some countries did not accept it until much later (Britain converted in 1752, USSR in 1918, and Greece in 1923). Most European countries used the Julian calendar prior the Gregorian.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Look at the jdtogregorian() function to convert a Julian Day Count to a Gregorian date.`
    }),
    //? ------------------ jddayoftheweek()
    snip(`jddayoftheweek($\{jd});$\{}`, {
        label: "jddayoftheweek()",
        detail: "Calendar",
        type: "method",
        info: `The jddayofweek() function returns the day of the week for a given Julian Day Count.`
    }),
    //? ------------------ jdmonthname()
    snip(`jdmonthname($\{jd});$\{}`, {
        label: "jdmonthname()",
        detail: "Calendar",
        type: "method",
        info: `The jdmonthname() function returns the name of the month for a given Julian Day Count.`
    }),
    //? ------------------ jdtofrench()
    snip(`jdtofrench($\{jd});$\{}`, {
        label: "jdtofrench()",
        detail: "Calendar",
        type: "method",
        info: `The jdtofrench() function converts a Julian Day Count to a French Republican date.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Look at the frenchtojd() function to convert a French Republican date to a Julian Day Count.`
    }),
    //? ------------------ jdtogregorian()
    snip(`jdtogregorian($\{jd});$\{}`, {
        label: "jdtogregorian()",
        detail: "Calendar",
        type: "method",
        info: `The jdtogregorian() function converts a Julian Day Count to a Gregorian date.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Look at the gregoriantojd() function to convert a Gregorian date to a Julian Day Count.`
    }),
    //? ------------------ jdtojewish()
    snip(`jdtojewish($\{jd});$\{}`, {
        label: "jdtojewish()",
        detail: "Calendar",
        type: "method",
        info: `The jdtojewish() function converts a Julian Day Count to a Jewish date.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Look at the jewishtojd() function to convert a Jewish date to a Julian Day Count.`
    }),
    //? ------------------ jdtojulian()
    snip(`jdtojulian($\{jd});$\{}`, {
        label: "jdtojulian()",
        detail: "Calendar",
        type: "method",
        info: `The jdtojulian() function converts a Julian Day Count to a Julian date.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Look at the juliantojd() function to convert a Julian date to a Julian Day Count.`
    }),
    //? ------------------ jdtounix()
    snip(`jdtounix($\{jd});$\{}`, {
        label: "jdtounix()",
        detail: "Calendar",
        type: "method",
        info: `The jdtounix() function converts a Julian Day Count to a Unix timestamp.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Look at the unixtojd() function to convert a Unix timestamp to a Julian Day Count.`
    }),
    //? ------------------ jewishtojd()
    snip(`jewishtojd($\{month}, $\{day}, $\{year});$\{}`, {
        label: "jewishtojd()",
        detail: "Calendar",
        type: "method",
        info: `The jewishtojd() function converts a date from the Jewish Calendar to a Julian Day Count.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Look at the jdtojewish() function to convert a Jewish date to a Julian Day Count.`
    }),
    //? ------------------ juliantojd()
    snip(`juliantojd($\{month}, $\{day}, $\{year});$\{}`, {
        label: "juliantojd()",
        detail: "Calendar",
        type: "method",
        info: `The juliantojd() function converts a date from the Julian Calendar to a Julian Day Count.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Look at the jdtojulian() function to convert a Julian date to a Julian Day Count.`
    }),
    //? ------------------ unixtojd()
    snip(`unixtojd($\{});$\{}`, {
        label: "unixtojd()",
        detail: "Calendar",
        type: "method",
        info: `The unixtojd() function converts a Unix timestamp to a Julian Day Count.<br><br>
<b class="info-tip"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg> <span>Tip:</span></b></b> Look at the jdtounix() function to convert a Julian Day Count to a Unix timestamp.`
    })
]

export default calendarFunctions;