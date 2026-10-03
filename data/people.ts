import { wiki } from "./sources";
import type { Person } from "./types";

const JANN = wiki("Jann_Mardenborough", "Jann Mardenborough");
const FILM = wiki("Gran_Turismo_(film)", "Gran Turismo (film)");

export const people: Person[] = [
  {
    id: "jann-mardenborough",
    nameKo: "얀 마든버러",
    nameEn: "Jann Mardenborough",
    years: "1991년생",
    role: "GT 아카데미 2011 우승자, 프로 레이싱 드라이버",
    portrayedBy: "아치 매덱",
    body: [
      "1991년 9월 9일 잉글랜드 달링턴에서 태어나 웨일스 카디프에서 자랐습니다. 아버지 스티브 마든버러는 프로 축구 선수였습니다. 여덟 살 때 친구 집에서 처음 《그란 투리스모》를 했고, 대학에서 모터스포츠 공학을 3주 만에 그만둔 뒤 갭이어에 GT 아카데미에 지원했습니다.",
      "2011년 9만 명 넘는 참가자 가운데 GT 아카데미 우승을 차지했습니다. 실제 레이싱 경험이 전혀 없는 상태였습니다. 2012년 두바이 24시(370Z GT4) 클래스 3위, 영국 GT(GT-R GT3) 1승을 거뒀습니다.",
      "2013년 르망 LMP2 클래스 3위(종합 9위), 2014년 르망에서는 OAK 레이싱의 리지에-닛산으로 14시간 동안 클래스 선두를 달렸습니다. 2014~2015년 GP3에서 1승을 거뒀고, 2015년 닛산 LMP1 GT-R LM 니스모로 르망에 나갔습니다.",
      "2016~2020년 일본에서 슈퍼 GT(GT300 1승, 2017년부터 GT500)와 슈퍼 포뮬러(2017)를 달렸고, 2016년 일본 F3 준우승을 했습니다. F1 그랑프리에는 출전한 적이 없습니다.",
      "영화에서는 공동 프로듀서이자 스턴트 더블로 참여했고, 2015년 뉘르부르크링 사고를 영화에 넣는 데 동의했습니다. 2025년에는 HRT 포드 퍼포먼스의 머스탱 GT3로 GT 월드 챌린지 유럽 내구컵에 출전하고 있습니다.",
    ],
    sources: [JANN, FILM],
  },
  {
    id: "darren-cox",
    nameKo: "대런 콕스",
    nameEn: "Darren Cox",
    years: "1974년생",
    role: "GT 아카데미 창안자, 전 닛산 유럽 임원",
    portrayedBy: "올랜도 블룸(‘대니 무어’라는 이름의 인물)",
    body: [
      "닛산 유럽의 임원으로 2006년 '게이머를 레이서로' 만드는 GT 아카데미를 구상했습니다. 2008년 소니와 닛산의 합작으로 첫 대회가 열렸습니다.",
      "영화의 대니 무어는 그를 바탕으로 한 인물입니다. 현재는 2020년 함께 세운 미디어 회사 더 레이스(The Race Media)의 CEO입니다. 영화 속 주인공 GT-R GT3 실차를 촬영 전에 사들인 사람도 그였습니다.",
    ],
    sources: [wiki("Darren_Cox", "Darren Cox"), wiki("GT_Academy", "GT Academy"), { label: "GTPlanet — Gran Turismo movie's hero Nissan GT-R GT3 heads to auction", href: "https://www.gtplanet.net/gran-turismo-movie-hero-gtr-auction-20230728/" }],
  },
  {
    id: "kazunori-yamauchi",
    nameKo: "야마우치 가즈노리",
    nameEn: "Kazunori Yamauchi",
    years: "1967년생",
    role: "폴리포니 디지털 CEO, 그란 투리스모 시리즈 제작자",
    portrayedBy: "히라 다케히로",
    body: [
      "일본의 게임 디자이너이자 레이싱 드라이버로, 《그란 투리스모》 시리즈를 만든 폴리포니 디지털의 대표입니다.",
      "영화에서는 배우 히라 다케히로가 그를 연기하고, 실제 야마우치는 도쿄의 초밥 요리사로 잠깐 나옵니다. 영화 첫머리에서 그가 모는 차는 포드 GT와 혼다 NSX-R입니다.",
    ],
    sources: [wiki("Kazunori_Yamauchi", "Kazunori Yamauchi"), FILM],
  },
  {
    id: "lucas-ordonez",
    nameKo: "루카스 오르도녜스",
    nameEn: "Lucas Ordóñez",
    years: "1985년생",
    role: "GT 아카데미 첫 우승자(2008)",
    body: [
      "스페인 출신으로 2008년 첫 GT 아카데미 우승자입니다. 2011년 르망 클래스 2위를 했고, 2012년 두바이 24시와 2013년 르망에서 얀과 같은 차를 몰았습니다.",
      "영화의 안토니오 크루즈는 가상 인물이지만, 스페인 출신 게이머 드라이버라는 점에서 오르도녜스를 떠올리게 합니다. 공식적으로 그를 모델로 했다는 자료는 찾지 못했습니다.",
    ],
    sources: [wiki("Lucas_Ordóñez", "Lucas Ordóñez"), JANN],
  },
  {
    id: "michael-krumm",
    nameKo: "미하엘 크룸",
    nameEn: "Michael Krumm",
    years: "—",
    role: "독일 출신 베테랑 드라이버",
    body: [
      "2013년 르망에서 얀, 오르도녜스와 함께 그리브스 모터스포츠의 자이텍 Z11SN-닛산을 몰아 LMP2 클래스 3위를 했습니다. 영화의 르망 팀에는 베테랑 대신 게이머 출신 가상 인물 둘이 들어갔습니다.",
    ],
    sources: [JANN],
  },
  {
    id: "steve-mardenborough",
    nameKo: "스티브 마든버러",
    nameEn: "Steve Mardenborough",
    years: "—",
    role: "얀의 아버지, 전 프로 축구 선수",
    portrayedBy: "자이먼 혼수",
    body: [
      "잉글랜드 프로 축구 선수로, 얀은 아버지가 달링턴 FC에서 뛰던 시기에 달링턴에서 태어났습니다. 영화는 레이서의 꿈을 반대하다 결국 아들을 응원하는 아버지로 그립니다.",
    ],
    sources: [JANN, FILM],
  },
  {
    id: "jack-salter",
    nameKo: "잭 솔터 (가상 인물)",
    nameEn: "Jack Salter (fictional)",
    years: "—",
    role: "영화 속 GT 아카데미 교관",
    portrayedBy: "데이비드 하버",
    body: [
      "영화를 위해 만든 인물입니다. 르망 사고로 은퇴한 전직 드라이버 출신 정비사로, 얀을 혹독하게 가르칩니다. 실제 GT 아카데미에는 이런 한 명의 교관이 없었고, 여러 코치의 역할을 합친 캐릭터로 보는 편이 맞습니다.",
    ],
    sources: [FILM],
  },
];
