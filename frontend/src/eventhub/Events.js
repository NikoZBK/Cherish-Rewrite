export const Events = {
  // View Switching Events:
  SwitchToCalendarView: 'SwitchToCalendarView',
  SwitchToCheckInView: 'SwitchToCheckInView',
  SwitchToDayView: 'SwitchToDayView',
  SwitchToJournalView: 'SwitchToJournalView',
  SwitchToSummaryView: 'SwitchToSummaryView',
  SwitchToSettingsView: 'SwitchToSettingsView',

  // Data Events
  RestoreUserData: 'RestoreUserData',
  RestoreUserDataSuccess: 'RestoreUserDataSuccess',
  RestoreUserDataFailure: 'RestoreUserDataFailure',

  StoreUserData: 'StoreUserData',
  StoreUserDataSuccess: 'StoreUserDataSuccess',
  StoreUserDataFailure: 'StoreUserDataFailure',

  DeleteUserData: 'DeleteUserData',
  DeleteUserDataSuccess: 'DeleteUserDataSuccess',
  DeleteUserDataFailure: 'DeleteUserDataFailure',

  RestoreUserDay: 'RestoreUserDay',
  RestoreUserDaySuccess: 'RestoreUserDaySuccess',
  RestoreUserDayFailure: 'RestoreUserDayFailure',

  // TODO: Have granular data events (like store day, store journal, store check-in, etc.)
  // TODO: respond to StoreUserData

  /* Granular Data Events */

  RestoreUserDay: 'RestoreUserDay',
  RestoreUserDaySuccess: 'RestoreUserDaySuccess',
  RestoreUserDayFailure: 'RestoreUserDayFailure',

  StoreUserDay: 'StoreUserDay',
  StoreUserDaySuccess: 'StoreUserDaySuccess',
  StoreUserDayFailure: 'StoreUserDayFailure',

  DeleteUserDay: 'DeleteUserDay',
  DeleteUserDaySuccess: 'DeleteUserDaySuccess',
  DeleteUserDayFailure: 'DeleteUserDayFailure',

  StoreUserJournal: 'StoreUserJournal',
  StoreUserJournalSuccess: 'StoreUserJournalSuccess',
  StoreUserJournalFailure: 'StoreUserJournalFailure',

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
