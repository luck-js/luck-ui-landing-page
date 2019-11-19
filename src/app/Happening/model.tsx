export interface Participant {
  name: string;
  uniqueLink: string;
}

export interface PublishedHappening {
  name: string;
  description: string;
  participants: Participant[];
}

export interface NewParticipant {
  name: string;
}

export interface NewHappening {
  name: string;
  description: string;
  participants: NewParticipant[];
}

export const INIT_NEW_HAPPENING: NewHappening = {
  name: '',
  description: '',
  participants: [],
};
