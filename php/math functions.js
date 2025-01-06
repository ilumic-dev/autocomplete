const mathFunctions = [
    snip(`abs($\{});$\{}`, {
        label: "abs()",
        detail: "Math",
        type: "method",
        info: `The abs() function returns the absolute value of a number.`
    }),
    snip(`acos($\{});$\{}`, {
        label: "acos()",
        detail: "Math",
        type: "method",
        info: `The acos() function returns the arc cosine of a number.`
    }),
    snip(`acosh($\{});$\{}`, {
        label: "acosh()",
        detail: "Math",
        type: "method",
        info: `The acosh() function returns the inverse hyperbolic cosine of a number.`
    }),
    snip(`asin($\{});$\{}`, {
        label: "asin()",
        detail: "Math",
        type: "method",
        info: `The asin() function returns the arc sine of a number.`
    }),
    snip(`asinh($\{});$\{}`, {
        label: "asinh()",
        detail: "Math",
        type: "method",
        info: `The asinh() function returns the inverse hyperbolic sine of a number.`
    }),
    snip(`atan($\{});$\{}`, {
        label: "atan()",
        detail: "Math",
        type: "method",
        info: `The atan() function returns the arc tangent of a number.`
    }),
    snip(`atan2($\{});$\{}`, {
        label: "atan2()",
        detail: "Math",
        type: "method",
        info: `The atan2() function returns the arc tangent of two variables x and y.`
    }),
    snip(`atanh($\{});$\{}`, {
        label: "atanh()",
        detail: "Math",
        type: "method",
        info: `The atanh() function returns the inverse hyperbolic tangent of a number.`
    }),
    snip(`base_convert($\{});$\{}`, {
        label: "base_convert()",
        detail: "Math",
        type: "method",
        info: `The base_convert() function converts a number from one number base to another.`
    }),
    snip(`bindec($\{});$\{}`, {
        label: "bindec()",
        detail: "Math",
        type: "method",
        info: `The bindec() function converts a binary number to a decimal number.`
    }),
    snip(`ceil($\{});$\{}`, {
        label: "ceil()",
        detail: "Math",
        type: "method",
        info: `The ceil() function rounds a number up to the nearest integer.`
    }),
    snip(`cos($\{});$\{}`, {
        label: "cos()",
        detail: "Math",
        type: "method",
        info: `The cos() function returns the cosine of a number.`
    }),
    snip(`cosh($\{});$\{}`, {
        label: "cosh()",
        detail: "Math",
        type: "method",
        info: `The cosh() function returns the hyperbolic cosine of a number.`
    }),
    snip(`decbin($\{});$\{}`, {
        label: "decbin()",
        detail: "Math",
        type: "method",
        info: `The decbin() function converts a decimal number to a binary number.`
    }),
    snip(`dechex($\{});$\{}`, {
        label: "dechex()",
        detail: "Math",
        type: "method",
        info: `The dechex() function converts a decimal number to a hexadecimal number.`
    }),
    snip(`decoct($\{});$\{}`, {
        label: "decoct()",
        detail: "Math",
        type: "method",
        info: `The decoct() function converts a decimal number to an octal number.`
    }),
    snip(`deg2rad($\{});$\{}`, {
        label: "deg2rad()",
        detail: "Math",
        type: "method",
        info: `The deg2rad() function converts a degree value to a radian value.`
    }),
    snip(`exp($\{});$\{}`, {
        label: "exp()",
        detail: "Math",
        type: "method",
        info: `The exp() function calculates the exponent of e.`
    }),
    snip(`expm1($\{});$\{}`, {
        label: "expm1()",
        detail: "Math",
        type: "method",
        info: `The expm1() function returns exp(x) - 1.`
    }),
    snip(`floor($\{});$\{}`, {
        label: "floor()",
        detail: "Math",
        type: "method",
        info: `The floor() function rounds a number down to the nearest integer.`
    }),
    snip(`fmod($\{});$\{}`, {
        label: "fmod()",
        detail: "Math",
        type: "method",
        info: `The fmod() function returns the remainder of x/y.`
    }),
    snip(`getrandmax($\{});$\{}`, {
        label: "getrandmax()",
        detail: "Math",
        type: "method",
        info: `The getrandmax() function returns the largest possible value returned by rand().`
    }),
    snip(`hexdec($\{});$\{}`, {
        label: "hexdec()",
        detail: "Math",
        type: "method",
        info: `The hexdec() function converts a hexadecimal number to a decimal number.`
    }),
    snip(`hypot($\{});$\{}`, {
        label: "hypot()",
        detail: "Math",
        type: "method",
        info: `The hypot() function calculates the hypotenuse of a right-angle triangle.`
    }),
    snip(`intdiv($\{});$\{}`, {
        label: "intdiv()",
        detail: "Math",
        type: "method",
        info: `The intdiv() function performs integer division.`
    }),
    snip(`is_finite($\{});$\{}`, {
        label: "is_finite()",
        detail: "Math",
        type: "method",
        info: `The is_finite() function checks whether a value is finite or not.`
    }),
    snip(`is_infinite($\{});$\{}`, {
        label: "is_infinite()",
        detail: "Math",
        type: "method",
        info: `The is_infinite() function checks whether a value is infinite or not.`
    }),
    snip(`is_nan($\{});$\{}`, {
        label: "is_nan()",
        detail: "Math",
        type: "method",
        info: `The is_nan() function checks whether a value is 'not-a-number'.`
    }),
    snip(`lcg_value($\{});$\{}`, {
        label: "lcg_value()",
        detail: "Math",
        type: "method",
        info: `The lcg_value() function returns a pseudo random number in a range between 0 and 1.`
    }),
    snip(`log($\{});$\{}`, {
        label: "log()",
        detail: "Math",
        type: "method",
        info: `The log() function returns the natural logarithm of a number.`
    }),
    snip(`log10($\{});$\{}`, {
        label: "log10()",
        detail: "Math",
        type: "method",
        info: `The log10() function returns the base-10 logarithm of a number.`
    }),
    snip(`log1p($\{});$\{}`, {
        label: "log1p()",
        detail: "Math",
        type: "method",
        info: `The log1p() function returns log(1+number).`
    }),
    snip(`max($\{});$\{}`, {
        label: "max()",
        detail: "Math",
        type: "method",
        info: `The max() function returns the highest value in an array, or the highest value of several specified values.`
    }),
    snip(`min($\{});$\{}`, {
        label: "min()",
        detail: "Math",
        type: "method",
        info: `The min() function returns the lowest value in an array, or the lowest value of several specified values.`
    }),
    snip(`mt_getrandmax($\{});$\{}`, {
        label: "mt_getrandmax()",
        detail: "Math",
        type: "method",
        info: `The mt_getrandmax() function returns the largest possible value returned by mt_rand().`
    }),
    snip(`mt_rand($\{});$\{}`, {
        label: "mt_rand()",
        detail: "Math",
        type: "method",
        info: `The mt_rand() function generates a random integer using Mersenne Twister algorithm.`
    }),
    snip(`mt_srand($\{});$\{}`, {
        label: "mt_srand()",
        detail: "Math",
        type: "method",
        info: `The mt_srand() function seeds the Mersenne Twister random number generator.`
    }),
    snip(`octdec($\{});$\{}`, {
        label: "octdec()",
        detail: "Math",
        type: "method",
        info: `The octdec() function converts an octal number to a decimal number.`
    }),
    snip(`pi($\{});$\{}`, {
        label: "pi()",
        detail: "Math",
        type: "method",
        info: `The pi() function returns the value of PI.`
    }),
    snip(`pow($\{});$\{}`, {
        label: "pow()",
        detail: "Math",
        type: "method",
        info: `The pow() function returns x raised to the power of y.`
    }),
    snip(`rad2deg($\{});$\{}`, {
        label: "rad2deg()",
        detail: "Math",
        type: "method",
        info: `The rad2deg() function converts a radian value to a degree value.`
    }),
    snip(`rand($\{});$\{}`, {
        label: "rand()",
        detail: "Math",
        type: "method",
        info: `The rand() function generates a random integer.`
    }),
    snip(`round($\{});$\{}`, {
        label: "round()",
        detail: "Math",
        type: "method",
        info: `The round() function rounds a floating-point number.`
    }),
    snip(`sin($\{});$\{}`, {
        label: "sin()",
        detail: "Math",
        type: "method",
        info: `The sin() function returns the sine of a number.`
    }),
    snip(`sinh($\{});$\{}`, {
        label: "sinh()",
        detail: "Math",
        type: "method",
        info: `The sinh() function returns the hyperbolic sine of a number.`
    }),
    snip(`sqrt($\{});$\{}`, {
        label: "sqrt()",
        detail: "Math",
        type: "method",
        info: `The sqrt() function returns the square root of a number.`
    }),
    snip(`srand($\{});$\{}`, {
        label: "srand()",
        detail: "Math",
        type: "method",
        info: `The srand() function seeds the random number generator.`
    }),
    snip(`tan($\{});$\{}`, {
        label: "tan()",
        detail: "Math",
        type: "method",
        info: `The tan() function returns the tangent of a number.`
    }),
    snip(`tanh($\{});$\{}`, {
        label: "tanh()",
        detail: "Math",
        type: "method",
        info: `The tanh() function returns the hyperbolic tangent of a number.`
    }),
];