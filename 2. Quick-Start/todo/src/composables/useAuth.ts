const useAuth = () => {
  //저장소에서 username이 있다면 다음 단계로 넘어가고 없으면 false 반환
  const getUserInfo = () => {
    const userRawInfo = localStorage.getItem("user");
    return userRawInfo;
  };

  const setUserInfo = ({ username, password }: UserInfo) => {
    const userInfo = {
      username,
      password,
    };
    //password와 username이 일치하는지 확인하는 과정

    localStorage.setItem("user", username);
  };

  return {
    getUserInfo,
    setUserInfo,
  };
};

export default useAuth;
