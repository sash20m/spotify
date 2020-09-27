// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react';
// import { useRequest } from 'estafette';
// import { save, load } from 'react-cookies';
// import { routes } from 'routes';
// import { history } from 'libs/history';
// import { axiosHeadersUpdater } from 'libs/http/axios';
// import { users } from 'libs/http/api';
// import { Loader } from 'ui/atoms';

// // TDOO: export this from api/users
// interface Access {
//   email?: string;
//   id?: string;
//   username?: string;
//   is_superuser?: boolean;
//   code?: string;
//   detail?: string;
// }

// // TDOO: export this from api/users
// interface RefreshAccess {
//   access: string;
// }

// interface Props {
//   readonly logged: boolean;
//   readonly data: Access;
// }

// export const UserContext = React.createContext<Props>({ logged: false, data: {} });

// export const UserProvider = ({ children }: { children: React.ReactElement }): React.ReactElement => {
//   const [logged, setLogged] = React.useState<boolean>(false);
//   const { request, data, loading, errors } = useRequest<Access>({ data: {} });
//   const { request: requestRefresh, data: dataRefresh, loading: loadingRefresh } = useRequest<RefreshAccess>({
//     data: {},
//   });

//   const verifyUser = (token = load('jwt-token')): Promise<Access> => request(users.verify.action({ token }));

//   React.useEffect(() => {
//     const token = load('jwt-token');
//     if (token) {
//       verifyUser(token);
//     }

//     history.listen(() => {
//       if (history.location.search === '?logged=true') {
//         verifyUser();
//       }
//     });
//   }, []);

//   React.useEffect(() => {
//     if (data.id) {
//       setLogged(true);

//       if ([getRoute(routes, 'SignInPage'), getRoute(routes, 'SignUpPage')].includes(history.location.pathname)) {
//         history.push('/public');
//       }
//     }
//   }, [data]);

//   React.useEffect(() => {
//     if (errors?.code === 'token_not_valid') {
//       setLogged(false);

//       const refresh = load('jwt-refresh-token');

//       if (refresh) {
//         requestRefresh(users.refresh.action({ refresh }));
//       } else {
//         history.push(getRoute(routes, 'SignUpPage'));
//       }
//     }
//   }, [errors]);

//   React.useEffect(() => {
//     if (dataRefresh.access) {
//       save('jwt-token', dataRefresh.access, { path: '/' });

//       axiosHeadersUpdater();

//       verifyUser();
//     }
//   }, [dataRefresh]);

//   return (
//     <UserContext.Provider value={{ logged, data }}>
//       <Loader loading={loading || loadingRefresh} height="100vh" fixed>
//         {children}
//       </Loader>
//     </UserContext.Provider>
//   );
// };
