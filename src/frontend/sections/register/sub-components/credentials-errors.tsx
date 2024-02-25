type CredentialError = {
  regEx: RegExp;
  message: string;
};

type CredentialErrors = CredentialError[];

export const emailErrors: CredentialErrors = [
  { regEx: /^.+$/, message: "Email required" },
  {
    regEx: /^.{6,}$/,
    message: "Email too short",
  },

  { regEx: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email" },
];

export const passwordErrors: CredentialErrors = [
  { regEx: /^.+$/, message: "Password required" },
  { regEx: /^.{8,}$/, message: "Password too short" },
  { regEx: /^(?=.*[A-Z]).{8,}$/, message: "At last one uppercase letter" },
  { regEx: /^(?=.*[a-z]).{8,}$/, message: "At least one lowercase letter" },
  { regEx: /^(?=.*\d).{8,}$/, message: "At least one digit" },
];
