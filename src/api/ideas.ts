import { Activity } from "../types/Activity";

export function getActivity(): Promise<Activity> {
  return fetch(process.env.REACT_APP_API_URL + '/activity' )
    .then(response => response.json());
}

export function getActivities(): Promise<Activity[]> {
  try {
    const data = Promise.all([getActivity(), getActivity(), getActivity()]).then(fetchedActivities => fetchedActivities);
    return data;

  } catch (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
}

export const saveData = (data: Activity[], apiUrl: string) => {
  return fetch(`${apiUrl}/my-activities`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};

export const getData = (apiUrl: string) => {
  return fetch(`${apiUrl}/my-activities`);
};

