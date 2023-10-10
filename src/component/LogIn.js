function LogIn() {
  return (
    <form action="">
      <div id="login">
        <input type="text" name="name" placehoder="아이디를 입력하세요" />
        <input type="password" name="name" placehoder="비밀번호를 입력하세요" />
      </div>
      <button type="button" class="find">아이디 찾기</button>
      <button type="button" class="find">비밀번호 찾기</button>
      <button type="button" id="signUp_button">회원가입</button>
    </form>
  )
};

export default LogIn;