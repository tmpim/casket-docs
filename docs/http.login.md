# http.login

Login directive for Caddy, based on github.com/tarent/loginsrv. The login is checked against a backend and then returned
as JWT token. This directive is designed to play together with the http.jwt middleware. The following providers (login
backends) are supported: 

* Htpasswd 
* OSIAM 
* Simple (user/password pairs by configuration) 
* OAuth2 Login: Google, Facebook, Github, Bitbucket, Gitlab

**[Full documentation](https://github.com/tarent/loginsrv/tree/master/caddy/README.md)**

## Examples

### Simple example

``` caddyfile
jwt {
  path /
  allow sub bob
}

login / {
  simple bob=secret,alice=secret
}
```

The root context / is protected by the jwt middleware. The login is possible for the users alice and bob.

### Users from htpasswd file

``` caddyfile
header /private Cache-Control "no-cache, no-store, must-revalidate"
  
jwt {
  path /private
  redirect /login
  allow sub demo
}

login {
  success_url /private
  htpasswd file=passwords
}
```

Protection of the path `/private`. The users are taken from the htpasswd file.

### Github example with more customisation

``` caddyfile
jwt {
  path /my-account
  redirect /login
}

login {
  github client_id={$github_client_id},client_secret={$github_client_secret}

  success_url /my-account
  logout_url /
  template login_template.html
  jwt_expiry 24h
  cookie_expiry 2400h
}
```

Github login, where the github api credentials are taken from environment variables. Template, redirect URLs and expiry
times are configured.
