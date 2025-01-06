window.phpIntellisense.phpsnippets = [
    window.cmSnip(`header('Content-Type: application/json; charset=utf-8');$\{}`, {
        label: "header:json",
        type: "snippet"
    }),
    window.cmSnip(`header('Content-Type: text/html; charset=utf-8');$\{}`, {
        label: "header:html",
        type: "snippet"
    }),
    window.cmSnip(`header('Content-Type: application/xml; charset=utf-8');$\{}`, {
        label: "header:xml",
        type: "snippet"
    }),
    window.cmSnip(`header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename="$\{filename.csv}"');$\{}`, {
        label: "header:csv",
        type: "snippet"
    }),
    window.cmSnip(`header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="$\{file.zip}"');
header('Content-Length: $\{filesize}');
readfile('$\{file.zip}');$\{}`, {
        label: "header:download",
        type: "snippet"
    }),
    window.cmSnip(`header('Access-Control-Allow-Origin: $\{*}');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');$\{}`, {
        label: "header:crossorigin",
        type: "snippet"
    }),
    window.cmSnip(`header('Refresh: $\{5;url=https://example.com/}');$\{}`, {
        label: "header:refresh",
        type: "snippet"
    }),
    window.cmSnip(`header('WWW-Authenticate: Basic realm="Restricted Area"');
header('HTTP/1.0 401 Unauthorized');$\{}`, {
        label: "header:auth",
        type: "snippet"
    }),
    window.cmSnip(`header('X-Robots-Tag: noindex, nofollow', true);`, {
        label: "header:noindex",
        type: "snippet"
    }),
    window.cmSnip(`header('Content-Type: text/plain; charset=utf-8');$\{}`, {
        label: "header:txt",
        type: "snippet"
    }),
    window.cmSnip(`header('ETag: "$\{}"');
header('Cache-Control: no-cache');$\{}`, {
        label: "header:etag",
        type: "snippet"
    }),
    window.cmSnip(`http_response_code($\{404});
header('Status: $\{404 Not Found}');$\{}`, {
        label: "header:status",
        type: "snippet"
    }),
    window.cmSnip(`header('Allow: GET, POST, PUT, DELETE');`, {
        label: "header:allow",
        type: "snippet"
    }),
    window.cmSnip(`header('Content-Type: text/css; charset=utf-8');$\{}`, {
        label: "header:css",
        type: "snippet"
    }),
    window.cmSnip(`header('Content-Type: image/svg+xml; charset=utf-8');$\{}`, {
        label: "header:svg",
        type: "snippet"
    }),
    window.cmSnip(`header('Content-Type: image/png; charset=utf-8');$\{}`, {
        label: "header:png",
        type: "snippet"
    }),
    window.cmSnip(`header('Content-Type: image/jpeg; charset=utf-8');$\{}`, {
        label: "header:jpg",
        type: "snippet"
    }),
    window.cmSnip(`header('Content-Type: application/javascript; charset=utf-8');$\{}`, {
        label: "header:js",
        type: "snippet"
    }),
    window.cmSnip(`$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "$\{https://example.com/}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);$\{}
`, {
        label: "curl",
        type: "snippet"
    }),
    window.cmSnip(`$conn = new mysqli("$\{localhost}", "$\{username}", "$\{password}", "$\{dbname}");
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
    window.cmSnip(`$conn = new PDO("$\{mysql:host=localhost;dbname=dbname}", "$\{username}", "$\{password}");
$query = "$\{SELECT * FROM users}";
$result = $conn->query($query);
$conn->close();$\{}
`, {
        label: "pdo",
        type: "snippet"
    }),
    window.cmSnip(`$conn = new SQLite3("$\{dbname}");
$query = "$\{SELECT * FROM users}";
$result = $conn->query($query);
$conn->close();$\{}
`, {
        label: "sqlite3",
        type: "snippet"
    }),
    window.cmSnip(`$conn = new MongoDBClient("$\{mongodb://localhost:27017}");
$db = $conn->test;
$collection = $db->users;
$cursor = $collection->find();
$cursor->toArray();$\{}
`, {
        label: "mongodb",
        type: "snippet"
    }),
    window.cmSnip(`$conn = new Redis();
$conn->connect("localhost");
$conn->set("key", "value");
$conn->get("key");$\{}
`, {
        label: "redis",
        type: "snippet"
    }),
    window.cmSnip(`header('Location: $\{https://example.com/}');
exit;$\{}`, {
        label: "redirect",
        type: "snippet"
    }),
    window.cmSnip(`if (!isset($\{$name})) {
    $\{}
}$\{}`, {
        label: "isset",
        type: "snippet"
    }),
    window.cmSnip(`if (empty($\{$variable})) {
    $\{}
}$\{}`, {
        label: "empty",
        type: "snippet"
    }),
    window.cmSnip(`session_start();$\{}`, {
        label: "session_start",
        type: "snippet"
    }),
]