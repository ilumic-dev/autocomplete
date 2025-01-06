globalThis.libxmlFunctions = [
    snip(`libxml_clear_errors();$\{}`, {
        label: "libxml_clear_errors()",
        detail: "LibXML",
        type: "method",
        info: `The libxml_clear_errors() function clears the libxml error buffer.`
    }),
    snip(`libxml_disable_entity_loader();$\{}`, {
        label: "libxml_disable_entity_loader()",
        detail: "LibXML",
        type: "method",
        info: `The libxml_disable_entity_loader() function enables the ability to load external entities.`
    }),
    snip(`libxml_get_errors();$\{}`, {
        label: "libxml_get_errors()",
        detail: "LibXML",
        type: "method",
        info: `The libxml_get_errors() function gets the errors from the the libxml error buffer.`
    }),
    snip(`libxml_get_last_error();$\{}`, {
        label: "libxml_get_last_error()",
        detail: "LibXML",
        type: "method",
        info: `The libxml_get_last_error() function gets the last error from the the libxml error buffer.`
    }),
    snip(`libxml_set_external_entity_loader($\{});$\{}`, {
        label: "libxml_set_external_entity_loader()",
        detail: "LibXML",
        type: "method",
        info: `The libxml_set_external_entity_loader() function changes the default external entity loader.`
    }),
    snip(`libxml_set_streams_context($\{});$\{}`, {
        label: "libxml_set_streams_context()",
        detail: "LibXML",
        type: "method",
        info: `The libxml_set_streams_context() function sets the streams context for the next libxml document load or write.`
    }),
    snip(`libxml_use_internal_errors($\{});$\{}`, {
        label: "libxml_use_internal_errors()",
        detail: "LibXML",
        type: "method",
        info: `The libxml_use_internal_errors() function disables the standard libxml errors and enables user error handling.`
    }),
];