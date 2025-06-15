import { useState } from "react";

// 계좌 데이터는 따로 관리
const groomAccounts = [
    {tye : "신랑", name : "윤기섭", bank : "농협은행", number: "" },
    {tye : "신랑 아버지", name : "윤근용", bank : "농협은행", number: "3022923834181 " },
    {tye : "신랑 어머니", name : "김해영", bank : "하나은행", number: "35191042350107" }
];

const brideAccounts = [
    {tye : "신부", name : "이수연", bank : "국민은행", number: "50100104373284" },
    {tye : "신부 아버지", name : "이영호", bank : "전북은행", number: "541210316852" },
    {tye : "신부 어머니", name : "송영화", bank : "농협은행", number: "17523651049363" }
];

const Account = () => {
  const [showGroom, setShowGroom] = useState(false);
  const [showBride, setShowBride] = useState(false);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>마음 전하실 곳</h2>
      <p style={{ marginBottom: "1rem" }}>
        참석이 어려우신 분들을 위해 기재했습니다.
        <br />
        너그러운 마음으로 양해 부탁드립니다.
      </p>

      {/* 신랑측 */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          cursor: "pointer",
          marginBottom: "5px",
        }}
        onClick={() => setShowGroom((prev) => !prev)}
      >
        신랑측에게 {showGroom ? "▲" : "▼"}
      </div>
      {showGroom && (
        <div style={{ paddingLeft: "10px", marginBottom: "1rem" }}>
          {groomAccounts.map((acc, i) => (
            <div key={i}>
              {acc.tye}{acc.name} <br/>
              {acc.bank} {acc.number} 
            </div>
          ))}
        </div>
      )}

      {/* 신부측 */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          cursor: "pointer",
          marginBottom: "5px",
        }}
        onClick={() => setShowBride((prev) => !prev)}
      >
        신부측에게 {showBride ? "▲" : "▼"}
      </div>
      {showBride && (
        <div style={{ paddingLeft: "10px" }}>
          {brideAccounts.map((acc, i) => (
            <div key={i}>
                {acc.tye}{acc.name} <br/>
              {acc.bank} {acc.number} 
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Account;
