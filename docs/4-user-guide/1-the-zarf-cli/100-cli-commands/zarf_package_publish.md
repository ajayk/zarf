# zarf package publish
<!-- Auto-generated by docs/gen-cli-docs.sh -->

Publish a Zarf package to a remote registry

```
zarf package publish [PACKAGE] [REPOSITORY] [flags]
```

## Examples

```
  zarf package publish my-package.tar oci://my-registry.com/my-namespace
```

## Options

```
  -h, --help                  help for publish
  -k, --key string            Path to private key file for signing packages
      --key-pass string       Password to the private key file used for publishing packages
      --oci-concurrency int   Number of concurrent layer operations to perform when interacting with a remote package. (default 3)
```

## Options inherited from parent commands

```
  -a, --architecture string   Architecture for OCI images
      --insecure              Allow access to insecure registries and disable other recommended security enforcements such as package checksum and signature validation. This flag should only be used if you have a specific reason and accept the reduced security posture.
  -l, --log-level string      Log level when running Zarf. Valid options are: warn, info, debug, trace (default "info")
      --no-log-file           Disable log file creation
      --no-progress           Disable fancy UI progress bars, spinners, logos, etc
      --tmpdir string         Specify the temporary directory to use for intermediate files
      --zarf-cache string     Specify the location of the Zarf cache directory (default "~/.zarf-cache")
```

## SEE ALSO

* [zarf package](zarf_package.md)	 - Zarf package commands for creating, deploying, and inspecting packages

