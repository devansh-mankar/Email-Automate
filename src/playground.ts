import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "devanshmankar09@gmail.com",
    firstName: "Devansh",
    lastName: "Mankar",
  },
});

console.log("done");
