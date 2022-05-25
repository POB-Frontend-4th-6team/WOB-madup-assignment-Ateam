# Madup Dashboard Assignment
## 참여 인원
이강윤, 이지훈, 이치호, 김영만, 김학률
## 사용 라이브러리
- `"@reduxjs/toolkit": "^1.8.1"`
- `"@types/react-datepicker": "^4.4.1"`
- `"axios": "^0.27.2"`
- `"bignumber.js": "^9.0.2"`
- `"classnames": "^2.3.1"`
- `"date-fns": "^2.28.0"`
- `"dayjs": "^1.11.2"`
- `"lodash": "^4.17.21"`
- `"react": "^18.1.0"`
- `"react-datepicker": "^4.8.0"`
- `"react-dom": "^18.1.0"`
- `"react-error-boundary": "^3.1.4"`
- `"react-query": "^3.39.0"`
- `"react-redux": "^8.0.1"`
- `"react-router-dom": "6"`
- `"react-scripts": "5.0.1"`
- `"react-use": "^17.3.2"`
- `"spinners-react": "^1.0.7"`
- `"store": "^2.0.12"`
- `"victory": "^36.4.0"`
- `"victory-core": "^36.4.0"`
- `"web-vitals": "^2.1.0`

## 기능
### Sidebar
- 광고 센터란을 통해 페이지를 이동하며 페이지는 대시보드와, 광고관리가 있다.
- 서비스란 dropdown 클릭 시 dropdown의 목록을 확인할 수 있다.
- dropdown에 목록 중 하나인 서비스 추가하기를 클릭하면 모달이 나타나며 해당 모달에는 input박스가 담겨져 있다.
- 추가할 서비스를 입력 후 추가 또는 enter클릭 시 dropdown 리스트에 추가된다.
- 해당 목록은 로컬스토리지에 저장된다.

![모달](https://user-images.githubusercontent.com/65527334/170379448-c2e52d41-3da3-48d3-8f8b-58f680698f47.gif)

- 반응형을 고려하여 사이드바를 구현하였으며 화면이 줄어들면 header에 메뉴 버튼이 생기고, 해당 버튼을 누를 시 sidebar가 나타난다.

![사이드바](https://user-images.githubusercontent.com/65527334/170376704-58629c5a-cd21-4193-8bfa-0f8789aca389.gif)

### 대시보드 페이지
- datePicker를 통해 날짜 범위를 선택한다.
- 선택된 날짜 범위에 따라 그래프들이 바뀐다.

#### 통합 광고 현황
- 선택된 날짜 범위에 해당하는 광고 관련 정보의 총합을 나타낸다.
- 그 전에 비해 얼마나 증감했는지 볼 수 있다.
- 그래프를 최대 두 개를 그릴 수 있다.
- 주간, 일별을 선택해서 그래프가 그려진다.
- dropdown을 통해 보고 싶은 정보를 선택한다.

#### 매체 현황
![media](https://user-images.githubusercontent.com/52916848/170358772-eab322e6-b60c-47de-9edd-df069699acd5.gif)
- 선택된 날짜 범위에 해당하는 매체에 관련된 정보를 보여준다.
- 그래프에 마우스를 올리면 수치를 나타낸다.
- table 표에서 수치로 매체별 차이를 한번에 비교할 수 있다.


## 어려웠던 점
- victory.js로 chart를 그리면 창이 줄어들 때 크기가 마음대로 바껴서 자연스럽게 만드는데 오래 걸렸다.
- 프로젝트 크기가 조금 커지니 팀원들 간의 코드 방식이 달라서 통일성이 점점 떨어지는 느낌을 받았다.
