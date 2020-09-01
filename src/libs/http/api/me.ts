import { Canceler } from 'axios';
import { axios, cancelToken } from 'libs/http/axios';

export const me = {
  getAllowedRoles: {
    action: (params = {}) =>
      axios.get(`me/allowed_roles`, {
        params,
        cancelToken: new cancelToken((c: Canceler) => (me.getAllowedRoles.cancel = c)),
      }),
    cancel: {} as Canceler,
  },

  getAnnounces: {
    action: (params = {}) =>
      axios.get(`me/announces`, {
        params,
        cancelToken: new cancelToken((c: Canceler) => (me.getAnnounces.cancel = c)),
      }),
    cancel: {} as Canceler,
  },

  getContacts: {
    action: (params = {}) =>
      axios.get(`me/contacts`, { params, cancelToken: new cancelToken((c: Canceler) => (me.getContacts.cancel = c)) }),
    cancel: {} as Canceler,
  },

  getEvents: {
    action: (params = {}) =>
      axios.get(`me/events`, { params, cancelToken: new cancelToken((c: Canceler) => (me.getEvents.cancel = c)) }),
    cancel: {} as Canceler,
  },

  getFaculties: {
    action: (params = {}) =>
      axios.get(`me/faculties`, {
        params,
        cancelToken: new cancelToken((c: Canceler) => (me.getFaculties.cancel = c)),
      }),
    cancel: {} as Canceler,
  },

  getOutstandings: {
    action: (params = {}) =>
      axios.get(`me/outstandings`, {
        params,
        cancelToken: new cancelToken((c: Canceler) => (me.getOutstandings.cancel = c)),
      }),
    cancel: {} as Canceler,
  },

  getProfessors: {
    action: (params = {}) =>
      axios.get(`me/professors`, {
        params,
        cancelToken: new cancelToken((c: Canceler) => (me.getProfessors.cancel = c)),
      }),
    cancel: {} as Canceler,
  },

  getResources: {
    action: (params = {}) =>
      axios.get(`me/resources`, {
        params,
        cancelToken: new cancelToken((c: Canceler) => (me.getResources.cancel = c)),
      }),
    cancel: {} as Canceler,
  },

  getSessions: {
    action: (params = {}) =>
      axios.get(`me/sessions`, { params, cancelToken: new cancelToken((c: Canceler) => (me.getSessions.cancel = c)) }),
    cancel: {} as Canceler,
  },

  getSession: {
    action: ({ id, ...params }: { id: number }) =>
      id &&
      axios.get(`me/sessions/${id}`, {
        params,
        cancelToken: new cancelToken((c: Canceler) => (me.getSession.cancel = c)),
      }),
    cancel: {} as Canceler,
  },

  getStudents: {
    action: (params = {}) =>
      axios.get(`me/students`, { params, cancelToken: new cancelToken((c: Canceler) => (me.getStudents.cancel = c)) }),
    cancel: {} as Canceler,
  },
};
