from fastapi import APIRouter, UploadFile, File, HTTPException
from typing import List
from schemas.report import ReportGenerationResponse
from services.report_service import report_service

router = APIRouter()

@router.post("/generate-report", response_model=ReportGenerationResponse)
async def generate_report(files: List[UploadFile] = File(...)):
    """
    接收本週素材，進行自動化簡報生成
    """
    if not files:
        raise HTTPException(status_code=400, detail="請上傳至少一個素材檔案")
        
    try:
        # 將檔案傳遞給 Service 層處理
        response = report_service.process_materials(files)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
