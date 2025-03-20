import React from "react";

const TermsPersonalText = () => {
  const termsData = {
    sections: [
      {
        id: 1,
        title: "개인정보 수집에 대한 동의",
        content: [
          {
            id: "disc-0",
            content:
              "서비스는 이용자로부터 개인정보 수집에 대한 동의를 받고 있습니다. 서비스는 회원 가입 절차에서 개인정보 처리방침과 이용 약관에 대한 동의 절차를 마련하고 있으며, 이용자가 동의를 선택하여 클릭하면 개인정보 수집에 대해 동의한 것으로 간주합니다.",
          },
        ],
      },
      {
        id: 2,
        title: "개인정보의 수집 및 이용",
        content: [
          {
            id: "a",
            content:
              "① 이용자가 게시물 작성, 이벤트 참여, 사이트 기능 이용 등의 서비스를 이용하기 위하여 회원가입을 신청할 경우, 서비스는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.",
          },
          {
            id: "b",
            content:
              "② 개인정보 수집 및 이용에 대한 자세한 정보는 아래와 같습니다.",
          },
        ],
      },
      {
        id: "disc-1",
        title: "분류",
      },
      {
        id: "disc-2",
        title: "수집 목적",
      },
      {
        id: "disc-3",
        title: "수집 항목",
      },
      {
        id: "disc-4",
        title: "수집 방법",
      },
      {
        id: "disc-5",
        title: "필수",
        content: [{ title: "(SNS 인증 가입 시)" }],
      },
      {
        id: "disc-6",
        title:
          "회원제 서비스 이용, 개인 식별, 부정 이용 방지 등 회원 관리, 약관 변경 안내용 연락 수단",
      },
      {
        id: "disc-7",
        title:
          "정보 주체의 SNS(네이버, 카카오톡) 식별자, ID, 닉네임, 이메일, 성별",
      },
      {
        id: "disc-8",
        title: "SNS 인증 가입 시",
      },
      {
        id: "disc-9",
        title: "만 14세 미만 여부 확인, 부정 이용 방지 등 회원 관리",
      },
      {
        id: "disc-10",
        title: "생년월일, 연령대",
      },
      {
        id: "disc-11",
        title: "SNS 인증 가입 시",
      },
      {
        id: "disc-12",
        title: "중복 가입 방지 등 회원 관리",
      },
      {
        id: "disc-13",
        title: "CI",
      },
      {
        id: "disc-14",
        title: "SNS 인증 가입 시",
        content: [
          {
            id: "a",
            title:
              "③ 회사는 위 방법 외에 다음의 방법을 통해 개인정보를 수집합니다.",
            content: [
              {
                id: "disc-15",
                title:
                  "협력 회사로부터 개인정보를 제공받을 수 있으며, 이러한 경우 정보통신망법에 따라 협력사에서 이용자에게 개인정보 제공 동의 등을 받은 후 회사에 제공합니다.",
              },
            ],
          },
          {
            id: "b",
            title:
              "④ 회사의 서비스를 이용하시기 위하여 기입하신 정보는 해당 서비스 제공이나 회원님께 사전에 밝힌 목적 이외의 다른 어떠한 목적으로도 사용되지 않습니다.",
          },
        ],
      },
      {
        id: "disc-16",
        title: "3. 개인정보의 제3자 제공",
      },
      {
        id: "disc-17",
        title:
          "회사는 어떠한 경우에도 '개인정보의 수집 및 이용 목적'에서 명시한 범위를 넘어 이용자의 개인정보를 이용하거나 외부에 제공하지 않습니다.",
      },
      {
        id: "disc-18",
        title:
          "회사는 이용자의 개인정보를 제3자에게 제공하거나 공유하는 경우에는 사전에 이용자에게 제공받는 자, 제공받는 자의 개인정보 이용 목적, 제공하는 개인정보 항목, 제공받는 자의 개인정보 보유 및 이용기간 등에 대해 홈페이지를 통해 고지하거나 개별적으로 서면, 전화, 전자우편 등의 방법을 통하여 동의를 구합니다. 다만 아래의 경우는 예외로 합니다.",
        content: [
          {
            id: "disc-19",
            title: "이용자들이 사전에 동의한 경우",
          },
          {
            id: "disc-20",
            title:
              "통계작성, 학술연구 또는 시장조사를 위하여 특정 개인을 식별할 수 없는 형태로 가공하여 제공하는 경우",
          },
          {
            id: "disc-21",
            title:
              "법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우",
          },
          {
            id: "disc-22",
            title: "기타 서비스 제공에 따른 요금 정산을 위하여 필요한 경우",
          },
        ],
      },
      {
        id: "disc-23",
        title:
          "회사는 본래의 수집목적 및 이용목적에 반하여 무분별하게 정보가 제공되지 않도록 최대한 노력하겠습니다.",
      },
      {
        id: 4,
        title: "수집한 개인정보 취급 위탁",
        content: [
          {
            id: "disc-24",
            title:
              "회사는 서비스 향상을 위해서 아래와 같이 개인정보를 위탁하고 있으며, 관계 법령에 따라 위탁계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 관리/감독하고 있습니다.",
          },
        ],
      },
      {
        id: 5,
        title: "개인정보의 보유 및 이용기간",
        content: [
          {
            id: "disc-25",
            title:
              "회사는 회원이 회사가 제공하는 서비스를 받는 동안 회원의 개인정보를 보유합니다.",
          },
          {
            id: "disc-26",
            title:
              "이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용 목적이 달성된 시점에서 지체없이 파기합니다.",
          },
          {
            id: "disc-27",
            title: "▶ 수집 및 이용 목적이 달성된 시점",
            content: [
              {
                id: "disc-28",
                title:
                  "회원 가입 정보 : 회원을 탈퇴하거나 이용 계약을 해지할 때",
              },
              { id: "disc-29", title: "본인 확인 정보 : 본인임을 확인한 때" },
            ],
          },
        ],
      },
      {
        id: "disc-30",
        title:
          "회원이 서비스 이용 계약을 해지하거나 제명당한 경우라고 할지라도 서비스 이용의 혼선 방지, 권리남용 및 악용 방지, 명예훼손등 권리 침해와 관련한 분쟁 및 수사 협조 의뢰에 대비하기 위한 목적으로 약관에 명시된 3개월 동안 이용자의 개인정보를 보유합니다. 이때에 해당 회원의 개인정보 보호를 위하여 별도로 분리하여 보관, 관리합니다.",
      },
      {
        id: "disc-31",
        title:
          "단, 다음의 정보에 대해서는 아래의 보존 사유를 위해 명시한 기간 동안 보존합니다.",
        content: [
          {
            id: "disc-32",
            title: "서비스 방문에 관한 기록 : 3개월",
            content: [{ id: "disc-33", title: "보존 사유 : 통신비밀보호법" }],
          },
        ],
      },
      {
        id: 6,
        title: "개인정보 파기절차 및 방법",
        content: [
          {
            id: "disc-34",
            title:
              "회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다.",
          },
          {
            id: "disc-35",
            title: "파기 절차 및 방법은 다음과 같습니다.",
            content: [
              {
                id: "disc-36",
                title: "파기절차",
                content: [
                  {
                    id: "disc-37",
                    title:
                      "회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다.",
                  },
                  {
                    id: "disc-38",
                    title:
                      "동 개인정보는 법률에 의한 경우가 아니고서는 보유 되는 목적 이외의 다른 목적으로 이용되지 않습니다.",
                  },
                ],
              },
              {
                id: "disc-39",
                title: "파기방법",
                content: [
                  {
                    id: "disc-40",
                    title:
                      "전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 7,
        title:
          "개인정보를 자동으로 수집하는 장치의 설치, 운영 및 거부에 관한 사항",
        content: [
          {
            id: "disc-41",
            title: "가. 쿠키란?",
            content: [
              {
                id: "disc-42",
                title:
                  "회사의 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는 아주 작은 텍스트 파일로서 이용자의 컴퓨터 하드 디스크에 저장됩니다.",
              },
              {
                id: "disc-43",
                title:
                  "쿠키는 회원의 컴퓨터는 식별하지만 회원 개개인을 식별하지 않습니다.",
              },
            ],
          },
          {
            id: "disc-44",
            title: "나. 쿠키의 사용 목적",
            content: [
              {
                id: "disc-45",
                title:
                  "회원과 비회원의 접속 빈도나 방문 시간, 이용 서비스 등을 분석하여 이용자의 취향 및 관심 분야를 파악하는 용도로 사용됩니다.",
              },
              {
                id: "disc-46",
                title:
                  "위의 내용을 바탕으로 한 개인 맞춤 서비스 제공을 위한 자료로 사용됩니다.",
              },
            ],
          },
          {
            id: "disc-47",
            title: "다. 쿠키의 설치 운영 및 거부",
            content: [
              {
                id: "disc-48",
                title: "이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다.",
              },
              {
                id: "disc-49",
                title:
                  "이용자는 사용하는 브라우저 제조사가 제공하는 안내에 따라 이용자 브라우저의 쿠키 폴더에 설치된 쿠키를 손쉽게 삭제 및 관리할 수 있습니다.",
              },
              {
                id: "disc-50",
                title:
                  "인터넷 익스플로러, 크롬, 사파리를 사용하는 이용자는 아래를 참조하여 쿠키를 관리할 수 있습니다.",
              },
              {
                id: "disc-51",
                title:
                  "인터넷 익스플로러: 도구메뉴 선택 > 인터넷옵션 선택 > 개인정보 탭 선택 > 개인정보처리 수준 설정",
              },
              {
                id: "disc-52",
                title:
                  "크롬: 설정 메뉴 선택 > 고급설정 표시 선택 > 개인정보 - 컨텐츠 설정 선택 > 쿠키 수준 설정",
              },
              {
                id: "disc-53",
                title:
                  "사파리: 설정메뉴 선택 > 개인정보탭 선택 > 쿠키 및 웹사이트 데이터 수준 설정",
              },
              {
                id: "disc-54",
                title:
                  "다른 브라우저를 사용하는 이용자는 해당 브라우저 제조사의 안내에 따라 쿠키를 관리할 수 있습니다.",
              },
              {
                id: "disc-55",
                title:
                  "쿠키의 설치를 거부할 경우 회사의 서비스 제공에 어려움이 있을 수 있습니다.",
              },
            ],
          },
        ],
      },
      {
        id: 8,
        title: "개인정보 보호를 위한 기술적, 관리적 대책",
        content: [
          {
            id: "disc-56",
            title:
              "회사는 회원의 개인정보를 취급함에 있어 개인정보가 분실, 도단, 누출, 변조 또는 훼손되지 않도록 안정성 확보를 위하여 다음과 같은 기술적, 관리적 대책을 강구합니다.",
            content: [
              {
                id: "disc-57",
                title: "가. 기술적 대책",
                content: [
                  {
                    id: "disc-58",
                    title:
                      "개인정보취급자가 개인정보처리시스템에 접속한 기록을 보관 관리하며, 개인정보의 오남용, 분실, 위조, 변조 등을 방지하기 위하여 접속기록 등을 정기적으로 점검하며, 개인정보취급자의 접속기록이 위변조 및 도난, 분실되지 않도록 해당 접속기록을 안전하게 보관하고 있습니다.",
                  },
                ],
              },
              {
                id: "disc-59",
                title: "나. 관리적 대책",
                content: [
                  {
                    id: "disc-60",
                    title:
                      "회원의 개인정보는 기본적으로 비밀번호에 의해 보호되므로 누구에게도 비밀번호를 공개해서는 안됩니다. 비밀번호는 시스템 적으로 암호화되어 운영자도 회원 개개인의 비밀번호를 알 수 없습니다. 회원은 특히 다른 사람과 PC를 공유하여 사용하거나 공공장소에서 이용하는 경우 자신의 비밀번호가 노출되지 않도록 유의하시기 바랍니다. 서비스를 이용한 후에는 로그아웃(LOG-OUT)및 활성화된 모든 웹 브라우저를 종료하시길 권장합니다.",
                  },
                  {
                    id: "disc-61",
                    title:
                      "개인정보 취급자의 업무 인수인계는 보안이 유지된 상태에서 철저하게 이뤄지고 있으며, 입사 및 퇴사 후 개인정보 침해에 사고에 대한 책임을 명확하게 규정하고 있습니다.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 9,
        title: "개인정보 보호책임자",
        content: [
          {
            id: "disc-62",
            title:
              "회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보 보호책임자 및 관련 부서를 지정하고 있습니다.",
            content: [
              {
                id: "disc-63",
                title: "▶ 개인정보 보호책임자",
                content: [
                  {
                    id: "disc-64",
                    title: "성명 : 홍길표",
                  },
                  {
                    id: "disc-65",
                    title: "소속 : 개발팀",
                  },
                  {
                    id: "disc-66",
                    title: "연락처 전화 : 01099738232",
                  },
                  {
                    id: "disc-67",
                    title: "전자우편 : TeamPlayHive@gmail.com",
                  },
                ],
              },
              {
                id: "disc-68",
                title: "▶ 개인정보 보호관리자",
                content: [
                  { id: "disc-69", title: "성명 : 홍길동" },
                  { id: "disc-70", title: "소속 : 개발팀" },
                  { id: "disc-71", title: "연락처 전화 : 01099738232" },
                  { id: "disc-72", title: "전자우편 : TeamPlayHive@gmail.com" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "disc-73",
        title:
          "귀하는 회사의 서비스를 이용하시며 발생하는 모든 개인정보 보호 관련 민원을 개인정보 보호책임자 혹은 담당부서로 문의하실 수 있습니다. 회사는 이용자들의 문의사항에 대해 신속하고 성실하게 답변해 드리겠습니다.",
      },
    ],
  };

  return (
    <div className="text-[14px] leading-[22px] text-gray6">
      {termsData.sections.map((section) => (
        <div key={section.id} className="policy-section">
          <div className="policy-title">
            {!isNaN(Number(section.id)) && <span>{section.id}. </span>}
            {isNaN(Number(section.id)) &&
              typeof section.id === "string" &&
              section.id.length === 1 &&
              /[a-zA-Z]/.test(section.id) && <span>{section.id}. </span>}
            {typeof section.id === "string" &&
              section.id.startsWith("disc-") && (
                <span className="bullet">• </span>
              )}
            <span>{section.title}</span>
          </div>
          {section.content &&
            Array.isArray(section.content) &&
            section.content.map((contentItem, index) => (
              <div
                key={contentItem.id || index}
                className="ml-2 policy-content-item"
              >
                <div className="content-title">
                  {contentItem.id && contentItem.id.startsWith("disc-") && (
                    <span className="bullet">• </span>
                  )}
                  {contentItem.id &&
                    !contentItem.id.startsWith("disc-") &&
                    contentItem.id.length === 1 &&
                    /[a-zA-Z]/.test(contentItem.id) && (
                      <span>{contentItem.id}. </span>
                    )}

                  {contentItem.title && <span>{contentItem.title}</span>}

                  {typeof contentItem.content === "string" && (
                    <span>{contentItem.content}</span>
                  )}
                </div>

                {contentItem.content &&
                  Array.isArray(contentItem.content) &&
                  contentItem.content.map((subItem, subIndex) => (
                    <div
                      key={subItem.id || subIndex}
                      className="ml-2 policy-subcontent-item"
                    >
                      <div className="subcontent-title">
                        {subItem.id && subItem.id.startsWith("disc-") && (
                          <span className="bullet">• </span>
                        )}
                        {subItem.id &&
                          !subItem.id.startsWith("disc-") &&
                          subItem.id.length === 1 &&
                          /[a-zA-Z]/.test(subItem.id) && (
                            <span>{subItem.id}. </span>
                          )}

                        {subItem.title && <span>{subItem.title}</span>}

                        {typeof subItem.content === "string" && (
                          <span>{subItem.content}</span>
                        )}
                      </div>

                      {subItem.content &&
                        Array.isArray(subItem.content) &&
                        subItem.content.map((deepItem, deepIndex) => (
                          <div
                            key={deepItem.id || deepIndex}
                            className="ml-2 policy-deepcontent-item"
                          >
                            <div className="deepcontent-title">
                              {deepItem.id &&
                                deepItem.id.startsWith("disc-") && (
                                  <span className="bullet">• </span>
                                )}
                              {deepItem.id &&
                                !deepItem.id.startsWith("disc-") &&
                                deepItem.id.length === 1 &&
                                /[a-zA-Z]/.test(deepItem.id) && (
                                  <span>{deepItem.id}. </span>
                                )}

                              {deepItem.title && <span>{deepItem.title}</span>}

                              {typeof deepItem.content === "string" && (
                                <span>{deepItem.content}</span>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default TermsPersonalText;
