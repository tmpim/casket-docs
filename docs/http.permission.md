# http.permission

The permission directive adds an authentication and authorization middleware that uses HTTP Basic Auth, TLS client
certificates and a simple API for granular access control.

**[Full documentation](https://github.com/dhaavi/caddy-permission/blob/master/README.md)**

## Examples

### HTTP Basic Auth

``` caddyfile
permission basic {
  user greg qwerty1 # This is greg, his password is qwerty1
  rw /tmp/ # he may read and write to /tmp/!

  user george # This is george, he does not have a password, another backend will have to authenticate him
  rw /admin/

  default # applies to all logged-in users
  rw /api/users/0 #

  public # applies to everyone, also anonymous users
  none /internal/ # deny internal space for everyone
  ro / # allow reading everything

  GET,HEAD /other
}
```

Use HTTP Basic Auth for user authorization and access control using HTTP methods and path prefixes.

### TLS Auth

``` caddyfile
permission tls
```

Activate authentication via TLS client certificates. You must configure a client CA in caddy for this to work. The CN
attribute of the certificate is used as the username. Read more in the docs about combining backends.

### API Auth

``` caddyfile
permission api {
  name MyWebsite # name of website
  user http://localhost:8080/caddyapi # main authentication api
  permit http://localhost:8080/caddyapi/{{username}} # refetch a permit of a user
  login http://localhost:8080/login?next={{resource}} # redirect here for logging in (resource is original URL)
  add_prefix /api/resource /files # add prefixes to returned paths
  add_without_prefix # if add_prefix is used, but you still want to also add the original paths
  cache 600 # how to long to cache authenticated users
  cleanup 3600 # when to clean out authenticated users
}
```

Use the simple API that you can implement in your application to provide caddy with user authentication and access
control settings for users. This will enable you to add an authentication and authorization layer to unsupported
applications.
