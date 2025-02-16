


**Ant Design의 Calendar와 직접 구성한 TodoList를 결합한 프로젝트입니다.**
<h5>테스트 코드 작성이 처음이라 어려움을 느껴, 작성하지 못했습니다.</h5>

   ![image](https://github.com/user-attachments/assets/57c36c1a-d7a4-4dbb-8fcb-c4c5ec5a8329)

## 기능

1. 기본 조회/등록/수정/삭제 CRUD
 
2. 날짜별 데이터 필터링 ➡️ 캘린더에 출력/날짜별 투두리스트 연동

3. 자정에 당일 TodoList를 카카오톡 메세지로 받기



## 실행 방법

1. application.properties 설정
   
![스크린샷 2025-02-16 231556](https://github.com/user-attachments/assets/3bfc47e5-5ec7-4a0d-9ab1-de597dc9bfc6)

밑줄 부분 DB 환경에 맞게 수정 필요합니다.


2. npm install

![image](https://github.com/user-attachments/assets/b3b2ea1b-d3e0-4c3a-bc0a-436f1b976a3a)

npm install axios antd uuid dayjs 설치 필요합니다.


3. 카카오톡 api Token 설정

![image](https://github.com/user-attachments/assets/5ae88865-d095-4787-9632-e5272c885e7c)

로그 외 실제 카카오톡 메세지 테스트 시에는 https://developers.kakao.com/ 에서 애플리케이션 설정 및 Token 생성이 필요합니다. 


## 카카오톡 API

![screencapture-developers-kakao-console-app-2025-02-16-23_53_08](https://github.com/user-attachments/assets/b58387d6-ca0b-4f05-b567-8fa1a66b1ee7)

--- 

![IMG_4805](https://github.com/user-attachments/assets/7b5ec798-80ef-4cc5-85b4-bbf3ad505705)

- 카카오톡 개발자센터 설정을 통해 모바일 기기와 앱 연결했습니다.

➡️ ![IMG_4804](https://github.com/user-attachments/assets/a9d00dd3-da3f-4cea-a621-eae06d1ecfa6)



## 컴포넌트

![image](https://github.com/user-attachments/assets/2be6640d-8393-4173-b947-12a4a8f65c4b)

TodoList.jsx 컴포넌트를 통해 CRUD 및 캘린더와의 연동, Todo의 상태 변화에 따른 UI 렌더링을 처리했습니다.






