# Madup Dashboard Assignment

## 참여 인원
☻ 김영만 [깃허브 💻 ](https://github.com/sksn12) <br/>

☻ 김학률 [깃허브 💻 ](https://github.com/markyul) <br/>

☻ 이강윤 [깃허브 💻 ](https://github.com/rkddbs1031) <br/>

☻ 이지훈 [깃허브 💻 ](https://github.com/jihun1233) <br/>

☻ 이치호 [깃허브 💻 ](https://github.com/usernamechiho) 

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

## 폴더구조
```
📦routes
 ┣ 📂AdManage
 ┃ ┣ 📂CardList
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┃ ┣ 📜card.module.scss
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📜cardList.module.scss
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂CardModalContents
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜adManage.module.scss
 ┃ ┗ 📜index.tsx
 ┣ 📂Dashboard
 ┃ ┣ 📂Media
 ┃ ┃ ┣ 📂BarChart
 ┃ ┃ ┃ ┣ 📜ResponsiveVictoryChart.tsx
 ┃ ┃ ┃ ┣ 📜barChart.module.scss
 ┃ ┃ ┃ ┣ 📜chartStyle.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂MediaTable
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜mediaTable.module.scss
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜media.module.scss
 ┃ ┣ 📂TotalAd
 ┃ ┃ ┣ 📂TrendGrid
 ┃ ┃ ┃ ┣ 📂Item
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜item.module.scss
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜trendGrid.module.scss
 ┃ ┃ ┣ 📜adChart.tsx
 ┃ ┃ ┣ 📜getData.ts
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜totalAd.module.scss
 ┃ ┣ 📜dashHeader.tsx
 ┃ ┣ 📜dashboard.module.scss
 ┃ ┗ 📜index.tsx
 ┣ 📂ErrorPage
 ┃ ┣ 📜errorPage.module.scss
 ┃ ┗ 📜index.tsx
 ┣ 📂_components
 ┃ ┣ 📂ContentsContainer
 ┃ ┃ ┣ 📜contentsContainer.module.scss
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Dropdown
 ┃ ┃ ┣ 📜dropdown.module.scss
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜header.module.scss
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Loading
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜loading.module.scss
 ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📂ModalFrame
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜modal.module.scss
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂Sidebar
 ┃ ┃ ┣ 📜AddServiceField.tsx
 ┃ ┃ ┣ 📜LNB.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜sidebar.module.scss
 ┣ 📜index.tsx
 ┗ 📜routes.module.scss
```

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

![media_responsive](https://user-images.githubusercontent.com/52916848/170389531-6b36292a-db42-4b61-a476-1eb79317b35c.gif)
- 반응형으로 조금씩 줄어들다가 스크롤로 볼 수 있다.

#### 광고 관리
![광고관리](https://user-images.githubusercontent.com/87627359/170386133-4fc7bf3e-e2c7-4a01-9005-6bd2f2a1c340.gif)
- 컴포넌트가 처음 마운트 될 때 모든 광고 카드를 보여준다.
- 카테고리를 선택할 수 있으며, 상태는 계속해서 유지된다.
- 속성 값으로 웹, 앱광고를 나누었으며, 웹,앱은 비슷한 글자로 혼동을 피하기 위해 영어로 머릿말을 붙였다.
- 종료된 광고는 생성일에 괄호로 종료된 날짜를 명시해준다.


## 어려웠던 점

김학률
- victory.js로 chart를 그리면 창이 줄어들 때 크기가 마음대로 바껴서 자연스럽게 만드는데 오래 걸렸다.
- 프로젝트 크기가 조금 커지니 팀원들 간의 코드 방식이 달라서 통일성이 점점 떨어지는 느낌을 받았다.

이치호
- 개발을 시작하기 전에 충분히 설계에 대해 고민하지 않아 확장성이 없는 코드를 짰다.
- 로컬 스토리지를 이용해 광고 카드 추가 기능을 구현하려고 했지만 개발 실력이 부족해 실패했다.
- 짧은 기한 내에 완성해야하는 과제였기 때문에 부담감이 있었고, 급하게 개발하다 여러번 삐끗했다.

이지훈
- 공용 컴포넌트인 드롭다운을 만들었는데 편의성을 고려해 좀 더 유연하게 사용할 수 있도록 만들지 못한게 아쉽다. 중간에 바꾸려고 했을 땐 이미 사용중인 곳이 많아 수정이 어려웠다.
- 데이터 모아서 가공하는 부분이 좀 어려웠고 각 카테고리별로 가공해서 나타내는 형태도 달라서 모두 처리하는데 오래걸렸다.
- 평소 사용하던대로 forin이나 객체의 key를 변수로 접근하려는데 타입스크립트의 타입지정때문에 안되는경우가 많았다.

김영만
- 기능부터 만들고 구조를 나누자는 생각으로 코드를 막 집어 넣다 보니 어느시점 부터 굉장히 복잡해 지기 시작했다.
- 복잡해진 코드에 따라 통합광고 현황에서 데이터 상태를 지속시키는데 실패 했고 원인을 찾지 못하였다..


이강윤
- 공용 컴포넌트인 모달을 만들었는데 사이드바에 있는 드롭다운 리스트 중 추가하기 버튼 클릭 시 모달을 띄워 해당 로직에 맞는 기능 구현을 해야했다. 이 부분을 적용하는데 좀 더 빠르게 만들지 못해 아쉬움이 남았다.
- 마무리 단계에서 팀원들이 만들었던 컴포넌트들을 레이아웃이나 css등 리팩토링을 하였으며, 수정하는 과정 속에서 통일 되어있지 않은 부분들을 다시 통일되게 하고, 거기에 반응형 또한 추가하다 보니 시간이 조금 걸렸다. 각자 팀원들의 코드방식이 다르기에 생길 수 있는 문제/상황이었고 이 부분에 있어서 미리 레이아웃을 좀 더 디테일하게 정해두고 했더라면 해당 리팩토링 시간을 단축할 수 있지 않았을 까 라는 아쉬움이 남았다.
