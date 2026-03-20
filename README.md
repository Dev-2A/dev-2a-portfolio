# 🏠 Dev-2A Portfolio

> 전직 사서, 현직 바이브 코더 — AI와 함께 만든 토이 프로젝트 포트폴리오

[![Deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-blue?logo=github)](https://dev-2a.github.io/dev-2a-portfolio/)
[![Built with](https://img.shields.io/badge/built%20with-Claude-blueviolet?logo=anthropic)](https://claude.ai)

## 🔗 Live

**https://dev-2a.github.io/dev-2a-portfolio/**

## 📖 About

사서로 일하다 개발자로 전환한 Dev-2A의 개인 포트폴리오 사이트입니다.
모든 토이 프로젝트는 **Claude와의 바이브 코딩**으로 탄생했습니다.

### 주요 섹션

- **Hero** — 소개 & CTA
- **About** — 사서 → 개발자 전환 타임라인
- **Vibe Coding** — AI 협업 방식 소개 (이 포트폴리오의 핵심 차별점)
- **Projects** — 카테고리별 필터링이 가능한 프로젝트 갤러리
- **Tech Stack** — 사용 기술 & 숙련도
- **Contact** — GitHub, Solved.ac, Email

## 🛠️ Tech Stack

| 영역 | 기술 |
| ------ | ------ |
| Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion |
| Routing | React Router v6 (HashRouter) |
| i18n | Custom Context (한/영) |
| Deploy | GitHub Pages (gh-pages) |

## 🚀 Getting Started

```bash
# 클론
git clone https://github.com/Dev-2A/dev-2a-portfolio.git
cd dev-2a-portfolio

# 의존성 설치
npm install

# 개발 서버
npm run dev

# 빌드
npm run build

# 배포
npm run deploy
```

## 📁 Project Structure

```text
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, VibeCoding, ProjectGallery, TechStack
│   └── ui/           # ProjectCard, FilterTabs, ScrollReveal, SectionHeading, TimelineIcon
├── pages/            # Home, ProjectDetail, NotFound
├── data/             # projects.json, about.json, techStack.json, translations.js
├── contexts/         # ThemeContext, I18nContext
├── hooks/            # useScrollSpy
└── index.css         # Global styles + Tailwind
```

## ✨ Features

- 🌙 다크 모드 (시스템 감지 + 수동 토글)
- 🌐 한/영 전환
- 🎨 컬러풀 & 플레이풀 디자인
- 📱 반응형 (모바일 / 태블릿 / 데스크톱)
- 🔍 프로젝트 카테고리 필터링
- ✨ Framer Motion 애니메이션
- 📄 프로젝트 상세 페이지 (이전/다음 네비게이션)
- 🔗 SEO 메타 태그 + OG 태그

## 🤖 Vibe Coding

이 포트폴리오를 포함한 모든 토이 프로젝트는 [Claude](https://claude.ai)와의
바이브 코딩으로 만들어졌습니다.

```text
새 채팅 시작 → Step별 구현 → gitmoji 커밋 → 배포 & 완성
```

솔직히 말하면, 나 혼자서는 이만큼의 프로젝트를 절대 만들 수 없었습니다.

## 📝 License

MIT License © 2026 Dev-2A
