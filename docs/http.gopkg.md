# http.gopkg

The gopkg directive allows you to create vanity Go import urls.

**[Full documentation](https://github.com/zikes/gopkg/blob/master/README.md)**

## Examples

### Basic Usage

``` caddyfile
mydomain.com {
  gopkg /gopkg https://github.com/zikes/gopkg
}
```

Permits `go get mydomain.com/gopkg`

### Specify Repository Type

``` caddyfile
gopkg /myrepo hg https://bitbucket.com/zikes/myrepo
```

Specifies the Mercurial repository type.
