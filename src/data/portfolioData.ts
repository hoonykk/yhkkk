export type SeriesGroup = 'superstark' | 'mkfocus' | 'mkinterview' | 'field';
export type SportCategory = '축구' | '배구' | '기타';

export interface PortfolioArticle {
  id: string;
  seriesTag: string;
  seriesGroup: SeriesGroup;
  sport: SportCategory;
  beat: string;
  date: string;
  title: string;
  summary: string;
  reportingPoint: string;
  location?: string;
  image: string;
  imageAlt: string;
  naverUrl: string;
}

export interface ReportingBeat {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string;
}

export interface CareerEntry {
  period: string;
  role: string;
  organization: string;
  summary: string;
  highlights: string[];
}

export const NAVER_JOURNALIST_URL = 'https://media.naver.com/journalist/410/80831';

export const JOURNALIST_PROFILE = {
  name: '김영훈',
  englishName: 'Kim Young-hoon',
  title: '스포츠 기자',
  careerStart: '2021.05~',
  naverJournalistUrl: NAVER_JOURNALIST_URL,
  naverPressCode: '410 / 80831',
  contactEmail: 'harry9970@naver.com',
  contactPhone: '010-5663-9970',
  location: '서울 · 수도권 및 전국 주요 경기장',
  portraitImage: '/assets/aistudio/____32d91e1a.jpg',
  pressDeskImage: '/src/assets/images/editorial_press_notebook_1795522040379.jpg',
  pressDeskImageAlt: '전술 메모가 적힌 취재 수첩, 펜, 녹음기가 놓인 경기장 기자석 데스크',
};

export const PROOF_METRICS = [
  {
    value: '2021.05~',
    label: '기자 생활',
    detail: '현장 취재 · 인터뷰 · 기획',
  },
  {
    value: '4,000+',
    label: '송고 기사',
    detail: '스포츠경향 · 스포츠투데이 · MK스포츠 누적',
  },
  {
    value: '4대 영역',
    label: '다양한 취재 경험',
    detail: '축구·야구·농구·배구',
  },
];

/* 1. [김영훈의 슈퍼스타K] — 대표 기명 연재 코너 (실제 기사 사진 및 원문 URL 반영) */
export const SUPERSTAR_K_ARTICLES: PortfolioArticle[] = [
  {
    id: '0001146651',
    seriesTag: '[김영훈의 슈퍼스타K]',
    seriesGroup: 'superstark',
    sport: '축구',
    beat: 'K리그 · 수원삼성',
    date: '2026.11.09',
    title:
      '“감독님이 요란하게 축하하고 싶지 않아 해요”…이정효 감독, ‘수원 승격’에도 냉담한 반응 보인 이유 [김영훈의 슈퍼스타K]',
    summary:
      '수원삼성의 승격 확정 직후에도 들뜨지 않고 냉정함을 유지한 이정효 감독의 시선과 팀 내부 분위기를 현장 취재로 입체적으로 풀어낸 기명 칼럼.',
    reportingPoint:
      '단순 승격 축하 기사를 넘어 감독의 철학과 다음 시즌 K리그1 생존 과제를 짚어낸 시그니처 기명 연재.',
    location: '수원',
    image: '/assets/articles/0001146651.jpg',
    imageAlt: '수원삼성 이정효 감독 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001146651',
  },
  {
    id: '0001140409',
    seriesTag: '[김영훈의 슈퍼스타K]',
    seriesGroup: 'superstark',
    sport: '축구',
    beat: 'K리그 · ACL 규정 분석',
    date: '2026.09.18',
    title:
      '퇴장자·부상자 없는데 3분 동안 ‘9명 뛴 전북’…ACL 나서는 K리그, ‘경기 지연 규정 숙지’ 필수 [김영훈의 슈퍼스타K]',
    summary:
      '국제대회 무대에서 벌어진 이례적 수적 열세 상황의 원인을 규정 조항으로 추적하며, ACL에 나서는 K리그 구단들이 반드시 숙지해야 할 경기 지연 규정을 짚은 칼럼.',
    reportingPoint:
      '현장에서 놓치기 쉬운 국제대회 세부 규정을 팩트 중심으로 파고들어 리그 전체에 실무적 시사점을 제시.',
    image: '/assets/articles/0001140409.jpg',
    imageAlt: '전북현대 ACL 경기 규정 분석 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001140409',
  },
  {
    id: '0001135085',
    seriesTag: '[김영훈의 슈퍼스타K]',
    seriesGroup: 'superstark',
    sport: '축구',
    beat: 'K리그 · 리그 현안',
    date: '2026.08.04',
    title: '축구는 ‘폭염 취소’ 없을까? [김영훈의 슈퍼스타K]',
    summary:
      '기록적 폭염 속 프로야구의 폭염 취소 사례와 대비되는 프로축구 경기 운영 규정, 선수 안전, 쿨링 브레이크 및 일정 구조의 현실적 과제를 점검.',
    reportingPoint:
      '타 종목과의 비교 취재를 통해 축구 팬과 현장 관계자 모두가 공감하는 여름철 리그 운영 의제를 제기.',
    image: '/assets/articles/0001135085.jpg',
    imageAlt: '여름철 프로축구 폭염 운영 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001135085',
  },
  {
    id: '0001130565',
    seriesTag: '[김영훈의 슈퍼스타K]',
    seriesGroup: 'superstark',
    sport: '축구',
    beat: '축구 국가대표팀',
    date: '2026.06.29',
    title: '2년의 준비, 2분의 사과…두 번째 월드컵, 두 번째 퇴진 [김영훈의 슈퍼스타K]',
    summary:
      '월드컵 여정의 마침표와 짧았던 사과 브리핑 뒤 남겨진 한국 축구의 구조적 숙제와 리더십의 무게를 차분하게 복기한 기명 칼럼.',
    reportingPoint:
      '현장에서 지켜본 2년의 준비 과정을 압축된 서사와 날카로운 문장으로 정리한 대표 칼럼.',
    image: '/assets/articles/0001130565.jpg',
    imageAlt: '한국 축구 국가대표팀 월드컵 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001130565',
  },
  {
    id: '0001127965',
    seriesTag: '[김영훈의 슈퍼스타K]',
    seriesGroup: 'superstark',
    sport: '축구',
    beat: '축구 국가대표팀 · 손흥민',
    date: '2026.06.09',
    title:
      '‘홍명보·박지성·이영표·이운재·김남일’ 대선배들 또 넘어설까…캡틴 손흥민, 韓 월드컵 최다 출전 도전 [김영훈의 슈퍼스타K]',
    summary:
      '한국 축구 레전드들의 월드컵 출전 기록을 짚으며 새로운 역사에 도전하는 주장 손흥민의 발자취와 의미를 조명한 기명 연재.',
    reportingPoint:
      '기록 데이터와 한국 축구의 역사적 서사를 결합해 대형 대회의 관전 포인트를 입체적으로 제시.',
    image: '/assets/articles/0001127965.jpg',
    imageAlt: '손흥민 국가대표팀 월드컵 최다 출전 도전 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001127965',
  },
];

