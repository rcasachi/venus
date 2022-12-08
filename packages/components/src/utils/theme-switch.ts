// Switch:
// import { createCookie } from 'remix';

// // Create a cookie to track color scheme state
// export let colorSchemeCookie = createCookie('color-scheme');

// // Helper function to get the value of the color scheme cookie
// export const getColorSchemeToken = async (request: Request) =>
//   await colorSchemeCookie.parse(request.headers.get('Cookie'));

// export const getColorScheme = async (request: Request) => {
//   // Manually selected theme
//   const userSelectedColorScheme = await getColorSchemeToken(request);
//   // System preferred color scheme header
//   const systemPreferredColorScheme = request.headers.get(
//     'Sec-CH-Prefers-Color-Scheme'
//   );

//   // Return the manually selected theme
//   // or system preferred theme or default theme
//   return userSelectedColorScheme ?? systemPreferredColorScheme ?? 'light';
// };

// // Use:
// export const loader: LoaderFunction = async ({ request }) => ({
//   colorScheme: await getColorScheme(request),
// });

// Theme switcher:
// export const action: ActionFunction = async ({ request }) => {
//   const currentColorScheme = await getColorScheme(request);
//   const newColorScheme = currentColorScheme === 'light' ? 'dark' : 'light';

//   return redirect(request.url, {
//     headers: {
//       'Set-Cookie': await colorSchemeCookie.serialize(newColorScheme),
//     },
//   });
// };

// export default function Index() {
//   return (
//     <div>
//       <Form method="post">
//         <Button type="submit">Change Theme</Button>
//       </Form>
//     </div>
//   );
// }
