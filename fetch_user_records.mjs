import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { readFile } from 'fs/promises';

const configPath = './firebase-applet-config.json';
const config = JSON.parse(await readFile(configPath, 'utf-8'));

const app = initializeApp(config);
const db = getFirestore(app);

async function checkData() {
  try {
    const email = 'f1665@ettoday.net';
    console.log(`Searching for records with email: ${email}`);
    const q = query(collection(db, 'attendances'), where('email', '==', email.toLowerCase().trim()));
    const snap = await getDocs(q);
    console.log(`Found ${snap.size} records.`);
    snap.forEach(doc => {
      console.log('--- Record ---');
      console.log(JSON.stringify({ id: doc.id, ...doc.data() }, null, 2));
    });
  } catch (e) {
    console.error('Error:', e);
  } finally {
    process.exit(0);
  }
}

checkData();
