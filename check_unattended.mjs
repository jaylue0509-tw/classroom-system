import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { readFile } from 'fs/promises';

const configPath = './firebase-applet-config.json';
const config = JSON.parse(await readFile(configPath, 'utf-8'));

const app = initializeApp(config);
const db = getFirestore(app);

async function check() {
  const snap = await getDocs(collection(db, 'attendances'));
  let unattendedCount = 0;
  const statuses = new Set();
  snap.forEach(doc => {
    const s = doc.data().status;
    statuses.add(s);
    if (s !== '已報到') unattendedCount++;
  });
  console.log(`Total records: ${snap.size}`);
  console.log(`Unattended records: ${unattendedCount}`);
  console.log(`Statuses found: ${Array.from(statuses).join(', ')}`);
  process.exit(0);
}
check();
