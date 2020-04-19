# AWS Lambda Rest API 개발 실습

### 0. 개요
- Aws Lambda와 Gateway를 이용하여 Serverless 기반의 Rest API 시스템을 개발한다. 
- daddyprogrammer.org에서 연재 및 소스 Github 등록
    - https://daddyprogrammer.org/post/10050/aws-lambda-develop-multi-endpoint-restful-api/

### 1. 개발환경
- node.js v12
- serverless framework 1.62.0
- vscode

### 2. 실행
- 로컬 테스트
    - $ sls invoke local -f router -p test/get-user.json
    - $ sls invoke local -f router -p test/put-user.json
    - $ sls invoke local -f router -p test/post-user.json
    - $ sls invoke local -f router -p test/delete-user.json
       
### 3. 관련 연재 글
- aws lambda 개발하기(6) – Multi Endpoint Restful api 개발
    - Document
        - https://daddyprogrammer.org/post/10050/aws-lambda-develop-multi-endpoint-restful-api/