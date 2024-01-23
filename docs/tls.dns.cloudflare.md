# tls.dns.cloudflare

<script setup>
import NewInCasket from "./components/NewInCasket.vue";
</script>

Allows you to obtain certificates using DNS records for domains managed with Cloudflare.

Credentials can be provided via environment variables, or directly in the configuration file. New token types are only 
supported if provided in the configuration file.

## Environment Variables

- `CLOUDFLARE_EMAIL` - Cloudflare account email address
- `CLOUDFLARE_API_KEY` - Cloudflare **legacy** API key

## Syntax

``` casketfile
tls {
  dns cloudflare email_or_type api_token
}
```

- **email_or_type** is your Cloudflare account email address, or the type of token you are using (`token` or
  `zone_token`).
- **api_token** is your Cloudflare API token.

## Examples

### Usage

Use the email and API key from the `CLOUDFLARE_EMAIL` and `CLOUDFLARE_API_KEY` environment variables (**recommended**): 

``` casketfile
tls {
  dns cloudflare
}
```

Use the email and API key directly in the configuration:

``` casketfile
tls {
  dns cloudflare webmaster@example.com YOUR_ACCOUNT_TOKEN
}
```

<NewInCasket /> Use a new API token:

``` casketfile
tls {
  dns cloudflare token YOUR_NEW_TOKEN
}
```

<NewInCasket /> Use a zone API token:

``` casketfile
tls {
  dns cloudflare zonetoken YOUR_SCOPED_ZONE_TOKEN
}
```
