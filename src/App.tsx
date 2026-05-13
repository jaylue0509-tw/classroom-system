import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, LogOut, Upload, BookOpen, Clock, Award, AlertCircle, Loader2 } from 'lucide-react';
import { signInWithPopup, onAuthStateChanged, User, signOut, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { collection, query, where, getDocs, writeBatch, doc } from 'firebase/firestore';
import Papa from 'papaparse';

import { auth, googleProvider, db } from './firebase';

// Constants
const ADMIN_EMAIL = 'jaylue0509@gmail.com';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Types
interface AttendanceRecord {
  id?: string;
  email: string;
  name: string;
  aiCredit: string;
  electiveOrRequired: string;
  date: string;
  time: string;
  courseName: string;
  hours: number;
  company: string;
  department: string;
  title: string;
  status: string;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Login error', error);
      alert('登入失敗，請稍後再試。');
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] font-sans text-[#1D1D1F] selection:bg-[#0071E3] selection:text-white">
      {/* Background blobs for premium feel */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[40%] w-[40%] rounded-full bg-blue-100/40 mix-blend-multiply blur-3xl"></div>
        <div className="absolute -right-[10%] top-[20%] h-[40%] w-[40%] rounded-full bg-purple-100/40 mix-blend-multiply blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[20%] h-[40%] w-[40%] rounded-full bg-cyan-100/40 mix-blend-multiply blur-3xl"></div>
      </div>

      <main className="relative z-10 mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!user ? (
            <LoginScreen key="login" onLogin={handleLogin} />
          ) : (
            <DashboardScreen key="dashboard" user={user} onLogout={handleLogout} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

// --- Login Screen ---
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="flex min-h-[80vh] flex-col items-center justify-center text-center"
    >
      <div className="mb-8 rounded-3xl bg-white/60 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border border-white/40">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg">
          <BookOpen className="h-8 w-8" />
        </div>
      </div>
      <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        學分查詢系統
      </h1>
      <p className="mb-10 max-w-md text-lg text-[#86868B]">
        為保障您的資料安全與隱私，系統已升級。請使用您的公司 Google 帳號登入，一鍵查看您的專屬學習紀錄。
      </p>
      <button
        onClick={onLogin}
        className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#1D1D1F] px-8 py-4 text-lg font-medium text-white transition-all hover:scale-[1.02] hover:bg-[#2D2D2F] active:scale-95"
      >
        <span>Google 登入查看學分</span>
        <motion.div
          className="rounded-full bg-white/20 p-1"
          whileHover={{ x: 3 }}
        >
          <Search className="h-5 w-5" />
        </motion.div>
      </button>
    </motion.div>
  );
}

// --- Dashboard Screen ---
function DashboardScreen({ user, onLogout }: { user: User; onLogout: () => void }) {
  const isAdmin = user.email === ADMIN_EMAIL;
  const [activeTab, setActiveTab] = useState<'my-courses' | 'admin'>(isAdmin ? 'admin' : 'my-courses');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-8"
    >
      {/* Header */}
      <header className="flex w-full items-center justify-between rounded-3xl bg-white/70 px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border border-white/50">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <UserAvatar name={user.displayName || '?'} />
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight">{user.displayName}</h2>
            <p className="text-sm text-[#86868B]">{user.email}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {isAdmin && (
            <div className="flex rounded-full bg-gray-100/80 p-1 backdrop-blur-md">
              <button
                onClick={() => setActiveTab('admin')}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === 'admin'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                系統管理
              </button>
              <button
                onClick={() => setActiveTab('my-courses')}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === 'my-courses'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                我的學分
              </button>
            </div>
          )}

          <button
            onClick={onLogout}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
            title="登出"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'my-courses' ? (
          <MyCoursesView key="my-courses" userEmail={user.email || ''} />
        ) : (
          <AdminView key="admin" />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// --- My Courses View ---
function MyCoursesView({ userEmail }: { userEmail: string }) {
  const [records, setRecords] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAttendances() {
      try {
        const q = query(collection(db, 'attendances'), where('email', '==', userEmail.toLowerCase().trim()));
        const snapshot = await getDocs(q);
        const data: AttendanceRecord[] = [];
        snapshot.forEach(doc => {
          data.push({ id: doc.id, ...doc.data() } as AttendanceRecord);
        });
        
        // Filter "已報到" only and sort by date
        const validRecords = data
          .filter(r => r.status === '已報到')
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          
        setRecords(validRecords);
      } catch (error) {
        handleFirestoreError(error, OperationType.LIST, 'attendances');
      } finally {
        setLoading(false);
      }
    }
    fetchAttendances();
  }, [userEmail]);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
      </div>
    );
  }

  const totalCredits = records.reduce((sum, record) => sum + (Number(record.hours) || 0), 0);
  const totalCourses = records.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col gap-6"
    >
      {/* Stats row */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-center gap-6 rounded-3xl bg-white/70 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border border-white/50">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <Award className="h-8 w-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#86868B]">總獲取學分</p>
            <p className="text-4xl font-semibold tracking-tight">{totalCredits}<span className="ml-1 text-xl font-normal text-gray-500">學分</span></p>
          </div>
        </div>
        <div className="flex items-center gap-6 rounded-3xl bg-white/70 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border border-white/50">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
            <BookOpen className="h-8 w-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#86868B]">已完成課程</p>
            <p className="text-4xl font-semibold tracking-tight">{totalCourses}<span className="ml-1 text-xl font-normal text-gray-500">堂</span></p>
          </div>
        </div>
      </div>

      {/* Course List */}
      <div className="rounded-3xl bg-white/70 p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border border-white/50">
        <div className="px-6 py-5">
          <h3 className="text-xl font-semibold tracking-tight">修課紀錄</h3>
          <p className="text-sm text-[#86868B] mt-1">此列表僅顯示狀態為「已報到」的紀錄</p>
        </div>
        
        {records.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
              <AlertCircle className="h-8 w-8" />
            </div>
            <p className="text-lg font-medium text-gray-900">目前尚無學分紀錄</p>
            <p className="mt-1 text-sm text-gray-500">當您完成課程報到後，紀錄將會顯示於此。</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-100/50">
            {records.map((record) => (
              <li key={record.id} className="px-6 py-5 transition-colors hover:bg-white/40 sm:rounded-2xl">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="text-sm font-medium text-blue-600">{record.electiveOrRequired} • {record.aiCredit === 'V' ? 'AI 學分' : '一般學分'}</p>
                    <p className="text-lg font-medium tracking-tight text-gray-900">{record.courseName}</p>
                    <div className="mt-1 flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {record.date} {record.time}
                      </span>
                      <span>{record.company} / {record.department}</span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1 sm:flex-col sm:items-end sm:justify-center">
                    <span className="text-2xl font-semibold text-gray-900">+{record.hours}</span>
                    <span className="text-sm font-medium text-gray-500">學分</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

// --- Admin View ---
function AdminView() {
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setStatus({ type: 'idle', message: '解析檔案中...' });

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        try {
          const data = results.data as any[];
          
          if (!data || data.length === 0) {
            throw new Error('未找到資料或格式不符');
          }

          // Format incoming CSV base mapping
          // Columns: AI學分,選/必修,日期,時間,課程名稱,時數,公司,姓名,部門,職稱,報到狀況,email
          
          const formattedRecords: AttendanceRecord[] = [];
          
          for(const row of data) {
            // Because headers might have extra spaces or different casing depending on tools, normalize access
            const email = (row['email'] || row['Email'] || '').trim().toLowerCase();
            const name = (row['姓名'] || '').trim();
            const courseName = (row['課程名稱'] || '').trim();
            const rawHours = row['時數'];
            const hours = parseFloat(rawHours);
            const attendanceStatus = (row['報到狀況'] || '').trim();
            
            if(!email || !name || !courseName) {
              continue; // Skip invalid lines gracefully
            }
            
            formattedRecords.push({
              email: email,
              name: name,
              aiCredit: (row['AI學分'] || '').trim(),
              electiveOrRequired: (row['選/必修'] || '').trim(),
              date: (row['日期'] || '').trim(),
              time: (row['時間'] || '').trim(),
              courseName: courseName,
              hours: isNaN(hours) ? 0 : hours,
              company: (row['公司'] || '').trim(),
              department: (row['部門'] || '').trim(),
              title: (row['職稱'] || '').trim(),
              status: attendanceStatus
            });
          }

          if(formattedRecords.length === 0) {
           throw new Error('無有效資料行 (請檢查欄位名稱是否包含 email, 姓名, 課程名稱)');
          }

          setStatus({ type: 'idle', message: '刪除舊有資料中...' });

          // 1. Delete all existing records
          // In an enterprise app, we might paginate deletion.
          // For simplicity in this demo, we fetch all and batch delete 500 at a time.
          const collectionRef = collection(db, 'attendances');
          let oldDocs;
          try {
            oldDocs = await getDocs(collectionRef);
          } catch (e) {
             handleFirestoreError(e, OperationType.LIST, 'attendances');
             return;
          }
          
          let deleteBatch = writeBatch(db);
          let deleteCount = 0;
          for (const d of oldDocs.docs) {
            deleteBatch.delete(d.ref);
            deleteCount++;
            if(deleteCount === 500) {
              try {
                await deleteBatch.commit();
              } catch (e) {
                handleFirestoreError(e, OperationType.DELETE, 'attendances');
              }
              deleteBatch = writeBatch(db);
              deleteCount = 0;
            }
          }
          if(deleteCount > 0) {
            try {
              await deleteBatch.commit();
            } catch(e) {
              handleFirestoreError(e, OperationType.DELETE, 'attendances');
            }
          }

          setStatus({ type: 'idle', message: `寫入 ${formattedRecords.length} 筆新資料中...` });

          // 2. Insert new records in batches of 500
          let insertBatch = writeBatch(db);
          let insertCount = 0;
          
          for (const record of formattedRecords) {
            const newDocRef = doc(collectionRef); // auto-generate ID
            insertBatch.set(newDocRef, record);
            insertCount++;
            
            if(insertCount === 500) {
              try {
               await insertBatch.commit();
              } catch(e) {
                handleFirestoreError(e, OperationType.WRITE, 'attendances');
              }
               insertBatch = writeBatch(db);
               insertCount = 0;
            }
          }
          if(insertCount > 0) {
            try {
              await insertBatch.commit();
            } catch(e) {
              handleFirestoreError(e, OperationType.WRITE, 'attendances');
            }
          }

          setStatus({ type: 'success', message: `成功匯入並覆蓋 ${formattedRecords.length} 筆資料！` });
        } catch (error: any) {
          console.error("Upload error", error);
          setStatus({ type: 'error', message: error.message || '匯入失敗' });
        } finally {
          setUploading(false);
          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }
        }
      },
      error: (error) => {
        setUploading(false);
        setStatus({ type: 'error', message: `解析 CSV 失敗: ${error.message}` });
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="overflow-hidden rounded-3xl bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border border-white/50"
    >
      <div className="border-b border-gray-100/50 bg-white/30 px-8 py-6">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900">系統管理</h3>
        <p className="mt-1 text-sm text-gray-500">直接上傳最新的 CSV 檔案，系統將會完全覆蓋舊紀錄，以最新檔案為主。</p>
      </div>
      <div className="p-8 pb-12 text-center">
        <label
           className={`group relative flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-white hover:bg-gray-50/50 hover:border-[#0071E3] transition-all px-6 py-12 ${uploading ? 'pointer-events-none opacity-50' : ''}`}
        >
           <div className="rounded-full bg-blue-50 p-4 transition-transform group-hover:scale-110">
              <Upload className="h-8 w-8 text-blue-600" />
           </div>
           <p className="mt-4 text-base font-medium text-gray-900">點擊或拖曳 CSV 檔案至此</p>
           <p className="mt-1 text-sm text-gray-500">支援副檔名：.csv</p>
           
           <input 
             type="file" 
             className="hidden" 
             accept=".csv"
             onChange={handleFileUpload}
             disabled={uploading}
             ref={fileInputRef}
           />
        </label>

        {status.message && (
          <div className="mt-6 flex flex-col items-center justify-center gap-2">
            {uploading && <Loader2 className="h-6 w-6 animate-spin text-blue-500" />}
            <p className={`text-base font-medium ${
              status.type === 'error' ? 'text-red-500' :
              status.type === 'success' ? 'text-green-500' :
              'text-blue-500'
            }`}>
              {status.message}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Default Avatar helper
function UserAvatar({ name }: { name: string }) {
  const initial = name.charAt(0).toUpperCase();
  return <span className="text-lg font-semibold">{initial}</span>;
}
