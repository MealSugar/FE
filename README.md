# 밀당: 식품교환표를 통한 AI기반 맞춤형 식단 제공 서비스
### 💻 배포 사이트
> https://4cutsdiary.klr.kr](https://mealdang.vercel.app
### 💬 프로젝트 소개
> 밀당은 당뇨인들을 위한 AI기반 맞춤형 식단 관리 서비스로, 식품교환표를 통해 1일치 식단을 제공하고 식단 및 혈당 기록을 지원합니다. 2022년 기준 당뇨병 인구가 600만 명에 달하며, 당뇨병은 식단관리가 가장 중요하지만 많은 당뇨병 환자들이 식단관리를 제대로 하고 있지 못하고 있는 문제를 해결하고자 기획한 서비스입니다. 메인 기능으로는 최초 로그인 시 키와 몸무게를 입력하면 개인별 맞춤 식품교환표가 생성되며, AI가 퍼스널 식품교환표를 기준으로 1일 최대 15개의 균형있는 식단을 제공하는 기능이 있습니다. 이 외에도 대시보드로 혈당상태를 직관적으로 확인하며 관리할 수 있으며, 혈당 고민 없이 즐길 수 있는 식당&카페 정보도 제공합니다.

### 🍇 DEMO
|랜딩 페이지|식품교환표 생성|식단 추천 받기|AI 추천식단 확인하기|
|:-:|:-:|:-:|:-:|
|<img width="300" src="https://github.com/user-attachments/assets/3470899e-a95b-4bdb-a36a-954e3760520c" />|<img width="300" src="https://github.com/user-attachments/assets/ebfa6409-09cd-4ac2-aa30-b98d2391b345" />|<img width="300" src="https://github.com/user-attachments/assets/886f5340-d691-4779-bd60-4e719e383a84" />|<img width="300" src="https://github.com/user-attachments/assets/65ffd04f-3cc3-4961-939f-4fcc9f0c6f0c" />|
|혈당 관리 하기|건강한 식당&카페 정보 확인하기|식단톤 페이지|마이페이지|
|<img width="300" src="https://github.com/user-attachments/assets/81c71c6d-af43-435d-a831-b0ee0a88c676" />|<img width="300" src="https://github.com/user-attachments/assets/6c9735c5-6a31-45a4-b562-fb3510804ab7" />|<img width="300" src="https://github.com/user-attachments/assets/0fbb035d-b6f7-4c3b-8089-413e1c7d6130" />|<img width="300" src="https://github.com/user-attachments/assets/c61b917b-23ff-45a5-9ce7-2d421fb013ac" />|

### 👥 팀원
- **김현아** : 팀장 | FE Leader
- **신상현** : 팀원 | FE 
- **최규리** : 팀원 | FE
- **임승민** : 팀원 | BE Leader
- **손기정** : 팀원 | BE
- **이홍규** : 팀원 | BE

### ⚒️ Stacks
<img src="https://skillicons.dev/icons?i=react,styledcomponents,vercel,django,mysql,aws,jenkins" alt=""/>

---
## 개발 환경 세팅

- Node.js 18+를 설치합니다.
- 터미널을 열고 `npm install`을 입력하여 패키지를 모두 설치합니다.
- `npm run start` 명령어로 개발 서버를 실행합니다.

## 작업 방식

0. merge한 사람이 merge 했다고 하면 dev에서 pull 받아서 최신화 하기 (git pull upstream dev)
1. 작업할 기능에 대해 이슈 생성
2. dev브랜치에서 feat/이슈번호 브랜치 생성 (git switch dev -> git switch -c feat/이슈번호)
3. 기능 개발 완료 후 `[#이슈번호] 커밋 메시지 내용` 형식으로 commit 및 push (git commit -m "[#이슈번호] 커밋 내용" -> git push origin feat/이슈번호)
4. github 사이트 와서 pull & request 생성하기 (dev <- feat/이슈번호)
5. 팀장 코드 피드백 완료 후 본인이 merge 하기 <br/>
**(📍6~8은 팀장만 추가로 진행합니다)**
6. "feat/이슈번호" 브랜치 -> dev 브랜치로 이동 (git switch dev) 
7. dev브랜치에서 master로 푸쉬 (git add . 후에 git push origin dev)
8. master<-dev로 PR 작성


## PR Convention

PR 제목은 커밋 요약과 동일하게 "(type): (content)" 형식으로 작성하며, 내용은 다음을 포함하여 작성합니다.

### Changes 📝

이 PR에서 작업한 사항을 적어주세요.

### Issues 🚩

이 PR과 연관된 Issue를 작성해주세요. 해당 PR이 Issue를 해결한다면 Issue도 꼭 닫아주세요! <br/>
**"close #이슈번호" 를 써주면 PR을 닫을때 Isuue도 함께 닫힙니다!**

### Screenshot 📷 (선택)

작업한 사항을 스크린샷으로 찍을 수 있다면 (예: 신규 페이지 구현, 새로운 컴포넌트 구현) 스크린샷을 찍어서 올려주세요.
