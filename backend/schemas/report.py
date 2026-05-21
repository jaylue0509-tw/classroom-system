from pydantic import BaseModel
from typing import List, Optional
from datetime import date

# 依據 SD 文件 3.4 定義的寫法判斷輸出格式
class StrategyPrediction(BaseModel):
    primary_style: str
    secondary_styles: List[str]
    reason: str
    suggested_slide_types: List[str]
    review_points: List[str]

# 簡報產出回應格式
class ReportGenerationResponse(BaseModel):
    report_id: str
    status: str
    download_url_pptx: str
    download_url_pdf: str
    strategy_used: StrategyPrediction