/* 2. [MK초점] — 심층 기획 및 현안 분석 */
export const MK_FOCUS_ARTICLES: PortfolioArticle[] = [
  {
    id: '0001142946',
    seriesTag: '[MK초점]',
    seriesGroup: 'mkfocus',
    sport: '기타',
    beat: '체육 정책 · 병역특례',
    date: '2026.10.12',
    title:
      '‘AG 논란 후’ 탄력받는 병역특례 축소·폐지, 체육계는 ‘확대 및 세분화·국군체육부대 증설’ 목소리도…상호이해 간 논의 필요 [MK초점]',
    summary:
      '아시안게임 이후 불거진 예술·체육요원 제도 개편 논의 속에서 축소·폐지 여론과 체육계 현장의 대안(세분화·국군체육부대 증설)을 균형 있게 조명.',
    reportingPoint:
      '민감한 체육 행정 이슈에서 양측의 논리와 현장 목소리를 다각도로 취재해 건설적 해법을 모색.',
    image: '/assets/articles/0001142946.jpg',
    imageAlt: '병역특례 제도 개편 체육계 논의 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001142946',
  },
  {
    id: '0001134286',
    seriesTag: '[MK초점]',
    seriesGroup: 'mkfocus',
    sport: '축구',
    beat: '축구 행정 · 대한축구협회',
    date: '2026.07.28',
    title:
      '‘축구협회장 선거인단 3200+α% 증가, 1만명 이상 예상’ 체육관 선거 끝?…혁신위 진짜 과제는 ‘구성과 대표성 부여’ [MK초점]',
    summary:
      '선거인단 규모 확대라는 수치 뒤에 숨은 직군별 구성 비율과 대표성 확보라는 본질적 개혁 과제를 짚은 심층 분석.',
    reportingPoint:
      '보도자료 수치를 그대로 옮기지 않고 제도 개편의 실효성과 한계를 날카롭게 검증.',
    image: '/assets/articles/0001134286.jpg',
    imageAlt: '대한축구협회 선거인단 개편 분석 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001134286',
  },
  {
    id: '0001132535',
    seriesTag: '[MK초점]',
    seriesGroup: 'mkfocus',
    sport: '축구',
    beat: '축구 행정 · 혁신위',
    date: '2026.07.14',
    title:
      '‘체육관 선거’ 축구협회장 선출, 혁신위가 ‘직선제’로 뜯어고친다?…박지성 “용어 자체가 맞는지 모르겠다”, 실상은 선거인단 확대 [MK초점]',
    summary:
      '직선제 개편 표현을 둘러싼 현장의 문제 제기와 실제 개편안의 실체를 팩트체크 형식으로 명쾌하게 정리.',
    reportingPoint:
      '핵심 인물의 발언과 제도 원문을 대조해 독자의 혼선을 줄이는 팩트체크형 기획.',
    image: '/assets/articles/0001132535.jpg',
    imageAlt: '박지성 축구협회장 선거 혁신위 관련 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001132535',
  },
  {
    id: '0001120110',
    seriesTag: '[MK초점]',
    seriesGroup: 'mkfocus',
    sport: '축구',
    beat: '축구 국가대표팀',
    date: '2026.04.10',
    title: '‘홍명보는 얼굴마담’ 인터뷰 논란…진짜 문제는 ‘전술 노출’ [MK초점]',
    summary:
      '자극적인 발언 논란에 가려진 대표팀 내부 전술 보안과 스태프 커뮤니케이션 리스크를 본질적 시각에서 분석.',
    reportingPoint:
      '화제성 이슈에서 한 걸음 더 들어가 경기력에 직결되는 핵심 문제를 포착.',
    image: '/assets/articles/0001120110.jpg',
    imageAlt: '축구 국가대표팀 전술 노출 논란 분석 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001120110',
  },
  {
    id: '0001115182',
    seriesTag: '[MK초점]',
    seriesGroup: 'mkfocus',
    sport: '축구',
    beat: 'K리그 · 인권·연맹 대응',
    date: '2026.03.09',
    title:
      '‘퇴장 후 인종차별 피해’ 분노한 제주SK·프로축구연맹의 지지와 지원…이탈로는 無대응으로, “한국서 큰 문제라 인식만으로 감사해” [MK초점]',
    summary:
      '외국인 선수를 향한 온라인 인종차별 사안에서 구단과 연맹의 신속한 연대, 그리고 선수의 성숙한 대응을 기록.',
    reportingPoint:
      '스포츠 현장의 윤리와 인권 이슈를 책임감 있게 기록하고 구단·연맹의 대응 과정을 추적.',
    image: '/assets/articles/0001115182.jpg',
    imageAlt: '제주SK 이탈로 인종차별 대응 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001115182',
  },
];

