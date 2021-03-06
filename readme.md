# 간단한 시연 영상
![washswat](https://user-images.githubusercontent.com/76682009/146531039-5ccae98a-70a8-4b30-af0e-89a45f004695.gif)


# 프로젝트 구조와 설계 전반

한 화면에 담기는 컴포넌트들을 한 폴더에 담아서 관리할 수 있게끔 프로젝트를 진행했습니다. 재수거 예정 세탁물 화면을 컨트롤하는 메인 컴포넌트를 만든 후에, 이 컴포넌트에서 재사용성이 가장 높고 메인 컨텐츠가 되는 컴포넌트인 리콜 카드 컴포넌트를 만들었습니다. 리콜 카드 컴포넌트는 서버에서 들어온 데이터의 양에 따라서 많아지기도 하고, 줄어들기도 합니다. 메인 폴더에는 그렇게 Header, Main, RecallCard라는 세 가지 컴포넌트가 들어오게 됬습니다. 헤더는 다른 화면에서 비슷하게 사용할 일이 있을 때 간편하게 가져다 쓰기 위해서 만들었지만, 우선 현재 프로젝트에서는 메인 컴포넌트에서 단 한 번 사용되기 때문에 메인 폴더에 같이 넣어놨습니다.

CSS는 react-native에 내장되어 있는 StyleSheet을 사용했는데, 더 안정적인 느낌의 UI를 만들려고 하다보니 자연스럽게 길어졌습니다. 파일 전체가 너무 길게 느껴졌기 때문에, styles라는 보조 파일을 만들어서 한 폴더에 들어가는 모든 컴포넌트들의 CSS를 같이 관리할 수 있게 작성했습니다. 이 방식을 그대로 가져와서 타입을 정의했던 부분들도 똑같이 types라는 파일을 만들어서 한 번에 관리할 수 있게끔 만들었습니다. 사실 컴포넌트 각자 하나씩 파일을 만들어줄까라는 생각을 했는데 그렇게되면 오히려 구조가 지저분해 질 것 같아서 한 파일로 관리하는 방법을 사용하기로 했습니다.

리덕스는 서버와 비동기 작업만을 하는 용도로 사용하기로 했습니다. 따라서 리덕스만을 사용하는 것이 아닌 redux-thunk도 같이 사용해서 미들웨어를 이용해서 비동기 작업을 진행했습니다. 최초에 메인 컴포넌트가 렌더링이 될 때, 리덕스를 통해 서버에서 데이터를 받아온 후에 데이터의 양에 따라서 리콜카드 컴포넌트를 생성합니다. 이 후에 데이터를 hooks를 이용해서 프롭스로 넘겨줬습니다. useState는 단 한 번 사용되었는데, 리콜카드 컴포넌트에서 사진을 숨기거나 나타내는 경우에 스위치 역할이 필요했기에 현재 상태가 사진이 숨겨진 상태인지 나타난 상태인지를 확인하기 위해 사용했습니다.

이미지나 리콜카드를 클릭하면 화면을 바꿔주기 위해서 react-navigation을 사용했습니다. 화면의 변환과 동시에 필요한 데이터도 전달해야하기 때문에 option에 필요한 데이터를 같이 전달했습니다. 그리고 사용자가 이 버튼을 클릭한 것인지를 확실히 알 수 있게 TouchableOpacity 태그를 사용해서 클릭할 경우에 Opacity가 변하는 효과를 줬습니다.

# 사용한 라이브러리

npx를 통해서 만드는 방법은 부가적인 기능들이 너무 많아서 오히려 복잡하다는 생각이 들어서 최초 프로젝트 생성은 expo를 통해서 진행했습니다. 서버에서 데이터 통신이 오가는 것처럼 프로젝트를 진행해보고 싶었기에 json-server 라이브러리를 이용했습니다. 이 과정에서 axios도 동시에 사용하게 되었습니다. 이 후에 화면 전환을 위한 react-navigation과 관련된 패키지들을 설치했습니다. 그리고 아이콘도 사용하기 위해서 react-native-vector-icons 라이브러리도 사용했습니다. 마지막으로 상태 관리를 위한 redux와 비동기 작업을 처리하기 위한 redux-thunk도 사용했습니다.

# 실행 방법

1. 원하는 폴더에 터미널 오픈
2. git clone https://github.com/VVSOGI/washswat-test.git
3. cd washswat-test
4. yarn install / npm install
5. json-server --watch ./data/db.json --port 3000
6. expo start --ios / expo start를 통해 웹에서 직접 실행 가능.

# 개선 사항

- 사진을 클릭했을 때 해당하는 이미지만 보여주게끔 설정을 해놨는데, 다른 사진을 보려면 이전으로 돌아가서 다른 사진을 클릭해야 한다는 것이 불편하게 느껴졌습니다. 애초에 사진 전체를 넘겨주고 클릭했던 사진의 인덱스를 찾아 첫 번째로 보여줄 수 있게끔 작업한 다음 섹션 단위로 좌우로 움직이게 한다면 왔다 갔다 하지않아도 될 것 같아서 가장 먼저 눈에 띈 개선 사항이었습니다.

- 일정과 주소가 있는 상세 문제 접수 화면에서도 사진을 볼 수 있게 한다면 라이더가 가져가야할 물건이 무엇인지 더 정확하게 보여줄 수 있을 것 같습니다.

- 기본적으로 보여주는 재수거 예정 세탁물 화면에도 간략하게 재수거 요청을 한 유저의 정보를 적어놓으면 좋을 것 같습니다.
