export const Events = {
  // View Switching Events:
  SwitchToCalendarView: 'SwitchToCalendarView',
  SwitchToCheckInView: 'SwitchToCheckInView',
  SwitchToDayView: 'SwitchToDayView',
  SwitchToJournalView: 'SwitchToJournalView',
  SwitchToSummaryView: 'SwitchToSummaryView',
  SwitchToSettingsView: 'SwitchToSettingsView',

  // TODO: Add granular data events (like store journal, store check-in, etc.)
  // Data Events:
  LoadUserData: 'LoadUserData',
  LoadUserDataSuccess: 'LoadUserDataSuccess',
  LoadUserDataFailure: 'LoadUserDataFailure',

  StoreUserData: 'StoreUserData',
  StoreUserDataSuccess: 'StoreUserDataSuccess',
  StoreUserDataFailure: 'StoreUserDataFailure',

  UnStoreUserData: 'UnStoreUserData',
  UnStoreUserDataSuccess: 'UnStoreUserDataSuccess',
  UnStoreUserDataFailure: 'UnStoreUserDataFailure',

  // User Events:
  RegisterUser: 'RegisterUser',
  RegisterUserSuccess: 'RegisterUserSuccess',
  RegisterUserFailure: 'RegisterUserFailure',

  AuthenticateUser: 'AuthenticateUser',
  AuthenticateUserSuccess: 'AuthenticateUserSuccess',
  AuthenticateUserFailure: 'AuthenticateUserFailure',

  LogoutUser: 'LogoutUser',
  LogoutUserSuccess: 'LogoutUserSuccess',
  LogoutUserFailure: 'LogoutUserFailure',
};
