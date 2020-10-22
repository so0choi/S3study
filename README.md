# AWS S3 Node.js sdk 사용 예제

웹 페이지에서 파일을 업로드하여 S3 버킷에 direct로 업로드 되도록 한다.
버킷의 오브젝트들은 file type에 따라 폴더 구조로 저장되고, 웹 페이지에서 또한 type으로 구분되어 화면에 출력한다.

## 사용 라이브러리
- multer-s3

## 주 기능
- IAM 사용자 인증
- Bucket objects 조회
- Bucket object 업로드
