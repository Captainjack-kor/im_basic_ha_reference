# Basic Web Hiring Assessments

이번 HA의 주제는 Full Stack으로 영화 정보를 보여주는 애플리케이션을 만드는 것입니다.
클라이언트와 서버 각각 구현해야 할 요구사항이 아래 제공되어 있습니다.

## Getting Started

1. `npm install`을 이용해 클라이언트 및 서버의 의존성 모듈(dependencies)를 설치할 수 있습니다.
2. `npm test`를 통해 클라이언트 및 서버의 통합 테스트를 진행할 수 있습니다.
  - 클라이언트 및 서버 각각의 디렉토리 내에서 따로 테스트하는 것도 가능합니다.
  - 클라이언트 테스트: 클라이언트 디렉토리 `packages/client`에서 `npm test` 실행
  - 서버 테스트: 클라이언트 디렉토리 `packages/server`에서 `npm test` 실행

## 클라이언트

- 기본적으로 React로 만들어진 앱이 존재하지만, 각 컴포넌트는 하드코딩되어 있는 데이터를 렌더링하고 있습니다.
- `npm start`를 이용해 앱을 열어볼 수 있습니다.
- (`packages/client` 디렉토리 안에서) `npm test`로 테스트를 실행할 수 있습니다.

### Requirements

주어진 모든 테스트를 통과하세요.

1. 하드코딩되어 있는 각각의 컴포넌트가 동적으로 데이터를 받아 렌더링할 수 있도록 개선해야 합니다.
2. MovieRankList 컴포넌트는, movies 배열의 갯수만큼 MovieRankListEntry 컴포넌트를 표시해야 합니다.
3. 오른쪽 영화 목록 중 하나를 클릭했을 때, CurrentMovie의 데이터가 바뀔 수 있도록 구현해야 합니다.
4. 영화 데이터를 본인이 작성한 서버에서 API 호출로 대체해야 합니다.

## 서버

- (`packages/server` 디렉토리 안에서) `npm test`로 테스트를 실행할 수 있습니다.
- `index.js` 파일을 통해 서버를 실행시킬 수 있습니다.
- 필요에 따라 `package.json` 파일에 scripts를 설정할 수 있습니다.
- 필요에 따라 nodemon 등의 유틸리티를 이용할 수 있습니다.

### Requirements

주어진 모든 테스트를 통과하세요. 다음과 같은 REST API를 구현해야 합니다.

| 메소드    | endpoint          | 설명                            |
| ------- | ----------------- | ------------------------------ |
| GET     | `/movies`         | 영화 목록을 전부 조회               |
| GET     | `/movies/{id}`    | id가 일치하는 한개의 영화 데이터만 조회 |

실제 응답의 모양은 `data.json` 파일에 예시로 제공됩니다. 참고하여 API를 작성하세요.
서버의 요청을 클라이언트에서 처리할 수 있도록 만드는 것도 잊지 마세요.
