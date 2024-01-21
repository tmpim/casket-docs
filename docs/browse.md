# http.browse

browse enables directory browsing within the specified base path. It displays a file listing for directories which don't
have an index file in them. In other server software, this is often called indexing.

By default, file listings are disabled and a request to a directory path (where no index file is present) will result in
a 404 for obscurity reasons.

This middleware may set cookies to preserve UI preferences if the user changes them.

## Syntax

``` casketfile
browse [path [tplfile]]
```

-   **path** is the base path to match. Any directories in this base path become browsable.
-   **tplfile** is the location of a template file to use.

A default template will be used if no template file is specified. Without any arguments, browsing is enabled on the
entire site (path=/).

## Template Format

A template is simply an HTML file with *actions* in it. The actions are parsed and executed to display dynamic content.
This directive supports [Casket's template actions](/template-actions) as well as some additional actions specific to the
browse directive. You may use template actions that render [this struct
type](https://github.com/tmpim/casket/blob/5fd2388ac586cc615be4fa8186ba5e4eaf72a03a/caskethttp/browse/browse.go#L100-L134)
(notice that some helper methods are available).

Here is a very simple example template:

``` html
<html>
    <head>
        <title>{{html .Name}}</title>
    </head>
    <body>
        {{if .CanGoUp}}<a href="..">Up one level</a><br>{{end}}
        <h1>{{.Path}}</h1>
        {{range .Items}}
        <a href="{{html .URL}}">{{html .Name}}</a><br>
        {{end}}
    </body>
</html> 
```

... but the default template is nicer.

Notice that the name and URL are sanitized for safe rendering in a browser. Templates are presumed trusted, so if your
file names are not trusted, be sure they are escaped for use in HTML documents.

## JSON Response

You can ask for a JSON representation instead of a browse page by having **application/json** in your **Accept** header:

::: code-group
``` shell [Request]
curl -H "Accept: application/json" 'localhost:2015/?limit=1'
```
:::

::: code-group
``` json [Response]
[
  {
    "IsDir": true,
    "Name": ".git",
    "Size": 476,
    "URL": ".git/",
    "ModTime": "2015-09-11T03:20:09+03:00",
    "Mode": 2147484141
  }
]
```
:::

The above example demonstrates how to ask for JSON, as well as how to limit the number of entries that we want via a
query called **limit**. To yield the whole listing, omit the limit query.

## Examples

Allow directory listings in all folders that don't have an index file:

``` casketfile
browse
```

Show photo album contents (in /photos) via a custom template:

``` casketfile
browse /photos ../photo_album.tpl
```
