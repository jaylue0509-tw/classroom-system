from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import router as api_router

app = FastAPI(
    title="AI 實戰學院自動化簡報系統 API", 
    description="自動解析素材、判斷簡報策略並產出 PPTX 與 PDF",
    version="1.0"
)

# 設定 CORS，允許前端呼叫
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 註冊 API 路由
app.include_router(api_router, prefix="/api")

@app.get("/")
def read_root():
    """
    健康檢查端點
    """
    return {"status": "ok", "message": "簡報生成系統 API 運行中"}
