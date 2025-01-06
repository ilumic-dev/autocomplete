globalThis.xmlParserFunctions = [
    snip(`utf8_decode($\{string});$\{}`, {
        label: "utf8_decode()",
        detail: "XML Parser",
        type: "method",
        info: `The utf8_decode() function decodes a UTF-8 string to ISO-8859-1.<br><br>
This function decodes a string, previously encoded with the <code>utf8_encode()</code> function, back to ISO-8859-1.`
    }),
    snip(`utf8_encode($\{string});$\{}`, {
        label: "utf8_encode()",
        detail: "XML Parser",
        type: "method",
        info: `The utf8_encode() function encodes an ISO-8859-1 string to UTF-8.<br><br>
Unicode is a universal standard, and has been developed to describe all possible characters of all languages plus a lot of symbols with one unique number for each character/symbol.<br><br>
However, it is not always possible to transfer a Unicode character to another computer reliably. UTF-8 has been developed to transfer a Unicode character from one computer to another.`
    }),
    snip(`xml_error_string($\{integer});$\{}`, {
        label: "xml_error_string()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_error_string() function returns an error string from the XML parser.`
    }),
    snip(`xml_get_current_byte_index($\{resource});$\{}`, {
        label: "xml_get_current_byte_index()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_get_current_byte_index() function returns the current byte index from the XML parser.`
    }),
    snip(`xml_get_current_column_number($\{resource});$\{}`, {
        label: "xml_get_current_column_number()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_get_current_column_number() function returns the current column number from the XML parser.`
    }),
    snip(`xml_get_current_line_number($\{resource});$\{}`, {
        label: "xml_get_current_line_number()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_get_current_line_number() function returns the current line number from the XML parser.`
    }),
    snip(`xml_get_error_code($\{resource});$\{}`, {
        label: "xml_get_error_code()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_get_error_code() function returns an error code from the XML parser.`
    }),
    snip(`xml_parse($\{resource}, $\{string}, $\{bool}, $\{int});$\{}`, {
        label: "xml_parse()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_parse() function parses an XML document.`
    }),
    snip(`xml_parse_into_struct($\{resource}, $\{string}, $\{array}, $\{array});$\{}`, {
        label: "xml_parse_into_struct()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_parse_into_struct() function parses XML data into an array.`
    }),
    snip(`xml_parser_create_ns($\{string}, $\{string});$\{}`, {
        label: "xml_parser_create_ns()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_parser_create_ns() function creates an XML parser with namespace support.`
    }),
    snip(`xml_parser_create($\{string});$\{}`, {
        label: "xml_parser_create()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_parser_create() function creates an XML parser.`
    }),
    snip(`xml_parser_free($\{resource});$\{}`, {
        label: "xml_parser_free()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_parser_free() function frees an XML parser.`
    }),
    snip(`xml_parser_get_option($\{resource}, $\{int});$\{}`, {
        label: "xml_parser_get_option()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_parser_get_option() function returns options from an XML parser.`
    }),
    snip(`xml_parser_set_option($\{resource}, $\{int}, $\{mixed});$\{}`, {
        label: "xml_parser_set_option()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_parser_set_option() function sets options in an XML parser.`
    }),
    snip(`xml_set_character_data_handler($\{resource}, $\{callable});$\{}`, {
        label: "xml_set_character_data_handler()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_set_character_data_handler() function sets up the character data handler for the XML parser.`
    }),
    snip(`xml_set_default_handler($\{resource}, $\{callable});$\{}`, {
        label: "xml_set_default_handler()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_set_default_handler() function sets up the default data handler for the XML parser.`
    }),
    snip(`xml_set_element_handler($\{resource}, $\{callable}, $\{callable});$\{}`, {
        label: "xml_set_element_handler()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_set_element_handler() function sets up the element handler for the XML parser.`
    }),
    snip(`xml_set_end_namespace_decl_handler($\{resource}, $\{callable});$\{}`, {
        label: "xml_set_end_namespace_decl_handler()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_set_end_namespace_decl_handler() function sets up the end namespace declaration handler for the XML parser.`
    }),
    snip(`xml_set_external_entity_ref_handler($\{resource}, $\{callable});$\{}`, {
        label: "xml_set_external_entity_ref_handler()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_set_external_entity_ref_handler() function sets up the external entity reference handler for the XML parser.`
    }),
    snip(`xml_set_notation_decl_handler($\{resource}, $\{callable});$\{}`, {
        label: "xml_set_notation_decl_handler()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_set_notation_decl_handler() function sets up the notation declaration handler for the XML parser.`
    }),
    snip(`xml_set_object($\{resource}, $\{object});$\{}`, {
        label: "xml_set_object()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_set_object() function allows to use XML parser within an object.`
    }),
    snip(`xml_set_processing_instruction_handler($\{resource}, $\{callable});$\{}`, {
        label: "xml_set_processing_instruction_handler()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_set_processing_instruction_handler() function sets up the processing instruction handler for the XML parser.`
    }),
    snip(`xml_set_start_namespace_decl_handler($\{resource}, $\{callable});$\{}`, {
        label: "xml_set_start_namespace_decl_handler()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_set_start_namespace_decl_handler() function sets up the start namespace declaration handler for the XML parser.`
    }),
    snip(`xml_set_unparsed_entity_decl_handler($\{resource}, $\{callable});$\{}`, {
        label: "xml_set_unparsed_entity_decl_handler()",
        detail: "XML Parser",
        type: "method",
        info: `The xml_set_unparsed_entity_decl_handler() function sets up the unparsed entity declaration handler for the XML parser.`
    }),
];
