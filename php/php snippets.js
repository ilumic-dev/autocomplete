globalThis.phpSnippets = [
    snip(`header('Content-Type: application/json; charset=utf-8');$\{}`, {
        label: "header:json",
        type: "snippet"
    }),
    snip(`header('Content-Type: text/html; charset=utf-8');$\{}`, {
        label: "header:html",
        type: "snippet"
    }),
    snip(`header('Content-Type: application/xml; charset=utf-8');$\{}`, {
        label: "header:xml",
        type: "snippet"
    }),
    snip(`header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename="$\{filename.csv}"');$\{}`, {
        label: "header:csv",
        type: "snippet"
    }),
    snip(`header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="$\{file.zip}"');
header('Content-Length: $\{filesize}');
readfile('$\{file.zip}');$\{}`, {
        label: "header:download",
        type: "snippet"
    }),
    snip(`header('Access-Control-Allow-Origin: $\{*}');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');$\{}`, {
        label: "header:crossorigin",
        type: "snippet"
    }),
    snip(`header('Refresh: $\{5;url=https://example.com/}');$\{}`, {
        label: "header:refresh",
        type: "snippet"
    }),
    snip(`header('WWW-Authenticate: Basic realm="Restricted Area"');
header('HTTP/1.0 401 Unauthorized');$\{}`, {
        label: "header:auth",
        type: "snippet"
    }),
    snip(`header('X-Robots-Tag: noindex, nofollow', true);`, {
        label: "header:noindex",
        type: "snippet"
    }),
    snip(`header('Content-Type: text/plain; charset=utf-8');$\{}`, {
        label: "header:txt",
        type: "snippet"
    }),
    snip(`header('ETag: "$\{}"');
header('Cache-Control: no-cache');$\{}`, {
        label: "header:etag",
        type: "snippet"
    }),
    snip(`http_response_code($\{404});
header('Status: $\{404 Not Found}');$\{}`, {
        label: "header:status",
        type: "snippet"
    }),
    snip(`header('Allow: GET, POST, PUT, DELETE');`, {
        label: "header:allow",
        type: "snippet"
    }),
    snip(`header('Content-Type: text/css; charset=utf-8');$\{}`, {
        label: "header:css",
        type: "snippet"
    }),
    snip(`header('Content-Type: image/svg+xml; charset=utf-8');$\{}`, {
        label: "header:svg",
        type: "snippet"
    }),
    snip(`header('Content-Type: image/png; charset=utf-8');$\{}`, {
        label: "header:png",
        type: "snippet"
    }),
    snip(`header('Content-Type: image/jpeg; charset=utf-8');$\{}`, {
        label: "header:jpg",
        type: "snippet"
    }),
    snip(`header('Content-Type: application/javascript; charset=utf-8');$\{}`, {
        label: "header:js",
        type: "snippet"
    }),
    snip(`$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "$\{https://example.com/}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);$\{}
`, {
        label: "curl",
        type: "snippet"
    }),
    snip(`$conn = new mysqli("$\{localhost}", "$\{username}", "$\{password}", "$\{dbname}");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$query = "$\{SELECT * FROM users}";
$result = $conn->query($query);
$conn->close();$\{}
`, {
        label: "mysqli",
        type: "snippet"
    }),
    snip(`$conn = new PDO("$\{mysql:host=localhost;dbname=dbname}", "$\{username}", "$\{password}");
$query = "$\{SELECT * FROM users}";
$result = $conn->query($query);
$conn->close();$\{}
`, {
        label: "pdo",
        type: "snippet"
    }),
    snip(`$conn = new SQLite3("$\{dbname}");
$query = "$\{SELECT * FROM users}";
$result = $conn->query($query);
$conn->close();$\{}
`, {
        label: "sqlite3",
        type: "snippet"
    }),
    snip(`$conn = new MongoDBClient("$\{mongodb://localhost:27017}");
$db = $conn->test;
$collection = $db->users;
$cursor = $collection->find();
$cursor->toArray();$\{}
`, {
        label: "mongodb",
        type: "snippet"
    }),
    snip(`$conn = new Redis();
$conn->connect("localhost");
$conn->set("key", "value");
$conn->get("key");$\{}
`, {
        label: "redis",
        type: "snippet"
    }),
    snip(`header('Location: $\{https://example.com/}');
exit;$\{}`, {
        label: "redirect",
        type: "snippet"
    }),
    snip(`if (!isset($\{$name})) {
    $\{}
}$\{}`, {
        label: "isset",
        type: "snippet"
    }),
    snip(`if (empty($\{$variable})) {
    $\{}
}$\{}`, {
        label: "empty",
        type: "snippet"
    }),
    snip(`session_start();$\{}`, {
        label: "session_start",
        type: "snippet"
    }),
]