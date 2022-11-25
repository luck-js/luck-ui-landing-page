import { apiAxios } from '../../api.axios';
import { NewHappening } from '../model';

const waitUntilReturnParticipants = async (id: string, index = 0): Promise<string> => {
  const { data } = await apiAxios.get(`/api/v1/published-happening/${id}`)

  if(index === 18){
    throw new Error("ups")
  } else if(data.participants.length !== 0){
    return id
  } else {
    return new Promise((resolve => {
      setTimeout(() => {
        resolve(waitUntilReturnParticipants(id, ++index))
      }, 10000)
    }))
  }

}

export const createNewPublishedHappening = async (happening: NewHappening): Promise<string> => {
  const { data } = await apiAxios.post('/api/v1/published-happening', {
    happening,
  });

  await waitUntilReturnParticipants(data.id)

  return data.id
}
