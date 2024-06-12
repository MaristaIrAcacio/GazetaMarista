<?php
    if ($_SERVER["REQUEST_METHOD"] != "POST") return;

    
    $headline = $_POST['headline'];
    $table = array(
        'Š' => 'S', 'š' => 's', 'Đ' => 'Dj', 'đ' => 'dj', 'Ž' => 'Z', 'ž' => 'z', 'Č' => 'C', 'č' => 'c', 'Ć' => 'C', 'ć' => 'c',
        'À' => 'A', 'Á' => 'A', 'Â' => 'A', 'Ã' => 'A', 'Ä' => 'A', 'Å' => 'A', 'Æ' => 'A', 'Ç' => 'C', 'È' => 'E', 'É' => 'E',
        'Ê' => 'E', 'Ë' => 'E', 'Ì' => 'I', 'Í' => 'I', 'Î' => 'I', 'Ï' => 'I', 'Ñ' => 'N', 'Ò' => 'O', 'Ó' => 'O', 'Ô' => 'O',
        'Õ' => 'O', 'Ö' => 'O', 'Ø' => 'O', 'Ù' => 'U', 'Ú' => 'U', 'Û' => 'U', 'Ü' => 'U', 'Ý' => 'Y', 'Þ' => 'B', 'ß' => 'Ss',
        'à' => 'a', 'á' => 'a', 'â' => 'a', 'ã' => 'a', 'ä' => 'a', 'å' => 'a', 'æ' => 'a', 'ç' => 'c', 'è' => 'e', 'é' => 'e',
        'ê' => 'e', 'ë' => 'e', 'ì' => 'i', 'í' => 'i', 'î' => 'i', 'ï' => 'i', 'ð' => 'o', 'ñ' => 'n', 'ò' => 'o', 'ó' => 'o',
        'ô' => 'o', 'õ' => 'o', 'ö' => 'o', 'ø' => 'o', 'ù' => 'u', 'ú' => 'u', 'û' => 'u', 'ý' => 'y', 'ý' => 'y', 'þ' => 'b',
        'ÿ' => 'y', 'Ŕ' => 'R', 'ŕ' => 'r', '-' => ' ', '$' => 's', ';' => ' ', ':' => ' ', '!' => ' ', '?' => ' '
    );
    $link = strtr($headline, $table);
    $link = strtolower($link);
    $link = preg_replace("/\s+/", ' ', $link);
    $link = trim($link);
    $link = str_replace(' ', '-', $link);
    echo $link;
    $conteudoRaw = $_POST['content'];
    $content = json_decode($conteudoRaw, true);

    umask(0);

    $directory = "artigos/" . $link;
    if (!is_dir($directory))
        mkdir($directory, 0777, true);

    file_put_contents($directory . "/index.html", "<!DOCTYPE html>" . PHP_EOL .
                                                  '<html lang="pt-BR">' . PHP_EOL .
                                                  "  <head>" . PHP_EOL .
                                                  '    <meta charset="utf-8" />' . PHP_EOL .
                                                  "    <title>$headline | Gazeta Marista</title>" . PHP_EOL .
                                                  "  </head>" . PHP_EOL .
                                                  "  <body>" . PHP_EOL);

    file_put_contents($directory . "/index.html", "    <h1>$headline</h1>" . PHP_EOL, FILE_APPEND);
    
    if (is_array($content)) {
        foreach ($content as $line)
            file_put_contents($directory . "/index.html", "    <p>$line</p>" . PHP_EOL, FILE_APPEND);
    } else {
        file_put_contents($directory . "/index.html", "    <p>$conteudoRaw</p>" . PHP_EOL, FILE_APPEND);
    }

    file_put_contents($directory . "/index.html", "  </body>" . PHP_EOL, FILE_APPEND);
    file_put_contents($directory . "/index.html", "</html>" . PHP_EOL, FILE_APPEND);
?>
