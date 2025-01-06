window.htmlIntellisense.snippets = [
    window.cmSnip(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=$\{device-width}, initial-scale=$\{1.0}">
    <title>$\{Document}</title>
</head>
<body>
    $\{}
</body>
</html>`, {
        label: "html:5",
        type: "snippet",
    }),
    window.cmSnip(`<html xmlns="http://www.w3.org/1999/xhtml">$\{}</html>`, {
        label: "html:xml",
        type: "snippet",
    }),
    window.cmSnip(`<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>$\{Page Title}</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='$\{main.css}'>
    <script src='$\{main.js}'></script>
</head>
<body>
    $\{}
</body>
</html>`, {
        label: "HTML Sample",
        type: "snippet",
    }),
    window.cmSnip(`<form action="$\{}" method="post">$\{}</form>`, {
        label: "form:post",
        type: "snippet",
    }),
    window.cmSnip(`<form action="$\{}" method="get">$\{}</form>`, {
        label: "form:get",
        type: "snippet",
    }),
    window.cmSnip(`<meta http-equiv="X-UA-Compatible" content="$\{IE=7}">$\{}`, {
        label: "meta:compat",
        type: "snippet",
    }),
    window.cmSnip(`<meta name="description" content="$\{}">`, {
        label: "meta:description",
        type: "snippet",
    }),
    window.cmSnip(`<meta http-equiv="X-UA-Compatible" content="$\{ie=edge}">$\{}`, {
        label: "meta:edge",
        type: "snippet",
    }),
    window.cmSnip(`<meta name="keywords" content="$\{}">`, {
        label: "meta:keywords",
        type: "snippet",
    }),
    window.cmSnip(`<meta http-equiv="refresh" content="0; url=$\{http://example.com}">$\{}`, {
        label: "meta:redirect",
        type: "snippet",
    }),
    window.cmSnip(`<meta http-equiv="refresh" content="$\{5}">$\{}`, {
        label: "meta:refresh",
        type: "snippet",
    }),
    window.cmSnip(`<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">$\{}`, {
        label: "meta:utf8",
        type: "snippet",
    }),
    window.cmSnip(`<meta name="viewport" content="width=$\{device-width}, initial-scale=$\{1.0}">$\{}`, {
        label: "meta:viewport",
        type: "snippet",
    }),
    window.cmSnip(`<meta name="theme-color" content="$\{}">`, {
        label: "meta:theme-color",
        type: "snippet",
    }),

    window.cmSnip(`<menu type="context">$\{}</menu>`, {
        label: "menu:context",
        type: "snippet",
    }),
    window.cmSnip(`<menu type="toolbar">$\{}</menu>`, {
        label: "menu:toolbar",
        type: "snippet",
    }),
    window.cmSnip(`<link rel="alternate" href="$\{atom.xml}" type="application/atom+xml" title="Atom">$\{}`, {
        label: "link:atom",
        type: "snippet"
    }),
    window.cmSnip(`<link rel="stylesheet" href="$\{style}.css">$\{}`, {
        label: "link:css",
        type: "snippet"
    }),
    window.cmSnip(`<link rel="shortcut icon" href="$\{favicon.ico}" type="image/x-icon">$\{}`, {
        label: "link:favicon",
        type: "snippet"
    }),
    window.cmSnip(`<link rel="import" href="$\{component}.html">$\{}`, {
        label: "link:import",
        type: "snippet"
    }),
    window.cmSnip(`<link rel="manifest" href="$\{manifest.json}">$\{}`, {
        label: "link:manifest",
        type: "snippet"
    }),
    window.cmSnip(`<link rel="stylesheet" href="$\{print}.css" media="$\{print}">$\{}`, {
        label: "link:print",
        type: "snippet"
    }),
    window.cmSnip(`<link rel="alternate" href="$\{rss.xml}" type="application/rss+xml" title="RSS">$\{}`, {
        label: "link:rss",
        type: "snippet"
    }),
    window.cmSnip(`<link rel="apple-touch-icon" href="$\{favicon.png}">$\{}`, {
        label: "link:touch",
        type: "snippet"
    }),
    window.cmSnip(`<textarea name="$\{}" id="$\{}">$\{}</textarea>`, {
        label: "tarea",
        type: "snippet"
    }),
    window.cmSnip(`<textarea name="$\{}" id="$\{}" cols="$\{30}">$\{}</textarea>`, {
        label: "tarea:cols",
        type: "snippet"
    }),
    window.cmSnip(`<textarea name="$\{}" id="$\{}" cols="$\{30}">$\{}</textarea>`, {
        label: "tarea:c",
        type: "snippet"
    }),
    window.cmSnip(`<textarea name="$\{}" id="$\{}" cols="$\{30}" rows="$\{10}">$\{}</textarea>`, {
        label: "tarea:cols:rows",
    }),
    window.cmSnip(`<textarea name="$\{}" id="$\{}" cols="$\{30}" rows="$\{10}">$\{}</textarea>`, {
        label: "tarea:cr",
    }),
    window.cmSnip(`<textarea name="$\{}" id="$\{}" rows="$\{10}">$\{}</textarea>`, {
        label: "tarea:rows",
    }),
    window.cmSnip(`<textarea name="$\{}" id="$\{}">$\{}</textarea>`, {
        label: "textarea",
        type: "snippet"
    }),
    window.cmSnip(`<textarea name="$\{}" id="$\{}" cols="$\{30}">$\{}</textarea>`, {
        label: "textarea:cols",
        type: "snippet"
    }),
    window.cmSnip(`<textarea name="$\{}" id="$\{}" cols="$\{30}" rows="$\{10}">$\{}</textarea>`, {
        label: "textarea:cols:rows",
    }),
    window.cmSnip(`<textarea name="$\{}" id="$\{}" rows="$\{10}">$\{}</textarea>`, {
        label: "textarea:rows",
    }),
    window.cmSnip(`<script type="module" src="$\{}">$\{}</script>`, {
        label: "script:module",
        type: "snippet"
    }),
    window.cmSnip(`<script src="$\{}">$\{}</script>`, {
        label: "script:src",
        type: "snippet"
    }),
    window.cmSnip(`<select name="$\{}" id="$\{}">$\{}</select>`, {
        label: "select",
        type: "snippet"
    }),
    window.cmSnip(`<select name="$\{}" id="$\{}" disabled="disabled">$\{}</select>`, {
        label: "select:disabled",
        type: "snippet"
    }),
    window.cmSnip(`<a href="$\{}">$\{}</a>`, {
        label: "a",
        type: "snippet"
    }),
    window.cmSnip(`<a href="http://$\{}" target="_blank" rel="noopener noreferrer">$\{}</a>`, {
        label: "a:blank",
        type: "snippet"
    }),
    window.cmSnip(`<a href="http://$\{}">$\{}</a>`, {
        label: "a:link",
        type: "snippet"
    }),
    window.cmSnip(`<a href="mailto:$\{}">$\{}</a>`, {
        label: "a:mail",
        type: "snippet"
    }),
    window.cmSnip(`<a href="tel:+$\{}">$\{}</a>`, {
        label: "a:tel",
        type: "snippet"
    }),
    window.cmSnip(`<area shape="$\{}" coords="$\{}" href="$\{}" alt="$\{}">`, {
        label: "area",
        type: "snippet"
    }),
    window.cmSnip(`<area shape="circle" coords="$\{}" href="$\{}" alt="$\{}">`, {
        label: "area:circle",
        type: "snippet"
    }),
    window.cmSnip(`<area shape="default" coords="$\{}" href="$\{}" alt="$\{}">`, {
        label: "area:default",
        type: "snippet"
    }),
    window.cmSnip(`<area shape="poly" coords="$\{}" href="$\{}" alt="$\{}">`, {
        label: "area:poly",
        type: "snippet"
    }),
    window.cmSnip(`<area shape="rect" coords="$\{}" href="$\{}" alt="$\{}">`, {
        label: "area:rect",
        type: "snippet"
    }),
    window.cmSnip(`<picture>
    <source media="($\{min-width: })" srcset="$\{}">
    <img src="$\{}" alt="$\{}">
</picture>`, {
        label: "ri:art",
        type: "snippet"
    }),
    window.cmSnip(`<img src="$\{}" alt="$\{}" srcset="$\{}">`, {
        label: "ri:dpr",
        type: "snippet"
    }),
    window.cmSnip(`<picture>
    <source srcset="$\{}" type="$\{image/}">
    <img src="$\{}" alt="$\{}">
</picture>`, {
        label: "ri:type",
        type: "snippet"
    }),
    window.cmSnip(`<img src="$\{}" alt="$\{}" sizes="$\{}" srcset="$\{}">`, {
        label: "ri:viewport",
        type: "snippet"
    }),
    window.cmSnip(`<acronym title="$\{}">$\{}</acronym>`, {
        label: "acronym",
        type: "snippet"
    }),
    window.cmSnip(`<abbr title="$\{}">$\{}</abbr>`, {
        label: "abbr",
        type: "snippet"
    }),
    window.cmSnip(`<bdo dir="$\{}">$\{}</bdo>`, {
        label: "bdo",
        type: "snippet"
    }),
    window.cmSnip(`<bdo dir="ltr">$\{}</bdo>`, {
        label: "bdo:ltr",
        type: "snippet"
    }),
    window.cmSnip(`<bdo dir="rtl">$\{}</bdo>`, {
        label: "bdo:rtl",
        type: "snippet"
    }),
    window.cmSnip(`<button type="button">$\{}</button>`, {
        label: "button:button",
        type: "snippet"
    }),
    window.cmSnip(`<button disabled="disabled">$\{}</button>`, {
        label: "button:disabled",
        type: "snippet"
    }),
    window.cmSnip(`<button type="reset">$\{}</button>`, {
        label: "button:reset",
        type: "snippet"
    }),
    window.cmSnip(`<button type="submit">$\{}</button>`, {
        label: "button:submit",
        type: "snippet"
    }),
    window.cmSnip(`<button type="button">$\{}</button>`, {
        label: "btn:b",
        type: "snippet"
    }),
    window.cmSnip(`<button disabled="disabled">$\{}</button>`, {
        label: "btn:d",
        type: "snippet"
    }),
    window.cmSnip(`<button type="reset">$\{}</button>`, {
        label: "btn:r",
        type: "snippet"
    }),
    window.cmSnip(`<button type="submit">$\{}</button>`, {
        label: "btn:s",
        type: "snippet"
    }),
    window.cmSnip(`<!-- $\{} -->`, {
        label: "comment",
        type: "snippet"
    }),
    window.cmSnip(`<!--[if IE]>$\{}<![endif]-->`, {
        label: "cc:ie",
        type: "snippet"
    }),
    window.cmSnip(`<!--[if !IE]><!-->$\{}<!--<![endif]-->`, {
        label: "cc:noie",
        type: "snippet"
    }),
    window.cmSnip(`<dialog>$\{}</dialog>`, {
        label: "dlg",
        type: "snippet"
    }),
    window.cmSnip(`<datalist>$\{}</datalist>`, {
        label: "datal",
        type: "snippet"
    }),
    window.cmSnip(`<details>$\{}</details>`, {
        label: "det",
        type: "snippet"
    }),
    window.cmSnip(`<details>$\{}</details>`, {
        label: "det",
        type: "snippet"
    }),
    window.cmSnip(`<caption>$\{}</caption>`, {
        label: "cap",
        type: "snippet"
    }),
    window.cmSnip(`<caption>$\{}</caption>`, {
        label: "cap",
        type: "snippet"
    }),
    window.cmSnip(`<command>$\{}`, {
        label: "cmd",
        type: "snippet"
    }),
    window.cmSnip(`<colgroup>$\{}</colgroup>`, {
        label: "colg",
        type: "snippet"
    }),
    window.cmSnip(`<embed src="$\{}" type="$\{}">`, {
        label: "embed",
        type: "snippet"
    }),
    window.cmSnip(`<embed src="$\{}" type="$\{}">`, {
        label: "emb",
        type: "snippet"
    }),
    window.cmSnip(`<figcaption>$\{}</figcaption>`, {
        label: "figc",
        type: "snippet"
    }),
    window.cmSnip(`<fieldset>$\{}</fieldset>`, {
        label: "fset",
        type: "snippet"
    }),
    window.cmSnip(`<fieldset disabled="disabled">$\{}</fieldset>`, {
        label: "fieldset:disabled",
        type: "snippet"
    }),
    window.cmSnip(`<fieldset disabled="disabled">$\{}</fieldset>`, {
        label: "fset:disabled",
        type: "snippet"
    }),
    window.cmSnip(`<footer>$\{}</footer>`, {
        label: "ftr",
        type: "snippet"
    }),
    window.cmSnip(`<footer>$\{}</footer>`, {
        label: "ftr",
        type: "snippet"
    }),
    window.cmSnip(`<iframe src="$\{}" frameborder="0">$\{}</iframe>`, {
        label: "iframe",
        type: "snippet"
    }),
    window.cmSnip(`<iframe src="$\{}" frameborder="0">$\{}</iframe>`, {
        label: "ifr",
        type: "snippet"
    }),
    window.cmSnip(`<img src="$\{}" alt="$\{}">`, {
        label: "img",
        type: "snippet"
    }),
    window.cmSnip(`<img src="$\{}" alt="$\{}" srcset="$\{}">`, {
        label: "img:srcset",
        type: "snippet"
    }),
    window.cmSnip(`<img src="$\{}" alt="$\{}" sizes="$\{}">`, {
        label: "img:sizes",
        type: "snippet"
    }),
    window.cmSnip(`<img src="$\{}" alt="$\{}" sizes="$\{}" srcset="$\{}">`, {
        label: "img:z",
        type: "snippet"
    }),
    window.cmSnip(`<input type="$\{text}">$\{}`, {
        label: "input",
        type: "snippet"
    }),
    window.cmSnip(`<input type="$\{text}" name="$\{}" id="$\{}">`, {
        label: "inp",
        type: "snippet"
    }),
    window.cmSnip(`<input type="button" value="$\{}">`, {
        label: "input:button",
        type: "snippet"
    }),
    window.cmSnip(`<input type="checkbox" name="$\{}" id="$\{}">`, {
        label: "input:checkbox",
        type: "snippet"
    }),
    window.cmSnip(`<input type="color" name="$\{}" id="$\{}">`, {
        label: "input:color",
        type: "snippet"
    }),
    window.cmSnip(`<input type="date" name="$\{}" id="$\{}">`, {
        label: "input:date",
        type: "snippet"
    }),
    window.cmSnip(`<input type="datetime" name="$\{}" id="$\{}">`, {
        label: "input:datetime",
        type: "snippet"
    }),
    window.cmSnip(`<input type="datetime-local" name="$\{}" id="$\{}">`, {
        label: "input:datetime-local",
        type: "snippet"
    }),
    window.cmSnip(`<input type="email" name="$\{}" id="$\{}">`, {
        label: "input:email",
        type: "snippet"
    }),
    window.cmSnip(`<input type="file" name="$\{}" id="$\{}">`, {
        label: "input:file",
        type: "snippet"
    }),
    window.cmSnip(`<input type="hidden" name="$\{}">`, {
        label: "input:hidden",
        type: "snippet"
    }),
    window.cmSnip(`<input type="image" src="$\{}" alt="$\{}">`, {
        label: "input:image",
        type: "snippet"
    }),
    window.cmSnip(`<input type="month" name="$\{}" id="$\{}">`, {
        label: "input:month",
        type: "snippet"
    }),
    window.cmSnip(`<input type="number" name="$\{}" id="$\{}">`, {
        label: "input:number",
        type: "snippet"
    }),
    window.cmSnip(`<input type="password" name="$\{}" id="$\{}">`, {
        label: "input:password",
        type: "snippet"
    }),
    window.cmSnip(`<input type="radio" name="$\{}" id="$\{}">`, {
        label: "input:radio",
        type: "snippet"
    }),
    window.cmSnip(`<input type="range" name="$\{}" id="$\{}">`, {
        label: "input:range",
        type: "snippet"
    }),
    window.cmSnip(`<input type="range" name="$\{}" id="$\{}">`, {
        label: "input:range",
        type: "snippet"
    }),
    window.cmSnip(`<input type="reset" value="$\{}">`, {
        label: "input:reset",
        type: "snippet"
    }),
    window.cmSnip(`<input type="submit" value="$\{}">`, {
        label: "input:submit",
        type: "snippet"
    }),
    window.cmSnip(`<input type="submit" value="$\{}">`, {
        label: "input:s",
        type: "snippet"
    }),
    window.cmSnip(`<input type="search" name="$\{}" id="$\{}">`, {
        label: "input:search",
        type: "snippet"
    }),
    window.cmSnip(`<input type="tel" name="$\{}" id="$\{}">`, {
        label: "input:tel",
        type: "snippet"
    }),
    window.cmSnip(`<input type="text" name="$\{}" id="$\{}">`, {
        label: "input:t",
        type: "snippet"
    }),
    window.cmSnip(`<input type="text" name="$\{}" id="$\{}">`, {
        label: "input:text",
        type: "snippet"
    }),
    window.cmSnip(`<input type="time" name="$\{}" id="$\{}">`, {
        label: "input:time",
        type: "snippet"
    }),
    window.cmSnip(`<input type="url" name="$\{}" id="$\{}">`, {
        label: "input:url",
        type: "snippet"
    }),
    window.cmSnip(`<input type="week" name="$\{}" id="$\{}">`, {
        label: "input:week",
        type: "snippet"
    }),
    window.cmSnip(`<keygen>$\{}</keygen>`, {
        label: "kg",
        type: "snippet"
    }),
    window.cmSnip(`<label for="$\{}">$\{}</label>`, {
        label: "label",
        type: "snippet"
    }),
    window.cmSnip(`<legend>$\{}</legend>`, {
        label: "leg",
        type: "snippet"
    }),
    window.cmSnip(`<map name="$\{}">$\{}</map>`, {
        label: "map",
        type: "snippet"
    }),
    window.cmSnip(`<marquee behavior="$\{}" direction="$\{}">$\{}</marquee>`, {
        label: "marquee",
        type: "snippet"
    }),
    window.cmSnip(`<meter value="$\{}">$\{}</meter>`, {
        label: "meter",
        type: "snippet"
    }),
    window.cmSnip(`<object data="$\{}" type="$\{}">$\{}</object>`, {
        label: "obj",
        type: "snippet"
    }),
    window.cmSnip(`<option value="$\{}">$\{}</option>`, {
        label: "opt",
        type: "snippet"
    }),
    window.cmSnip(`<optgroup>$\{}</optgroup>`, {
        label: "optg",
        type: "snippet"
    }),
    window.cmSnip(`<param name="$\{}" value="$\{}">`, {
        label: "param",
        type: "snippet"
    }),
    window.cmSnip(`<progress>$\{}</progress>`, {
        label: "prog",
        type: "snippet"
    }),
    window.cmSnip(`<video src="$\{}">$\{}</video>`, {
        label: "video",
        type: "snippet"
    })
];