import React, { useEffect, useState, useRef, useMemo, useDeferredValue } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, LogOut, Upload, BookOpen, Clock, Award, AlertCircle, Loader2, Shield, ChevronLeft, FileText, X } from 'lucide-react';
import { signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, User, signOut, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { collection, query, where, getDocs, writeBatch, doc, orderBy } from 'firebase/firestore';
import Papa from 'papaparse';

import { auth, googleProvider, db } from './firebase';

// Constants
const ADMIN_EMAIL = 'admin@hr.com';

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
  authInfo: any;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
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

export interface AppUser {
  email: string;
  displayName: string;
  isAdmin: boolean;
}

export default function App() {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const studentData = localStorage.getItem('student_login');
    if (studentData) {
      setUser(JSON.parse(studentData));
      setLoading(false);
      return;
    }

    setPersistence(auth, browserLocalPersistence);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({ email: currentUser.email || '', displayName: currentUser.displayName || '管理員', isAdmin: currentUser.email === ADMIN_EMAIL });
      } else {
        if (!localStorage.getItem('student_login')) {
          setUser(null);
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    if (user?.isAdmin) {
      signOut(auth);
    } else {
      localStorage.removeItem('student_login');
      setUser(null);
    }
  };

  const handleStudentLogin = (studentUser: AppUser) => {
    setUser(studentUser);
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#F5F5F7]">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
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
            <LoginScreen key="login" onStudentLogin={handleStudentLogin} />
          ) : (
            <DashboardScreen key="dashboard" user={user} onLogout={handleLogout} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

// --- Login Screen ---
function LoginScreen({ onStudentLogin }: { onStudentLogin: (user: AppUser) => void; key?: string }) {
  const [mode, setMode] = useState<'user' | 'admin'>('user');
  
  // Admin form state (NO DEFAULT VALUES AS REQUESTED)
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  
  // Student form state
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');

  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleStudentLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentEmail) {
      setLoginError('請填寫完整姓名與公司信箱');
      return;
    }
    
    setIsLoggingIn(true);
    setLoginError('');
    
    try {
      const q = query(collection(db, 'attendances'), where('email', '==', studentEmail.toLowerCase().trim()));
      const snap = await getDocs(q);
      
      if (snap.empty) {
        setLoginError('查無此信箱的修課紀錄，請確認信箱是否輸入正確');
        setIsLoggingIn(false);
        return;
      }
      
      const userObj: AppUser = { email: studentEmail.toLowerCase().trim(), displayName: studentName.trim(), isAdmin: false };
      localStorage.setItem('student_login', JSON.stringify(userObj));
      onStudentLogin(userObj);
    } catch (err: any) {
      console.error('Student Login error', err);
      setLoginError('查詢失敗，請稍後再試。');
      setIsLoggingIn(false);
    }
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminEmail || !adminPassword) {
      setLoginError('請填寫完整帳號密碼');
      return;
    }
    try {
      setIsLoggingIn(true);
      setLoginError('');
      await signInWithEmailAndPassword(auth, adminEmail, adminPassword);
    } catch (error: any) {
      console.error('Admin Login error', error);
      setLoginError('帳號或密碼錯誤');
      setIsLoggingIn(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="flex min-h-[80vh] flex-col items-center justify-center text-center"
    >
      {/* Toggle */}
      <div className="flex bg-gray-200/50 rounded-full p-1.5 mb-10 backdrop-blur-md">
        <button 
          onClick={() => { setMode('user'); setLoginError(''); }}
          className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${mode === 'user' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          同仁查詢
        </button>
        <button 
          onClick={() => { setMode('admin'); setLoginError(''); }}
          className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${mode === 'admin' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          人資管理
        </button>
      </div>

      <AnimatePresence mode="wait">
        {mode === 'user' ? (
          <motion.div
            key="user"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center w-full max-w-sm"
          >
            <div className="mb-8 rounded-[2rem] bg-white/60 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border border-white/40">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg">
                <BookOpen className="h-8 w-8" />
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
              學分查詢系統
            </h1>
            <p className="mb-8 text-lg text-gray-500 font-medium">
              請輸入您的姓名與公司信箱，一鍵查看您的專屬學習紀錄。
            </p>
            
            <form onSubmit={handleStudentLogin} className="flex flex-col gap-4 w-full">
              <input 
                type="text" 
                placeholder="請輸入姓名 (例如: 江建鴻)" 
                className="w-full bg-white/80 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 font-medium placeholder:text-gray-400 placeholder:font-normal border border-gray-200" 
                value={studentName} 
                onChange={e => setStudentName(e.target.value)}
                disabled={isLoggingIn} 
                autoComplete="name"
              />
              <input 
                type="email" 
                placeholder="請輸入公司信箱" 
                className="w-full bg-white/80 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 font-medium placeholder:text-gray-400 placeholder:font-normal border border-gray-200" 
                value={studentEmail} 
                onChange={e => setStudentEmail(e.target.value)}
                disabled={isLoggingIn}
                autoComplete="email"
              />
              
              {loginError && <p className="text-red-500 text-sm font-medium text-left px-2">{loginError}</p>}
              
              <button 
                type="submit" 
                disabled={isLoggingIn}
                className="w-full bg-[#1D1D1F] text-white rounded-2xl px-6 py-4 font-bold flex justify-center items-center gap-2 mt-2 hover:bg-[#2D2D2F] transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
              >
                {isLoggingIn ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />} 
                查詢學分紀錄
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="admin"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white/80 rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl border border-white w-full max-w-md"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-6">
              <Shield className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">人資管理者後台</h2>
            <p className="text-gray-500 font-medium mb-8">請輸入您的管理員帳號密碼</p>
            
            <form onSubmit={handleAdminLogin} className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="請輸入管理員信箱" 
                className="w-full bg-blue-50/40 rounded-2xl px-6 py-4 outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 font-medium placeholder:text-gray-400 placeholder:font-normal" 
                value={adminEmail} 
                onChange={e => setAdminEmail(e.target.value)}
                disabled={isLoggingIn} 
                autoComplete="off"
              />
              <input 
                type="password" 
                placeholder="請輸入密碼" 
                className="w-full bg-blue-50/40 rounded-2xl px-6 py-4 outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 font-medium placeholder:text-gray-400 placeholder:font-normal" 
                value={adminPassword} 
                onChange={e => setAdminPassword(e.target.value)}
                disabled={isLoggingIn}
                autoComplete="new-password"
              />
              
              {loginError && <p className="text-red-500 text-sm font-medium text-left px-2">{loginError}</p>}
              
              <button 
                type="submit" 
                disabled={isLoggingIn}
                className="w-full bg-[#1D1D1F] text-white rounded-2xl px-6 py-4 font-bold flex justify-center items-center gap-2 mt-2 hover:bg-[#2D2D2F] transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
              >
                {isLoggingIn ? <Loader2 className="h-5 w-5 animate-spin" /> : <Shield className="h-5 w-5" />} 
                安全登入
              </button>
            </form>

            <div className="mt-8 bg-indigo-50/40 rounded-2xl p-6 border border-indigo-100/50 text-left">
              <h3 className="text-indigo-600 font-bold text-sm mb-2">權限說明</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">管理員執行全系統資料匯入、刪除舊紀錄與匯出全站備份。不僅授權信箱訪問。</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// --- Dashboard Screen ---
function DashboardScreen({ user, onLogout }: { user: AppUser; onLogout: () => void; key?: string }) {
  const isAdmin = user.email === ADMIN_EMAIL;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6"
    >
      {/* Header matching screenshot */}
      <header className="flex w-full items-center justify-between rounded-full bg-white/80 px-4 py-3 shadow-[0_4px_20px_rgb(0,0,0,0.03)] backdrop-blur-xl border border-white">
        <button 
          onClick={onLogout}
          className="flex items-center gap-2 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full transition-colors font-bold text-sm"
        >
          <ChevronLeft className="h-5 w-5" /> 返回查詢
        </button>
        
        <div className="flex items-center gap-3 pr-2">
          <div className="text-right">
            <h2 className="text-base font-bold tracking-tight text-gray-900">{user.displayName || (isAdmin ? '管理員' : '使用者')}</h2>
            <p className="text-[10px] font-bold text-gray-400 uppercase">{user.email}</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 border border-gray-200">
            <FileText className="h-5 w-5" />
          </div>
        </div>
      </header>

      {/* Content */}
      <AnimatePresence mode="wait">
        {!isAdmin ? (
          <MyCoursesView key="my-courses" userEmail={user.email || ''} />
        ) : (
          <AdminView key="admin" />
        )}
      </AnimatePresence>
    </motion.div>
  );
}


// --- Dashboard Stats Component ---
function DashboardStats({ records }: { records: AttendanceRecord[] }) {
  const [showCourseModal, setShowCourseModal] = useState(false);

  // Memoize all heavy calculations so they don't re-run when modal toggles
  const stats = useMemo(() => {
    // Filter attended vs all for calculations
    const attendedRecords = records.filter(r => r.status === '已報到');
    
    // --- Total Calculations (For the top 4 cards) ---
    const totalCredits = attendedRecords.reduce((sum, record) => sum + (Number(record.hours) || 0), 0);
    const totalCompleted = attendedRecords.length;
    const totalEnrolled = records.length;
    
    const totalRequiredCount = attendedRecords.filter(r => r.electiveOrRequired === '必修').length;
    const totalElectiveCount = attendedRecords.filter(r => r.electiveOrRequired === '選修').length;
    
    const requiredTarget = 2;
    const electiveTarget = 4;
    
    const requiredMissing = Math.max(0, requiredTarget - totalRequiredCount);
    const electiveMissing = Math.max(0, electiveTarget - totalElectiveCount);

    // --- AI Specific Calculations (For the AI Courses section) ---
    const isAICourse = (r: AttendanceRecord) => r.aiCredit === 'AI 學分課程' || r.aiCredit === 'V' || r.courseName.includes('AI');
    const aiRecords = attendedRecords.filter(isAICourse);
    const nonAiRecords = attendedRecords.filter(r => !isAICourse(r));

    const totalAICredits = aiRecords.reduce((sum, record) => sum + (Number(record.hours) || 0), 0);
    const totalAICourses = aiRecords.length;
    const aiRequiredCount = aiRecords.filter(r => r.electiveOrRequired === '必修').length;
    const aiElectiveCount = aiRecords.filter(r => r.electiveOrRequired === '選修').length;

    return {
      totalCredits, totalCompleted, totalEnrolled,
      totalRequiredCount, totalElectiveCount,
      requiredTarget, electiveTarget, requiredMissing, electiveMissing,
      aiRecords, nonAiRecords,
      totalAICredits, totalAICourses, aiRequiredCount, aiElectiveCount
    };
  }, [records]);

  const { 
    totalCredits, totalCompleted, totalEnrolled, 
    totalRequiredCount, totalElectiveCount, 
    requiredTarget, electiveTarget, requiredMissing, electiveMissing, 
    aiRecords, nonAiRecords, 
    totalAICredits, totalAICourses, aiRequiredCount, aiElectiveCount 
  } = stats;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="flex flex-col gap-6"
      >
        {/* 4 Cards Stats row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1 */}
          <div className="flex flex-col justify-center gap-2 rounded-[2rem] bg-white/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border border-white">
            <div className="flex justify-between items-start">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-500">
                <Award className="h-7 w-7" />
              </div>
              <div className="text-right flex flex-col items-end">
                <p className="text-xs font-bold text-gray-400 mb-1">累計修課時數</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight text-gray-900">{totalCredits}</span>
                  <span className="text-xs font-bold text-gray-400">時數</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => setShowCourseModal(true)}
            className="flex flex-col justify-center gap-2 rounded-[2rem] bg-white/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border border-white cursor-pointer hover:bg-white transition-colors group"
          >
            <div className="flex justify-between items-start">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-500 group-hover:scale-110 transition-transform">
                <BookOpen className="h-7 w-7" />
              </div>
              <div className="text-right flex flex-col items-end">
                <p className="text-xs font-bold text-gray-400 mb-1">總共課程數量</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight text-gray-900">{totalEnrolled}</span>
                  <span className="text-xs font-bold text-gray-400">堂</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: 必修 */}
          <div className="flex flex-col justify-center rounded-[2rem] bg-white/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border border-white">
            <div className="flex justify-between items-center mb-4">
              <span className="px-3 py-1 bg-red-50 text-red-500 text-xs font-bold rounded-full">必修</span>
              <span className="text-gray-400 text-sm font-bold">{totalRequiredCount}/{requiredTarget}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 mb-3 overflow-hidden">
              <div className="bg-red-400 h-2 rounded-full" style={{ width: `${Math.min(100, (totalRequiredCount/requiredTarget)*100)}%` }}></div>
            </div>
            <p className="text-xs text-gray-400 font-bold">
              {requiredMissing > 0 ? `差 ${requiredMissing} 堂達標` : '✅ 必修已達標'}
            </p>
          </div>

          {/* Card 4: 選修 */}
          <div className="flex flex-col justify-center rounded-[2rem] bg-white/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border border-white">
            <div className="flex justify-between items-center mb-4">
              <span className="px-3 py-1 bg-purple-50 text-purple-500 text-xs font-bold rounded-full">選修</span>
              <span className="text-gray-400 text-sm font-bold">{totalElectiveCount}/{electiveTarget}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 mb-3 overflow-hidden">
              <div className="bg-purple-400 h-2 rounded-full" style={{ width: `${Math.min(100, (totalElectiveCount/electiveTarget)*100)}%` }}></div>
            </div>
            <p className="text-xs text-gray-400 font-bold">
              {requiredMissing > 0 ? `差 ${electiveMissing} 堂達標` : '✅ 選修已達標'}
            </p>
          </div>

        </div>

        {/* AI Course List */}
        <div className="rounded-[2.5rem] bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border border-white">
          <div className="px-8 py-8 pb-4">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-black tracking-tight text-gray-900">AI 學分課程</h3>
              <span className="text-xs font-bold text-orange-500 bg-orange-50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span> 採計學分 • {totalAICourses} 筆
              </span>
            </div>
            
            <div className="flex gap-3 text-xs font-bold mb-2">
              <span className="flex items-center gap-1.5 bg-gray-50 text-gray-500 px-3 py-1.5 rounded-full border border-gray-100">
                <Clock className="w-3.5 h-3.5" /> {totalAICredits} 小時數
              </span>
              <span className="text-red-500 bg-red-50 px-3 py-1.5 rounded-full">必修 {aiRequiredCount} 堂</span>
              <span className="text-purple-500 bg-purple-50 px-3 py-1.5 rounded-full">選修 {aiElectiveCount} 堂</span>
            </div>
          </div>
          
          {aiRecords.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                <AlertCircle className="h-8 w-8" />
              </div>
              <p className="text-lg font-bold text-gray-900">目前尚無學分紀錄</p>
              <p className="mt-1 text-sm font-medium text-gray-500">當您完成課程報到後，紀錄將會顯示於此。</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100/60 px-4 pb-4">
              {aiRecords.map((record) => (
                <li key={record.id} className="p-4 transition-colors hover:bg-white/60 rounded-2xl group flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="hidden sm:flex mt-1 w-12 h-12 rounded-xl bg-orange-50 text-orange-500 items-center justify-center font-black text-sm text-center leading-tight tracking-wider">
                      人工<br/>智慧
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        {record.electiveOrRequired && record.electiveOrRequired !== 'X' && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${record.electiveOrRequired === '必修' ? 'text-red-500 bg-red-50' : 'text-purple-500 bg-purple-50'}`}>
                            {record.electiveOrRequired}
                          </span>
                        )}
                        <span className="text-xs text-gray-400 font-bold">{record.date}</span>
                      </div>
                      <p className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {record.courseName} <span className="text-sm font-medium text-gray-500 ml-2">({record.name})</span>
                      </p>
                      <p className="text-xs text-gray-400 font-bold">{record.company}·{record.department}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center pr-2">
                    <span className="text-xl font-black text-gray-900">+{record.hours}</span>
                    <span className="text-[10px] font-bold text-gray-400">時數</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Non-AI Course List */}
        <div className="rounded-[2.5rem] bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border border-white">
          <div className="px-8 py-8 pb-4">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-black tracking-tight text-gray-900">一般課程</h3>
              <span className="text-xs font-bold text-blue-500 bg-blue-50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> 採計學分 • {nonAiRecords.length} 筆
              </span>
            </div>
          </div>
          
          {nonAiRecords.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                <AlertCircle className="h-8 w-8" />
              </div>
              <p className="text-lg font-bold text-gray-900">目前尚無一般課程紀錄</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100/60 px-4 pb-4">
              {nonAiRecords.map((record) => (
                <li key={record.id} className="p-4 transition-colors hover:bg-white/60 rounded-2xl group flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="hidden sm:flex mt-1 w-12 h-12 rounded-xl bg-blue-50 text-blue-500 items-center justify-center font-black text-sm text-center leading-tight tracking-wider">
                      一般<br/>課程
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        {record.electiveOrRequired && record.electiveOrRequired !== 'X' && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${record.electiveOrRequired === '必修' ? 'text-red-500 bg-red-50' : 'text-purple-500 bg-purple-50'}`}>
                            {record.electiveOrRequired}
                          </span>
                        )}
                        <span className="text-xs text-gray-400 font-bold">{record.date}</span>
                      </div>
                      <p className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {record.courseName} <span className="text-sm font-medium text-gray-500 ml-2">({record.name})</span>
                      </p>
                      <p className="text-xs text-gray-400 font-bold">{record.company}·{record.department}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center pr-2">
                    <span className="text-xl font-black text-gray-900">+{record.hours}</span>
                    <span className="text-[10px] font-bold text-gray-400">時數</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>

      {/* Course Enrolled Modal */}
      <AnimatePresence>
        {showCourseModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
            >
              <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-white">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">總共課程清單</h3>
                  <p className="text-sm text-gray-500 font-medium mt-1">共 {totalEnrolled} 筆報名紀錄，已完成 {totalCompleted} 筆</p>
                </div>
                <button 
                  onClick={() => setShowCourseModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              <div className="overflow-y-auto flex-1 p-6 bg-gray-50/50">
                <ul className="flex flex-col gap-3">
                  {records.map((record, i) => {
                    const isAttended = record.status === '已報到';
                    return (
                      <li key={`${record.id}-${i}`} className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-blue-200 transition-colors shadow-sm">
                        <div className="flex flex-col gap-1">
                          <p className="text-base font-bold text-gray-900">{record.courseName}</p>
                          <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                            <span>{record.name} ({record.company}·{record.department})</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span>{record.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${isAttended ? 'bg-green-50 text-green-600 border-green-200' : 'bg-red-50 text-red-500 border-red-200'}`}>
                            {isAttended ? '✅ 已上過 (已報到)' : '❌ 未上過 (未報到)'}
                          </span>
                          {isAttended && (
                            <span className="text-sm font-black text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                              +{record.hours} hr
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- My Courses View ---
function MyCoursesView({ userEmail }: { userEmail: string; key?: string }) {
  const [records, setRecords] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAttendances() {
      try {
        const q = query(
          collection(db, 'attendances'), 
          where('email', '==', userEmail.toLowerCase().trim()),
          orderBy('date', 'desc')
        );
        const snapshot = await getDocs(q);
        const data: AttendanceRecord[] = [];
        snapshot.forEach(doc => {
          data.push({ id: doc.id, ...doc.data() } as AttendanceRecord);
        });
        
        setRecords(data);
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

  return <DashboardStats records={records} />;
}

// --- Admin View ---
function AdminView() {
  const [adminTab, setAdminTab] = useState<'query' | 'upload'>('query');
  
  // --- Attendance Upload State ---
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Query State ---
  const [allRecords, setAllRecords] = useState<AttendanceRecord[]>([]);
  const [loadingQuery, setLoadingQuery] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (adminTab === 'query' && allRecords.length === 0) {
      fetchAllFilesInCompany();
    }
  }, [adminTab, allRecords.length]);

  const fetchAllFilesInCompany = async () => {
    setLoadingQuery(true);
    try {
      const q = query(collection(db, 'attendances'), orderBy('date', 'desc'));
      const snapshot = await getDocs(q);
      const data: AttendanceRecord[] = [];
      snapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() } as AttendanceRecord);
      });
      
      setAllRecords(data);
    } catch (error) {
      handleFirestoreError(error, OperationType.LIST, 'attendances');
    } finally {
      setLoadingQuery(false);
    }
  };

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
          if (!data || data.length === 0) throw new Error('未找到資料或格式不符');

          const formattedRecords: AttendanceRecord[] = [];
          
          for(const row of data) {
            const email = (row['email'] || row['Email'] || '').trim().toLowerCase();
            const name = (row['姓名'] || '').trim();
            const courseName = (row['課程名稱'] || '').trim();
            const rawHours = row['時數'];
            const hours = parseFloat(rawHours);
            const attendanceStatus = (row['報到狀況'] || '').trim();
            
            if(!email || !name || !courseName) continue;
            
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

          if(formattedRecords.length === 0) throw new Error('無有效資料行');

          setStatus({ type: 'idle', message: '刪除舊有資料中...' });

          const collectionRef = collection(db, 'attendances');
          const oldDocs = await getDocs(collectionRef);
          
          let deleteBatch = writeBatch(db);
          let deleteCount = 0;
          for (const d of oldDocs.docs) {
            deleteBatch.delete(d.ref);
            deleteCount++;
            if(deleteCount === 500) {
              await deleteBatch.commit();
              deleteBatch = writeBatch(db);
              deleteCount = 0;
            }
          }
          if(deleteCount > 0) await deleteBatch.commit();

          setStatus({ type: 'idle', message: `寫入 ${formattedRecords.length} 筆新資料中...` });

          let insertBatch = writeBatch(db);
          let insertCount = 0;
          for (const record of formattedRecords) {
            const newDocRef = doc(collectionRef);
            insertBatch.set(newDocRef, record);
            insertCount++;
            if(insertCount === 500) {
               await insertBatch.commit();
               insertBatch = writeBatch(db);
               insertCount = 0;
            }
          }
          if(insertCount > 0) await insertBatch.commit();

          setStatus({ type: 'success', message: `成功匯入並覆蓋 ${formattedRecords.length} 筆資料！` });
          
          if (adminTab === 'query') {
            await fetchAllFilesInCompany();
          } else {
            // Force refetch next time tab changes
            setAllRecords([]);
          }
        } catch (error: any) {
          setStatus({ type: 'error', message: error.message || '匯入失敗' });
        } finally {
          setUploading(false);
          if (fileInputRef.current) fileInputRef.current.value = '';
        }
      },
      error: (error) => {
        setUploading(false);
        setStatus({ type: 'error', message: `解析 CSV 失敗: ${error.message}` });
      }
    });
  };

  // Add deferred value to avoid blocking UI during fast typing
  const deferredSearchTerm = useDeferredValue(searchTerm);

  // Memoize filtered records so we don't recalculate unless search term or data changes
  const filteredRecords = useMemo(() => {
    return allRecords.filter(record => {
      if (!deferredSearchTerm) return true;
      const term = deferredSearchTerm.toLowerCase();
      return (
        record.name.toLowerCase().includes(term) ||
        record.email.toLowerCase().includes(term) ||
        record.courseName.toLowerCase().includes(term) ||
        record.company.toLowerCase().includes(term) ||
        record.department.toLowerCase().includes(term)
      );
    });
  }, [allRecords, deferredSearchTerm]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="flex flex-col gap-6"
    >
      <div className="overflow-hidden rounded-[2.5rem] bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border border-white">
        <div className="border-b border-gray-100/60 bg-white/40 px-8 py-6">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-4">人資管理後台</h3>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setAdminTab('query')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${adminTab === 'query' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              學員進度查詢
            </button>
            <button 
              onClick={() => setAdminTab('upload')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${adminTab === 'upload' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              學分資料匯入
            </button>
          </div>
        </div>

        <div className="p-8 pb-12">
          <AnimatePresence mode="wait">
            {adminTab === 'query' && (
              <motion.div key="query" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-6">
                <div className="relative w-full max-w-2xl mx-auto">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="輸入姓名、信箱、課程名稱、部門關鍵字查詢..."
                    className="w-full bg-gray-50 rounded-2xl pl-12 pr-6 py-4 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 font-medium placeholder:text-gray-400 placeholder:font-normal border border-gray-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                {loadingQuery ? (
                  <div className="flex h-64 items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                  </div>
                ) : (
                  <DashboardStats records={filteredRecords} />
                )}
              </motion.div>
            )}

            {adminTab === 'upload' && (
              <motion.div key="upload" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                <p className="mb-6 text-sm text-gray-500 font-medium">直接上傳最新的 CSV 檔案，系統將會完全覆蓋舊紀錄，以最新檔案為主。</p>
                <label className={`group relative flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-white hover:bg-indigo-50/30 hover:border-indigo-500 transition-all px-6 py-16 ${uploading ? 'pointer-events-none opacity-50' : ''}`}>
                   <div className="rounded-2xl bg-indigo-50 p-4 transition-transform group-hover:scale-110 mb-4">
                      <Upload className="h-8 w-8 text-indigo-600" />
                   </div>
                   <p className="text-lg font-bold text-gray-900 mb-1">點擊或拖曳 CSV 檔案至此</p>
                   <p className="text-sm font-medium text-gray-500">支援副檔名：.csv</p>
                   <input type="file" className="hidden" accept=".csv" onChange={handleFileUpload} disabled={uploading} ref={fileInputRef} />
                </label>
                {status.message && (
                  <div className="mt-6 flex flex-col items-center justify-center gap-3">
                    {uploading && <Loader2 className="h-8 w-8 animate-spin text-indigo-500" /> }
                    <p className={`text-sm font-bold px-4 py-2 rounded-full ${status.type === 'error' ? 'bg-red-50 text-red-500' : status.type === 'success' ? 'bg-green-50 text-green-500' : 'bg-indigo-50 text-indigo-500'}`}>
                      {status.message}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

// Default Avatar helper
function UserAvatar({ name }: { name: string }) {
  const initial = name.charAt(0).toUpperCase();
  return <span className="text-lg font-semibold">{initial}</span>;
}
