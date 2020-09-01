import { IndexEntry } from 'ui/organisms/IndexEntry';

import { SessionsPage, SignUpPage, SignInPage } from 'features/public/pages';

import {
  GeneralInstitutePage,
  PrevSessionsinstitutePage,
  SessionsinstitutePage,
  StudentsInstitutePage,
  TeachersInstitutePage,
  AnnouncementsInstitutePage,
  EditCoordinatorPage,
  StudentManagementPage,
} from 'features/institute/pages';
import { EventsPage, AddEventsPage } from 'features/events/pages';

import { PersonalAccountPage, EditPersonalAccountPage } from 'features/personal/pages';

import { AnnouncementsPage } from 'features/announcements/pages';

import {
  PlannedSessionsPage,
  CurrentSessionsPage,
  ClosedSessionsPage,
  SessionApplicationsPage,
  AddSessionPage,
} from 'features/sessions/pages';

export const routes = [
  // prettier-ignore
  { name: 'IndexEntry', path: '/', exact: true, component: IndexEntry },

  /* Public Pages */
  { name: 'SessionsPage', path: '/public', component: SessionsPage, exact: true },
  { name: 'SignInPage', path: '/public/sign-in', component: SignInPage },
  { name: 'SignUpPage', path: '/public/sign-up', component: SignUpPage },

  /* Administrator */
  { name: 'EventsPage', path: '/events', component: EventsPage, exact: true },
  { name: 'AddEventsPage', path: '/events/add', component: AddEventsPage },
  { name: 'GeneralInstitutePage', path: '/institute/general', component: GeneralInstitutePage },
  { name: 'EditCoordinatorPage', path: '/institute/edit-coordonator/:id', component: EditCoordinatorPage },
  { name: 'SessionsinstitutePage', path: '/institute/current-sessions', component: SessionsinstitutePage },
  { name: 'PrevSessionsinstitutePage', path: '/institute/previous-sessions', component: PrevSessionsinstitutePage },
  { name: 'TeachersInstitutePage', path: '/institute/teachers', component: TeachersInstitutePage },
  { name: 'StudentsInstitutePage', path: '/institute/students', component: StudentsInstitutePage },
  { name: 'StudentManagementPage', path: '/institute/student/management/:action', component: StudentManagementPage },
  { name: 'AnnouncementsInstitutePage', path: '/institute/announcements', component: AnnouncementsInstitutePage },

  { name: 'PersonalAccountPage', path: '/personal/my-account', component: PersonalAccountPage },
  { name: 'EditPersonalAccountPage', path: '/personal/edit/my-account', component: EditPersonalAccountPage },

  { name: 'AnnouncementsPage', path: '/announcements', component: AnnouncementsPage },

  { name: 'PlannedSessionsPage', path: '/sessions/planned', component: PlannedSessionsPage },
  { name: 'CurrentSessionsPage', path: '/sessions/current', component: CurrentSessionsPage },
  { name: 'ClosedSessionsPage', path: '/sessions/closed', component: ClosedSessionsPage },
  { name: 'SessionApplicationsPage', path: '/sessions/applications', component: SessionApplicationsPage },
  { name: 'AddSessionPage', path: '/sessions/management/:action', component: AddSessionPage },
];
