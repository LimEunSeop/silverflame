-- CreateTable
CREATE TABLE "Code" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "descriptions" TEXT[],
    "code" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Code_pkey" PRIMARY KEY ("id")
);
