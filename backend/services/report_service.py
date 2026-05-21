import uuid
from typing import List
from fastapi import UploadFile
from schemas.report import StrategyPrediction, ReportGenerationResponse

class ReportService:
    def __init__(self):
        pass
        
    def process_materials(self, files: List[UploadFile]) -> ReportGenerationResponse:
        """
        處理上傳的素材：解析、寫法判斷、生成大綱、文案與 PPTX
        """
        # 1. 產生 report_id
        report_id = f"report_{uuid.uuid4().hex[:8]}"
        
        # 2. TODO: 解析檔案 (Module 2)
        # TODO: 將各類檔案轉換為 JSON 結構 (Module 3)
        
        # 3. 策略判斷 (Module 4) - 模擬邏輯
        strategy = StrategyPrediction(
            primary_style="A",
            secondary_styles=["B"],
            reason="偵測到含有 KPI 與學習時數，優先採用成果進度型架構。",
            suggested_slide_types=["封面", "執行重點", "KPI", "課程與講師滿意度", "附件"],
            review_points=["KPI 數字", "報告日期", "講師姓名"]
        )
        
        # 4. TODO: 大綱與文案生成 (Module 5 & 6)
        # 5. TODO: PPTX 生成 (Module 8)
        
        # 返回模擬回應
        return ReportGenerationResponse(
            report_id=report_id,
            status="completed",
            download_url_pptx=f"/static/outputs/{report_id}.pptx",
            download_url_pdf=f"/static/outputs/{report_id}.pdf",
            strategy_used=strategy
        )

report_service = ReportService()