/* 3. [MK인터뷰] — 선수·감독 밀착 인터뷰 */
export const MK_INTERVIEW_ARTICLES: PortfolioArticle[] = [
  {
    id: '0001141611',
    seriesTag: '[MK인터뷰]',
    seriesGroup: 'mkinterview',
    sport: '축구',
    beat: '축구 국가대표팀',
    date: '2026.09.29',
    title:
      '‘차범근과 동률’ A매치 최다골, 韓 축구 새 역사에도 미소 잃은 손흥민의 찝찝함…“내 골 아니다, 경기 졌는데 중요하지 않아” [MK인터뷰]',
    summary:
      '한국 축구 A매치 최다골 동률이라는 대기록을 세우고도 팀 패배 앞에 고개를 숙인 주장 손흥민의 믹스트존 진심을 생생하게 담아낸 인터뷰.',
    reportingPoint:
      '대기록의 화려함 뒤에 가려진 주장의 책임감과 현장의 온도를 그대로 전달한 대표 믹스트존 인터뷰.',
    location: 'A매치 믹스트존',
    image: '/assets/articles/0001141611.jpg',
    imageAlt: '손흥민 A매치 최다골 동률 믹스트존 인터뷰 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001141611',
  },
  {
    id: '0001146792',
    seriesTag: '[MK인터뷰]',
    seriesGroup: 'mkinterview',
    sport: '축구',
    beat: 'K리그 · 수원삼성',
    date: '2026.11.10',
    title: '수원 캡틴으로 K리그1 복귀…생소한 ‘승격의 맛’, 푸른 홍정호 [MK인터뷰]',
    summary:
      '베테랑 수비수 홍정호가 수원삼성 주장 완장을 차고 처음 경험한 승격의 감정과 한 시즌을 버텨낸 리더십의 뒷이야기.',
    reportingPoint:
      '커리어 내내 최상위 무대에 섰던 베테랑이 마주한 ‘생소한 승격의 맛’이라는 인간적 서사를 포착.',
    location: '수원',
    image: '/assets/articles/0001146792.jpg',
    imageAlt: '수원삼성 캡틴 홍정호 승격 인터뷰 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001146792',
  },
  {
    id: '0001145685',
    seriesTag: '[MK인터뷰]',
    seriesGroup: 'mkinterview',
    sport: '축구',
    beat: 'K리그1 · FC안양',
    date: '2026.11.02',
    title:
      '‘비디치가 롤모델’ 안양 기대주 센터백 김지훈 “계속 배우면서 성장하고 싶어요” [MK인터뷰]',
    summary:
      '안양 수비진의 새로운 기대주로 떠오른 젊은 센터백 김지훈의 롤모델, 훈련 태도, 성장 목표를 담아낸 인터뷰.',
    reportingPoint:
      '주목받는 신예 수비수의 경기장 밖 생각과 성장 의지를 섬세하게 끌어낸 인물 기사.',
    location: '안양',
    image: '/assets/articles/0001145685.jpg',
    imageAlt: 'FC안양 센터백 김지훈 인터뷰 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001145685',
  },
  {
    id: '0001145675',
    seriesTag: '[MK인터뷰]',
    seriesGroup: 'mkinterview',
    sport: '축구',
    beat: 'K리그1 · FC안양',
    date: '2026.11.02',
    title:
      '실점 빌미에서 ‘역전 히어로’…팀 승리만 생각한 안양 핵심 권경원 “파이널B 최정상에 오를 수 있도록 최선 다할 것” [MK인터뷰]',
    summary:
      '실점의 아픔을 딛고 역전승의 주역으로 돌아선 권경원이 전한 팀 중심의 태도와 시즌 막판 각오.',
    reportingPoint:
      '경기 중 위기와 반전을 겪은 선수의 심리 변화를 믹스트존에서 섬세하게 끌어낸 인터뷰.',
    location: '안양',
    image: '/assets/articles/0001145675.jpg',
    imageAlt: 'FC안양 권경원 인터뷰 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001145675',
  },
  {
    id: '0001144891',
    seriesTag: '[MK인터뷰]',
    seriesGroup: 'mkinterview',
    sport: '축구',
    beat: 'K리그1 · FC안양',
    date: '2026.10.27',
    title:
      '‘연령별 대표팀 두루 거친 GK’ 안양 김정훈, A대표팀 태극마크 꿈꾸며…“욕심 크지만, 지금 위치에서 잘하는 게 먼저” [MK인터뷰]',
    summary:
      '연령별 대표팀을 두루 거친 골키퍼 김정훈이 A대표팀을 향한 목표와 소속팀에서의 현재 과제에 집중하는 단단한 마음가짐을 전한 인터뷰.',
    reportingPoint:
      '골키퍼 포지션 특유의 집중력과 차세대 대표팀 자원의 진솔한 포부를 담아낸 인터뷰.',
    location: '안양',
    image: '/assets/articles/0001144891.jpg',
    imageAlt: 'FC안양 골키퍼 김정훈 인터뷰 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001144891',
  },
  {
    id: '0001144773',
    seriesTag: '[MK인터뷰]',
    seriesGroup: 'mkinterview',
    sport: '축구',
    beat: 'K리그2 · 서울 이랜드',
    date: '2026.10.27',
    title:
      '‘K리그 최연소 기록 보유자’ 이랜드 안주완의 자신감…“우리 ‘승격’ 가능해, 든든한 (박)재용이 형이 있어요” [MK인터뷰]',
    summary:
      '최연소 기록을 써 내려가는 유망주 안주완의 당찬 자신감과 선배 공격수와의 호흡을 담은 현장 인터뷰.',
    reportingPoint:
      '주목받는 스타뿐 아니라 성장하는 젊은 선수의 패기와 팀 케미스트리를 발굴.',
    location: '목동',
    image: '/assets/articles/0001144773.jpg',
    imageAlt: '서울 이랜드 안주완 인터뷰 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001144773',
  },
];

