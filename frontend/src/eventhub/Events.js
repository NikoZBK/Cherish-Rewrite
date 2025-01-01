export const Events = {
  // View Switching Events:
  SwitchToCalendarView: "SwitchToCalendarView",
  SwitchToCheckInView: "SwitchToCheckInView",
  SwitchToDayView: "SwitchToDayView",
  SwitchToJournalView: "SwitchToJournalView",
  SwitchToSummaryView: "SwitchToSummaryView",
  SwitchToSettingsView: "SwitchToSettingsView",

  // TODO: Add granular data events (like store journal, store check-in, etc.)
  // Data Events
  RestoreUserData: "RestoreUserData",
  RestoreUserDataSuccess: "RestoreUserDataSuccess",
  RestoreUserDataFailure: "RestoreUserDataFailure",

  StoreUserData: "StoreUserData",
  StoreUserDataSuccess: "StoreUserDataSuccess",
  StoreUserDataFailure: "StoreUserDataFailure",

  DeleteUserData: "DeleteUserData",
  DeleteUserDataSuccess: "DeleteUserDataSuccess",
  DeleteUserDataFailure: "DeleteUserDataFailure",

  RestoreUserDay: "RestoreUserDay",
  RestoreUserDaySuccess: "RestoreUserDaySuccess",
  RestoreUserDayFailure: "RestoreUserDayFailure",

  StoreUserDay: "StoreUserDay",
  StoreUserDaySuccess: "StoreUserDaySuccess",
  StoreUserDayFailure: "StoreUserDayFailure",

  DeleteUserDay: "DeleteUserDay",
  DeleteUserDaySuccess: "DeleteUserDaySuccess",
  DeleteUserDayFailure: "DeleteUserDayFailure",

  NewDay: "NewDay",

  // User Events:
  RegisterUser: "RegisterUser",
  RegisterUserSuccess: "RegisterUserSuccess",
  RegisterUserFailure: "RegisterUserFailure",

  AuthenticateUser: "AuthenticateUser",
  AuthenticateUserSuccess: "AuthenticateUserSuccess",
  AuthenticateUserFailure: "AuthenticateUserFailure",

  LogoutUser: "LogoutUser",
  LogoutUserSuccess: "LogoutUserSuccess",
  LogoutUserFailure: "LogoutUserFailure",
};
