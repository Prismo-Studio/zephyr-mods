const fs = require('fs');
const path = require('path');

const modsDir = path.join(__dirname, '..', 'mods');
const outFile = path.join(__dirname, '..', 'registry.json');

const mods = [];

for (const folder of fs.readdirSync(modsDir)) {
  const modJsonPath = path.join(modsDir, folder, 'mod.json');
  if (!fs.existsSync(modJsonPath)) continue;

  const mod = JSON.parse(fs.readFileSync(modJsonPath, 'utf-8'));

  const hasIcon = fs.existsSync(path.join(modsDir, folder, 'icon.png'));
  const hasReadme = fs.existsSync(path.join(modsDir, folder, 'README.md'));
  const hasChangelog = fs.existsSync(path.join(modsDir, folder, 'CHANGELOG.md'));
  const hasConfig = fs.existsSync(path.join(modsDir, folder, 'config.json'));

  mods.push({
    ...mod,
    icon: hasIcon
      ? `https://raw.githubusercontent.com/Prismo-Studio/zephyr-mods/main/mods/${folder}/icon.png`
      : null,
    readme: hasReadme
      ? `https://raw.githubusercontent.com/Prismo-Studio/zephyr-mods/main/mods/${folder}/README.md`
      : null,
    changelog: hasChangelog
      ? `https://raw.githubusercontent.com/Prismo-Studio/zephyr-mods/main/mods/${folder}/CHANGELOG.md`
      : null,
    config: hasConfig
      ? `https://raw.githubusercontent.com/Prismo-Studio/zephyr-mods/main/mods/${folder}/config.json`
      : null,
  });
}

const registry = {
  version: 1,
  lastUpdated: new Date().toISOString(),
  mods,
};

fs.writeFileSync(outFile, JSON.stringify(registry, null, 2));
console.log(`Registry built: ${mods.length} mods`);
