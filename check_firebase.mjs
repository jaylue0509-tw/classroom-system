import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const configPath = join(process.cwd(), 'firebase-applet-config.json');
const config = JSON.parse(await readFile(configPath, 'utf-8'));

const app = initializeApp(config);
const db = getFirestore(app);

async function checkData() {
  try {
    console.log('Searching for 江建鴻...');
    const q = query(collection(db, 'attendances'), where('name', '==', '江建鴻'));
    const snap = await getDocs(q);
    console.log(`Found ${snap.size} records.`);
    snap.forEach(doc => {
      console.log('--- Record ---');
      console.log(JSON.stringify(doc.data(), null, 2));
    });
  } catch (e) {
    console.error('Error:', e);
  } finally {
    process.exit(0);
  }
}

checkData();
