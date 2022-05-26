# photorage-web

## 프로젝트 요약

- 사진 기반의 SNS가 넘쳐나는데, 다른 SNS 서비스들과 다르게 "앨범" 이라는 개념을 조금 더 강하게 도입하고자 함.
- 기존 SNS의 복잡한 기능들 대신 일상/여행의 앨범이라는 개념만으로 구현.
- 친구들끼리의 추억, 가족들끼리의 추억을 담은 앨범으로 시작. 그 순간을 앨범이라는 틀에 넣어서, 이름을 짓고 싶을 수 있음
- 인스타는 그런 느낌의 기능이 부족하고, 네이버 MYBOX는 너무 클라우드 드라이브 느낌에 약간의 사진 앨범 자동 생성 등을 엮은 느낌
- 적당한 SNS + 확장성 + 앨범(사진)의 기능 강화


## 팀 소개
- UI/UX Designer 겸 Front-end 개발자 1명
- Front-end 개발자 1명(본인) + 추가 1명
- Back-end 개발자 3명

프론트 개발(photorage-web)팀의 공통 목표
- 내가 사용하는 언어, 툴에 대해 이해하고 쓰고 왜 그것을 쓰는지 나름의 이유를 갖을 수 있기
- 웹 사이트를 온전히 처음(프로젝트 생성)부터 끝(배포 후 서비스) 까지 개발해보기
- Front-end 개발자로서 실제 서비스에서 어떤 역할을 해주어야 하는지 경험하기


## 기술 스택
- Front-end
   - React(Vite 툴체인, TypeScript 적용)
   - Storybook 도입 
   - Styled-Component(CSS in JS) 도입
   - 상태 관리 툴(Recoil or MobX 등 미정)
   - 웹서버 : AWS의 EC2, S3, CloudFront 사용 예정
- Back-end
    - Spring Boot + Node.js
    - MongoDB(NOSQL)
    - API 서버 : AWS 의 EC2 사용 예정(MSA 구조로 여러 서버로 분리)   
- 통신
    - Ajax 기반 통신
- 디자인
    - Figma : Storybook 연동
- 협업 및 코드 관리 툴
    - Notion, Slack, GitHub
