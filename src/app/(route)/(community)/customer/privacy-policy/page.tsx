import React from "react";

const page = () => {
  return (
    <div className="w-[720px] h-auto rounded-[5px] border-b bg-[#FFFFFF] flex flex-col shadow-md">
      <div className="w-full min-h-[64px] border-b p-4 flex justify-between items-center border-[#EEEEEE] bg-[#F9F9F9]">
        <h1 className="font-bold text-[18px] leading-7 text-[#303030]">
          개인정보 취급방침
        </h1>
      </div>
      <div className="w-full p-6">
        <div className="text-[14px] leading-[22px] tracking-[-0.02em] text-[#656565] space-y-6">
          <ol className="list-decimal pl-5 space-y-4">
            <li className="space-y-3">
              <strong className="text-[#303030]">
                개인정보 수집에 대한 동의
              </strong>
              <p>
                서비스는 아래 항목에서 개인정보 수집에 대한 동의를 받고
                있습니다. 서비스는 회원 가입 절차에서 개인정보 처리방침과 이용
                약관에 대한 동의를 받아야 합니다. 이용자가 동의를 선택하여
                회원가입 개인정보 수집에 대한 동의의 용도로 간주합니다.
              </p>
            </li>

            <li className="space-y-3">
              <strong className="text-[#303030]">
                개인정보의 수집 및 이용
              </strong>
              <div className="space-y-3">
                <p>
                  a. 이용자가 기입을 통상 이아트 문자, AI아트 가능 이용 동의
                  서비스를 이용하거기 위하여 회원가입을 선택할 경우, 서비스는
                  서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.
                </p>

                <p>
                  b. 아래 개인정보 수집 및 이용에 대한 자세한 정보는 아래와
                  같습니다.
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    분류
                    <ul className="list-disc pl-6 space-y-2">
                      <li>필수항목</li>
                      <li>선택항목</li>
                      <li>수집항목</li>
                    </ul>
                  </li>
                  <li>
                    목적
                    <ul className="list-disc pl-6 space-y-2">
                      <li>회원 인증 가입 시</li>
                      <li>회원의 서비스 이용, 개인 식별, 부정 이용 방지 등</li>
                      <li>성명, ID, 닉네임, 이메일, 성별</li>
                      <li>SNS 인증 가입 시</li>
                    </ul>
                  </li>
                </ul>

                <p>
                  c. 그 밖의 불가량한 경우 디음와 면내를 통해 개인정보를
                  수집합니다.
                </p>
              </div>
            </li>

            <li className="space-y-3">
              <strong className="text-[#303030]">개인정보의 제3자 제공</strong>
              <p>
                서비스는 이용자의 개인정보를 처리 및 이용 목적에서 명시한 범위를
                넘어 이용자의 개인정보를 이용하거나 제공하지 않습니다.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>서비스의 권리자의 개인정보를 제3자에게 제공할 경우</li>
                <li>법률에 따른 규제에 따라 제공될 수 있습니다.</li>
              </ul>
            </li>

            <li className="space-y-3">
              <strong className="text-[#303030]">
                개인정보의 보유 및 이용 기간
              </strong>
              <p>
                서비스는 법령에 따른 개인정보 보유·이용기간 내에서 개인정보를
                처리·보유합니다.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>회원 가입, 관리: 회원탈퇴 시까지</li>
                <li>
                  재화 또는 서비스 제공: 재화·서비스 공급완료 및 요금결제·정산
                  완료 시까지
                </li>
              </ul>
            </li>

            <li className="space-y-3">
              <strong className="text-[#303030]">
                개인정보의 파기절차 및 방법
              </strong>
              <p>
                회원님이 입력하신 개인정보는 목적이 달성된 후 별도의 DB로 옮겨져
                일정 기간 저장된 후 파기됩니다.
              </p>
              <p>
                별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는
                보유되어 다른 목적으로 이용되지 않습니다.
              </p>
            </li>

            <li className="space-y-3">
              <strong className="text-[#303030]">
                개인정보 보호를 위한 기술적, 관리적 대책
              </strong>
              <div className="space-y-4">
                <p>
                  회사는 이용자들의 개인정보를 취급함에 있어 안전성 확보를
                  위하여 다음과 같은 기술적, 관리적 대책을 강구하고 있습니다.
                </p>
                <ul className="space-y-3">
                  <li>
                    <strong>기술적 대책</strong>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>회원의 개인정보는 비밀번호로 보호</li>
                      <li>파일 및 전송 데이터를 암호화</li>
                      <li>컴퓨터바이러스 방지 백신 프로그램</li>
                    </ul>
                  </li>

                  <li>
                    <strong>관리적 대책</strong>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>개인정보 접근권한을 최소화</li>
                      <li>정기적인 보안 교육 및 관리</li>
                      <li>전산실 보호구역 설정</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>

            <li className="space-y-3">
              <strong className="text-[#303030]">개인정보 보호책임자</strong>
              <div>
                <p>
                  회사는 개인정보 처리와 관련한 불만처리 및 피해구제 등을 위하여
                  개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>개인정보 보호책임자</strong>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>성명: 홍길동</li>
                      <li>직책: 팀장</li>
                      <li>연락처: 010-9978-2122</li>
                      <li>이메일: TeamTeamhey@gmail.com</li>
                    </ul>
                  </li>
                  <li>
                    <strong>개인정보 보호담당자</strong>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>성명: 홍길표</li>
                      <li>직책: 팀리더</li>
                      <li>연락처: 010-7730-0282</li>
                      <li>이메일: TeamTeamhey@gmail.com</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default page;
