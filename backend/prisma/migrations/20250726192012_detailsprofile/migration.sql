-- CreateTable
CREATE TABLE "WorkHistory" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "startYear" INTEGER,
    "endYear" INTEGER,
    "constituency" TEXT,
    "state" TEXT,
    "politicianId" TEXT NOT NULL,

    CONSTRAINT "WorkHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElectionResult" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "electionType" TEXT NOT NULL,
    "constituency" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "party" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "totalVotes" INTEGER NOT NULL,
    "voteShare" DOUBLE PRECISION NOT NULL,
    "opponentName" TEXT NOT NULL,
    "victoryMargin" INTEGER NOT NULL,
    "politicianId" TEXT NOT NULL,

    CONSTRAINT "ElectionResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FamilyDetail" (
    "id" TEXT NOT NULL,
    "spouse" TEXT,
    "children" INTEGER,
    "fatherName" TEXT,
    "motherName" TEXT,
    "background" TEXT,
    "politicianId" TEXT NOT NULL,

    CONSTRAINT "FamilyDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetDetail" (
    "id" TEXT NOT NULL,
    "totalAssets" DOUBLE PRECISION NOT NULL,
    "movableAssets" DOUBLE PRECISION NOT NULL,
    "immovableAssets" DOUBLE PRECISION NOT NULL,
    "politicianId" TEXT NOT NULL,

    CONSTRAINT "AssetDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublicProfile" (
    "id" TEXT NOT NULL,
    "coreIdeology" TEXT NOT NULL,
    "visionStatement" TEXT NOT NULL,
    "publicPerception" TEXT NOT NULL,
    "keyStrengths" TEXT[],
    "focusAreas" TEXT[],
    "leadershipStyle" TEXT,
    "politicianId" TEXT NOT NULL,

    CONSTRAINT "PublicProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FamilyDetail_politicianId_key" ON "FamilyDetail"("politicianId");

-- CreateIndex
CREATE UNIQUE INDEX "AssetDetail_politicianId_key" ON "AssetDetail"("politicianId");

-- CreateIndex
CREATE UNIQUE INDEX "PublicProfile_politicianId_key" ON "PublicProfile"("politicianId");

-- AddForeignKey
ALTER TABLE "WorkHistory" ADD CONSTRAINT "WorkHistory_politicianId_fkey" FOREIGN KEY ("politicianId") REFERENCES "Politician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionResult" ADD CONSTRAINT "ElectionResult_politicianId_fkey" FOREIGN KEY ("politicianId") REFERENCES "Politician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyDetail" ADD CONSTRAINT "FamilyDetail_politicianId_fkey" FOREIGN KEY ("politicianId") REFERENCES "Politician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetDetail" ADD CONSTRAINT "AssetDetail_politicianId_fkey" FOREIGN KEY ("politicianId") REFERENCES "Politician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicProfile" ADD CONSTRAINT "PublicProfile_politicianId_fkey" FOREIGN KEY ("politicianId") REFERENCES "Politician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
