// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const Users = async () => {
//     // create a function that returns an array of users from userProfile table
//     const users = await prisma.userProfile.findMany();

//     console.log(users);

//     return (
//         <div>
//             <br />
//             <br />
//             <h1>This is the users page</h1>
//             <br />
//             <ul>
//                 {users.map((user) => (
//                     <li key={user.userId}>
//                         <p>Name: {user.name} {user.surname}</p>
//                         <p>Email: {user.email}</p>
//                         <p>Address: {user.address}</p>
//                         <br />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };


// export default Users;