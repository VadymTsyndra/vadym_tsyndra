import { Activity } from "../types/Activity";

const API_URL = `https://www.boredapi.com/api/activity`;

export function getActivity(): Promise<Activity> {
  return fetch(API_URL)
    .then(response => response.json());
}

export function getActivities(): Promise<Activity[]> {
  console.log('getActivities!');

  try {
    const promises = [];
    for (let i = 0; i < 3; i++) {
      promises.push(getActivity());
    }
    const data = Promise.all(promises).then(fetchedActivities => fetchedActivities);

    return data;

  } catch (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
}
