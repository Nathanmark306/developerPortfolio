import path from 'path';
import fs from 'fs';
const logoDir = path.join(process.cwd(), 'public', 'Assets', 'Logos');

export function getAllLogos() {
  const logos = fs.readdirSync(logoDir);
  return logos;
}
