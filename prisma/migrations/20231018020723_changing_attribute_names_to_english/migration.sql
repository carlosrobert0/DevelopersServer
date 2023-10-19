/*
  Warnings:

  - You are about to drop the column `datanascimento` on the `developers` table. All the data in the column will be lost.
  - You are about to drop the column `idade` on the `developers` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `developers` table. All the data in the column will be lost.
  - You are about to drop the column `sexo` on the `developers` table. All the data in the column will be lost.
  - Added the required column `age` to the `developers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `developers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `developers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `developers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "developers" DROP COLUMN "datanascimento",
DROP COLUMN "idade",
DROP COLUMN "nome",
DROP COLUMN "sexo",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
