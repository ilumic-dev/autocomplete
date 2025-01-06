const variableHandlingFunctions = [
    snip(`boolval($\{mixed});$\{}`, {
        label: "boolval()",
        type: "method",
        info: `The boolval() function returns the boolean value of a variable.`
    }),
    snip(`debug_zval_dump($\{mixed});$\{}`, {
        label: "debug_zval_dump()",
        type: "method",
        info: `The debug_zval_dump() function dumps a string representation of an internal zend value to output.`
    }),
    snip(`doubleval($\{mixed});$\{}`, {
        label: "doubleval()",
        type: "method",
        info: `The doubleval() function returns the float value of a variable.`
    }),
    snip(`empty($\{mixed});$\{}`, {
        label: "empty()",
        type: "method",
        info: `The empty() function checks whether a variable is empty.`
    }),
    snip(`floatval($\{mixed});$\{}`, {
        label: "floatval()",
        type: "method",
        info: `The floatval() function returns the float value of a variable.`
    }),
    snip(`get_defined_vars($\{void});$\{}`, {
        label: "get_defined_vars()",
        type: "method",
        info: `The get_defined_vars() function returns all defined variables, as an array.`
    }),
    snip(`get_resource_type($\{resource});$\{}`, {
        label: "get_resource_type()",
        type: "method",
        info: `The get_resource_type() function returns the type of a resource.`
    }),
    snip(`gettype($\{mixed});$\{}`, {
        label: "gettype()",
        type: "method",
        info: `The gettype() function returns the type of a variable.`
    }),
    snip(`intval($\{mixed});$\{}`, {
        label: "intval()",
        type: "method",
        info: `The intval() function returns the integer value of a variable.`
    }),
    snip(`is_array($\{mixed});$\{}`, {
        label: "is_array()",
        type: "method",
        info: `The is_array() function checks whether a variable is an array.`
    }),
    snip(`is_bool($\{mixed});$\{}`, {
        label: "is_bool()",
        type: "method",
        info: `The is_bool() function checks whether a variable is a boolean.`
    }),
    snip(`is_callable($\{mixed}, $\{bool}, $\{bool});$\{}`, {
        label: "is_callable()",
        type: "method",
        info: `The is_callable() function checks whether the contents of a variable can be called as a function.`
    }),
    snip(`is_countable($\{mixed});$\{}`, {
        label: "is_countable()",
        type: "method",
        info: `The is_countable() function checks whether the contents of a variable is a countable value.`
    }),
    snip(`is_double($\{mixed});$\{}`, {
        label: "is_double()",
        type: "method",
        info: `The is_double() function alias of is_float().`
    }),
    snip(`is_float($\{mixed});$\{}`, {
        label: "is_float()",
        type: "method",
        info: `The is_float() function checks whether a variable is of type float.`
    }),
    snip(`is_int($\{mixed});$\{}`, {
        label: "is_int()",
        type: "method",
        info: `The is_int() function checks whether a variable is of type integer.`
    }),
    snip(`is_integer($\{mixed});$\{}`, {
        label: "is_integer()",
        type: "method",
        info: `The is_integer() function alias of is_int().`
    }),
    snip(`is_iterable($\{mixed});$\{}`, {
        label: "is_iterable()",
        type: "method",
        info: `The is_iterable() function checks whether the contents of a variable is an iterable value.`
    }),
    snip(`is_long($\{mixed});$\{}`, {
        label: "is_long()",
        type: "method",
        info: `The is_long() function alias of is_int().`
    }),
    snip(`is_null($\{mixed});$\{}`, {
        label: "is_null()",
        type: "method",
        info: `The is_null() function checks whether a variable is NULL.`
    }),
    snip(`is_numeric($\{mixed});$\{}`, {
        label: "is_numeric()",
        type: "method",
        info: `The is_numeric() function checks whether a variable is a number or a numeric string.`
    }),
    snip(`is_object($\{mixed});$\{}`, {
        label: "is_object()",
        type: "method",
        info: `The is_object() function checks whether a variable is an object.`
    }),
    snip(`is_real($\{mixed});$\{}`, {
        label: "is_real()",
        type: "method",
        info: `The is_real() function alias of is_float().`
    }),
    snip(`is_resource($\{mixed});$\{}`, {
        label: "is_resource()",
        type: "method",
        info: `The is_resource() function checks whether a variable is a resource.`
    }),
    snip(`is_scalar($\{mixed});$\{}`, {
        label: "is_scalar()",
        type: "method",
        info: `The is_scalar() function checks whether a variable is a scalar.`
    }),
    snip(`is_string($\{mixed});$\{}`, {
        label: "is_string()",
        type: "method",
        info: `The is_string() function checks whether a variable is of type string.`
    }),
    snip(`print_r($\{mixed}, $\{bool}, $\{int});$\{}`, {
        label: "print_r()",
        type: "method",
        info: `The print_r() function prints the information about a variable in a more human-readable way.`
    }),
    snip(`serialize($\{mixed});$\{}`, {
        label: "serialize()",
        type: "method",
        info: `The serialize() function converts a storable representation of a value to a string.`
    }),
    snip(`settype($\{mixed}, $\{string});$\{}`, {
        label: "settype()",
        type: "method",
        info: `The settype() function converts a variable to a specific type.`
    }),
    snip(`strval($\{mixed});$\{}`, {
        label: "strval()",
        type: "method",
        info: `The strval() function returns the string value of a variable.`
    }),
    snip(`unserialize($\{string});$\{}`, {
        label: "unserialize()",
        type: "method",
        info: `The unserialize() function converts serialized data back into actual data.`
    }),
    snip(`unset($\{mixed});$\{}`, {
        label: "unset()",
        type: "method",
        info: `The unset() function unsets a variable.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> If multiple variables are supplied, then this function will unset all of them.<br><br>
<b class="info-tip"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg><span>Tip:</span></b> This function is not case-sensitive.`
    }),
    snip(`var_dump($\{mixed}, $\{mixed}, $\{mixed}, ...$);\$\{}`, {
        label: "var_dump()",
        type: "method",
        info: `The var_dump() function dumps information about one or more variables.<br><br>
<b class="info-note"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span>Note:</span></b> This function is not case-sensitive.`
    }),
    snip(`var_export($\{mixed}, $\{bool});$\{}`, {
        label: "var_export()",
        type: "method",
        info: `The var_export() function returns structured information (valid PHP code) about a variable.`
    }),
];