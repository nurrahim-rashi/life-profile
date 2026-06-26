import Backendless from "../lib/backendless";

export const login = async (email: string, password: string) => {
  return await Backendless.UserService.login(email, password, true);
};

export const logout = async () => {
  return await Backendless.UserService.logout();
};

export const getCurrentUser = () => {
  return Backendless.UserService.getCurrentUser();
};
