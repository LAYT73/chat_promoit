export interface Message {
  id: string;
  senderId: string;
  chatRoomId: string;
  content: string;
  timestamp: Date;
}
