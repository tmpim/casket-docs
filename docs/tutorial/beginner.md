# Beginner Tutorial

This tutorial will help you install, run, and configure Caddy for your first time. It assumes you have never used a web
server before! (If you have, do the [quick start](/tutorial).) Although Caddy is very easy to use, it is still
expected that you are already familiar with using your machine:

-   Extracting, moving, and renaming files
-   Managing users and file permissions
-   Using the terminal or command line
-   Configuring your firewall

With these prerequisites, you're ready to go.

### Topics

1.  [Download](#download)
2.  [Install](#install)
3.  [Run](#run)
4.  [Configure](#configure)

## Download

Download Caddy from [the download page](/v1/download). You can get Caddy for nearly any OS and architecture. Caddy's
download page is unique from other web servers: it lets you customize your build with plugins.

For this tutorial, you don't need any plugins.

Sometimes our build server undergoes maintenance. If the download page is down, you can always download [the latest
release](https://github.com/caddyserver/caddy/releases/latest) from [GitHub](https://github.com/caddyserver/caddy)
(without plugins).

## Install

The file you downloaded is a compressed archive. You'll want to extract the Caddy binary (executable file).

#### Windows

1. Right-click the .zip file and choose "Extract All". Choose any folder to extract into, just don't lose track of it.
   You can delete it when we're done.
2. Move the executable to any folder that's easy to get at. For example, `C:\Caddy`.

#### macOS

1. Double-click the .zip file to extract it, or run this command:
  ``` shell
  unzip caddy*.zip caddy
  ```
2. Next, we will move the Caddy binary into a folder where we can execute it easily. Any \$PATH location will do:
  ``` shell
  mv ./caddy /usr/local/bin
  ```
  If you get permission denied errors, you'll need to run with sudo.

#### Linux

1. Run this command to extract the archive:
  ``` shell
  tar -xzf caddy*.tar.gz caddy
  ```
2. Next, we will move the Caddy binary into a folder where we can execute it easily. Any \$PATH location will do:
  ``` shell
  mv ./caddy /usr/local/bin
  ```
  If you get permission denied errors, you'll need to run with sudo.

## Run

By default, Caddy will use the current directory (the directory it is being executed from, *not* the folder where the
binary lives) as the root of the site. This makes it easy to work on sites locally!

Using the terminal or command line, change into the folder where your site is:

``` shell
cd path/to/my/site
```

And run Caddy:

``` shell
caddy
```

Load <http://localhost:2015> in your browser. If you see a 404 error, then Caddy is working but your site is missing an
index file.

You can quit Caddy by pressing Ctrl+C. It will terminate as gracefully as possible.

## Configure

Your site is already fit for production! But it's not ideal, because we happen to running on `localhost` (your home
computer):

1.  The site is being served on port 2015, not 80 (the standard HTTP port).
2.  The site isn't protected with HTTPS.

It's easy to fix both of these simply by telling Caddy the name of the site to serve. By "name", we mean a domain name.
We'll use `example.com` here, but you use your real domain. This next part is only going to work if your computer is
accessible from the wider Internet on ports 80 and 443, and your domain name points to the computer you're on. If not,
or you don't have a real domain name, then use `localhost` as your domain name.

The name of the site is also called the **host** or **hostname**. One way to specify the host is with a command line
option:

``` shell
caddy -host example.com
```

The first time you run Caddy with a real hostname (not `localhost`), you'll be asked to enter your email address. This
is because Caddy needs to verify you own the domain and to store the certificate safely on disk for you.

After submitting your email address, do you see an error like `permission denied`? That's because Caddy is trying to
bind to ports 80 and 443 for a *real* site, but doing this requires root or Administrator privileges:

#### Windows

Right-click cmd.exe and click "Run as Administrator". Then run Caddy again:

``` shell
C:\Caddy\caddy.exe -host example.com
```

#### macOS

Use sudo to run Caddy as root:

``` shell
sudo caddy -host example.com
```

#### Linux

On a real server, you would consider using [setcap](https://linux.die.net/man/8/setcap) like this:

``` shell
sudo setcap cap_net_bind_service=+ep $(which caddy)
caddy -host example.com
```

But for your own computer, running Caddy with sudo probably fine:

``` shell
sudo caddy -host example.com
```

If you got your permissions right and run Caddy again, you'll see:

``` caddyfile
Activating privacy features... done.
https://example.com
http://example.com
```

Using a real domain name triggers Caddy's privacy features, which operate on ports 80 and 443. If you're just using
`localhost` as your hostname, Caddy continues to serve on port 2015 unless you change it with the `-port` option.

The [command line interface](/cli) is great for quick Caddy configurations. But what if you want to reuse the same
config every time? It's easy with the Caddyfile.

The **Caddyfile** is a text file that tells Caddy how to serve. It usually lives next to your site. Let's make one.
Create a file called `Caddyfile` (no extension), and put one line in it (use your actual domain name, or localhost):

``` caddyfile
example.com
```

Caddy will automatically find that file when you start it:

``` shell
caddy
```

This works because the first line of a Caddyfile is always the address (or name) of the site to serve.

If the Caddyfile is ever in another directory than the current one, you can tell Caddy where to get the Caddyfile:

``` shell
caddy -conf ../path/to/Caddyfile
```

You almost know enough to be dangerous. Next, learn [how to wield the Caddyfile](/tutorial/caddyfile). You'll love how
easy it is to write.

Or [go to docs index](/).
