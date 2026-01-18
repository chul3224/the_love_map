export const questions = [
  {
    id: 1,
    dimension: "EI",
    content: "주말에 데이트를 한다면?",
    options: [
      { text: "핫플레이스에서 에너지 충전! 사람 구경도 하고 신나게!", value: "E" },
      { text: "조용한 카페나 집에서 오붓하게 둘만의 시간", value: "I" }
    ]
  },
  {
    id: 2,
    dimension: "EI",
    content: "연인과 싸우고 난 후, 기분을 풀 때",
    options: [
      { text: "친구들을 만나서 수다 떨며 털어버린다", value: "E" },
      { text: "혼자만의 시간을 가지며 감정을 정리한다", value: "I" }
    ]
  },
  {
    id: 3,
    dimension: "EI",
    content: "새로운 모임에 연인과 함께 갔을 때",
    options: [
      { text: "적극적으로 다른 커플들과 대화하며 분위기를 주도한다", value: "E" },
      { text: "연인 옆에 꼭 붙어서 조용히 미소 짓는다", value: "I" }
    ]
  },
  {
    id: 4,
    dimension: "SN",
    content: "연인이 '나 오늘 우울해'라고 했을 때 떠오르는 생각은?",
    options: [
      { text: "무슨 일 있었어? (구체적인 상황이 궁금함)", value: "S" },
      { text: "많이 힘들었겠구나... (감정적인 위로가 먼저)", value: "N" }
    ]
  },
  {
    id: 5,
    dimension: "SN",
    content: "데이트 장소를 고를 때 나는",
    options: [
      { text: "리뷰가 많고 검증된 맛집", value: "S" },
      { text: "분위기가 독특하고 감성적인 숨겨진 명소", value: "N" }
    ]
  },
  {
    id: 6,
    dimension: "SN",
    content: "미래에 대해 이야기할 때",
    options: [
      { text: "현실적인 결혼 자금, 집 문제 등 구체적인 계획", value: "S" },
      { text: "우리가 함께 그려갈 행복한 모습과 꿈", value: "N" }
    ]
  },
  {
    id: 7,
    dimension: "TF",
    content: "연인이 실수로 내 물건을 망가뜨렸다면?",
    options: [
      { text: "어쩌다 그랬어? (원인과 해결책이 중요)", value: "T" },
      { text: "안 다쳤어? 놀랐겠다 (연인의 마음이 중요)", value: "F" }
    ]
  },
  {
    id: 8,
    dimension: "TF",
    content: "연인이 고민 상담을 해올 때",
    options: [
      { text: "현실적인 해결책과 조언을 해준다", value: "T" },
      { text: "공감해주고 편을 들어준다", value: "F" }
    ]
  },
  {
    id: 9,
    dimension: "TF",
    content: "기념일 선물을 준비할 때",
    options: [
      { text: "연인에게 꼭 필요하고 실용적인 물건", value: "T" },
      { text: "내 마음이 담긴 편지와 의미 있는 물건", value: "F" }
    ]
  },
  {
    id: 10,
    dimension: "JP",
    content: "여행 계획을 짤 때 나는",
    options: [
      { text: "시간 단위로 꼼꼼하게! 예약은 필수", value: "J" },
      { text: "큰 틀만 잡고 발길 닿는 대로~", value: "P" }
    ]
  },
  {
    id: 11,
    dimension: "JP",
    content: "데이트 중 갑자기 비가 온다면?",
    options: [
      { text: "플랜 B 가동! 미리 알아둔 실내 데이트 장소로 이동", value: "J" },
      { text: "비 오는 날도 운치 있네~ 근처 카페로 뛰어간다", value: "P" }
    ]
  },
  {
    id: 12,
    dimension: "JP",
    content: "다음 주 데이트 약속을 잡을 때",
    options: [
      { text: "몇 시, 어디서, 무엇을 할지 미리 정해야 마음이 편하다", value: "J" },
      { text: "그날 상황 봐서 정하자! (당일의 기분에 따라)", value: "P" }
    ]
  }
];

export const results = {
  "ISTJ": { name: "성실한 해바라기", desc: "한번 마음을 주면 변치 않는 신뢰의 아이콘.", match: "ESFP" },
  "ISFJ": { name: "포근한 담요", desc: "세심하게 연인을 챙겨주는 배려왕.", match: "ESTP" },
  "INFJ": { name: "신비로운 달빛", desc: "깊은 통찰력으로 연인의 영혼까지 이해하는 소울메이트.", match: "ENFP" },
  "INTJ": { name: "치밀한 전략가", desc: "당신의 성장을 돕는 든든한 파트너.", match: "ENFP" },
  "ISTP": { name: "시크한 고양이", desc: "무심한 듯 챙겨주는 츤데레 매력.", match: "ESFJ" },
  "ISFP": { name: "수줍은 예술가", desc: "따뜻하고 온화한 감성의 소유자.", match: "ESTJ" },
  "INFP": { name: "몽상가 소년/소녀", desc: "로맨틱한 이상을 꿈꾸는 순수함.", match: "ENFJ" },
  "INTP": { name: "지적인 탐구자", desc: "독특한 관점으로 끊임없이 대화가 즐거운 사람.", match: "ENTJ" },
  "ESTP": { name: "짜릿한 모험가", desc: "지루할 틈 없이 즐거운 데이트 메이커.", match: "ISFJ" },
  "ESFP": { name: "화려한 파티피플", desc: "언제나 분위기를 밝게 만드는 인간 비타민.", match: "ISTJ" },
  "ENFP": { name: "사랑스러운 댕댕이", desc: "열정적이고 애교 넘치는 사랑꾼.", match: "INFJ" },
  "ENTP": { name: "재치있는 발명가", desc: "예측불허의 매력으로 당신을 웃게 만드는 사람.", match: "INFJ" },
  "ESTJ": { name: "든든한 리더", desc: "책임감 있게 관계를 이끌어가는 대장님.", match: "ISFP" },
  "ESFJ": { name: "다정한 사랑둥이", desc: "표현도 잘하고 챙김도 잘하는 사랑의 화신.", match: "ISTP" },
  "ENFJ": { name: "따뜻한 태양", desc: "당신의 잠재력을 믿고 응원해주는 멘토 같은 연인.", match: "INFP" },
  "ENTJ": { name: "카리스마 CEO", desc: "함께 성장하며 미래를 그려가는 야망 있는 연인.", match: "INTP" }
};