/* 4-A. 종목별 섹션 — 축구 */
export const FOOTBALL_ARTICLES: PortfolioArticle[] = [
  {
    id: '0001147983',
    seriesTag: '[MK현장]',
    seriesGroup: 'field',
    sport: '축구',
    beat: 'K리그2 · 서울 이랜드',
    date: '2026.11.22',
    title:
      '이랜드 ‘다이렉트 승격 무산’, 포기하지 않은 김도균 감독 “매 경기 아쉬움 남기는 게 팀의 현주소, 한계 넘어야 성장할 수 있어” [MK현장]',
    summary:
      '다이렉트 승격이 무산된 직후에도 플레이오프를 향해 팀의 한계를 정면으로 응시한 김도균 감독의 경기 후 회견 현장 보도.',
    reportingPoint: '아쉬운 승부 직후 사령탑의 냉정한 자평과 재도약 의지를 생생하게 전달.',
    location: '목동',
    image: '/assets/articles/0001147983.jpg',
    imageAlt: '서울 이랜드 김도균 감독 현장 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001147983',
  },
  {
    id: '0001147982',
    seriesTag: '[MK목동]',
    seriesGroup: 'field',
    sport: '축구',
    beat: 'K리그2 · 승격 경쟁',
    date: '2026.11.22',
    title: '‘승격 확정’ 수원FC만 웃었다…선제골 못 지킨 이랜드, 충남아산과 1-1 무 [MK목동]',
    summary:
      '자동 승격의 향방이 걸린 최종 국면에서 서울 이랜드와 충남아산의 1-1 접전과 그 결과로 승격을 확정한 수원FC의 명암을 정리.',
    reportingPoint: '동시 다발적으로 맞물린 순위 경쟁 구도를 현장 경기 흐름과 함께 신속 보도.',
    location: '목동종합운동장',
    image: '/assets/articles/0001147982.jpg',
    imageAlt: '서울 이랜드 충남아산 경기 목동 현장 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001147982',
  },
  {
    id: '0001147979',
    seriesTag: '[MK현장]',
    seriesGroup: 'field',
    sport: '축구',
    beat: 'K리그2 · 사전 취재',
    date: '2026.11.22',
    title:
      '끝나지 않은 ‘자동 승격’ 2위 싸움, 이랜드 김도균 감독 “무조건 승리해야”…PO 희망 충남아산 최성환 대행도 “물러날 수 없어” [MK현장]',
    summary:
      '승격과 플레이오프 티켓을 놓고 맞붙은 양 팀 사령탑의 킥오프 직전 각오와 전략적 포인트를 담은 현장 프리뷰.',
    reportingPoint: '경기 시작 전 양 팀 벤치의 긴장감과 승부 포인트를 균형 있게 포착.',
    location: '목동종합운동장',
    image: '/assets/articles/0001147979.jpg',
    imageAlt: '이랜드 김도균 감독과 충남아산 최성환 대행 사전 취재 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001147979',
  },
  {
    id: '0001147922',
    seriesTag: '[MK수원]',
    seriesGroup: 'field',
    sport: '축구',
    beat: 'K리그2 · 수원삼성',
    date: '2026.11.21',
    title: '‘이정효 감독 또 해냈다’…3년 만에 승격한 수원삼성, K리그2 조기 우승 확정 [MK수원]',
    summary:
      '3년 만의 K리그1 복귀와 조기 우승을 확정 지은 수원삼성의 경기 흐름과 빅버드 현장 분위기를 신속하게 전달한 경기 리포트.',
    reportingPoint: '결정적 승격·우승 경기 종료 직후 정확하고 생동감 있게 출고한 현장 보도.',
    location: '수원월드컵경기장',
    image: '/assets/articles/0001147922.jpg',
    imageAlt: '수원삼성 K리그2 조기 우승 확정 현장 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001147922',
  },
  {
    id: '0001147918',
    seriesTag: '[MK현장]',
    seriesGroup: 'field',
    sport: '축구',
    beat: 'K리그2 · 수원삼성',
    date: '2026.11.21',
    title:
      '‘승격 확정’ 수원, 우승까지 매직넘버 1…이정효 감독 “수원삼성답게 당당하게 ‘우승 승격’하겠다” [MK현장]',
    summary:
      '승격 확정 이후에도 우승 트로피를 향한 흔들림 없는 목표 의식을 드러낸 이정효 감독의 현장 발언 기록.',
    reportingPoint: '구단의 자존심과 사령탑의 기준을 압축한 현장 기자회견 보도.',
    location: '수원월드컵경기장',
    image: '/assets/articles/0001147918.jpg',
    imageAlt: '수원 이정효 감독 우승 승격 각오 현장 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001147918',
  },
  {
    id: '0001147695',
    seriesTag: '[MK현장]',
    seriesGroup: 'field',
    sport: '축구',
    beat: 'WK리그 · 챔피언결정전',
    date: '2026.11.18',
    title:
      '정규리그 3위, 디펜딩챔피언 꺾고 정규리그 1위까지 격파…‘창단 10주년’ 첫 우승 경주한수원, 박남열 감독 “기쁨이 두 배” [MK현장]',
    summary:
      '정규리그 3위에서 시작해 디펜딩 챔피언과 정규리그 1위를 연파하며 창단 10주년 첫 우승을 이룬 경주한수원 박남열 감독의 소회.',
    reportingPoint: 'WK리그 챔피언결정전 현장에 직접 출입해 언더독 우승의 서사를 생생하게 기록.',
    location: '수원종합운동장',
    image: '/assets/articles/0001147695.jpg',
    imageAlt: '경주한수원 박남열 감독 WK리그 첫 우승 현장 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001147695',
  },
];

