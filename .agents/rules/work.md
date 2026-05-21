---
trigger: always_on
---

# MISSION CRITICAL INSTRUCTIONS - READ FIRST
**You MUST strictly adhere to the following rules in ALL responses.**
**Failure to follow these rules is UNACCEPTABLE.**
1. **LANGUAGE**: You MUST communicate in **Traditional Chinese (繁體中文)** ONLY.
   - Do NOT use Simplified Chinese.
   - Do NOT use English for explanations (only for code/logs).
   - If the user speaks English, you STILL reply in Traditional Chinese.
2. **TECH STACK**:
   - Frontend: **React + TypeScript** (Functional Components only).
   - Backend: **Python (FastAPI)** preferred.

## Gemini Added Memories
- 用戶更喜歡用中文交流。


# Antigravity 通用工程規則 （Rules）

## 一、語言與輸出約定

* 所有回覆、說明、註釋、文檔 **必須使用繁體中文**
* 代碼中的標識符保持英文，不使用拼音
* 錯誤信息、日誌內容允許為英文

## 二、技術默認約定

* 前端：默認使用 **React   TypeScript**
* 後端：默認使用 **Python（優先 FastAPI）**
* 若無特殊說明，均遵循以上技術選型

## 三、通用代碼規範

### 命名規範
* 變量/ 函數：camelCase
* 類/組件：PascalCase
* 常量：UPPER_SNAKE_CASE
* 文件 / 文件夾：kebab-case

命名應語義清晰，禁止隨意縮寫。

### 註釋規範（強制）

* 註釋用於解釋「為什麼這樣設計」，而不是代碼字面含義
* 複雜邏輯、業務判斷、邊界條件必須寫註釋
* 禁止無意義註釋

統一註釋標記：

``` ts
// TODO： 待實現功能
// FIXME： 已知問題或潛在缺陷
// NOTE：重要設計說明
// HACK： 臨時方案，後續必須重構
```

#### 函數註釋規範

前端（JSDoc）：

```ts
/**
 * 獲取用戶信息
 * @param userId 用戶 ID
 * @returns 用戶數據
 */
```

後端（Python Docstring）：

```python
def get_user(user_id: str):
    """
    根據用戶 ID 獲取用戶信息
    """
```


## 四、前端規範（React）

### 基本原則

* 使用函數組件，不使用類組件
* 單個組件只承擔單一職責
* 展示邏輯與業務邏輯分離
* 可複用邏輯必須抽離為自定義 Hook


### 命名約定

* 組件名使用 PascalCase
* 文件名與組件名保持一致
* 自定義 Hook 必須以 `use` 開頭

```ts
function UserCard() {}
function useUserData() {}
```


### Hooks 使用規範

* 只能在函數組件或自定義 Hook 中調用
* 不允許在條件、循環中調用
* 一個 Hook 只處理一種職責


### Props 規範

* 必須使用 TypeScript 類型定義
* 使用解構方式接收 props
* 非必傳參數使用 `?`


### 性能與結構要求

* 避免不必要的重複渲染
* 合理使用 useMemo / useCallback
* 列表渲染必須提供穩定的 key
* 大數據列表使用虛擬滾動
* 路由與組件支持懶加載


## 五、後端規範（Python）

### 基本要求

* Python ≥ 3.10
* 優先使用 FastAPI
* 所有函數與方法必須標註類型
* 禁止使用裸 `except`
* 禁止使用 `print` 作為日誌方式


### 分層結構（必須遵守）

* api：請求解析與響應封裝
* service：業務邏輯處理
* repository：數據庫訪問
* schema：請求 / 響應數據校驗
* model：ORM 模型定義

禁止在 api 層直接操作數據庫。


### 日誌規範

* 使用 logging 模塊
* 合理區分日誌級別（DEBUG / INFO / WARNING / ERROR）
* 日誌中不得包含敏感信息


## 六、安全規範（重點）

### 通用安全原則

* 永遠不信任客戶端輸入
* 所有輸入必須進行校驗
* 敏感操作必須經過身份與權限校驗


### 前端安全

* 禁止使用 dangerouslySetInnerHTML
* 防止 XSS / CSRF 攻擊
* 不在前端存儲敏感信息
* Token 推薦使用 HttpOnly Cookie


### 後端安全

* 使用 Pydantic 進行參數校驗
* 權限校驗必須在 service 層完成
* 所有密鑰從環境變量中讀取

```python
import os
SECRET_KEY = os.getenv("SECRET_KEY")
```

* 敏感字段返回前需脫敏
* 密碼等敏感數據必須加密存儲


## 七、AI 協作使用規範

* 所有自動生成的代碼必須遵守本規則
* 生成結果應：

  * 結構清晰
  * 類型完整
  * 可維護
  * 安全
* 不生成不必要的複雜實現
