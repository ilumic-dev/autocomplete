const networkFunctions = [
    snip(`checkdnsrr($\{});$\{}`, {
        label: "checkdnsrr()",
        detail: "Network",
        type: "method",
        info: `The checkdnsrr() function checks DNS records for type corresponding to host.`
    }),
    snip(`closelog($\{});$\{}`, {
        label: "closelog()",
        detail: "Network",
        type: "method",
        info: `The closelog() function closes the connection of system logger.`
    }),
    snip(`define_syslog_variables($\{});$\{}`, {
        label: "define_syslog_variables()",
        detail: "Network",
        type: "method",
        info: `The define_syslog_variables() function deprecated and removed in PHP 5.4. Initializes the variables used in syslog functions.`
    }),
    snip(`dns_check_record($\{});$\{}`, {
        label: "dns_check_record()",
        detail: "Network",
        type: "method",
        info: `The dns_check_record() function alias of checkdnsrr().`
    }),
    snip(`dns_get_mx($\{});$\{}`, {
        label: "dns_get_mx()",
        detail: "Network",
        type: "method",
        info: `The dns_get_mx() function alias of getmxrr().`
    }),
    snip(`dns_get_record($\{});$\{}`, {
        label: "dns_get_record()",
        detail: "Network",
        type: "method",
        info: `The dns_get_record() function gets the DNS resource records associated with the specified hostname.`
    }),
    snip(`fsockopen($\{});$\{}`, {
        label: "fsockopen()",
        detail: "Network",
        type: "method",
        info: `The fsockopen() function opens an Internet or Unix domain socket connection.`
    }),
    snip(`gethostbyaddr($\{});$\{}`, {
        label: "gethostbyaddr()",
        detail: "Network",
        type: "method",
        info: `The gethostbyaddr() function returns the domain name for a given IP address.`
    }),
    snip(`gethostbyname($\{});$\{}`, {
        label: "gethostbyname()",
        detail: "Network",
        type: "method",
        info: `The gethostbyname() function returns the IPv4 address for a given domain/host name.`
    }),
    snip(`gethostbynamel($\{});$\{}`, {
        label: "gethostbynamel()",
        detail: "Network",
        type: "method",
        info: `The gethostbynamel() function returns a list of IPv4 address for a given domain/host name.`
    }),
    snip(`gethostname($\{});$\{}`, {
        label: "gethostname()",
        detail: "Network",
        type: "method",
        info: `The gethostname() function returns the host name.`
    }),
    snip(`getmxrr($\{});$\{}`, {
        label: "getmxrr()",
        detail: "Network",
        type: "method",
        info: `The getmxrr() function returns the MX records for the specified internet host name.`
    }),
    snip(`getprotobyname($\{});$\{}`, {
        label: "getprotobyname()",
        detail: "Network",
        type: "method",
        info: `The getprotobyname() function returns the protocol number for a given protocol name.`
    }),
    snip(`getprotobynumber($\{});$\{}`, {
        label: "getprotobynumber()",
        detail: "Network",
        type: "method",
        info: `The getprotobynumber() function returns the protocol name for a given protocol number.`
    }),
    snip(`getservbyname($\{});$\{}`, {
        label: "getservbyname()",
        detail: "Network",
        type: "method",
        info: `The getservbyname() function returns the port number for a given Internet service and protocol.`
    }),
    snip(`getservbyport($\{});$\{}`, {
        label: "getservbyport()",
        detail: "Network",
        type: "method",
        info: `The getservbyport() function returns the Internet service for a given port and protocol.`
    }),
    snip(`header_register_callback($\{});$\{}`, {
        label: "header_register_callback()",
        detail: "Network",
        type: "method",
        info: `The header_register_callback() function calls a header function.`
    }),
    snip(`header_remove($\{});$\{}`, {
        label: "header_remove()",
        detail: "Network",
        type: "method",
        info: `The header_remove() function removes an HTTP header previously set with the <code>header()</code> function.`
    }),
    snip(`header($\{});$\{}`, {
        label: "header()",
        detail: "Network",
        type: "method",
        info: `The header() function sends a raw HTTP header to a client.`
    }),
    snip(`headers_list($\{});$\{}`, {
        label: "headers_list()",
        detail: "Network",
        type: "method",
        info: `The headers_list() function returns a list of response headers to be sent to the browser.`
    }),
    snip(`headers_sent($\{});$\{}`, {
        label: "headers_sent()",
        detail: "Network",
        type: "method",
        info: `The headers_sent() function checks if/where headers have been sent.`
    }),
    snip(`http_response_code($\{});$\{}`, {
        label: "http_response_code()",
        detail: "Network",
        type: "method",
        info: `The http_response_code() function sets or returns the HTTP response status code.`
    }),
    snip(`inet_ntop($\{});$\{}`, {
        label: "inet_ntop()",
        detail: "Network",
        type: "method",
        info: `The inet_ntop() function converts a 32bit IPv4 or 128bit IPv6 address into a readable format.`
    }),
    snip(`inet_pton($\{});$\{}`, {
        label: "inet_pton()",
        detail: "Network",
        type: "method",
        info: `The inet_pton() function converts a readable IP address into a packed 32bit IPv4 or 128bit IPv6 format.`
    }),
    snip(`ip2long($\{});$\{}`, {
        label: "ip2long()",
        detail: "Network",
        type: "method",
        info: `The ip2long() function converts an IPv4 address into a long integer.`
    }),
    snip(`long2ip($\{});$\{}`, {
        label: "long2ip()",
        detail: "Network",
        type: "method",
        info: `The long2ip() function converts a long integer address into a string in IPv4 format.`
    }),
    snip(`openlog($\{});$\{}`, {
        label: "openlog()",
        detail: "Network",
        type: "method",
        info: `The openlog() function opens the connection of system logger.`
    }),
    snip(`pfsockopen($\{});$\{}`, {
        label: "pfsockopen()",
        detail: "Network",
        type: "method",
        info: `The pfsockopen() function opens a persistent Internet or Unix domain socket connection.`
    }),
    snip(`setcookie($\{});$\{}`, {
        label: "setcookie()",
        detail: "Network",
        type: "method",
        info: `The setcookie() function defines a cookie to be sent along with the rest of the HTTP headers.`
    }),
    snip(`setrawcookie($\{});$\{}`, {
        label: "setrawcookie()",
        detail: "Network",
        type: "method",
        info: `The setrawcookie() function defines a cookie (without URL encoding) to be sent along with the rest of the HTTP headers.`
    }),
    snip(`socket_get_status($\{});$\{}`, {
        label: "socket_get_status()",
        detail: "Network",
        type: "method",
        info: `The socket_get_status() function alias of stream_get_meta_data().`
    }),
    snip(`socket_set_blocking($\{});$\{}`, {
        label: "socket_set_blocking()",
        detail: "Network",
        type: "method",
        info: `The socket_set_blocking() function alias of stream_set_blocking().`
    }),
    snip(`socket_set_timeout($\{});$\{}`, {
        label: "socket_set_timeout()",
        detail: "Network",
        type: "method",
        info: `The socket_set_timeout() function alias of stream_set_timeout().`
    }),
    snip(`syslog($\{});$\{}`, {
        label: "syslog()",
        detail: "Network",
        type: "method",
        info: `The syslog() function generates a system log message.`
    }),
];

export default networkFunctions;