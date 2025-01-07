# Gift - 생일 선물 펀딩 Web3 플랫폼

## 🚀 프로젝트 시작하기

### 1. 레포지토리 클론
```bash
git clone https://github.com/KOBAC-GiftFunding/Gift.git
cd Gift
```

### 2. 패키지 설치
각 폴더에서 패키지를 설치해주세요:
```bash
# 프론트엔드 패키지 설치
cd front
npm install

# 백엔드 패키지 설치
cd back
npm install

# 스마트 컨트랙트 패키지 설치
cd contracts
npm install
```

## 🌲 Git 브랜치 전략

### 브랜치 구조
```
master
│
└── develop
    │
    └── feat/본인이름
```

### 작업 시작하기
```bash
# 1. develop 브랜치 체크아웃
git checkout develop

# 2. 본인 브랜치 생성
git checkout -b feat/본인이름
git push --set-upstream origin feat/본인이름
```

## 💫 PR 프로세스

1. 본인 브랜치에서 작업 완료 후 PR 생성
2. base 브랜치를 develop으로 설정
3. 코드 리뷰 후 develop에 merge

예시:
- base: `develop` ← compare: `feat/sungwoo`

## 📝 커밋 메시지 컨벤션

```bash
# 새로운 기능 추가
git commit -m "Feat: 월렛 연동 기능 구현"

# 버그 수정
git commit -m "Fix: 로그인 오류 수정"

# 코드 리팩토링
git commit -m "Refactor: 컴포넌트 구조 개선"

# 기타 변경사항
git commit -m "Chore: 패키지 설치"
```

## 📁 프로젝트 구조

```
Gift/
│
├── front/              # React + TypeScript
│
├── back/               # Express + TypeScript
│
└── contracts/          # Hardhat 프로젝트
```

## ⚠️ 작업 시 주의사항

1. 작업 시작 전 develop 브랜치 pull 하기
```bash
git checkout develop
git pull origin develop
```

2. 커밋 메시지 규칙 준수하기
3. PR 생성 시 상세한 설명 작성하기

## 👥 팀 구성

### 프론트엔드
- 양성우
- 권소희

### 백엔드
- 김성진
- 박유진
