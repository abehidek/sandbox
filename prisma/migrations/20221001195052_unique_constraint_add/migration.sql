/*
  Warnings:

  - A unique constraint covering the columns `[articleId,userId]` on the table `ArticleUpdoots` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ArticleUpdoots_articleId_userId_key" ON "ArticleUpdoots"("articleId", "userId");
