-- CreateTable
CREATE TABLE "review" (
    "review_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "email" TEXT,
    "age_group" TEXT,
    "trip_type" TEXT,
    "description" TEXT,
    "transport_mode" TEXT,
    "rating" INTEGER,
    "company_name" TEXT,
    "origin" TEXT,
    "destination" TEXT,
    "start_date" DATE,
    "end_date" DATE,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "review_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "sentiment" (
    "sentiment_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "score" DECIMAL,
    "label" TEXT,
    "summary" TEXT,
    "emotion_tone" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "review_id" UUID NOT NULL,

    CONSTRAINT "sentiment_pkey" PRIMARY KEY ("sentiment_id")
);

-- CreateTable
CREATE TABLE "actionable" (
    "actionable_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "title" TEXT,
    "description" TEXT,
    "priority" TEXT,
    "department" TEXT,
    "category" TEXT,
    "source_aspect" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "review_id" UUID NOT NULL,

    CONSTRAINT "actionable_pkey" PRIMARY KEY ("actionable_id")
);

-- CreateTable
CREATE TABLE "recommendation" (
    "recommendation_id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "title" TEXT,
    "description" TEXT,
    "impact" TEXT,
    "target_area" TEXT,
    "effort_level" TEXT,
    "data_driven" BOOLEAN,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "review_id" UUID NOT NULL,

    CONSTRAINT "recommendation_pkey" PRIMARY KEY ("recommendation_id")
);

-- CreateIndex
CREATE INDEX "idx_review_id" ON "review"("review_id");

-- CreateIndex
CREATE UNIQUE INDEX "sentiment_review_id_key" ON "sentiment"("review_id");

-- CreateIndex
CREATE INDEX "idx_sentiment_review_id" ON "sentiment"("review_id");

-- CreateIndex
CREATE INDEX "idx_actionable_review_id" ON "actionable"("review_id");

-- CreateIndex
CREATE INDEX "idx_recommendation_review_id" ON "recommendation"("review_id");

-- AddForeignKey
ALTER TABLE "sentiment" ADD CONSTRAINT "sentiment_review_id_fkey" FOREIGN KEY ("review_id") REFERENCES "review"("review_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "actionable" ADD CONSTRAINT "actionable_review_id_fkey" FOREIGN KEY ("review_id") REFERENCES "review"("review_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recommendation" ADD CONSTRAINT "recommendation_review_id_fkey" FOREIGN KEY ("review_id") REFERENCES "review"("review_id") ON DELETE CASCADE ON UPDATE NO ACTION;
