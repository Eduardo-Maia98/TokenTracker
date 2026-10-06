/**
 * Connected Cursor account identity used by the Connect flow.
 */
export type CursorAccount = {
  email: string;
  /** Membership / plan label from Cursor usage summary (e.g. pro, free, business). */
  plan: string;
};

export type ConnectionStatus = 'disconnected' | 'connected';
