# http.gomods

Create a config file like this example:

``` caddyfile
gomods.test {
  gomods
}
```

The example above uses the default values for Go binary and number of parallel workers.
To customize these values add these fields to your config file:

``` caddyfile
gomods.test {
  gomods {
    gobinary /usr/bin/go
    workers 2
  }
}
```

To enable caching you should also add the `cache` field to the config:

``` caddyfile
gomods.test {
  gomods {
    cache
  }
}
```

Just like `gomods` itself, cache also uses its default values when not provided.
You can specify fields like `type` and `path` to customize caching:

``` caddyfile
gomods.test {
  gomods {
    cache {
      type local
      path /home/user/gomods_cache
    }
  }
}
```

**[Full documentation](https://gomods.okkur.org/docs)**

## Examples

### Local gomods cache

``` caddyfile
gomods.test {
  gomods {
    cache {
      type local
      path /home/user/gomods_cache
    }
  }
}
```

Setup Caddy with `gomods` enabled with a local gomods cache.
