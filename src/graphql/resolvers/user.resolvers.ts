import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
	Query: {
		user: async (parent: any, args: any, contextValue: any, info: any) => {
			const user = await prisma.user.findMany(args.id);
			await prisma.$disconnect();
			return user;
		}
	},

	Mutation: {
		createUser: async (parent: any, args: any, contextValue: any, info: any) => {
			try {
				console.log(JSON.stringify(args))
				const user = await prisma.user.create({
					data: {
						name: args.name,
						email: args.email,
					},
				})
				console.log(user)
				await prisma.$disconnect();
				return true;
			} catch (err) {
				console.log(JSON.stringify(err));
			}
		},
	},

};
