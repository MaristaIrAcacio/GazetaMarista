<?php
    if ($_SERVER["REQUEST_METHOD"] != "POST") return;

    $headline = $_POST['headline'];
    $conteudoRaw = $_POST['content'];
    $content = json_decode($conteudoRaw, true);
    echo "<script>console.log($headline); console.log($conteudoRaw); console.log($content)</script>";
    
    $content_size = count($content);
    for ($i = 0; $i < $content_size; $i++) {
        $content[$i] = "<p>" . $content[$i] . "</p>";
    }

    umask(0);

    $directory = "artigos/" . $headline;
    if (!is_dir($directory))
        mkdir($directory, 0777, true);

    file_put_contents($directory . "/index.html", "<h1>" . $headline . "</h1>" . PHP_EOL);
    file_put_contents($directory . "/index.html", implode(PHP_EOL, $content), FILE_APPEND);
?>
