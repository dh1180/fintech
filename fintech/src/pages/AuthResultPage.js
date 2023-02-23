import React from 'react'
import { useLocation } from 'react-router-dom'
import AppHeader from '../components/Common/AppHeader'
import queryString from "query-string"
import axios from 'axios'

function AuthResultPage() {
    const code = useLocation().search
    const authCode = queryString.parse(code).code

    const handleAuthButtonClick = () => {
        let sendData = {
            code: authCode,
            client_id:"ecf0b2f5-719a-4f91-bfea-8acaed66a57c",
            client_secret:"9e59a9c5-153c-4bcf-94a9-2debc7c28d26",
            redirect_uri:"http://localhost:3000/authResult",
            grant_type:"authorization_code",
        }

        const parsedSendData = queryString.stringify(sendData);

        const option = {
          method: "POST",
          url: "/oauth/2.0/token",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
          data: parsedSendData,
        };
    
        axios(option).then(({ data }) => {
          console.log(data)
          console.log(data.access_token);
          console.log(data.refresh_token);
          if (data.rsp_code !== "O0001") {
            localStorage.setItem("accessToken", data.access_token);
            localStorage.setItem("userSeqNo", data.user_seq_no);
          } else {
            alert("인증에 실패했습니다 다시 시도해 주세요");
          }
        });
      };
    
      return (
        <div>
          <AppHeader title={"인증완료 / 토큰 요청"}></AppHeader>
          사용자 authCode : {authCode}
          <button onClick={handleAuthButtonClick}>AccessToken 요청</button>
        </div>
      );
    };
    
    export default AuthResultPage;