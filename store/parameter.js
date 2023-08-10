export const state = () => ({
  dataAVPParams: {},
  dataTPReviewParams: {},
  dataTPSignOffParams: {},
  dataAVPHistoryParams: {},
  latestCriteria: {}
})

export const mutations = {
  setAVPParams (state, value) {
    state.dataAVPParams = value
  },
  setAVPHistoryParams (state, value) {
    state.dataAVPHistoryParams = value
  },
  setTPReviewParams (state, value) {
    state.dataTPReviewParams = value
  },
  setTPSignOffParams (state, value) {
    state.dataTPSignOffParams = value
  },
  LATEST_CRITERIA (state, payload) {
    state.latestCriteria = payload
  },
}