/* 4-B. 종목별 섹션 — 배구 */
export const VOLLEYBALL_ARTICLES: PortfolioArticle[] = [
  {
    id: '0001147539',
    seriesTag: '[공식발표]',
    seriesGroup: 'field',
    sport: '배구',
    beat: 'V리그 남자부 · OK저축은행',
    date: '2026.11.17',
    title:
      '[공식발표] 개막 후 3경기, 건강상의 이유로 자진 사퇴…OK저축은행, ‘봄배구 전도사’ 신영철 감독과 결별',
    summary:
      '시즌 초반 3경기 만에 전해진 신영철 감독의 건강상 자진 사퇴 소식과 구단의 향후 운영 방향을 신속·정확하게 보도.',
    reportingPoint: '프로배구 시즌 주요 속보를 정확한 사실관계와 맥락으로 신속하게 전달.',
    image: '/assets/articles/0001147539.jpg',
    imageAlt: 'OK저축은행 신영철 감독 공식발표 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001147539',
  },
  {
    id: '0001147349',
    seriesTag: '[MK현장]',
    seriesGroup: 'field',
    sport: '배구',
    beat: 'V리그 남자부 · 우리카드',
    date: '2026.11.15',
    title:
      '‘16명 중 15명 기용’ 벌떼배구 재등장, 패배 속 ‘주포 공백’ 돌파구 찾는 우리카드…박철우 감독 “시스템 유지한다” [MK현장]',
    summary:
      '주포 공백 속에서 엔트리 16명 중 15명을 고루 투입하며 돌파구를 모색한 우리카드 박철우 감독의 경기 운영 철학을 담은 현장 기사.',
    reportingPoint: '단순 패배 보도를 넘어 감독의 로테이션 전략과 팀 시스템 방향성을 짚어낸 배구 현장 보도.',
    location: '장충체육관',
    image: '/assets/articles/0001147349.jpg',
    imageAlt: '우리카드 박철우 감독 장충체육관 현장 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001147349',
  },
  {
    id: '0001147344',
    seriesTag: '[MK현장]',
    seriesGroup: 'field',
    sport: '배구',
    beat: 'V리그 남자부 · 현대캐피탈',
    date: '2026.11.15',
    title:
      '왼쪽 레오·수봉, 오른쪽 장추안…선두 오른 현대캐피탈 블랑 감독의 만족감 “양쪽 사이드 공격 더 좋아지고 있어” [MK현장]',
    summary:
      '좌우 날개 공격 밸런스를 앞세워 선두에 오른 현대캐피탈 필립 블랑 감독의 경기 후 전술 평가와 만족감을 기록.',
    reportingPoint: '외국인 사령탑의 공격 조합 구상과 팀 완성도 변화를 정확히 풀어낸 현장 인터뷰.',
    location: '장충체육관',
    image: '/assets/articles/0001147344.jpg',
    imageAlt: '현대캐피탈 블랑 감독 현장 인터뷰 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001147344',
  },
  {
    id: '0001147336',
    seriesTag: '[MK장충]',
    seriesGroup: 'field',
    sport: '배구',
    beat: 'V리그 남자부 · 장충체육관',
    date: '2026.11.15',
    title:
      '‘레오·장추안 37점 합작’ 선두 등극 현대캐피탈, 3연승 우리카드 저지하고 4연승 행진…3-0 완승 [MK장충]',
    summary:
      '장충체육관 현장에서 기록한 현대캐피탈 쌍포의 폭발력과 선두 도약, 우리카드의 연승 저지 승부처 분석.',
    reportingPoint: '세트별 흐름과 핵심 득점 지표(37점 합작)를 정확히 짚어낸 배구 현장 리포트.',
    location: '장충체육관',
    image: '/assets/articles/0001147336.jpg',
    imageAlt: '현대캐피탈 우리카드 장충체육관 경기 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001147336',
  },
  {
    id: '0001147329',
    seriesTag: '[MK현장]',
    seriesGroup: 'field',
    sport: '배구',
    beat: 'V리그 남자부 · 우리카드',
    date: '2026.11.15',
    title:
      '‘해결사 아라우조의 부상 악재’ 3연승에도 고민 큰 우리카드 박철우 감독 “3~4명 준비돼 있어, 물량 총동원하겠다” [MK현장]',
    summary:
      '연승 흐름 속 주포 아라우조의 부상 변수에 맞선 박철우 감독의 경기 전 대비책과 선수단 운용 복안을 취재.',
    reportingPoint: '경기 전 변수(부상)와 대응 플랜을 사전 취재로 짚어내 경기 기사와 유기적으로 연결.',
    location: '장충체육관',
    image: '/assets/articles/0001147329.jpg',
    imageAlt: '우리카드 박철우 감독 경기 전 현장 취재 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001147329',
  },
  {
    id: '0001147328',
    seriesTag: '[MK현장]',
    seriesGroup: 'field',
    sport: '배구',
    beat: 'V리그 남자부 · 현대캐피탈',
    date: '2026.11.15',
    title:
      '현대캐피탈 블랑 감독 “3연승 우리카드? 파이팅 넘치는 팀, 어려운 경기 될 것” [MK현장]',
    summary:
      '상승세의 우리카드를 앞두고 방심을 경계한 현대캐피탈 블랑 감독의 사전 기자회견 코멘트를 현장 기록.',
    reportingPoint: '장충체육관 현장에서 양 팀 사령탑의 경기 전후 목소리를 입체적으로 취재.',
    location: '장충체육관',
    image: '/assets/articles/0001147328.jpg',
    imageAlt: '현대캐피탈 블랑 감독 사전 취재 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001147328',
  },
];

