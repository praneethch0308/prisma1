import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res= await prisma.user.update({
        where: {email:username},
        data:{
            firstName,
            lastName
        }
    })
  console.log(res)
}

updateUser('praneeth@gmail.com',{
    firstName:'sai praneeth',
    lastName: 'ch'
})