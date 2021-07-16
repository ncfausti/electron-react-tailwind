export default interface IDataStore {
  addContact: (contact: Contact) => string; // uuid
  getAllContacts: () => Contact[];

  getContactById: (id: string) => Contact;
  // getAllEngagements: () => Engagement[];
  // updateContact: (id: string, contact: Contact) => boolean;
  // updateEngagement: (id: string, engagement: Engagement) => boolean;
}

export interface IRecord {
  id: string;
  created: Date;
  modified: Date | null;
  data: RecordData;
}

export enum Collection {
  Engagement = 'engagement',
  Contact = 'contact',
}
interface RecordData {
  name: string;
}
export interface Contact extends RecordData {
  photo: string;
}

export interface Engagement extends RecordData {
  conversation: string;
  video: string;
}