/* 4-C. 종목별 섹션 — 기타 (축구·배구 외 종합 스포츠 및 체육 정책) */
export const OTHER_SPORT_ARTICLES: PortfolioArticle[] = [
  {
    id: '0001142946-other',
    seriesTag: '[MK초점]',
    seriesGroup: 'mkfocus',
    sport: '기타',
    beat: '체육 정책 · 병역특례',
    date: '2026.10.12',
    title:
      '‘AG 논란 후’ 탄력받는 병역특례 축소·폐지, 체육계는 ‘확대 및 세분화·국군체육부대 증설’ 목소리도…상호이해 간 논의 필요 [MK초점]',
    summary:
      '종목을 초월해 한국 체육계 전체의 화두로 떠오른 병역특례 제도의 쟁점과 제도 개선 방향을 심층 취재.',
    reportingPoint: '특정 종목을 넘어 대한민국 체육 정책 전반을 아우르는 분석 역량.',
    image: '/assets/articles/0001142946.jpg',
    imageAlt: '체육계 병역특례 제도 논의 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001142946',
  },
  {
    id: '0001142350',
    seriesTag: '[MK이슈]',
    seriesGroup: 'field',
    sport: '기타',
    beat: '체육 행정 · 제도 개편',
    date: '2026.10.05',
    title:
      '아시안게임 논란 여파, 53년 된 ‘예술·체육 병역특례’…정치권 내 ‘제도 개편 목소리’ 커져 [MK이슈]',
    summary:
      '53년간 이어져 온 예술·체육요원 병역특례 제도를 둘러싼 국회·정치권의 개편 움직임과 사회적 쟁점을 정리.',
    reportingPoint: '스포츠계와 정치권의 접점에서 정책 변화 흐름을 발 빠르게 추적한 이슈 리포트.',
    image: '/assets/articles/0001142350.jpg',
    imageAlt: '예술 체육 병역특례 제도 개편 이슈 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001142350',
  },
  {
    id: '0001142337',
    seriesTag: '[아시안게임]',
    seriesGroup: 'field',
    sport: '기타',
    beat: '아시안게임 · 유도',
    date: '2026.10.05',
    title:
      '‘첫 AG인데’ 몸무게 100ｇ 초과 실격, 지도자는 묵인 지시…선수 폭로 후 고개 숙인 유도회 “엄정 조치 나설 것” [아시안게임]',
    summary:
      '아시안게임 현장에서 불거진 계체 실격 및 지도자 은폐 논란과 대한유도회의 공식 사과·조치 약속을 추적 보도.',
    reportingPoint: '종합대회 현장의 부조리와 행정 책임을 놓치지 않고 정확히 짚은 보도.',
    image: '/assets/articles/0001142337.jpg',
    imageAlt: '아시안게임 유도 계체 실격 논란 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001142337',
  },
  {
    id: '0001142027',
    seriesTag: '[아시안게임]',
    seriesGroup: 'field',
    sport: '기타',
    beat: '아시안게임 · 유도',
    date: '2026.10.01',
    title:
      '‘독립운동가 5대손’ 日 국적 버리고 韓 유도 간판된 허미미, 열도에 태극기 꽂았다…女 57㎏ 금메달 쾌거, “할머니 감사해요” [아시안게임]',
    summary:
      '독립운동가 후손으로 태극마크를 달고 여자 57kg급 정상에 오른 유도 국가대표 허미미의 감동적인 금메달 서사 보도.',
    reportingPoint: '금메달 속보에 선수의 가족사와 상징적 의미를 녹여낸 인물 중심 국제대회 기사.',
    image: '/assets/articles/0001142027.jpg',
    imageAlt: '아시안게임 유도 허미미 금메달 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001142027',
  },
  {
    id: '0001142025',
    seriesTag: '[아시안게임]',
    seriesGroup: 'field',
    sport: '기타',
    beat: '아시안게임 · 양궁',
    date: '2026.10.01',
    title: '12발 연속 10점 명중…김종호, 韓 컴파운드 양궁 첫 ‘금빛 활시위’ [아시안게임]',
    summary:
      '12발 연속 10점을 꽂아 넣으며 한국 컴파운드 양궁에 첫 금메달을 안긴 김종호의 압도적 결승전 순간을 신속 보도.',
    reportingPoint: '종합 국제대회 메달 레이스 속보 대응력과 경기 기록 전달 정확성.',
    image: '/assets/articles/0001142025.jpg',
    imageAlt: '아시안게임 컴파운드 양궁 김종호 금메달 기사 사진',
    naverUrl: 'https://n.news.naver.com/article/410/0001142025',
  },
];

