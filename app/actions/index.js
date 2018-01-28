export const FETCH_VACANCIES = "FETCH_VACANCIES";

export const fetchVacancies = () => async (dispatch, getState, api) => {
  const res = await api.get("/api/vacancies");

  dispatch({
    type: FETCH_VACANCIES,
    payload: res
  });
};

export const FETCH_DESCRIPTION = "FETCH_DESCRIPTION";
export const fetchVacanciesDescription = id => async (
  dispatch,
  getState,
  api
) => {
  const res = await api.get(`/api/vacancies/${id}`);

  dispatch({
    type: FETCH_DESCRIPTION,
    payload: res
  });
};
