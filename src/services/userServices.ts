import { Product, Profile, Users } from "@prisma/client";
import db from "../lib/db";
import { ERROR_MESSAGE } from "../utils/constant/error";

export const getUserWithToken = async (id: string) => {
  return db.users.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      gender: true,
      profile: true,
      product: true
    },
  });
};

export const getUser = async (userId: string) => {
  return db.users.findFirst({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      gender: true,
      profile: true,
      product: true
    },
  });
};

export const insertUser = async (body: Users): Promise<Users> => {
  return await db.users.create({
    data: body,
  });
};

export const deleteUsers = async (userId: string): Promise<string> => {
  const existUser = await db.users.findFirst({
    where: {
      id: userId,
    },
  });

  if (!existUser) {
    throw new Error(ERROR_MESSAGE.DATA_NOT_FOUND);
  }

  await db.users.delete({
    where: {
      id: userId,
    },
  });

  return " Sukses delete user dengan id " + userId;
};

export const updateUser = async (
  userId: string,
  body: Users
): Promise<Users | Error> => {
  const existUser = await db.users.findFirst({
    where: {
      id: userId,
    },
  });

  if (!existUser) {
    throw new Error("User not found!!");
  }

  return db.users.update({
    where: {
      id: userId,
    },
    data: body,
  });
};

export const getSingleUser = async (condition: {
  [key: string]: string;
}): Promise<Users | null> => {
  return db.users.findFirst({
    where: condition,
  });
};
