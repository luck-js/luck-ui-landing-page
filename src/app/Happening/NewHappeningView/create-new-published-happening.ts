import { apiAxios } from '../../api.axios';
import { NewHappening } from '../model';

const waitUntilReturnParticipants = async (id: string, index = 0): Promise<string> => {
  const { data } = await apiAxios.get(`/api/v1/draw/${id}`);

  if (index === 18) {
    throw new Error('ups');
  } else if (data.members.length !== 0) {
    return id;
  } else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(waitUntilReturnParticipants(id, ++index));
      }, 10000);
    });
  }
};

interface NewHappeningApiData {
  name: string;
  description: string;
  members: {
    name: string;
  }[];
}

const mapToApiData = ({ participants, ...rest }: NewHappening): NewHappeningApiData => {
  return {
    ...rest,
    members: participants,
  };
};

export const createNewPublishedHappening = async (happening: NewHappening): Promise<string> => {
  const { data } = await apiAxios.post('/api/v1/draw', mapToApiData(happening));

  await waitUntilReturnParticipants(data.id);

  return data.id;
};
