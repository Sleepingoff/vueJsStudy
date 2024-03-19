const useCheckAuth = (userInfo: UserInfo) => {
  const { username, password } = userInfo;
  if (!username || !password) {
    return false;
  }

  return true;
};

export default useCheckAuth;
