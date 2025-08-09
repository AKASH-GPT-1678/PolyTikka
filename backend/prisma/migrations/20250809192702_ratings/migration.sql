-- CreateTable
CREATE TABLE "public"."Rating" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "politicianId" TEXT NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Rating" ADD CONSTRAINT "Rating_politicianId_fkey" FOREIGN KEY ("politicianId") REFERENCES "public"."Politician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
