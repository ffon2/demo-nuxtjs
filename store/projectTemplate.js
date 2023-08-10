export const state = () => ({
  datasource: { data: [], total: 0 },
  phaseList: [],
  mockupData: [
    { phaseId: 'discover-align', col1: 'Discover & Align', workItemList: [
      { subject: 'Prepare information for JBP (BigC & Vendor)', label: ['NPD'], itemType: 'Task', priority: 'Low' },
      { subject: 'BigC Internal Meeting (align objectives & requirement)', label: ['NPD'], itemType: 'Meeting with Supplier', priority: 'High' },
      { subject: 'Pre-JBP (BigC & Supplier) exhange Info & Requirement', label: ['NPD'], itemType: 'Task', priority: 'Medium' },
    ] },
    { phaseId: 'initiative-planning', col1: 'Initiative Planning', workItemList: [
      { subject: 'Re-visit plan after Pre-JBP', label: ['NPD'], itemType: 'Task', priority: 'Low' },
      { subject: 'JBP Final Meeting', label: ['NPD'], itemType: 'Task', priority: 'High' },
    ] },
    { phaseId: 'execute-plan', col1: 'Execute Plan', workItemList: [
      { subject: 'Corporate Signoff for funding', label: ['NPD'], itemType: 'Task', priority: 'Medium' },
      { subject: 'Review initiatives Tracking & Progress', label: ['NPD'], itemType: 'Internal Meeting', priority: 'Low' },
      { subject: 'Assign sub-teams to complete task', label: ['NPD'], itemType: 'Task', priority: 'High' },
    ] },
    { phaseId: 'mornitor-and-renew', col1: 'Mornitor and Renew', workItemList: [
      { subject: 'Follow up meeting by monthly, bi-monthly,.', label: ['NPD'], itemType: 'Task', priority: 'Low' },
      { subject: 'Review progress of key initiatives', label: ['NPD'], itemType: 'Internal Meeting', priority: 'High' },
      { subject: 'Discuss and remove barriers', label: ['NPD'], itemType: 'Meeting with Supplier', priority: 'Low' },
      { subject: 'Adjustment as necessary', label: ['NPD'], itemType: 'Task', priority: 'Medium' },
    ] },
  ],
  mockupPhase: [
    { id: 'discover-align', label: 'Discover & Align' },
    { id: 'initiative-planning', label: 'Initiative Planning' },
    { id: 'execute-plan', label: 'Execute Plan' },
    { id: 'mornitor-and-renew', label: 'Mornitor and Renew' }
  ]
})

export const mutations = {
  pushPhaseList (state, data) {
    state.phaseList.push(data)
  },
  deletePhaseList (state, data) {
    let index = state.phaseList.findIndex(el => el.label == data.col1)
    if (index >= 0) {
      state.phaseList.splice(index, 1)
    }
  },
  unshiftData (state, data) {
    state.datasource.data.unshift(data)
  },
  pushData (state, data) {
    state.datasource.data.push(data)
  },
  deleteData (state, index) {

    let indexx = state.datasource.data.findIndex(el => el.col1 == 'Non-Phase')
    let workItemList = state.datasource.data[index].workItemList

    if (workItemList.length > 0) {
      let items = [ ... state.datasource.data[indexx].workItemList, ...workItemList ]
      state.datasource.data[indexx].workItemList = items
    }

    state.datasource.data.splice(index, 1)
  },
  pushWorkItems (state, data) {
    let index = state.datasource.data.findIndex(el => el.col1 == data.col1)
    if (index >= 0) {
      state.datasource.data[index].workItemList.push(data)
    }
  },
  deleteWorkItems (state, data) {
    data.workItemList.splice(data.index, 1)
  },
  updateDataList (state, data) {
    state.datasource.data = data
  },
  clearData (state, data) {
    state.datasource = { data: [], total: 0 }
    state.phaseList = []
  },
  updateData (state, data) {
    state.datasource.data = state.mockupData
    state.phaseList = state.mockupPhase
  }
}