export const REPORTING_BEATS: ReportingBeat[] = [
  {
    number: '01.',
    title: '기명 칼럼 및 심층 기획',
    subtitle: '[김영훈의 슈퍼스타K] · [MK초점]',
    description:
      '현장의 단편적 결과를 넘어 감독의 철학, 리그 제도, 체육계 정책까지 독자가 꼭 알아야 할 본질적 질문을 기명 칼럼과 기획 기사로 풀어냅니다.',
    deliverables: '기명 연재 칼럼 · 체육 행정 팩트체크 · 리그·산업 현안 분석',
  },
  {
    number: '02.',
    title: '선수·감독 밀착 인터뷰',
    subtitle: '[MK인터뷰] · 믹스트존 취재',
    description:
      '국가대표 에이스부터 K리그·V리그 유망주, 베테랑 사령탑까지 짧은 믹스트존에서도 인물의 서사와 진심이 담긴 육성을 끌어냅니다.',
    deliverables: 'A매치·리그 믹스트존 단독 앵글 · 감독 철학 인터뷰 · 유망주 발굴',
  },
  {
    number: '03.',
    title: '축구·배구 전방위 현장 취재',
    subtitle: 'K리그 · WK리그 · V리그 · 대표팀',
    description:
      '축구(K리그1·2, 국가대표팀, 해외파, WK리그)와 배구(V리그 장충·수도권 현장)를 중심으로 국내 주요 스포츠 현장을 발로 뜁니다.',
    deliverables: '[MK현장] · [MK수원] · [MK장충] 실시간 현장 보도 및 경기 분석',
  },
  {
    number: '04.',
    title: '종합대회·다양한 종목 대응',
    subtitle: '축구·야구·농구·배구 · 아시안게임',
    description:
      '해외축구 온라인 데스크부터 종합 스포츠 현장, 아시안게임 유도·양궁 등 국제대회 이슈까지 어떤 데스크 환경에서도 유연하게 대응합니다.',
    deliverables: '종합대회 메달 속보 · 협회 이슈 추적 · 체육 정책 분석',
  },
];

