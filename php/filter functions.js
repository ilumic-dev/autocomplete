

const filterFunctions = [
    //? ------------------ filter_has_var()
    snip(`filter_has_var($\{input_type}, $\{variable_name});$\{}`, {
        label: "filter_has_var()",
        detail: "Filter",
        type: "method",
        info: `The filter_has_var() function checks whether a variable of a specified input type exist.<br><br>
This function checks the content received by the PHP page, so the variable must be sent to the page via e.g a querystring.`
    }),
    //? ------------------ filter_id()
    snip(`filter_id($\{filter_name});$\{}`, {
        label: "filter_id()",
        detail: "Filter",
        type: "method",
        info: `The filter_id() function returns the filter ID of a specified filter name.`
    }),
    //? ------------------ filter_input()
    snip(`filter_input($\{input_type}, $\{variable_name}, $\{filter}, $\{options});$\{}`, {
        label: "filter_input()",
        detail: "Filter",
        type: "method",
        info: `The filter_input() function gets an external variable (e.g. from form input) and optionally filters it.<br><br>
This function is used to validate variables from insecure sources, such as user input.`
    }),
    //? ------------------ filter_input_array()
    snip(`filter_input_array($\{input_types}, $\{definition});$\{}`, {
        label: "filter_input_array()",
        detail: "Filter",
        type: "method",
        info: `The filter_input_array() function gets external variables (e.g. from form input) and optionally filters them.<br><br>
This function is useful for retrieving/filtering many values instead of calling filter_input() many times.`
    }),
    //? ------------------ filter_list()
    snip(`filter_list();$\{}`, {
        label: "filter_list()",
        detail: "Filter",
        type: "method",
        info: `The filter_list() function returns a list of all supported filter names.`
    }),
    //? ------------------ filter_var()
    snip(`filter_var($\{variable}, $\{filter}, $\{options});$\{}`, {
        label: "filter_var()",
        detail: "Filter",
        type: "method",
        info: `The filter_var() function filters a variable with a specified filter.`
    }),
    //? ------------------ filter_var_array()
    snip(`filter_var_array($\{data}, $\{definition});$\{}`, {
        label: "filter_var_array()",
        detail: "Filter",
        type: "method",
        info: `The filter_var_array() function gets multiple variables and optionally filters them.<br><br>
This function is useful for filtering many values without calling filter_var() many times.`
    }),
];

export default filterFunctions;