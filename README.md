# Zephyr Mods

Community mod registry for [Zephyr](https://github.com/Prismo-Studio/Zephyr).

## Submit a mod

1. Fork this repo
2. Create a folder in `mods/` with your mod slug (lowercase, dashes)
3. Add your `mod.json`, `icon.png`, `README.md`, and optionally `CHANGELOG.md` and `config.json`
4. Publish your .dll as a GitHub Release on your own repo
5. Open a PR

## Update a mod

Open a PR that updates the `version` and `download` fields in your `mod.json`.

## mod.json format

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | yes | Display name |
| slug | string | yes | Unique identifier (lowercase, dashes) |
| author | string | yes | Author name |
| version | string | yes | Semver version |
| description | string | yes | Short description |
| games | string[] | yes | Compatible game slugs |
| dependencies | string[] | no | Required mods |
| repository | string | yes | Source repo URL |
| download | string | yes | Direct download URL for the .dll |
| categories | string[] | no | Mod categories |
| nsfw | boolean | no | Defaults to false |
| deprecated | boolean | no | Defaults to false |

## config.json format

Optional. Declares the config schema so Zephyr can render a config editor for your mod.

```json
{
  "sections": {
    "SectionName": {
      "SettingName": {
        "type": "bool | int | float | string",
        "default": "default value",
        "description": "What this setting does"
      }
    }
  }
}
```