export const CAREER_TIMELINE: CareerEntry[] = [
  {
    period: '2021.05~',
    role: '스포츠 기자',
    organization: 'MK스포츠 · 스포츠투데이 · 경향신문 스포츠경향',
    summary:
      '경향신문 스포츠경향 온라인뉴스팀 해외축구 담당 기자, 스포츠투데이 스포츠부를 거쳐 현재 MK스포츠에서 축구·배구를 중심으로 국내 스포츠 현장을 취재하고 있습니다.',
    highlights: [
      '기명 연재 [김영훈의 슈퍼스타K], 심층 기획 [MK초점], 인물 [MK인터뷰] 등 시그니처 시리즈 집필',
      'K리그1·2, 축구 국가대표팀, WK리그 챔피언결정전 및 V리그 프로배구 현장 밀착 취재',
      '아시안게임 주요 종목(유도·양궁 등) 및 대한축구협회·병역특례 등 체육계 핵심 현안 보도',
    ],
  },
];

export const RECRUITER_QUICK_FACTS = [
  { label: '기자 생활', value: '2021.05~' },
  { label: '주요 이력', value: '스포츠경향 → 스포츠투데이 → MK스포츠' },
  { label: '주력 종목', value: '축구 · 배구 (야구·농구·종합 스포츠 경험)' },
  { label: '대표 코너', value: '[김영훈의 슈퍼스타K] · [MK초점] · [MK인터뷰]' },
  { label: '연락처', value: 'harry9970@naver.com · 010-5663-9970' },
  { label: '공식 아카이브', value: 'media.naver.com/journalist/410/80831' },
];
