

const mysqliFunctions = [
    snip(`mysqli_affected_rows($\{});$\{}`, {
        label: "mysqli_affected_rows()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_affected_rows() function returns the number of affected rows in the previous MySQL operation.`
    }),
    snip(`mysqli_autocommit($\{});$\{}`, {
        label: "mysqli_autocommit()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_autocommit() function turns on or off auto-committing database modifications.`
    }),
    snip(`mysqli_begin_transaction($\{});$\{}`, {
        label: "mysqli_begin_transaction()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_begin_transaction() function starts a transaction.`
    }),
    snip(`mysqli_change_user($\{});$\{}`, {
        label: "mysqli_change_user()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_change_user() function changes the user of the specified database connection.`
    }),
    snip(`mysqli_character_set_name($\{});$\{}`, {
        label: "mysqli_character_set_name()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_character_set_name() function returns the default character set for the database connection.`
    }),
    snip(`mysqli_close($\{});$\{}`, {
        label: "mysqli_close()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_close() function closes a previously opened database connection.`
    }),
    snip(`mysqli_commit($\{});$\{}`, {
        label: "mysqli_commit()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_commit() function commits the current transaction.`
    }),
    snip(`mysqli_connect_errno($\{});$\{}`, {
        label: "mysqli_connect_errno()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_connect_errno() function returns the error number of the last failed connection attempt.`
    }),
    snip(`mysqli_connect_error($\{});$\{}`, {
        label: "mysqli_connect_error()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_connect_error() function returns the error message of the last failed connection attempt.`
    }),
    snip(`mysqli_connect_error_list($\{});$\{}`, {
        label: "mysqli_connect_error_list()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_connect_error_list() function returns a list of errors for the most recent function call.`
    }),
    snip(`mysqli_data_seek($\{});$\{}`, {
        label: "mysqli_data_seek()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_data_seek() function adjusts the result pointer to an arbitrary row in the result-set.`
    }),
    snip(`mysqli_debug($\{});$\{}`, {
        label: "mysqli_debug()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_debug() function performs debugging operations.`
    }),
    snip(`mysqli_dump_debug_info($\{});$\{}`, {
        label: "mysqli_dump_debug_info()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_dump_debug_info() function dumps debugging info into the log.`
    }),
    snip(`mysqli_errno($\{});$\{}`, {
        label: "mysqli_errno()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_errno() function returns the last error code for the most recent function call.`
    }),
    snip(`mysqli_error($\{});$\{}`, {
        label: "mysqli_error()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_error() function returns the last error description for the most recent function call.`
    }),
    snip(`mysqli_error_list($\{});$\{}`, {
        label: "mysqli_error_list()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_error_list() function returns a list of errors for the most recent function call.`
    }),
    snip(`mysqli_fetch_all($\{});$\{}`, {
        label: "mysqli_fetch_all()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_fetch_all() function fetches all result rows as an associative array, a numeric array, or both.`
    }),
    snip(`mysqli_fetch_array($\{});$\{}`, {
        label: "mysqli_fetch_array()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_fetch_array() function fetches a result row as an associative, a numeric array, or both.`
    }),
    snip(`mysqli_fetch_assoc($\{});$\{}`, {
        label: "mysqli_fetch_assoc()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_fetch_assoc() function fetches a result row as an associative array.`
    }),
    snip(`mysqli_fetch_field($\{});$\{}`, {
        label: "mysqli_fetch_field()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_fetch_field() function returns the next field in the result-set, as an object.`
    }),
    snip(`mysqli_fetch_field_direct($\{});$\{}`, {
        label: "mysqli_fetch_field_direct()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_fetch_field_direct() function returns meta-data for a single field in the result-set, as an object.`
    }),
    snip(`mysqli_fetch_fields($\{});$\{}`, {
        label: "mysqli_fetch_fields()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_fetch_fields() function returns an array of objects that represent the fields in a result-set.`
    }),
    snip(`mysqli_fetch_lengths($\{});$\{}`, {
        label: "mysqli_fetch_lengths()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_fetch_lengths() function returns the lengths of the columns of the current row in the result-set.`
    }),
    snip(`mysqli_fetch_object($\{});$\{}`, {
        label: "mysqli_fetch_object()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_fetch_object() function returns the current row of a result-set, as an object.`
    }),
    snip(`mysqli_fetch_row($\{});$\{}`, {
        label: "mysqli_fetch_row()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_fetch_row() function fetches one row from a result-set and returns it as an enumerated array.`
    }),
    snip(`mysqli_field_count($\{});$\{}`, {
        label: "mysqli_field_count()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_field_count() function returns the number of columns for the most recent query.`
    }),
    snip(`mysqli_field_seek($\{});$\{}`, {
        label: "mysqli_field_seek()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_field_seek() function sets the field cursor to the given field offset.`
    }),
    snip(`mysqli_get_charset($\{});$\{}`, {
        label: "mysqli_get_charset()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_get_charset() function returns a character set object.`
    }),
    snip(`mysqli_get_client_info($\{});$\{}`, {
        label: "mysqli_get_client_info()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_get_client_info() function returns the MySQL client library version.`
    }),
    snip(`mysqli_get_client_stats($\{});$\{}`, {
        label: "mysqli_get_client_stats()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_get_client_stats() function returns statistics about client per-process.`
    }),
    snip(`mysqli_get_client_version($\{});$\{}`, {
        label: "mysqli_get_client_version()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_get_client_version() function returns the MySQL client library version as an integer.`
    }),
    snip(`mysqli_get_connection_stats($\{});$\{}`, {
        label: "mysqli_get_connection_stats()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_get_connection_stats() function returns statistics about the client connection.`
    }),
    snip(`mysqli_get_host_info($\{});$\{}`, {
        label: "mysqli_get_host_info()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_get_host_info() function returns the MySQL server hostname and the connection type.`
    }),
    snip(`mysqli_get_proto_info($\{});$\{}`, {
        label: "mysqli_get_proto_info()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_get_proto_info() function returns the MySQL protocol version.`
    }),
    snip(`mysqli_get_server_info($\{});$\{}`, {
        label: "mysqli_get_server_info()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_get_server_info() function returns the MySQL server version.`
    }),
    snip(`mysqli_get_server_version($\{});$\{}`, {
        label: "mysqli_get_server_version()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_get_server_version() function returns the MySQL server version as an integer.`
    }),
    snip(`mysqli_get_warnings($\{});$\{}`, {
        label: "mysqli_get_warnings()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_get_warnings() function returns information about the last executed query.`
    }),
    snip(`mysqli_info($\{});$\{}`, {
        label: "mysqli_info()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_info() function returns information about the last executed query.`
    }),
    snip(`mysqli_init($\{});$\{}`, {
        label: "mysqli_init()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_init() function initializes MySQLi and returns a resource for use with real_connect().`
    }),
    snip(`mysqli_insert_id($\{});$\{}`, {
        label: "mysqli_insert_id()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_insert_id() function returns the auto-generated id from the last query.`
    }),
    snip(`mysqli_kill($\{});$\{}`, {
        label: "mysqli_kill()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_kill() function asks the server to kill a MySQL thread.`
    }),
    snip(`mysqli_more_results($\{});$\{}`, {
        label: "mysqli_more_results()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_more_results() function checks if there are more results from a multi query.`
    }),
    snip(`mysqli_multi_query($\{});$\{}`, {
        label: "mysqli_multi_query()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_multi_query() function performs one or more queries on the database.`
    }),
    snip(`mysqli_next_result($\{});$\{}`, {
        label: "mysqli_next_result()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_next_result() function prepares the next result-set from multi_query().`
    }),
    snip(`mysqli_options($\{});$\{}`, {
        label: "mysqli_options()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_options() function sets extra connect options and affect behavior for a connection.`
    }),
    snip(`mysqli_ping($\{});$\{}`, {
        label: "mysqli_ping()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_ping() function pings a server connection, or tries to reconnect if the connection has gone down.`
    }),
    snip(`mysqli_poll($\{});$\{}`, {
        label: "mysqli_poll()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_poll() function polls connections.`
    }),
    snip(`mysqli_prepare($\{});$\{}`, {
        label: "mysqli_prepare()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_prepare() function prepares an SQL statement for execution.`
    }),
    snip(`mysqli_query($\{});$\{}`, {
        label: "mysqli_query()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_query() function performs a query against a database.`
    }),
    snip(`mysqli_real_connect($\{});$\{}`, {
        label: "mysqli_real_connect()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_real_connect() function opens a new connection to the MySQL server.`
    }),
    snip(`mysqli_real_escape_string($\{});$\{}`, {
        label: "mysqli_real_escape_string()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_real_escape_string() function escapes special characters in a string for use in an SQL statement.`
    }),
    snip(`mysqli_real_query($\{});$\{}`, {
        label: "mysqli_real_query()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_real_query() function executes a single SQL query.`
    }),
    snip(`mysqli_reap_async_query($\{});$\{}`, {
        label: "mysqli_reap_async_query()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_reap_async_query() function returns result from an async SQL query.`
    }),
    snip(`mysqli_refresh($\{});$\{}`, {
        label: "mysqli_refresh()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_refresh() function refreshes/flushes tables or caches, or resets the replication server information.`
    }),
    snip(`mysqli_rollback($\{});$\{}`, {
        label: "mysqli_rollback()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_rollback() function rolls back the current transaction for the database.`
    }),
    snip(`mysqli_select_db($\{});$\{}`, {
        label: "mysqli_select_db()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_select_db() function selects the default database for database queries.`
    }),
    snip(`mysqli_set_charset($\{});$\{}`, {
        label: "mysqli_set_charset()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_set_charset() function sets the default client character set.`
    }),
    snip(`mysqli_set_local_infile_default($\{});$\{}`, {
        label: "mysqli_set_local_infile_default()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_set_local_infile_default() function unsets user defined handler for load local infile command.`
    }),
    snip(`mysqli_set_local_infile_handler($\{});$\{}`, {
        label: "mysqli_set_local_infile_handler()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_set_local_infile_handler() function set callback function for LOAD DATA LOCAL INFILE command.`
    }),
    snip(`mysqli_sqlstate($\{});$\{}`, {
        label: "mysqli_sqlstate()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_sqlstate() function returns the SQLSTATE error code for the error.`
    }),
    snip(`mysqli_ssl_set($\{});$\{}`, {
        label: "mysqli_ssl_set()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_ssl_set() function used to establish secure connections using SSL.`
    }),
    snip(`mysqli_stat($\{});$\{}`, {
        label: "mysqli_stat()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_stat() function returns the current system status.`
    }),
    snip(`mysqli_stmt_init($\{});$\{}`, {
        label: "mysqli_stmt_init()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_stmt_init() function initializes a statement and returns an object for use with stmt_prepare().`
    }),
    snip(`mysqli_store_result($\{});$\{}`, {
        label: "mysqli_store_result()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_store_result() function transfers a result-set from the last query executed to a client-side result set.`
    }),
    snip(`mysqli_thread_id($\{});$\{}`, {
        label: "mysqli_thread_id()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_thread_id() function returns the thread ID for the current connection.`
    }),
    snip(`mysqli_thread_safe($\{});$\{}`, {
        label: "mysqli_thread_safe()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_thread_safe() function returns whether the client library is compiled as thread-safe.`
    }),
    snip(`mysqli_use_result($\{});$\{}`, {
        label: "mysqli_use_result()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_use_result() function initiates the retrieval of a result-set from the last query executed.`
    }),
    snip(`mysqli_warning_count($\{});$\{}`, {
        label: "mysqli_warning_count()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_warning_count() function returns the number of warnings from the last query in the connection.`
    }),
    snip(`mysqli_stmt_bind_param($\{});$\{}`, {
        label: "mysqli_stmt_bind_param()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_stmt_bind_param() function binds variables to a prepared statement as parameters.`
    }),
    snip(`mysqli_stmt_bind_result($\{});$\{}`, {
        label: "mysqli_stmt_bind_result()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_stmt_bind_result() function binds variables to a prepared statement for result storage.`
    }),
    snip(`mysqli_stmt_close($\{});$\{}`, {
        label: "mysqli_stmt_close()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_stmt_close() function closes a prepared statement.`
    }),
    snip(`mysqli("$\{localhost}", "$\{username}", "$\{password}", "$\{dbname}");$\{}`, {
        label: "mysqli()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli() function opens a new connection to the MySQL server.`
    }),
    snip(`mysqli_stmt_execute($\{});$\{}`, {
        label: "mysqli_stmt_execute()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_stmt_execute() function executes a prepared statement.`
    }),
    snip(`mysqli_stmt_fetch($\{});$\{}`, {
        label: "mysqli_stmt_fetch()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_stmt_fetch() function fetches the result from a prepared statement.`
    }),
    snip(`mysqli_stmt_get_result($\{});$\{}`, {
        label: "mysqli_stmt_get_result()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_stmt_get_result() function gets a result set from a prepared statement.`
    }),
    snip(`mysqli_stmt_num_rows($\{});$\{}`, {
        label: "mysqli_stmt_num_rows()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_stmt_num_rows() function returns the number of rows in a result set from a prepared statement.`
    }),
    snip(`mysqli_stmt_store_result($\{});$\{}`, {
        label: "mysqli_stmt_store_result()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_stmt_store_result() function transfers the result set from the prepared statement to the client.`
    }),
    snip(`mysqli_free_result($\{});$\{}`, {
        label: "mysqli_free_result()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_free_result() function frees the memory associated with a result.`
    }),
    snip(`mysqli_report($\{});$\{}`, {
        label: "mysqli_report()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_report() function sets the reporting level for errors and/or warnings.`
    }),
    snip(`mysqli_savepoint($\{});$\{}`, {
        label: "mysqli_savepoint()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_savepoint() function creates a savepoint with a specified name in a transaction.`
    }),
    snip(`mysqli_release_savepoint($\{});$\{}`, {
        label: "mysqli_release_savepoint()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_release_savepoint() function releases a savepoint, making it no longer usable in the transaction.`
    }),
    snip(`mysqli_get_links_stats($\{});$\{}`, {
        label: "mysqli_get_links_stats()",
        detail: "MySQLi",
        type: "method",
        info: `The mysqli_get_links_stats() function returns statistics about open and persistent links.`
    })
];

export default mysqliFunctions;
