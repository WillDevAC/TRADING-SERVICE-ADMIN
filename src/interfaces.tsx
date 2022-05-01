export interface Message {
  sender: string;
  receiver: string;
}

export interface Datum {
  id: string;
  profilepic: string;
  lastmsg: string;
  time: string;
  messages: Message[];
}

export interface RootObject {
  data: Datum[];
}
